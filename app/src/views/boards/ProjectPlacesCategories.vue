<template>
  <div id="project_categories" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規カテゴリー"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Button @click="toPlaces()" type="button" class="tool-button" label="施設へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell value flex align-center">カテゴリー名</div>
<!--          <div class="sheet-cell value flex align-center">PIN</div>-->
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:categories}, {method:'post', endpoints: ['app/map_categories', 'project_details/'+project.id], state: 'project'})"
                 :list="categories" class="sb-container ss-container" handle=".handle" item-key="id">
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
<!--            <div class="sheet-cell sheet-value-cell flex align-center">-->
<!--              <span class="text block">-->
<!--                <Icon v-if="element.pin" svg="image"></Icon>-->
<!--              </span>-->
<!--            </div>-->
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="カテゴリーフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :remove="rm"
                 :submit="submit">

        <ContextImagesThumbnailContainer containerId="pin_input"
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
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";


import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "@/helpers/useStore";
import {form as FormMapCategory} from "@/components/form/templates/FormMapCategory";
import {MapPlace} from "@/types/MapPlace";
import APIexecutor from "@/services/APIexecutor";
import useHelpers from "@/common/useHelpers";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import {MapCategory} from "@/types/MapCategory";
import {Form} from "@/types/Form";
import DialogDelete from "@/components/dialog/DialogDelete.vue";


const router = useRouter()
const route = useRoute()
const {get, save} = APIexecutor()
const {d, dr, images, data, useToggle} = useHelpers()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, project, progress, onload, content} = useStore()
const reform = ref<Form[][]>()
const query = ref<MapCategory | null>(null)
const categories = ref<any>([])
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)

onMounted((): void => {
  categories.value = project.value?.map_categories
})

function toPlaces() {
  router.push({name: "ProjectPlaces", params: {cid: route.params.cid, dynid: route.params.dynid}})
}


function create() {
  rm.value = false
  query.value = {
    id: null,
    order_id: categories.value ? categories.value.length + 1 : 1,
    project: project.value ? project.value?.id : null,
    name: null,
    color: null,
    pin: null,
  }
  reform.value = FormMapCategory
  useToggle({
    method: "post",
    endpoints: ["app/map_categories", "project_details/" + project.value?.id],
    state: "project",
  })
}


function open(element: MapPlace) {
  rm.value = true
  if (!rcmOpened.value) {
    images.value = element.pin ? [{image: element.pin}] : []
    reform.value = FormMapCategory
    query.value = {
      id: null,
      order_id: element.order_id,
      project: project.value ? project.value?.id : null,
      name: null,
      color: null,
      pin: null,
    }
    useToggle({
      method: 'patch',
      endpoints: ["app/map_categories/" + element.id, "project_details/" + project.value?.id],
      state: 'project'
    }, element)
  }
}

function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/map_categories/" + data.value.id, "project_details/" + project.value?.id],
    state: "salon"
  }
  submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}

function removeItem() {
  loading.value = true
  remove("app/map_categories/" + data.value?.id).then(() => {
    get("project_details/" + project.value?.id, "project").then(() => {
      loading.value = false
      dr.value = false
      d.value = false

    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規カテゴリー",
    command: () => {
      images.value = []
      query.value = {
        id: null,
        order_id: categories.value ? categories.value.length + 1 : 1,
        project: project.value ? project.value?.id : null,
        name: null,
        color: null,
        pin: null,
      }
      reform.value = FormMapCategory
      useToggle({
        method: "post",
        endpoints: ["app/map_categories", "project_details/" + project.value?.id],
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
        order_id: categories.value ? categories.value.length + 1 : 1,
        project: project.value ? project.value?.id : null,
        name: data.value.name,
        color: data.value.color,
        pin: null,
      }
      save("app/map_categories", obj).then(() => {
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
      remove("app/map_categories/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])


watch(() => project.value, val => {
  categories.value = val?.map_categories

})

</script>
<style>
#project_categories {
  height: calc(100% - 54px);
}
</style>
