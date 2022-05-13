import APIexecutor from "@/services/APIexecutor";
import useStore from "@/helpers/useStore";
import {Form} from "@/types/Form";
import {Payload} from "@/types/Payload";


export default function () {
  const {payload, onload, content,} = useStore()
  const {get, save} = APIexecutor()


  function reFormatDateObject(date: Date) {
    return new Date(date).toISOString().substring(0, 10)
  }

  function reFormatQuery(key: string, data: any) {
    if (key === "start_date" || key === "end_date" || key === "remove_date") return reFormatDateObject(data)
    else return data
  }


  const retrieve = (endpoints: string[]): void => {
    onload.value = "ローディング..."
    endpoints.forEach((ep, i) => {
      if (i > 0) get(ep, payload.value.state).then(() => {
        if (i === payload.value.endpoints.length) {
          content.value = false
          onload.value = ""
        }
      })
    })
  }

  const submitAsFormObject = (query: any): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      save(payload.value.endpoints[0], query, payload.value.method).then((response) => {
        onload.value = "アップロード中"
        retrieve(payload.value.endpoints)
        resolve(response)
      })
    })
  }

  const submitAsFormData = (query: any, form: Form[][]): Promise<any> => {
    onload.value = "アップロード中"
    return new Promise<any>((resolve, reject) => {
      if (form) {
        form.forEach(rows => {
          rows.forEach(row => {
            row.elements.forEach(element => {
              if (element.name === "FileInput" && typeof element.model === "string") {
                query[element.db_column_name] = null
              } else {
                query[element.db_column_name] = reFormatQuery(element.db_column_name, element.model)
              }
            })
          })
        })
      }

      const fd = new FormData
      const keys = Object.keys(query)
      keys.forEach(key => {
        if (query[key] || typeof query[key] === "boolean") {
          fd.append(key, query[key])
          if (key === "image") {
            let thumbnail = query[key]
            thumbnail.name = thumbnail.name+"thumbnail"
            fd.append("thumbnail", thumbnail)
            if (!keys.includes("building_floor")) {
              fd.append("type", query[key].type)
            }
          } else if (key === "file") {
            fd.append("type", query[key].type.split("/")[1])
            fd.append("size", query[key].size)
          } else if (key === "video") {
            fd.append("size", query[key].size)
          } else if (key === "pdf") {
            fd.append("pdf_size", query[key].size)
          }
        }
      })

      save(payload.value.endpoints[0], fd, payload.value.method).then((response) => {
        retrieve(payload.value.endpoints)
        resolve(response)
      })
    })
  }

  const submitRowReorder = (arr: { value: any[] }, p: Payload): Promise<boolean> => {
    content.value = true
    return new Promise<boolean>((resolve, reject) => {
      payload.value = p
      arr.value.forEach((item: { order_id: any; }, i: number) => {
        item.order_id = i + 1
      })
      const data = {reordered: arr.value}
      submitAsFormObject(data).then(() => {
        retrieve(payload.value.endpoints)
        content.value = false
        resolve(true)
      })
    })
  }


  const submit = (query: any, form: Form[][]|null, submitType: string = "formData"): Promise<any> => {
    return new Promise<any>((resolve) => {
      if (submitType === "formData" && form) submitAsFormData(query, form).then((response) => {
        resolve(response)
      })
      else if ("object") submitAsFormObject(query).then((response) => {
        resolve(response)
      })
    })
  }

  const remove = (endpoint: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      save(endpoint, {}, "delete").then(() => {
        resolve(true)
      })
    })
  }

  return {
    submitAsFormObject, submitAsFormData, submitRowReorder, submit, remove
  }
}
