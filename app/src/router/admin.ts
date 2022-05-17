export default [
  {
    path: "/admin/:cid/users",
    name: "Users",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Users.vue'),
  },
  {
    path: "/admin/:cid/salons",
    name: "Salons",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Salons.vue'),
  },
  {
    path: "/admin/:cid/projects",
    name: "Projects",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group1" */ '../views/admin/Projects.vue'),
  },
  {
    path: "/admin/:cid/routes",
    name: "Routes",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/Routes.vue'),
  },
  {
    path: "/admin/:cid/project-permissions",
    name: "ProjectPermissions",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/ProjectPermissions.vue'),
  },
  {
    path: "/admin/:cid/news",
    name: "News",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/News.vue'),
  },
  {
    path: "/admin/:cid/tutorials",
    name: "Tutorials",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/Tutorials.vue'),
  },
  {
    path: "/admin/:cid/tutorial-parts",
    name: "TutorialImages",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/TutorialImages.vue'),
  },
  {
    path: "/admin/:cid/errors",
    name: "LogsError",
    meta: {
      admin: true
    },
    component: () => import(/* webpackChunkName: "admin-route-group2" */ '../views/admin/LogsError.vue'),
  },
]
