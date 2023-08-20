import{d as P,A as $,k as y,u as U,r as g,a as R,c as d,b as r,q as m,e as t,F as D,s as q,f as l,z as u,a2 as E,o as p,M as N,t as v}from"../main.js";import{_ as S}from"./Dialog.js";import{_ as I}from"./FormQuery.js";import{_ as z}from"./DialogDelete.js";import{_ as H}from"./BarTool.js";import{a as L,u as M}from"./useFormRequestBuilder.js";import{f as x}from"./FormProjectPermission.js";import{u as T}from"./useUtils.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";import"./rules.js";const G={id:"admin-app-routes",class:"admin-board"},J={class:"part-wrap"},K={class:"spreadsheet-wrapper overflow-x"},O=E('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell num flex align-center">#</div><div class="sheet-cell value flex align-center">\u6A29\u9650\u30B3\u30FC\u30C9\u540D</div><div class="sheet-cell sheet-cell-long flex align-center">\u6A29\u9650\u540D</div><div class="sheet-cell sheet-cell-long flex align-center">\u6A29\u9650\u5185\u5BB9</div></div></div>',1),Q={class:"sb-container ss-container"},W=["onClick"],X=t("div",{class:"sheet-cell num flex align-center"},null,-1),Y={class:"sheet-cell value flex align-center"},Z={class:"text block"},ee={class:"sheet-cell sheet-cell-long flex align-center"},se={class:"text block"},te={class:"sheet-cell sheet-cell-long flex align-center"},oe={class:"text block"},le={class:"button-wrapper flex justify-end"},be=P({__name:"ProjectPermissions",setup(ne){const{get:b}=$();y();const{payload:j,content:f,user:ae,projectPermissions:V}=U(),{d:n,dr:o,data:_,useToggle:h}=L(),{submit:k,remove:w,submitRowReorder:ie}=M(),{findAndUpdateFormElement:C}=T(),i=g(x),c=g(!1);R({id:null,order_id:null,component:null,name:null,path:null,title:null});function A(){c.value=!1,i.value=x,i.value=C(i.value,"active","model",!1),console.log(i.value),h({method:"post",endpoints:["permissions/projects","permissions/projects"],state:"projectPermissions"})}function B(a){c.value=!0,h({method:"patch",endpoints:["permissions/projects/"+a.id,"permissions/projects"],state:"projectPermissions"},a)}function F(){var a;f.value=!0,j.value={method:"get",endpoints:["permissions/projects","permissions/projects"],state:"projectPermissions"},w("permissions/projects/"+((a=_.value)==null?void 0:a.id)).then(()=>{b("permissions/projects","projectPermissions").then(()=>{o.value=!1,n.value=!1,f.value=!1})})}return(a,s)=>(p(),d("div",G,[r(H,{class:"justify-space-between"},{default:m(()=>[t("div",J,[r(l(N),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u6A29\u9650",onClick:s[0]||(s[0]=e=>A())})])]),_:1}),t("div",K,[O,t("div",Q,[(p(!0),d(D,null,q(l(V),e=>(p(),d("div",{onClick:re=>B(e),class:"sheet-row flex align-center list-group-item relative pointer"},[X,t("div",Y,[t("span",Z,v(e.code_name),1)]),t("div",ee,[t("span",se,v(e.name),1)]),t("div",te,[t("span",oe,v(e.description),1)])],8,W))),256))])]),r(S,{modelValue:l(n),"onUpdate:modelValue":s[6]||(s[6]=e=>u(n)?n.value=e:null),title:"\u6A29\u9650\u30D5\u30A9\u30FC\u30E0"},{default:m(()=>[r(I,{modelValue:l(n),"onUpdate:modelValue":s[1]||(s[1]=e=>u(n)?n.value=e:null),dr:l(o),"onUpdate:dr":s[2]||(s[2]=e=>u(o)?o.value=e:null),"close-after":"",form:i.value,data:l(_),remove:c.value,query:{},submit:l(k)},null,8,["modelValue","dr","form","data","remove","submit"]),r(z,{modelValue:l(o),"onUpdate:modelValue":s[5]||(s[5]=e=>u(o)?o.value=e:null)},{default:m(()=>[t("div",le,[t("button",{onClick:s[3]||(s[3]=e=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),t("button",{onClick:s[4]||(s[4]=e=>F()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{be as default};
