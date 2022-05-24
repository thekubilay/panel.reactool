import{D as H}from"./vuedraggable.umd.js";import{a as O,C as m,O as P,N as z,q as j,f as i,t as a,D as v,w as f,x as l,W as I,b as x,G as T,A as d}from"./vendor.js";import{s as G}from"./menu.esm.js";import{_ as L}from"./Dialog.js";import{_ as M}from"./FormQuery.js";import{_ as Q}from"./DialogDelete.js";import{S as W}from"./Spinner.js";import{_ as J}from"./BarTool.js";import{f as K}from"./FormRoute.js";import{a as X,u as Y}from"./useFormRequestBuilder.js";import{A as Z,u as ee}from"../main.js";import{u as te}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";import"./plugin-vue_export-helper.js";import"./rules.js";const le={id:"project_routes",class:"relative panel-board"},se={class:"part-wrap"},ae={class:"spreadsheet-wrapper overflow-x"},oe=I('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8</div><div class="sheet-cell value flex align-center">\u30CD\u30FC\u30E0</div><div class="sheet-cell value flex align-center">\u30D1\u30CD\u30EB\u30CD\u30FC\u30E0</div><div class="sheet-cell value flex align-center">\u30BF\u30A4\u30C8\u30EB</div><div class="sheet-cell value flex align-center">URL\u30D1\u30B9</div><div class="sheet-cell value flex align-center">\u30A2\u30AF\u30C6\u30A3\u30D6</div></div></div>',1),ue=["onClick","onContextmenu"],ne=l("div",{class:"sheet-cell handle flex align-center handle grab"},[l("i",{class:"pi pi-bars"})],-1),ie={class:"sheet-cell num flex align-center"},re={class:"text block"},ce={class:"sheet-cell sheet-cell value flex align-center"},de={class:"text block"},pe={class:"sheet-cell value flex align-center"},ve={class:"text block"},me={class:"sheet-cell value flex align-center"},fe={class:"text block"},_e={class:"sheet-cell value flex align-center"},he={class:"text block"},ge={class:"sheet-cell value flex align-center"},je={class:"text block"},xe={class:"sheet-cell value flex align-center"},be={class:"context block"},Ce={key:0,class:"pi pi-circle-fill",style:{"font-size":"1rem",color:"#2ecc71"}},ke={key:1,class:"pi pi-circle-fill",style:{"font-size":"1rem",color:"#e74c3c"}},De={class:"button-wrapper flex justify-end"},Te=O({setup(ye){var k,D;const{get:_,save:B}=Z(),{submit:F,submitRowReorder:V,remove:b}=X(),{d:r,dr:n,data:u,useToggle:h}=Y(),{rcm:w,rcmOpened:Be,isRCOn:A}=te(u),{payload:Fe,content:c,progress:R,project:o}=ee(),g=m(!1),C=m(!1),p=m(((k=o.value)==null?void 0:k.routes)||[]),$=P({id:null,project:((D=o.value)==null?void 0:D.id)||null,order_id:null,component:null,name:null,panel_name:null,path:null,title:null,active:!1});function E(){var s;g.value=!1,h({method:"post",endpoints:["app/routes","project_details/"+((s=o.value)==null?void 0:s.id)],state:"project"})}function q(s){var e;g.value=!0,h({method:"patch",endpoints:["app/routes/"+s.id,"project_details/"+((e=o.value)==null?void 0:e.id)],state:"project"},s)}function S(){var s;C.value=!0,b("app/routes/"+((s=u.value)==null?void 0:s.id)).then(()=>{var e;n.value=!1,_("project_details/"+((e=o.value)==null?void 0:e.id),"project").then(()=>{r.value=!1,C.value=!1})})}const U=m([{label:"\u65B0\u898F\u30EB\u30FC\u30C8",command:()=>{var s;h({method:"post",endpoints:["app/routes","project_details/"+((s=o.value)==null?void 0:s.id)],state:"project"})}},{label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e;c.value=!0;const s={order_id:p.value?p.value.length+1:1,project:((e=o.value)==null?void 0:e.id)||null,component:u.value.component,name:u.value.name,path:u.value.path,title:u.value.title,active:u.value.active};B("app/routes",s).then(()=>{var t;_("project_details/"+((t=o.value)==null?void 0:t.id),"project").then(()=>{c.value=!1})})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var s;c.value=!0,b("app/routes/"+((s=u.value)==null?void 0:s.id)).then(()=>{var e;_("project_details/"+((e=o.value)==null?void 0:e.id),"project").then(()=>{c.value=!1})})}}]);return z(()=>o.value,s=>{p.value=(s==null?void 0:s.routes)||[]}),(s,e)=>(x(),j("div",le,[i(W,{modelValue:a(c),"onUpdate:modelValue":e[0]||(e[0]=t=>v(c)?c.value=t:null)},null,8,["modelValue"]),i(J,{class:"justify-space-between"},{default:f(()=>[l("div",se,[i(a(T),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u65BD\u8A2D",onClick:e[1]||(e[1]=t=>E())})])]),_:1}),l("div",ae,[oe,i(a(H),{tag:"div",onEnd:e[2]||(e[2]=t=>a(V)({value:p.value},{method:"post",endpoints:["app/routes","project_details/"+a(o).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:f(({element:t,index:N})=>[l("div",{onClick:y=>q(t),onContextmenu:y=>a(A)(y,t),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[i(a(G),{id:"rc_menu",ref_key:"rcm",ref:w,class:"rc has-final-action",model:U.value,popup:!0},null,8,["model"]),ne,l("div",ie,[l("span",re,d(N+1),1)]),l("div",ce,[l("span",de,d(t.component),1)]),l("div",pe,[l("span",ve,d(t.name),1)]),l("div",me,[l("span",fe,d(t.panel_name),1)]),l("div",_e,[l("span",he,d(t.title),1)]),l("div",ge,[l("span",je,d(t.path),1)]),l("div",xe,[l("span",be,[t.active?(x(),j("i",Ce)):(x(),j("i",ke))])])],40,ue)]),_:1},8,["list"])]),i(L,{modelValue:a(r),"onUpdate:modelValue":e[8]||(e[8]=t=>v(r)?r.value=t:null),title:"\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30E0"},{default:f(()=>[i(M,{modelValue:a(r),"onUpdate:modelValue":e[3]||(e[3]=t=>v(r)?r.value=t:null),dr:a(n),"onUpdate:dr":e[4]||(e[4]=t=>v(n)?n.value=t:null),"close-after":"",topProgress:"",progress:a(R),form:a(K),data:a(u),remove:g.value,query:a($),submit:a(F)},null,8,["modelValue","dr","progress","form","data","remove","query","submit"]),i(Q,{modelValue:a(n),"onUpdate:modelValue":e[7]||(e[7]=t=>v(n)?n.value=t:null)},{default:f(()=>[l("div",De,[l("button",{onClick:e[5]||(e[5]=t=>n.value=!1),class:"cancel"},"\u3044\u3044\u3048"),l("button",{onClick:e[6]||(e[6]=t=>S()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Te as default};
