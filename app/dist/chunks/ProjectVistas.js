import{A as ie,u as re,r as i,d as pe,bv as de,w as K,l as me,c as j,b as m,f as e,z as B,q as T,e as s,F as ce,s as ve,a2 as fe,o as E,M as ue,t as L,y as _e,g as I}from"../main.js";import{s as ge}from"./menu.esm.js";import{s as be}from"./dropdown.esm.js";import he from"./slider.esm.js";import{_ as Ce}from"./Dialog.js";import{S as ye}from"./Spinner.js";import{_ as xe}from"./BarTool.js";import{_ as Fe}from"./Icon.js";import{_ as Be}from"./FormQuery.js";import{_ as Ee}from"./DialogDelete.js";import{u as we,a as De}from"./useFormRequestBuilder.js";import{u as je}from"./useRightClickHandler.js";import{u as Ve}from"./useUtils.js";import{u as Ae}from"./useGrabAndMoveHandler.js";import"./portal.esm.js";import"./index.esm.js";import"./virtualscroller.esm.js";import"./plugin-vue_export-helper.js";const se=[[{classes:["flex justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"time",type:"text",model:"\u663C",label:"\u6642\u9593\u5E2F",hint:null,required:!0,rules:[],id:"day_time_input",disabled:!1,options:[{name:"\u663C",value:"\u663C"},{name:"\u5915",value:"\u5915"}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-3-space","relative"]},{component:null,name:"Dropdown",db_column_name:"repeat",type:"text",model:!0,label:"\u30EB\u30FC\u30D7",hint:null,required:!0,rules:[],id:"loop_input",disabled:!1,options:[{name:"\u3059\u308B",value:!0},{name:"\u3057\u306A\u3044",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-3-space","relative"]},{component:null,name:"Dropdown",db_column_name:"is_bg",type:"text",model:!1,label:"\u8868\u793A\u65B9\u6CD5",hint:null,required:!0,rules:[],id:"bg_input",disabled:!1,options:[{name:"\u30D1\u30CE\u30E9\u30DE\u8868\u793A",value:!1},{name:"\u80CC\u666F\u753B\u50CF\u8868\u793A",value:!0}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-3-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputNumber",db_column_name:"floor_num",type:"text",model:null,label:"\u968E\u6570",hint:"\u6570\u5B57\u3060\u3051\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",placeholder:"3",required:!0,id:"floor_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"InputText",db_column_name:"plan_type",type:"text",model:null,label:"\u30BF\u30A4\u30D7",hint:null,placeholder:"AB",required:!1,id:"type_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u753B\u50CF",hint:".jpeg, .png \u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]],ae=[[{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u753B\u50CF",hint:".jpeg, .png \u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];function ke(){const{get:O,save:Q}=ie(),{submit:b,submitRowReorder:c,remove:A}=we(),{d:P,dr:v,data:h,images:w,useToggle:D}=De(),{rcm:f,rcmOpened:W,isRCOn:S}=je(h),{payload:_,content:p,progress:C,project:o}=re(),k=i(),V=i(),y=i("\u663C"),R=i(["\u663C","\u5915"]),N=i(""),H=i([]),z=i([]),x=i(!0),X=i(0),g=i(!1),q=i(!1);function Y(u="content",a=null){var F,M,$,U;u==="content"?(x.value=!0,q.value=!1,k.value=se,ae[0][0].elements[0].model=y.value,V.value={vista_simulator:(F=o.value)==null?void 0:F.vista_simulator.id,compass_start:1,compass_left:1,compass_top:1},D({method:"post",endpoints:["app/vista_simulator_contents","project_details/"+((M=o.value)==null?void 0:M.id)],state:"project"})):(x.value=!1,k.value=ae,V.value={project:($=o.value)==null?void 0:$.id},D({method:"patch",endpoints:["app/vista_simulators/"+(a==null?void 0:a.id),"project_details/"+((U=o.value)==null?void 0:U.id)],state:"project"},a))}function G(u){var a,F;w.value=u.image?[{image:u.image}]:[],x.value=!0,q.value=!0,k.value=se,V.value={vista_simulator:(a=o.value)==null?void 0:a.vista_simulator.id},D({method:"patch",endpoints:["app/vista_simulator_contents/"+u.id,"project_details/"+((F=o.value)==null?void 0:F.id)],state:"project"},u)}function Z(){var u;g.value=!0,A("app/vista_simulator_contents/"+((u=h.value)==null?void 0:u.id)).then(()=>{var a;v.value=!1,O("project_details/"+((a=o.value)==null?void 0:a.id),"project").then(()=>{P.value=!1,g.value=!1})})}const ee=()=>{var u;x.value=!1,g.value=!0,_.value={method:"patch",endpoints:["app/vista_simulators/"+h.value.id,"project_details/"+((u=o.value)==null?void 0:u.id)],state:"project"},b({image:null,thumbnail:null},null).then(a=>{g.value=!1})},r=()=>{var u;x.value=!1,g.value=!0,_.value={method:"patch",endpoints:["app/vista_simulator_contents/"+h.value.id,"project_details/"+((u=o.value)==null?void 0:u.id)],state:"project"},b({image:null,thumbnail:null},null).then(a=>{g.value=!1,w.value=[]})},J=i([{label:"\u65B0\u898F\u773A\u671B",command:()=>{var u;D({method:"post",endpoints:["app/vista_simulator_contents","project_details/"+((u=o.value)==null?void 0:u.id)],state:"project"})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var u;p.value=!0,A("app/vista_simulator_contents"+((u=h.value)==null?void 0:u.id)).then(()=>{var a;O("project_details/"+((a=o.value)==null?void 0:a.id),"project").then(()=>{p.value=!1})})}}]);return{reform:k,query:V,type:N,types:H,time:y,times:R,vistas:z,rm:q,loading:g,slider:X,closeAfter:x,d:P,dr:v,data:h,content:p,images:w,progress:C,project:o,createOrUpdate:Y,open:G,removeItem:Z,removeImage:ee,removeContentImage:r,rightClickMenu:J,rcm:f,isRCOn:S,useToggle:D,submit:b,submitRowReorder:c,remove:A}}const qe={id:"project_vista",class:"panel-board relative"},Me={class:"part-wrap"},$e={class:"part-wrap part-end"},Ue={class:"spreadsheet-wrapper overflow-x"},Ie=fe('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u968E\u6570</div><div class="sheet-cell img flex align-center">\u753B\u50CF</div><div class="sheet-cell num flex align-center">\u6642\u9593\u5E2F</div><div class="sheet-cell value sheet-cell-long flex align-center">\u753B\u50CF\u540D</div><div class="sheet-cell value flex align-center">\u9593\u53D6\u308A\u30BF\u30A4\u30D7</div></div></div>',1),Re={class:"sb-container ss-container"},Te=["onClick","onContextmenu"],Le=s("div",{class:"sheet-cell handle flex align-center handle grab"},null,-1),Oe={class:"sheet-cell num flex align-center"},Pe={class:"text block"},Se={class:"sheet-cell img flex align-center"},Ne={class:"sheet-cell num flex align-center"},He={class:"text block"},ze={class:"sheet-cell value sheet-cell-long flex align-center"},Ge={key:0,class:"text block"},Je={class:"sheet-cell value flex align-center"},Ke={key:0,class:"slider-container"},Qe=s("span",{class:"label block"},"\u30B3\u30F3\u30D1\u30B9\u306E\u5411\u304D",-1),We={key:0,class:"land-print relative overflow-hidden"},Xe={class:"row relative image-container relative"},Ye=["src"],Ze=s("span",{class:"hint"},"*\u30B3\u30F3\u30D1\u30B9\u3092\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3067\u304D\u307E\u3059",-1),el={class:"button-wrapper flex justify-end"},hl=pe({__name:"ProjectVistas",setup(O){const{sortByDesc:Q}=Ve(),{reform:b,query:c,type:A,types:P,time:v,times:h,vistas:w,rm:D,slider:f,closeAfter:W,loading:S,d:_,dr:p,data:C,content:o,images:k,progress:V,project:y,createOrUpdate:R,open:N,rightClickMenu:H,rcm:z,isRCOn:x,useToggle:X,removeItem:g,removeImage:q,removeContentImage:Y,submit:G,submitRowReorder:Z,remove:ee}=ke(),{element:r,offset:J,onMouseEnter:u,onMouseLeave:a,onMouseDown:F,onMouseUp:M,onMouseMove:$}=Ae(),U=i(null);function oe(d,l){return d.filter(t=>t.time===v.value)||[]}function ne(){var l,t;const d=((l=y.value)==null?void 0:l.vista_simulator.vista_simulator_contents)||[];w.value=oe(d,{time:v.value,type:A.value}),f.value=parseInt((t=C.value)==null?void 0:t.compass_start)}return de(()=>ne()),K(f,()=>{r.value&&(r.value.style.transform="rotate("+f.value+"deg)"),r.value&&(c.value.compass_start=f.value)}),K(()=>r.value,d=>{d&&C.value&&setTimeout(()=>{d.setAttribute("src",U.value),r.value.style.top=C.value.compass_top+"px",r.value.style.left=C.value.compass_left+"px",r.value.style.transform="rotate("+C.value.compass_start+"deg)"},50)}),K(()=>J.value,d=>{c.value.compass_top=r.value.computedStyleMap().get("top").value,c.value.compass_left=r.value.computedStyleMap().get("left").value}),me(()=>{var d,l;U.value=new URL("/static/assets/compass.svg",self.location),w.value=(l=(d=y.value)==null?void 0:d.vista_simulator.vista_simulator_contents)==null?void 0:l.filter(t=>t.time===v.value)}),(d,l)=>(E(),j("div",qe,[m(ye,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=t=>B(o)?o.value=t:null)},null,8,["modelValue"]),m(xe,{class:"justify-space-between"},{default:T(()=>[s("div",Me,[m(e(ue),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u968E\u3092\u8FFD\u52A0",onClick:l[1]||(l[1]=t=>e(R)())}),m(e(ue),{type:"button",class:"submit-button icon-button",icon:"pi pi-cog","icon-pos":"left",onClick:l[2]||(l[2]=t=>e(R)("sim",e(y).vista_simulator))})]),s("div",$e,[m(e(be),{style:{"margin-left":"0",width:"60px"},class:"dropdown",modelValue:e(v),"onUpdate:modelValue":l[3]||(l[3]=t=>B(v)?v.value=t:null),options:e(h),placeholder:"\u30BF\u30A4\u30E0"},null,8,["modelValue","options"])])]),_:1}),s("div",Ue,[Ie,s("div",Re,[(E(!0),j(ce,null,ve(e(Q)(e(w),"floor_num"),(t,n)=>{var le;return E(),j("div",{key:n,onClick:te=>e(N)(t),onContextmenu:te=>e(x)(te,t),"aria-haspopup":"true","aria-controls":"rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[m(e(ge),{id:"rc_menu",ref_for:!0,ref_key:"rcm",ref:z,class:"rc has-final-action",model:e(H),popup:!0},null,8,["model"]),Le,s("div",Oe,[s("span",Pe,L(t.floor_num),1)]),s("div",Se,[t.image?(E(),_e(Fe,{key:0,svg:"image"})):I("",!0)]),s("div",Ne,[s("span",He,L(t.time),1)]),s("div",ze,[t.image?(E(),j("span",Ge,L((le=t.image)==null?void 0:le.split("/",6)[5].split(".",1)[0]),1)):I("",!0)]),s("div",Je,L(t.plan_type),1)],40,Te)}),128))])]),m(Ce,{modelValue:e(_),"onUpdate:modelValue":l[17]||(l[17]=t=>B(_)?_.value=t:null),title:"\u773A\u671B\u30D5\u30A9\u30FC\u30E0",overflow:""},{default:T(()=>[m(Be,{modelValue:e(_),"onUpdate:modelValue":l[11]||(l[11]=t=>B(_)?_.value=t:null),dr:e(p),"onUpdate:dr":l[12]||(l[12]=t=>B(p)?p.value=t:null),form:e(b),"onUpdate:form":l[13]||(l[13]=t=>B(b)?b.value=t:null),"close-after":e(W),topProgress:"",progress:e(V),data:e(C),loading:e(S),query:e(c),remove:e(D),submit:e(G)},{default:T(()=>{var t;return[e(c).hasOwnProperty("project")||e(c).hasOwnProperty("plan_type")&&e(b)[0][1].elements[1].model?(E(),j("div",Ke,[Qe,m(e(he),{modelValue:e(f),"onUpdate:modelValue":l[4]||(l[4]=n=>B(f)?f.value=n:null),min:1,max:360},null,8,["modelValue"]),e(y).vista_simulator.image?(E(),j("div",We,[s("div",Xe,[s("img",{class:"print",src:(t=e(y).vista_simulator)==null?void 0:t.image,alt:"landplan"},null,8,Ye),s("img",{draggable:!1,onMousemove:l[5]||(l[5]=(...n)=>e($)&&e($)(...n)),onMouseenter:l[6]||(l[6]=(...n)=>e(u)&&e(u)(...n)),onMouseleave:l[7]||(l[7]=(...n)=>e(a)&&e(a)(...n)),onMousedown:l[8]||(l[8]=(...n)=>e(F)&&e(F)(...n)),onMouseup:l[9]||(l[9]=(...n)=>e(M)&&e(M)(...n)),ref_key:"element",ref:r,class:"compass",alt:"compass"},null,544),e(c).hasOwnProperty("project")?(E(),j("button",{key:0,onClick:l[10]||(l[10]=n=>e(q)()),class:"remove"}," \u753B\u50CF\u524A\u9664 ")):I("",!0)]),Ze])):I("",!0)])):I("",!0)]}),_:1},8,["modelValue","dr","form","close-after","progress","data","loading","query","remove","submit"]),m(Ee,{modelValue:e(p),"onUpdate:modelValue":l[16]||(l[16]=t=>B(p)?p.value=t:null)},{default:T(()=>[s("div",el,[s("button",{onClick:l[14]||(l[14]=t=>p.value=!1),class:"cancel"},"\u3044\u3044\u3048"),s("button",{onClick:l[15]||(l[15]=t=>e(g)()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{hl as default};
