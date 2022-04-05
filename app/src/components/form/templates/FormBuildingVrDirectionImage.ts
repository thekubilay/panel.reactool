import {Form} from "@/types/Form";
import useStore from "../../../stores/main";
export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputNumber",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "画像番号",
          hint: "並び順で使われるので数字で入力してください",
          placeholder: "ー",
          required: true,
          id: "name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "building_vr_direction",
          type: "text",
          model: false,
          label: "方向",
          hint: null,
          required: true,
          rules: [],
          id: "direction_input",
          disabled: false,
          //@ts-ignore
          options: useStore().project.building_vr.building_vr_directions,
          optionLabel: "name",
          optionValue: "id",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
      ],
    },
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "FileInput",
          db_column_name: "image",
          type: "text",
          model: null,
          label: "画像",
          hint: ".jpeg, .png サポートされています",
          required: false,
          id: "image_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "1MB以下",
          accept: "image/*",
          rules: [],
          rule: null,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "image_path", "preview_text", "limit", "rule"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ]
]
