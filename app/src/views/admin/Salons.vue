<template>
  <div id="salons" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規サロン"
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
          <div class="sheet-cell value flex align-center">サロン名</div>
        </div>
      </div>
      <Draggable tag="div"
                 @end="submitRowReorder({value:company.salons}, {method:'post', endpoints: ['salons', 'companies/'+route.params.cid], state: 'company'})"
                 :list="company.salons" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)" class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span
              class="text block">{{ element.order_id ? element.order_id : index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="text block">{{
                element.name
              }}</span></div>
          </div>
        </template>
      </Draggable>
    </div>

    <Dialog v-model="d" title="サロンフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="form"
                 :query="query"
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
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Draggable from "vuedraggable";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "../../components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import BarTool from "@/components/bars/BarTool.vue";

import {computed, reactive, ref} from "vue";
import {Salon, SalonLight} from "@/types/Salon";
import {form} from "@/components/form/templates/FormSalon";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import APIexecutor from "@/services/APIexecutor";


const {get} = APIexecutor()
const router = useRouter()
const route = useRoute()
const {d, dr, data, useToggle} = useHelpers()
const {store, progress, salons, companies, company, content} = useStore()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const rm = ref<boolean>(false)
const query = reactive<SalonLight>({
  id: null,
  name: null,
  company: parseInt(route.params.cid+"") || null,
})

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
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ['salons', 'companies/' + route.params.cid],
    state: "company",
  })
}

function open(element: Salon): void {
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ['salons/' + element.id, 'companies/' + route.params.cid],
    state: "company",
  }, element)
}

function removeItem() {
  content.value = true
  remove("salons/" + data.value?.id).then(() => {
    get("companies/" + route.params.cid, "company").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}

</script>
