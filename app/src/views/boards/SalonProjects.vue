<template>
  <div id="salon-projects" class="panel-board">
    <Spinner v-model="content"/>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">ID</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">プロジェクト名</div>
          <div class="sheet-cell value flex align-center">アクティブ</div>
          <div class="sheet-cell value flex align-center">PIN</div>
          <div class="sheet-cell value flex align-center">ロゴ</div>
        </div>
      </div>

      <Draggable tag="div"
                 @end="submitRowReorder({value:GET_SALON_PROJECTS}, {method:'post', endpoints: ['projects', 'projects'], state: 'projects'})"
                 :list="GET_SALON_PROJECTS" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div
            @click="useToggle({method:'patch', endpoints: ['projects/'+element.id, 'projects'], state: 'projects'}, element)"
            class="sheet-row flex align-center list-group-item relative pointer">
            <div class="sheet-cell handle flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center">{{ element.order_id ? element.order_id : index + 1 }}</div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.id }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center long-cell"><span
              class="text block">{{ element.name }}</span></div>
            <div class="sheet-cell value flex align-center">
              <span class="text block">
                <i v-if="!element.archive" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
                <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
              </span>
            </div>
            <div class="sheet-cell value flex align-center">
              <span class="context block">
                <Icon v-if="element.pin" svg="image"></Icon>
              </span>
            </div>
            <div class="sheet-cell value flex align-center">
              <span class="context block">
                <Icon v-if="element.logo" svg="image"></Icon>
              </span>
            </div>
          </div>
        </template>
      </Draggable>
    </div>

    <Dialog v-model="d" :title="data?.name.replaceAll('<br>', '')">
      <FormQuery v-model="d"
                 v-model:activeTab="activeTab"
                 topProgress
                 :tabs="tabs"
                 :progress="progress"
                 :form="form"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :submit="submit">
        <ContextImagesThumbnailContainer v-if="activeTab === 2 || activeTab === 3"
                                         :containerId="containerId"
                                         :images="images"
                                         :remove="removeImage"/>
      </FormQuery>

    </Dialog>
  </div>
</template>

<script lang="ts" setup>

import {ref, watch} from "vue";
import {update as form} from "@/components/form/templates/FormProject"
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";

import Draggable from "vuedraggable";
import Spinner from "@/components/loading/Spinner.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import Icon from "@/components/icons/Icon.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";


const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, images, data, useToggle} = useHelpers()
const {payload, content, progress, GET_SALON_PROJECTS} = useStore()
const loading = ref<boolean>(false)
const activeTab = ref<number>(0);
const containerId = ref<string>("pin_input")
const tabs = ref<string[]>(['内容', '設定', '地図印', 'ロゴ画像'])
const query = ref({})

function removeImage() {
  loading.value = true
  payload.value = {method: "patch", endpoints: ["projects/" + data.value.id, "projects"], state: "projects"}
  if (activeTab.value === 1) submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
  else if (activeTab.value === 2) submit({logo: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}

watch(() => GET_SALON_PROJECTS.value, projects => {
  projects.forEach(project => {
    if (data.value && data.value.id === project.id) {
      data.value = project
      if (activeTab.value === 1) {
        images.value = project.pin ? [{image: project.pin}] : []
      } else if (activeTab.value === 2) {
        images.value = project.logo ? [{image: project.logo}] : []
      }
    }
  })
})

watch(() => d.value, val => {
  if (!val) activeTab.value = 0
})

watch(() => activeTab.value, val => {
  if (val === 0) {
    images.value = []
    query.value = {
      id: null,
      order_id: null,
      name: data.value?.name,
      context: data.value?.context,
      address: data.value?.address,
      archive: data.value?.archive,
      token_on: data.value?.token_on,
      salon_view: data.value?.salon_view,
      legacy: data.value?.legacy
    }
  } else if (val === 1) {
    images.value = []
    query.value = {salon: null, salon_view: true, archive: false}
  } else if (val === 2) {
    query.value = {
      logo: null,
      logo_width: null,
      logo_height: null,
      logo_place: 3,
      archive: data.value?.archive,
      token_on: data.value?.token_on,
      salon_view: data.value?.salon_view,
      legacy: data.value?.legacy
    }
    images.value = data.value.pin ? [{image: data.value.pin}] : []
    containerId.value = "pin_input"
  } else if (val == 3) {
    query.value = {
      pin: null,
      pin_width: data.value?.pin_width,
      pin_height: data.value?.pin_height,
      archive: data.value?.archive,
      token_on: data.value?.token_on,
      salon_view: data.value?.salon_view,
      legacy: data.value?.legacy
    }
    images.value = data.value.logo ? [{image: data.value.logo}] : []
    containerId.value = "logo_input"
  }
})
</script>
