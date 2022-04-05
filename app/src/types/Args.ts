import {Form} from "@/types/Form";
import {Payload} from "@/types/Payload";

export interface Args {
  form: Form[][]|null,
  query: object|null,
  payload?: Payload,
  element?: object|null,
  elements?: object[]|null
  display?: boolean,
}
