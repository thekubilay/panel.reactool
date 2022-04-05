export interface Routes {
  id: number | null,
  order_id: number | null
  component: string | null
  name: string | null,
  panel_name: string | null,
  path: string | null,
  title: string | null,
}

export interface ProjectRoutes {
  id?: number | null,
  project?: number | null,
  order_id?: number | null
  component?: string | null
  name?: string | null,
  panel_name: string | null,
  path?: string | null,
  title?: string | null,
  active?: boolean,
}
