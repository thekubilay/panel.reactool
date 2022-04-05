import {Form} from "@/types/Form";

export const form: Form[][] = [
  [ // tab
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "会社名",
          hint: null,
          placeholder: "〇〇株式会社",
          required: true,
          id: "company_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]

