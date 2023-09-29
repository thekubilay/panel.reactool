<template>
  <div class="in_outer-wrapper column-1 relative">
    <draggable tag="div"
               @end="submitRowReorder({value:rooms}, {method:'post', endpoints: ['app/building_floor_rooms', 'project_details/'+projectId], state: 'project'})"
               :list="rooms" class="cell-wrapper flex" handle=".cell-handle" item-key="id">
      <template #item="{ element, index }">
        <div @contextmenu="isRCOn($event, element)"
             class="sheet-cell flex align-center list-group-item relative pointer"
             aria-haspopup="true"
             aria-controls="rc_menu">
          <Menu id="rc_menu" ref="rcm" class="has-final-action rc" :model="items" :popup="true"/>

          <div class="cell-handle flex-column align-center justify-center grab"><i class="pi pi-bars"></i></div>
          <div class="cell-content pointer"
               @click="open(element)"
               :class="{sold:element.status === '完売済' || element.status === '成約済',
                      sell: element.status === '販売中',
                      stop: element.status === '商談中',
                      next: element.status === '次期分譲'}">
            <div v-if="!element.sub" class="header flex align-center justify-center">
              <span v-if="element.type && element.number" class="block">{{ element.type }} {{
                  element.number
                }} 号室</span>
              <Icon v-if="element.thumbnail" svg="image" class="has-image"/>
            </div>
            <div v-if="!element.sub" class="body flex-column align-center justify-center">
              <div class="b_context b_context-1 flex-column align-center justify-center">
                <span class="block">{{ getMenuSelectedMenu(parseInt(element.menu)) }}</span>
                <span class="block" v-html="element.plan"></span>
              </div>
              <div class="b_context b_context-2 flex align-center justify-center column-1"
                   :class="{'no-border': !element.status}">
                <div v-if="element.status === '販売中'" class="flex align-end">
                  <span v-if="element.price" class="block number-price-man">{{ element.price }}</span>
                  <span v-if="element.price" class='man'>万円</span>
                </div>
                <span v-else class="block status">{{ element.status }}</span>
              </div>
            </div>

            <div v-else class="sub-content flex align-center justify-center column-1 text-center" v-html="element.sub_content"></div>
          </div>
        </div>
      </template>
    </draggable>

    <Dialog v-model="d" title="ルームフォーム" overflow>
      <FormQuery v-model="d"
                 close-after
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :query="{building_floor: props.floorId}"
                 :submit="submit"
                 :remove="rm">

        <ContextImagesThumbnailContainer containerId="image_input"
                                         :images="images"
                                         :remove="removeImage"/>
      </FormQuery>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, PropType, reactive, ref, watch} from "vue";
import draggable from "vuedraggable";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue";
import {Room} from "@/types/Building";
import FormQuery from "@/components/form/FormQuery.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import Icon from "@/components/icons/Icon.vue";


import useStore from "@/helpers/useStore";
import {Form} from "@/types/Form";
import {form} from "@/components/form/templates/FormBuildingFloorRoom"
import useRightClickHandler from "@/helpers/useRightClickHandler";
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import {PlanFieldOption} from "@/types/Plans";

const props = defineProps({
  projectId: Number as PropType<number>,
  floorId: {type: Number as PropType<number>, default: null},
  rooms: Array as PropType<Room[]>,
})

const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, images, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, project, content, progress} = useStore()
const reform = ref<Form[][]>(form)
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const menus = ref<PlanFieldOption[]>([])

const items = ref([
  {
    icon: "pi pi-copy",
    label: "ルームを複製する",
    command: () => {
      payload.value = {
        method: "post",
        endpoints: ["app/building_floor_rooms", "project_details/" + props.projectId],
        state: "project"
      }
      let el: Room = JSON.parse(JSON.stringify(data.value))
      let room: { duplicate: object[] } = {duplicate: [el]}
      submit(room, null, "object").then(() => {
        content.value = false
      })
    }
  },
  {
    icon: "pi pi-trash",
    label: 'ルームを削除する',
    command: () => {
      content.value = true
      remove("app/building_floor_rooms/" + data.value?.id).then(() => {
        get("project_details/" + props.projectId, "project").then(() => {
          content.value = false
        })
      })
    }
  },
])

