export interface SalonMapSettings {
  id: number|null,
  all: boolean,
  administrative: boolean,
  poi: boolean,
  road: boolean,
  water: boolean,
  line: boolean,
  station: boolean,
  pin: any,
  salon: number|null
}

export interface ProjectMapSettings {
  id: number|null,
  all: boolean,
  administrative: boolean,
  poi: boolean,
  road: boolean,
  water: boolean,
  line: boolean,
  station: boolean,
  project: number|null
}