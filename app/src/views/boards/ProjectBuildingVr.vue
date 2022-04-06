<template>
  <div id="project_building_vr" class="panel-board">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="画像を追加"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Dropdown style="margin-left: 0; width: 120px" class="dropdown"
                  v-model="direction" :options="directionItems"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="方向選択"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-cog" icon-pos="left"
                @click="d2 = true"/>
      </div>
    </BarTool>

    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell handle flex align-center"></div>
          <div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div>
          <div class="sheet-cell value sheet-cell-long flex align-center">画像番号</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="(element, idx) in sortByAsc(directions, 'name')" :key="idx"
             @click="open(element)"
             @contextmenu="isRCOn($event, element)"
             aria-haspopup="true"
             aria-controls="plan_rc_menu"
             class="sheet-row flex align-center list-group-item relative pointer">
          <Menu id="rc_menu" ref="rcm" class="rc has-final-action" :model="rightClickMenu" :popup="true"/>
          <div class="sheet-cell handle flex align-center handle grab"></div>
          <div class="sheet-cell img flex align-center">
            <Icon v-if="element.image" svg="image"/>
          </div>
          <div class="sheet-cell num flex align-center">
            <span class="text block">{{ element.name }}</span>
          </div>
        </div>
      </div>
    </div>


    <Dialog v-model="d" title="外観画像フォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 topProgress
                 :progress="progress"
                 :form="form"
                 :data="data"
                 :loading="loading"
                 :remove="rm"
                 :query="{project:project.id}"
                 :submit="submit">
        <ContextImagesThumbnailContainer containerId="image_input"
                                         :images="images"
                                         :remove="removeImage"/>
      </FormQuery>
      <DialogDelete v-model="dr">
        <div class="button-wrapper flex justify-end">
          <button @click="dr=false" class="cancel">いいえ</button>
          <button @click="removeItem()" class="delete">はい</button>
        </div>
      </DialogDelete>
    </Dialog>

    <Dialog v-model="d2" title="方向フォーム">
      <FormNested v-model="d2" :form="[[]]" :loading="loading">
        <DataTable :value="options" rowindex="index"
                   responsiveLayout="scroll" class="option-datatable">
          <Column field="name" header="項目名">
            <template #body="slotProps">
              <input class="option-input" type="text" v-model="slotProps.data.name" :placeholder="'選択項目'">
            </template>
          </Column>
          <Column style="width:40px; text-align: right; margin-left: auto" body="index">
            <template #body="slotProps">
              <span @click="removeOptionItem(slotProps.index)"
                    class="remove pointer">
                <i class="pi pi-times"></i>
              </span>
            </template>
          </Column>
        </DataTable>
        <button @click="addOptionItem()" class="add-option">方向を追加する</button>

        <template v-slot:actions>
          <div class="action-wrapper flex align-center">
            <button @click="d2=false" class="flex align-center justify-center cancel">中止</button>
            <button @click="saveOnSubmit()"
                    class="flex align-center justify-center submit-or-next">登録</button>
          </div>
        </template>
      </FormNested>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>

import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Menu from "primevue/menu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import BarTool from "@/components/bars/BarTool.vue";
import Spinner from "@/components/loading/Spinner.vue";
import Dialog from "@/components/dialog/Dialog.vue";

import {onMounted, ref, watch} from "vue";
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {BuildingVrDirection, BuildingVrDirectionImage} from "@/types/BuildingVr";
import Icon from "@/components/icons/Icon.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import {form} from "@/components/form/templates/FormBuildingVrDirectionImage"
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";
import useUtils from "@/common/useUtils";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import FormNested from "@/components/form/FormNested.vue";


const {get, save} = APIexecutor()
const {submit, submitRowReorder, remove} = useFormRequestBuilder()
const {d, d2, dr, data, images, useToggle} = useHelpers()
const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
const {sortByAsc} = useUtils()
const {payload, content, progress, project} = useStore()
const direction = ref<number|null>(0)
const directionItems = ref<{ name: string|null, id: number|null }[]>([])
const directions = ref<BuildingVrDirectionImage[]>([])
const loading = ref<boolean>(false)
const rm = ref<boolean>(false)
const options = ref<BuildingVrDirection[]>([])
const removeOptions = ref<BuildingVrDirection[]>([])

