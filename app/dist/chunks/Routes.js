import{d as D}from"./vuedraggable.umd.js";import{d as V,D as j,E as w,b as E,k as u,w as r,e as s,u as l,l as d,a3 as $,J as y,a as R,U as A,t as i}from"./vendor.js";import{a as U,u as q,_ as N}from"./useFormRequestBuilder.js";import{_ as S}from"./FormQuery.js";import{_ as I}from"./DialogDelete.js";import{_ as T}from"./BarTool.js";import{A as H,u as J}from"../main.js";import{f as L}from"./FormRoute.js";import"./rules.js";const P={id:"admin-app-routes",class:"admin-board"},Q={class:"part-wrap"},z={class:"spreadsheet-wrapper overflow-x"},G=$('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8</div><div class="sheet-cell value flex align-center">\u30CD\u30FC\u30E0</div><div class="sheet-cell value flex align-center">\u30D1\u30CD\u30EB\u30CD\u30FC\u30E0</div><div class="sheet-cell value flex align-center">\u30BF\u30A4\u30C8\u30EB</div><div class="sheet-cell value flex align-center">URL\u30D1\u30B9</div></div></div>',1),K=["onClick"],M=s("div",{class:"sheet-cell handle flex align-center handle grab"},[s("i",{class:"pi pi-bars"})],-1),O={class:"sheet-cell num flex align-center"},W={class:"text block"},X={class:"sheet-cell sheet-cell value flex align-center"},Y={class:"text block"},Z={class:"sheet-cell value flex align-center"},ee={class:"text block"},se={class:"sheet-cell value flex align-center"},te={class:"text block"},le={class:"sheet-cell value flex align-center"},ae={class:"text block"},oe={class:"sheet-cell value flex align-center"},ne={class:"text block"},ue={class:"button-wrapper flex justify-end"},Ce=V({setup(ie){const{get:_}=H();y();const{payload:h,content:v,user:re,companies:de,routes:m}=J(),{d:o,dr:a,data:p,useToggle:f}=U(),{submit:g,remove:x,submitRowReorder:b}=q(),c=j(!1);w({id:null,order_id:null,component:null,name:null,panel_name:null,path:null,title:null});function C(){c.value=!1,f({method:"post",endpoints:["routes","routes"],state:"routes"})}function k(n){c.value=!0,f({method:"patch",endpoints:["routes/"+n.id,"routes"],state:"routes"},n)}function F(){var n;v.value=!0,h.value={method:"get",endpoints:["routes","routes"],state:"routes"},x("routes/"+((n=p.value)==null?void 0:n.id)).then(()=>{_("routes","routes").then(()=>{a.value=!1,o.value=!1,v.value=!1})})}return(n,t)=>(R(),E("div",P,[u(T,{class:"justify-space-between"},{default:r(()=>[s("div",Q,[u(l(A),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u30EB\u30FC\u30C8",onClick:t[0]||(t[0]=e=>C())})])]),_:1}),s("div",z,[G,u(l(D),{tag:"div",onEnd:t[1]||(t[1]=e=>l(b)({value:l(m)},{method:"post",endpoints:["routes","routes"],state:"routes"})),list:l(m),class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:r(({element:e,index:B})=>[s("div",{onClick:ce=>k(e),class:"sheet-row flex align-center list-group-item relative pointer"},[M,s("div",O,[s("span",W,i(e.order_id?e.order_id:B+1),1)]),s("div",X,[s("span",Y,i(e.component),1)]),s("div",Z,[s("span",ee,i(e.name),1)]),s("div",se,[s("span",te,i(e.panel_name),1)]),s("div",le,[s("span",ae,i(e.title),1)]),s("div",oe,[s("span",ne,i(e.path),1)])],8,K)]),_:1},8,["list"])]),u(N,{modelValue:l(o),"onUpdate:modelValue":t[7]||(t[7]=e=>d(o)?o.value=e:null),title:"\u4F1A\u793E\u30D5\u30A9\u30FC\u30E0"},{default:r(()=>[u(S,{modelValue:l(o),"onUpdate:modelValue":t[2]||(t[2]=e=>d(o)?o.value=e:null),dr:l(a),"onUpdate:dr":t[3]||(t[3]=e=>d(a)?a.value=e:null),"close-after":"",form:l(L),data:l(p),remove:c.value,query:{},submit:l(g)},null,8,["modelValue","dr","form","data","remove","submit"]),u(I,{modelValue:l(a),"onUpdate:modelValue":t[6]||(t[6]=e=>d(a)?a.value=e:null)},{default:r(()=>[s("div",ue,[s("button",{onClick:t[4]||(t[4]=e=>a.value=!1),class:"cancel"},"\u3044\u3044\u3048"),s("button",{onClick:t[5]||(t[5]=e=>F()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Ce as default};