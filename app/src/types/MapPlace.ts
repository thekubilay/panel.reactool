export interface MapPlaceImage {
  id: number | null
  map_place: number | null,
  image: string | null,
  thumbnail: string | null,
}

export interface MapPlace {
  id: number | null,
  salon?: number | null,
  project?: number | null,
  map_category?: number | null,
  order_id: number | null,
  show_directions?: boolean,
  type: string | null,
  place: string | null,
  address: string | null,
  context?: string | null,
  lat?: string | null,
  lng?: string | null,
  pin?: string | null,
  map_place_images?: MapPlaceImage[] | [] | null,
}
