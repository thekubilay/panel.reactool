import {Form} from "@/types/Form";

interface Rules {
  valid: boolean,
  errors: string[]
}

export default function () {
  const isElementValid = (column: any): object => {
    let data: Rules = {
      valid: true,
      errors: []
    }

    if (column.model && column.required) {
      column.rules.forEach((fn: any) => {
        data.errors.push(fn(column.model))
      })
      data.errors = data.errors.filter(item => {
        return "" !== item
      })
      data.errors = [...new Set(data.errors)]
    }

    data.valid = !column.required || (column.model !== "") || typeof column.model === "number"
    return data
  }

  const isFormValid = (tabs: Form[][]): boolean => {
    let required = [] as HTMLElement[];
    tabs.forEach(rows => {
      rows.forEach(row => {
        row.elements.forEach((column) => {
          if ((column.required && (!column.model && typeof column.model !== "boolean"))) {
            if (column.id) {
              const element: HTMLElement = document.getElementById(column.id) as HTMLElement;
              element.classList.add("error")
              required.push(element)
            }
          }
        })
      })
    })

    return !required.length
  }


  return {
    isElementValid, isFormValid
  }
}
