import{D as I}from"./vuedraggable.umd.js";import{a as N,p as m,o as T,t as M,v as O,f as u,z as l,H as p,w as v,x as o,a4 as z,D as K,E as Q,b as G,S as D,K as j}from"./vendor.js";import{s as J}from"./menu.esm.js";import{S as L}from"./Spinner.js";import{_ as W}from"./BarTool.js";import{a as X,u as Y,_ as Z}from"./useFormRequestBuilder.js";import{_ as ee}from"./FormQuery.js";import{_ as te}from"./DialogDelete.js";import{a as se,A as le,u as oe}from"../main.js";import{u as ae}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";import"./plugin-vue_export-helper.js";const ue=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u30D5\u30A9\u30EB\u30C0\u30FC\u540D",hint:null,placeholder:"\u9593\u53D6\u308A\u56F3PDF\u30D5\u30A9\u30EB\u30C0\u30FC",required:!0,id:"name_input",rules:[],disabled:!se().user.is_staff,props:["placeholder","required"],classes:["flex-column","column-1"]}]}]];const ne={id:"project_folders",class:"panel-board relative"},re={class:"part-wrap"},ie={class:"part-wrap part-end"},de={class:"spreadsheet-wrapper overflow-x"},ce=z('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30D5\u30A9\u30EB\u30C0\u30FC\u540D</div><div class="sheet-cell value flex align-center">\u66F8\u985E\u6570</div></div></div>',1),pe=["onClick","onContextmenu"],me=o("div",{class:"sheet-cell handle flex align-center justify-center grab"},[o("i",{class:"pi pi-bars"})],-1),ve={class:"sheet-cell num flex align-center"},fe={class:"sheet-cell value flex align-center"},_e={class:"context block"},ge={class:"sheet-cell num flex align-center"},he={class:"context block"},je={class:"button-wrapper flex justify-end"},qe=N({setup(be){const F=K(),b=Q(),{get:f,save:y}=le(),{d:r,dr:n,images:B,data:d,useToggle:_}=X(),{submit:k,submitRowReorder:V,remove:C}=Y(),{rcm:w,rcmOpened:A,isRCOn:E}=ae(d),{payload:Ce,project:a,progress:$,onload:xe,content:i}=oe(),c=m([]),g=m(!1),h=m(!1);T(()=>{var t;c.value=(t=a.value)==null?void 0:t.document_folders});function R(){F.push({name:"ProjectDocuments",params:{cid:b.params.cid,dynid:b.params.dynid}})}function S(){var t;g.value=!1,_({method:"post",endpoints:["app/document_folders","project_details/"+((t=a.value)==null?void 0:t.id)],state:"project"})}function q(t){var e;g.value=!0,A.value||(B.value=t.pin?[{image:t.pin}]:[],_({method:"patch",endpoints:["app/document_folders/"+t.id,"project_details/"+((e=a.value)==null?void 0:e.id)],state:"project"},t))}function P(){var t;h.value=!0,C("app/document_folders/"+((t=d.value)==null?void 0:t.id)).then(()=>{var e;f("project_details/"+((e=a.value)==null?void 0:e.id),"project").then(()=>{h.value=!1,n.value=!1,r.value=!1})})}const U=m([{label:"\u65B0\u898F\u30D5\u30A9\u30EB\u30C0\u30FC",command:()=>{var t;_({method:"post",endpoints:["app/document_folders","project_details/"+((t=a.value)==null?void 0:t.id)],state:"project"})}},{label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e;i.value=!0;const t={id:null,order_id:c.value?c.value.length+1:1,project:a.value?(e=a.value)==null?void 0:e.id:null,name:d.value.name,color:d.value.color,pin:null};y("app/document_folders",t).then(()=>{var s;f("project_details/"+((s=a.value)==null?void 0:s.id),"project").then(()=>{i.value=!1})})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var t;i.value=!0,C("app/document_folders/"+((t=d.value)==null?void 0:t.id)).then(()=>{var e;f("project_details/"+((e=a.value)==null?void 0:e.id),"project").then(()=>{i.value=!1})})}}]);return M(()=>a.value,t=>{c.value=t==null?void 0:t.document_folders}),(t,e)=>(G(),O("div",ne,[u(L,{modelValue:l(i),"onUpdate:modelValue":e[0]||(e[0]=s=>p(i)?i.value=s:null)},null,8,["modelValue"]),u(W,{class:"justify-space-between"},{default:v(()=>[o("div",re,[u(l(D),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=s=>S())})]),o("div",ie,[u(l(D),{onClick:e[2]||(e[2]=s=>R()),type:"button",class:"tool-button",label:"\u66F8\u985E\u4E00\u89A7\u3078"})])]),_:1}),o("div",de,[ce,u(l(I),{tag:"div",onEnd:e[3]||(e[3]=s=>l(V)({value:c.value},{method:"post",endpoints:["app/document_folders","project_details/"+l(a).id],state:"project"})),list:c.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:v(({element:s,index:H})=>[o("div",{onClick:x=>q(s),onContextmenu:x=>l(E)(x,s),class:"sheet-row flex align-center list-group-item relative pointer","aria-haspopup":"true","aria-controls":"plan_rc_menu"},[u(l(J),{id:"rc_menu",ref_key:"rcm",ref:w,class:"rc has-final-action",model:U.value,popup:!0},null,8,["model"]),me,o("div",ve,j(H+1),1),o("div",fe,[o("span",_e,j(s.name),1)]),o("div",ge,[o("span",he,j(s.documents.length)+"\u500B",1)])],40,pe)]),_:1},8,["list"])]),u(Z,{modelValue:l(r),"onUpdate:modelValue":e[9]||(e[9]=s=>p(r)?r.value=s:null),title:"\u30D5\u30A9\u30EB\u30C0\u30FC\u30D5\u30A9\u30FC\u30E0"},{default:v(()=>[u(ee,{modelValue:l(r),"onUpdate:modelValue":e[4]||(e[4]=s=>p(r)?r.value=s:null),dr:l(n),"onUpdate:dr":e[5]||(e[5]=s=>p(n)?n.value=s:null),"close-after":"",topProgress:"",progress:l($),form:l(ue),data:l(d),loading:h.value,query:{project:l(a).id},remove:g.value,submit:l(k)},null,8,["modelValue","dr","progress","form","data","loading","query","remove","submit"]),u(te,{modelValue:l(n),"onUpdate:modelValue":e[8]||(e[8]=s=>p(n)?n.value=s:null)},{default:v(()=>[o("div",je,[o("button",{onClick:e[6]||(e[6]=s=>n.value=!1),class:"cancel"},"\u3044\u3044\u3048"),o("button",{onClick:e[7]||(e[7]=s=>P()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{qe as default};
