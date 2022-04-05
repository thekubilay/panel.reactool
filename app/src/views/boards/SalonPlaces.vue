<template>
  <div id="salon-map" class="panel-board">
    <Spinner v-model="content"/>

    <div class="spreadsheet-wrapper overflow-y">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">施設名</div>
          <div class="sheet-cell sheet-cell-long value flex align-center">住所</div>
          <div class="sheet-cell value flex align-center">PIN</div>
          <div class="sheet-cell value flex align-center">施設画像</div>
        </div>
      </div>

      <draggable tag="div"
                 @end="submitRowReorder({value:places}, {method:'post', endpoints: ['salons_places', 'salons'], state: 'salons'})"
                 :list="places" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="open(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center">{{ index + 1 }}</div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span class="context block">{{
                element.place
              }}</span></div>
            <div class="sheet-cell sheet-cell-long value flex align-center"><span
              class="context block">{{ element.address }}</span></div>
            <div class="sheet-cell sheet-value-cell flex align-center">
              <span class="text block">
                <Icon v-if="element.pin" svg="image"></Icon>
              </span>
            </div>
            <div class="sheet-cell sheet-value-cell flex align-center">
              <span class="text flex">
                <Icon style="margin-right: 5px" v-for="place_images in element.map_place_images" :key="place_images.id"
                      svg="image"></Icon>
              </span>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="施設フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 v-model:activeTab="activeTab"
                 topProgress
                 :tabs="tabs"
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :remove="true"
                 :submit="submit">

        <ContextImagesThumbnailContainer :containerId="containerId"
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
import Menu from "primevue/menu";
import Dialog from "@/components/dialog/Dialog.vue"
import Spinner from "@/components/loading/Spinner.vue";
import Icon from "@/components/icons/Icon.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import FormQuery from "@/components/form/FormQuery.vue";

import {ref, watch} from "vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";
import {MapPlace, MapPlaceImage} from "@/types/MapPlace";
import {Form} from "@/types/Form";
import {form as FormSalonPlaces} from "@/components/form/templates/FormSalonPlaces"
import APIexecutor from "@/services/APIexecutor";
import useRightClickHandler from "@/helpers/useRightClickHandler";

type Query = MapPlace | MapPlaceImage | { pin: null } | null

const {get, save} = APIexecutor()
const {d, dr, images, data, useToggle} = useHelpers()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, salon} = useStore()
const loading = ref<boolean>(false)
const containerId = ref<string>("place_pin_image_input")
const activeTab = ref<number>(0);
const tabs = ref<string[]>(['内容', '場所の画像'])
const reform = ref<Form[][]>(FormSalonPlaces)
const query = ref<Query>(null)
const places = ref<MapPlace, undefined>(salon.value?.map_places)
const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規施設",
    command: () => {
      images.value = []
      query.value = {
        id: null,
        order_id: null,
        salon: salon.value?.id,
        show_directions: false,
        type: null,
        place: null,
        address: null,
        context: null,
        pin: null,
      }
      reform.value = FormSalonPlaces
      useToggle({
        method: "post",
        endpoints: ["salons_places", "salons/" + salon.value?.id],
        state: "salon",
      })
    }
  },
  {
    label: "行を複製する",
    command: () => {
      content.value = true
      const obj: object = {
        order_id: places.value ? places.value.length + 1 : 1,
        salon: salon.value?.id,
        show_directions: data.value.show_directions,
        type: data.value.type,
        place: data.value.place,
        address: data.value.address,
        context: data.value.context,
      }
      save("salons_places", obj).then(() => {
        get("salons/" + salon.value?.id, "salon").then(() => {
          content.value = false
        })
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("salons_places/" + data.value?.id).then(() => {
        get("salons/" + salon.value?.id, "salon").then(() => {
          content.value = false
        })
      })
    }
  },])

function open(element: MapPlace) {
  if (!rcmOpened.value) {
    images.value = element.pin ? [{image: element.pin}] : []
    reform.value = FormSalonPlaces
    query.value = {
      id: null,
      order_id: null,
      salon: salon.value?.id,
      show_directions: false,
      type: null,
      place: null,
      address: null,
      context: null,
      pin: null,
    }
    useToggle({
      method: 'patch',
      endpoints: ['salons_places/' + element.id, 'salons/' + salon.value?.id,],
      state: 'salon'
    }, element)
  }
}


function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["salons_places/" + data.value.id, "salons/" + salon.value?.id],
    state: "salon"
  }
  if (activeTab.value === 0) submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
  else if (activeTab.value === 1) remove("salons_places_images/" + id).then(() => {
    loading.value = false
    images.value = images.value.filter((item) => {
      return item.id !== id
    })
  })
}

function removeItem() {
  loading.value = true
  remove('salons_places/' + data.value?.id).then(() => {
    dr.value = false
    get("salons/" + salon.value?.id, "salon").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

watch(() => d.value, val => {
  if (!val) activeTab.value = 0
})

watch(() => salon.value?.map_places, val => {
  places.value = val
  val?.forEach(item => {
    if (data.value && data.value.id === item.id) {
      data.value = item
      if (activeTab.value === 0) {
        images.value = item.pin ? [{image: item.pin}] : []
      } else if (activeTab.value === 1) {
        images.value = item.map_place_images?.length ? item.map_place_images : []
      }
    }
  })
})

watch(() => activeTab.value, val => {
  if (val === 0) {
    payload.value = {
      method: 'patch',
      endpoints: ['salons_places/' + data.value.id, 'salons/' + salon.value?.id,],
      state: 'salon'
    }
    containerId.value = "place_pin_image_input"
    images.value = data.value.pin ? [{image: data.value.pin}] : []
    query.value = {
      id: null, order_id: null, salon: salon.value?.id, show_directions: false,
      type: null, place: null, address: null, context: null, pin: null,
    }
  } else {
    payload.value = {
      method: 'post',
      endpoints: ['salons_places_images', 'salons/' + salon.value?.id,],
      state: 'salon'
    }
    containerId.value = "place_image_input"
    query.value = {id: null, map_place: data.value.id, image: null, thumbnail: null,}
    images.value = data.value.map_place_images ? data.value.map_place_images : []
  }
})
</script>
<style>
#salon-map {
  height: calc(100% - 54px);
}
</style>
