var N=Object.defineProperty;var A=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var V=(e,s,t)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,_=(e,s)=>{for(var t in s||(s={}))U.call(s,t)&&V(e,t,s[t]);if(A)for(var t of A(s))$.call(s,t)&&V(e,t,s[t]);return e};import{d as R,o as L,a as h,c as f,w as y,b as q,e as g,t as G,n as M,f as z,g as J,T as C,p as W,h as H,i as X,j as Y,s as K,r as Q,k as I,u as Z,l as ee,m as oe,q as te,v as k,x as ne,y as se,z as re,A as ae,B as ie,C as ue,P as ce}from"./chunks/vendor.js";var me=(e,s)=>{const t=e.__vccOpts||e;for(const[o,r]of s)t[o]=r;return t};const le=e=>(W("data-v-71a4f469"),e=e(),H(),e),de={class:"spinner-wrapper"},pe=le(()=>g("img",{id:"brand_spin",src:"",alt:"brand loading"},null,-1)),_e={class:"spinner-text"},he=R({props:{modelValue:Boolean,bg:{type:Boolean},text:{type:String,default:"loading..."},fixed:{type:Boolean,default:!1},height:{type:String,default:"100%"},width:{type:String,default:"100%"}},setup(e){const s=e;L(()=>{const o=new URL("/static/assets/logo.gif",self.location);document.getElementById("brand_spin").setAttribute("src",o)});const t=()=>"width: "+s.width+"; height: "+s.height+";";return(o,r)=>(h(),f(C,{name:"fade"},{default:y(()=>[e.modelValue?(h(),q("div",{key:0,class:M(["loader",{fixed:e.fixed,absolute:!e.fixed,bg:e.bg}]),style:z(t())},[g("div",de,[pe,g("p",_e,G(e.text),1)])],6)):J("",!0)]),_:1}))}});var Ee=me(he,[["__scopeId","data-v-71a4f469"]]);function Pe(){return{payload:{},user:null,routes:[],companies:[],company:null,salons:[],salon:null,projects:[],project:null,errors:[],projectPermissions:[],news:[],tutorials:[],app:!0,content:!0,onload:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0",progress:0,notifyTopBar:!1}}function je(){return{GET_SALON_PROJECTS(e){return e.projects.filter(s=>{var t;return s.salon===((t=e.salon)==null?void 0:t.id)})}}}function ve(){return{SET_PAYLOAD(e){this.payload=e}}}var fe=X({id:"main",state:Pe,getters:_({},je()),actions:_({},ve())});function E(){const e=fe(),s=Y(()=>e.company.users);return _({store:e,users:s},K(e))}const ye=R({setup(e){const{app:s}=E(),t=()=>{const o=te();o.config.locale.dayNames=["\u65E5\u66DC\u65E5","\u6708\u66DC\u65E5","\u706B\u66DC\u65E5","\u6C34\u66DC\u65E5","\u6728\u66DC\u65E5","\u91D1\u66DC\u65E5","\u571F\u66DC\u65E5"],o.config.locale.dayNamesShort=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.dayNamesMin=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o.config.locale.monthNames=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.monthNamesShort=["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],o.config.locale.today="\u4ECA\u65E5",o.config.locale.weak="\u5F31\u3044",o.config.locale.medium="\u666E\u901A",o.config.locale.strong="\u5F37\u3044",o.config.locale.tim,o.config.locale.passwordPrompt=""};return L(()=>{t()}),(o,r)=>{const u=Q("router-view");return h(),f(u,null,{default:y(({Component:a})=>[I(Ee,{modelValue:Z(s),"onUpdate:modelValue":r[0]||(r[0]=i=>ee(s)?s.value=i:null)},null,8,["modelValue"]),I(C,{name:"scale",mode:"out-in"},{default:y(()=>[(h(),f(oe(a)))]),_:2},1024)]),_:1})}}}),ge="modulepreload",O={},ke="/static/",n=function(s,t){return!t||t.length===0?s():Promise.all(t.map(o=>{if(o=`${ke}${o}`,o in O)return;O[o]=!0;const r=o.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":ge,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",c)})})).then(()=>s())};var De=[{path:"/admin/:cid/users",name:"Users",component:()=>n(()=>import("./chunks/Users.js"),["chunks/Users.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js","chunks/FormUserUpdate.js","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/salons",name:"Salons",component:()=>n(()=>import("./chunks/Salons.js"),["chunks/Salons.js","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormSalon.js"])},{path:"/admin/:cid/projects",name:"Projects",component:()=>n(()=>import("./chunks/Projects.js"),["chunks/Projects.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/routes",name:"Routes",component:()=>n(()=>import("./chunks/Routes.js"),["chunks/Routes.js","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormRoute.js","chunks/rules.js"])},{path:"/admin/:cid/project-permissions",name:"ProjectPermissions",component:()=>n(()=>import("./chunks/ProjectPermissions.js"),["chunks/ProjectPermissions.js","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/admin/:cid/news",name:"News",component:()=>n(()=>import("./chunks/News.js"),["chunks/News.js","assets/News.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/editor.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/tutorials",name:"Tutorials",component:()=>n(()=>import("./chunks/Tutorials.js"),["chunks/Tutorials.js","assets/Tutorials2.css","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/tutorial-parts",name:"TutorialImages",component:()=>n(()=>import("./chunks/TutorialImages.js"),["chunks/TutorialImages.js","chunks/dropdown.esm.js","chunks/vendor.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/vuedraggable.umd.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css"])},{path:"/admin/:cid/errors",name:"LogsError",component:()=>n(()=>import("./chunks/LogsError.js"),["chunks/LogsError.js","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js"])}],Te=[{path:"/:cid",name:"Dashboard",component:()=>n(()=>import("./chunks/Dashboard.js"),["chunks/Dashboard.js","assets/Dashboard.css","chunks/vendor.js"]),meta:{name:"\u30C0\u30C3\u30B7\u30E5\u30FC\u30DC\u30FC\u30C9"}},{path:"/:cid/calendar",name:"Calendar",component:()=>n(()=>import("./chunks/Calendar.js"),["chunks/Calendar.js","chunks/main.js","assets/main.css","chunks/vendor.js"]),meta:{name:"\u30AB\u30EC\u30F3\u30C0\u30FC"}},{path:"/:cid/users",name:"BoardUsers",component:()=>n(()=>import("./chunks/Users2.js"),["chunks/Users2.js","chunks/vendor.js"]),meta:{name:"\u30E6\u30FC\u30B6\u30FC"}},{path:"/:cid/tutorials",name:"BoardTutorials",component:()=>n(()=>import("./chunks/Tutorials2.js"),["chunks/Tutorials2.js","assets/Tutorials.css","chunks/BarTool.js","assets/BarTool.css","chunks/vendor.js","chunks/Icon.js"]),meta:{name:"\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB"}},{path:"/:cid/:dynid/",name:"Salon",component:()=>n(()=>import("./chunks/Salon.js"),["chunks/Salon.js","assets/Salon.css","chunks/vendor.js","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/FormSalon.js","chunks/rules.js","chunks/FormSalonPlaces.js"]),children:[{path:"/:cid/:dynid/projects",name:"SalonProjects",component:()=>n(()=>import("./chunks/SalonProjects.js"),["chunks/SalonProjects.js","chunks/FormProject.js","chunks/rules.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/Icon.js","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css"])},{path:"/:cid/:dynid/s-places",name:"SalonMap",component:()=>n(()=>import("./chunks/SalonPlaces.js"),["chunks/SalonPlaces.js","assets/SalonPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/Icon.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormSalonPlaces.js","chunks/rules.js","chunks/useRightClickHandler.js"])}]},{path:"/:cid/:dynid/",name:"Project",component:()=>n(()=>import("./chunks/Project.js"),["chunks/Project.js","assets/Project.css","chunks/vendor.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/FormNested.js","chunks/FormProject.js","chunks/rules.js","chunks/useUtils.js"]),children:[{path:"/:cid/:dynid/routes",name:"ProjectRoutes",component:()=>n(()=>import("./chunks/ProjectRoutes.js"),["chunks/ProjectRoutes.js","assets/ProjectLoan.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormRoute.js","chunks/rules.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/permissions",name:"ProjectScopePermissions",component:()=>n(()=>import("./chunks/ProjectPermissions2.js"),["chunks/ProjectPermissions2.js","assets/ProjectPermissions.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/vendor.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormProjectPermission.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-places",name:"ProjectPlaces",component:()=>n(()=>import("./chunks/ProjectPlaces.js"),["chunks/ProjectPlaces.js","assets/ProjectPlaces.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/p-categories",name:"ProjectPlacesCategories",component:()=>n(()=>import("./chunks/ProjectPlacesCategories.js"),["chunks/ProjectPlacesCategories.js","assets/ProjectPlacesCategories.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/plans",name:"ProjectPlans",component:()=>n(()=>import("./chunks/ProjectPlans.js"),["chunks/ProjectPlans.js","assets/ProjectPlans.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/column.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/FormNested.js","chunks/DialogDelete.js","assets/DialogDelete.css"])},{path:"/:cid/:dynid/gallery",name:"ProjectGallery",component:()=>n(()=>import("./chunks/ProjectGallery.js"),["chunks/ProjectGallery.js","assets/ProjectGallery.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js"])},{path:"/:cid/:dynid/links",name:"ProjectLinks",component:()=>n(()=>import("./chunks/ProjectLinks.js"),["chunks/ProjectLinks.js","assets/ProjectLinks.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useRightClickHandler.js","chunks/rules.js"])},{path:"/:cid/:dynid/documents",name:"ProjectDocuments",component:()=>n(()=>import("./chunks/ProjectDocuments.js"),["chunks/ProjectDocuments.js","assets/ProjectDocuments.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/d-folders",name:"ProjectDocumentsFolders",component:()=>n(()=>import("./chunks/ProjectDocumentsFolders.js"),["chunks/ProjectDocumentsFolders.js","assets/ProjectDocumentsFolders.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/general-plans",name:"ProjectGeneralPlans",component:()=>n(()=>import("./chunks/ProjectGeneralPlans.js"),["chunks/ProjectGeneralPlans.js","assets/ProjectGeneralPlans.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/rules.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/vistas",name:"ProjectVistas",component:()=>n(()=>import("./chunks/ProjectVistas.js"),["chunks/ProjectVistas.js","assets/ProjectVistas.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/slider.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useRightClickHandler.js","chunks/useUtils.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/building-vr",name:"ProjectBuildingVr",component:()=>n(()=>import("./chunks/ProjectBuildingVr.js"),["chunks/ProjectBuildingVr.js","assets/ProjectBuildingVr.css","chunks/vendor.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/BarTool.js","assets/BarTool.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/useRightClickHandler.js","chunks/Icon.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/useUtils.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js"])},{path:"/:cid/:dynid/building",name:"ProjectBuilding",component:()=>n(()=>import("./chunks/ProjectBuilding.js"),["chunks/ProjectBuilding.js","assets/ProjectBuilding.css","chunks/vendor.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/vuedraggable.umd.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/FormNested.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/loan",name:"ProjectLoan",component:()=>n(()=>import("./chunks/ProjectLoan.js"),["chunks/ProjectLoan.js","assets/ProjectLoan.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/parking-fees",name:"ProjectParkingFees",component:()=>n(()=>import("./chunks/ProjectParkingFees.js"),["chunks/ProjectParkingFees.js","assets/ProjectParkingFees.css","chunks/vuedraggable.umd.js","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/BarTool.js","assets/BarTool.css","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-colors",name:"ProjectColorSimulator",component:()=>n(()=>import("./chunks/ProjectColorSimulator.js"),["chunks/ProjectColorSimulator.js","assets/ProjectColorSimulator.css","chunks/vendor.js","chunks/vuedraggable.umd.js","chunks/dropdown.esm.js","chunks/overlayeventbus.esm.js","chunks/virtualscroller.esm.js","chunks/menu.esm.js","chunks/column.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/FormNested.js","chunks/useUtils.js"])},{path:"/:cid/:dynid/room-vr-types",name:"ProjectRoomVrTypes",component:()=>n(()=>import("./chunks/ProjectRoomVrTypes.js"),["chunks/ProjectRoomVrTypes.js","assets/ProjectRoomVrTypes.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/ContextImagesThumbnailContainer.js","assets/ContextImagesThumbnailContainer.css","chunks/Icon.js","chunks/useRightClickHandler.js"])},{path:"/:cid/:dynid/room-vr-floors",name:"ProjectRoomVrFloors",component:()=>n(()=>import("./chunks/ProjectRoomVrFloors.js"),["chunks/ProjectRoomVrFloors.js","assets/ProjectRoomVrFloors.css","chunks/vendor.js","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/dropdown.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/Icon.js","chunks/useUtils.js","chunks/useRightClickHandler.js","chunks/FileInput.js","assets/FileInput.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/slider.esm.js","chunks/useGrabAndMoveHandler.js"])},{path:"/:cid/:dynid/calendar",name:"ProjectCalendar",component:()=>n(()=>import("./chunks/ProjectCalendar.js"),["chunks/ProjectCalendar.js","assets/ProjectCalendar.css","chunks/vendor.js","chunks/main.js","assets/main.css","chunks/calendar.esm.js","chunks/overlayeventbus.esm.js","chunks/editor.esm.js","chunks/virtualscroller.esm.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/DialogDelete.js","assets/DialogDelete.css","chunks/useUtils.js"])},{path:"/:cid/:dynid/frame1",name:"Frame2",component:()=>n(()=>import("./chunks/Frame1.js"),["chunks/Frame1.js","chunks/vendor.js"])},{path:"/:cid/:dynid/frame2",name:"Frame2",component:()=>n(()=>import("./chunks/Frame2.js"),["chunks/Frame2.js","chunks/vendor.js"])}]}];function Ae(e){let s=null;if(document.cookie&&document.cookie!==""){const t=document.cookie.split(";");for(let o=0;o<t.length;o++){const r=t[o].trim();if(r.substring(0,e.length+1)===e+"="){s=decodeURIComponent(r.substring(e.length+1));break}}}return s}const b=(e,s="get",t=null)=>{const{progress:o}=E();return k.defaults.headers.common["X-CSRFToken"]=Ae("csrftoken"),new Promise((r,u)=>{k.request({method:s,baseURL:"https://panel.reactool.jp/api/",url:e+"/",data:t,onUploadProgress:a=>{o.value=Math.round(a.loaded/a.total*100)}}).then(a=>{r(a.data)}).catch(a=>{let i={};a.response&&(i.method=s,i.endpoint=e,i.status=a.response.status,Object.keys(a.response.data).forEach(c=>{i.problem=c+" -- "+a.response.data[c].toString()+" / "})),a.response.status!==403&&(alert(`\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
 \u30A8\u30E9\u30FC\u5185\u5BB9\u3092\u30B5\u30DD\u30FC\u30C8\u30C1\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002

\u3054\u7406\u89E3\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059`),alert!=null&&k.request({method:"post",baseURL:"https://panel.reactool.jp/api/",url:"logs/errors/",data:i}).then(()=>{window.location.reload()})),u(!1)})})};function w(){const{store:e}=E();function s(r,u){switch(u){case"user":e.user=r;break;case"company":e.company=r;break;case"companies":e.companies=r;break;case"routes":e.routes=r;break;case"salons":e.salons=r;break;case"salon":e.salon=r;break;case"projects":e.projects=r;break;case"project":e.project=r;break;case"projectPermissions":e.projectPermissions=r;break;case"news":e.news=r;break;case"tutorials":e.tutorials=r;break;case"errors":e.errors=r;break}}return{get:(r,u)=>new Promise((a,i)=>{b(r,"get").then(c=>{s(c,u),a(c)})}),save:(r,u,a="post")=>new Promise(i=>{b(r,a,u).then(c=>{i(c)})})}}const Ve=[{path:"/",name:"Entry",component:()=>n(()=>import("./chunks/index.js"),["chunks/index.js","assets/index2.css","chunks/vendor.js","chunks/FormQuery.js","assets/FormQuery.css","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/Icon.js","chunks/ButtonDropdown.js","assets/ButtonDropdown.css","chunks/menu.esm.js","chunks/overlayeventbus.esm.js","chunks/password.esm.js","chunks/FormUserUpdate.js","chunks/rules.js","chunks/useUtils.js"]),children:Te},{path:"/admin/:cid",name:"Admin",component:()=>n(()=>import("./chunks/index2.js"),["chunks/index2.js","assets/index.css","chunks/vendor.js","chunks/Icon.js","chunks/useFormRequestBuilder.js","assets/useFormRequestBuilder.css","chunks/BarTool.js","assets/BarTool.css","chunks/FormQuery.js","assets/FormQuery.css","chunks/DialogDelete.js","assets/DialogDelete.css"]),children:De},{path:"/:pathMatch(.*)*",component:()=>{window.location.href="/404"}}],F=ne({history:se(""),routes:Ve});function S(e,s,t){const{get:o}=w();return new Promise((r,u)=>{const a=s.some(c=>e.params.dynid==c.id),i=t.some(c=>e.params.dynid==c.id);!a&&!i?u(!1):(a&&o("salons/"+e.params.dynid,"salon").then(c=>{r(!0)}),i&&o("project_details/"+e.params.dynid,"project").then(c=>{r(!0)}))})}F.beforeEach((e,s,t)=>{const{user:o,salons:r,projects:u,app:a,content:i,project:c,salon:Le}=E(),{get:m}=w();o.value?e.path.match("admin")?o.value.is_staff||o.value.is_superuser?e.name==="Admin"?m("companies","companies").then(B=>{var d;m("companies/"+((d=o.value)==null?void 0:d.company),"company").then(P=>{m("routes","routes").then(j=>{m("logs/errors","errors").then(D=>{m("tutorials","tutorials").then(T=>{i.value=!1,t()})})})})}):t():t({name:"Dashboard",params:{cid:o.value.company}}):e.params.dynid&&e.params.dynid!==s.params.dynid?(i.value=!0,S(e,r.value,u.value).then(()=>{i.value=!1,t()})):t():m("users/current","user").then(B=>{var d,P,j;(((d=o.value)==null?void 0:d.is_staff)||((P=o.value)==null?void 0:P.is_superuser))&&m("companies","companies").then(D=>{m("routes","routes").then(T=>{m("permissions/projects","projectPermissions").then(x=>{m("logs/errors","errors").then(v=>{m("news","news").then(p=>{m("tutorials","tutorials").then(Ce=>{})})})})})}),m("companies/"+((j=o.value)==null?void 0:j.company),"company").then(D=>{m("salons","salons").then(T=>{m("projects","projects").then(x=>{var v;e.name==="Entry"&&!e.params.dynid||e.path==="/"?setTimeout(()=>{var p;a.value=!1,t({name:"Dashboard",params:{cid:(p=o.value)==null?void 0:p.company}})},300):e.params.dynid?S(e,r.value,u.value).then(p=>{setTimeout(()=>{a.value=!1,e.name==="Salon"||e.name==="Project"?window.location.href="/404/":t()},300),i.value=!1}).catch(()=>{window.location.href="/404/"}):(setTimeout(()=>{a.value=!1,i.value=!1},300),e.params.cid!=="404"&&e.params.cid!=((v=o.value)==null?void 0:v.company)+""?window.location.href="/404/":t())})})})})});const l=re(ye),Re=ae();l.component("InputNumber",ie);l.directive("tooltip",ue);l.use(ce);l.use(Re);l.use(F);l.provide("host","dataasdas");l.mount("#app");export{w as A,n as _,me as a,fe as b,E as u};
