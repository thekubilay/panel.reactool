import {Form} from "../../../types/Form";
import {isImageNone, isImageValid} from "../rules";

export const form: Form[][] = [
  [ // tab
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "kind",
          type: "text",
          model: "敷地配置図",
          label: "一般図種類",
          hint: null,
          required: true,
          rules: [],
          id: "kind_input",
          disabled: false,
          options: [{name: "敷地配置図", value: "敷地配置図"}, {name: "立面図", value: "立面図"}, {name: "各階平面図", value: "各階平面図"}],
          optionLabel: "name",
          optionValue: "value",
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
          required: true,
          id: "general_plan_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "1MB以下",
          accept: "image/*",
          rules: [isImageNone],
          rule: isImageValid,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "image_path", "preview_text", "limit", "rule"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ]
]
