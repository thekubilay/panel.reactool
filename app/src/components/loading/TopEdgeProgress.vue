<template>
  <div class="top-edge-progress" :style="{width: modelValue+'%'}"></div>
</template>

<script lang="ts" setup>
import {PropType, watch} from "vue";

const props = defineProps({
  modelValue: Number as PropType<number>
})
</script>

<style>
.top-edge-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 6px;
  background-color: #6366F1;
  width: 0;
  transition: .4s;
}
</style>