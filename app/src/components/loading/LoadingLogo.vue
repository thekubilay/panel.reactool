<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="loader"
      :class="{ fixed: fixed, absolute: !fixed, bg:bg }"
      :style="getStyle()"
    >
      <div class="spinner-wrapper">
        <img id="brand_spin" src="" alt="brand loading">
        <p class="spinner-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import {onMounted} from "vue";

const props = defineProps({
  modelValue: Boolean,
  bg: {
    type: Boolean,
  },
  text: {
    type: String,
    default: "loading...",
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "100%",
  },
  width: {
    type: String,
    default: "100%",
  },
})
onMounted((): void => {
  const imgUrl = new URL('../../assets/gif/logo.gif', import.meta.url)
  document.getElementById('brand_spin')!.setAttribute("src", imgUrl)
})
const getStyle = (): string => {
  return "width: " + props.width + "; height: " + props.height + ";";
};

</script>
<style scoped>
.loader {
  z-index: 1001;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
}

.loader.fixed {
  position: fixed;
}

.spinner-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 50%);
  z-index: 10;
  bottom: 50%;
  left: 50%;
}

.spinner-wrapper img#brand_spin {
  width: 70px;
}
.spinner-wrapper .spinner-text {
  padding: 2px 4px;
  position: relative;
  top: -10px;
  font-size: .8rem;
  color: #0984e3;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

