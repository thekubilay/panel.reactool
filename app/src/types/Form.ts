interface TextInput {
  component: any,
  name: string,
  db_column_name: string,
  type: string|null
  model: any,
  label: string,
  hint: string | null,
  placeholder?: string,
  required: boolean,
  id: string | null,
  rules: any[]
  disabled: boolean,
  props: string[],
  classes: string[]
}

interface Textarea {
  component: any,
  name: string,
  db_column_name: string,
  type: string|null
  model: any,
  label: string,
  hint: string | null,
  placeholder?: string,
  required: boolean,
  autoResize: boolean,
  rows?: string,
  cols?: string,
  id: string | null,
  rules: any[]
  disabled: boolean,
  props: string[],
  classes: string[]
}

interface NumberInput {
  component: any,
  name: string,
  db_column_name: string,
  type: string|null
  model: any,
  label: string,
  hint: string | null,
  placeholder?: string,
  required: boolean,
  id: string | null,
  rules: any[],
  disabled: boolean,
  mode?: string,
  minFractionDigits?: boolean,
  maxFractionDigits?: boolean,
  locale?: string,
  currency?: string,
  prefix?: string,
  suffix?: string,
  min?: number,
  max?: number,
  props: string[],
  classes: string[]
}

interface Dropdown {
  component: any,
  name: string,
  db_column_name: string,
  type: string|null
  model: any,
  label: string,
  hint: string | null,
  required: boolean,
  id: string | null,
  disabled: boolean,
  rules: any[],
  placeholder?: string,
  appendTo: string,
  options: any[],
  optionLabel: string|null,
  optionValue: any,
  props: string[],
  classes: string[]
}


interface MultiSelect {
  component: any,
  name: string,
  db_column_name: string,
  type: string|null
  model: any,
  label: string,
  hint: string | null,
  required: boolean,
  id: string | null,
  disabled: boolean,
  rules: any[],
  placeholder?: string,
  appendTo: string,
  options: any[],
  optionLabel: string|null,
  optionValue: any,
  props: string[],
  classes: string[]
}

interface Checkbox {
  component: any,
  name: string,
  db_column_name: string,
  model: any,
  label: string,
  type: string|null
  hint: string | null,
  required: boolean,
  id: string | null,
  rules: any[],
  binary: boolean,
  disabled: boolean,
  props: string[],
  classes: string[]
}

interface RadioButton {
  component: any,
  name: string,
  db_column_name: string,
  model: any,
  type: string|null
  label: string,
  title: string,
  hint: string | null,
  required: boolean,
  id: string | null,
  rules: any[],
  binary: boolean,
  disabled: boolean,
  props: string[],
  classes: string[]
}

interface Password {
  component: any,
  name: string,
  db_column_name: string,
  type: string,
  model: any,
  label: string,
  hint: string | null,
  placeholder?: string,
  required: boolean,
  id: string | null,
  rules: any[]
  disabled: boolean,
  toggleMask: boolean,
  props: string[],
  classes: string[]
}


interface FileInput {
  component: any,
  name: string,
  db_column_name: string,
  type: string,
  model: any,
  label: string,
  hint: string | null,
  required: boolean,
  id: string | null,
  rules: any[],
  rule: Function|null,
  preview_text: string,
  limit:string,
  accept: string,
  disabled: boolean,
  props: string[],
  classes: string[]
}

interface SliderInput {
  component: any,
  name: string,
  type: string|null
  db_column_name: string,
  model: any,
  label: string,
  hint: string | null,
  id: string,
  min: number,
  max: number,
  disabled: boolean,
  required?: boolean,
  props: string[],
  classes: string[]
}

interface CalendarInput {
  component: any,
  name: string,
  type: string|null
  db_column_name: string,
  model: any,
  label: string,
  hint: string | null,
  id: string,
  min: number,
  max: number,
  disabled: boolean,
  required?: boolean,
  dateFormat: string,
  showTime?: boolean,
  hourFormat?: string,
  appendTo: string,
  props: string[],
  classes: string[]
}
type Types = TextInput|NumberInput|Dropdown|Checkbox|RadioButton|Password|Textarea|FileInput|SliderInput|CalendarInput|MultiSelect;

export interface Form {
  classes: string[],
  elements: Types[]
}

// export default Form;
