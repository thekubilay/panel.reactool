import {Form} from "@/types/Form";
import useStore from "@/stores/main";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "floor_num",
          type: "text",
          model: true,
          label: "フォルダー",
          hint: null,
          required: false,
          rules: [],
          id: "floor_input",
          disabled: false,
          options: [{name: "ベース画像", value: true}, {name: "他画像", value: false}],
          optionLabel: "name",
          optionValue: "value",
          placeholder: "ベース画像",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "floor_num",
          type: "text",
          model: null,
          label: "フォルダー",
          hint: null,
          required: false,
          rules: [],
          id: "floor_input",
          disabled: false,
          options: useStore().project?.building.floors || [],
          optionLabel: "order_id",
          optionValue: "order_id",
          placeholder: "階を選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
      ],
    },
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputNumber",
          db_column_name: "compass_top",
          type: "text",
          model: null,
          label: "上からの配置",
          hint: null,
          placeholder: "",
          required: true,
          id: null,
          max: 3,
          suffix: "%",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled", "max", "suffix"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputNumber",
          db_column_name: "compass_left",
          type: "text",
          model: null,
          label: "左からの配置",
          hint: null,
          placeholder: "",
          required: true,
          suffix:"%",
          id: null,
          max: 3,
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled", "max", "suffix"],
          classes: ["flex-column", "column-2-space"],
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
          label: "間取りプラン画像",
          hint: ".jpeg, .png サポートされています",
          required: true,
          id: "plan_type_image_input",
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
