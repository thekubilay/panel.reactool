<template>
  <div id="admin-app-routes" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規会社"
                @click="create()"/>
      </div>
    </BarTool>


    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">コンポーネント</div>
          <div class="sheet-cell value flex align-center">ネーム</div>
          <div class="sheet-cell value flex align-center">タイトル</div>
          <div class="sheet-cell value flex align-center">URLパス</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:routes}, {method:'post', endpoints: ['routes/', 'routes/'], state: 'routes'})"
                 :list="routes" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)" class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ element.order_id ? element.order_id : index+1  }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center"><span class="text block">{{ element.component }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.name }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.title }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.path }}</span></div>
          </div>
        </template>
      </draggable>
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

  </div>
</template>

<script lang="ts" setup>
import Draggable from "vuedraggable";
import Button from "primevue/button";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "../../components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import BarTool from "@/components/bars/BarTool.vue";


import {computed, reactive, ref} from "vue";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {useRoute} from "vue-router";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {Routes} from "@/types/Routes";
import {form} from "@/components/form/templates/FormRoute";



const {get} = APIexecutor()
const route = useRoute()
const {payload, content, user, companies} = useStore()
const {d, dr, data, useToggle, } = useHelpers()
const {submit, remove, submitRowReorder} = useFormRequestBuilder()
const rm = ref<boolean>(false)
const query = reactive<Routes>({
  id: null,
  order_id: null,
  component: null,
  name: null,
  path: null,
  title: null,
})

function create(){
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ["routes", "routes"],
    state: "routes"
  })
}

function open(element: { id: number }){
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ["routes/"+element.id, "routes"],
    state: "routes"
  }, element)
}

function removeItem(){
  content.value = true
  payload.value = {
    method: "get",
    endpoints: ["routes", "routes"],
    state: "routes"
  }
  remove("routes/"+data.value?.id).then(() => {
    get("routes", "routes").then(() => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}



</script>
