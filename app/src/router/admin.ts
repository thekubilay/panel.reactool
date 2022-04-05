export default [
  {
    path: "/admin/:cid/users",
    name: "Users",
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Users.vue'),
  },
  {
    path: "/admin/:cid/salons",
    name: "Salons",
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Salons.vue'),
  },
  {
    path: "/admin/:cid/projects",
    name: "Projects",
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Projects.vue'),
  },
  {
    path: "/admin/:cid/routes",
    name: "Routes",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/Routes.vue'),
  },
  {
    path: "/admin/:cid/project-permissions",
    name: "ProjectPermissions",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/ProjectPermissions.vue'),
  },
  {
    path: "/admin/:cid/news",
    name: "News",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/News.vue'),
  },
  {
    path: "/admin/:cid/tutorials",
    name: "Tutorials",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/Tutorials.vue'),
  },
  {
    path: "/admin/:cid/tutorial-parts",
    name: "TutorialImages",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/TutorialImages.vue'),
  },
  {
    path: "/admin/:cid/errors",
    name: "LogsError",
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/LogsError.vue'),
  },
]
