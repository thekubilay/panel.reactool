import{d as P,A as R,u as M,k as O,O as U,l as f,D as w,r as D,c as C,g as n,w as p,o as g,h as _,t as H,b as o,i as V,s as E,f as J,p as q,T as z,e as G,j as K}from"../main.js";import{_ as Q}from"./BarTool.js";import{_ as W}from"./FormQuery.js";import{_ as X}from"./ButtonDropdown.js";import{_ as Y}from"./Dialog.js";import{_ as Z}from"./ContextImagesThumbnailContainer.js";import{a as ee,u as le}from"./useFormRequestBuilder.js";import{f as F}from"./FormSalon.js";import{c as ae,d as oe}from"./rules.js";import{f as ne}from"./FormSalonPlaces.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";import"./menu.esm.js";import"./portal.esm.js";import"./Icon.js";const ue=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"all",type:"text",model:!0,label:"\u5168\u3066\u8868\u793A",hint:null,required:!1,rules:[],id:"all_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"administrative",type:"text",model:!0,label:"\u4F4F\u6240\u540D",hint:null,required:!1,rules:[],id:"administrative_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"poi",type:"text",model:!0,label:"\u30B9\u30DD\u30C3\u30C8",hint:null,required:!1,rules:[],id:"poi_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"road",type:"text",model:!0,label:"\u9053\u8DEF",hint:null,required:!1,rules:[],id:"road_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"water",type:"text",model:!0,label:"\u6C34\u57DF",hint:null,required:!1,rules:[],id:"water_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"line",type:"text",model:!0,label:"\u96FB\u8ECA\u30E9\u30A4\u30F3",hint:null,required:!1,rules:[],id:"line_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"station",type:"text",model:!0,label:"\u99C5",hint:null,required:!1,rules:[],id:"station_input",disabled:!1,options:[{name:"\u8868\u793A",value:!0},{name:"\u672A\u8868\u793A",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"pin",type:"text",model:null,label:"PIN",hint:".jpeg, .png, .svg \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"place_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[ae],rule:oe,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const te={id:"salon",class:"relative panel-board"},se={class:"part-wrap flex align-center relative"},ie={class:"title"},pe=_("span",{class:"divider"},null,-1),re={class:"part-wrap flex align-center"},de={key:0,class:"part-wrap part-end"},Fe=P({__name:"Salon",setup(me){const{get:T}=R(),{submit:h,remove:ce}=ee(),{payload:B,salon:a,progress:L,onload:j}=M(),{d:i,data:k,images:r,useToggle:v}=le(),b=O();U();const d=f(F),y=f(!1),m=f(null),$=f([{label:"\u7DE8\u96C6",icon:"pi pi-pencil",command:()=>{var e,l;m.value={id:null,name:null,company:null},d.value=F,v({method:"patch",endpoints:["salons/"+((e=a.value)==null?void 0:e.id),"salons/"+((l=a.value)==null?void 0:l.id)],state:"salon"},a.value)}},{label:"JSON \u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",icon:"pi pi-database",command:()=>{var e;window.open("https://panel.reactool.jp/api/salons/"+((e=a.value)==null?void 0:e.id)+"/?format=json","_blank")}}]);function S(){var e,l;m.value={id:null,order_id:null,salon:(e=a.value)==null?void 0:e.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},d.value=ne,v({method:"post",endpoints:["salons_places","salons/"+((l=a.value)==null?void 0:l.id)],state:"salon"})}function I(){var e,l,u,c,s,t,x,A;r.value=(l=(e=a.value)==null?void 0:e.map_settings)!=null&&l.pin?[{image:(u=a.value)==null?void 0:u.map_settings.pin}]:[],m.value={id:null,order_id:null,salon:(c=a.value)==null?void 0:c.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},d.value=ue,v({method:"patch",endpoints:["salons_places_settings/"+((t=(s=a.value)==null?void 0:s.map_settings)==null?void 0:t.id),"salons/"+((x=a.value)==null?void 0:x.id)],state:"salon"},(A=a.value)==null?void 0:A.map_settings)}function N(){var e,l,u;y.value=!0,B.value={method:"patch",endpoints:["salons_places_settings/"+((l=(e=a.value)==null?void 0:e.map_settings)==null?void 0:l.id),"salons/"+((u=a.value)==null?void 0:u.id)],state:"salon"},h({pin:null},null,"object").then(()=>{y.value=!1,r.value=[]})}return w(()=>{var e;return(e=a.value)==null?void 0:e.map_settings},e=>{r.value=e!=null&&e.pin?[{image:e.pin}]:[]}),w(()=>a.value,()=>{T("salons","salons")}),(e,l)=>{const u=D("router-link"),c=D("router-view");return g(),C("div",te,[n(Q,null,{default:p(()=>{var s;return[_("div",se,[_("h3",ie,H(o(a).name),1),n(X,{id:"salon_setting",items:$.value},null,8,["items"])]),pe,_("div",re,[n(u,{class:"pn-item flex align-center justify-center","active-class":"active",to:{name:"SalonProjects",params:{dynid:o(b).params.dynid}}},{default:p(()=>[V(" \u7269\u4EF6\u4E00\u89A7 ")]),_:1},8,["to"]),n(u,{class:"pn-item flex align-center justify-center","active-class":"active",to:{name:"SalonMap",params:{dynid:o(b).params.dynid}}},{default:p(()=>[V(" \u5730\u56F3 ")]),_:1},8,["to"])]),o(b).name==="SalonMap"?(g(),C("div",de,[n(o(E),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u65BD\u8A2D",onClick:l[0]||(l[0]=t=>S())}),n(o(E),{type:"button",class:"submit-button icon-button",icon:"pi pi-cog","icon-pos":"left",onClick:l[1]||(l[1]=t=>I())})])):J("",!0),n(Y,{modelValue:o(i),"onUpdate:modelValue":l[3]||(l[3]=t=>q(i)?i.value=t:null),title:(s=o(a))==null?void 0:s.name},{default:p(()=>[n(W,{modelValue:o(i),"onUpdate:modelValue":l[2]||(l[2]=t=>q(i)?i.value=t:null),"close-after":"",topProgress:"",progress:o(L),form:d.value,onload:o(j),data:o(k),query:m.value,submit:o(h)},null,8,["modelValue","progress","form","onload","data","query","submit"]),n(Z,{containerId:"place_image_input",images:o(r),remove:N},null,8,["images"])]),_:1},8,["modelValue","title"])]}),_:1}),n(c,null,{default:p(({Component:s})=>[n(z,{name:"fade",mode:"out-in"},{default:p(()=>[(g(),G(K(s)))]),_:2},1024)]),_:1})])}}});export{Fe as default};
