import{a as g,r as A,b as d,v,f as t,w as o,x as s,K as b,z as e,E as B,p as k,C as c,o as I,H as f,e as w,A as V,I as N,J as R,S as z,T as H,g as L}from"./vendor.js";import{_ as J}from"./Icon.js";import{u as $,A as K}from"../main.js";import{S as M}from"./Spinner.js";import{_ as Q}from"./BarTool.js";import{a as G,u as O,_ as W}from"./useFormRequestBuilder.js";import{_ as X}from"./FormQuery.js";import{_ as Y}from"./DialogDelete.js";import"./plugin-vue_export-helper.js";const Z={id:"bar_admin",class:"flex justify-space-between column-1"},ee={class:"mhw-container container flex align-center justify-end"},se={class:"username",style:{"font-size":".75rem"}},te=g({setup(y){const{user:l}=$();return(m,x)=>{const u=A("router-link");return d(),v("header",Z,[t(u,{class:"brand flex align-center",to:"/"},{default:o(()=>[t(J,{svg:"reactool_black",width:"100px",style:{"padding-bottom":"2px"}})]),_:1}),s("div",ee,[s("div",se,b(e(l).username),1)])])}}});const ae={id:"sidebar_admin"},ne={class:"part"},oe=c("\u4F1A\u793E "),le=c("\u30E6\u30FC\u30B6\u30FC "),ie=c("\u30B5\u30ED\u30F3 "),ue=c("\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 "),ce=c("\u30A2\u30D7\u30EA\u30EB\u30FC\u30C8 "),re=c("\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u6A29\u9650 "),de=c("\u30CB\u30E5\u30FC\u30B9 "),me=c("\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB "),_e=c("\u30A8\u30E9\u30FC\u30ED\u30B0 "),pe={class:"part last"},ve=c("APP\u7BA1\u7406\u753B\u9762\u3078"),fe=["href"],xe=g({setup(y){const l=B(),{user:m}=$(),x=k(window.location.origin);return(u,C)=>{const i=A("router-link");return d(),v("div",ae,[s("nav",null,[s("div",ne,[t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Admin",params:{cid:e(l).params.cid}}},{default:o(()=>[oe]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Users",params:{cid:e(l).params.cid}}},{default:o(()=>[le]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Salons",params:{cid:e(l).params.cid}}},{default:o(()=>[ie]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Projects",params:{cid:e(l).params.cid}}},{default:o(()=>[ue]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Routes",params:{cid:e(l).params.cid}}},{default:o(()=>[ce]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"ProjectPermissions",params:{cid:e(l).params.cid}}},{default:o(()=>[re]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"News",params:{cid:e(l).params.cid}}},{default:o(()=>[de]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"Tutorials",params:{cid:e(l).params.cid}}},{default:o(()=>[me]),_:1},8,["to"]),t(i,{class:"nav-item flex align-center","exact-active-class":"active",to:{name:"LogsError",params:{cid:e(l).params.cid}}},{default:o(()=>[_e]),_:1},8,["to"])]),s("div",pe,[t(i,{class:"flex align-center",to:{name:"Dashboard",params:{cid:e(m).company}}},{default:o(()=>[ve]),_:1},8,["to"]),s("a",{class:"flex align-center",href:x.value+"/admin/",target:"_blank"},"BE\u30E2\u30C7\u30EB\u7BA1\u7406\u3078",8,fe)])])])}}}),he=[[{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u4F1A\u793E\u540D",hint:null,placeholder:"\u3007\u3007\u682A\u5F0F\u4F1A\u793E",required:!0,id:"company_name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]}]];const ge={class:"mrw"},Ae={class:"column-1 am"},be={class:"outer-contents flex"},$e={class:"inner-contents relative"},ye={class:"part-wrap"},Ce={key:1,class:"spreadsheet-wrapper overflow-x"},Fe=s("div",{class:"sh-container ss-container"},[s("div",{class:"sheet-row sheet-row-header flex align-center"},[s("div",{class:"sheet-cell num flex align-center"},"#"),s("div",{class:"sheet-cell value flex align-center"},"\u4F1A\u793E\u540D")])],-1),Ee={class:"sb-container ss-container"},Be=["onClick"],ke={class:"sheet-cell num flex align-center"},we={class:"text block"},Ve={class:"sheet-cell value flex align-center"},je={class:"text block"},De={class:"button-wrapper flex justify-end"},Le=g({setup(y){const{get:l}=K(),m=B(),{payload:x,content:u,user:C,companies:i}=$(),{d:_,dr:r,data:F,useToggle:E}=G(),{submit:j,remove:D}=O(),h=k(!1);I(()=>{C.value.company!==m.params.cid&&(u.value=!0,l("companies/"+m.params.cid,"company").then(()=>{u.value=!1}))});function S(){h.value=!1,E({method:"post",endpoints:["companies","companies"],state:"companies"})}function T(p){h.value=!0,E({method:"patch",endpoints:["companies/"+p.id,"companies"],state:"companies"},p)}function P(){var p;u.value=!0,x.value={method:"get",endpoints:["companies","companies"],state:"companies"},D("companies/"+((p=F.value)==null?void 0:p.id)).then(()=>{l("companies","companies").then(()=>{r.value=!1,_.value=!1,u.value=!1})})}return(p,n)=>{const U=A("router-view");return d(),v("div",ge,[s("main",Ae,[t(te),s("div",be,[t(xe),s("div",$e,[t(M,{modelValue:e(u),"onUpdate:modelValue":n[0]||(n[0]=a=>f(u)?u.value=a:null)},null,8,["modelValue"]),e(m).name==="Admin"?(d(),w(Q,{key:0,class:"justify-space-between"},{default:o(()=>[s("div",ye,[t(e(z),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u4F1A\u793E",onClick:n[1]||(n[1]=a=>S())})])]),_:1})):V("",!0),e(m).name==="Admin"?(d(),v("div",Ce,[Fe,s("div",Ee,[(d(!0),v(N,null,R(e(i),(a,q)=>(d(),v("div",{key:a.id,onClick:Se=>T(a),class:"sheet-row flex align-center relative pointer"},[s("div",ke,[s("span",we,b(q+1),1)]),s("div",Ve,[s("span",je,b(a.name),1)])],8,Be))),128))])])):V("",!0),t(W,{modelValue:e(_),"onUpdate:modelValue":n[7]||(n[7]=a=>f(_)?_.value=a:null),title:"\u4F1A\u793E\u30D5\u30A9\u30FC\u30E0"},{default:o(()=>[t(X,{modelValue:e(_),"onUpdate:modelValue":n[2]||(n[2]=a=>f(_)?_.value=a:null),dr:e(r),"onUpdate:dr":n[3]||(n[3]=a=>f(r)?r.value=a:null),"close-after":"",form:e(he),data:e(F),remove:h.value,query:{},submit:e(j)},null,8,["modelValue","dr","form","data","remove","submit"]),t(Y,{modelValue:e(r),"onUpdate:modelValue":n[6]||(n[6]=a=>f(r)?r.value=a:null)},{default:o(()=>[s("div",De,[s("button",{onClick:n[4]||(n[4]=a=>r.value=!1),class:"cancel"},"\u3044\u3044\u3048"),s("button",{onClick:n[5]||(n[5]=a=>P()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(U,{class:"contents column-1"},{default:o(({Component:a})=>[t(H,{name:"fade",mode:"out-in"},{default:o(()=>[(d(),w(L(a)))]),_:2},1024)]),_:1})])])])])}}});export{Le as default};
