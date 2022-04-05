import APIexecutor from "@/services/APIexecutor";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import {ref} from "vue";
import {Form} from "@/types/Form";
import {Vista, VistaContent} from "@/types/Vista";
import {form as FormVistaContent} from "@/components/form/templates/FormVistaContent";
import {form as FormVista} from "@/components/form/templates/FormVista";

export default function () {
  const {get, save} = APIexecutor()
  const {submit, submitRowReorder, remove} = useFormRequestBuilder()
  const {d, dr, data, images, useToggle} = useHelpers()
  const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
  const {payload, content, progress, project} = useStore()
  const reform = ref<Form[][]>()
  const query = ref<Vista | VistaContent>()
  const time = ref<string>("昼")
  const times = ref<string[]>(["昼", "夕"])
  const type = ref<string>("")
  const types = ref<string[]>([])
  const vistas = ref<VistaContent[] | undefined>([])
  const closeAfter = ref<boolean>(true)
  const slider = ref<number>(0)
  const loading = ref<boolean>(false)
  const rm = ref<boolean>(false)

  function createOrUpdate(which:string="content", element: Vista|VistaContent|null = null) {
    if (which==="content") {
      closeAfter.value = true
      rm.value = false
        reform.value = FormVistaContent
        FormVista[0][0].elements[0].model = time.value
        query.value = {vista_simulator: project.value?.vista_simulator.id, compass_start: 1, compass_left: 1, compass_top:1}
        useToggle({
          method: 'post',
          endpoints: ['app/vista_simulator_contents', 'project_details/' + project.value?.id],
          state: "project"
        })
    } else {
      closeAfter.value = false
      reform.value = FormVista
      query.value = {project: project.value?.id}
      useToggle({
        method: 'patch',
        endpoints: ['app/vista_simulators/'+element?.id, 'project_details/' + project.value?.id],
        state: "project"
      }, element)
    }
  }

  function open(element: VistaContent) {
    images.value = element.image ? [{image: element.image}]: []
    closeAfter.value = true
    rm.value = true
    reform.value = FormVistaContent
    query.value = {vista_simulator: project.value?.vista_simulator.id}
    useToggle({
      method: 'patch',
      endpoints: ['app/vista_simulator_contents/'+element.id, 'project_details/' + project.value?.id],
      state: "project"
    }, element)
  }

  function removeItem() {
    loading.value = true
    remove('app/vista_simulator_contents/' + data.value?.id).then(() => {
      dr.value = false
      get("project_details/" + project.value?.id, "project").then(() => {
        d.value = false
        loading.value = false
      })
    })
  }

  const removeImage = (): void => {
    closeAfter.value = false
    loading.value = true
    payload.value = {
      method: 'patch',
      endpoints: ['app/vista_simulators/' + data.value.id, 'project_details/' + project.value?.id],
      state: "project"
    };
    submit({image: null, thumbnail: null}, null).then((res) => {
      loading.value = false
    })
  }

  const removeContentImage = (): void => {
    closeAfter.value = false
    loading.value = true
    payload.value = {
      method: 'patch',
      endpoints: ['app/vista_simulator_contents/' + data.value.id, 'project_details/' + project.value?.id],
      state: "project"
    };
    submit({image: null, thumbnail: null}, null).then((res) => {
      loading.value = false
      images.value = []
    })
  }

  const rightClickMenu = ref<DropdownMenu[]>([
    {
      label: "新規眺望",
      command: () => {
        useToggle({
          method: "post",
          endpoints: ["app/vista_simulator_contents", "project_details/" + project.value?.id],
          state: "project",
        })
      }
    },
    {
      label: "行を削除する",
      command: () => {
        content.value = true
        remove("app/vista_simulator_contents" + data.value?.id).then(() => {
          get("project_details/" + project.value?.id, "project").then(() => {
            content.value = false
          })
        })
      }
    },])

  return {
    reform, query, type, types, time, times, vistas, rm, loading, slider, closeAfter,
    d, dr, data, content, images,
    progress, project,
    createOrUpdate, open, removeItem, removeImage, removeContentImage,
    rightClickMenu, rcm,
    isRCOn,
    useToggle,
    submit, submitRowReorder, remove
  }
}
