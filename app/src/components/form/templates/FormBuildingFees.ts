import {Form} from "@/types/Form";

export const form: Form[][] = [
  [{ // form row
    classes: ["flex", "justify-space-between"],
    elements: [ // columns
      { // columns in row
        component: null,
        name: "InputText",
        db_column_name: "management_fee",
        type: "text",
        model: null,
        label: "管理費",
        hint: null,
        placeholder: "140000",
        required: false,
        id: "management_fee_input",
        rules: [],
        disabled: false,
        props: ["placeholder", "required", "disabled"],
        classes: ["flex-column", "column-2-space"],
      },
      { // columns in row
        component: null,
        name: "InputText",
        db_column_name: "fixing_fee",
        type: "text",
        model: null,
        label: "修理費",
        hint: null,
        placeholder: "12300",
        required: false,
        id: "fixing_input",
        rules: [],
        disabled: false,
        props: ["placeholder", "required", "disabled"],
        classes: ["flex-column", "column-2-space"],
      },
    ],
  },]
]
