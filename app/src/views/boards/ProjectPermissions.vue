<template>
  <div id="project_permissions" class="relative panel-board">
    <Spinner v-model="content"/>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">コード名</div>
          <div class="sheet-cell value flex align-center">ネーム</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="(element, i) in permissions" @click="open(element)" :key="i"
             class="sheet-row flex align-center list-group-item relative pointer">
          <div class="sheet-cell num flex align-center"><span class="text block">{{ i + 1 }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.code_name }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.name }}</span></div>
          <div class="sheet-cell value flex align-center">
            <span class="context block">
              <i v-if="element.active" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
              <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="権限フォーム">
      <FormQuery v-model="d"
                 close-after
                 :form="reform"
                 :data="data"
                 :query="{}"
                 :submit="submit"/>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from "@/components/dialog/Dialog.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import Spinner from "@/components/loading/Spinner.vue";

import {form} from "@/components/form/templates/FormProjectPermission";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";

import {reactive, ref, watch} from "vue";
import APIexecutor from "@/services/APIexecutor";
import {ProjectPermission} from "@/types/ProjectPermission";
import useUtils from "@/common/useUtils";
import {Form} from "@/types/Form";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {findAndUpdateFormElement} = useUtils()
const {payload, content, progress, project} = useStore()
const reform = ref<Form[][]>([])

const loading = ref<boolean>(false)
const permissions = ref<ProjectPermission[]>(project.value?.permissions || [])


function open(element: ProjectPermission) {
  reform.value = findAndUpdateFormElement(form, "code_name", "disabled", true)
  reform.value = findAndUpdateFormElement(reform.value, "name", "disabled", true)
  reform.value = findAndUpdateFormElement(reform.value, "description", "disabled", true)

  useToggle({
    method: 'patch',
    endpoints: ['app/permissions/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}
watch(() => project.value, val => {
  permissions.value = val?.permissions || []
})

</script>
<style>
#project_permissions {
  height: 100%;
}
</style>
