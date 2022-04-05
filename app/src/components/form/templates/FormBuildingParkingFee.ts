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
        label: "駐車場名",
        hint: null,
        placeholder: "140000",
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
        db_column_name: "price",
        type: "text",
        model: null,
        label: "駐車場費",
        hint: null,
        placeholder: "12300",
        required: false,
        id: "price_input",
        rules: [],
        disabled: false,
        props: ["placeholder", "required", "disabled"],
        classes: ["flex-column", "column-2-space"],
      },
    ],
  },]
]
