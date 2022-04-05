<template>
  <div id="vr_module">
    <slot></slot>
    <div id="equirectangular_canvas" ref="container" :class="{visible:display}"></div>
  </div>
</template>

<script lang="ts" setup>

import {PropType, watch} from "vue";
import builder from "@/components/vr/VRModule";

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:degreeX", degreeX: number): void;

  (e: "update:degreeY", degreeY: number): void;

  (e: "update:portals", portals: number): void;
}
const emits = defineEmits<Emits>()
const props = defineProps({
  portals: {type: Array as PropType<any>, default: []},
  degreeX: Number as PropType<number>,
  degreeY: Number as PropType<number>,
  src: String as PropType<string>,
  elements: NodeList as PropType<any>,
  display: Boolean as PropType<boolean>,
})

const {
  container, pointerX, pointerY,
  init, animate
} = builder()


watch(() => container.value, val => {
  if (val && props.src) {
    if (container.value) container.value.style.cursor = "grab"
    init(props.src, props.degreeX)
    animate()
  }
})

watch(() => [pointerX.value, pointerY.value], ([valX, valY]) => {
  emits("update:degreeX", valX)
  emits("update:degreeY", valY)
})

</script>

<style>
#equirectangular_canvas {
  opacity: 0;
  transition: .5s;
}
#equirectangular_canvas.visible {
  opacity: 1;
}
</style>
