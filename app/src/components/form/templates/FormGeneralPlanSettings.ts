import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "position",
          type: "text",
          model: 0,
          label: "タブ配置",
          hint: null,
          required: true,
          rules: [],
          id: "position_input",
          disabled: false,
          options: [ {name: "下センター", value: 1}, {name: "左上", value: 2}, {name: "右上", value: 3}, {name: "上センター", value: 4}],
          optionLabel: "name",
          optionValue: "value",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
      ],
    },
  ]
]
