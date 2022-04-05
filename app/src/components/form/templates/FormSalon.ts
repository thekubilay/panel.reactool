import {Form} from "@/types/Form";
import useStore from "@/stores/main"
export const form: Form[][] = [
  [ // tab
    // { // form row
    //   classes: ["flex"],
    //   elements: [ // columns
    //     { // columns in row
    //       component: null,
    //       name: "Dropdown",
    //       db_column_name: "company",
    //       type: "text",
    //       model: null,
    //       label: "会社",
    //       hint: null,
    //       required: true,
    //       rules: [],
    //       id: "company_name_input",
    //       disabled: true,
    //       options: useStore().companies,
    //       optionLabel: "name",
    //       optionValue: "id",
    //       placeholder: "会社選択",
    //       appendTo: "body",
    //       props: ["placeholder", "required", "disabled", "options", "optionLabel", "optionValue", "appendTo"],
    //       classes: ["flex-column", "column-1", "relative"],
    //     },
    //   ],
    // },
    { // form row
      classes: ["flex"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "name",
          type: "text",
          model: null,
          label: "サロン名",
          hint: null,
          placeholder: "〇〇サロン",
          required: true,
          id: "salon_name_input",
          rules: [],
          disabled: false,
          props: ["placeholder", "required", "disabled"],
          classes: ["flex-column", "column-1"],
        },
      ],
    },
  ],
]

