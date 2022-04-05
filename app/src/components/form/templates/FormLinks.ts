import {Form} from "@/types/Form";
import useStore from "../../../stores/main";
import {isImageNone, isImageValid} from "../rules";

export const form: Form[][] = [
  [ // tab 3
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "サイト名",
          hint: null,
          placeholder: "reactool",
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
          name: "InputText",
          db_column_name: "link",
          type: "text",
          model: null,
          label: "サイトURL",
          hint: null,
          placeholder: "https://reactool.jp",
          required: true,
          id: "link_input",
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
          label: "サイト画像",
          hint: ".jpeg, .png, .svg サポートされています",
          required: false,
          id: "link_image_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "1MB以下",
          accept: "image/*",
          rules: [isImageNone],
          rule: isImageValid,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit", "rule"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]
