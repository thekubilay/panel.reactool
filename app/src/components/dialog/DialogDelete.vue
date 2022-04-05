<template>
  <transition name="fade" mode="out-in">
    <div v-if="modelValue" class="remove-dialog flex align-center justify-center overflow-hidden" :class="{fixed:fixed}">
      <div class="window">
        <h4 class="title">このアイテムを削除したいですか</h4>
        <p class="text-caution">
          削除したアイテムは元に戻せません。<br>
          よろしければ <span style="color: #eb4d4b">「はい」</span> を押してください。</p>
        <slot></slot>
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
})

onBeforeUnmount(() => {
  emits("update:modelValue", false)
})

</script>
<style>
.remove-dialog {
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  backdrop-filter: blur(1.4px);
  background-color: rgba(61, 61, 61, 0.3);
}

.remove-dialog .window {
  background-color: #1a1f21;
  padding: 14px 20px;
  width: 450px;
}

.remove-dialog .window h4.title {
  color: #eb4d4b;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 20px;
}

.remove-dialog .window p.text-caution {
  font-size: .8rem;
  color: #FFFFFF;
}

.remove-dialog .window .button-wrapper {
margin-top: 30px;
}
.remove-dialog .window .button-wrapper button {
  width: 100px;
  height: 34px;
  font-size: .75rem;
  color: #FFFFFF;
}
.remove-dialog .window .button-wrapper button.cancel {
  background-color: #000000;
}
.remove-dialog .window .button-wrapper button.delete {
  background-color: #eb4d4b;
  margin-left: 14px;
}

</style>
