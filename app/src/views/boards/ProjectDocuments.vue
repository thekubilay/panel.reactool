<template>
  <div id="project_documents" class="panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="書類を追加"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="margin-left: 0; width: 150px" class="dropdown" v-model="folder" :options="folders" optionLabel="name" optionValue="id" placeholder="フォルダー選択" />
        <Button @click="toFolders()" type="button" class="tool-button" label="フォルダー作成へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div>
          <div class="sheet-cell value sheet-cell-long flex align-center">書類名</div>
          <div class="sheet-cell value flex align-center">タイプ</div>
          <div class="sheet-cell value flex align-center">サイズ</div>
          <div class="sheet-cell value flex align-center">書類ページ</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:documents}, {method:'post', endpoints: ['app/documents', 'project_details/'+project.id], state: 'project'})"
                 :list="documents" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell img flex align-center"><Icon v-if="element.file" svg="pdf" /></div>
            <div class="sheet-cell value sheet-cell-long flex align-center">
              <span class="text block">{{ element.name }}</span>
            </div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.type }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ formatBytes(element.size) }}</span></div>
            <div @click.stop="showPdf(element)" class="sheet-cell value flex align-center"><span v-if="element.file" style="color: blue; text-decoration: underline " class="text block">書類をみる</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="書類フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :remove="rm"
                 :query="{project: project.id}"
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
import draggable from "vuedraggable";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";


import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {onMounted, reactive, ref, watch} from "vue";
import {ProjectRoutes} from "@/types/Routes";
import {Document, DocumentFolder} from "@/types/Document";
import {Form} from "@/types/Form";
import {form as FormDocument} from "@/components/form/templates/FormDocument"
import {form as FormDocumentFolder} from "@/components/form/templates/FormDocumentFolder"
import {useRoute, useRouter} from "vue-router";
import useUtils from "@/common/useUtils";

const route = useRoute()
const router = useRouter()
const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {formatBytes} = useUtils()
const {payload, content, progress, project} = useStore()

const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const folder = ref<number|null>(0)
const folders = ref<DocumentFolder[]>([{name:"フォルダーなし", id: 0}])
const documents = ref<Document[]>([])
const reform = ref<Form[][]>(FormDocument)
const query = ref<any>()


onMounted((): void => {
  folders.value = [...[{name:"フォルダーなし", id: 0}], ...project.value?.document_folders]
  documents.value = project.value?.documents.filter(item => {
    return item.document_folder === null
  })
})


function showPdf(element: { file:string }){
  if (element.file) {
  window.open(element.file)
  }
}

function updateDropdownInput(frm:Form[][]){
  frm.forEach(item => {
    item[0].elements[0].model = 0
    item[0].elements[0].options = [...[{name:"NO フォルダー", id: 0}], ...project.value?.document_folders]
  })
}


function toFolders(){
  router.push({name:"ProjectDocumentsFolders", params:{cid:route.params.cid, dynid:route.params.dynid}})
}


function create() {
  rm.value = false
  updateDropdownInput(FormDocument)
  reform.value = FormDocument
  useToggle({method: 'post', endpoints: ['app/documents', 'project_details/' + project.value?.id], state: "project"})
}


function open(element: ProjectRoutes) {
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/documents/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem() {
  loading.value = true
  remove('app/documents/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規書類",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/documents", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/documents/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  documents.value = val?.documents.filter(item => {
    if (folder.value !== 0) {
      return item.document_folder === folder.value
    }
    else {
      return !item.document_folder
    }
  })
})
watch(() => folder.value, val => {
  documents.value = project.value?.documents.filter(item => {
    if (folder.value !== 0) {
      return item.document_folder === folder.value
    }
    else {
      return !item.document_folder
    }
  })
})

</script>

<style>
#project_documents {
  height: calc(100% - 54px);
}
</style>
