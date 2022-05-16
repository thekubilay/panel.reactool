import{a as P,p as _,t as w,v as C,f as n,w as p,E as R,D as M,r as D,b as g,x as f,K as H,z as o,S as j,A as U,H as V,T as z,e as J,g as K,C as F}from"./vendor.js";import{_ as O}from"./BarTool.js";import{_ as Q}from"./FormQuery.js";import{_ as G}from"./ButtonDropdown.js";import{u as W,a as X,_ as Y}from"./useFormRequestBuilder.js";import{_ as Z}from"./ContextImagesThumbnailContainer.js";import{A as ee,u as le}from"../main.js";import{f as E}from"./FormSalon.js";import{c as ae,d as oe}from"./rules.js";import{f as ne}from"./FormSalonPlaces.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";import"./menu.esm.js";import"./overlayeventbus.esm.js";import"./Icon.js";const ue=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"all",type:"text",model:!0,label:"\u5168\u3066\u8868\u793A",hint:null,required:!1,rules:[],id:"all_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"administrative",type:"text",model:!0,label:"\u4F4F\u6240\u540D",hint:null,required:!1,rules:[],id:"administrative_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"poi",type:"text",model:!0,label:"\u30B9\u30DD\u30C3\u30C8",hint:null,required:!1,rules:[],id:"poi_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"road",type:"text",model:!0,label:"\u9053\u8DEF",hint:null,required:!1,rules:[],id:"road_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"water",type:"text",model:!0,label:"\u6C34\u57DF",hint:null,required:!1,rules:[],id:"water_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"line",type:"text",model:!0,label:"\u96FB\u8ECA\u30E9\u30A4\u30F3",hint:null,required:!1,rules:[],id:"line_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"station",type:"text",model:!0,label:"\u99C5",hint:null,required:!1,rules:[],id:"station_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"pin",type:"text",model:null,label:"PIN",hint:".jpeg, .png, .svg \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"place_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[ae],rule:oe,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const se={id:"salon",class:"relative panel-board"},te={class:"part-wrap flex align-center relative"},ie={class:"title"},pe=f("span",{class:"divider"},null,-1),re={class:"part-wrap flex align-center"},de=F(" \u7269\u4EF6\u4E00\u89A7 "),me=F(" \u5730\u56F3 "),ce={key:0,class:"part-wrap part-end"},Te=P({setup(_e){const{get:q}=ee(),{submit:h,remove:fe}=W(),{payload:T,salon:a,progress:B,onload:L}=le(),{d:i,data:S,images:r,useToggle:v}=X(),b=R();M();const d=_(E),y=_(!1),m=_(null),k=_([{label:"\u7DE8\u96C6",icon:"pi pi-pencil",command:()=>{var e,l;m.value={id:null,name:null,company:null},d.value=E,v({method:"patch",endpoints:["salons/"+((e=a.value)==null?void 0:e.id),"salons/"+((l=a.value)==null?void 0:l.id)],state:"salon"},a.value)}},{label:"JSON \u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",icon:"pi pi-database",command:()=>{var e;window.open("https://test-panel.reactool.jp/api/salons/"+((e=a.value)==null?void 0:e.id)+"/?format=json","_blank")}}]);function I(){var e,l;m.value={id:null,order_id:null,salon:(e=a.value)==null?void 0:e.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},d.value=ne,v({method:"post",endpoints:["salons_places","salons/"+((l=a.value)==null?void 0:l.id)],state:"salon"})}function $(){var e,l,u,c,t,s,x,A;r.value=((l=(e=a.value)==null?void 0:e.map_settings)==null?void 0:l.pin)?[{image:(u=a.value)==null?void 0:u.map_settings.pin}]:[],m.value={id:null,order_id:null,salon:(c=a.value)==null?void 0:c.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},d.value=ue,v({method:"patch",endpoints:["salons_places_settings/"+((s=(t=a.value)==null?void 0:t.map_settings)==null?void 0:s.id),"salons/"+((x=a.value)==null?void 0:x.id)],state:"salon"},(A=a.value)==null?void 0:A.map_settings)}function N(){var e,l,u;y.value=!0,T.value={method:"patch",endpoints:["salons_places_settings/"+((l=(e=a.value)==null?void 0:e.map_settings)==null?void 0:l.id),"salons/"+((u=a.value)==null?void 0:u.id)],state:"salon"},h({pin:null},null,"object").then(()=>{y.value=!1,r.value=[]})}return w(()=>{var e;return(e=a.value)==null?void 0:e.map_settings},e=>{r.value=(e==null?void 0:e.pin)?[{image:e.pin}]:[]}),w(()=>a.value,()=>{q("salons","salons")}),(e,l)=>{const u=D("router-link"),c=D("router-view");return g(),C("div",se,[n(O,null,{default:p(()=>{var t;return[f("div",te,[f("h3",ie,H(o(a).name),1),n(G,{id:"salon_setting",items:k.value},null,8,["items"])]),pe,f("div",re,[n(u,{class:"pn-item flex align-center justify-center","active-class":"active",to:{name:"SalonProjects",params:{dynid:o(b).params.dynid}}},{default:p(()=>[de]),_:1},8,["to"]),n(u,{class:"pn-item flex align-center justify-center","active-class":"active",to:{name:"SalonMap",params:{dynid:o(b).params.dynid}}},{default:p(()=>[me]),_:1},8,["to"])]),o(b).name==="SalonMap"?(g(),C("div",ce,[n(o(j),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u65BD\u8A2D",onClick:l[0]||(l[0]=s=>I())}),n(o(j),{type:"button",class:"submit-button icon-button",icon:"pi pi-cog","icon-pos":"left",onClick:l[1]||(l[1]=s=>$())})])):U("",!0),n(Y,{modelValue:o(i),"onUpdate:modelValue":l[3]||(l[3]=s=>V(i)?i.value=s:null),title:(t=o(a))==null?void 0:t.name},{default:p(()=>[n(Q,{modelValue:o(i),"onUpdate:modelValue":l[2]||(l[2]=s=>V(i)?i.value=s:null),"close-after":"",topProgress:"",progress:o(B),form:d.value,onload:o(L),data:o(S),query:m.value,submit:o(h)},null,8,["modelValue","progress","form","onload","data","query","submit"]),n(Z,{containerId:"place_image_input",images:o(r),remove:N},null,8,["images"])]),_:1},8,["modelValue","title"])]}),_:1}),n(c,null,{default:p(({Component:t})=>[n(z,{name:"fade",mode:"out-in"},{default:p(()=>[(g(),J(K(t)))]),_:2},1024)]),_:1})])}}});export{Te as default};
