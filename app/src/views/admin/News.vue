<template>
  <div id="admin-app-news" class="admin-board">
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
          <div class="sheet-cell value flex align-center">ニュース種類</div>
          <div class="sheet-cell sheet-cell-long flex align-center">タイトル</div>
          <div class="sheet-cell sheet-cell-long flex align-center">公開日</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="element in news"
             @click="open(element)" class="sheet-row flex align-center list-group-item relative pointer">
          <div class="sheet-cell num flex align-center"></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.type }}</span></div>
          <div class="sheet-cell sheet-cell-long flex align-center"><span class="text block">{{ element.title }}</span>
          </div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.created_at }}</span></div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="ニュースフォーム">
      <Spinner v-model="loading" />
      <div id="form">
        <form action="" @submit.prevent="false">
          <div class="row flex justify-space-between"><!--v-if-->
            <div class="flex-column column-1 relative">
              <span class="label flex">ニュース種類<span class="required flex align-start">*必須</span></span>
              <Dropdown class="cfec" v-model="form.type.model" :options="options"/>
            </div>
          </div>
          <div class="row flex justify-space-between"><!--v-if-->
            <div class="flex-column column-1 relative">
              <span class="label flex">タイトル<span class="required flex align-start">*必須</span></span>
              <InputText class="cfec" :class="{error:form.title.error}" v-model="form.title.model"/>
            </div>
          </div>
          <div class="row flex justify-space-between"><!--v-if-->
            <div class="flex-column column-1 relative">
              <span class="label flex">内容<span class="required flex align-start">*必須</span></span>
              <Editor :class="{error:form.title.error}" v-model="form.content.model"/>
            </div>
          </div>
          <div class="action-wrapper flex align-center">
            <button class="flex align-center justify-center cancel">中止</button><!--v-if-->
            <button @click="dr=true" v-if="rm" class="flex align-center justify-center remove">削除</button>
            <button @click="submit()" class="flex align-center justify-center submit-or-next">登録</button>
          </div>
        </form>
      </div>

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
import InputText from "primevue/inputtext";
import Editor from "primevue/editor";
import Button from "primevue/button";
import Dialog from "@/components/dialog/Dialog.vue"
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import BarTool from "@/components/bars/BarTool.vue";


import {computed, reactive, ref, watchEffect} from "vue";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {useRoute} from "vue-router";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useUtils from "@/common/useUtils";
import Spinner from "@/components/loading/Spinner.vue";


const {get} = APIexecutor()
const route = useRoute()
const {payload, content, user, news} = useStore()
const {d, dr, data, useToggle,} = useHelpers()
const {remove, submitAsFormObject} = useFormRequestBuilder()
const {findAndUpdateFormElement} = useUtils()
const rm = ref<boolean>(false)
const form = reactive({
  type: {required: true, model: "パブリック", error: false,},
  title: {required: true, model: null, error: false,},
  content: {required: true, model: null, error: false},
})
const options = ref<string[]>(["会社用", "パブリック"])
const loading = ref<boolean>(false)

function create() {
  rm.value = false
  form.type.model = "パブリック"
  form.title.model = null
  form.content.model = null
  useToggle({
    method: "post",
    endpoints: ["news", "news"],
    state: "news"
  })
}

function open(element: { id: number }) {
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ["news/" + element.id, "news"],
    state: "news"
  }, element)
  form.type.model = element.type
  form.title.model = element.title
  form.content.model = element.content
}

function removeItem() {
  content.value = true
  payload.value = {
    method: "get",
    endpoints: ["news", "news"],
    state: "news"
  }
  remove("news/" + data.value?.id).then(() => {
    get("news", "news").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}

function submit(): void {
  loading.value = true
  let errors: string[] = [];
  const query = {type: form.type.model, title:form.title.model, content:form.content.model}
  const keys: string[] = Object.keys(form)
  keys.forEach(key => {
    if(form[key].model === "" || !form[key].model) {
      form[key].error = true
      errors.push(key)
    }
  })
  if (!errors.length) submitAsFormObject(query).then(() => get("news", "news")).then(() => {
    get("users/current", "user").then(() => {
      loading.value = false
      d.value = false
      dr.value = false
    })
  })
}


</script>
<style>
#admin-app-news {

}
#admin-app-news .rf-dialog .p-editor-container {
  height: 200px;
}
#admin-app-news .rf-dialog .action-wrapper {
  margin-top: 70px;
}
</style>
