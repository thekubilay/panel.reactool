import {MapPlace} from "@/types/MapPlace";

export interface MapCategory {
  id: number|null,
  project: number|null,
  order_id: number|null
  empty: boolean,
  name: string|null,
  color: string|null,
  pin: string|null,
  map_places?:MapPlace[],
}
