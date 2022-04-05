import {Form} from "../../../types/Form";
import useStore from "../../../stores/main";

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
          label: "ファイル名",
          hint: null,
          placeholder: "間取り",
          required: true,
          id: "name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "class_name",
          type: "text",
          model: null,
          label: "CSSクラス",
          hint: null,
          placeholder: "class-name",
          required: false,
          id: "class_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "type",
          type: "text",
          model: "InputText",
          label: "タイプ",
          hint: null,
          required: false,
          rules: [],
          id: "type_input",
          disabled: false,
          // @ts-ignore
          options: [ {name: "テキスト列", value: "InputText"}, {name: "数字列", value: "InputNumber"},{name: "選択列", value: "Dropdown"}, {name: "画像列", value: "FileInput"}],
          optionLabel: "name",
          optionValue: "value",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-1", "relative"],
        },
      ],
    },
  ]
]
