<template>
  <component :is="temp" :style="styles"></component>
</template>

<script lang="ts" setup>
import {shallowRef, watch, reactive} from "vue";

const props = defineProps({
  svg: String,
  color: {
    type: String,
    default: "#a4b0be"
  },
  width: {
    type: String,
    default: "20px"
  },
  height: {
    type: String,
    default: "auto"
  },
})

const styles = reactive({
  fill: props.color,
  width: props.width,
  height: props.height
})

const temp = shallowRef<any>(null)

import("../../components/icons/" + props.svg + ".vue").then(val => {
  temp.value = val.default;
})

watch(() => props.svg, (vale) => {
  import("../../components/icons/" + vale + ".vue").then(val => {
    temp.value = val.default;
  })
})
watch(() => props.color, (val) => {
  styles.fill = val
})
watch(() => props.width, (val) => {
  styles.width = val
})
watch(() => props.height, (val) => {
  styles.height = val
})
</script>
