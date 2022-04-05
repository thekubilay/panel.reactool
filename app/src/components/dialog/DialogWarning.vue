<template>
  <transition name="fade" mode="out-in">
    <div v-if="modelValue" class="warning-dialog flex align-center justify-center overflow-hidden" :class="{fixed:fixed}">
      <div class="window">
        <h4 class="title">注意</h4>
        <p v-if="text" class="text-caution" v-html="text"></p>
        <div class="button-wrapper flex justify-end">
          <button @click="emits('update:modelValue', false)" class="cancel">はい</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {PropType, ref, watch, onBeforeUnmount, Prop} from "vue";
import {onClickOutside} from '@vueuse/core'

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:title", title: string): void;
}


const emits = defineEmits<Emits>()
const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
  title: String as PropType<string>,
  fixed: Boolean as PropType<boolean>,
  text: String as PropType<string>,
})

onBeforeUnmount(() => {
  emits("update:modelValue", false)
})

</script>
<style>
.warning-dialog {
  position: fixed;
  z-index: 112;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  backdrop-filter: blur(1.2px);
  background-color: rgba(61, 61, 61, 0.1);
}

.warning-dialog .window {
  background-color: #f1c40f;
  padding: 14px 20px;
  width: 450px;
}

.warning-dialog .window h4.title {
  color: #1a1f21;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 20px;
}

.warning-dialog .window p.text-caution {
  font-size: .8rem;
  color: #FFFFFF;
}

.warning-dialog .window .button-wrapper {
  margin-top: 30px;
}
.warning-dialog .window .button-wrapper button {
  width: 100px;
  height: 34px;
  font-size: .75rem;
  color: #FFFFFF;
}
.warning-dialog .window .button-wrapper button.cancel {
  background-color: #ffa502;
}

</style>
