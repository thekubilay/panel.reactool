import {Form} from "@/types/Form";
import {isImageNone, isImageValid} from "@/components/form/rules";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "active",
          type: "text",
          model: true,
          label: "オンライン",
          hint: null,
          required: true,
          rules: [],
          id: "active_input",
          disabled: false,
          options: [{name: "はい", value:true}, {name: "いいえ", value:false}],
          optionLabel: "name",
          optionValue: "value",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "type",
          type: "text",
          model: "パネル",
          label: "タイプ",
          hint: null,
          required: true,
          rules: [],
          id: "type_input",
          disabled: false,
          options: [{name: "アプリ", value:"アプリ"}, {name: "パネル", value:"パネル"}, {name: "API", value:"API"}],
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
          db_column_name: "pdf",
          type: "text",
          model: null,
          label: "PDF",
          hint: ".pdf サポートされています",
          required: false,
          id: "image_input",
          preview_text: "アップロードのため、クリックやPDFをドロップしてください",
          limit: "",
          accept: "pdf/*",
          rules: [],
          rule: null,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit", "rule"],
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
          db_column_name: "video",
          type: "text",
          model: null,
          label: "ビデオ",
          hint: null,
          required: false,
          id: "video_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "",
          accept: "video/mp4,video/x-m4v,video/*",
          rules: [],
          rule: null,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit", "rule"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
    // { // form row
    //   classes: ["flex"],
    //   elements: [ // columns
    //     { // columns in row
    //       component: null,
    //       name: "FileInput",
    //       db_column_name: "video_thumbnail",
    //       type: "text",
    //       model: null,
    //       label: "ビデオサムネール",
    //       hint: ".jpeg, .png, .svg サポートされています",
    //       required: false,
    //       id: "image_input",
    //       preview_text: "アップロードのため、クリックや画像ドロップしてください",
    //       limit: "1MB以下",
    //       accept: "image/*",
    //       rules: [isImageNone],
    //       rule: isImageValid,
    //       disabled: false,
    //       props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit", "rule"],
    //       classes: ["flex-column", "column-1"],
    //     },
    //   ],
    // },
  ]
]