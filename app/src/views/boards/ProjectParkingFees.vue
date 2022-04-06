<template>
  <div id="project_parking_fees" class="relative panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="駐車場を追加"
                @click="create()"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell sheet-cell-long flex align-center">駐車場名</div>
          <div class="sheet-cell value flex align-center">駐車場費</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:parking_fees}, {method:'post', endpoints: ['app/parking_fees', 'project_details/'+project.id], state: 'project'})"
                 :list="parking_fees" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell-long flex align-center"><span class="text block">{{ element.name }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.price }}</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="駐車場費フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="form"
                 :data="data"
                 :remove="rm"
                 :query="{building:project.building.id}"
                 :submit="submit"/>


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
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";

import {ProjectRoutes} from "@/types/Routes";
import {form} from "@/components/form/templates/FormBuildingParkingFee";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";

import {reactive, ref, watch} from "vue";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import APIexecutor from "@/services/APIexecutor";
import {ParkingFee} from "@/types/Building";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()

const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const parking_fees = ref<ParkingFee[]>(project.value?.building.parking_fees || [])

function create() {
  rm.value = false
  useToggle({method: 'post', endpoints: ['app/parking_fees', 'project_details/' + project.value?.id], state: "project"})
}

function open(element: ProjectRoutes) {
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/parking_fees/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem() {
  loading.value = true
  remove('app/parking_fees/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規ルート",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/parking_fees", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: parking_fees.value ? parking_fees.value.length + 1 : 1,
        building: project.value?.building?.id || null,
        name: data.value.name,
        price: data.value.price,
      }
      save("app/parking_fees", obj).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/parking_fees/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  parking_fees.value = val?.building.parking_fees || []
})

</script>
<style>
#project_parking_fees {
  height: calc(100% - 54px);
}
</style>
