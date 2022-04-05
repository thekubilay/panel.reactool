import {Form} from "@/types/Form";
import useStore from "../../../stores/main";
import {isFileNone} from "../rules";

export const form: Form[][] = [
  [ // tab 1
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "document_folder",
          type: "text",
          model: null,
          label: "フォルダー",
          hint: null,
          required: false,
          rules: [],
          id: "folder_input",
          disabled: false,
          options: useStore().project?.document_folders || [],
          optionLabel: "name",
          optionValue: "id",
          placeholder: "フォルダー選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-1", "relative"],
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
          label: "ファイル名",
          hint: null,
          placeholder: "パンフレット",
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
          name: "FileInput",
          db_column_name: "file",
          type: "text",
          model: null,
          label: "ファイル",
          hint: ".pdf サポートされています",
          required: false,
          id: "file_input",
          preview_text: "アップロードのため、クリックや画像ドロップしてください",
          limit: "1MB以下",
          accept: "file/*",
          rules: [isFileNone],
          rule: null,
          disabled: false,
          props: ["placeholder", "required", "disabled", "accept", "hint", "model", "preview_text", "limit"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]
