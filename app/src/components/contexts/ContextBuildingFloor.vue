<template>
  <div class="outer-wrap column-1">
    <draggable tag="div"
               @end="submitRowReorder({value:floors}, {method:'post', endpoints: ['app/building_floors', 'project_details/'+projectId], state: 'project'})"
               :list="floors" class="floor-row" handle=".handle" item-key="id">
      <template #item="{ element, index }">
        <div class="sheet-row flex align-center list-group-item relative">
          <div @contextmenu="isRCOn($event, element)"
               class="handle flex-column align-center justify-center grab" aria-haspopup="true"
               aria-controls="floor_rc_menu">
            <Menu id="rc_menu" ref="rcm" class="has-final-action rc" :model="rightClickMenu" :popup="true"/>
            {{ floors.length - index }}F
            <i class="pi pi-bars"></i>
          </div>
          <ContextBuildingFloorRoom v-if="element.rooms.length" :projectId="projectId" :floor-id="element.id"
                                        :rooms="element.rooms"/>
          <button v-else @click="open(element.id)" class="add-rooms flex align-center justify-center pointer">
            <i class="pi pi-plus flex align-center justify-center"></i>
          </button>
        </div>
      </template>
    </draggable>

    <Dialog v-model="d" title="会社フォーム">
      <FormNested v-model="d"
                  v-model:form="reform"
                  topProgress
                  :loading="loading">
        <template v-slot:actions>
          <div class="action-wrapper flex align-center">
            <button @click="d=false" class="flex align-center justify-center cancel">中止</button>
            <button @click="create()" class="flex align-center justify-center submit-or-next">登録</button>
          </div>
        </template>
      </FormNested>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>

import draggable from "vuedraggable";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue";
import FormNested from "@/components/form/FormNested.vue";
import ContextBuildingFloorRoom from "@/components/contexts/ContextBuildingFloorRoom.vue";

import useHelpers from "@/common/useHelpers";
import {PropType, ref} from "vue";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {Form} from "@/types/Form";
import {Floor, Room} from "@/types/Building";


const props = defineProps({
  projectId: Number as PropType<number>,
  floors: Array as PropType<Floor[]>,
})

const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const loading = ref<boolean>(false)
const reform = ref<Form[][]>([
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputNumber",
          db_column_name: "room_count",
          type: "text",
          model: 1,
          label: "ルーム数",
          hint: "*フロアの中で作成したいルーム数",
          placeholder: "ー",
          required: false,
          id: "",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2"],
        },
      ],
    },
  ]
])
const rightClickMenu = ref<DropdownMenu[]>([
  {
    icon: "pi pi-plus",
    label: "新規ルーム",
    command: () => {
      open()
    }
  },
  {
    icon: "pi pi-copy",
    label: '階を複製する',
    command: () => {
      content.value = true
      const q: Floor = {
        id: null,
        building: data.value.building,
        order_id: null,
      }
      payload.value = {
        method: "post",
        endpoints: ["app/building_floors", "project_details/" + props.projectId],
        state: "project",
      }
      submit(q, null, "object").then((response: any) => {
        const rooms: Room[] = data.value.rooms.map((item: { building_floor: any; id: null; image: null; thumbnail: null; }) => {
          item.building_floor = response.id
          item.id = null
          item.image = null
          item.thumbnail = null
          return item
        }) || []
        payload.value = {
          method: "post",
          endpoints: ["app/building_floor_rooms", "project_details/" + props.projectId],
          state: "project"
        }
        let obj: { duplicate: object[] } = {duplicate: rooms}
        submit(obj, null, "object").then(() => {
          content.value = false
        })
        if (!obj.duplicate.length){ content.value = false}
      })
    }
  },
  {
    icon: "pi pi-trash",
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/building_floors/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])


function open(id:null|number=null){
  payload.value = {
    method: "post",
    endpoints: ["app/building_floor_rooms", "project_details/" + props.projectId],
    state: "project",
  }
  if (id) data.value = {id:id};
  d.value = true
}

function create(){ // create room
  loading.value = false
  const count: number = reform.value[0][0].elements[0].model
  let rooms: { create: object[] } = {create: []}
  for (let i = 0; i < count; i++) {
    const query: object = {building_floor: data.value?.id}
    rooms.create.push(query)
  }

  submit(rooms, null, "object").then(() => {
    d.value = false
  })
}

</script>

<style>
.b_spreadsheet-wrapper .floor-row .sheet-row {
  margin-bottom: 14px;
  height: 164px;
}

.b_spreadsheet-wrapper .floor-row .add-rooms {
  height: 100%;
  width: 100%;
}

.b_spreadsheet-wrapper .floor-row .add-rooms:hover {
  border: 2px dashed rgba(0, 0, 0, 0.07);
  background-size: auto auto;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.05) 10px, rgba(0, 0, 0, 0.05) 13px);
}

.b_spreadsheet-wrapper .floor-row .add-rooms > i {
  opacity: 0;
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  color: #FFFFFF;
  background-color: #1D4ED8;
}

.b_spreadsheet-wrapper .floor-row .add-rooms:hover > i {
  opacity: 1;
}

.b_spreadsheet-wrapper .floor-row .sheet-row .handle {
  min-width: 70px;
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Shippori Mincho', serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-right: 14px;
  background-color: #1a1f21;
  color: #FFFFFF;
}

.b_spreadsheet-wrapper .floor-row .sheet-row .handle > i {
  color: #d9d9d9;
}
</style>
