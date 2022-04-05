import {Form} from "../../../types/Form";
import useStore from "../../../stores/main";
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
          label: "フォルダー名",
          hint: null,
          placeholder: "間取り図PDFフォルダー",
          required: true,
          id: "name_input",
          rules: [],
          disabled: !useStore().user.is_staff,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]
