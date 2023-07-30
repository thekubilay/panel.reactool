<template>
  <div id="project_color_simulator" class="panel-board relative">
    <Spinner v-model="content"/>

    <BarTool class="justify-space-between">
      <div class="part-wrap first flex">
        <Dropdown style="min-width: 120px"
                  v-model="roomId"
                  :options="project.color_simulator_rooms" optionLabel="name" optionValue="id"
                  placeholder="ルーム選択"/>
        <Button type="button" class="submit-button icon-button" icon="pi pi-list" @click="isRCOn" aria-haspopup="true"
                aria-controls="rc_menu"/>
<!--        <Menu id="rc_menu" ref="rcm" class="rc" :model="dropdownItems" :popup="true"/>-->
        <Button @click="addRoom" style="margin-left:10px;width: 80px; height: 30px;" class="flex align-center justify-center" label="ルーム追加"></Button>
        <Button @click="editRoom" style="width: 80px; height: 30px;" class="flex align-center justify-center" label="ルーム編集"></Button>
        <Button @click="addRoomPart" style="width: 130px; height: 30px;" class="flex align-center justify-center" label="ルームパーツ追加"></Button>
        <Button @click="orderRooms" style="width: 130px; height: 30px;" class="flex align-center justify-center" label="ルームの並び替え"></Button>
      </div>
    </BarTool>

    <draggable tag="div"
               v-if="room"
               @end="submitRowReorder({value:room.room_parts}, {method:'post', endpoints: ['app/color_simulator_room_parts', 'project_details/'+project.id], state: 'project'})"
               :list="room.room_parts" class="room-parts-wrapper flex justify-space-between"
               handle=".handle" item-key="id">
      <template #item="{ element, index }">
        <div class="room-part-container" :class="[column]">
          <div class="header flex align-center">
            <div class="handle flex align-center grab"><i class="pi pi-bars"></i></div>
            <div class="title">{{ element.name }}</div>

            <Button @click="open(element)"
                    type="button"
                    class="edit"
                    icon="pi pi-pencil" icon-pos="left"
                    aria-haspopup="true"/>
          </div>
          <ContextColorSimulatorRoomPartItems :color_simulator_room_part="element.id"
                                              :partItems="element.room_part_items"/>
        </div>
      </template>
    </draggable>


    <Dialog v-model="d" title="ルームフォーム">
      <FormQuery v-model="d"
                 v-model:dr="dr"
                 close-after
                 :form="reform"
                 :data="data"
                 :remove="rm"
                 :query="query"
                 :submit="submit">
        <ContextImagesThumbnailContainer containerId="room_image_input"
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

    <Dialog v-model="d2" title="ルーム順番">
      <FormNested v-model="d2"
                  close-after
                  :form="reform">

        <DataTable :value="rooms" rowindex="index"
                   @rowReorder="rowReorder"
                   responsiveLayout="scroll" class="option-datatable">
          <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false"/>
          <Column field="name" header="ルーム名">
            <template #body="slotProps">
              <input class="option-input" type="text" v-model="slotProps.data.name" :placeholder="'選択項目'">
            </template>
          </Column>
        </DataTable>

        <template v-slot:actions>
          <div class="action-wrapper flex align-center">
            <button @click="d2=false" class="flex align-center justify-center cancel">中止</button>
            <button
              @click="sro()"
              class="flex align-center justify-center submit-or-next">登録
            </button>
          </div>
        </template>
      </FormNested>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Menu from "primevue/menu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "@/components/dialog/Dialog.vue";
import Spinner from "@/components/loading/Spinner.vue";
import BarTool from "@/components/bars/BarTool.vue";
import FormQuery from "@/components/form/FormQuery.vue";
import ContextImagesThumbnailContainer from "@/components/contexts/ContextImagesThumbnailContainer.vue";

