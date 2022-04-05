<template>
  <div class="vr-toolbar flex justify-space-between align-center" :class="{visible: display}">
    <div class="part-wrap">
<!--      <button @click="setPortal()" class="add-room flex align-center justify-center">新規ポータル</button>-->
    </div>
    <div class="part-wrap part-end">
      <button @click="emits('update:modelValue', false)" class="close">中止</button>
      <button @click="setQueries()" class="save">登録</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {PropType, ref} from "vue";
import {RoomVrFloor, RoomVrPortal} from "@/types/RoomVr";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useStore from "@/helpers/useStore";

interface Emits {
  (e: "update:modelValue", modelValue: boolean): void;

  (e: "update:loading", loading: boolean): void;

  (e: "update:portals", portals: RoomVrPortal[]): void;
}

const emits = defineEmits<Emits>()
const props = defineProps({
  d: Boolean as PropType<boolean>,
  display: {type: Boolean as PropType<boolean>, default: false},
  loading: Boolean as PropType<boolean>,
  roomVrFloor: Number as PropType<number>,
  compass: Object as PropType<RoomVrFloor>,
  portal: Number as PropType<number>,
  portals: {type: Array as PropType<any>, default: []},
})

const {payload, project,} = useStore()
const {submit,} = useFormRequestBuilder()
const create = ref<RoomVrFloor[]>([])
const remove = ref<number[]>([])

function setPortal(): void {
  emits("update:loading", true)
  payload.value = {
    method: "post",
    endpoints: ["app/room_vr_next_rooms", "project_details/" + project.value?.id],
    state: "project"
  }
  const object: object = {
    create: [
      {
        room_vr_floor: props.roomVrFloor || null,
        next_room: props.portal || null,
        button_x: 0.955,
        button_y: 10
      }
    ],
    remove: []
  };
  submit(object, null, "object")
}

function setQueries(): void {
  emits("update:loading", true)
  payload.value = {
    method: "post",
    endpoints: ["app/room_vr_next_rooms", "project_details/" + project.value?.id],
    state: "project"
  }
  submit({create: props.portals}, null, "object").then(() => {
    payload.value = {
      method: "patch",
      endpoints: ["app/room_vr_floors/" + props.compass?.id, "project_details/" + project.value?.id],
      state: "project"
    }
    submit({
      vr_start: props.compass?.vr_start,
      compass_start: props.compass?.compass_start,
      compass_left: props.compass?.compass_left,
      compass_top: props.compass?.compass_top,
    }, [[]], "formData").then(() => {
      emits("update:modelValue", false)
    })
  })
}

</script>

<style>
.vr-toolbar {
  opacity: 0;
  transition: .6s;
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
}

.vr-toolbar.visible {
  opacity: 1;
}

.vr-toolbar .part-wrap button.add-room {
  margin-left: 14px;
  width: 90px;
  height: 34px;
  background-color: #1a1f21;
  color: #edeae9;
}

.vr-toolbar .part-wrap button {
  height: 34px;
}

.vr-toolbar .part-wrap.part-end button {
  width: 70px;
}

.vr-toolbar .part-wrap.part-end button.close {
  background-color: #edeae9;
  color: #575656;
}

.vr-toolbar .part-wrap.part-end button.save {
  background-color: #1D4ED8;
  color: #FFFFFF;
  margin-left: 14px;
  margin-right: 14px;
}

.vr-toolbar .part-wrap.part-end button.save {
  background-color: #1D4ED8;
}
</style>
