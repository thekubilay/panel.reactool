import useStore from "@/helpers/useStore";
import {User} from "@/types/User";
import {request} from "@/services/request";
import {Company} from "@/types/Company";
import {Salon} from "@/types/Salon";
import {Project} from "@/types/Project";
import {Routes} from "@/types/Routes";

export default function () {
  const {store} = useStore()

  type Method = "post" | "put" | "patch" | "get" | "delete";
  type Interfaces = User | User[] | Company | Company[] | Salon | Salon[] | Project | Project[] | Routes[]

  function storeData(data: any, state: string): void {
    switch (state) {
      case "user":
        store.user = data
        break;
      case "company":
        store.company = data
        break;
      case "companies":
        store.companies = data
        break;
      case "routes":
        store.routes = data
        break;
      case "salons":
        store.salons = data
        break;
      case "salon":
        store.salon = data
        break;
      case "projects":
        store.projects = data
        break;
      case "project":
        store.project = data
        break;
      case "projectPermissions":
        store.projectPermissions = data
        break;
      case "news":
        store.news = data
        break;
      case "tutorials":
        store.tutorials = data
        break;
      case "errors":
        store.errors = data
        break;
    }
  }

  const save = (path: string, formDataOrObject: FormData | object, method: Method = "post") => {
    return new Promise<Interfaces>((resolve: any) => {
      request(path, method, formDataOrObject).then(response => {
        resolve(response)
      })
    })
  }

  const get = (path: string, state: string): Promise<Interfaces> => {
    return new Promise<Interfaces>((resolve: any, reject: any) => {
      request(path, "get").then(response => {
        storeData(response, state)
        resolve(response)
      })
    })
  }

  return {
    get, save,
  }
}
