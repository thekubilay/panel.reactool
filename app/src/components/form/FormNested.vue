<template>
  <div ref="container" id="form">
    <Spinner v-model="_loading" :text="onload ? onload : null"/>
    <TopEdgeProgress id="tpb" v-model="_progress"/>
    <div v-if="tabs" class="tabs flex align-center">
      <button v-for="(t, idx) in tabs" :key="idx" @click="setActive(idx)" :class="{active:idx===tab}"
              class="tab flex align-center justify-center">{{ t }}
      </button>
    </div>

    <DefaultSkeleton v-model="imported">
      <form action="" @submit.prevent="true">
        <div v-for="(tab, i) in reform" :key="i">
          <div v-for="(row, idx) in tab" :key="idx" class="row" :class="row.classes">
            <span v-if="row.elements[0].hasOwnProperty('title')"
                  class="label title-label">{{ row.elements[0].title }}</span>
            <div v-for="(column, idx) in row.elements" :key="idx"
                 :class="column.classes">
            <span class="label flex">
              {{ column.label }}
              <span v-if="column.required" class="required flex align-start">*必須</span>
            </span>
              <component v-if="column.component"
                         :is="column.component"
                         :id="column.id"
                         v-bind="setProps(column)"
                         v-model="column.model"
                         class="cfec column-1"
                         :class="{error:!isElementValid(column)['valid']}"/>

              <span v-for="(error, idx) in isElementValid(column)['errors']" :key="idx"
                    class="invalid block">*{{ error }}</span>
              <span v-if="column.hint && column.name !== 'FileInput'" class="hint">{{ column.hint }}</span>
            </div>
          </div>

          <!-- image container start -->
          <slot></slot>
          <!-- image container over -->
        </div>


        <slot name="actions"></slot>
      </form>
    </DefaultSkeleton>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, PropType, ref, onBeforeUnmount, watch, computed} from "vue";
import {Payload} from "@/types/Payload";
import {Form} from "@/types/Form";
import useInit from "./init"
import useHelpers from "./helpers"
import useDynamics from "./dynamics"
import useFormValidation from "@/components/form/validation";
import Spinner from "../loading/Spinner.vue";
import DefaultSkeleton from "../skeletons/DefaultSkeleton.vue";
import TopEdgeProgress from "@/components/loading/TopEdgeProgress.vue";
import useStore from "@/stores/main"


interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:response", payload: any): void;

  (e: "update:payload", payload: Payload): void;

  (e: "update:activeTab", activeTab: string): void;

  (e: "update:form", form: Form[][]): void;
}

const emits = defineEmits<Emits>();
const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
  loading: Boolean as PropType<boolean>,
  selectedId: Number as PropType<number>,
  activeTab: String as PropType<string>,
  form: {type: Array as PropType<Form[][]>, default: [] as PropType<Form[][]>,},
  onload: {type: String as PropType<string>, default: ""},
  progress: Number as PropType<number>,
  tabs: Array as PropType<string[]>,
})

const store = useStore()
const {setDynamics} = useDynamics()
const {setClear} = useHelpers()
const {
  reform,
  setProps
} = useInit()
const {isElementValid} = useFormValidation()
const container = ref<HTMLElement | null>()
const imported = ref<boolean>(false)
const tab = ref<number>(0)

const _progress = computed(() => {
  return props.progress
})
const _loading = computed(() => {
  return props.loading
})


onMounted(() => {
  reform.value = props.form
  setDynamics(props.form.filter((el, idx) => idx === tab.value)).then((response: boolean) => {
    imported.value = response
  })
})

onBeforeUnmount(() => {
  setClear(reform.value)
  emits("update:modelValue", false)
})

const setActive = (t: number) => {
  tab.value = t
  if (props.tabs) {
    emits("update:activeTab", props.tabs[t])
  }
}

watch(() => tab.value, val => {
  imported.value = false
  setDynamics(reform.value).then((response: boolean) => {
    imported.value = response
  })
})


</script>
