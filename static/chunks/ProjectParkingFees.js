import{d as q}from"./vuedraggable.umd.js";import{d as R,D as v,F as U,b as S,k as u,u as a,l as c,w as f,e as t,a3 as I,a as T,U as H,t as h}from"./vendor.js";import{s as N}from"./menu.esm.js";import{u as P,a as O,S as M,_ as Q}from"./useFormRequestBuilder.js";import{_ as z}from"./FormQuery.js";import{_ as G}from"./DialogDelete.js";import{_ as J}from"./BarTool.js";import{A as K,u as L}from"../main.js";import{u as W}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";const X=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u99D0\u8ECA\u5834\u540D",hint:null,placeholder:"140000",required:!1,id:"name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]},{component:null,name:"InputText",db_column_name:"price",type:"text",model:null,label:"\u99D0\u8ECA\u5834\u8CBB",hint:null,placeholder:"12300",required:!1,id:"price_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]}]}]];const Y={id:"project_parking_fees",class:"relative panel-board"},Z={class:"part-wrap"},ee={class:"spreadsheet-wrapper overflow-x"},le=I('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell sheet-cell-long flex align-center">\u99D0\u8ECA\u5834\u540D</div><div class="sheet-cell value flex align-center">\u99D0\u8ECA\u5834\u8CBB</div></div></div>',1),se=["onClick","onContextmenu"],ae=t("div",{class:"sheet-cell handle flex align-center handle grab"},[t("i",{class:"pi pi-bars"})],-1),te={class:"sheet-cell num flex align-center"},ne={class:"text block"},oe={class:"sheet-cell sheet-cell-long flex align-center"},ue={class:"text block"},ie={class:"sheet-cell value flex align-center"},re={class:"text block"},de={class:"button-wrapper flex justify-end"},ye=R({setup(pe){var k;const{get:_,save:B}=K(),{submit:y,submitRowReorder:V,remove:j}=P(),{d:i,dr:o,data:d,useToggle:g}=O(),{rcm:D,rcmOpened:ce,isRCOn:w}=W(d),{payload:me,content:r,progress:ve,project:n}=L(),b=v(!1),x=v(!1),p=v(((k=n.value)==null?void 0:k.building.parking_fees)||[]);function A(){var l;b.value=!1,g({method:"post",endpoints:["app/parking_fees","project_details/"+((l=n.value)==null?void 0:l.id)],state:"project"})}function F(l){var e;b.value=!0,g({method:"patch",endpoints:["app/parking_fees/"+l.id,"project_details/"+((e=n.value)==null?void 0:e.id)],state:"project"},l)}function E(){var l;x.value=!0,j("app/parking_fees/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;o.value=!1,_("project_details/"+((e=n.value)==null?void 0:e.id),"project").then(()=>{i.value=!1,x.value=!1})})}const $=v([{label:"\u65B0\u898F\u30EB\u30FC\u30C8",command:()=>{var l;g({method:"post",endpoints:["app/parking_fees","project_details/"+((l=n.value)==null?void 0:l.id)],state:"project"})}},{label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e,s;r.value=!0;const l={order_id:p.value?p.value.length+1:1,building:((s=(e=n.value)==null?void 0:e.building)==null?void 0:s.id)||null,name:d.value.name,price:d.value.price};B("app/parking_fees",l).then(()=>{var m;_("project_details/"+((m=n.value)==null?void 0:m.id),"project").then(()=>{r.value=!1})})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var l;r.value=!0,j("app/parking_fees/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;_("project_details/"+((e=n.value)==null?void 0:e.id),"project").then(()=>{r.value=!1})})}}]);return U(()=>n.value,l=>{p.value=(l==null?void 0:l.building.parking_fees)||[]}),(l,e)=>(T(),S("div",Y,[u(M,{modelValue:a(r),"onUpdate:modelValue":e[0]||(e[0]=s=>c(r)?r.value=s:null)},null,8,["modelValue"]),u(J,{class:"justify-space-between"},{default:f(()=>[t("div",Z,[u(a(H),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u99D0\u8ECA\u5834",onClick:e[1]||(e[1]=s=>A())})])]),_:1}),t("div",ee,[le,u(a(q),{tag:"div",onEnd:e[2]||(e[2]=s=>a(V)({value:p.value},{method:"post",endpoints:["app/parking_fees","project_details/"+a(n).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:f(({element:s,index:m})=>[t("div",{onClick:C=>F(s),onContextmenu:C=>a(w)(C,s),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[u(a(N),{id:"rc_menu",ref_key:"rcm",ref:D,class:"rc has-final-action",model:$.value,popup:!0},null,8,["model"]),ae,t("div",te,[t("span",ne,h(m+1),1)]),t("div",oe,[t("span",ue,h(s.name),1)]),t("div",ie,[t("span",re,h(s.price),1)])],40,se)]),_:1},8,["list"])]),u(Q,{modelValue:a(i),"onUpdate:modelValue":e[8]||(e[8]=s=>c(i)?i.value=s:null),title:"\u99D0\u8ECA\u5834\u8CBB\u30D5\u30A9\u30FC\u30E0"},{default:f(()=>[u(z,{modelValue:a(i),"onUpdate:modelValue":e[3]||(e[3]=s=>c(i)?i.value=s:null),dr:a(o),"onUpdate:dr":e[4]||(e[4]=s=>c(o)?o.value=s:null),"close-after":"",form:a(X),data:a(d),remove:b.value,query:{building:a(n).building.id},submit:a(y)},null,8,["modelValue","dr","form","data","remove","query","submit"]),u(G,{modelValue:a(o),"onUpdate:modelValue":e[7]||(e[7]=s=>c(o)?o.value=s:null)},{default:f(()=>[t("div",de,[t("button",{onClick:e[5]||(e[5]=s=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),t("button",{onClick:e[6]||(e[6]=s=>E()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{ye as default};
