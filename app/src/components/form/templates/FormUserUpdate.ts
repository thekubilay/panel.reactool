import {Form} from "@/types/Form";
import {isMail, isSpace} from "@/components/form/rules";

export const form: Form[][] = [
  [ // tab
    { // form row
      classes: ["flex justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "last_name",
          type: "text",
          model: null,
          label: "姓",
          hint: null,
          placeholder: "田中",
          required: true,
          id: "last_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "first_name",
          type: "text",
          model: null,
          label: "名",
          hint: null,
          placeholder: "太郎",
          required: true,
          id: "first_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
    { // form row
      classes: ["flex justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "Dropdown",
          db_column_name: "company_owner",
          type: "text",
          model: true,
          label: "会社オーナー",
          hint: "全てのプロジェクトへの管理権限つける",
          required: false,
          rules: [],
          id: "company_owner_input",
          disabled: false,
          options: [{name: "はい", value: true}, {name: "いいえ", value: false},],
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
      classes: ["flex justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "MultiSelect",
          db_column_name: "project_roles",
          type: "text",
          model: null,
          label: "プロジェクト権限",
          hint: "読み込みできるプロジェクト",
          required: false,
          rules: [],
          id: "project_roles_input",
          disabled: false,
          options: [],
          optionLabel: "name",
          optionValue: "id",
          placeholder: "選択",
          appendTo: "body",
          props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
          classes: ["flex-column", "column-2-space", "relative"],
        },
      ],
    },
    { // form row
      classes: ["flex justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "username",
          type: "text",
          model: null,
          label: "ユーザー名",
          hint: "*ログインするために使われます",
          placeholder: "tanaka",
          required: true,
          id: "username_input",
          rules: [isSpace],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "email",
          type: "text",
          model: null,
          label: "メールアドレス",
          hint: null,
          placeholder: "tanaka.tarou@reactool.jp",
          required: true,
          id: "email_input",
          rules: [isMail],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]
