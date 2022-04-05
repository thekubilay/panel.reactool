import {Form} from "@/types/Form";
import {isImageNone, isImageValid} from "../rules";
import useStore from "../../../stores/main"

export const form:Form[][] = [
  [ // tab
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "map_category",
          type: "text",
          //@ts-ignore
          model: useStore().project.map_categories.length ? useStore().project.map_categories[0].id : null,
          label: "カテゴリー",
          hint: null,
          required: false,
          rules: [],
          id: "map_category_input",
          disabled: false,
          options: [],
          optionLabel: "name",
          optionValue: "id",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "show_directions",
          type: "text",
          model: true,
          label: "ダイレクション状態",
          hint: null,
          required: false,
          rules: [],
          id: "show_directions_input",
          disabled: false,
          options: [{name: "表示", value: true}, {name: "未表示", value: false}],
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
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "place",
          type: "text",
          model: null,
          label: "場所",
          hint: null,
          placeholder: "〇〇物件名",
          required: true,
          id: "place_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "address",
          type: "text",
          model: null,
          label: "住所",
          hint: null,
          placeholder: "梅田６丁目",
          required: true,
          id: "address_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
    // { // form row
    //   classes: ["flex"],
    //   elements: [ // columns
    //     { // columns in row
    //       component: null,
    //       name: "Textarea",
    //       db_column_name: "context",
    //       type: "text",
    //       model: null,
    //       label: "コメント",
    //       hint: "*数字はpxとして運用されます",
    //       placeholder: "〇〇プロジェクト",
    //       required: false,
    //       autoResize: false,
    //       rows: "10",
    //       cols: "30",
    //       id: "context_input",
    //       rules: [],
    //       disabled: false,
    //       props: ["placeholder", "required", "disabled", "autoResize"],
    //       classes: ["flex-column", "column-1"],
    //     },
    //   ],
    // },
    // { // form row
    //   classes: ["flex", "justify-space-between"],
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
    //       id: "place_pin_image_input",
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


  [ // tab
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "FileInput",
          db_column_name: "image",
          type: "text",
          model: null,
          label: "画像",
          hint: ".jpeg, .png, .svg サポートされています",
          required: true,
          id: "place_image_input",
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
  ],
]