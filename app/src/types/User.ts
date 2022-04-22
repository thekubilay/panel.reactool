import {News} from "@/types/News";

interface Profile {
  id: number,
  avatar: string,
}

export interface CreateOrUpdateUser {
  id: number|null,
  company?: number|null,
  email: string|null,
  last_name: string|null
  company_owner?: boolean,
  first_name: string|null,
  username: string|null,
  password?: any,
  password_confirm?: any,
}

export interface User {
  company: number|null,
  email: string|null,
  first_name: string|null,
  id: number|null,
  company_owner: boolean,
  is_staff: boolean|null,
  is_superuser: boolean|null,
  last_name: string|null
  profile: Profile,
  project_roles: object|null,
  user_roles: object|null,
  username: string|null,
  news: News[],
}

