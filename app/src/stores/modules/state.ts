import {User} from "@/types/User";
import {Project} from "@/types/Project";
import {Company} from "@/types/Company";
import {Salon} from "@/types/Salon";
import {Routes} from "@/types/Routes";
import {Payload} from "@/types/Payload";
import {Error} from "@/types/Error";
import {ProjectPermission} from "@/types/ProjectPermission";
import {News} from "@/types/News";
import {Tutorial} from "@/types/Tutorial";

export interface State {
  payload: Payload,
  user: User|null,
  routes: Routes[],
  companies: Company[],
  company: Company|null,
  salons: Salon[],
  salon: Salon|null
  projects: Project[],
  project: Project|null,
  app: boolean,
  content: boolean,
  onload: string,
  progress: number,
  errors: Error[],
  projectPermissions: ProjectPermission[]
  news: News[]
  tutorials: Tutorial[],
  notifyTopBar: boolean,
}

export function state(): State {
  return {
    payload: {} as Payload,
    user: null as User|null,
    routes: [] as Routes[],
    companies: [] as Company[],
    company: null as Company|null,
    salons: [] as Salon[],
    salon: null as Salon|null,
    projects: [] as Project[],
    project: null as Project|null,
    errors: [] as Error[],
    projectPermissions: [] as ProjectPermission[],
    news: [] as News[],
    tutorials: [] as Tutorial[],
    app: true,
    content: true,
    onload: "ローディング",
    progress: 0,
    notifyTopBar: true,
  }
}
