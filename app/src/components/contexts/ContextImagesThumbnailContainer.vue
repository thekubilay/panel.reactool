<template>
  <div v-if="images.length && containerId" ref="thumbnails" class="context-thumbnails flex-wrap relative">
    <span class="preview absolute">プレビュー</span>
    <div v-for="(item, idx) in images" :key="idx"
         :style="{backgroundImage:'url('+ item.image +')'}"
         class="image relative flex align-center justify-center">
      <div @click="remove(item?.id)"
           class="overlay flex align-center justify-center">
        <Icon svg="close" width="20px"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, PropType, ref, watch} from "vue";
import Icon from "@/components/icons/Icon.vue";

const props = defineProps({
  images: {type: Array as PropType<any>, default: []},
  remove: Function as PropType<Function>,
  containerId: String as PropType<string>,
})

const thumbnails = ref<HTMLElement | null>(null)

function initImage(time: number = 50) {
  if (props.images.length && props.containerId) {
    setTimeout(() => {
      if (thumbnails.value) {
        if (props.containerId && thumbnails.value) {
          document.getElementById(props.containerId)?.children[0].appendChild(thumbnails.value)
        }
      }
    }, time)
  }
}

onMounted((): void => {
  initImage()
})

watch(() => props.images, val => {
  if (val.length) initImage(50)
}, {immediate: true})

</script>

<style>
.context-thumbnails {
  height: 34px;
}

.context-thumbnails .preview {
  top: -24px;
  right: 0;
  font-size: .75rem;
  width: 60px;
}

.context-thumbnails .image {
  height: 34px;
  width: 34px;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  margin-left: 10px;
  border: 1px solid #dcdde1;
}

.context-thumbnails .image:first-child {
  margin-left: 0;
}

.context-thumbnails .image .overlay {
  opacity: 0;
  width: 34px;
  height: 34px;
  cursor: pointer;
  background-color: rgba(231, 76, 60, 0.7);

}

.context-thumbnails .image:hover .overlay {
  opacity: 1;
}
</style>
