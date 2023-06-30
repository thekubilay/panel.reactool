<template>
  <div ref="container" id="form">
    <Spinner v-model="_loading" :text="onload ? onload : null"/>
    <TopEdgeProgress id="tpb" v-model="_progress"/>
    <div v-if="tabs.length" class="tabs flex align-center">
      <button v-for="(t, idx) in tabs" :key="idx" @click="setActive(idx)" :class="{active:idx===tab}"
              class="tab flex align-center justify-center">{{ t }}
      </button>
    </div>

    <DefaultSkeleton v-model="imported">
      <form action="" @submit.prevent="false">
        <div v-for="(tab, i) in reform" :key="i">
          <div v-for="(row, idx) in tab" :key="idx" class="row" :class="row.classes">
            <span v-if="row.elements[0].hasOwnProperty('title')"
                  class="label title-label">{{ row.elements[0].title }}</span>
            <div v-for="(column, idx) in row.elements" :key="idx"
                 :class="column.classes">
              <span class="label flex">{{ column.label }}<span v-if="column.required" class="required flex align-start">*必須</span></span>

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


        <div class="action-wrapper flex align-center">
          <button @click="emits('update:modelValue', false)" class="flex align-center justify-center cancel">中止</button>
          <button v-if="remove" @click="inner_scope_remove()"
                  class="flex align-center justify-center remove">削除
          </button>
          <button @click="inner_scope_submit($event, true)"
                  class="flex align-center justify-center submit-or-next">登録
          </button>
        </div>
      </form>
    </DefaultSkeleton>

  </div>
</template>

<script lang="ts" setup>
import {onMounted, PropType, ref, onBeforeUnmount, watch, computed, Prop, nextTick} from "vue";
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
import APIexecutor from "@/services/APIexecutor";


interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:dr", dr: boolean): void;

  (e: "update:response", payload: any): void;

  (e: "update:payload", payload: Payload): void;

  (e: "update:activeTab", activeTab: number): void;

  (e: "update:form", form: Form[][]): void;
}

const emits = defineEmits<Emits>();
const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
  display: Boolean as PropType<boolean>,
  dr: Boolean as PropType<boolean>,
  remove: Boolean as PropType<boolean>,
  selectedId: Number as PropType<number>,
  activeTab: {type: Number as PropType<number>, default: 0,},
  form: {type: Array as PropType<Form[][]>, default: [] as PropType<Form[][]>,},
  data: Object as PropType<any>,
  loading: {type: Boolean as PropType<boolean>, default: false},
  progress: Number as PropType<number>,
  onload: {type: String as PropType<string>, default: ""},
  query: Object as PropType<any>,
  nestedQuery: Object as PropType<object>,
  closeAfter: Boolean as PropType<boolean>,
  tabs: {type: Array as PropType<string[]>, default: []},
  submit: Function as PropType<any>,
})

const store = useStore()
const {setDynamics} = useDynamics()
const {setFormDefaultData, setClear} = useHelpers()
const {
  reform, requery,
  setProps, setFormQueryValues
} = useInit()
const {isElementValid, isFormValid} = useFormValidation()
const{get} = APIexecutor()

const loading = ref<boolean>(false)
const imported = ref<boolean>(false)
const tab = ref<number>(0)
const _progress = computed(() => {
  return props.progress
})
const _loading = computed(() => {
  return props.loading
})

onMounted(() => {
  nextTick()
  tab.value = props.activeTab
  document.addEventListener("keydown", inner_scope_submit)
  if (props.activeTab === 0) {
    setFormQueryValues(props.form, props.query, tab.value).then(() => {
      setDynamics(reform.value.filter((el, idx) => idx === tab.value)).then((response: boolean) => {
        setFormDefaultData(reform.value, props.data)
        imported.value = response
      })
    })
  }
})

onBeforeUnmount(() => {
  document.removeEventListener("keydown", inner_scope_submit)
  setClear(reform.value)
})

const setActive = (t: number) => {
  tab.value = t
  if (props.tabs) {
    emits("update:activeTab", t)
  }
}

const cancel = (response: any) => {
  loading.value = false

  if (response)
    emits("update:response", response)

  if (props.closeAfter) {
    setTimeout(() => {
      emits("update:modelValue", false)
    }, 300)
  }
}

const cleanFileInput = () => {
  reform.value.forEach(rows => {
    rows.forEach(row => {
      row.elements.forEach(element => {
        element.model = element.name !== "FileInput" ? element.model : null
      })
    })
  });
}

const inner_scope_remove = (): void => {
  emits("update:dr", true)
}

const inner_scope_submit = (event: KeyboardEvent, clicked = false): void => {
  if (clicked || event.keyCode === 13) {
    document.getElementById("tpb")!.style.opacity = "1"
    event.preventDefault()
    loading.value = true
    if (isFormValid(reform.value)) {
      props.submit(requery.value, reform.value).then((response: any) => {
        cleanFileInput()
        cancel(response)
      })
    } else {
      get("project/"+props.query.project_id+"/", "project")
      loading.value = false
    }
  }
}

watch(() => props.query, val => {
  setFormQueryValues(props.form, val, tab.value)
})


watch(() => props.loading, val => {
  loading.value = val
})

watch(() => props.activeTab, val => {
  tab.value = val
})

watch(() => props.data, val => {
  setFormDefaultData(reform.value, val)
})

watch(() => props.form, val => {
  reform.value = val
  setFormQueryValues(reform.value, props.query, tab.value).then(() => {
    setDynamics(reform.value.filter((el, idx) => idx === tab.value)).then((response: boolean) => {
      imported.value = response
    })
  })
})


watch(() => tab.value, val => {
  imported.value = false
  setFormQueryValues(props.form, props.query, val).then(() => {
    setDynamics(reform.value).then((response: boolean) => {
      setFormDefaultData(reform.value, props.data)
      imported.value = response
    })
  })
})


</script>
