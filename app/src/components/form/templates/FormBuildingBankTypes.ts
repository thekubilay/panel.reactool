import {Form} from "@/types/Form";

export const form: Form[][] = [
  [{ // form row
    classes: ["flex", "justify-space-between"],
    elements: [ // columns
      { // columns in row
        component: null,
        name: "InputText",
        db_column_name: "name",
        type: "text",
        model: null,
        label: "銀行名",
        hint: null,
        placeholder: "住友銀行",
        required: false,
        id: "name_input",
        rules: [],
        disabled: false,
        props: ["placeholder", "required", "disabled"],
        classes: ["flex-column", "column-2-space"],
      },
      { // columns in row
        component: null,
        name: "InputText",
        db_column_name: "rate",
        type: "text",
        model: null,
        label: "金利",
        hint: null,
        placeholder: "0.345",
        required: false,
        id: "rate_input",
        rules: [],
        disabled: false,
        props: ["placeholder", "required", "disabled"],
        classes: ["flex-column", "column-2-space"],
      },
    ],
  },]
]
