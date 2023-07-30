import{d as A,u as b,x as y,c as v,b as t,q as o,e as a,t as g,f as e,o as d,k as $,r as V,i as c,A as N,l as R,z as f,y as k,g as w,F as I,s as L,L as z,T as H,D as M}from"../main.js";import{_ as G}from"./Icon.js";import{S as J}from"./Spinner.js";import{_ as K}from"./BarTool.js";import{_ as O}from"./Dialog.js";import{_ as Q}from"./FormQuery.js";import{_ as W}from"./DialogDelete.js";import{a as X,u as Y}from"./useFormRequestBuilder.js";import"./plugin-vue_export-helper.js";const Z={id:"bar_admin",class:"flex justify-space-between column-1"},ee={class:"mhw-container container flex align-center justify-end"},ae={class:"username",style:{"font-size":".75rem"}},te=A({__name:"BarAppAdmin",setup(C){const{user:l}=b();return(m,x)=>{const u=y("router-link");return d(),v("header",Z,[t(u,{class:"brand flex align-center",to:"/"},{default:o(()=>[t(G,{svg:"reactool_black",width:"100px",style:{"padding-bottom":"2px"}})]),_:1}),a("div",ee,[a("div",ae,g(e(l).username),1)])])}}});const se={id:"sidebar_admin"},ne={class:"part"},oe={class:"part last"},le=["href"],ie=A({__name:"SidebarAppAdmin",setup(C){const l=$(),{user:m}=b(),x=V(window.location.origin);return(u,F)=>{const i=y("router-link");return d(),v("div",se,[a("nav",null,[a("div",ne,[t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Admin",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u4F1A\u793E ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Users",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30E6\u30FC\u30B6\u30FC ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Salons",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30B5\u30ED\u30F3 ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Projects",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Routes",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30A2\u30D7\u30EA\u30EB\u30FC\u30C8 ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"ProjectPermissions",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u6A29\u9650 ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"News",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30CB\u30E5\u30FC\u30B9 ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Tutorials",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB ")]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"LogsError",params:{cid:e(l).params.cid}}},{default:o(()=>[c("\u30A8\u30E9\u30FC\u30ED\u30B0 ")]),_:1},8,["to"])]),a("div",oe,[t(i,{class:"flex align-center",to:{name:"Dashboard",params:{cid:e(m).company}}},{default:o(()=>[c("APP\u7BA1\u7406\u753B\u9762\u3078")]),_:1},8,["to"]),a("a",{class:"flex align-center",href:x.value+"/admin/",target:"_blank"},"BE\u30E2\u30C7\u30EB\u7BA1\u7406\u3078",8,le)])])])}}}),ue=[[{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u4F1A\u793E\u540D",hint:null,placeholder:"\u3007\u3007\u682A\u5F0F\u4F1A\u793E",required:!0,id:"company_name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]}]];const ce={class:"mrw"},re={class:"column-1 am"},de={class:"outer-contents flex"},me={class:"inner-contents relative"},pe={class:"part-wrap"},_e={key:1,class:"spreadsheet-wrapper overflow-x"},ve=a("div",{class:"sh-container ss-container"},[a("div",{class:"sheet-row sheet-row-header flex align-center"},[a("div",{class:"sheet-cell num flex align-center"},"#"),a("div",{class:"sheet-cell value flex align-center"},"\u4F1A\u793E\u540D")])],-1),fe={class:"sb-container ss-container"},xe=["onClick"],he={class:"sheet-cell num flex align-center"},ge={class:"text block"},Ae={class:"sheet-cell value flex align-center"},be={class:"text block"},ye={class:"button-wrapper flex justify-end"},je=A({__name:"index",setup(C){const{get:l}=N(),m=$(),{payload:x,content:u,user:F,companies:i}=b(),{d:p,dr:r,data:E,useToggle:B}=X(),{submit:D,remove:S}=Y(),h=V(!1);R(()=>{F.value.company!==m.params.cid&&(u.value=!0,l("companies/"+m.params.cid,"company").then(()=>{u.value=!1}))});function j(){h.value=!1,B({method:"post",endpoints:["companies","companies"],state:"companies"})}function P(_){h.value=!0,B({method:"patch",endpoints:["companies/"+_.id,"companies"],state:"companies"},_)}function T(){var _;u.value=!0,x.value={method:"get",endpoints:["companies","companies"],state:"companies"},S("companies/"+((_=E.value)==null?void 0:_.id)).then(()=>{l("companies","companies").then(()=>{r.value=!1,p.value=!1,u.value=!1})})}return(_,n)=>{const U=y("router-view");return d(),v("div",ce,[a("main",re,[t(te),a("div",de,[t(ie),a("div",me,[t(J,{modelValue:e(u),"onUpdate:modelValue":n[0]||(n[0]=s=>f(u)?u.value=s:null)},null,8,["modelValue"]),e(m).name==="Admin"?(d(),k(K,{key:0,class:"justify-space-between"},{default:o(()=>[a("div",pe,[t(e(z),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u4F1A\u793E",onClick:n[1]||(n[1]=s=>j())})])]),_:1})):w("",!0),e(m).name==="Admin"?(d(),v("div",_e,[ve,a("div",fe,[(d(!0),v(I,null,L(e(i),(s,q)=>(d(),v("div",{key:s.id,onClick:Ce=>P(s),class:"sheet-row flex align-center relative pointer"},[a("div",he,[a("span",ge,g(q+1),1)]),a("div",Ae,[a("span",be,g(s.name),1)])],8,xe))),128))])])):w("",!0),t(O,{modelValue:e(p),"onUpdate:modelValue":n[7]||(n[7]=s=>f(p)?p.value=s:null),title:"\u4F1A\u793E\u30D5\u30A9\u30FC\u30E0"},{default:o(()=>[t(Q,{modelValue:e(p),"onUpdate:modelValue":n[2]||(n[2]=s=>f(p)?p.value=s:null),dr:e(r),"onUpdate:dr":n[3]||(n[3]=s=>f(r)?r.value=s:null),"close-after":"",form:e(ue),data:e(E),remove:h.value,query:{},submit:e(D)},null,8,["modelValue","dr","form","data","remove","submit"]),t(W,{modelValue:e(r),"onUpdate:modelValue":n[6]||(n[6]=s=>f(r)?r.value=s:null)},{default:o(()=>[a("div",ye,[a("button",{onClick:n[4]||(n[4]=s=>r.value=!1),class:"cancel"},"\u3044\u3044\u3048"),a("button",{onClick:n[5]||(n[5]=s=>T()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(U,{class:"contents column-1"},{default:o(({Component:s})=>[t(H,{name:"fade",mode:"out-in"},{default:o(()=>[(d(),k(M(s)))]),_:2},1024)]),_:1})])])])])}}});export{je as default};
