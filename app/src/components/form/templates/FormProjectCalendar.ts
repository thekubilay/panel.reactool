import {Form} from "@/types/Form";

export const form: Form[][] = [
  [
    { // form row
      classes: ["flex", "justify-space-between"],
      elements: [ // columns
        { // columns in row
          component: null,
          name: "InputText",
          db_column_name: "title",
          type: "text",
          model: null,
          label: "イベント名",
          hint: null,
          placeholder: "新規イベント",
          required: false,
          id: "title_input",
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
          name: "CalendarInput",
          db_column_name: "start",
          type: "text",
          model: new Date(),
          label: "イベント開始日",
          hint: null,
          placeholder: "null",
          required: true,
          id: "start_date_input",
          rules: [],
          dateFormat: "yy年mm月dd日",
          showTime: true,
          hourFormat: "24",
          disabled: false,
          appendTo: "self",
          props: ["placeholder", "required", "disabled", "dateFormat", "appendTo", "showTime", "hourFormat"],
          classes: ["flex-column", "column-2-space"],
        },
        { // columns in row
          component: null,
          name: "CalendarInput",
          db_column_name: "end",
          type: "text",
          model: new Date(),
          label: "イベント終了日",
          hint: null,
          placeholder: "null",
          required: true,
          id: "end_date_input",
          rules: [],
          dateFormat: "yy年mm月dd日",
          showTime: true,
          hourFormat: "24",
          appendTo: "self",
          disabled: false,
          props: ["placeholder", "required", "disabled", "dateFormat", "appendTo", "showTime", "hourFormat"],
          classes: ["flex-column", "column-2-space"],
        },
      ],
    },

  ]
]
