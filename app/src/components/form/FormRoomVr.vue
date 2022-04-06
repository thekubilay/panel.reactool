<template>
  <div class="form">
    <Spinner v-model="loading" text=""/>
    <form action="" @submit.prevent="false">
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-2-space">
          <span class="label flex">デフォルト<span class="required flex align-start">*必須</span></span>
          <Dropdown class="cfec column-1"
                    v-model="requery.base"
                    :options="[{name: 'する', value: true}, {name: 'しない', value: false}]"
                    optionLabel="name"
                    optionValue="value"
                    placeholder="選択"/>
        </div>
        <div class="flex-column column-2-space">
          <span class="label flex">階数<span class="required flex align-start">*必須</span></span>
          <Dropdown class="cfec column-1"
                    v-model="requery.floor_num"
                    :options="nums"
                    optionLabel="name"
                    optionValue="value"
                    placeholder="選択"/>
        </div>
      </div>
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-1">
          <span class="label flex">ルーム名<span class="required flex align-start">*必須</span></span>
          <InputText type="text" class="cfec" v-model="requery.room" placeholder="リビングルーム"/>
        </div>
      </div>
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-1">
          <span class="label flex">VR画像<span class="required flex align-start">*必須</span></span>
          <FileInput v-model="requery.image" accept="image/*"/>
        </div>
      </div>

      <div class="action-wrapper flex align-center">
        <button @click="emits('update:modelValue', false)" class="flex align-center justify-center cancel">中止</button>
        <button v-if="remove" @click="emits('update:dr', true)" class="flex align-center justify-center remove">削除
        </button>
        <button @click="validateAndSubmit()" class="flex align-center justify-center submit-or-next">登録</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>

import {onMounted, PropType, reactive, ref, watch} from "vue";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import FileInput from "@/components/form/inputs/FileInput.vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import APIexecutor from "@/services/APIexecutor";
import {RoomVrFloor} from "@/types/RoomVr";
import Spinner from "@/components/loading/Spinner.vue";

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:dr", dr: boolean): void;
}

const emits = defineEmits<Emits>()

const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
  projectId: Number as PropType<number>,
  d: Boolean as PropType<boolean>,
  dr: Boolean as PropType<boolean>,
  rm: Boolean as PropType<boolean>,
  type: Number as PropType<number>,
  nums: {type: Array as PropType<{ value:number }[]>, default: []},
  queryset: Object as PropType<any>,
  portals: {type: Array as PropType<any>, default: []},
  remove: Boolean as PropType<boolean>,
})


const {submit, remove} = useFormRequestBuilder()
const loading = ref<boolean>(false)
const requery = reactive<any>({
  room_vr: props.type || null,
  floor_num: props.nums[0].value,
  base: true,
  room: null,
  image: null,
})

onMounted((): void => {
  if (props.queryset){
    Object.keys(props.queryset).forEach(key => {
      if (["room_vr", "floor_num", "base", "room",].includes(key)){
        requery[key] = props.queryset[key]
      }
    })

  }
})

function validateAndSubmit(): void {
  loading.value = true
  submit(requery, [[]]).then(() => {
    loading.value = false
    emits("update:modelValue", false)
  })
}

</script>

<style>

</style>
