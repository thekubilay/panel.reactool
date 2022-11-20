import APIexecutor from "@/services/APIexecutor";
import {isDynidExists} from "@/helpers/useIsDynidExists";
import {Salon} from "@/types/Salon";
import {Project} from "@/types/Project";

export default class AppEntryService {

  to404(): void {
    window.location.href = "/404/"
  }

  getSalonsAndProjectsForSuperAdmin(get: Function): Promise<{ salons: Salon[], projects: Project[] }> {
    return new Promise<{ salons: Salon[], projects: Project[] }>(((resolve, reject) => {
      get("projects", "projects").then((projects: Project[]) => {
        get("salons", "salons").then((salons: Salon[]) => {
          return resolve({salons: salons, projects: projects})
        })
      })
    }))
  }

  getAll(): Promise<boolean> {
    const {get} = APIexecutor()
    let paths: string[] = window.location.pathname.split("/").filter(item => item.length)

    return new Promise<boolean>((resolve, reject) => {
      get("users/current", "user").then((current: any) => {

        if (current.is_superuser) get("companies", "companies").then(companies => {
          this.getSalonsAndProjectsForSuperAdmin(get).then(() => {
            get("permissions/projects", "projectPermissions").then(pp => {
              get("routes", "routes").then(routes => {
                get("logs/errors", "errors")
              })
            })
          })
        })

        get("companies/" + current.company, "company").then(company => {
          get("news", "news").then(news => {
            get("projects", "projects").then(projects => {
              get("tutorials", "tutorials").then(tutorials => {
                resolve(true)
              })
            })
          })
        })


      })
    })
  }
}
