import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "price",
          type: "text",
          model: null,
          label: "物件価格",
          hint: "万円としてご入力",
          placeholder: "4000",
          required: false,
          id: "interest_rate_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "interest_rate",
          type: "text",
          model: null,
          label: "金利",
          hint: null,
          placeholder: "140000",
          required: false,
          id: "interest_rate_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "interest_rate_max",
          type: "text",
          model: null,
          label: "金利MAX",
          hint: null,
          placeholder: "12300",
          required: false,
          id: "interest_rate_max_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "deposit",
          type: "text",
          model: null,
          label: "頭金",
          hint: null,
          placeholder: "140000",
          required: false,
          id: "deposit_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-3-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "deposit_max",
          type: "text",
          model: null,
          label: "頭金MAX",
          hint: null,
          placeholder: "12300",
          required: false,
          id: "deposit_max_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-3-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "deposit_step",
          type: "text",
          model: null,
          label: "頭金ステップ",
          hint: null,
          placeholder: "50",
          required: false,
          id: "deposit_step_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-3-space"],
        },
      ],
    },
  ]
]
