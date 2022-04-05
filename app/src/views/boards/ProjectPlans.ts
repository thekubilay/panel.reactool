import {ref, computed} from "vue";
import {PlanContent, PlanContext, PlanField, PlanFieldOption} from "@/types/Plans";
import {Form} from "@/types/Form";
import {form as FormPlanField} from "@/components/form/templates/FormPlanField";
import {form as FormPlanContext} from "@/components/form/templates/FormPlanContext";
import useFormRequestBuilder from "@/helpers/useFormRequestBuilder";
import useHelpers from "@/common/useHelpers";
import useRightClickHandler from "@/helpers/useRightClickHandler";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import ProjectPlansQueries from "@/views/boards/ProjectPlansQueries";


export default function () {
  type Query = PlanContent | PlanContext | PlanField | PlanFieldOption
  const {get, save} = APIexecutor()
  const {d, dr, images, data, useToggle} = useHelpers()
  const {submit, submitRowReorder, submitAsFormObject, remove} = useFormRequestBuilder()
  const {rcm, rcmOpened, isRCOn} = useRightClickHandler(data)
  const {payload, project, progress, onload, content} = useStore()
  const {q1, q2} = ProjectPlansQueries(project)
  const fields = computed<PlanField[] | undefined>(() => project.value?.plan_fields)
  const contents = computed<PlanContent[] | undefined>(() => project.value?.plan_contents)
  const reform = ref<Form[][]>(FormPlanField)
  const loading = ref<boolean>(false)
  const query = ref<Query>()
  const rm = ref<boolean>(false)
  const containerId = ref<string>("image_input")
  const response = ref<any>(null)
  const dropdown = ref<boolean>(false)
  const createOptions = ref<number[]>([])
  const updateOptions = ref<number[]>([])
  const removedOptions = ref<number[]>([])
  const d2 = ref<boolean>(false)
  const rightClickMenu = ref<DropdownMenu[]>([
    {
      label: "行を複製する",
      command: () => {
        content.value = true
        save("app/plan_contents", {duplicate: true, project: project.value?.id,}, "post")
          .then((response: any) => {
            const contexts: PlanContext[] = data.value.plan_contexts.map((item: any) => {
              item.plan_content = response.id
              item.id = null
              return item
            })
            payload.value = {
              method: "post",
              endpoints: ["app/plan_contexts", "project_details/" + project.value?.id],
              state: "project"
            }
            submit({duplicate: contexts}, null, "object").then(() => {
              content.value = false
            })
          })
      }
    },
    {
      label: "行を削除する",
      command: () => {
        content.value = true
        remove("app/plan_contents/"+data.value.id).then(() => {
          get("project_details/"+project.value?.id, "project").then(() => {
            content.value = false
          })
        })
      }
    },])


  // create row
  const cr = () => {
    payload.value = {
      method: "post",
      endpoints: ["app/plan_contents", "project_details/" + project.value?.id],
      state: "project"
    }
    content.value = true
    const row: PlanContext[] = []
    fields.value?.forEach(field => {
      const obj: PlanContext = {
        id: null,
        order_id: null,
        plan_field: field,
        plan_content: null,
        value: "",
        field: field.type,
        image: null,
        thumbnail: null,
      }
      row.push(obj)
    })

    submit({create: row, project: project.value?.id}, null, "object").then(() => {
      content.value = false
    })
  }

  // create field
  const cf = (): void => {
    q1.plan_field_options = []
    query.value = q1
    query.value.order_id = fields.value && fields.value.length ? (fields.value.length + 1) : 1
    reform.value = JSON.parse(JSON.stringify(FormPlanField))
    useToggle({
      method: 'post',
      endpoints: ['app/plan_fields', 'project_details/' + project.value?.id],
      state: "project"
    })
  }

  // edit field
  const ef = (element: PlanField): void => {
    rm.value = true
    query.value = q1
    query.value.order_id = element.order_id
    query.value.plan_field_options = element.plan_field_options
    reform.value = JSON.parse(JSON.stringify(FormPlanField))

    reform.value.forEach(tab => {
      tab.forEach(row => {
        row.elements.forEach(el => {
          if (el.db_column_name === "type") el.disabled = true
        })
      })
    })

    useToggle({
      method: 'patch',
      endpoints: ['app/plan_fields/' + element.id, 'project_details/' + project.value?.id],
      state: "project"
    }, element)
  }

  // edit context
  const ec = (content: { id: number, plan_contexts: PlanContext[] }): void => {
    query.value = q2
    data.value = content
    payload.value = {
      method: "post",
      endpoints: ['app/plan_contents/' + content.id, "project_details/" + project.value?.id],
      state: "project"
    }

    let reformed: Form[][] = [[]]
    fields.value?.forEach((field, i) => {
      FormPlanContext.forEach(row => {
        let element = row.elements[0]
        if (element.name === field.type) {
          let parsed = JSON.parse(JSON.stringify(row.elements[0]))
          parsed.db_column_name = "value"
          parsed.label = field.name
          content.plan_contexts.forEach((item: any) => {
            if (item.plan_field.id === field.id) {
              //@ts-ignore
              if (["金額", "価格"].includes(field.name)) {
                parsed["mode"] = "currency"
                parsed.props.push("mode")
                parsed["locale"] = "jp-JP"
                parsed.props.push("locale")
                parsed["currency"] = "JPY"
                parsed.props.push("currency")
              }
              if (item.field === "InputNumber") {
                if (item.value && item.value !== ""){
                  parsed.model = parseInt(item.value)
                } else {
                  parsed.model = null
                }
              } else if (item.field === "Dropdown") {
                parsed.options = field.plan_field_options
                parsed.optionValue = "name"
                parsed.model = item.value
              } else {
                parsed.model = item.value
              }
            }
          })
          const obj: any = {classes: ["flex"], elements: [parsed]}
          reformed[0].push(obj)
        }
      })
    })
    reform.value = reformed
    d2.value = true
  }

  const saveRow = () => {
    payload.value = {
      method:"post",
      endpoints: ["app/plan_contexts", "project_details/"+project.value?.id],
      state: "project"
    }
    let row: { update: object[] } = {update: []}
    let files: { id: null | number, data: FormData | null }[] = []
    data.value.plan_contexts.forEach((item: PlanContext, i: number) => {
      item.value = reform.value[0][i].elements[0].model
      row.update.push({id: item.id, value: item.value})
      if (item.field === "FileInput") {
        const fd: FormData = new FormData
        if (reform.value[0][i].elements[0].model){
          fd.append("image", reform.value[0][i].elements[0].model)
          fd.append("thumbnail", reform.value[0][i].elements[0].model)
          files.push({id: item.id, data: fd})
        }
      }
    })
    submit(row, null, "object").then(() => {
      if (files.length) {
        files.forEach((file, i) => {

          payload.value = {
            method:"patch",
            endpoints: ["app/plan_contexts/"+file.id, "project_details/"+project.value?.id],
            state: "project"
          }
          submit(file.data, null,).then(() => {
            if (files.length === i+1) {
              d2.value = false
            }
          })
        })
      } else {
        d2.value = false
      }
    })
  }

  const removeItem = (ep:string):void =>{
    content.value = true
    remove(ep+data.value.id).then(() => {
      d.value = false
      dr.value = false
      get("project_details/"+project.value?.id, "project").then(() => {
        rm.value = false
        content.value = false
      })
    })
  }

  const reorderOptions = (event: any): void => {
    q1.plan_field_options = event.value;
  }

  const co = (): void => {
    const obj: PlanFieldOption = {
      id: null, order_id: null, name: "選択項目 " + (q1.plan_field_options.length + 1),
      plan_field: null
    }
    q1.plan_field_options.push(obj)
    //@ts-ignore
    createOptions.value.push(obj)
  }

  // remove option
  const ro = (id: number): void => {
    const parsed = q1.plan_field_options

    parsed.forEach((item, idx) => {
      if (idx === id && item.id){
        removedOptions.value.push(item.id)
      }
    })

    q1.plan_field_options = q1.plan_field_options.filter((item, idx) => {
      return idx !== id
    })
  }

  // create option after dropdown field created or editted
  const so = (field: PlanField): void => {
    payload.value = {
      method: "post",
      endpoints: ["app/plan_field_options", 'project_details/' + project.value?.id],
      state: "project"
    }
    if (field.hasOwnProperty("type") && field.type === "Dropdown") {
      q1.plan_field_options.forEach((item, idx) => {
        item.order_id = idx + 1
        item.plan_field = field.id
        //@ts-ignore
        if (item.id) updateOptions.value.push(item)
      })

      submit({create: createOptions.value, update:updateOptions.value, remove:removedOptions.value}, null, "object").then(() => {
        removedOptions.value = []
        createOptions.value = []
        updateOptions.value = []
        // content.value = false
      })
    }
  }

  // acivate dropdown
  const sd = (form: Form[][]) => {
    form.forEach(item => {
      item.forEach(element => {
        element.elements.forEach(input => {
          dropdown.value = input.name === "Dropdown" && input.model === "Dropdown";
        })
      })
    })
  }

  return {
    reform, query, dropdown,
    d, d2, dr, rm, data, response, q1,
    containerId,
    loading, content, project, progress,
    fields, contents,
    rightClickMenu, rcm,
    isRCOn,
    submit, submitRowReorder, reorderOptions, saveRow, removeItem,
    cr, cf, ef, ec, co, ro, so, sd,
  }
}
