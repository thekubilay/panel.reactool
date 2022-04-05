<template>
  <div class="mrw">
    <main class="column-1 am">
      <BarAppAdmin />
      <div class="outer-contents flex">
        <SidebarAppAdmin />
        <div class="inner-contents relative">
          <Spinner v-model="content"/>
          <BarTool v-if="route.name === 'Admin'" class="justify-space-between">
            <div class="part-wrap">
              <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規会社"
                      @click="create()"/>
            </div>
          </BarTool>

          <div v-if="route.name === 'Admin'" class="spreadsheet-wrapper overflow-x">
            <div class="sh-container ss-container">
              <div class="sheet-row sheet-row-header flex align-center">
                <div class="sheet-cell num flex align-center">#</div>
                <div class="sheet-cell value flex align-center">会社名</div>
              </div>
            </div>
            <div class="sb-container ss-container">
              <div v-for="(element, idx) in companies" :key="element.id"
                   @click="open(element)"
                   class="sheet-row flex align-center relative pointer">
                <div class="sheet-cell num flex align-center"><span class="text block">{{ idx + 1 }}</span></div>
                <div class="sheet-cell value flex align-center"><span class="text block">{{ element.name }}</span></div>
              </div>
            </div>
          </div>

          <Dialog v-model="d" title="会社フォーム">
            <FormQuery v-model="d"
                       v-model:dr="dr"
                       close-after
                       :form="form"
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

          <router-view class="contents column-1" v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component"/>
            </transition>
          </router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import BarAppAdmin from "../../components/bars/BarAppAdmin.vue";
import SidebarAppAdmin from "@/components/sidebars/SidebarAppAdmin.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";

import useStore from "@/helpers/useStore";
import useHelpers from "@/common/useHelpers";
import {useRoute} from "vue-router";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {form} from "@/components/form/templates/FormCompany"
import {onMounted, ref} from "vue";
import APIexecutor from "@/services/APIexecutor";


const {get} = APIexecutor()
const route = useRoute()
const {payload, content, user, companies} = useStore()
const {d, dr, data, useToggle, } = useHelpers()
const {submit, remove} = useFormRequestBuilder()
const rm = ref<boolean>(false)


onMounted((): void => {
  if (user.value.company !== route.params.cid){
    content.value = true
    get("companies/"+route.params.cid, "company").then(() => {
      content.value = false
    })
  }
})

function create(){
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ["companies", "companies"],
    state: "companies"
  })
}

function open(element: { id: number }){
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ["companies/"+element.id, "companies"],
    state: "companies"
  }, element)
}

function removeItem(){
  content.value = true
  payload.value = {
    method: "get",
    endpoints: ["companies", "companies"],
    state: "companies"
  }
  remove("companies/"+data.value?.id).then(() => {
    get("companies", "companies").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}

</script>
<style>
.am {
  height: 100vh !important;
}
.am .outer-contents {
  width: 100%;
  height: calc(100% - 40px);
}
.am .outer-contents > .inner-contents {
  width: 100%;
  height: 100%;
}
</style>
