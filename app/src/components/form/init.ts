import {Form} from "@/types/Form";
import {ref} from "vue";

export default function () {
  const reform = ref<Form[][]>([])
  const requery = ref<any>(null)

  function reFormatDateObject(date: Date) {
    return new Date(date).toISOString().substring(0, 10)
  }

  function catalyst(key: string, data: any) {
    if (key === "start_date" || key === "end_date") return reFormatDateObject(data)
    else return data
  }

  const setProps = (column: any): object => {
    return column.props.reduce((obj: any, key: string) => {
      obj[key] = column[key];
      return obj
    }, {})
  }

  const setFormQueryValues = (form: Form[][], query: any, tab: number): Promise<boolean> => {
    return new Promise<boolean>(resolve => {
      requery.value = query;
      reform.value = form.filter((el, idx) => idx === tab);

      form.forEach(rows => {
        rows.forEach(row => {
          row.elements.forEach(element => {
            requery.value[element.db_column_name] = catalyst(element.db_column_name, element.model)
          })
        })
      });

      resolve(true)
    })
  }

  return {
    reform, requery,
    setProps, setFormQueryValues
  }
}
