<template>
  <div id="admin-tutorials" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規チュートリアル"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="width: 140px" class="dropdown"
                  v-model="setType"
                  :options="types"/>
        <button @click="pushToTutorialPart()" class="tool-button">チュートリアルパーツ</button>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">タイプ</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">タイトル</div>
<!--          <div class="sheet-cell value flex align-center">オンライン</div>-->
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:getTutorialsByType}, {method:'post', endpoints: ['tutorials', 'tutorials'], state: 'tutorials'})"
                 :list="getTutorialsByType" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div
            @click="open(element)"
            class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span
              class="text block">{{ element.order_id ? element.order_id : index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center"><span class="text block">{{
                element.type
              }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="text block">{{
                element.title
              }}</span></div>
<!--            <div class="sheet-cell sheet-cell value flex align-center">-->
<!--              <span class="text block">-->
<!--                <i v-if="!element.active" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>-->
<!--                <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>-->
<!--              </span>-->
<!--            </div>-->
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="ツートーリアルフォーム" overflow>
      <Form v-model="d"
            v-model:dr="dr"
            close-after
            :form="form"
            :query="{}"
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

import {computed, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {form} from "@/components/form/templates/FormTutorials";
import useHelpers from "@/common/useHelpers";
import APIexecutor from "@/services/APIexecutor";
import useUtils from "@/common/useUtils";
import {Tutorial} from "@/types/Tutorial";

const {get} = APIexecutor()
const {store, progress, user, companies, company, users, content, tutorials} = useStore()
const {submit, remove, submitRowReorder} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {findAndUpdateFormElement} = useUtils()
const route = useRoute()
const router = useRouter()
const rm = ref<boolean>(false)
const type = ref<string>("パネル")
const getTutorialsByType = ref<Tutorial[]>([])
const types: string[] = ["パネル", "アプリ", "API"]

const setType = computed<string>({
  set(val) {
    type.value = val
    getTutorialsByType.value = tutorials.value.filter(item => {
      return item.type === val
    }) || []
  },
  get(): string {
    return type.value
  }
})

function pushToTutorialPart(): void {
  const part: string = type.value === "パネル" ? "panel" : type.value === "アプリ" ? "app" : "api"
  router.push({name: "TutorialImages", query: {tutorial: part}})
}

function create(): void {
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ['tutorials', 'tutorials'],
    state: "tutorials",
  })
}

function open(element: any): void {
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ['tutorials/' + element.id, 'tutorials'],
    state: "tutorials",
  }, element)
}

function removeItem() {
  content.value = true
  remove("tutorials/" + data.value?.id).then(() => {
    get("tutorials", "tutorials").then((res) => {
      dr.value = false
      d.value = false
      content.value = false
    })
  })
}

watch(() => tutorials.value, val => {
  getTutorialsByType.value = val.filter(item => {
    return item.type === type.value
  }) || []
})


onMounted((): void => {
  getTutorialsByType.value = tutorials.value.filter(item => {
    return item.type === type.value
  }) || []
})


</script>
<style>
#admin-tutorials button.tool-button {
  height: 30px;
  font-size: .7rem;
  padding: 0 10px;
  width: auto;
  margin-left: 14px;
  transition: .3s;
}

#admin-tutorials button.tool-button:hover {
  background-color: #edeae9;
  color: #1a1f21;
}
</style>
