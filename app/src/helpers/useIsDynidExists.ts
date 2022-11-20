import {Project} from "@/types/Project";
import {Salon} from "@/types/Salon";

export const isDynidExists = (dynid: string, salons: Salon[], projects: Project[], get: Function) => {
  return new Promise<boolean>((resolve, reject) => {
    const se = salons.some(element => {
      return dynid === element.id+""
    })
    const pe = projects.some(element => {
      return dynid === element.id+""
    })

    if (!se && !pe) {
      reject(false)
    } else {
      if (se) {
        get("salons/" + dynid, "salon").then((res: any) => {
          resolve(true)
        })
      }
      if (pe) {
        get("project_details/" + dynid, "project").then((res: any) => {
          resolve(true)
        })
      }
    }
  })
}
