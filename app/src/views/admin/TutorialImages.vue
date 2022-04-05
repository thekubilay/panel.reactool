<template>
  <div id="admin-tutorials" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規パーツ"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="width: 100px" class="dropdown"
                  v-model="setType"
                  :options="types"/>
        <Dropdown v-if="getTutorialsByType.length"
                  style="width: 200px" class="dropdown"
                  v-model="setTutorialPart"
                  option-label="title"
                  option-value="id"
                  :options="getTutorialsByType"/>
        <button @click="pushToTutorialPart()" class="tool-button">チュートリアル</button>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x" v-if="tutorial">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">タイプ</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">タイトル</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:tutorial.tutorial_images}, {method:'post', endpoints: ['tutorial_images', 'tutorials'], state: 'tutorials'})"
                 :list="tutorial.tutorial_images" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span
              class="text block">{{ element.order_id ? element.order_id : index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center"><span class="text block">{{ type }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="text block">{{
                element.title
              }}</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="チュートリアルフォーム" overflow>
      <Form v-model="d"
            v-model:dr="dr"
            close-after
            :form="form"
            :onload="progress+'%'"
            :query="{tutorials:tutorial.id}"
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
import {form} from "@/components/form/templates/FormTutorialImages";
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
const tutorial = ref<Tutorial>() as Tutorial

const setType = computed<string>({
  set(val) {
    type.value = val
    getTutorialsByType.value = tutorials.value.filter(item => {
      return item.type === val
    }) || []
    if (getTutorialsByType.value.length) tutorial.value = getTutorialsByType.value[0]
    else tutorial.value = {} as Tutorial
  },
  get(): string {
    return type.value
  }
})

const setTutorialPart = computed<string>({
  set(val: number) {
    tutorial.value = getTutorialsByType.value.find(item => {
      return item.id === val
    }) as Tutorial
  },
  get(): string {
    return tutorial.value.id
  }
})

function pushToTutorialPart(): void {
  router.push({name: "Tutorials"})
}

function create(): void {
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ['tutorial_images', 'tutorials'],
    state: "tutorials",
  })
}

function open(element: any): void {
  rm.value = true
  useToggle({
    method: "patch",
    endpoints: ['tutorial_images/' + element.id, 'tutorials'],
    state: "tutorials",
  }, element)
}

function removeItem() {
  content.value = true
  remove("tutorial_images/" + data.value?.id).then(() => {
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
  if (getTutorialsByType.value.length) tutorial.value = getTutorialsByType.value[0]

})


onMounted((): void => {
  getTutorialsByType.value = tutorials.value.filter(item => {
    return item.type === type.value
  }) || []
  tutorial.value = getTutorialsByType.value[0]
})


</script>
