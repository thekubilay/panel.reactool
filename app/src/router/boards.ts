export default [
  {
    path: '/:cid',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Dashboard.vue'),
    meta: {
      name: "ダッシューボード"
    }
  },
  {
    path: '/:cid/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Calendar.vue'),
    meta: {
      name: "カレンダー"
    }
  },
  {
    path: '/:cid/users',
    name: 'BoardUsers',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Users.vue'),
    meta: {
      name: "ユーザー"
    }
  },
  {
    path: '/:cid/tutorials',
    name: 'BoardTutorials',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Tutorials.vue'),
    meta: {
      name: "ツートーリアル"
    }
  },

  //++　salon **//
  //++　salon **//
  {
    path: '/:cid/:dynid/',
    name: 'Salon',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Salon.vue'),
    children: [
      {
        path: '/:cid/:dynid/projects',
        name: 'SalonProjects',
        component: () => import(/* webpackChunkName: "salon-group" */ '../views/boards/SalonProjects.vue')
      },
      {
        path: '/:cid/:dynid/s-places',
        name: 'SalonMap',
        component: () => import(/* webpackChunkName: "salon-group" */ '../views/boards/SalonPlaces.vue')
      },
    ]
  },

  //++　project **//
  //++　project **//
  {
    path: '/:cid/:dynid/',
    name: 'Project',
    component: () => import(/* webpackChunkName: "main" */ '../views/boards/Project.vue'),
    children: [
      {
        path: '/:cid/:dynid/routes',
        name: 'ProjectRoutes',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectRoutes.vue')
      },
      {
        path: '/:cid/:dynid/permissions',
        name: 'ProjectScopePermissions',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectPermissions.vue')
      },
      {
        path: '/:cid/:dynid/p-places',
        name: 'ProjectPlaces',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectPlaces.vue')
      },
      {
        path: '/:cid/:dynid/p-categories',
        name: 'ProjectPlacesCategories',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectPlacesCategories.vue')
      },
      {
        path: '/:cid/:dynid/plans',
        name: 'ProjectPlans',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectPlans.vue')
      },
      {
        path: '/:cid/:dynid/gallery',
        name: 'ProjectGallery',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectGallery.vue')
      },
      {
        path: '/:cid/:dynid/links',
        name: 'ProjectLinks',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectLinks.vue')
      },
      {
        path: '/:cid/:dynid/documents',
        name: 'ProjectDocuments',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectDocuments.vue')
      },
      {
        path: '/:cid/:dynid/d-folders',
        name: 'ProjectDocumentsFolders',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectDocumentsFolders.vue')
      },
      {
        path: '/:cid/:dynid/general-plans',
        name: 'ProjectGeneralPlans',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectGeneralPlans.vue')
      },
      {
        path: '/:cid/:dynid/vistas',
        name: 'ProjectVistas',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectVistas.vue')
      },
      {
        path: '/:cid/:dynid/building-vr',
        name: 'ProjectBuildingVr',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectBuildingVr.vue')
      },
      {
        path: '/:cid/:dynid/building',
        name: 'ProjectBuilding',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectBuilding.vue')
      },
      {
        path: '/:cid/:dynid/loan',
        name: 'ProjectLoan',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectLoan.vue')
      },
      {
        path: '/:cid/:dynid/parking-fees',
        name: 'ProjectParkingFees',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectParkingFees.vue')
      },
      {
        path: '/:cid/:dynid/room-colors',
        name: 'ProjectColorSimulator',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectColorSimulator.vue')
      },
      {
        path: '/:cid/:dynid/room-vr-types',
        name: 'ProjectRoomVrTypes',
        component: () => import(/* webpackChunkName: "project-route-group1" */ '../views/boards/ProjectRoomVrTypes.vue')
      },
      {
        path: '/:cid/:dynid/room-vr-floors',
        name: 'ProjectRoomVrFloors',
        component: () => import(/* webpackChunkName: "project-route-group2" */ '../views/boards/ProjectRoomVrFloors.vue')
      },
      {
        path: '/:cid/:dynid/room-vr-floors',
        name: 'ProjectRoomVrVendors',
        component: () => import(/* webpackChunkName: "project-route-group2" */ '../views/boards/ProjectRoomVrVendors.vue')
      },
      {
        path: '/:cid/:dynid/calendar',
        name: 'ProjectCalendar',
        component: () => import(/* webpackChunkName: "project-route-group3" */ '../views/boards/ProjectCalendar.vue')
      },
      {
        path: '/:cid/:dynid/frame1',
        name: 'Frame2',
        component: () => import(/* webpackChunkName: "project-route-group3" */ '../views/boards/Frame1.vue')
      },
      {
        path: '/:cid/:dynid/frame2',
        name: 'Frame2',
        component: () => import(/* webpackChunkName: "project-route-group3" */ '../views/boards/Frame2.vue')
      },
    ]
  },
]