onMounted((): void => {
  options.value = project.value?.building_vr.building_vr_directions || []
  project.value?.building_vr.building_vr_directions.forEach((item, i) => {
    if (i === 0) {
      direction.value = item.id
    }
    directionItems.value.push({name: item.name, id: item.id})
  })
})

function create() {
  rm.value = false
  form[0][0].elements[1].disabled = false
  form[0][0].elements[1].model = direction.value
  useToggle({
    method: 'post',
    endpoints: ['app/building_vr_direction_images', 'project_details/' + project.value?.id],
    state: "project"
  })
}

function open(element: BuildingVrDirectionImage) {
  rm.value = true
  form[0][0].elements[1].disabled = true
  images.value = element.image ? [{image:element.image}] : []
    useToggle({
      method: 'patch',
      endpoints: ['app/building_vr_direction_images', 'project_details/' + project.value?.id],
      state: "project"
    }, element)
}

function saveOnSubmit(){
  loading.value = true
  submit({create: options.value, remove: removeOptions.value}, null, 'object').then(() => {
    loading.value = false
    d2.value = false
  })
}

function removeItem() {
  loading.value = true
  remove('app/building_vr_direction_images/' + data.value?.id).then(() => {
    dr.value = false
    get("project_details/" + project.value?.id, "project").then(() => {
      d.value = false
      loading.value = false
    })
  })
}

function removeImage(id: number | null) {
  loading.value = true
  payload.value = {
    method: "patch",
    endpoints: ["app/building_vr_direction_images/" + data.value.id, "project_details/" + project.value?.id],
    state: "project"
  }
  submit({image: null, thumbnail: null}, null, "object").then(() => {
    loading.value = false
    images.value = []
  })
}


const addOptionItem = (): void => {
  const obj: BuildingVrDirection = {
    id: null,
    building_vr: project.value?.building_vr.id || null,
    order_id: null,
    name: "方向" + (options.value.length + 1),
  }
  options.value.push(obj)
}

const removeOptionItem = (idx: number): void => {
  const filtered: BuildingVrDirection[] = options.value.filter((item, i) => {
    return i !== idx
  })
  options.value.forEach((item, i) => {
    if (idx === i && item.id) removeOptions.value.push(item)
  })
  options.value = filtered
}


const rightClickMenu = ref<DropdownMenu[]>([
  {
    label: "新規画像",
    command: () => {
      useToggle({
        method: "post",
        endpoints: ["app/building_vr_direction_images", "project_details/" + project.value?.id],
        state: "project",
      })
    }
  },
  {
    label: "行を削除する",
    command: () => {
      content.value = true
      remove("app/building_vr_direction_images/" + data.value?.id).then(() => {
        get("project_details/" + project.value?.id, "project").then(() => {
          content.value = false
        })
      })
    }
  },
])

watch(() => d2.value, val => {
  if (val) {
    payload.value = {
      method: "post",
      endpoints: ['app/building_vr_directions', 'project_details/'+project.value?.id],
      state: "project",
    }
  }
})

watch(() => direction.value, (val) => {
  project.value?.building_vr.building_vr_directions.forEach(item => {
    if (item.id === val) directions.value = item.building_vr_direction_images || []
  })
})

watch(() => project.value, val => {
  directionItems.value = []
  val?.building_vr.building_vr_directions.forEach(item => {
    if (item.id === direction.value) directions.value = item.building_vr_direction_images || []
    directionItems.value.push({name: item.name, id: item.id})
  })
})


</script>
<style>
#project_building_vr {
height: calc(100% - 54px);
}
#project_building_vr .option-datatable {
  padding-bottom: 0;
}

#project_building_vr .option-datatable.p-datatable .p-datatable-tbody > tr > td {
  background-color: #FFFFFF;
}

#project_building_vr .option-datatable.p-datatable .p-datatable-tbody > tr > td input.option-input {
  border: 0;
  outline: 0;
}

#project_building_vr button.add-option {
  margin-top: 20px;
  background-color: #f1f1f1;
  padding: 5px 10px;
  font-size: .7rem;
}

#project_building_vr .vr-direction-wrapper {
  padding: 14px;
  height: calc(100% - 116px);
}
</style>
