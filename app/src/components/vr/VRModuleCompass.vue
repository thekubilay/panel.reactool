<template>
  <div id="vr_compass"
       :class="{visible: display}"
       class="vr-compass absolute">
    <img class="type-image" :src="typeImage" alt="type-plan">
    <img ref="element"
         :draggable="false"
         @mousemove="onMouseMove"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @mousedown="onMouseDown"
         @mouseup="onMouseUp"
         class="compass" alt="compass" src="">
    <div class="row">
      <Slider v-model="degree" :min="1" :max="360"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Slider from "primevue/slider";
import {onMounted, PropType, ref, watch, watchEffect} from "vue";
import useGrabAndMoveHandler from "@/helpers/useGrabAndMoveHandler";
import {RoomVrFloor, RoomVrPortal} from "@/types/RoomVr";

interface Emits {
  (e: "update:room", room: RoomVrFloor): void;
}

const emits = defineEmits<Emits>()
const props = defineProps({
  room: Object as PropType<RoomVrFloor>,
  display: Boolean as PropType<boolean>,
  degreeX: Number as PropType<number>,
  typeImage: String as PropType<string>,
})
const {
  element, offset,
  onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onMouseMove,
} = useGrabAndMoveHandler()

const compass = ref<RoomVrFloor>()
const degree = ref<number>(0)
const img: URL = new URL('../../assets/svg/compass.svg', import.meta.url)

onMounted((): void => {
  console.log(props.room.compass_start, props.room.vr_start)
  degree.value = props.room.compass_start
})

watch(() => element.value, val => {
  if (val) {
    element.value.style.left = props.room?.compass_left + "px"
    element.value.style.top = props.room?.compass_top + "px"
    element.value?.setAttribute("src", img + "")
    element.value.style.transform = "rotate(" + degree.value + 'deg)';
  }
})

watch(() => offset.value, val => {
  const data: RoomVrFloor = props.room as RoomVrFloor
  data.compass_left = parseInt(element.value.computedStyleMap().get('left').value)
  data.compass_top = parseInt(element.value.computedStyleMap().get('top').value)
  emits("update:room", data)
})

watch(() => degree.value, val => {
  const data: RoomVrFloor = props.room as RoomVrFloor
  data.compass_start = val
  element.value.style.transform = "rotate(" + val + 'deg)';
  emits("update:room", data)
})

watch(() => props.degreeX, val => {
  let deg: number = (val || 1)

  deg = deg - (props.room.compass_start - props.room.vr_start)
  element.value.style.transform = "rotate(" + deg + 'deg)';
})

</script>

<style>
#vr_compass {
  position: absolute;
  right: 14px;
  top: 64px;
  width: 220px;
  padding: 10px;
  background-color: #FFFFFF;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  opacity: 0;
  transition: .6s;
  z-index: 2;
}

#vr_compass.visible {
  opacity: 1;
}

#vr_compass > .type-image {
  width: 100%;
  max-width: 200px;
}

#vr_compass > img.compass {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 120px;
}

#vr_compass > .row {
  padding: 16px 0 8px 0;
}
</style>
