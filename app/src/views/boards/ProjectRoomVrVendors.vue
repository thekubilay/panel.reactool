<template>
  <div id="project_room_vr_vendors" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="ベンダーVRを追加"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Button style="margin-left: 5px" @click="toPlans()" type="button" class="tool-button" label="VR一覧へ"/>
        <Button style="margin-left: 5px" @click="toTypes()" type="button" class="tool-button" label="間取りタイプ一覧へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-y">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell sheet-value-cell value flex align-center">タイトル</div>
          <div class="sheet-cell sheet-value-cell value flex align-center">サブタイトル</div>
          <div class="sheet-cell sheet-value-cell flex align-center">URL</div>
          <div class="sheet-cell sheet-value-cell flex align-center">画像</div>
        </div>
      </div>
      <Draggable tag="div"
                 @end="submitRowReorder({value:vendors}, {method:'post', endpoints: ['app/room_vr_vendors', 'project_details/'+project.id], state: 'project'})"
                 :list="vendors" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center">{{ index+1 }}</div>
            <div class="sheet-cell sheet-value-cell flex align-center">{{ element.title }}</div>
            <div class="sheet-cell sheet-value-cell flex align-center">{{ element.sub_title }}</div>
            <div class="sheet-cell sheet-value-cell flex align-center">{{ element.url }}</div>
            <div class="sheet-cell sheet-value-cell flex align-center">
              <span v-if="element.image" class="text flex">
                <Icon style="margin-right: 5px" svg="image"></Icon>
              </span>
            </div>
          </div>
        </template>
      </Draggable>
    </div>

    <Dialog v-model="d" title="ベンダーVRフォーム">
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

import Draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
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
import {RoomVrVendor} from "@/types/RoomVrVendor";
import {form} from "@/components/form/templates/FormRoomVrVendor"

const router = useRouter()
const route = useRoute()
const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, images, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const vendors = ref<RoomVrVendor[]>([])
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
  vendors.value = project.value?.room_vr_vendors || []
})

function create(): void {
  rm.value = false
  images.value = []
  useToggle({
    method: 'post',
    endpoints: ['app/room_vr_vendors', 'project_details/' + project.value?.id],
    state: "project"
  })
}

function open(element: RoomVrVendor): void {
  rm.value = true
  images.value = element.image ? [{image: element.image}] : []
  useToggle({
    method: 'patch',
    endpoints: ['app/room_vr_vendors/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeImage(id: number | null): void {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/room_vr_vendors/" + data.value.id, "project_details/" + project.value?.id],
    state: "project"
  }
  submit({image: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}


function removeItem() {
  loading.value = true
  remove('app/room_vr_vendors/' + data.value?.id).then(() => {
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
const toTypes = (): void => {
  router.push({name: "ProjectRoomVrTypes", params: {cid: route.params.cid, dynid: route.params.dynid}})
}

watch(() => project.value?.room_vr_vendors, val => {
  vendors.value = val || []
})

</script>

<style>
#project_room_vr_vendors {
  height: calc(100% - 54px);
}
</style>
