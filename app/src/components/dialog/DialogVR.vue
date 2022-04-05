<template>
  <transition name="fade" mode="out-in">
    <div ref="dialog" v-if="modelValue" class="dialog-container flex align-end justify-center overflow-y-hidden">
      <transition name="fade-scale">
        <div v-if="window" :style="styles" ref="state" class="vr-dialog">
          <div class="body relative">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {PropType, ref, watch, onBeforeUnmount, reactive} from "vue";
import {onClickOutside} from '@vueuse/core'

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;
  (e: "update:title", title: string): void;
}


const emits = defineEmits<Emits>()
const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
  title: String as PropType<string>,
  width: String as PropType<string>,
  height: String as PropType<string>,
})

const dialog = ref<any>()
const window = ref<boolean>(false)
const styles = reactive({
  width: props.width,
  height: props.height,
})
watch(() => dialog.value, val => {
  if (val) {
    document.addEventListener('keydown', close);
  }
})


watch(() => props.modelValue, val => {
  window.value = !!val;
})

onBeforeUnmount(() => {
  document.removeEventListener("keydown", close)
})

const state = ref<any>()

function close(event: KeyboardEvent): void {
  if (event && event.keyCode === 27) {
    emits("update:modelValue", false)
  }
}

onClickOutside(state, (e: any): void => {
  const cl: any = [...e.target.classList]
  if (e && !cl.includes("p-dropdown-item")){
    emits("update:modelValue", false)
  }
})

</script>
<style>
.dialog-container {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  /*backdrop-filter: blur(1.4px);*/
  background-color: rgba(61, 61, 61, 0.3);
}

.vr-dialog {
  position: relative;
  background-color: white;
  width: 540px;
  min-height: 225px;
  border-radius: 0;
  box-shadow: rgba(149, 157, 165, 1) 0 8px 24px;
}

/* content */
.vr-dialog .body {
  padding: 0;
  max-height: 100%;
  overflow-y: hidden;
}

.vr-dialog .body .tabs {
  height: 40px;
  border-bottom: 1px solid #f1f1f1;
}
.vr-dialog .body .tabs > .tab {
  height: 100%;
  padding: 0 10px;
}
.vr-dialog .body .tabs > .tab.active {
  color: #6366F1;
  border-bottom: 1px solid #6366F1;
}

</style>
