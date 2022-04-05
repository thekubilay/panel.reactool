import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import admin from "./admin";
import dashboard from "./boards";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {Salon} from "@/types/Salon";
import {Project} from "@/types/Project";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Entry',
    component: () => import(/* webpackChunkName: "entry" */ '../views/boards/index.vue'),
    children: dashboard
  },
  {
    path: "/admin/:cid",
    name: "Admin",
    component: () => import(/* webpackChunkName: "admin_route_group" */ '../views/admin/index.vue'),
    children: admin
  },
  {
    path: '/:pathMatch(.*)*', component:()=> {
      window.location.href = "/404"
    }
  },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes
})

function isDynIdExists(to: any, salons: Salon[], projects: Project[]) {
  const {get} = APIexecutor()
  return new Promise<boolean>((resolve, reject) => {
    const se = salons.some(element => {
      return to.params.dynid == element.id
    })
    const pe = projects.some(element => {
      return to.params.dynid == element.id
    })

    if (!se && !pe){
      reject(false)
    } else {
      if (se) {
        get("salons/" + to.params.dynid, "salon").then((res) => {
          resolve(true)
        })
      }
      if (pe) {
        get("project_details/" + to.params.dynid, "project").then((res) => {
          resolve(true)
        })
      }
    }

  })
}

router.beforeEach((to, from, next) => {

  const {user, salons, projects, app, content, project, salon} = useStore()
  const {get} = APIexecutor()

  if (user.value) {
    if (!to.path.match("admin"))
      if (to.params.dynid)
        if (to.params.dynid !== from.params.dynid) {
          content.value = true
          isDynIdExists(to, salons.value, projects.value).then(() => {
            content.value = false
            next()
          })
        } else {
          next()
        }
      else {
        next()
      }
    else {
      if (user.value.is_staff || user.value.is_superuser) {
        if (to.name === "Admin") {
          get("companies", "companies").then(companies => {
            get("companies/" + user.value?.company, "company").then(company => {
              get("routes", "routes").then(routes => {
                get("logs/errors", "errors").then(logs => {
                  get("tutorials", "tutorials").then(tutorials => {
                    content.value = false
                    next()
                  })
                })
              })
            })
          })
        } else {
          next()
        }
      } else {
        next({name: "Dashboard", params: {cid: user.value.company}})
      }
    }
  } else {
    get("users/current", "user").then((current) => {
      if (user.value?.is_staff || user.value?.is_superuser) {
        get("companies", "companies").then(companies => {
          get("routes", "routes").then(routes => {
            get("permissions/projects", "projectPermissions").then(pp => {
              get("logs/errors", "errors").then(logs => {
                get("news", "news").then(news => {
                  get("tutorials", "tutorials").then(tutorials => {
                    // console.log(logs)
                  })
                })
              })
            })
          })
        })
      }

      get("companies/" + user.value?.company, "company").then(company => {
        get("salons", "salons").then(company => {
          get("projects", "projects").then(company => {
            if ((to.name === "Entry" && !to.params.dynid) || to.path === "/") {
              setTimeout(() => {
                app.value = false
                next({name: "Dashboard", params: {cid: user.value?.company}})
              }, 300)
            } else if (to.params.dynid) {
              isDynIdExists(to, salons.value, projects.value).then((r) => {
                setTimeout(() => {
                  app.value = false
                  if (to.name === "Salon" || to.name === "Project") window.location.href = "/404/"
                  else next()
                }, 300)
                content.value = false
              }).catch(() => {
                window.location.href = "/404/"
              })
            } else {
              setTimeout(() => {
                app.value = false
                content.value = false
              }, 300)
              if (to.params.cid !== "404" && to.params.cid != user.value?.company+"")
                window.location.href = "/404/"
              else next()
            }
          })
        })
      })
    })
  }
})

export default router
