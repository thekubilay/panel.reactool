<template>
  <div class="notify-top-bar flex align-center relative">
    <div class="icon flex align-center">📋</div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <slot></slot>
    </div>
    <button class="close" @click="close()"><i class="pi pi-times"></i></button>
  </div>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import useStore from "@/helpers/useStore";


defineProps({
  modelValue: Boolean as PropType<boolean>,
  title: {type: String as PropType<string>, default: "アップーデート"},
})
const {notifyTopBar} = useStore()

const close = (): void => {
  notifyTopBar.value = false
}
</script>

<style>
.notify-top-bar {
  height: 75px;
  background-color: #2ecc71;
  color: #FFFFFF;
  font-size: .8rem;
  padding: 5px 14px;
}

.notify-top-bar > .icon {
  background-color: #2ecc71;
  color: #FFFFFF;
  font-size: 2.6rem;
  padding-bottom: 6px;
  margin-right: 10px;
}

.notify-top-bar button.close {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
}

.notify-top-bar button.close > i {
  font-size: 1.5rem;
  color: #FFFFFF;
}

.notify-top-bar .content h3.title {
  font-size: .9rem;
  font-weight: 500;
  color: #1a1f21;
}

.notify-top-bar .content p.context {
  font-size: .75rem;
  font-weight: 400;
}

.notify-top-bar .content p.context a {
  border-bottom: 1px solid #1a1f21;
  font-size: .7rem;
  font-weight: 600;
}
</style>
