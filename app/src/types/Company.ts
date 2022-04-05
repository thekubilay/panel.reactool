interface User {
  id: number,
  company: number,
  last_name: string,
  first_name: string,
  email: string,
  is_superuser: boolean,
  is_staff: boolean,
  is_company_manager: boolean,
}

interface Salon {
  id: number,
  order_id: number,
  name: string,
  company: number,
}

interface Project {
  id: number,
  salon: number,
  name: string,
  archive: boolean,
}

export interface Company {
  id:number|null,
  name: string|null,
  active: boolean,
  users?: User[],
  salons?: Salon[],
  projects?: Project[],
}

