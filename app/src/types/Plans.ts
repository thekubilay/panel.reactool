export interface PlanFieldOption {
  id: number | null,
  order_id: number | null,
  plan_field: number | null,
  name: string | null,
}

export interface PlanField {
  id: number | null,
  project: number | null,
  order_id: number | null,
  name: string | null,
  type: string | null,
  class_name: string|null
  plan_field_options: PlanFieldOption[],
}

export interface PlanContext {
  id: number | null,
  plan_field: PlanField | null,
  plan_content: PlanContent | null,
  order_id: number | null,
  field: string | null,
  value: string | null,
  image: string | null,
  thumbnail: string | null,
}

export interface PlanContent {
  id: number | null,
  project: number | null,
  order_id: number | null,
  plan_contexts: PlanContext[],
}
