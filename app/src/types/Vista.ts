export interface VistaContent {
  id?: number | null,
  vista_simulator: number | null | undefined,
  time?: string | null,
  is_bg?: boolean,
  plan_type?: string | null,
  floor_num?: number | null
  compass_start?: number | null,
  compass_top?: number | null,
  compass_left?: number | null,
  image?: string | null,
  thumbnail?: string | null,
}

export interface Vista {
  id?: number | null,
  project: number | null | undefined,
  compass_start?: number | null,
  compass_top?: number | null,
  compass_left?: number | null,
  image?: number | null,
  vista_simulator_contents?: VistaContent[],
}
