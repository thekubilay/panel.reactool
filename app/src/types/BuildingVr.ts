export interface BuildingVrDirectionImage {
  id: number | null,
  building_vr_direction: number | null,
  name: string | null,
  image: string | null,
  thumbnail: string | null,
}
export interface BuildingVrDirection {
  id: number|null,
  building_vr: number | null,
  name: string | null,
  order_id: number|null,
  building_vr_direction_images?: BuildingVrDirectionImage[]
}
export interface BuildingVr {
  id: number|null,
  project: number | null,
  building_vr_directions: BuildingVrDirection[]
}
