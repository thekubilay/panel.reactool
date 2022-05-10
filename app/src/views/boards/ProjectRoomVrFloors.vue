<template>
  <div id="project_room_vr" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="VRを追加"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="margin-left: 0;"
                  class="dropdown"
                  v-model="type"
                  :options="types" optionLabel="plan_type"
                  optionValue="id"
                  placeholder="選択"/>
        <Button style="margin-left: 5px"
                @click="router.push({name: 'ProjectRoomVrTypes', params: {cid: route.params.cid, dynid: route.params.dynid}})"
                type="button" class="tool-button" label="間取りタイプ一覧へ"/>
        <Button v-if="user.is_superuser" style="margin-left: 5px"
                @click="router.push({name: 'ProjectRoomVrVendors', params: {cid: route.params.cid, dynid: route.params.dynid}})"
                type="button" class="tool-button" label="ベンダーVR一覧へ"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div>
          <div class="sheet-cell value flex align-center">ルーム名</div>
          <div class="sheet-cell value flex align-center">間取りタイプ</div>
        </div>
      </div>
      <div class="sb-container ss-container" v-for="(fi, idx) in floors" :key="idx">
        <div class="divider" :style="{borderTop: idx === 0 ? '0' : '3px solid #edeae9' }">{{ fi[0].floor_num }}階</div>
        <div v-for="(element, i) in fi"
             :key="element.id"
             @click="open(element)"
             @contextmenu="isRCOn($event, element)"
             aria-haspopup="true"
             aria-controls="plan_rc_menu"
             class="sheet-row flex align-center list-group-item relative pointer">
          <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center"><span class="text block">{{ i + 1 }}</span></div>
          <div class="sheet-cell img flex align-center">
            <Icon v-if="element.image" svg="image"/>
          </div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.room }}</span></div>
          <div class="sheet-cell value flex align-center"><span
            class="text block">{{ dataEnsureOnFind(types.find(item => type === item.id)).plan_type }}</span></div>
          <div v-if="element.image" @click.stop="setPreview(JSON.parse(JSON.stringify(element)))"
               class="sheet-cell value flex align-center"><span
            class="text preview block">preview</span></div>
        </div>
      </div>
    </div>

    <Dialog v-model="d" title="VRフォーム">
      <Spinner v-model="loading" text=""/>
      <FormRoomVr v-model="d"
                  v-model:dr="dr"
                  :remove="rm"
                  :type="type"
                  :nums="nums"
                  :queryset="data"/>

      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem()" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>

    <DialogVR v-model="d2" width="100%" height="100%" title="VRフォーム">
      <Spinner v-model="loading" text="VR環境設定中..."/>
      <VRModule v-if="data"
                v-model:degreeX="degreeX"
                v-model:degreeY="degreeY"
                v-model:portals="portals"
                :src="data.image"
                :display="preview">

        <!--   toolbar    -->
        <!--   not used for now     -->
        <VRModuleToolbar v-model="d2"
                         ref="element"
                         :draggable="false"
                         :compass="data"
                         v-model:portals="portals"
                         v-model:loading="loading"
                         :portal="getFloorRooms[0].id"
                         :roomVrFloor="data.id"
                         :display="tools"/>

        <VRModuleCompass v-if="data"
                         v-model:room="data"
                         v-model:degreeX="degreeX"
                         :display="tools"
                         :type-image="getTypeObject.image" />

        <VRModulePortals v-for="(portal, idx) in portals"
                         v-model="portals[idx].next_room"
                         v-model:loading="loading"
                         v-model:portals="portals"
                         :portal="portal"
                         :display="tools"
                         :key="portal.id"
                         :rooms="getFloorRooms"/>

      </VRModule>
    </DialogVR>

    <DialogWarning v-model="dw" :text="cautionText"/>
  </div>
</template>

<script lang="ts" setup>

import Button from "primevue/button";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";
import Dialog from "@/components/dialog/Dialog.vue";
import DialogWarning from "@/components/dialog/DialogWarning.vue";
import DialogVR from "@/components/dialog/DialogVR.vue";


