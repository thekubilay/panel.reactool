import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "ルーム名",
          hint: null,
          placeholder: "リビング",
          required: true,
          id: "name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Textarea",
          db_column_name: "option_context",
          type: "text",
          model: null,
          label: "オプション内容",
          hint:null,
          placeholder: "〇〇オプション",
          required: false,
          autoResize: false,
          rows: "40",
          cols: "30",
          id: "option_context_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled", "autoResize"],
          classes: ["flex-column", "column-1"],
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
          label: "BASE画像",
          hint: ".jpeg, .png サポートされています",
          required: false,
          id: "room_image_input",
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
