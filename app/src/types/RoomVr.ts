export interface RoomVrPortal {
  id?: number | null,
  room_vr_floor: number | null,
  next_room: number | null,
  button_x: number | null,
  button_y: number | null,
}

interface OptionalFloor {
  room_vr: number | null,
  floor_num: number | null,
  base: boolean,
  room: string | null,
  image: string | null,
  vr_start?: number | null,
  compass_diff?: number | null,
  compass_start?: number | null,
  compass_top?: number | null,
  compass_left?: number | null,
  next_rooms?: RoomVrPortal[]
}

interface OptionalTypes {
  plan_type: string | null,
  image: string | null,
  floors: RoomVrFloor[],
}

export interface RoomVrFloor extends OptionalFloor {
  id?: number | null,
  room_vr: number | null,
}

export interface RoomVr extends OptionalTypes {
  id: number | null,
  project: number | null,
}
