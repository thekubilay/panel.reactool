<template>
  <div id="project_places" class="relative panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="施設を追加"
                @click="create()"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="openMapSettings()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown class="dropdown" v-model="category" :options="categories" optionLabel="name" optionValue="id"
                  placeholder="選択"/>
        <Button @click="toCategories()" type="button" class="tool-button" label="カテゴリーへ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">施設名</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">施設住所</div>
          <div class="sheet-cell value flex align-center">施設画像</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:places}, {method:'post', endpoints: ['app/map_places', 'project_details/'+project.id], state: 'project'})"
                 :list="places" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center">{{ element.order_id ? element.order_id : index + 1 }}</div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="text block">{{
                element.place
              }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span
              class="text block">{{ element.address }}</span></div>
            <div class="sheet-cell sheet-value-cell flex align-center">
              <span class="text flex">
                <Icon v-for="place_images in element.map_place_images" :key="place_images.id"
                      style="margin-right: 5px" svg="image"></Icon>
              </span>
            </div>
          </div>
        </template>
      </draggable>
    </div>


    <Dialog v-model="d" title="地図表示設定フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 v-model:activeTab="activeTab"
                 topProgress
                 :closeAfter="closeAfter"
                 :tabs="tabs"
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :submit="submit">

        <ContextImagesThumbnailContainer v-if="activeTab===1" containerId="place_image_input"
                                         :images="images"
                                         :remove="removeImage"/>
      </FormQuery>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Menu from "primevue/menu";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import Spinner from "@/components/loading/Spinner.vue";
import Icon from "@/components/icons/Icon.vue";


import {defineAsyncComponent, onMounted, ref, watch} from "vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";
import useHelpers from "@/common/useHelpers";
import {useRoute, useRouter} from "vue-router";
import {MapPlace} from "@/types/MapPlace";
import APIexecutor from "@/services/APIexecutor";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import {form as FormProjectPlaces} from "@/components/form/templates/FormProjectPlaces";
import {form as FormProjectMapSettings} from "@/components/form/templates/FormProjectMapSettings";
import {Form} from "@/types/Form";
import useUtils from "@/common/useUtils";


const Dialog = defineAsyncComponent(() => import("@/components/dialog/Dialog.vue"))
const BarTool = defineAsyncComponent(() => import("@/components/bars/BarTool.vue"))
const FormQuery = defineAsyncComponent(() => import("@/components/form/FormQuery.vue"))

const route = useRoute()
const router = useRouter()
const {get, save} = APIexecutor()
const {d, dr, images, data, useToggle} = useHelpers()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, project, progress, onload, content} = useStore()
const {findAndUpdateFormElement} = useUtils()
const loading = ref<boolean>(false)
const activeTab = ref<number>(0);
const containerId = ref<string>("place_pin_image_input")
const tabs = ref<string[]>([])
const query = ref({})
const closeAfter = ref<boolean>(false)
const reform = ref<Form[][]>(FormProjectPlaces)
const category = ref<number | null>(null)
const categories = ref<{ id: number | null, name: string | null }[] | undefined | null>([])
const places = ref<MapPlace[] | undefined>([])

onMounted((): void => {
  categories.value = project.value?.map_categories.map(item => {
    return {id: item.id, name: item.name, empty: item.empty}
  }).filter(item => !item.empty)
  if (categories.value && categories.value.length)
    category.value = categories.value[0].id
})


function toCategories() {
  router.push({name: "ProjectPlacesCategories", params: {cid: route.params.cid, dynid: route.params.dynid}})
}


function create() {
  tabs.value = ['内容']
  closeAfter.value = true
  query.value = {
    project: project.value?.id,
    order_id: places.value ? places.value.length + 1 : 1,
    map_category: category.value,
  }
  reform.value = FormProjectPlaces
  reform.value = findAndUpdateFormElement(reform.value, "map_category", "model", category.value)
  reform.value = findAndUpdateFormElement(reform.value, "map_category", "options", project.value?.map_categories.filter(item => !item.empty))
  reform.value = findAndUpdateFormElement(reform.value, "place", "model", null)
  reform.value = findAndUpdateFormElement(reform.value, "address", "model", null)
  useToggle({
    method: "post",
    endpoints: ["app/map_places", "project_details/" + project.value?.id],
    state: "project",
  })
}

