import{d as C,D,E,j as R,b as U,k as i,w as m,e as t,u as a,l as u,a3 as q,I as A,J as I,a as S,U as N,t as g}from"./vendor.js";import T from"./dropdown.esm.js";import{d as H}from"./vuedraggable.umd.js";import{a as J,u as P,_ as Q}from"./useFormRequestBuilder.js";import{_ as z}from"./FormQuery.js";import{_ as G}from"./DialogDelete.js";import{_ as K}from"./BarTool.js";import{f as L}from"./FormSalon.js";import{A as M,u as O}from"../main.js";import"./overlayeventbus.esm.js";import"./virtualscroller.esm.js";const W={id:"salons",class:"admin-board"},X={class:"part-wrap"},Y={class:"part-wrap part-end"},Z={class:"spreadsheet-wrapper overflow-x"},ee=q('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30B5\u30ED\u30F3\u540D</div></div></div>',1),se=["onClick"],ae=t("div",{class:"sheet-cell handle flex align-center handle grab"},[t("i",{class:"pi pi-bars"})],-1),te={class:"sheet-cell num flex align-center"},oe={class:"text block"},le={class:"sheet-cell sheet-cell-long value flex align-center"},ne={class:"text block"},ie={class:"button-wrapper flex justify-end"},je=C({setup(re){const{get:f}=M(),h=A(),r=I(),{d:n,dr:l,data:_,useToggle:b}=J(),{store:ue,progress:de,salons:me,companies:y,company:c,content:d}=O(),{submit:x,submitRowReorder:w,remove:V}=P(),p=D(!1),j=E({id:null,name:null,company:parseInt(r.params.cid+"")||null}),v=R({set(o){d.value=!0,h.push({params:{cid:o}}),f("companies/"+o,"company").then(()=>{d.value=!1})},get(){var o;return(o=c.value)==null?void 0:o.id}});function k(){p.value=!1,b({method:"post",endpoints:["salons","companies/"+r.params.cid],state:"company"})}function B(o){p.value=!0,b({method:"patch",endpoints:["salons/"+o.id,"companies/"+r.params.cid],state:"company"},o)}function F(){var o;d.value=!0,V("salons/"+((o=_.value)==null?void 0:o.id)).then(()=>{f("companies/"+r.params.cid,"company").then(()=>{l.value=!1,n.value=!1,d.value=!1})})}return(o,e)=>(S(),U("div",W,[i(K,{class:"justify-space-between"},{default:m(()=>[t("div",X,[i(a(N),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u30B5\u30ED\u30F3",onClick:e[0]||(e[0]=s=>k())})]),t("div",Y,[i(a(T),{style:{width:"140px"},class:"dropdown",modelValue:a(v),"onUpdate:modelValue":e[1]||(e[1]=s=>u(v)?v.value=s:null),"option-label":"name","option-value":"id",options:a(y)},null,8,["modelValue","options"])])]),_:1}),t("div",Z,[ee,i(a(H),{tag:"div",onEnd:e[2]||(e[2]=s=>a(w)({value:a(c).salons},{method:"post",endpoints:["salons","companies/"+a(r).params.cid],state:"company"})),list:a(c).salons,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:m(({element:s,index:$})=>[t("div",{onClick:ce=>B(s),class:"sheet-row flex align-center list-group-item relative pointer"},[ae,t("div",te,[t("span",oe,g(s.order_id?s.order_id:$+1),1)]),t("div",le,[t("span",ne,g(s.name),1)])],8,se)]),_:1},8,["list"])]),i(Q,{modelValue:a(n),"onUpdate:modelValue":e[8]||(e[8]=s=>u(n)?n.value=s:null),title:"\u30B5\u30ED\u30F3\u30D5\u30A9\u30FC\u30E0"},{default:m(()=>[i(z,{modelValue:a(n),"onUpdate:modelValue":e[3]||(e[3]=s=>u(n)?n.value=s:null),dr:a(l),"onUpdate:dr":e[4]||(e[4]=s=>u(l)?l.value=s:null),"close-after":"",form:a(L),query:a(j),data:a(_),remove:p.value,submit:a(x)},null,8,["modelValue","dr","form","query","data","remove","submit"]),i(G,{modelValue:a(l),"onUpdate:modelValue":e[7]||(e[7]=s=>u(l)?l.value=s:null)},{default:m(()=>[t("div",ie,[t("button",{onClick:e[5]||(e[5]=s=>l.value=!1),class:"cancel"},"\u3044\u3044\u3048"),t("button",{onClick:e[6]||(e[6]=s=>F()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{je as default};
