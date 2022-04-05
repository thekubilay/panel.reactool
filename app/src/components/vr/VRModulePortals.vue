<template>
  <div ref="element"
       class="room-portal absolute flex-column align-center justify-center"
       :class="{visible: display}"
       @mouseenter="onMouseEnter"
       @mousedown="onMouseDown"
       @mousemove="onMouseMove"
       @mouseup="onMouseUp"
       @mouseleave="onMouseLeave">
    <button @click="removeItem()" class="remove-portal"><i class="pi pi-times"></i></button>
    <Dropdown class="dropdown"
              v-model="room"
              :options="rooms"
              optionLabel="room"
              optionValue="id"
              placeholder="選択"/>
    <i class="pi pi-bars"></i>
  </div>
</template>

<script lang="ts" setup>

import Dropdown from "primevue/dropdown";

import {RoomVrFloor, RoomVrPortal} from "@/types/RoomVr";
import {onBeforeUnmount, onMounted, PropType, ref, watch} from "vue";
import useGrabAndMoveByPercentageHandlers from "@/helpers/useGrabAndMoveByPercentageHandlers";
import useStore from "@/helpers/useStore";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import APIexecutor from "@/services/APIexecutor";

interface Emits {
  (e: "update:modelValue", modelValue: number | null): void;

  (e: "update:portals", portals: RoomVrPortal[]): void;

  (e: "update:loading", loading: boolean): void;
}

const emits = defineEmits<Emits>()
const props = defineProps({
  display: {type: Boolean as PropType<boolean>, default: false},
  modelValue: [Number, null] as PropType<number | null>,
  loading: Boolean as PropType<boolean>,
  portals: {type: Array as PropType<any>, default: []},
  portal: Object as PropType<RoomVrPortal>,
  rooms: {type: Array as PropType<RoomVrFloor[]>, default: []},
  idx: Number as PropType<number>,
  degreeX: Number as PropType<number>
})

const {get} = APIexecutor()
const {payload, project} = useStore()
const {remove} = useFormRequestBuilder()
const {
  element, offset, clicked, vr_moved,
  onMouseEnter, onMouseDown, onMouseMove, onMouseUp, onMouseLeave,
} = useGrabAndMoveByPercentageHandlers()

const room = ref<number | null>(null)
const queryset = ref<RoomVrPortal>()
const outerOffset = ref(0)
const vr = ref<any>()

onMounted(() => {
  room.value = props.modelValue || null
})

function removeItem() {
  emits("update:loading", true)
  payload.value = {
    method: 'patch',
    endpoints: ['app/room_vr_next_rooms/' + props.portal?.id, 'project_details/' + project.value?.id],
    state: "project"
  }
  remove('app/room_vr_next_rooms/' + props.portal?.id).then(() => {
    get("project_details/" + project.value?.id, "project")
  })
}

onMounted((): void => {
  vr.value = document.getElementById("equirectangular_canvas")

  vr.value.addEventListener("mousedown", pointerDown)
  vr.value.addEventListener("mouseup", pointerUp)
})
onBeforeUnmount((): void => {
  vr.value.removeEventListener("mousedown", pointerDown)
  vr.value.removeEventListener("mousemove", pointerMove)
  vr.value.removeEventListener("mouseup", pointerUp)
})

function pointerDown(e: MouseEvent): void {
  vr_moved.value = true
  vr.value.addEventListener("mousemove", pointerMove)
  outerOffset.value = element.value.computedStyleMap().get('left').value - e.clientX / window.innerWidth * 100
}

function pointerMove(e: MouseEvent): void {
  if (vr_moved.value) {
    element.value.style.left = (e.clientX / window.innerWidth * 100) + outerOffset.value + "%";
  }
}

function pointerUp(e: MouseEvent): void {
  vr_moved.value = false
  vr.value.removeEventListener("mousemove", pointerMove)
  outerOffset.value = element.value.computedStyleMap().get('left').value - e.clientX / window.innerWidth * 100
}


watch(() => room.value, (val) => {
  emits("update:modelValue", val)
})

watch(() => offset.value, () => {
  let elements: any;
  elements = document.getElementsByClassName("room-portal") as HTMLCollectionOf<HTMLElement>;
  const portals: RoomVrPortal[] = props.portals.map((item: { button_x: string | number; button_y: string | number; }, i: number) => {
    item.button_x = elements[i].computedStyleMap().get('left').value
    item.button_y = elements[i].computedStyleMap().get('top').value
    return item
  })
  emits("update:portals", portals)
})


</script>

<style>

.room-portal {
  opacity: 0;
  background-color: #FFFFFF;
  width: 150px;
  height: 70px;
  border: 1px solid #edeae9;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  top: 10%;
  left: 0.9555%;
  z-index: 1;
}

.room-portal.visible {
  opacity: 1;
}

.room-portal > button.remove-portal {
  position: absolute;
  padding: 0 0 3px 0;
  color: #edeae9;
  content: "x";
  right: -21px;
  top: 6px;
  width: 20px;
  height: 32px;
  background-color: #eb4d4b;
  cursor: pointer;;
}

.room-portal > .p-dropdown {
  margin: 6px 4px 0 4px;
  height: 32px;
  width: calc(100% - 8px);
}

.room-portal > i {
  margin-top: auto;
  margin-bottom: 10px;
}
</style>
