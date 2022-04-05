import {Form} from "../../../types/Form";
import {isImageNone, isImageValid} from "../rules";

export const form: Form[][] = [
  [ // tab
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
          id: "gallery_image_input",
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
