var A=Object.defineProperty;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&P(e,o,t[o]);if(E)for(var o of E(t))T.call(t,o)&&P(e,o,t[o]);return e};var j=(e,t,o)=>new Promise((i,n)=>{var u=a=>{try{c(o.next(a))}catch(m){n(m)}},s=a=>{try{c(o.throw(a))}catch(m){n(m)}},c=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,s);c((o=o.apply(e,t)).next())});import{d as V,c as L,s as C,a as I,o as O,r as F,b as v,e as k,w as f,f as w,g as b,T as S,u as B,h as _,i as x,j as N,k as U,l as $,m as G,n as q,P as M}from"./chunks/vendor.js";function J(){return{payload:{},user:null,routes:[],companies:[],company:null,salons:[],salon:null,projects:[],project:null,errors:[],projectPermissions:[],news:[],tutorials:[],app:!0,content:!0,onload:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0",progress:0,notifyTopBar:!1}}function W(){return{GET_SALON_PROJECTS(e){return e.projects.filter(t=>{var o;return t.salon===((o=e.salon)==null?void 0:o.id)})}}}function H(){return{SET_PAYLOAD(e){this.payload=e}}}var X=V({id:"main",state:J,getters:l({},W()),actions:l({},H())});function d(){const e=X(),t=L(()=>e.company.users);return l({store:e,users:t},C(e))}const Y=I({setup(e){d();const t=()=>{const o=B();o.config.locale.dayNames=["\u65E5\u66DC\u65E5","\u6708\u66DC\u65E5","\u706B\u66DC\u65E5","\u6C34\u66DC\u65E5","\u6728\u66DC\u65E5","\u91D1\u66DC\u65E5","\u571F\u66DC\u65E5"],o.config.locale.dayNamesShort=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.dayNamesMin=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.monthNames=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.monthNamesShort=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.today="\u4ECA\u65E5",o.config.locale.weak="\u5F31\u3044",o.config.locale.medium="\u666E\u901A",o.config.locale.strong="\u5F37\u3044",o.config.locale.tim,o.config.locale.passwordPrompt=""};return O(()=>{t()}),(o,i)=>{const n=F("router-view");return v(),k(n,null,{default:f(({Component:u})=>[w(S,{name:"scale",mode:"out-in"},{default:f(()=>[(v(),k(b(u)))]),_:2},1024)]),_:1})}}}),z="modulepreload",D={},K="/static/",r=function(t,o){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=`${K}${i}`,i in D)return;D[i]=!0;const n=i.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":z,n||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),n)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",a)})})).then(()=>t())};var Q=[{path:"/admin/:cid/users",name:"Users",meta:{admin:!0},component:()=>r(()=>import("./chunks/Users.js"),["chunks/Users.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/rules.js","chunks/FormUserUpdate.js","chunks/useFormRequestBuilder.js","chunks/BarTool.js","assets/BarTool.css","chunks/useUtils.js"])},{path:"/admin/:cid/salons",name:"Salons",meta:{admin:!0},component:()=>r(()=>import("./chunks/Salons.js"),["chunks/Salons.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormSalon.js","chunks/useFormRequestBuilder.js"])},{path:"/admin/:cid/projects",name:"Projects",meta:{admin:!0},component:()=>r(()=>import("./chunks/Projects.js"),["chunks/Projects.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/routes",name:"Routes",meta:{admin:!0},component:()=>r(()=>import("./chunks/Routes.js"),["chunks/Routes.js","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/FormRoute.js","chunks/rules.js"])},{path:"/admin/:cid/project-permissions",name:"ProjectPermissions",meta:{admin:!0},component:()=>r(()=>import("./chunks/ProjectPermissions.js"),["chunks/ProjectPermissions.js","chunks/vendor.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/news",name:"News",meta:{admin:!0},component:()=>r(()=>import("./chunks/News.js"),["chunks/News.js","assets/News.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/editor.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js"])},{path:"/admin/:cid/tutorials",name:"Tutorials",meta:{admin:!0},component:()=>r(()=>import("./chunks/Tutorials.js"),["chunks/Tutorials.js","assets/Tutorials.css","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js"])},{path:"/admin/:cid/tutorial-parts",name:"TutorialImages",meta:{admin:!0},component:()=>r(()=>import("./chunks/TutorialImages.js"),["chunks/TutorialImages.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js"])},{path:"/admin/:cid/errors",name:"LogsError",meta:{admin:!0},component:()=>r(()=>import("./chunks/LogsError.js"),["chunks/LogsError.js","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js"])}],Z=[{path:"/:cid",name:"Dashboard",component:()=>r(()=>import("./chunks/Dashboard.js"),["chunks/Dashboard.js","assets/Dashboard.css","chunks/Spinner.js","assets/Spinner.css","chunks/vendor.js","chunks/plugin-vue_export-helper.js"]),meta:{name:"\u30C0\u30C3\u30B7\u30E5\u30FC\u30DC\u30FC\u30C9"}},{path:"/:cid/calendar",name:"Calendar",component:()=>r(()=>import("./chunks/Calendar.js"),["chunks/Calendar.js","chunks/main.js","assets/main.css","chunks/vendor.js"]),meta:{name:"\u30AB\u30EC\u30F3\u30C0\u30FC"}},{path:"/:cid/users",name:"BoardUsers",component:()=>r(()=>import("./chunks/Users2.js"),["chunks/Users2.js","chunks/plugin-vue_export-helper.js"]),meta:{name:"\u30E6\u30FC\u30B6\u30FC"}},{path:"/:cid/tutorials",name:"BoardTutorials",component:()=>r(()=>import("./chunks/Tutorials2.js"),["chunks/Tutorials2.js","assets/Tutorials2.css","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js","chunks/Icon.js","chunks/plugin-vue_export-helper.js"]),meta:{name:"\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB"}},{path:"/:cid/:dynid/",name:"Salon",component:()=>r(()=>import("./chunks/Salon.js"),["chunks/Salon.js","assets/Salon.css","chunks/vendor.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/FormSalon.js","chunks/rules.js","chunks/FormSalonPlaces.js"]),children:[{path:"/:cid/:dynid/projects",name:"SalonProjects",component:()=>r(()=>import("./chunks/SalonProjects.js"),["chunks/SalonProjects.js","chunks/FormProject.js","chunks/rules.js","chunks/useFormRequestBuilder.js","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Icon.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css"])},{path:"/:cid/:dynid/s-places",name:"SalonMap",component:()=>r(()=>import("./chunks/SalonPlaces.js"),["chunks/SalonPlaces.js","assets/SalonPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/Icon.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/useFormRequestBuilder.js","chunks/FormSalonPlaces.js","chunks/rules.js","chunks/useRightClickHandler.js"])}]},{path:"/:cid/:dynid/",name:"Project",component:()=>r(()=>import("./chunks/Project.js"),["chunks/Project.js","assets/Project.css","chunks/vendor.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/FormNested.js","chunks/useFormRequestBuilder.js","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"]),children:[{path:"/:cid/:dynid/routes",name:"ProjectRoutes",component:()=>r(()=>import("./chunks/ProjectRoutes.js"),["chunks/ProjectRoutes.js","assets/ProjectRoutes.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormRoute.js","chunks/rules.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/permissions",name:"ProjectScopePermissions",component:()=>r(()=>import("./chunks/ProjectPermissions2.js"),["chunks/ProjectPermissions2.js","assets/ProjectPermissions.css","chunks/Dialog.js","assets/Dialog.css","chunks/vendor.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useFormRequestBuilder.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-places",name:"ProjectPlaces",component:()=>r(()=>import("./chunks/ProjectPlaces.js"),["chunks/ProjectPlaces.js","assets/ProjectPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-categories",name:"ProjectPlacesCategories",component:()=>r(()=>import("./chunks/ProjectPlacesCategories.js"),["chunks/ProjectPlacesCategories.js","assets/ProjectPlacesCategories.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/plans",name:"ProjectPlans",component:()=>r(()=>import("./chunks/ProjectPlans.js"),["chunks/ProjectPlans.js","assets/ProjectPlans.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormNested.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/gallery",name:"ProjectGallery",component:()=>r(()=>import("./chunks/ProjectGallery.js"),["chunks/ProjectGallery.js","assets/ProjectGallery.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js"])},{path:"/:cid/:dynid/links",name:"ProjectLinks",component:()=>r(()=>import("./chunks/ProjectLinks.js"),["chunks/ProjectLinks.js","assets/ProjectLinks.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/rules.js"])},{path:"/:cid/:dynid/documents",name:"ProjectDocuments",component:()=>r(()=>import("./chunks/ProjectDocuments.js"),["chunks/ProjectDocuments.js","assets/ProjectDocuments.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/d-folders",name:"ProjectDocumentsFolders",component:()=>r(()=>import("./chunks/ProjectDocumentsFolders.js"),["chunks/ProjectDocumentsFolders.js","assets/ProjectDocumentsFolders.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/general-plans",name:"ProjectGeneralPlans",component:()=>r(()=>import("./chunks/ProjectGeneralPlans.js"),["chunks/ProjectGeneralPlans.js","assets/ProjectGeneralPlans.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/vistas",name:"ProjectVistas",component:()=>r(()=>import("./chunks/ProjectVistas.js"),["chunks/ProjectVistas.js","assets/ProjectVistas.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/slider.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/useUtils.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/building-vr",name:"ProjectBuildingVr",component:()=>r(()=>import("./chunks/ProjectBuildingVr.js"),["chunks/ProjectBuildingVr.js","assets/ProjectBuildingVr.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/Dialog.js","assets/Dialog.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useUtils.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js"])},{path:"/:cid/:dynid/building",name:"ProjectBuilding",component:()=>r(()=>import("./chunks/ProjectBuilding.js"),["chunks/ProjectBuilding.js","assets/ProjectBuilding.css","chunks/vendor.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormNested.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/useFormRequestBuilder.js"])},{path:"/:cid/:dynid/loan",name:"ProjectLoan",component:()=>r(()=>import("./chunks/ProjectLoan.js"),["chunks/ProjectLoan.js","assets/ProjectRoutes.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/parking-fees",name:"ProjectParkingFees",component:()=>r(()=>import("./chunks/ProjectParkingFees.js"),["chunks/ProjectParkingFees.js","assets/ProjectParkingFees.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-colors",name:"ProjectColorSimulator",component:()=>r(()=>import("./chunks/ProjectColorSimulator.js"),["chunks/ProjectColorSimulator.js","assets/ProjectColorSimulator.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/room-vr-types",name:"ProjectRoomVrTypes",component:()=>r(()=>import("./chunks/ProjectRoomVrTypes.js"),["chunks/ProjectRoomVrTypes.js","assets/ProjectRoomVrTypes.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Dialog.js","assets/Dialog.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-vr-floors",name:"ProjectRoomVrFloors",component:()=>r(()=>import("./chunks/ProjectRoomVrFloors.js"),["chunks/ProjectRoomVrFloors.js","assets/ProjectRoomVrFloors.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/Dialog.js","assets/Dialog.css","chunks/useFormRequestBuilder.js","chunks/useUtils.js","chunks/useRightClickHandler.js","chunks/FileInput.js","assets/FileInput.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/slider.esm.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/room-vr-floors",name:"ProjectRoomVrVendors",component:()=>r(()=>import("./chunks/ProjectRoomVrVendors.js"),["chunks/ProjectRoomVrVendors.js","assets/ProjectRoomVrVendors.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/Dialog.js","assets/Dialog.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useFormRequestBuilder.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/calendar",name:"ProjectCalendar",component:()=>r(()=>import("./chunks/ProjectCalendar.js"),["chunks/ProjectCalendar.js","assets/ProjectCalendar.css","chunks/vendor.js","chunks/main.js","assets/main.css","chunks/calendar.esm.js","chunks/overlayeventbus.esm.js","chunks/editor.esm.js","chunks/multiselect.esm.js","chunks/virtualscroller.esm.js","chunks/Dialog.js","assets/Dialog.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useFormRequestBuilder.js","chunks/useUtils.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js"])},{path:"/:cid/:dynid/frame1",name:"Frame2",component:()=>r(()=>import("./chunks/Frame1.js"),["chunks/Frame1.js","chunks/plugin-vue_export-helper.js","chunks/vendor.js"])},{path:"/:cid/:dynid/frame2",name:"Frame2",component:()=>r(()=>import("./chunks/Frame2.js"),["chunks/Frame2.js","chunks/plugin-vue_export-helper.js","chunks/vendor.js"])}]}];function ee(e){let t=null;if(document.cookie&&document.cookie!==""){const o=document.cookie.split(";");for(let i=0;i<o.length;i++){const n=o[i].trim();if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}}return t}const y=(e,t="get",o=null)=>{const{progress:i}=d();return _.defaults.headers.common["X-CSRFToken"]=ee("csrftoken"),new Promise((n,u)=>{_.request({method:t,baseURL:"https://test-panel.reactool.jp/api/",url:e+"/",data:o,onUploadProgress:s=>{i.value=Math.round(s.loaded/s.total*100)}}).then(s=>{n(s.data)}).catch(s=>{let c={};s.response&&(c.method=t,c.endpoint=e,c.status=s.response.status,Object.keys(s.response.data).forEach(a=>{c.problem=a+" -- "+s.response.data[a].toString()+" / "})),s.response.status!==403&&(alert(`\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
 \u30A8\u30E9\u30FC\u5185\u5BB9\u3092\u30B5\u30DD\u30FC\u30C8\u30C1\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002

