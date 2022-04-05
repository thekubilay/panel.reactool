<template>
  <div id="project_plans" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規ロー"
                @click="cr()"/>
      </div>
    </BarTool>

    <div class="cm-spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container flex">
        <div class="sheet-cell handle bfd sheet-cell flex align-center"></div>
        <div class="sheet-cell num bfd flex align-center">順番</div>
        <draggable tag="div"
                   @end="submitRowReorder({value:fields}, {method:'post', endpoints: ['app/plan_fields', 'project_details/'+project.id], state:'project'})"
                   :list="fields" class="sheet-row sheet-row-header flex align-center" handle=".handle" item-key="id">
          <template #item="{ element, index }">
            <div class="list-cell flex align-center relative pointer">
              <div class="sheet-cell column-1 edit-cell value flex align-center">
                <span class="flex align-center justify-center handle grab"><i class="pi pi-bars"></i></span>
                <span class="context th-context block">{{ element.name }}</span>
                <span @click="ef(element)" class="edit flex align-center justify-center pointer">
                <i class="pi pi-pencil"></i>
              </span>
              </div>
            </div>
          </template>
        </draggable>
        <div @click="cf()" class="sheet-cell add bfd flex align-center pointer">
          <span class="text flex align-center justify-center"><i class="pi pi-plus"></i></span>
        </div>
      </div>

      <draggable tag="div"
                 @end="submitRowReorder({value:contents}, {method:'post', endpoints: ['app/plan_contents', 'project_details/'+project.id], state: 'project'})"
                 :list="contents" class="cm-ss-body " handle=".handle" item-key="id">
        <template #item="{ element, index }">
          <div @click="ec(element)"
               @contextmenu="isRCOn($event, element)"
               aria-haspopup="true"
               aria-controls="plan_rc_menu"
               class="sb-container ss-container flex">
            <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>

            <div class="sheet-cell handle bfd flex align-center justify-center grab"><i class="pi pi-bars"></i></div>
            <div class="sheet-cell num bfd flex align-center ">{{ index + 1 }}</div>
            <div v-for="(context, idx) in element.plan_contexts"
                 :key="idx"
                 class="ss-contents flex">
              <div class="sheet-cell value flex align-center">
                <span v-if="context.value || !context.image" :class="{
                        'number-price':['金額','価格'].includes(context.plan_field.name) &&
                        context.field === 'InputNumber','number-text':!['金額','価格'].includes(context.plan_field.name) &&
                        context.field === 'InputNumber'
                      }"
                      class="context block">
                  {{ context.value }}
                </span>
                <span v-else class="context block">
                  <Icon v-if="context.image" svg="image"></Icon>
                </span>
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <Dialog v-model="d" title="フィールドフォーム" overflow>
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 v-model:response="response"
                 topProgress
                 closeAfter
                 :progress="progress"
                 :form="reform"
                 :data="data"
                 :loading="loading"
                 :query="query"
                 :remove="rm"
                 :submit="submit">

        <DataTable v-if="dropdown"
                   :value="q1.plan_field_options" rowindex="index"
                   @rowReorder="reorderOptions"
                   responsiveLayout="scroll" class="option-datatable">
          <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false"/>
          <Column field="name" header="項目名">
            <template #body="slotProps">
              <input class="option-input" type="text" v-model="slotProps.data.name" :placeholder="'選択項目'">
            </template>
          </Column>
          <Column style="width:40px; text-align: right; margin-left: auto" body="index">
            <template #body="slotProps">
            <span @click="ro(slotProps.index)"
                  class="remove pointer">
              <i class="pi pi-times"></i>
            </span>
            </template>
          </Column>
        </DataTable>
        <button v-if="dropdown" @click="co()" class="add-option">選択項目を追加する</button>

      </FormQuery>
      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem('app/plan_fields/')" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>

    <Dialog v-model="d2" title="間取りフォーム" overflow>
      <FormNested v-model="d2"
                  v-model:form="reform"
                  v-model:response="response"
                  close-after
                  topProgress
                  :progress="progress">
        <template v-slot:actions>
          <div class="action-wrapper flex align-center">
            <button @click="d2 = false" class="flex align-center justify-center cancel">中止</button>
            <button @click="saveRow()" class="flex align-center justify-center submit-or-next">登録</button>
          </div>
        </template>
      </FormNested>
    </Dialog>

  </div>
</template>

<script lang="ts" setup>

