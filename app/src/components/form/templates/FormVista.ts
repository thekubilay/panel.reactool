import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
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
          hint: ".jpeg, .png がサポートされています",
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
    // { // form row
    //   classes: ["flex"],
    //   elements: [ // columns
    //     { // columns in row
    //       component: null,
    //       name: "SliderInput",
    //       db_column_name: "compass_start",
    //       model: 20,
    //       label: "観点",
    //       hint: "スライダーでスタートポイントの設定できます",
    //       id: "slider_input",
    //       min: 4,
    //       max: 360,
    //       disabled: false,
    //       props: ["placeholder", "required", "disabled", "min", "max"],
    //       classes: ["flex-column", "column-1"],
    //     },
    //   ],
    // },
  ]
]
