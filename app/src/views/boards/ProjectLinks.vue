<template>
  <div id="project_links" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="リンクを追加"
                @click="create()"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">画像</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">サイト名</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">リンク</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:links}, {method:'post', endpoints: ['app/links', 'project_details/'+project.id], state: 'project'})"
                 :list="links" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell value flex align-center">
              <img style="width: 100px; height: auto" :src="element.image" alt="">
            </div>
            <div class="sheet-cell value sheet-cell-long flex align-center">
              <span class="text block">{{ element.name }}</span>
            </div>
            <div @click.stop="toLink(element)" class="sheet-cell value  sheet-cell-long flex align-center"><span
              style="color: blue; text-decoration: underline;" class="text block">サイトへ飛ぶ</span></div>
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
                 :query="{project:project?.id}"
                 :submit="submit">
        <ContextImagesThumbnailContainer containerId="link_image_input"
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
import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";

import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {Gallery} from "@/types/Gallery";
import {ref, watch} from "vue";
import {form} from "@/components/form/templates/FormLinks"
import {Links} from "@/types/Links";

const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, images, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const links = ref<Gallery[] | undefined>(project.value?.links)
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)


function toLink(element: Links) {
  window.open(element.link || "#")
}

function create() {
  useToggle({method: 'post', endpoints: ['app/links', 'project_details/' + project.value?.id], state: "project"})
}

function open(element: Links) {
  images.value = element.image ? [{image: element.image}] : []
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/links/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/links/" + data.value.id, "project_details/" + project.value?.id],
    state: "project"
  }
  submit({image: null, thumbnail: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}

function removeItem() {
  loading.value = true
  remove('app/links/' + data.value?.id).then(() => {
    console.log("removed")
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    icon: "pi pi-plus",
    label: "新規画像",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/links", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    icon: "pi pi-copy",
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: links.value ? links.value.length + 1 : 1,
        project: project.value?.id || null,
        name: data.value.name,
        link: data.value.link,
      }
      save("app/links", obj).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },
  {
    icon: "pi pi-trash",
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/links/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

watch(() => project.value, val => {
  links.value = val?.links
})

</script>

<style>
#project_links {
  height: calc(100% - 54px);
}
</style>