import draggable from "vuedraggable";
import Button from "primevue/button";
import Menu from "primevue/menu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import Icon from "@/components/icons/Icon.vue";

import {watch} from "vue";
import ProjectPlans from "@/views/boards/ProjectPlans";
import FormQuery from "@/components/form/FormQuery.vue";
import FormNested from "@/components/form/FormNested.vue";
import DialogDelete from "@/components/dialog/DialogDelete.vue";


const {
  reform, query, dropdown,
  d, d2, dr, rm, data, response, q1,
  containerId,
  loading, content, project, progress,
  fields, contents,
  rightClickMenu, rcm,
  isRCOn,
  submit, submitRowReorder, reorderOptions, saveRow, removeItem,
  cr, cf, ef, ec, co, ro, so, sd,
} = ProjectPlans()

watch(() => d.value, val => {
  if (!val) dropdown.value = val
})

watch(() => response.value, val => {
  so(val)
})

watch(() => reform.value, val => {
  sd(val)
}, {deep: true})


</script>
<style>
#project_plans {
  height: calc(100% - 54px);
}

#project_plans .cm-spreadsheet-wrapper {
  background-color: #FFFFFF;
  overflow: scroll;
  height: calc(100% - 55px);
}

#project_plans .cm-spreadsheet-wrapper .sh-container {
  border-bottom: 1px solid #edeae9;
  color: #969595;
}

#project_plans .cm-spreadsheet-wrapper .add {
  width: 40px;
  height: 32px;
  margin-left: auto;
}

#project_plans .cm-spreadsheet-wrapper .add span.text {
  width: 24px;
  height: 24px;
}

#project_plans .cm-spreadsheet-wrapper .add span.text i {
  font-size: .8rem;
}

#project_plans .cm-spreadsheet-wrapper .add:hover span.text {
  background-color: #edeae9;
  color: #1a1f21;
}


#project_plans .cm-spreadsheet-wrapper .sh-container .edit {
  margin-left: auto;
}
#project_plans .cm-spreadsheet-wrapper .sh-container .th-context {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#project_plans .cm-spreadsheet-wrapper .list-cell,
#project_plans .cm-spreadsheet-wrapper .ss-contents {
  border-right: 1px solid #edeae9;
  font-size: .75rem;
  min-height: 32px;
  width: 140px;
  min-width: 140px;
  max-width: 140px;
}

#project_plans .cm-spreadsheet-wrapper .ss-contents {
  padding-left: 10px;
}

#project_plans .cm-spreadsheet-wrapper .list-cell .handle {
  width: 30px;
  height: 30px;
}

#project_plans .cm-spreadsheet-wrapper .list-cell .edit {
  margin-left: auto;
  margin-right: 10px;
  width: 24px;
  height: 24px;
}

#project_plans .cm-spreadsheet-wrapper .list-cell .edit:hover {
  background-color: #edeae9;
  color: #1a1f21;
}

#project_plans .cm-spreadsheet-wrapper .list-cell:last-child,
#project_plans .cm-spreadsheet-wrapper .ss-contents:last-child,
#project_plans .cm-spreadsheet-wrapper .sheet-cell:last-child {
  border-right: 0;
}

#project_plans .cm-spreadsheet-wrapper .sheet-cell.bfd.img,
#project_plans .cm-spreadsheet-wrapper .sheet-cell.bfd.num,
#project_plans .cm-spreadsheet-wrapper .sheet-cell.bfd.handle {
  width: 55px;
  min-width: 55px;
  border-right: 0;
  font-size: .75rem;
}

#project_plans .cm-spreadsheet-wrapper .cm-ss-body .sheet-cell {
  min-height: 36px;
  width: 100%;
}

#project_plans .cm-spreadsheet-wrapper .cm-ss-body .sheet-cell span.context {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#project_plans .cm-spreadsheet-wrapper .sb-container {
  cursor: pointer;
  border-bottom: 1px solid #edeae9;
}


#project_plans .option-datatable {
  padding-bottom: 0;
}

#project_plans .option-datatable.p-datatable .p-datatable-tbody > tr > td {
  background-color: #FFFFFF;
}

#project_plans .option-datatable.p-datatable .p-datatable-tbody > tr > td input.option-input {
  border: 0;
  outline: 0;
}

#project_plans button.add-option {
  margin-top: 20px;
  background-color: #f1f1f1;
  padding: 5px 10px;
  font-size: .7rem;
}
</style>
