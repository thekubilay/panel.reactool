import {Routes} from "@/types/Routes";
import {Gallery} from "@/types/Gallery";
import {Links} from "@/types/Links";
import {DocumentFolder} from "@/types/Document";
import {ProjectMapSettings} from "@/types/MapSettings";
import {MapPlace} from "@/types/MapPlace"
import {MapCategory} from "@/types/MapCategory"
import {PlanContent, PlanField} from "@/types/Plans";
import {GeneralPlan, GeneralPlanSetting} from "@/types/GeneralPlan";
import {Building} from "@/types/Building";
import {Vista} from "@/types/Vista";
import {BuildingVr} from "@/types/BuildingVr";
import {ApiToken} from "@/types/ApiToken";
import {RoomVr} from "@/types/RoomVr";
import {ProjectPermission} from "@/types/ProjectPermission";
import {ProjectCalendar} from "@/types/Calendar";
import {RoomVrVendor} from "@/types/RoomVrVendor";
import {LoanSetting} from "@/types/LoanSetting";

interface Items {
  salon_view: boolean,
  order_id: number|null,
  archive: boolean,
  name: string|null,
  path: string|null,
  context: string|null,
  address: string|null,
  lat: string|null,
  lng: string|null,
  pin: string | null,
  pin_width: string | null,
  pin_height: string | null,
  logo: string | null,
  logo_width: string | null,
  logo_height: null,
  logo_place: number,
  tab_logo_view: boolean,
  tab_logo_text: string,
  routes: Routes[],
  gallery: Gallery[],
  links: Links[],
  loan_settings: LoanSetting,
  document_folders: DocumentFolder[],
  documents: Document[],
  map_settings: ProjectMapSettings
  map_categories: MapCategory[],
  map_places: MapPlace[]
  plan_fields: PlanField[],
  plan_contents: PlanContent[],
  general_plans: GeneralPlan[],
  general_plan_settings: GeneralPlanSetting,
  building: Building,
  building_vr: BuildingVr,
  vista_simulator: Vista,
  color_simulator_rooms: ColorSimulatorRoom[],
  room_vr: RoomVr[],
  api_tokens: ApiToken[]
  permissions: ProjectPermission[],
  calendar: ProjectCalendar,
  room_vr_vendors: RoomVrVendor[],
  token_on: boolean,
  legacy: boolean,
}

export interface Project extends Items {
  id?: number|null,
  salon?: number|null,
  company?: number|null,
}
