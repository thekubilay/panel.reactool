import {LoanBankType} from "@/types/LoanBankType";

export interface Room {
  id: number | null,
  building_floor: number | null,
  order_id: number | null,
  status: string | null,
  menu: string | null,
  type: string | null,
  plan: string | null,
  m2: string | null,
  price: number | string | null,
  management_fee: number | string | null,
  fixing_fee: number | string | null,
  sub: boolean,
  sub_content: string | null,
  image: string | null,
  thumbnail: string | null,

}

export interface ParkingFee {
  id: number | null,
  building: number | null,
  order_id: number | null,
  name: string | null,
  price: string | number | null,
}

export interface Floor {
  id: number | null,
  building: number | null,
  order_id: number | null,
  rooms?: Room[]
  room_count?: number
}

export interface Building {
  id: number | null,
  project_id: number | null
  order_id: number | null,
  management_fee: number | null,
  fixing_fee: number | null,
  floors: Floor[]
  bank_types: LoanBankType[],
  parking_fees: ParkingFee[],

}
