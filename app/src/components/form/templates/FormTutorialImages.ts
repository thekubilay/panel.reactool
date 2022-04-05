import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "title",
          type: "text",
          model: null,
          label: "タイトル",
          hint: null,
          placeholder: "ー",
          required: true,
          id: "title_input",
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
          name: "InputText",
          db_column_name: "sub_title",
          type: "text",
          model: null,
          label: "サブタイトル",
          hint: null,
          placeholder: "ー",
          required: false,
          id: "sub_title_input",
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
          db_column_name: "content",
          type: "text",
          model: null,
          label: "内容",
          hint: null,
          placeholder: "ー",
          required: false,
          rows: "6",
          cols: "10",
          id: "content_input",
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
          name: "FileInput",
          db_column_name: "image",
          type: "text",
          model: null,
          label: "画像",
          hint: ".jpeg, .jpg, .png サポートされています",
          required: false,
          id: "image_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "1MB以下",
          accept: "image/*",
          rules: [],
          rule: null,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit", "rule"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },

  ]
]
