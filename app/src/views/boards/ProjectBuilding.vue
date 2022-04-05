<template>
  <div id="project_building" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap">
        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規階"
                @click="create()"/>
      </div>
      <div class="part-wrap part-end">
        <Button @click="open()" type="button" class="tool-button" label="基本費設定"/>
        <Button @click="toParkingFees()" type="button" class="tool-button" label="駐車場費一覧"/>
      </div>
    </BarTool>

    <div class="b_spreadsheet-wrapper overflow-y">
      <ContextBuildingFloor :projectId="project.id" :floors="floors"/>
    </div>

    <Dialog v-model="d" title="フォーム">
      <FormQuery v-model="d"
                 close-after
                 :form="form"
                 :data="data"
                 :query="{}"
                 :submit="submit"/>
    </Dialog>


  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import ContextBuildingFloor from "@/components/contexts/ContextBuildingFloor.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import Dialog from "@/components/dialog/Dialog.vue"

import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";
import {Floor} from "@/types/Building";
import {onMounted, ref, watch} from "vue";
import {form} from "@/components/form/templates/FormBuildingFees"
import {useRoute, useRouter} from "vue-router";
import useHelpers from "@/common/useHelpers";


const {submit} = useFormRequestBuilder()
const {payload, project, content} = useStore()
const {d, data, useToggle} = useHelpers()
const floors = ref<Floor[]>([])
const route = useRoute()
const router = useRouter()

onMounted((): void => {
  floors.value = project.value?.building.floors || []
})

function create(){
  payload.value = {
    method: "post",
    endpoints:["app/building_floors", "project_details/"+project.value?.id],
    state: "project",
  }
  submit({id: null, building: project.value?.building.id, name: null, order_id: null,}, null)
}

function open(): void {
  useToggle({
    method: "patch",
    endpoints:["app/building/"+project.value?.building.id, "project_details/"+project.value?.id],
    state: "project",
  }, project.value?.building)
}

function toParkingFees(): void {
  router.push({name: "ProjectParkingFees", params: {cid: route.params.cid, dynid: route.params.dynid}})
}

watch(() => project.value, val => {
  floors.value = val?.building.floors || []
})

</script>

<style>
#project_building {
  height: calc(100% - 54px);
}
#project_building .b_spreadsheet-wrapper {
  width: 100%;
  height: calc(100% - 55px);
  padding: 14px;
}
</style>
