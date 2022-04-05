<template>
  <div class="skeleton-wrapper">
    <transition :name="name">
      <div v-if="!modelValue" class="skeleton-window absolute">
          <div v-for="n in counts" :key="n" class="skeleton-scaffold">
            <Skeleton height="19px" width="100px" class="skeleton"/>
            <Skeleton height="36px" width="100%" class="skeleton"/>
          </div>
      </div>
      <slot v-else/>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Skeleton from 'primevue/skeleton';
import {onMounted, PropType, ref, watch} from "vue";

defineProps({
  modelValue: Boolean as PropType<boolean>,
})
const name = ref<string>("fade")
const counts = ref<number>(2)

</script>

<style scoped>

.skeleton-window {
  display: flex;
  width: calc(100% - 28px);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
}

.skeleton-scaffold {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.skeleton {
  margin: 0 0 10px 0;
}


.fade-enter-active {
  transition: opacity 0.3s ease 0.3s;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.skeleton-enter-active {
  transition: opacity 0.3s ease;
}

.skeleton-leave-active {
  transition: opacity 0.3s ease;
}
.skeleton-enter-from,
.skeleton-leave-to {
  opacity: 0;
}

</style>