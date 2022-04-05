import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "PART名",
          hint: null,
          placeholder: "床",
          required: true,
          id: "part_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputNumber",
          db_column_name: "column_count",
          type: "text",
          model: 4,
          label: "カード数",
          hint: "一行に並びたいカラーカード数",
          placeholder: "4",
          required: true,
          id: "column_count_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
  ]
]