import {onMounted, watch} from "vue";
import ProjectColorSimulator from "@/views/boards/ProjectColorSimulator";
import DialogDelete from "@/components/dialog/DialogDelete.vue";
import FormNested from "@/components/form/FormNested.vue";
import ContextColorSimulatorRoomPartItems from "@/components/contexts/ContextColorSimulatorRoomPartItems.vue";
import {form as FormColorSimulatorRoom} from "@/components/form/templates/FormColorSimulatorRoom";
import {form as FormColorSimulatorRoomPart} from "@/components/form/templates/FormColorSimulatorRoomPart";

const {
  d, d2, data, dr, rm, reform, query, loading, images, column,
  content, project,
  dropdownItems,
  rcm, payload,
  rooms, room, roomId,
  useToggle,
  isRCOn, rowReorder, sro,
  open, removeItem, removeImage,
  submit, submitRowReorder,
} = ProjectColorSimulator()

onMounted((): void => {
  rooms.value = project.value?.color_simulator_rooms || []
  project.value?.color_simulator_rooms.forEach((item, i) => {
    if (i === 0) roomId.value = item.id
  })
})

const addRoom = (): void => {
  console.log("ok")
  rm.value = false
  query.value = {
    project: project.value?.id || null
  }
  images.value = []
  reform.value = FormColorSimulatorRoom
  useToggle({
    method: "post",
    endpoints: ["app/color_simulator_rooms", "project_details/" + project.value?.id],
    state: "project"
  })
}


const editRoom = (): void => {
  rm.value = true
  query.value = {
    project: project.value?.id || null
  }
  reform.value = FormColorSimulatorRoom
  images.value = room.value?.image ? [{image: room.value?.image}] : []
  useToggle({
    method: "patch",
    endpoints: ["app/color_simulator_rooms/" + room.value?.id, "project_details/" + project.value?.id],
    state: "project"
  }, room.value)
}

const addRoomPart = (): void => {
  images.value = []
  rm.value = false
  query.value = {
    color_simulator_room: room.value?.id
  }
  reform.value = FormColorSimulatorRoomPart
  payload.value = {
    method: "post",
    endpoints: ["app/color_simulator_room_parts", "project_details/" + project.value?.id],
    state: "project"
  }
  d.value = true
}

const orderRooms = (): void => {
  rm.value = false
  reform.value = [[]]
  images.value = []
  payload.value = {
    method: "post",
    endpoints: ["app/color_simulator_rooms", "project_details/" + project.value?.id],
    state: "project"
  }
  d2.value = true
}


watch(() => project.value, val => {
  rooms.value = val?.color_simulator_rooms || []
  room.value = val?.color_simulator_rooms.find((item, i) => {
    return roomId.value === item.id
  }) as ColorSimulatorRoom
})

watch(() => roomId.value, val => {
  room.value = project.value?.color_simulator_rooms.find((item, i) => {
    return val === item.id
  }) as ColorSimulatorRoom
})

</script>

<style>
#project_color_simulator {
  height: calc(100% - 54px);
}

#project_color_simulator .part-wrap.first .pi {
  font-size: .7rem !important;
}


#project_color_simulator .option-datatable {
  padding-bottom: 0;
}

#project_color_simulator .option-datatable.p-datatable .p-datatable-tbody > tr > td {
  background-color: #FFFFFF;
}

#project_color_simulator .option-datatable.p-datatable .p-datatable-tbody > tr > td input.option-input {
  border: 0;
  outline: 0;
}


#project_color_simulator .room-parts-wrapper {
  padding: 14px;
  height: calc(100% - 55px);
}

#project_color_simulator .room-parts-wrapper .room-part-container {
  height: 100%;
  background-color: #FFFFFF;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header {
  height: 44px;
  padding: 0 14px;
  font-size: .8rem;
  border-bottom: 1px solid #f1f1f1;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header .handle {
  width: 30px;
  height: 30px;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header .title {
  padding-top: 1px;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header .p-button {
  background-color: rgba(241, 196, 15, 0.1);
  font-size: .8rem;
  color: rgba(241, 196, 15, 1);
  height: 24px;
  margin-left: auto;
  width: 24px;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header .p-button > * {
  font-weight: 400;
}

#project_color_simulator .room-parts-wrapper .room-part-container > .header .p-button > .pi {
  font-size: .7rem;
  top: 1px;
}
</style>
