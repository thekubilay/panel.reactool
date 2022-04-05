<template>
  <div id="project_routes" class="relative panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規施設"
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
          <div class="sheet-cell value flex align-center">パネルネーム</div>
          <div class="sheet-cell value flex align-center">タイトル</div>
          <div class="sheet-cell value flex align-center">URLパス</div>
          <div class="sheet-cell value flex align-center">アクティブ</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:routes}, {method:'post', endpoints: ['app/routes', 'project_details/'+project.id], state: 'project'})"
                 :list="routes" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell sheet-cell value flex align-center"><span class="text block">{{
                element.component
              }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.name }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.panel_name }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.title }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.path }}</span></div>
            <div class="sheet-cell value flex align-center">
              <span class="context block">
                <i v-if="element.active" class="pi pi-circle-fill" style="font-size: 1rem; color: #2ecc71"></i>
                <i v-else class="pi pi-circle-fill" style="font-size: 1rem; color: #e74c3c"></i>
              </span>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="ルートフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="form"
                 :data="data"
                 :remove="rm"
                 :query="query"
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
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue"
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";

import {ProjectRoutes} from "@/types/Routes";
import {form} from "@/components/form/templates/FormRoute";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";

import {reactive, ref, watch} from "vue";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import APIexecutor from "@/services/APIexecutor";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()

const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const routes = ref<ProjectRoutes[]>(project.value?.routes || [])
const query = reactive<ProjectRoutes>({
  id: null,
  project: project.value?.id || null,
  order_id: null,
  component: null,
  name: null,
  panel_name: null,
  path: null,
  title: null,
  active: false
})

function create() {
  rm.value = false
  useToggle({method: 'post', endpoints: ['app/routes', 'project_details/' + project.value?.id], state: "project"})
}

function open(element: ProjectRoutes) {
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/routes/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem() {
  loading.value = true
  remove('app/routes/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規ルート",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/routes", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: routes.value ? routes.value.length + 1 : 1,
        project: project.value?.id || null,
        component: data.value.component,
        name: data.value.name,
        path: data.value.path,
        title: data.value.title,
        active: data.value.active
      }
      save("app/routes", obj).then(() => {
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
      remove("app/routes/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  routes.value = val?.routes || []
})

</script>
<style>
#project_routes {
  height: calc(100% - 54px);
}
</style>
