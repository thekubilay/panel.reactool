<template>
  <transition name="fade" mode="out-in">
    <div ref="dialog" v-if="modelValue" class="dialog-container flex align-center justify-center overflow-y-hidden">
      <transition name="fade-scale">
        <div v-if="window" :style="styles" ref="state" class="rf-dialog">
          <div class="header flex align-center justify-space-between">
            <h3 class="title">{{ title }}</h3>
            <button @click="emits('update:modelValue', false)" class="close">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 357 357"
                   xml:space="preserve">
		          <polygon
                points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "/>
            </svg>
            </button>
          </div>

          <!--   context imports by slot   -->
          <div class="body" :class="{'overflow-y': innerScopedOverFlow }">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {PropType, ref, watch, onBeforeUnmount, reactive, onMounted} from "vue";
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
  overflow: Boolean as PropType<boolean>,
})

const dialog = ref<any>()
const window = ref<boolean>(false)
const innerScopedOverFlow = ref<boolean>(false);
const styles = reactive({
  width: props.width,
  height: props.height,
})
watch(() => dialog.value, val => {
  if (val) {
    document.addEventListener('keydown', close);
  }
})


onMounted((): void => {
  innerScopedOverFlow.value = props.overflow || false

})

watch(() => props.modelValue, val => {
  window.value = !!val;
})

watch(() => props.overflow, val => {
  innerScopedOverFlow.value = val || false
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
  const cl: any = [...e.target.classList].toString()
  if ((e && !cl.includes("p-dropdown-item") &&
    !cl.includes("p-") &&
    !cl.includes("pi") && cl.length)) {

    emits("update:modelValue", false)
  }
})

</script>
<style>
.dialog-container {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  /*backdrop-filter: blur(1.4px);*/
  background-color: rgba(61, 61, 61, 0.3);
}

.rf-dialog {
  position: relative;
  background-color: white;
  width: 540px;
  min-height: 225px;
  border-radius: 0;
  box-shadow: rgba(149, 157, 165, 1) 0 8px 24px;
  border: 1px solid #f1f1f1;
}

.rf-dialog .header {
  border-bottom: 0 none;
  background: #f5f6fa;
  color: #343a40;
  padding: 0 14px;
  height: 54px;
  border-radius: 0;
}

.rf-dialog .header h3.title {
  font-weight: 400;
  font-size: 1rem;
}

.rf-dialog .header button {
  width: 2rem;
  height: 2rem;
  color: #6c757d;
  border: 0 none;
  background: transparent;
  border-radius: 0;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

/* content */
.rf-dialog .body {
  padding: 0;
  max-height: 550px;
}

.rf-dialog .body .tabs {
  height: 40px;
  border-bottom: 1px solid #f1f1f1;
}

.rf-dialog .body .tabs > .tab {
  height: 100%;
  padding: 0 10px;
}

.rf-dialog .body .tabs > .tab.active {
  color: #6366F1;
  border-bottom: 1px solid #6366F1;
}

</style>
