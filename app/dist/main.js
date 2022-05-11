var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var D=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&D(e,o,t[o]);if(y)for(var o of y(t))S.call(t,o)&&D(e,o,t[o]);return e};import{d as B,c as N,s as U,a as $,o as G,r as q,b as T,e as A,w as R,f as M,g as J,T as W,u as x,h as v,i as H,j as X,k as Y,l as z,m as K,n as Q,P as Z}from"./chunks/vendor.js";function ee(){return{payload:{},user:null,routes:[],companies:[],company:null,salons:[],salon:null,projects:[],project:null,errors:[],projectPermissions:[],news:[],tutorials:[],app:!0,content:!0,onload:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0",progress:0,notifyTopBar:!1}}function oe(){return{GET_SALON_PROJECTS(e){return e.projects.filter(t=>{var o;return t.salon===((o=e.salon)==null?void 0:o.id)})}}}function ne(){return{SET_PAYLOAD(e){this.payload=e}}}var se=B({id:"main",state:ee,getters:_({},oe()),actions:_({},ne())});function h(){const e=se(),t=N(()=>e.company.users);return _({store:e,users:t},U(e))}const te=$({setup(e){h();const t=()=>{const o=x();o.config.locale.dayNames=["\u65E5\u66DC\u65E5","\u6708\u66DC\u65E5","\u706B\u66DC\u65E5","\u6C34\u66DC\u65E5","\u6728\u66DC\u65E5","\u91D1\u66DC\u65E5","\u571F\u66DC\u65E5"],o.config.locale.dayNamesShort=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.dayNamesMin=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.monthNames=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.monthNamesShort=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.today="\u4ECA\u65E5",o.config.locale.weak="\u5F31\u3044",o.config.locale.medium="\u666E\u901A",o.config.locale.strong="\u5F37\u3044",o.config.locale.tim,o.config.locale.passwordPrompt=""};return G(()=>{t()}),(o,r)=>{const s=q("router-view");return T(),A(s,null,{default:R(({Component:i})=>[M(W,{name:"scale",mode:"out-in"},{default:R(()=>[(T(),A(J(i)))]),_:2},1024)]),_:1})}}}),re="modulepreload",g={},ae="/static/",n=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${ae}${r}`,r in g)return;g[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":re,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((u,c)=>{a.addEventListener("load",u),a.addEventListener("error",c)})})).then(()=>t())};var ue=[{path:"/admin/:cid/users",name:"Users",component:()=>n(()=>import("./chunks/Users.js"),["chunks/Users.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js","chunks/FormUserUpdate.js","chunks/BarTool.js","assets/BarTool.css","chunks/useUtils.js"])},{path:"/admin/:cid/salons",name:"Salons",component:()=>n(()=>import("./chunks/Salons.js"),["chunks/Salons.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormSalon.js"])},{path:"/admin/:cid/projects",name:"Projects",component:()=>n(()=>import("./chunks/Projects.js"),["chunks/Projects.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/routes",name:"Routes",component:()=>n(()=>import("./chunks/Routes.js"),["chunks/Routes.js","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormRoute.js","chunks/rules.js"])},{path:"/admin/:cid/project-permissions",name:"ProjectPermissions",component:()=>n(()=>import("./chunks/ProjectPermissions.js"),["chunks/ProjectPermissions.js","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/news",name:"News",component:()=>n(()=>import("./chunks/News.js"),["chunks/News.js","assets/News.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/editor.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/tutorials",name:"Tutorials",component:()=>n(()=>import("./chunks/Tutorials.js"),["chunks/Tutorials.js","assets/Tutorials.css","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/tutorial-parts",name:"TutorialImages",component:()=>n(()=>import("./chunks/TutorialImages.js"),["chunks/TutorialImages.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/errors",name:"LogsError",component:()=>n(()=>import("./chunks/LogsError.js"),["chunks/LogsError.js","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js"])}],ie=[{path:"/:cid",name:"Dashboard",component:()=>n(()=>import("./chunks/Dashboard.js"),["chunks/Dashboard.js","assets/Dashboard.css","chunks/plugin-vue_export-helper.js","chunks/vendor.js"]),meta:{name:"\u30C0\u30C3\u30B7\u30E5\u30FC\u30DC\u30FC\u30C9"}},{path:"/:cid/calendar",name:"Calendar",component:()=>n(()=>import("./chunks/Calendar.js"),["chunks/Calendar.js","chunks/main.js","assets/main.css","chunks/vendor.js"]),meta:{name:"\u30AB\u30EC\u30F3\u30C0\u30FC"}},{path:"/:cid/users",name:"BoardUsers",component:()=>n(()=>import("./chunks/Users2.js"),["chunks/Users2.js","chunks/plugin-vue_export-helper.js"]),meta:{name:"\u30E6\u30FC\u30B6\u30FC"}},{path:"/:cid/tutorials",name:"BoardTutorials",component:()=>n(()=>import("./chunks/Tutorials2.js"),["chunks/Tutorials2.js","assets/Tutorials2.css","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js","chunks/Icon.js","chunks/plugin-vue_export-helper.js"]),meta:{name:"\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB"}},{path:"/:cid/:dynid/",name:"Salon",component:()=>n(()=>import("./chunks/Salon.js"),["chunks/Salon.js","assets/Salon.css","chunks/vendor.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/FormSalon.js","chunks/rules.js","chunks/FormSalonPlaces.js"]),children:[{path:"/:cid/:dynid/projects",name:"SalonProjects",component:()=>n(()=>import("./chunks/SalonProjects.js"),["chunks/SalonProjects.js","chunks/FormProject.js","chunks/rules.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/vendor.js","chunks/plugin-vue_export-helper.js","chunks/vuedraggable.umd.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/Icon.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css"])},{path:"/:cid/:dynid/s-places",name:"SalonMap",component:()=>n(()=>import("./chunks/SalonPlaces.js"),["chunks/SalonPlaces.js","assets/SalonPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/Icon.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormSalonPlaces.js","chunks/rules.js","chunks/useRightClickHandler.js"])}]},{path:"/:cid/:dynid/",name:"Project",component:()=>n(()=>import("./chunks/Project.js"),["chunks/Project.js","assets/Project.css","chunks/vendor.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/FormNested.js","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"]),children:[{path:"/:cid/:dynid/routes",name:"ProjectRoutes",component:()=>n(()=>import("./chunks/ProjectRoutes.js"),["chunks/ProjectRoutes.js","assets/ProjectLoan.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormRoute.js","chunks/rules.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/permissions",name:"ProjectScopePermissions",component:()=>n(()=>import("./chunks/ProjectPermissions2.js"),["chunks/ProjectPermissions2.js","assets/ProjectPermissions.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/vendor.js","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-places",name:"ProjectPlaces",component:()=>n(()=>import("./chunks/ProjectPlaces.js"),["chunks/ProjectPlaces.js","assets/ProjectPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-categories",name:"ProjectPlacesCategories",component:()=>n(()=>import("./chunks/ProjectPlacesCategories.js"),["chunks/ProjectPlacesCategories.js","assets/ProjectPlacesCategories.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/plans",name:"ProjectPlans",component:()=>n(()=>import("./chunks/ProjectPlans.js"),["chunks/ProjectPlans.js","assets/ProjectPlans.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormNested.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/gallery",name:"ProjectGallery",component:()=>n(()=>import("./chunks/ProjectGallery.js"),["chunks/ProjectGallery.js","assets/ProjectGallery.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js"])},{path:"/:cid/:dynid/links",name:"ProjectLinks",component:()=>n(()=>import("./chunks/ProjectLinks.js"),["chunks/ProjectLinks.js","assets/ProjectLinks.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useRightClickHandler.js","chunks/rules.js"])},{path:"/:cid/:dynid/documents",name:"ProjectDocuments",component:()=>n(()=>import("./chunks/ProjectDocuments.js"),["chunks/ProjectDocuments.js","assets/ProjectDocuments.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/d-folders",name:"ProjectDocumentsFolders",component:()=>n(()=>import("./chunks/ProjectDocumentsFolders.js"),["chunks/ProjectDocumentsFolders.js","assets/ProjectDocumentsFolders.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/general-plans",name:"ProjectGeneralPlans",component:()=>n(()=>import("./chunks/ProjectGeneralPlans.js"),["chunks/ProjectGeneralPlans.js","assets/ProjectGeneralPlans.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/vistas",name:"ProjectVistas",component:()=>n(()=>import("./chunks/ProjectVistas.js"),["chunks/ProjectVistas.js","assets/ProjectVistas.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/slider.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useRightClickHandler.js","chunks/useUtils.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/building-vr",name:"ProjectBuildingVr",component:()=>n(()=>import("./chunks/ProjectBuildingVr.js"),["chunks/ProjectBuildingVr.js","assets/ProjectBuildingVr.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/useRightClickHandler.js","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useUtils.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js"])},{path:"/:cid/:dynid/building",name:"ProjectBuilding",component:()=>n(()=>import("./chunks/ProjectBuilding.js"),["chunks/ProjectBuilding.js","assets/ProjectBuilding.css","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/FormNested.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/loan",name:"ProjectLoan",component:()=>n(()=>import("./chunks/ProjectLoan.js"),["chunks/ProjectLoan.js","assets/ProjectLoan.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/parking-fees",name:"ProjectParkingFees",component:()=>n(()=>import("./chunks/ProjectParkingFees.js"),["chunks/ProjectParkingFees.js","assets/ProjectParkingFees.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-colors",name:"ProjectColorSimulator",component:()=>n(()=>import("./chunks/ProjectColorSimulator.js"),["chunks/ProjectColorSimulator.js","assets/ProjectColorSimulator.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/room-vr-types",name:"ProjectRoomVrTypes",component:()=>n(()=>import("./chunks/ProjectRoomVrTypes.js"),["chunks/ProjectRoomVrTypes.js","assets/ProjectRoomVrTypes.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-vr-floors",name:"ProjectRoomVrFloors",component:()=>n(()=>import("./chunks/ProjectRoomVrFloors.js"),["chunks/ProjectRoomVrFloors.js","assets/ProjectRoomVrFloors.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useUtils.js","chunks/useRightClickHandler.js","chunks/FileInput.js","assets/FileInput.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/slider.esm.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/room-vr-floors",name:"ProjectRoomVrVendors",component:()=>n(()=>import("./chunks/ProjectRoomVrVendors.js"),["chunks/ProjectRoomVrVendors.js","assets/ProjectRoomVrVendors.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/calendar",name:"ProjectCalendar",component:()=>n(()=>import("./chunks/ProjectCalendar.js"),["chunks/ProjectCalendar.js","assets/ProjectCalendar.css","chunks/vendor.js","chunks/main.js","assets/main.css","chunks/calendar.esm.js","chunks/overlayeventbus.esm.js","chunks/editor.esm.js","chunks/multiselect.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useUtils.js"])},{path:"/:cid/:dynid/frame1",name:"Frame2",component:()=>n(()=>import("./chunks/Frame1.js"),["chunks/Frame1.js","chunks/plugin-vue_export-helper.js","chunks/vendor.js"])},{path:"/:cid/:dynid/frame2",name:"Frame2",component:()=>n(()=>import("./chunks/Frame2.js"),["chunks/Frame2.js","chunks/plugin-vue_export-helper.js","chunks/vendor.js"])}]}];function ce(e){let t=null;if(document.cookie&&document.cookie!==""){const o=document.cookie.split(";");for(let r=0;r<o.length;r++){const s=o[r].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}}return t}const V=(e,t="get",o=null)=>{const{progress:r}=h();return v.defaults.headers.common["X-CSRFToken"]=ce("csrftoken"),new Promise((s,i)=>{v.request({method:t,baseURL:"https://panel.reactool.jp/api/",url:e+"/",data:o,onUploadProgress:a=>{r.value=Math.round(a.loaded/a.total*100)}}).then(a=>{s(a.data)}).catch(a=>{let u={};a.response&&(u.method=t,u.endpoint=e,u.status=a.response.status,Object.keys(a.response.data).forEach(c=>{u.problem=c+" -- "+a.response.data[c].toString()+" / "})),a.response.status!==403&&(alert(`\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
 \u30A8\u30E9\u30FC\u5185\u5BB9\u3092\u30B5\u30DD\u30FC\u30C8\u30C1\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002

\u3054\u7406\u89E3\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059`),alert!=null&&v.request({method:"post",baseURL:"https://panel.reactool.jp/api/",url:"logs/errors/",data:u}).then(()=>{window.location.reload()})),i(!1)})})};function C(){const{store:e}=h();function t(s,i){switch(i){case"user":e.user=s;break;case"company":e.company=s;break;case"companies":e.companies=s;break;case"routes":e.routes=s;break;case"salons":e.salons=s;break;case"salon":e.salon=s;break;case"projects":e.projects=s;break;case"project":e.project=s;break;case"projectPermissions":e.projectPermissions=s;break;case"news":e.news=s;break;case"tutorials":e.tutorials=s;break;case"errors":e.errors=s;break}}return{get:(s,i)=>new Promise((a,u)=>{V(s,"get").then(c=>{t(c,i),a(c)})}),save:(s,i,a="post")=>new Promise(u=>{V(s,a,i).then(c=>{u(c)})})}}const me=[{path:"/",name:"Entry",component:()=>n(()=>import("./chunks/index.js"),["chunks/index.js","assets/index2.css","chunks/vendor.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/Icon.js","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/password.esm.js","chunks/FormUserUpdate.js","chunks/rules.js","chunks/useUtils.js"]),children:ie},{path:"/admin/:cid",name:"Admin",component:()=>n(()=>import("./chunks/index2.js"),["chunks/index2.js","assets/index.css","chunks/vendor.js","chunks/Icon.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/plugin-vue_export-helper.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css"]),children:ue},{path:"/:pathMatch(.*)*",component:()=>{window.location.href="/404"}}],L=H({history:X(""),routes:me});function I(e,t,o){const{get:r}=C();return new Promise((s,i)=>{const a=t.some(c=>e.params.dynid==c.id),u=o.some(c=>e.params.dynid==c.id);!a&&!u?i(!1):(a&&r("salons/"+e.params.dynid,"salon").then(c=>{s(!0)}),u&&r("project_details/"+e.params.dynid,"project").then(c=>{s(!0)}))})}L.beforeEach((e,t,o)=>{const{user:r,salons:s,projects:i,app:a,content:u,project:c,salon:de}=h(),{get:m}=C();r.value?e.path.match("admin")?r.value.is_staff||r.value.is_superuser?e.name==="Admin"?m("companies","companies").then(O=>{var d;m("companies/"+((d=r.value)==null?void 0:d.company),"company").then(P=>{m("routes","routes").then(E=>{m("logs/errors","errors").then(f=>{m("tutorials","tutorials").then(k=>{u.value=!1,o()})})})})}):o():o({name:"Dashboard",params:{cid:r.value.company}}):e.params.dynid&&e.params.dynid!==t.params.dynid?(u.value=!0,I(e,s.value,i.value).then(()=>{u.value=!1,o()})):o():m("users/current","user").then(O=>{var d,P,E;(((d=r.value)==null?void 0:d.is_staff)||((P=r.value)==null?void 0:P.is_superuser))&&m("companies","companies").then(f=>{m("routes","routes").then(k=>{m("permissions/projects","projectPermissions").then(F=>{m("logs/errors","errors").then(j=>{m("news","news").then(l=>{m("tutorials","tutorials").then(le=>{})})})})})}),m("companies/"+((E=r.value)==null?void 0:E.company),"company").then(f=>{m("salons","salons").then(k=>{m("projects","projects").then(F=>{var j;e.name==="Entry"&&!e.params.dynid||e.path==="/"?setTimeout(()=>{var l;a.value=!1,o({name:"Dashboard",params:{cid:(l=r.value)==null?void 0:l.company}})},300):e.params.dynid?I(e,s.value,i.value).then(l=>{setTimeout(()=>{a.value=!1,e.name==="Salon"||e.name==="Project"?window.location.href="/404/":o()},300),u.value=!1}).catch(()=>{window.location.href="/404/"}):(setTimeout(()=>{a.value=!1,u.value=!1},300),e.params.cid!=="404"&&e.params.cid!=((j=r.value)==null?void 0:j.company)+""?window.location.href="/404/":o())})})})})});const p=Y(te),pe=z();p.component("InputNumber",K);p.directive("tooltip",Q);p.use(pe);p.use(Z);p.use(L);p.mount("#app");export{C as A,n as _,se as a,h as u};