//
function open(element: Room): void {
  images.value = element.image ? [{image: element.image}] : []
  project.value?.plan_fields.forEach(item => {
    if (item.plan_field_options.length && item.name === "メニュー") {
      const parsed: PlanFieldOption[] = JSON.parse(JSON.stringify(item.plan_field_options))
      const options: PlanFieldOption[] = parsed.map((item:any) => {
        item.id = item.id+""
        return item
      })
      reform.value[0][3].elements[1].model = element.menu
      reform.value[0][3].elements[1].options = options
    }
  })
  useToggle({
    method: 'patch',
    endpoints: ['app/building_floor_rooms/' + element.id, 'project_details/' + props.projectId],
    state: "project",
  }, element)
}


function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ['app/building_floor_rooms/' + data.value.id, 'project_details/' + props.projectId],
    state: "project"
  }

  submit({image: null, thumbnail: null}, null).then(() => {
    loading.value = false
    images.value = []
  })
}

function removeItem() {
  loading.value = true
  remove('app/building_floor_rooms/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + props.projectId, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

function getMenuSelectedMenu(id:number): string {
  const m: PlanFieldOption = menus.value.find(item => {
    return item.id === id
  }) as PlanFieldOption
  if (m) return m.name || ""
  else return ""
}

onMounted((): void => {
  project.value?.plan_fields.forEach(item => {
    if (item.plan_field_options.length && item.name === "メニュー") {
      menus.value = item.plan_field_options
    }
  })
})

</script>

<style>
.floor-row .in_outer-wrapper,
.floor-row .cell-wrapper {
  height: 100%;
}

.floor-row .cell-wrapper > .sheet-cell {
  margin-right: 10px;
  min-width: 164px;
  background-color: #FFFFFF;
  height: 100%;
  border: 1px solid #f1f1f1;
}

.floor-row .cell-wrapper > .sheet-cell:hover {
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}

.floor-row .cell-wrapper > .sheet-cell .cell-handle {
  height: 100%;
  min-width: 30px;
  background-color: #f1f1f1;
}

.floor-row .cell-wrapper > .sheet-cell .cell-handle > i {
  color: #969595;
}

.floor-row .cell-wrapper > .sheet-cell .cell-handle:hover > i {
  color: #1a1f21;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content {
  height: 100%;
  width: 100%;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .header {
  height: 30px;
  font-size: .8rem;
  color: #FFFFFF;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .header .has-image {
  position: absolute;
  right: 5px;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .body {
  height: calc(100% - 30px);
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .sub-content {
  height: 100%;
  background-color: #f5f6fa;
  color: #3d3d3d;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.sell > .header {
  background-color: #25292c;
  color: #FFFFFF;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.stop > .header {
  background-color: rgba(37, 41, 44, 0.6);
  color: #edeae9;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.next > .header {
  background-color: rgba(59, 59, 152, 1);
  color: #edeae9;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.sell > .body {
  background-color: #2f3640;
  color: #FFFFFF;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.sold > .header {
  background-color: rgba(150, 149, 149, 0.5);
  color: #FFFFFF;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.sold > .body {
  background-color: rgba(220, 221, 225, 0.8);
  color: #969595;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.stop > .body {
  background-color: rgba(37, 41, 44, 0.4);
  color: #edeae9;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.next > .body {
  background-color: rgba(59, 59, 152, 0.84);
  color: #edeae9;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .body .b_context-1 {
  height: 60%;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .body .b_context-2 {
  height: 40%;
  font-size: 1.6rem;
  border-top: 1px solid #edeae9;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .body .b_context-2.no-border {
  border: 0;
}


.floor-row .cell-wrapper > .sheet-cell .cell-content.sold > .body .b_context-1 {
  height: 60%;
  display: none;
}

.floor-row .cell-wrapper > .sheet-cell .cell-content.sold > .body .b_context-2 {
  height: 100%;
  padding-bottom: 10px;
}


.floor-row .cell-wrapper > .sheet-cell .cell-content > .body .b_context-2 span.number-price-man span.man {

}

.floor-row .cell-wrapper > .sheet-cell .cell-content > .body .b_context-2 span.man {
  margin-left: 5px;
  font-size: .8rem;
  padding-bottom: 10px;
}
</style>
