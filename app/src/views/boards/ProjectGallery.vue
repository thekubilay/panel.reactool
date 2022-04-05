<template>
  <div id="project_gallery" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規画像"
                @click="create()"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">画像名</div>
          <div class="sheet-cell value flex align-center">タイプ</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:gallery}, {method:'post', endpoints: ['app/galleries', 'project_details/'+project.id], state: 'project'})"
                 :list="gallery" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @contextmenu="isRCOn($event, element)"
               @click="open(element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell value sheet-cell-long flex align-center">
              <Icon svg="image"/>
              <span class="text block" style="padding-bottom: 2px; width: calc(100% - 30px); margin-left: 5px">
                {{ element.image.split("/", 6)[5].split(".")[0] }}
              </span>
            </div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.type }}</span></div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="ギャラリーフォーム">
      <FormQuery v-model="d"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="form"
                 :query="{project:project.id}"
                 :submit="submit"/>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";


import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {Gallery} from "@/types/Gallery";
import {ref, watch} from "vue";
import FormQuery from "@/components/form/FormQuery.vue";
import {form} from "@/components/form/templates/FormGallery"


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const gallery = ref<Gallery[]>(project.value?.gallery || [])


function create() {
  useToggle({method: 'post', endpoints: ['app/galleries', 'project_details/' + project.value?.id], state: "project"})
}
function open(element:Gallery) {
  useToggle({method: 'patch', endpoints: ['app/galleries/'+element.id, 'project_details/' + project.value?.id], state: "project"})
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規画像",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/galleries", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/galleries/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  gallery.value = val?.gallery || []
})

</script>

<style>
#project_gallery {
  height: calc(100% - 54px);
}
</style>
