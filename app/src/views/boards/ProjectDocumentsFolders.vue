<template>
  <div id="project_folders" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規フォルダー"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Button @click="toDocuments()" type="button" class="tool-button" label="書類一覧へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">フォルダー名</div>
          <div class="sheet-cell value flex align-center">書類数</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:folders}, {method:'post', endpoints: ['app/document_folders', 'project_details/'+project.id], state: 'project'})"
                 :list="folders" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               class="sheet-row flex align-center list-group-item relative pointer"
               aria-haspopup="true"
               aria-controls="plan_rc_menu">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center">{{ index + 1 }}</div>
            <div class="sheet-cell value flex align-center"><span class="context block">{{ element.name }}</span></div>
            <div class="sheet-cell num flex align-center"><span class="context block">{{ element.documents.length }}個</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="フォルダーフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="form"
                 :data="data"
                 :loading="loading"
                 :query="{project:project.id}"
                 :remove="rm"
                 :submit="submit">
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
import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";


import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import {form} from "@/components/form/templates/FormDocumentFolder";
import {MapPlace} from "@/types/MapPlace";
import APIexecutor from "@/services/APIexecutor";
import useHelpers from "@/common/useHelpers";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useRightClickHandler from "@/helpers/useRightClickHandler";


const router = useRouter()
const route = useRoute()
const {get, save} = APIexecutor()
const {d, dr, images, data, useToggle} = useHelpers()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, project, progress, onload, content} = useStore()
const folders = ref<any>([])
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)

onMounted((): void => {
  folders.value = project.value?.document_folders
})

function toDocuments() {
  router.push({name: "ProjectDocuments", params: {cid: route.params.cid, dynid: route.params.dynid}})
}


function create() {
  rm.value = false
  useToggle({
    method: "post",
    endpoints: ["app/document_folders", "project_details/" + project.value?.id],
    state: "project",
  })
}


function open(element: MapPlace) {
  rm.value = true
  if (!rcmOpened.value) {
    images.value = element.pin ? [{image: element.pin}] : []
    useToggle({
      method: 'patch',
      endpoints: ["app/document_folders/" + element.id, "project_details/" + project.value?.id],
      state: 'project'
    }, element)
  }
}

function removeItem() {
  loading.value = true
  remove("app/document_folders/" + data.value?.id).then(() => {
    get("project_details/" + project.value?.id, "project").then(() => {
      loading.value = false
      dr.value = false
      d.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規フォルダー",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/document_folders", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        id: null,
        order_id: folders.value ? folders.value.length + 1 : 1,
        project: project.value ? project.value?.id : null,
        name: data.value.name,
        color: data.value.color,
        pin: null,
      }
      save("app/document_folders", obj).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/document_folders/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])


watch(() => project.value, val => {
  folders.value = val?.document_folders
})

</script>
<style>
#project_folders {
  height: calc(100% - 54px);
}
</style>