import {computed, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useUtils from "@/common/useUtils";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {RoomVr, RoomVrFloor, RoomVrPortal} from "@/types/RoomVr";
import FormRoomVr from "@/components/form/FormRoomVr.vue";
import VRModule from "@/components/vr/VRModule.vue";
import VRModuleToolbar from "@/components/vr/VRModuleToolbar.vue";
import VRModulePortals from "@/components/vr/VRModulePortals.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import VRModuleCompass from "@/components/vr/VRModuleCompass.vue";


const {get, save} = APIexecutor()
const {submit, remove} = useFormRequestBuilder()
const {d, d2, dr, dw, data, images, useToggle} = useHelpers()
const {dataEnsureOnFind, groupBy} = useUtils()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {user, payload, content, progress, project, onload} = useStore()
const router = useRouter()
const route = useRoute()
const cautionText = ref<string>("")
const type = ref<number | null>(null)
const types = ref<RoomVr[]>([])
const floors = ref<RoomVrFloor[]>([])
const nums = ref<{ name: string, value: number }[]>([])
const rm = ref<boolean>(false)
const loading = ref<boolean>(false)
const tools = ref<boolean>(false)
const rightClickMenu = ref<DropdownMenu[]>([])
const preview = ref<boolean>(false)
const portals = ref<RoomVrPortal[]>([])
const degreeX = ref<number>(1)
const degreeY = ref<number>(1)

onMounted((): void => {
  init()
})


const getTypeObject = computed(() => {
  return types.value.find(item => {
    return item.id === type.value
  })
})

const getFloorRooms = computed(() => {
  if (floors.value && data.value) {
    return floors.value.find((f: any) => {
      return f[0].floor_num === data.value.floor_num
    })
  } else return [[]]
})

function create(): void {
  if (type.value && nums.value.length) {
    useToggle({
      method: 'post',
      endpoints: ['app/room_vr_floors', 'project_details/' + project.value?.id],
      state: "project"
    })
  } else {
    if (!type.value)
      cautionText.value = "選択できる間取りタイプが存在していない <br> 先に間取りタイプを作ってください。"
    else
      cautionText.value = "選択できる階数が存在していません、 <br> 先に住戸表ページで「階」を作ってください。"

    dw.value = true
  }
}

function open(element: RoomVrFloor): void {
  rm.value = true
  useToggle({
    method: 'patch',
    endpoints: ['app/room_vr_floors/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function removeItem(): void {
  loading.value = true
  remove('app/room_vr_floors/' + data.value.id).then(() => {
    get("project_details/" + project.value?.id, "project").then(() => {
      dr.value = false
      setTimeout((): void => {
        d.value = false
        loading.value = false
      }, 200)
    })
  })
}

function setPreview(element: RoomVrFloor): void {
  data.value = element
  portals.value = element.next_rooms || []
  degreeX.value = element.vr_start || 1
  loading.value = true
  payload.value = {
    method: 'patch',
    endpoints: ['app/room_vr_floors/' + element.id, 'project_details/' + project.value?.id],
    state: "project"
  }
  d2.value = true
  setTimeout(() => {
    loading.value = false
    preview.value = true
    setTimeout(() => {
      tools.value = true
    }, 500)
  }, 1000)
}

function setPortals() {
  if (preview.value && data.value) {
    project.value?.room_vr.forEach(item => {
      if (item.id === type.value) {
        item.floors.forEach((f: any) => {
          if (f.id === data.value.id) {
            portals.value = f.next_rooms
            loading.value = false
          }
        })
      }
    })
  }
}

function init(): void {
  floors.value = []
  nums.value = []
  project.value?.building.floors.forEach((item, i) => {
    nums.value.push({name: (i + 1) + "F", value: i + 1})
  })
  types.value = project.value?.room_vr || []
  if (types.value.length && !type.value) {
    type.value = types.value[0].id
    const grouped: any = groupBy(types.value[0].floors, "floor_num")
    Object.keys(grouped).forEach(key => {
      floors.value.push(grouped[key])
    })
  } else if (types.value.length && type.value) {
    setPortals()
    const floorItems: any[] = dataEnsureOnFind(types.value.find(item => type.value === item.id)).floors
    const grouped: any = groupBy(floorItems, "floor_num")
    Object.keys(grouped).forEach(key => {
      floors.value.push(grouped[key])
    })
  }
}

watch(() => project.value?.room_vr, () => {
  init()
})

watch(() => degreeX.value, (valX) => {
  data.value.vr_start = parseInt(valX + "")
})

watch(() => type.value, () => {
  floors.value = []
  const floorItems: any[] = dataEnsureOnFind(types.value.find(item => type.value === item.id)).floors
  const grouped: any = groupBy(floorItems, "floor_num")
  Object.keys(grouped).forEach(key => {
    floors.value.push(grouped[key])
  })
})

watch(() => d2.value, (val) => {
  if (!val) {
    loading.value = false
    preview.value = false
  }
})

watch(() => preview.value, val => {
  if (val && portals.value.length) {
    const elements: any = document.getElementsByClassName("room-portal") as HTMLCollectionOf<HTMLElement>;
    portals.value.forEach((item, i) => {
      elements[i].style.left = item.button_x + "%"
      elements[i].style.top = item.button_y + "%"
    })
  }
})

</script>

<style>
#project_room_vr {
  height: calc(100% - 54px);
}

#project_room_vr .spreadsheet-wrapper .sb-container {
  height: auto;
}

#project_room_vr .spreadsheet-wrapper .divider {
  border-top: 3px solid #edeae9;
  border-bottom: 1px solid #edeae9;
  padding: 5px 14px;
}

#project_room_vr .preview {
  text-decoration: underline;
  color: blue;
}


</style>
