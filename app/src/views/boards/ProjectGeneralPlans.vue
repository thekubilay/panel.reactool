<template>
  <div id="project_general_plans" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="プランを追加"
                @click="create()"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="openGeneralPlanSettings(project.general_plan_settings)"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="margin-left: 0; width: 120px" class="dropdown" v-model="kind" :options="kinds"
                  placeholder="フォルダー選択"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell num flex align-center">順番</div>
          <div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div>
          <div class="sheet-cell value flex align-center">種類</div>
          <div class="sheet-cell value flex align-center">HTMLコード</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">画像名</div>
        </div>
      </div>
      <draggable tag="div"
                 @end="submitRowReorder({value:plans}, {method:'post', endpoints: ['app/general_plans', 'project_details/'+project.id], state: 'project'})"
                 :list="plans" class="sb-container ss-container" handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @contextmenu="isRCOn($event, element)"
               @click="open(element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sheet-row flex align-center list-group-item relative pointer">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
            <div class="sheet-cell handle flex align-center handle grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num flex align-center"><span class="text block">{{ index + 1 }}</span></div>
            <div class="sheet-cell img flex align-center">
              <Icon svg="image"/>
            </div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.kind }}</span></div>
            <div class="sheet-cell value flex align-center"><span class="text block">{{ element.html_code }}</span></div>
            <div class="sheet-cell value sheet-cell-long flex align-center">
              <span class="text block">{{ element.image.split("/", 6)[5].split(".")[0] }}</span>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="一般図フォーム" overflow>
      <FormQuery v-model="d"
                 close-after
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :query="{project:project.id}"
                 :submit="submit"/>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "../../components/loading/Spinner.vue";
import BarTool from "../../components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";


import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {computed, onMounted, ref, watch} from "vue";
import FormQuery from "@/components/form/FormQuery.vue";
import {form} from "@/components/form/templates/FormGeneralPlans"
import {form as FormGeneralPlanSettings} from "@/components/form/templates/FormGeneralPlanSettings"
import {GeneralPlan, GeneralPlanSetting} from "@/types/GeneralPlan";
import useUtils from "@/common/useUtils";
import {Form} from "@/types/Form";
import {Gallery} from "@/types/Gallery";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, dr, data, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {payload, content, progress, project} = useStore()
const {findAndUpdateFormElement} = useUtils()
const reform = ref<Form[][]>(form)
const kind = ref<string>("敷地配置図")
const kinds = ref<string[]>(["敷地配置図", "立面図", "各階平面図"])
const plans = ref<GeneralPlan[]>([])
const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規プラン",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/general_plans", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/general_plans/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },])

onMounted((): void => {
  plans.value = project.value?.general_plans.filter(item => {
    return item.kind === kind.value
  }) || []
})


function create(): void {
  reform.value = findAndUpdateFormElement(form, "kind", "model", kind.value)
  useToggle({
    method: 'post',
    endpoints: ['app/general_plans', 'project_details/' + project.value?.id],
    state: "project"
  })
}

function open(element:Gallery): void {
  reform.value = findAndUpdateFormElement(form, "kind", "model", kind.value)
  useToggle({
    method: 'patch',
    endpoints: ['app/general_plans/'+element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

function openGeneralPlanSettings(element:GeneralPlanSetting): void {
  reform.value = FormGeneralPlanSettings
  useToggle({
    method: 'patch',
    endpoints: ['app/general_plan_settings/'+element.id, 'project_details/' + project.value?.id],
    state: "project"
  }, element)
}

watch(() => kind.value, val => {
  plans.value = project.value?.general_plans.filter(item => {
    return item.kind === val
  }) || []
})

watch(() => project.value, val => {
  plans.value = val?.general_plans.filter(item => {
    return item.kind === kind.value
  }) || []
})

</script>

<style>
#project_general_plans {
  height: calc(100% - 54px);
}
</style>
