import {Form} from "@/types/Form";
import {shallowRef} from "vue";

export default function () {
  const setDynamics = (rows: Form[][]): any => {
    let counter: number = 0
    return new Promise((resolve, reject) => {
      if (rows[0].length) {
        rows[0].forEach((row) => {
          row.elements.forEach((column) => {
            /* select witch module to load */
            if (column.name === "InputText") {
              import("primevue/inputtext").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "InputNumber") {
              import("primevue/inputnumber").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "Dropdown") {
              import("primevue/dropdown").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "Checkbox") {
              import("primevue/checkbox").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "Password") {
              import("primevue/password").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "Textarea") {
              import("primevue/textarea").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "RadioButton") {
              import("primevue/radiobutton").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "FileInput") {
              import("@/components/form/inputs/FileInput.vue").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "SliderInput") {
              import("primevue/slider").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
            if (column.name === "CalendarInput") {
              import("primevue/calendar").then((component) => {
                column.component = shallowRef<any>(component.default)
              })
            }
          })
          counter += 1
          if (counter === rows.length) {
            resolve(true)
          }
        })
      } else {
        resolve(true)
      }

      // reject(false)
    })
  }

  return {
    setDynamics,
  }
}
