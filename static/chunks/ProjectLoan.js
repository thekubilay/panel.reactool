import{D as S}from"./vuedraggable.umd.js";import{a as U,p as v,t as E,v as H,f as u,z as s,H as c,w as _,x as a,a3 as I,b as T,R as N,K as g}from"./vendor.js";import{s as P}from"./menu.esm.js";import{u as O,a as z,S as K,_ as L}from"./useFormRequestBuilder.js";import{_ as M}from"./FormQuery.js";import{_ as Q}from"./DialogDelete.js";import{_ as G}from"./BarTool.js";import{A as J,u as W}from"../main.js";import{u as X}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";import"./plugin-vue_export-helper.js";const Y=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u9280\u884C\u540D",hint:null,placeholder:"\u4F4F\u53CB\u9280\u884C",required:!1,id:"name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]},{component:null,name:"InputText",db_column_name:"rate",type:"text",model:null,label:"\u91D1\u5229",hint:null,placeholder:"0.345",required:!1,id:"rate_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]}]}]];const Z={id:"project_loan",class:"relative panel-board"},ee={class:"part-wrap"},le={class:"spreadsheet-wrapper overflow-x"},te=I('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell sheet-cell-long flex align-center">\u9280\u884C</div><div class="sheet-cell value flex align-center">\u91D1\u5229</div></div></div>',1),se=["onClick","onContextmenu"],ae=a("div",{class:"sheet-cell handle flex align-center handle grab"},[a("i",{class:"pi pi-bars"})],-1),ne={class:"sheet-cell num flex align-center"},oe={class:"text block"},ue={class:"sheet-cell sheet-cell-long flex align-center"},ie={class:"text block"},re={class:"sheet-cell value flex align-center"},de={class:"text block"},pe={class:"button-wrapper flex justify-end"},we=U({setup(ce){var y;const{get:f,save:C}=J(),{submit:V,submitRowReorder:w,remove:j}=O(),{d:i,dr:o,data:d,useToggle:b}=z(),{rcm:D,rcmOpened:me,isRCOn:F}=X(d),{payload:ve,content:r,progress:B,project:n}=W(),h=v(!1),x=v(!1),p=v(((y=n.value)==null?void 0:y.building.bank_types)||[]);function $(){var l;h.value=!1,b({method:"post",endpoints:["app/bank_types","project_details/"+((l=n.value)==null?void 0:l.id)],state:"project"})}function R(l){var e;h.value=!0,b({method:"patch",endpoints:["app/bank_types/"+l.id,"project_details/"+((e=n.value)==null?void 0:e.id)],state:"project"},l)}function q(){var l;x.value=!0,j("app/bank_types/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;o.value=!1,f("project_details/"+((e=n.value)==null?void 0:e.id),"project").then(()=>{i.value=!1,x.value=!1})})}const A=v([{label:"\u65B0\u898F\u30EB\u30FC\u30C8",command:()=>{var l;b({method:"post",endpoints:["app/bank_types","project_details/"+((l=n.value)==null?void 0:l.id)],state:"project"})}},{label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e,t;r.value=!0;const l={order_id:p.value?p.value.length+1:1,building:((t=(e=n.value)==null?void 0:e.building)==null?void 0:t.id)||null,name:d.value.name,rate:d.value.rate};C("app/bank_types",l).then(()=>{var m;f("project_details/"+((m=n.value)==null?void 0:m.id),"project").then(()=>{r.value=!1})})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var l;r.value=!0,j("app/bank_types/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;f("project_details/"+((e=n.value)==null?void 0:e.id),"project").then(()=>{r.value=!1})})}}]);return E(()=>n.value,l=>{p.value=(l==null?void 0:l.building.bank_types)||[]}),(l,e)=>(T(),H("div",Z,[u(K,{modelValue:s(r),"onUpdate:modelValue":e[0]||(e[0]=t=>c(r)?r.value=t:null)},null,8,["modelValue"]),u(G,{class:"justify-space-between"},{default:_(()=>[a("div",ee,[u(s(N),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u91D1\u5229\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=t=>$())})])]),_:1}),a("div",le,[te,u(s(S),{tag:"div",onEnd:e[2]||(e[2]=t=>s(w)({value:p.value},{method:"post",endpoints:["app/bank_types","project_details/"+s(n).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:_(({element:t,index:m})=>[a("div",{onClick:k=>R(t),onContextmenu:k=>s(F)(k,t),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[u(s(P),{id:"rc_menu",ref_key:"rcm",ref:D,class:"rc has-final-action",model:A.value,popup:!0},null,8,["model"]),ae,a("div",ne,[a("span",oe,g(m+1),1)]),a("div",ue,[a("span",ie,g(t.name),1)]),a("div",re,[a("span",de,g(t.rate),1)])],40,se)]),_:1},8,["list"])]),u(L,{modelValue:s(i),"onUpdate:modelValue":e[8]||(e[8]=t=>c(i)?i.value=t:null),title:"\u91D1\u5229\u30D5\u30A9\u30FC\u30E0"},{default:_(()=>[u(M,{modelValue:s(i),"onUpdate:modelValue":e[3]||(e[3]=t=>c(i)?i.value=t:null),dr:s(o),"onUpdate:dr":e[4]||(e[4]=t=>c(o)?o.value=t:null),"close-after":"",topProgress:"",progress:s(B),form:s(Y),data:s(d),remove:h.value,query:{building:s(n).building.id},submit:s(V)},null,8,["modelValue","dr","progress","form","data","remove","query","submit"]),u(Q,{modelValue:s(o),"onUpdate:modelValue":e[7]||(e[7]=t=>c(o)?o.value=t:null)},{default:_(()=>[a("div",pe,[a("button",{onClick:e[5]||(e[5]=t=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),a("button",{onClick:e[6]||(e[6]=t=>q()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{we as default};
