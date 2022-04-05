<template>
  <div id="admin-projects" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規プロジェクト"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="width: 140px" class="dropdown"
                  v-model="setCompany"
                  option-label="name"
                  option-value="id"
                  :options="companies"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">ID</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">プロジェクト名</div>
          <div class="sheet-cell value flex align-center">オンライン</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:company.projects}, {method:'post', endpoints: ['projects', 'companies/'+route.params.cid], state: 'company'})"
                 :list="company.projects" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div
            @click="open(element)"
            class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span
              class="text block">{{ element.order_id ? element.order_id : index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center"><span class="text block">{{ element.id }}</span>
            </div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="text block">{{
                element.name
              }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center">
              <span class="text block">
                <i v-if="!element.archive" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
                <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
              </span>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="プロジェクトフォーム">
      <Form v-model="d"
            v-model:dr="dr"
            close-after
            :form="reform"
            :query="{company:route.params.cid}"
            :data="data"
            :remove="rm"
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
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Draggable from "vuedraggable";
import Dialog from "@/components/dialog/Dialog.vue"
import Form from "../../components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import BarTool from "@/components/bars/BarTool.vue";

import {computed, onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {create as form} from "@/components/form/templates/FormProject";
import {Form as FormInterface} from "@/types/Form"
import useHelpers from "@/common/useHelpers";
import APIexecutor from "@/services/APIexecutor";
import useUtils from "@/common/useUtils";

const {get} = APIexecutor()
const {store, progress, user, companies, company, users, content} = useStore()
const {submit, remove, submitRowReorder} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {findAndUpdateFormElement} = useUtils()
const route = useRoute()
const router = useRouter()
const reform = ref<FormInterface[][]>(form)
const rm = ref<boolean>(false)

const setCompany = computed({
  set(val: number) {
    content.value = true
    router.push({params: {cid: val}})
    get("companies/" + val, "company").then(() => {
      content.value = false
    })
  },
  get(): any {
    return company.value?.id
  }
})


function create(): void {
  reform.value = findAndUpdateFormElement(form, "salon", "options", company.value?.salons)
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ['projects', 'companies/' + route.params.cid],
    state: "company",
  })
}

function open(element: any): void {
  reform.value = findAndUpdateFormElement(form, "salon", "options", company.value?.salons)
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ['projects/' + element.id, 'companies/' + route.params.cid],
    state: "company",
  }, element)
}

function removeItem() {
  content.value = true
  remove("projects/" + data.value?.id).then(() => {
    get("companies/" + route.params.cid, "company").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}


</script>
