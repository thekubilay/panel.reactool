import {Form} from "@/types/Form";

export default function (){

  const setFormDefaultData = (form: Form[][], data: any) => {
    if (data) {
      form.forEach(rows => {
        rows.forEach(row => {
          row.elements.forEach(column => {
            if (column.name === "Dropdown" && typeof column.model === "boolean") {
              column.model = data[column.db_column_name]
            } else if (column.name === "Dropdown" && typeof column.model !== "boolean") {
              if (data[column.db_column_name]) {
                column.model = data[column.db_column_name]
              } else {
                column.model = null
              }
            } else if (column.name === "InputNumber" || column.name === "SliderInput") {
              column.model = data[column.db_column_name] ? parseInt(data[column.db_column_name]) : null
            } else {
              if (column.name === "FileInput") {
                //  return
              } else {
                column.model = data[column.db_column_name]
              }
            }
          })
        })
      })
    }
  }

  const setClear = (data: Form[][]): Form[][] => {
    data.forEach(rows => {
      rows.forEach(row => {
        row.elements.forEach(column => {
          if (column.name === "Dropdown" && typeof column.model === "boolean") {
            if (column.db_column_name === "sub") {
              column.model = false
            } else {
              column.model = true
            }
          }
          else if (column.name === "Dropdown" && typeof column.model !== "boolean") {}
          else if(column.name !== "Dropdown") {
            column.model = null
          }
        })
      })
    })
    return data
  }

  return {
    setFormDefaultData, setClear,
  }
}
