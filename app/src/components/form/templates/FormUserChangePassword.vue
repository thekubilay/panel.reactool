<template>
  <div class="form form-password-change">
    <Spinner v-model="loading" text=""/>
    <form action="" @submit.prevent="false">
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-2-space">
          <span class="label flex">過去のパスワード<span class="required flex align-start">*必須</span></span>
          <Password :class="{error:errors.includes('old_password')}" v-model="query.old_password" toggleMask :feedback="false"></Password>
          <span v-if="errors.includes('old_password')" class="invalid block">過去のパスワードを正しく入力してください</span>
        </div>
      </div>
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-2-space">
          <span class="label flex">新規パスワード<span class="required flex align-start">*必須</span></span>
          <Password :class="{error:errors.includes('new_password')}" v-model="query.new_password" toggleMask appendTo="self" ></Password>
          <span v-if="errors.includes('new_password')" class="invalid block">新規のパスワードを正しく入力してください</span>
        </div>
      </div>
      <div class="row column-1 flex justify-space-between">
        <div class="flex-column column-2-space">
          <span class="label flex">新規パスワード確認<span class="required flex align-start">*必須</span></span>
          <Password :class="{error:errors.includes('password_confirm')}" v-model="query.password_confirm" toggleMask :feedback="false"></Password>
          <span v-if="errors.includes('password_confirm')" class="invalid block">新規確認のパスワードを正しく入力してください</span>
        </div>
      </div>

      <div class="action-wrapper flex align-center">
        <button @click="emits('update:modelValue', false)" class="flex align-center justify-center cancel">中止</button>
        <button @click="submitter()" class="flex align-center justify-center submit-or-next">登録</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Password from "primevue/password";
import Spinner from "@/components/loading/Spinner.vue";
import {PropType, reactive, ref, watch} from "vue";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;
}
interface ChangePassword {
  old_password: string | null,
  new_password: string | null,
  password_confirm: string | null
}

const emits = defineEmits<Emits>()


const props = defineProps({
  modelValue: Boolean as PropType<boolean>,
})
const {submit} = useFormRequestBuilder()
const {payload, user} = useStore()
const loading = ref<boolean>(false)
const errors = ref<string[]>([])
const query = reactive<any>({
  old_password: null,
  new_password: null,
  password_confirm: null,
})

function submitter(){
  errors.value = []
  payload.value = {
    method: "patch",
    endpoints: ["change_password", ""],
    state: "",
  }
  Object.keys(query).forEach(key => {
    if (!query[key]){
      errors.value.push(key)
    }
  })
  if (query.new_password !== query.password_confirm){
    errors.value.push("new_password", "password_confirm")
  }

  if (!errors.value.length){
    submit(query, [[]]).then((response) => {
      if (response.code === 200){
        window.location.href = "http://127.0.0.1:8000/accounts/login/"
        // window.location.href = "https://demo.reactool.jp/accounts/login/"
        // window.location.href = "https://test-panel.reactool.jp/accounts/login/"
        // window.location.href = "https://reactool.jp/accounts/login/"
      } else {
        errors.value.push("old_password")
      }
      loading.value = false
    })
  } else {
    loading.value = false
  }
}

watch(() => query.old_password, val => {
  errors.value = errors.value.filter(item => {
    return item !== "old_password"
  })
})
watch(() => query.new_password, val => {
  errors.value = errors.value.filter(item => {
    return item !== "new_password"
  })
})
watch(() => query.password_confirm, val => {
  errors.value = errors.value.filter(item => {
    return item !== "password_confirm"
  })
})

</script>

<style>
.form-password-change .p-password-input {
  border: 1px solid #ced6e0;
}
.p-password-panel {
  border-radius: 0;
}
</style>
