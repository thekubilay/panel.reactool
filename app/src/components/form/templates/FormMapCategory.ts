import {Form} from "@/types/Form";

export const form: Form[][] = [
  [ // tab 1
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "empty",
          type: "text",
          model: false,
          label: "カテゴリータイプ",
          hint: "空の場合は施設がない地図になります",
          required: false,
          rules: [],
          id: "empty_input",
          disabled: false,
          options: [{name: "空", value: true}, {name: "場所", value: false}],
          optionLabel: "name",
          optionValue: "value",
          placeholder: "空カテゴリー",
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
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "カテゴリー名",
          hint: null,
          placeholder: "お店",
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
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "color",
          type: "text",
          model: null,
          label: "カテゴリー色",
          hint: "*hexコードやRGBをご入力可",
          placeholder: "#6366F1",
          required: true,
          id: "color_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },

    //
    // { // form row
    //   classes: ["flex"],
    //   elements: [ // columns
    //     { // columns in row
    //       component: null,
    //       name: "FileInput",
    //       db_column_name: "pin",
    //       type: "text",
    //       model: null,
    //       label: "PIN",
    //       hint: ".jpeg, .png, .svg サポートされています",
    //       required: false,
    //       id: "pin_input",
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
  ],
]
