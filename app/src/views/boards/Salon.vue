<template>
  <div id="salon" class="relative panel-board">
    <BarTool>
      <div class="part-wrap flex align-center relative">
        <h3 class="title">{{ salon.name }}</h3>
        <ButtonDropdown id="salon_setting" :items="items"/>
      </div>
      <span class="divider"></span>
      <div class="part-wrap flex align-center">
        <router-link class="pn-item flex align-center justify-center"
                     active-class="active"
                     :to="{name:'SalonProjects', params:{dynid:route.params.dynid}}">
          物件一覧
        </router-link>
        <router-link class="pn-item flex align-center justify-center"
                     active-class="active"
                     :to="{name:'SalonMap', params:{dynid:route.params.dynid}}">
          地図
        </router-link>
      </div>

      <div class="part-wrap part-end" v-if="route.name === 'SalonMap'">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規施設"
                @click="create()" />
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="open()" />
      </div>

      <Dialog v-model="d" :title="salon?.name">
        <FormQuery v-model="d"
                   close-after
                   topProgress
                   :progress="progress"
                   :form="reform"
                   :onload="onload"
                   :data="data"
                   :query="query"
                   :submit="submit"/>

        <ContextImagesThumbnailContainer containerId="place_image_input" :images="images"
                                         :remove="removeImage"/>
      </Dialog>
    </BarTool>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>

import Button from "primevue/button";
import BarTool from "@/components/bars/BarTool.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import ButtonDropdown from "@/components/buttons/ButtonDropdown.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";

import {onMounted, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useHelpers from "@/common/useHelpers";
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import {SalonLight} from "@/types/Salon";
import APIexecutor from "@/services/APIexecutor";
import {Form} from "@/types/Form";
import {SalonMapSettings} from "@/types/MapSettings";
import {MapPlace, MapPlaceImage} from "@/types/MapPlace";
import {form as FormSalon} from "@/components/form/templates/FormSalon"
import {form as FormSalonMapSettings} from "@/components/form/templates/FormSalonMapSettings"
import {form as FormSalonPlaces} from "@/components/form/templates/FormSalonPlaces"



type Query = SalonLight | SalonMapSettings | MapPlace | MapPlaceImage | null

const {get} = APIexecutor()
const {submit, remove} = useFormRequestBuilder()
const {payload, salon, progress, onload,} = useStore()
const {d, data, images, useToggle} = useHelpers()
const route = useRoute()
const router = useRouter()
const reform = ref<Form[][]>(FormSalon)
const loading = ref<boolean>(false)
const query = ref<Query>(null)
const items = ref<DropdownMenu[]>([
  {
    label: '編集',
    icon: 'pi pi-pencil',
    command: () => {
      query.value = {
        id: null,
        name: null,
        company: null,
      }
      reform.value = FormSalon
      useToggle({
        method: "patch",
        endpoints: ["salons/" + salon.value?.id, "salons/" + salon.value?.id],
        state: "salon"
      }, salon.value)
    },
  },
  {
    label: 'JSON エクスポート',
    icon: 'pi pi-database',
    command: (): void => {
      window.open(import.meta.env.VITE_APP_DATABASE_URL + "salons/" + salon.value?.id + "/?format=json", "_blank")
    },
  },
])

function create() {
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

function open() {
  images.value = salon.value?.map_settings?.pin ? [{image:salon.value?.map_settings.pin}] : []
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
  reform.value = FormSalonMapSettings
  useToggle({
    method: "patch",
    endpoints: ["salons_places_settings/" + salon.value?.map_settings?.id, "salons/" + salon.value?.id],
    state: "salon",
  }, salon.value?.map_settings)
}

function removeImage() {
  loading.value = true
  payload.value = {method: "patch", endpoints: ["salons_places_settings/" + salon.value?.map_settings?.id, "salons/" + salon.value?.id], state: "salon"}
  submit({pin: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}

watch(() => salon.value?.map_settings, val => {
  images.value = val?.pin ? [{image:val.pin}] : []
})

watch(() => salon.value, () => {
  get("salons", "salons")
})

</script>
<style>
#salon {
  width: 100%;
  height: 62px;
  border-bottom: 1px solid #f5f6fa;
  background-color: #ffffff;
}

#salon .toolbar .part-end {
  margin-left: auto;
}

#salon .toolbar .part-wrap .p-button {
  border-radius: 0;
  height: 26px;
  width: 26px;
  padding: 0;
  background-color: #ffffff;
  border: 0;
  color: #969595;
  transition: .3s;
}

#salon .toolbar .part-wrap .p-button:hover {
  color: #1a1f21;
  background-color: #f1f1f1;
}

#salon .toolbar .part-wrap .p-button:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: none;
}

#salon .toolbar .part-wrap .p-button .pi-chevron-down {
  position: relative;
  top: 3px;
}

#salon .toolbar span.divider {
  height: 40%;
  width: 2px;
  margin-left: 12px;
  background-color: #dcdde1;
}


#salon .toolbar a.pn-item {
  height: 30px;
  padding: 0 14px;
  font-weight: 500;
  color: #969595;
}

#salon .toolbar a.pn-item:first-child {
  margin-left: 14px;
}

#salon .toolbar a.pn-item.active {
  background-color: rgba(116, 185, 255, 0.2);
  color: #0984e3;
}
</style>
