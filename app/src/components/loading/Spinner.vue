<template>
  <transition name="fade">
    <div
        v-if="modelValue"
        class="loader"
        :class="{ fixed: fixed, absolute: !fixed, bg:bg }"
        :style="getStyle()"
    >
      <div class="blur"></div>
      <div class="spinner-wrapper">
        <div class="spinner-icon"></div>
        <p class="spinner-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
  bg: {
    type: Boolean,
  },
  text: {
    type: String,
    default: "ローティング",
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
}
.loader.bg {
  background-color: #ffffff;
}

.loader.fixed {
  position: fixed;
}

.loader.absolute {
  position: absolute;
}

.blur {
  backdrop-filter: blur(1.4px);
  background-color: rgba(0, 0, 0, 0.01);
  left: 0;
  top: 0;
  width: 100%;
  margin-top: 6px;
  height: calc(100% - 6px);
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

.spinner-text {
  /*background-color: #b2b2b2;*/
  padding: 2px 4px;
  position: relative;
  top: 10px;
  font-size: .8rem;

}

.spinner-icon {
  border: 4px solid #f0f0f0; /* Light grey */
  border-top: 4px solid #121c21; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin .5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

