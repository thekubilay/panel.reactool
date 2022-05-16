export interface GeneralPlan {
  id: number | null,
  project: number | null,
  order_id: number | null,
  kind: string | null,
  image: string | null,
  html_code: string | null,
  thumbnail: string | null,
}

export interface GeneralPlanSetting {
  id: number | null,
  project: number | null,
  position: number | null,
}
