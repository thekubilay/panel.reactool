import {MapPlace} from "@/types/MapPlace";
import {SalonMapSettings} from "@/types/MapSettings";

export interface Salon {
  company: number|null,
  id: number|null,
  name: string|null,
  order_id: number|null,
  map_places: MapPlace[],
  map_settings: SalonMapSettings|null,
}

export interface SalonLight {
  company: number|null,
  id: number|null,
  name: string|null,
}