\u3054\u7406\u89E3\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059`),alert!=null&&_.request({method:"post",baseURL:"https://test-panel.reactool.jp/api/",url:"logs/errors/",data:c}).then(()=>{window.location.reload()})),u(!1)})})};function g(){const{store:e}=d();function t(n,u){switch(u){case"user":e.user=n;break;case"company":e.company=n;break;case"companies":e.companies=n;break;case"routes":e.routes=n;break;case"salons":e.salons=n;break;case"salon":e.salon=n;break;case"projects":e.projects=n;break;case"project":e.project=n;break;case"projectPermissions":e.projectPermissions=n;break;case"news":e.news=n;break;case"tutorials":e.tutorials=n;break;case"errors":e.errors=n;break}}return{get:(n,u)=>new Promise((s,c)=>{y(n,"get").then(a=>{t(a,u),s(a)})}),save:(n,u,s="post")=>new Promise(c=>{y(n,s,u).then(a=>{c(a)})})}}const oe=()=>{const e=new URL("/static/loading.gif",self.location),t=document.createElement("img"),o=document.createElement("div");t.setAttribute("src",e),t.style.height="70px",o.id="splash",o.className="flex align-center justify-center",o.append(t),document.body.append(o)},te=()=>{const e=document.getElementById("splash");e&&(e.style.opacity="0",e.style.pointerEvents="none")},ne=(e,t,o,i)=>new Promise((n,u)=>{const s=t.some(a=>e===a.id+""),c=o.some(a=>e===a.id+"");!s&&!c?u(!1):(s&&i("salons/"+e,"salon").then(a=>{n(!0)}),c&&i("project_details/"+e,"project").then(a=>{n(!0)}))}),re=[{path:"/",name:"Entry",component:()=>r(()=>import("./chunks/index.js"),["chunks/index.js","chunks/vendor.js"]),children:Z},{path:"/admin/:cid",name:"Admin",component:()=>r(()=>import("./chunks/index2.js"),["chunks/index2.js","assets/index.css","chunks/vendor.js","chunks/Icon.js","chunks/Spinner.js","assets/Spinner.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Dialog.js","assets/Dialog.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useFormRequestBuilder.js"]),children:Q},{path:"/:pathMatch(.*)*",component:()=>{window.location.href="/404"}}],h=x({history:N(""),routes:re});h.beforeEach((e,t)=>j(void 0,null,function*(){var m;const{user:o,salons:i,projects:n,project:u,salon:s,content:c}=d(),{get:a}=g();if(e.name==="Entry")return{name:"Dashboard",params:{cid:(m=o.value)==null?void 0:m.company}};e.params.dynid!==t.params.dynid&&!e.path.match("admin")&&(c.value=!0,e.params.dynid!==t.params.dynid&&(yield ne(e.params.dynid,i.value,n.value,a).then(()=>{})))}));h.afterEach(e=>{te();const{content:t}=d();t.value=!1});class se{to404(){window.location.href="/404/"}getSalonsAndProjectsForSuperAdmin(t){return new Promise((o,i)=>{t("projects","projects").then(n=>{t("salons","salons").then(u=>o({salons:u,projects:n}))})})}getAll(){const{get:t}=g();return window.location.pathname.split("/").filter(o=>o.length),new Promise((o,i)=>{t("users/current","user").then(n=>{n.is_superuser&&t("companies","companies").then(u=>{this.getSalonsAndProjectsForSuperAdmin(t).then(()=>{t("permissions/projects","projectPermissions").then(s=>{t("routes","routes").then(c=>{t("logs/errors","errors")})})})}),t("companies/"+n.company,"company").then(u=>{t("news","news").then(s=>{t("projects","projects").then(c=>{t("tutorials","tutorials").then(a=>{o(!0)})})})})})})}}const p=U(Y),ae=$(),ie=new se;oe();p.component("InputNumber",G);p.directive("tooltip",q);p.use(ae);p.use(M);ie.getAll().then(e=>{p.use(h),p.mount("#app")});export{g as A,r as _,X as a,d as u};
