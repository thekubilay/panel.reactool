import{a as O,p as y,o as Q,b as m,v,f as d,w as j,x as r,z as o,y as G,K as A,A as $,e as W,H as F,C as oe,t as te,E as ne,D as se,R as U}from"./vendor.js";import{u as P,a as J,_ as z,S as ae}from"./useFormRequestBuilder.js";import{_ as ie}from"./BarTool.js";import{D as X}from"./vuedraggable.umd.js";import{s as Y}from"./menu.esm.js";import{_ as re}from"./FormNested.js";import{_ as Z}from"./FormQuery.js";import{_ as de}from"./ContextImagesThumbnailContainer.js";import{_ as pe}from"./Icon.js";import{A as ee,u as K}from"../main.js";import{u as le}from"./useRightClickHandler.js";import"./plugin-vue_export-helper.js";import"./overlayeventbus.esm.js";const ce=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"sub",type:"text",model:!1,label:"\u7A2E\u985E",hint:"\u975E\u4F4F\u6238\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u8868\u793A\u3055\u308C\u307E\u3059",required:!1,rules:[],id:"sub_input",disabled:!1,options:[{name:"\u975E\u4F4F\u6238",value:!0},{name:"\u90E8\u5C4B",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"sub_content",type:"text",model:null,label:"\u30C6\u30AD\u30B9\u30C8",hint:"\u975E\u4F4F\u6238\u306E\u5834\u5408\u3001\u8868\u793A\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8",placeholder:"\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9",required:!1,id:"sub_content_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"status",type:"text",model:"\u5546\u8AC7\u4E2D",label:"\u30B9\u30C6\u30FC\u30BF\u30B9",hint:null,required:!1,rules:[],id:"status_input",disabled:!1,options:[{name:"\u8CA9\u58F2\u4E2D",value:"\u8CA9\u58F2\u4E2D"},{name:"\u5546\u8AC7\u4E2D",value:"\u5546\u8AC7\u4E2D"},{name:"\u6B21\u671F\u5206\u8B72",value:"\u6B21\u671F\u5206\u8B72"},{name:"\u5B8C\u58F2\u6E08",value:"\u5B8C\u58F2\u6E08"}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"InputText",db_column_name:"number",type:"text",model:null,label:"\u53F7\u5BA4",hint:null,placeholder:"201",required:!1,id:"number_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"type",type:"text",model:null,label:"\u30BF\u30A4\u30D7",hint:null,placeholder:"AB",required:!1,id:"type_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"menu",type:"text",model:"\u8CA9\u58F2\u4E2D",label:"\u30E1\u30CB\u30E5\u30FC",hint:"\u7A7A\u306E\u5834\u5408\u3001\u5148\u306B\u30E1\u30CB\u30E5\u30FC\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044",required:!1,rules:[],id:"menu_input",disabled:!1,options:[],optionLabel:"name",optionValue:"id",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"plan",type:"text",model:null,label:"\u30D7\u30E9\u30F3",hint:null,placeholder:"3LDK",required:!1,id:"plan_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-3-space","relative"]},{component:null,name:"InputText",db_column_name:"m2",type:"text",model:null,label:"\u5C02\u6709\u9762\u7A4D",hint:null,placeholder:"80.40",required:!1,id:"m2_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-3-space","relative"]},{component:null,name:"InputText",db_column_name:"price",type:"text",model:"",label:"\u91D1\u984D",hint:"\u6570\u5B57\u98F2\u307F\u3067\u3001\u5358\u4F4D\u3092\u4E07\u5186\u3068\u3057\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",placeholder:"\u30FC",required:!1,id:"price_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-3-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputNumber",db_column_name:"management_fee",type:"text",model:null,label:"\u7BA1\u7406\u8CBB",hint:null,placeholder:"\u30FC",required:!1,id:"management_fee_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"InputNumber",db_column_name:"fixing_fee",type:"text",model:null,label:"\u4FEE\u7E55\u7A4D\u7ACB\u91D1",hint:null,placeholder:"\u30FC",required:!1,id:"fixing_fee_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u9593\u53D6\u308A\u753B\u50CF",hint:".jpeg, .png \u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text"],classes:["flex-column","column-1"]}]}]];const me={class:"in_outer-wrapper column-1 relative"},fe=["onContextmenu"],_e=r("div",{class:"cell-handle flex-column align-center justify-center grab"},[r("i",{class:"pi pi-bars"})],-1),be=["onClick"],ve={key:0,class:"header flex align-center justify-center"},ge={key:0,class:"block"},he={key:1,class:"body flex-column align-center justify-center"},xe={class:"b_context b_context-1 flex-column align-center justify-center"},Ce={class:"block"},ye=["innerHTML"],je={key:0,class:"flex align-end"},Ee={key:0,class:"block number-price-man"},Fe={key:1,class:"man"},Be={key:1,class:"block status"},Ae=["innerHTML"],De=O({props:{projectId:Number,floorId:{type:Number,default:null},rooms:Array},setup(f){const _=f,{get:D,save:h}=ee(),{submit:g,submitRowReorder:x,remove:k}=P(),{d:a,dr:q,data:p,images:B,useToggle:I}=J(),{rcm:T,rcmOpened:N,isRCOn:s}=le(p),{payload:l,project:c,content:w,progress:R}=K(),E=y(ce),S=y(!1),V=y(!1),L=y([]),b=y([{icon:"pi pi-copy",label:"\u30EB\u30FC\u30E0\u3092\u8907\u88FD\u3059\u308B",command:()=>{l.value={method:"post",endpoints:["app/building_floor_rooms","project_details/"+_.projectId],state:"project"};let i={duplicate:[JSON.parse(JSON.stringify(p.value))]};g(i,null,"object").then(()=>{w.value=!1})}},{icon:"pi pi-trash",label:"\u30EB\u30FC\u30E0\u3092\u524A\u9664\u3059\u308B",command:()=>{var u;w.value=!0,k("app/building_floor_rooms/"+((u=p.value)==null?void 0:u.id)).then(()=>{D("project_details/"+_.projectId,"project").then(()=>{w.value=!1})})}}]);function t(u){var i;B.value=u.image?[{image:u.image}]:[],(i=c.value)==null||i.plan_fields.forEach(e=>{if(e.plan_field_options.length&&e.name==="\u30E1\u30CB\u30E5\u30FC"){const M=JSON.parse(JSON.stringify(e.plan_field_options)).map(H=>(H.id=H.id+"",H));E.value[0][3].elements[1].model=u.menu,E.value[0][3].elements[1].options=M}}),I({method:"patch",endpoints:["app/building_floor_rooms/"+u.id,"project_details/"+_.projectId],state:"project"},u)}function n(u){V.value=!0,l.value={method:"patch",endpoints:["app/building_floor_rooms/"+p.value.id,"project_details/"+_.projectId],state:"project"},g({image:null,thumbnail:null},null).then(()=>{V.value=!1,B.value=[]})}function C(u){const i=L.value.find(e=>e.id===u);return i&&i.name||""}return Q(()=>{var u;(u=c.value)==null||u.plan_fields.forEach(i=>{i.plan_field_options.length&&i.name==="\u30E1\u30CB\u30E5\u30FC"&&(L.value=i.plan_field_options)})}),(u,i)=>(m(),v("div",me,[d(o(X),{tag:"div",onEnd:i[0]||(i[0]=e=>o(x)({value:f.rooms},{method:"post",endpoints:["app/building_floor_rooms","project_details/"+f.projectId],state:"project"})),list:f.rooms,class:"cell-wrapper flex",handle:".cell-handle","item-key":"id"},{item:j(({element:e,index:ue})=>[r("div",{onContextmenu:M=>o(s)(M,e),class:"sheet-cell flex align-center list-group-item relative pointer","aria-haspopup":"true","aria-controls":"rc_menu"},[d(o(Y),{id:"rc_menu",ref_key:"rcm",ref:T,class:"has-final-action rc",model:b.value,popup:!0},null,8,["model"]),_e,r("div",{class:G(["cell-content pointer",{sold:e.status==="\u5B8C\u58F2\u6E08",sell:e.status==="\u8CA9\u58F2\u4E2D",stop:e.status==="\u5546\u8AC7\u4E2D",next:e.status==="\u6B21\u671F\u5206\u8B72"}]),onClick:M=>t(e)},[e.sub?$("",!0):(m(),v("div",ve,[e.type&&e.number?(m(),v("span",ge,A(e.type)+" "+A(e.number)+" \u53F7\u5BA4",1)):$("",!0),e.thumbnail?(m(),W(pe,{key:1,svg:"image",class:"has-image"})):$("",!0)])),e.sub?(m(),v("div",{key:2,class:"sub-content flex align-center justify-center column-1 text-center",innerHTML:e.sub_content},null,8,Ae)):(m(),v("div",he,[r("div",xe,[r("span",Ce,A(C(parseInt(e.menu))),1),r("span",{class:"block",innerHTML:e.plan},null,8,ye)]),r("div",{class:G(["b_context b_context-2 flex align-center justify-center column-1",{"no-border":!e.status}])},[e.status==="\u8CA9\u58F2\u4E2D"?(m(),v("div",je,[e.price?(m(),v("span",Ee,A(e.price),1)):$("",!0),e.price?(m(),v("span",Fe,"\u4E07\u5186")):$("",!0)])):(m(),v("span",Be,A(e.status),1))],2)]))],10,be)],40,fe)]),_:1},8,["list"]),d(z,{modelValue:o(a),"onUpdate:modelValue":i[2]||(i[2]=e=>F(a)?a.value=e:null),title:"\u30EB\u30FC\u30E0\u30D5\u30A9\u30FC\u30E0",overflow:""},{default:j(()=>[d(Z,{modelValue:o(a),"onUpdate:modelValue":i[1]||(i[1]=e=>F(a)?a.value=e:null),"close-after":"",progress:o(R),form:E.value,data:o(p),query:{building_floor:_.floorId},submit:o(g),remove:S.value},{default:j(()=>[d(de,{containerId:"image_input",images:o(B),remove:n},null,8,["images"])]),_:1},8,["modelValue","progress","form","data","query","submit","remove"])]),_:1},8,["modelValue"])]))}});const ke={class:"outer-wrap column-1"},qe={class:"sheet-row flex align-center list-group-item relative"},Ie=["onContextmenu"],we=r("i",{class:"pi pi-bars"},null,-1),Ve=["onClick"],$e=r("i",{class:"pi pi-plus flex align-center justify-center"},null,-1),Te=[$e],Ne={class:"action-wrapper flex align-center"},Re=O({props:{projectId:Number,floors:Array},setup(f){const _=f,{get:D,save:h}=ee(),{submit:g,submitRowReorder:x,remove:k}=P(),{d:a,dr:q,data:p,useToggle:B}=J(),{rcm:I,rcmOpened:T,isRCOn:N}=le(p),{payload:s,content:l,progress:c,project:w}=K(),R=y(!1),E=y([[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputNumber",db_column_name:"room_count",type:"text",model:1,label:"\u30EB\u30FC\u30E0\u6570",hint:"*\u30D5\u30ED\u30A2\u306E\u4E2D\u3067\u4F5C\u6210\u3057\u305F\u3044\u30EB\u30FC\u30E0\u6570",placeholder:"\u30FC",required:!1,id:"",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2"]}]}]]),S=y([{icon:"pi pi-plus",label:"\u65B0\u898F\u30EB\u30FC\u30E0",command:()=>{V()}},{icon:"pi pi-copy",label:"\u968E\u3092\u8907\u88FD\u3059\u308B",command:()=>{l.value=!0;const b={id:null,building:p.value.building,order_id:null};s.value={method:"post",endpoints:["app/building_floors","project_details/"+_.projectId],state:"project"},g(b,null,"object").then(t=>{const n=p.value.rooms.map(u=>(u.building_floor=t.id,u.id=null,u.image=null,u.thumbnail=null,u))||[];s.value={method:"post",endpoints:["app/building_floor_rooms","project_details/"+_.projectId],state:"project"};let C={duplicate:n};g(C,null,"object").then(()=>{l.value=!1}),C.duplicate.length||(l.value=!1)})}},{icon:"pi pi-trash",label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var b;l.value=!0,k("app/building_floors/"+((b=p.value)==null?void 0:b.id)).then(()=>{var t;D("project_details/"+((t=w.value)==null?void 0:t.id),"project").then(()=>{l.value=!1})})}}]);function V(b=null){s.value={method:"post",endpoints:["app/building_floor_rooms","project_details/"+_.projectId],state:"project"},b&&(p.value={id:b}),a.value=!0}function L(){var n;R.value=!1;const b=E.value[0][0].elements[0].model;let t={create:[]};for(let C=0;C<b;C++){const u={building_floor:(n=p.value)==null?void 0:n.id};t.create.push(u)}g(t,null,"object").then(()=>{a.value=!1})}return(b,t)=>(m(),v("div",ke,[d(o(X),{tag:"div",onEnd:t[0]||(t[0]=n=>o(x)({value:f.floors},{method:"post",endpoints:["app/building_floors","project_details/"+f.projectId],state:"project"})),list:f.floors,class:"floor-row",handle:".handle","item-key":"id"},{item:j(({element:n,index:C})=>[r("div",qe,[r("div",{onContextmenu:u=>o(N)(u,n),class:"handle flex-column align-center justify-center grab","aria-haspopup":"true","aria-controls":"floor_rc_menu"},[d(o(Y),{id:"rc_menu",ref_key:"rcm",ref:I,class:"has-final-action rc",model:S.value,popup:!0},null,8,["model"]),oe(" "+A(f.floors.length-C)+"F ",1),we],40,Ie),n.rooms.length?(m(),W(De,{key:0,projectId:f.projectId,"floor-id":n.id,rooms:n.rooms},null,8,["projectId","floor-id","rooms"])):(m(),v("button",{key:1,onClick:u=>V(n.id),class:"add-rooms flex align-center justify-center pointer"},Te,8,Ve))])]),_:1},8,["list"]),d(z,{modelValue:o(a),"onUpdate:modelValue":t[5]||(t[5]=n=>F(a)?a.value=n:null),title:"\u4F1A\u793E\u30D5\u30A9\u30FC\u30E0"},{default:j(()=>[d(re,{modelValue:o(a),"onUpdate:modelValue":t[3]||(t[3]=n=>F(a)?a.value=n:null),form:E.value,"onUpdate:form":t[4]||(t[4]=n=>E.value=n),topProgress:"",loading:R.value},{actions:j(()=>[r("div",Ne,[r("button",{onClick:t[1]||(t[1]=n=>a.value=!1),class:"flex align-center justify-center cancel"},"\u4E2D\u6B62"),r("button",{onClick:t[2]||(t[2]=n=>L()),class:"flex align-center justify-center submit-or-next"},"\u767B\u9332")])]),_:1},8,["modelValue","form","loading"])]),_:1},8,["modelValue"])]))}}),Le=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"management_fee",type:"text",model:null,label:"\u7BA1\u7406\u8CBB",hint:null,placeholder:"140000",required:!1,id:"management_fee_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]},{component:null,name:"InputText",db_column_name:"fixing_fee",type:"text",model:null,label:"\u4FEE\u7406\u8CBB",hint:null,placeholder:"12300",required:!1,id:"fixing_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]}]}]];const Me={id:"project_building",class:"panel-board relative"},Se={class:"part-wrap"},He={class:"part-wrap part-end"},Oe={class:"b_spreadsheet-wrapper overflow-y"},ul=O({setup(f){const{submit:_}=P(),{payload:D,project:h,content:g}=K(),{d:x,data:k,useToggle:a}=J(),q=y([]),p=ne(),B=se();Q(()=>{var s;q.value=((s=h.value)==null?void 0:s.building.floors)||[]});function I(){var s,l;D.value={method:"post",endpoints:["app/building_floors","project_details/"+((s=h.value)==null?void 0:s.id)],state:"project"},_({id:null,building:(l=h.value)==null?void 0:l.building.id,name:null,order_id:null},null)}function T(){var s,l,c;a({method:"patch",endpoints:["app/building/"+((s=h.value)==null?void 0:s.building.id),"project_details/"+((l=h.value)==null?void 0:l.id)],state:"project"},(c=h.value)==null?void 0:c.building)}function N(){B.push({name:"ProjectParkingFees",params:{cid:p.params.cid,dynid:p.params.dynid}})}return te(()=>h.value,s=>{q.value=(s==null?void 0:s.building.floors)||[]}),(s,l)=>(m(),v("div",Me,[d(ae,{modelValue:o(g),"onUpdate:modelValue":l[0]||(l[0]=c=>F(g)?g.value=c:null)},null,8,["modelValue"]),d(ie,{class:"justify-space-between"},{default:j(()=>[r("div",Se,[d(o(U),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u968E\u3092\u8FFD\u52A0",onClick:l[1]||(l[1]=c=>I())})]),r("div",He,[d(o(U),{onClick:l[2]||(l[2]=c=>T()),type:"button",class:"tool-button",label:"\u57FA\u672C\u8CBB\u7528\u8A2D\u5B9A"}),d(o(U),{onClick:l[3]||(l[3]=c=>N()),type:"button",class:"tool-button",label:"\u99D0\u8ECA\u5834\u8CBB\u7528\u4E00\u89A7"})])]),_:1}),r("div",Oe,[d(Re,{projectId:o(h).id,floors:q.value},null,8,["projectId","floors"])]),d(z,{modelValue:o(x),"onUpdate:modelValue":l[5]||(l[5]=c=>F(x)?x.value=c:null),title:"\u30D5\u30A9\u30FC\u30E0"},{default:j(()=>[d(Z,{modelValue:o(x),"onUpdate:modelValue":l[4]||(l[4]=c=>F(x)?x.value=c:null),"close-after":"",form:o(Le),data:o(k),query:{},submit:o(_)},null,8,["modelValue","form","data","submit"])]),_:1},8,["modelValue"])]))}});export{ul as default};
