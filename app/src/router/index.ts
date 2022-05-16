import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import admin from "./admin";
import dashboard from "./boards";
import useStore from "@/helpers/useStore";
import APIexecutor from "@/services/APIexecutor";
import {removeSplash as splash} from "@/helpers/useSplash";
import {isDynidExists} from "@/helpers/useIsDynidExists";


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
    path: '/:pathMatch(.*)*', component: () => {
      window.location.href = "/404"
    }
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes
})


router.beforeEach(async (to, from) => {
  const {user, salons, projects, project, salon, content} = useStore()
  const {get} = APIexecutor()
  if (to.name === "Entry") {
    return {name: "Dashboard", params: {cid: user.value?.company}}
  } else if (to.params.dynid !== from.params.dynid) {
    content.value = true
    if (to.params.dynid !== from.params.dynid) {
      await isDynidExists(to.params.dynid as string, salons.value, projects.value, get as Function).then(() => {})
    }
  }
})

router.afterEach((to) => {
  splash()
  const {content} = useStore()
  content.value = false
})

export default router

