<template>
  <div id="users" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規ユーザー"
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
          <div class="sheet-cell num flex align-center">#</div>
          <div class="sheet-cell value flex align-center">ユーザー名</div>
          <div class="sheet-cell value flex align-center">姓</div>
          <div class="sheet-cell value flex align-center">名</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">メールアドレス</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="(element, idx) in users" :key="element.id"
             @click="open(element)"
             class="sheet-row flex align-center relative pointer">
          <div class="sheet-cell num flex align-center"><span class="text block">{{ idx + 1 }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.username }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.last_name }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.first_name }}</span></div>
          <div class="sheet-cell sheet-cell-long value flex align-center"><span
            class="text block">{{ element.email }}</span></div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="ユーザーフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="reform"
                 :query="{company: route.params.cid}"
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
import Dialog from "@/components/dialog/Dialog.vue"
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import {form as userCreateForm} from "@/components/form/templates/FormUserCreate"
import {form as userUpdateForm} from "@/components/form/templates/FormUserUpdate"

import {computed, onMounted, reactive, ref, watch} from "vue";
import {CreateOrUpdateUser, User} from "@/types/User";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import {Form} from "@/types/Form";
import useHelpers from "@/common/useHelpers";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import BarTool from "@/components/bars/BarTool.vue";
import APIexecutor from "@/services/APIexecutor";
import validation from "@/components/form/validation";

const {get} = APIexecutor()
const route = useRoute()
const router = useRouter()
const {store, progress, user, companies, company, users, content} = useStore()
const {d, dr, data, useToggle} = useHelpers()
const {submit, remove} = useFormRequestBuilder()
const reform = ref<Form[][]>(userCreateForm)
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
  rm.value = false
  reform.value = userCreateForm
  reform.value[0][0].elements[1].model = new Date()
  useToggle({
    method: "post",
    endpoints: ['users', 'companies/' + route.params.cid],
    state: "company",
  })
}

function open(element: User): void {
  rm.value = true
  reform.value = userUpdateForm
  useToggle({
    method: "patch",
    endpoints: ['users/' + element.id, 'companies/' + route.params.cid],
    state: "company",
  }, element)
}


function removeItem() {
  content.value = true
  remove("users/" + data.value?.id).then(() => {
    get("companies/" + route.params.cid, "company").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}
</script>
