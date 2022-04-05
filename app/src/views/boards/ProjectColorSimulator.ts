import {ref, computed} from "vue";
import {Form} from "@/types/Form";
import {form as FormColorSimulatorRoom} from "@/components/form/templates/FormColorSimulatorRoom"
import {form as FormColorSimulatorRoomPart} from "@/components/form/templates/FormColorSimulatorRoomPart"
import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";

export default function () {
  type Query = ColorSimulatorRoom | ColorSimulatorRoomPart | ColorSimulatorRoomPartItem | null | {project?:number|null, color_simulator_room?: number|null};
  const {get, save} = APIexecutor()
  const {submit, submitRowReorder, remove} = useFormRequestBuilder()
  const {d, d2, dr, data, images, useToggle} = useHelpers()
  const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
  const {payload, content, progress, project} = useStore()
  const rm = ref<boolean>(false)
  const loading = ref<boolean>(false)

  const query = ref<Query>(null)
  const reform = ref<Form[][]>(FormColorSimulatorRoom)
  const rooms = ref<ColorSimulatorRoom[]>([])
  const roomId = ref<number | null>(null)
  const room = ref<ColorSimulatorRoom>()

  const dropdownItems = ref([
    {
      icon: "pi pi-plus",
      label: '新規ルーム',
      command: () => {
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
    },
    {
      icon: "pi pi-pencil",
      label: 'ルーム編集',
      command: () => {
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
    },

    {
      icon: "pi pi-bars",
      label: 'ルーム並び替え',
      command: () => {
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
    },

    {
      icon: "pi pi-plus",
      label: '新規ルームPART',
      command: () => {
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
    },
  ])

  const column = computed<string>(() => {
    if (room.value?.room_parts.length > 1)
      return "column-" + room.value?.room_parts.length + "-space"
    else
      return "column-2-space"
  })

  const open = (element: ColorSimulatorRoom): void => { // edit room part
    query.value = {
      color_simulator_room: room.value?.id
    }
    reform.value = FormColorSimulatorRoomPart
    rm.value = true
    useToggle({
      method: "patch",
      endpoints: ["app/color_simulator_room_parts/" + element.id, "project_details/" + project.value?.id],
      state: "project"
    }, element)
  }

  const removeImage = (id: number | null): void => {
    loading.value = true
    payload.value = {
      method: "patch",
      endpoints: ["app/color_simulator_rooms/" + data.value.id, "project_details/" + project.value?.id],
      state: "project"
    }
    submit({image: null, thumbnail: null}, null, "object").then(() => {
      loading.value = false
      images.value = []
    })
  }

  const removeItem = () => {
    loading.value = true
    const endpoint = query.value?.hasOwnProperty("project") ? 'app/color_simulator_rooms/' : "app/color_simulator_room_parts/"
    remove(endpoint + data.value?.id).then(() => {
      dr.value = false
      get("project_details/" + project.value?.id, "project").then(() => {
        d.value = false
        loading.value = false
      })
    })
  }


  const rowReorder = (event: any): void => {
    rooms.value = event.value;
  }

  const sro = () => {
    loading.value = true
    payload.value = {
      method: 'post',
      endpoints: ['app/color_simulator_rooms', 'project_details/' + project.value?.id],
      state: 'project'
    }
    submit({reordered: rooms.value}, null, "object").then(() => {
      loading.value = false
      d2.value = false
    })
  }


  return {
    d, d2, data, dr, rm, reform, query, loading, images, column,
    content, project,
    dropdownItems,
    rcm,
    rooms, room, roomId,
    isRCOn, rowReorder, sro,
    open, removeItem, removeImage,
    submit, submitRowReorder,
  }
}
