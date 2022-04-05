<template>
  <div id="admin-app-routes" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規権限"
                @click="create()"/>
      </div>
    </BarTool>


    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell num flex align-center">#</div>
          <div class="sheet-cell value flex align-center">権限コード名</div>
          <div class="sheet-cell sheet-cell-long flex align-center">権限名</div>
          <div class="sheet-cell sheet-cell-long flex align-center">権限内容</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="element in projectPermissions"
             @click="open(element)" class="sheet-row flex align-center list-group-item relative pointer">
          <div class="sheet-cell num flex align-center"></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.code_name }}</span></div>
          <div class="sheet-cell sheet-cell-long flex align-center"><span class="text block">{{ element.name }}</span>
          </div>
          <div class="sheet-cell sheet-cell-long flex align-center"><span
            class="text block">{{ element.description }}</span></div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="権限フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="reform"
                 :data="data"
                 :remove="rm"
                 :query="{}"
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
import Draggable from "vuedraggable";
import Button from "primevue/button";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "../../components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import BarTool from "@/components/bars/BarTool.vue";


import {computed, reactive, ref, watchEffect} from "vue";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {useRoute} from "vue-router";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {Routes} from "@/types/Routes";
import {form} from "@/components/form/templates/FormProjectPermission";
import useHelpers from "@/common/useHelpers";
import useUtils from "@/common/useUtils";
import {Form} from "@/types/Form";


const {get} = APIexecutor()
const route = useRoute()
const {payload, content, user, projectPermissions} = useStore()
const {d, dr, data, useToggle,} = useHelpers()
const {submit, remove, submitRowReorder} = useFormRequestBuilder()
const {findAndUpdateFormElement} = useUtils()
const reform = ref<Form[][]>(form)
const rm = ref<boolean>(false)
const query = reactive<Routes>({
  id: null,
  order_id: null,
  component: null,
  name: null,
  path: null,
  title: null,
})

function create() {
  rm.value = false
  reform.value = form
  reform.value = findAndUpdateFormElement(reform.value, "active", "model", false)
  console.log(reform.value)
  useToggle({
    method: "post",
    endpoints: ["permissions/projects", "permissions/projects"],
    state: "projectPermissions"
  })
}

function open(element: { id: number }) {
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ["permissions/projects/" + element.id, "permissions/projects"],
    state: "projectPermissions"
  }, element)
}

function removeItem() {
  content.value = true
  payload.value = {
    method: "get",
    endpoints: ["permissions/projects", "permissions/projects"],
    state: "projectPermissions"
  }
  remove("permissions/projects/" + data.value?.id).then(() => {
    get("permissions/projects", "projectPermissions").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}


</script>
