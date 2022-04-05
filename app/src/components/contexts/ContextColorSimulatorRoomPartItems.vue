<template>
  <div class="room-part-items-wrapper">
    <div class="sheet-row sheet-row_header flex align-center">
      <div class="short handle sheet-cell sheet-cell-header flex align-center"></div>
      <div class="short sheet-cell sheet-cell-header flex align-center">PART<br>画像</div>
      <div class="short sheet-cell sheet-cell-header flex align-center">カラー<br>画像</div>
      <div class="sheet-cell sheet-cell-header flex align-center">カラー</div>
      <div class="short sheet-cell sheet-cell-header flex align-center">EXTRA</div>
      <div class="short sheet-cell sheet-cell-header flex align-center">モデル</div>
    </div>
    <draggable tag="div"
               @end="submitRowReorder({value:partItems}, {method:'post', endpoints: ['app/color_simulator_room_part_items', 'project_details/'+project.id+'/'], state: 'project'})"
               v-if="partItems.length"
               :list="partItems" class="sheet-row"
               handle=".handle" item-key="id">
      <template #item="{ element, index }">
        <div class="part-item-box flex align-center pointer"
             @click="open(element)"
             @contextmenu="isRCOn($event, element)"
             aria-haspopup="true"
             aria-controls="plan_rc_menu">
          <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
          <div class="short sheet-cell handle grab flex align-center"><i class="pi pi-bars"></i></div>
          <div class="short sheet-cell sheet-value-cell flex align-center">
            <Icon v-if="element.part_image" svg="image"/>
          </div>
          <div class="short sheet-cell sheet-value-cell flex align-center">
            <Icon v-if="element.color_image" svg="image"/>
          </div>
          <div class="sheet-cell sheet-value-cell flex align-center">
            <span class="block value">{{ element.color }}</span></div>
          <div class="short sheet-cell sheet-value-cell flex align-center">
            <i v-if="element.option" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
            <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
          </div>
          <div class="short sheet-cell sheet-value-cell flex align-center">
            <i v-if="element.model_room" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
            <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
          </div>
        </div>
      </template>
    </draggable>

    <button @click="create()"
            class="create-item flex align-center justify-center"
            :class="{mt:partItems.length === 1}">新規アイテム
    </button>

    <Dialog v-model="d" title="カラーアイテムフォーム" overflow>
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="reform"
                 :data="data"
                 :query="{color_simulator_room_part: color_simulator_room_part}"
                 :submit="submit"
                 :remove="rm">
      </FormQuery>
      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem()" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "@/components/form/FormQuery.vue";
import Icon from "@/components/icons/Icon.vue";

import {PropType, reactive, ref} from "vue";
import {form} from "@/components/form/templates/FormColorSimulatorRoomPartItem"
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {Gallery} from "@/types/Gallery";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import useUtils from "@/common/useUtils";
import {Form} from "@/types/Form";



const props = defineProps({
  color_simulator_room_part: {type: Number as PropType<number>, default: 0},
  partItems: {type: Array as PropType<ColorSimulatorRoomPartItem[]>, default: []}
})

const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, images, useToggle} = useHelpers()
const {findAndUpdateFormElement} = useUtils()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const links = ref<Gallery[] | undefined>(project.value?.links)
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const reform = ref<Form[][]>(form)

function create() {
  reform.value = findAndUpdateFormElement(form, "option", "model", false)
  reform.value = findAndUpdateFormElement(reform.value, "model_room", "model", false)
  useToggle({
    method: 'post',
    endpoints: ['app/color_simulator_room_part_items', 'project_details/' + project.value?.id],
    state: "project"
  })
}

function open(element: any) {
  // images.value = element.image ? [{image: element.image}]: []
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/color_simulator_room_part_items/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem() {
  loading.value = true
  remove('app/color_simulator_room_part_items/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    icon: "pi pi-plus",
    label: "新規アイテム",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/color_simulator_room_part_items", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  // {
  //   icon: "pi pi-copy",
  //   label: "行を複製する",
  //   command: () => {
  //     content.value = true
  //     const obj: object = {
  //       order_id: props.partItems ? props.partItems.length + 1 : 1,
  //       color_simulator_room_part: props.color_simulator_room_part,
  //       name: data.value.name,
  //     }
  //     save("app/color_simulator_room_part_items", obj).then(() => {
  //       get("project_details/" + project.value?.id, "project").then(() => {
  //         content.value = false
  //       })
  //     })
  //   }
  // },
  {
    icon: "pi pi-trash",
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/color_simulator_room_part_items/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])


</script>
<style>
.room-part-items-wrapper {
  height: calc(100% - 44px);
}

.room-part-items-wrapper button.create-item {
  height: 34px;
  width: calc(100% - 10px);
  margin: 10px auto 0 auto;
  background-color: #edeae9;
  border: 1px solid #FFFFFF;
}

.room-part-items-wrapper button.create-item.mt {
  margin-top: 0;
}

.room-part-items-wrapper button.create-item:hover {
  background-color: rgba(237, 234, 233, 0.48);
  border-color: #edeae9;
}


.room-part-items-wrapper > .sheet-row {
  width: 100%;
  min-height: 40px;
  height: auto;
}

.room-part-items-wrapper > .sheet-row.sheet-row_header {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #f1f1f1;
}

.room-part-items-wrapper .part-item-box {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
}

.room-part-items-wrapper .part-item-box:hover {
  background-color: #f9f8f8;
}

.room-part-items-wrapper .part-item-box .sheet-cell,
.room-part-items-wrapper > .sheet-row .sheet-cell {
  width: calc(100% - 275px);
  border-right: 1px solid #f1f1f1;
  padding-left: 5px;
  font-size: .7rem;
  height: 100%;
  min-height: 30px;
}

.room-part-items-wrapper > .sheet-row .sheet-cell.handle,
.room-part-items-wrapper > .sheet-row .sheet-cell:last-child {
  border-right: 0;
}

.room-part-items-wrapper > .sheet-row.sheet-row_header .sheet-cell {
  color: #969595;
}

.room-part-items-wrapper > .sheet-row .sheet-cell.handle {
  padding-left: 14px;
}

.room-part-items-wrapper > .sheet-row .sheet-cell.short {
  width: 55px;
  max-width: 55px;
}

.room-part-items-wrapper > .sheet-row .sheet-cell.sheet-value-cell span.value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