function openMapSettings() {
  reform.value = FormProjectMapSettings
  closeAfter.value = true
  query.value = {
    order_id: null,
    project: project.value?.id,

  }
  useToggle({
    method: "patch",
    endpoints: ["app/map_settings/" + project.value?.map_settings.id, "project_details/" + project.value?.id],
    state: "project",
  }, project.value?.map_settings)
}

function open(element: MapPlace) {
  if (!rcmOpened.value) {
    tabs.value = ['内容', '場所の画像']
    closeAfter.value = false
    images.value = element.pin ? [{image: element.pin}] : []
    reform.value = FormProjectPlaces
    reform.value = findAndUpdateFormElement(reform.value, "map_category", "model", category.value)
    reform.value = findAndUpdateFormElement(reform.value, "map_category", "options", project.value?.map_categories.filter(item => !item.empty))
    query.value = {
      map_category: category.value,
    }
    useToggle({
      method: 'patch',
      endpoints: ["app/map_places/" + element.id, "project_details/" + project.value?.id],
      state: 'project'
    }, element)
  }
}

function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/map_places/" + data.value.id, "project_details/" + project.value?.id],
    state: "salon"
  }
  if (activeTab.value === 0) submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
  else if (activeTab.value === 1) remove("app/map_place_images/" + id).then(() => {
    loading.value = false
    images.value = images.value.filter((item) => {
      return item.id !== id
    })
  })
}

const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規施設",
    command: () => {
      images.value = []
      query.value = {
        id: null,
        order_id: null,
        show_directions: false,
        type: null,
        place: null,
        address: null,
        context: null,
        pin: null,
      }
      reform.value = FormProjectPlaces
      useToggle({
        method: "post",
        endpoints: ["app/map_places", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: places.value ? places.value.length + 1 : 1,
        map_category: data.value.map_category,
        project: project.value?.id,
        show_directions: data.value.show_directions,
        type: data.value.type,
        place: data.value.place,
        address: data.value.address,
        context: data.value.context,
      }
      save("app/map_places", obj).then(() => {
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
      remove("app/map_places/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])


watch(() => d.value, val => {
  if (!val) activeTab.value = 0
})

watch(() => project.value, (val) => {
  categories.value = val?.map_categories.map(item => {
    return {id: item.id, name: item.name}
  })
  places.value = val?.map_categories.find((item) => {
    return item.id === category.value
  })?.map_places

  if (data.value) {
    places.value?.forEach(item => {
      if (data.value.id === item.id) {
        data.value = item
        if (activeTab.value === 0) {
          images.value = item.pin ? [{image: item.pin}] : []
        } else if (activeTab.value === 1) {
          images.value = item.map_place_images?.length ? item.map_place_images : []
        }
      }
    })
  }
})

watch(() => route.params.dynid, val => {
  if (categories.value && categories.value.length)
    category.value = categories.value[0].id
})

watch(() => category.value, val => {
  places.value = project.value?.map_categories.find((item) => {
    return item.id === val
  })?.map_places
})

watch(() => activeTab.value, val => {
  if (val === 0) {
    payload.value = {
      method: 'patch',
      endpoints: ['app/map_places/' + data.value.id, 'project_details/' + project.value?.id,],
      state: 'project'
    }
    query.value = {
      id: null, order_id: null, salon: project.value?.id, show_directions: false,
      type: null, place: null, address: null, context: null, pin: null,
    }
  } else {
    payload.value = {
      method: 'post',
      endpoints: ['app/map_place_images', 'project_details/' + project.value?.id,],
      state: 'project'
    }
    containerId.value = "place_image_input"
    query.value = {id: null, map_place: data.value.id, image: null, thumbnail: null,}
    images.value = data.value.map_place_images ? data.value.map_place_images : []
  }
})

</script>
<style>
#project_places {
  height: calc(100% - 54px);
}
</style>

