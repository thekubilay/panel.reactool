<template>
  <div class="fic"> <!-- file input container --->
    <div class="header flex align-center justify-space-between">
      <button @click="open()" class="open">アップロード</button>
    </div>
    <div class="input-wrapper flex-column align-center justify-center">
      <div class="preview-wrapper flex-column align-center justify-center">
        <Icon v-if="!name" svg="upload" width="50px"></Icon>
        <Icon v-else svg="image" width="50px"></Icon>

        <p v-if="isValid" class="text text-center">
          <span class="name block">{{ name }}</span>
          <span v-if="!name" class="hint block text-center">{{ hint }}</span>
          <span v-if="!name" class="limit block text-center">{{ limit }}</span>
        </p>
        <p v-else class="text text-center">
          <span class="name error">アップロードしたファイルルール外</span>
        </p>
      </div>
      <input ref="file" id="file" type="file" @change="reader" class="file-input" :accept="accept">
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, PropType, onMounted, watch} from "vue";
import Icon from "@/components/icons/Icon.vue";

interface Emits {
  (e: "update:modelValue", modelValue: File): void,
}

const emits = defineEmits<Emits>()

const props = defineProps({
  modelValue: [File, String] as PropType<File | string | null>,
  preview_test: {
    type: String as PropType<string>,
    default: "",
  },
  hint: String as PropType<string>,
  limit: String as PropType<string>,
  accept: String as PropType<string>,
  rule: Function as PropType<Function>,
})
const isValid = ref<boolean>(true)
const file = ref<HTMLElement | null>()
const image = ref<string | null>(null)
const name = ref<string>("")

onMounted(() => {
  name.value = props.preview_test
})


function renameFile(originalFile: File): File {
  const dt = new Date()
  return new File([originalFile], dt.toISOString() + "." + originalFile.type.split("/")[1], {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}

const open = (): void => {
  file.value?.click()
}

const reader = (e: any): void => {
  if (e.target.files && e.target.files[0]) {
    name.value = e.target.files[0].name
    isValid.value = props.rule ? props.rule(e.target.files[0].size) : true
    if (isValid.value) {
      // emits("update:modelValue", renameFile(e.target.files[0]))
      emits("update:modelValue", e.target.files[0])
      e.target.parentElement.parentElement.classList.remove("error")
    } else {
      name.value = ""
      e.target.value = ""
    }
  }
}

watch(() => props.modelValue, val => {
  if (!val) {
    name.value = ""
    file.value!.value = null
  }
})

</script>
<style>
.fic .header {
  background-color: #FFFFFF;
  padding: 0;
  height: auto;
  margin-bottom: 14px;
}
.fic .header button.open {
  height: 34px;
  width: 100px;
  background-color: #6366F1;
  color: #ffffff;
}

.fic .input-wrapper {
  width: 100%;
  height: calc(100% - 44px);
  position: relative;
  background-image: linear-gradient(45deg, #ffffff 44.44%, #deebff 44.44%, #deebff 50%, #ffffff 50%, #ffffff 94.44%, #deebff 94.44%, #deebff 100%);
  background-size: 12.73px 12.73px;
}

.fic.error .input-wrapper {
  border: 1px solid rgba(231, 76, 60, 0.5);
  background-image: linear-gradient(45deg, #ffffff 44.44%, #e74c3c 44.44%, #deebff 50%, #ffffff 50%, #ffffff 94.44%, #e74c3c 94.44%, #e74c3c 100%);
  background-size: 12.73px 12.73px;
}

.fic .input-wrapper .preview-wrapper p.text {
  margin-top: 20px;
}

.fic .input-wrapper .preview-wrapper p.text > span.name {
  font-size: 1rem;
  font-weight: 500;
  color: #1a1f21;
}

.fic .input-wrapper .preview-wrapper p.text > span.hint {
  font-size: .8rem;
  font-weight: 500;
  color: rgba(99, 102, 241, 0.7);
}

.fic .input-wrapper .preview-wrapper p.text > span.limit {
  font-size: .7rem;
  font-weight: 500;
  color: rgba(99, 102, 241, 0.7);
}

.fic .input-wrapper input.file-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.fic .input-wrapper button.remove {
  position: absolute;
  right: 5px;
  top: 5px;
  height: 30px;
  width: 30px;
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.13);
}
</style>
