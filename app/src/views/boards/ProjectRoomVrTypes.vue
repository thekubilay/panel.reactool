<template>
  <div id="project_room_vr" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="VRプラン追加"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Button style="margin-left: 5px" @click="toPlans()" type="button" class="tool-button" label="VR一覧へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div>
          <div class="sheet-cell value sheet-cell-long flex align-center">間取りタイプ</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="(element, i) in types"
             :key="element.id"
             @click="open(element)"
             @contextmenu="isRCOn($event, element)"
             aria-haspopup="true"
             aria-controls="plan_rc_menu"
             class="sheet-row flex align-center list-group-item relative pointer">
          <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center"><span class="text block">{{ i + 1 }}</span></div>
          <div class="sheet-cell img flex align-center">
            <Icon v-if="element.image" svg="image"/>
          </div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.plan_type }}</span></div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="間取りタイプフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="form"
                 :data="data"
                 :remove="rm"
                 :loading="loading"
                 :query="{project:project.id}"
                 :submit="submit">
        <ContextImagesThumbnailContainer containerId="plan_type_image_input"
                                         :images="images"
                                         :remove="removeImage"/>
      </FormQuery>

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
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import Icon from "@/components/icons/Icon.vue";

import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {RoomVr, RoomVrFloor} from "@/types/RoomVr";
import {form} from "@/components/form/templates/FormRoomVr"

const router = useRouter()
const route = useRoute()
const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, images, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const types = ref<RoomVr[]>([])
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const rightClickMenu = ref<DropdownMenu[]>([
  {
    icon: "pi pi-plus",
    label: "新規画像",
    command: () => {

    }
  },
  {
    icon: "pi pi-copy",
    label: "行を複製する",
    command: () => {

    }
  },
  {
    icon: "pi pi-trash",
    label: "行を削除する",
    command: () => {

    }
  },])


onMounted((): void => {
  types.value = project.value?.room_vr || []
})

function create(): void {
  rm.value = false
  images.value = []
  form[0][1].elements[0].required = true
  useToggle({method: 'post', endpoints: ['app/room_vrs', 'project_details/' + project.value?.id], state: "project"})
}

function open(element: RoomVr): void {
  rm.value = true
  images.value = element.image ? [{image:element.image}] : []
  form[0][1].elements[0].required = false
  useToggle({
    method: 'patch',
    endpoints: ['app/room_vrs/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeImage(id: number | null): void {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/room_vrs/" + data.value.id, "project_details/" + project.value?.id],
    state: "project"
  }
  submit({image: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}


function removeItem() {
  loading.value = true
  remove('app/room_vrs/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const toPlans = (): void => {
  router.push({name: "ProjectRoomVrFloors", params: {cid: route.params.cid, dynid: route.params.dynid}})
}

watch(() => project.value?.room_vr, val => {
  types.value = val || []
})

</script>

<style>
#project_room_vr {
  height: calc(100% - 54px);
}
</style>
