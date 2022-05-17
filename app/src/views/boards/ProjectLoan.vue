<template>
  <div id="project_loan" class="relative panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="金利を追加"
                @click="create()"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="openLoanSettings(project.loan_settings)"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell sheet-cell-long flex align-center">銀行</div>
          <div class="sheet-cell value flex align-center">金利</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:bank_types}, {method:'post', endpoints: ['app/bank_types', 'project_details/'+project.id], state: 'project'})"
                 :list="bank_types" class="sb-container ss-container" handle=".handle" item-key="id">
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
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.rate }}</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="ローンフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="reform"
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
import {form} from "@/components/form/templates/FormBuildingBankTypes";
import {form as FormLoanSettings} from "@/components/form/templates/FormLoanSettings";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";

import {reactive, ref, watch} from "vue";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import APIexecutor from "@/services/APIexecutor";
import {LoanBankType} from "@/types/LoanBankType";
import {LoanSetting} from "@/types/LoanSetting";
import {Form} from "@/types/Form";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()

const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const bank_types = ref<LoanBankType[]>(project.value?.building.bank_types || [])
const reform = ref<Form[][]>([])

function create() {
  reform.value = form
  rm.value = false
  useToggle({method: 'post', endpoints: ['app/bank_types', 'project_details/' + project.value?.id], state: "project"})
}

function open(element: ProjectRoutes) {
  reform.value = form
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/bank_types/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function openLoanSettings(element: LoanSetting) {
  reform.value = FormLoanSettings
  rm.value = false
  useToggle({
    method: 'patch',
    endpoints: ['app/loan_settings/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem() {
  loading.value = true
  remove('app/bank_types/' + data.value?.id).then(() => {
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
        endpoints: ["app/bank_types", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: bank_types.value ? bank_types.value.length + 1 : 1,
        building: project.value?.building?.id || null,
        name: data.value.name,
        rate: data.value.rate,
      }
      save("app/bank_types", obj).then(() => {
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
      remove("app/bank_types/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  bank_types.value = val?.building.bank_types || []
})

</script>
<style>
#project_routes {
  height: calc(100% - 54px);
}
</style>
