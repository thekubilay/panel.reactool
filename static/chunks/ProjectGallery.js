import{D as A}from"./vuedraggable.umd.js";import{a as V,C as v,M as k,q as R,f as u,t,D as d,w as c,x as a,W as $,b as q,G as S,A as f}from"./vendor.js";import{s as I}from"./menu.esm.js";import N from"./Dialog.js";import{S as H}from"./Spinner.js";import M from"./BarTool.js";import{_ as P}from"./Icon.js";import{A as U,u as G}from"../main.js";import{a as O,u as T}from"./useFormRequestBuilder.js";import{u as Q}from"./useRightClickHandler.js";import{_ as W}from"./FormQuery.js";import{c as z,d as J}from"./rules.js";import"./overlayeventbus.esm.js";import"./index3.js";import"./plugin-vue_export-helper.js";const K=[[{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u753B\u50CF",hint:".jpeg, .png \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!0,id:"gallery_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[z],rule:J,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const L={id:"project_gallery",class:"panel-board relative"},X={class:"part-wrap"},Y={class:"spreadsheet-wrapper overflow-x"},Z=$('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value sheet-cell-long flex align-center">\u753B\u50CF\u540D</div></div></div>',1),ee=["onContextmenu","onClick"],se=a("div",{class:"sheet-cell handle flex align-center handle grab"},[a("i",{class:"pi pi-bars"})],-1),te={class:"sheet-cell num flex align-center"},le={class:"text block"},ae={class:"sheet-cell value sheet-cell-long flex align-center"},oe={class:"text block",style:{"padding-bottom":"2px",width:"calc(100% - 30px)","margin-left":"5px"}},Ee=V({setup(ue){var g;const{get:h,save:ie}=U(),{submit:j,submitRowReorder:x,remove:C}=O(),{d:i,dr:re,data:m,useToggle:n}=T(),{rcm:b,rcmOpened:ne,isRCOn:y}=Q(m),{payload:pe,content:r,progress:F,project:o}=G(),p=v(((g=o.value)==null?void 0:g.gallery)||[]);function B(){var s;n({method:"post",endpoints:["app/galleries","project_details/"+((s=o.value)==null?void 0:s.id)],state:"project"})}function E(s){var e;n({method:"patch",endpoints:["app/galleries/"+s.id,"project_details/"+((e=o.value)==null?void 0:e.id)],state:"project"})}const w=v([{label:"\u65B0\u898F\u753B\u50CF",command:()=>{var s;n({method:"post",endpoints:["app/galleries","project_details/"+((s=o.value)==null?void 0:s.id)],state:"project"})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var s;r.value=!0,C("app/galleries/"+((s=m.value)==null?void 0:s.id)).then(()=>{var e;h("project_details/"+((e=o.value)==null?void 0:e.id),"project").then(()=>{r.value=!1})})}}]);return k(()=>o.value,s=>{p.value=(s==null?void 0:s.gallery)||[]}),(s,e)=>(q(),R("div",L,[u(H,{modelValue:t(r),"onUpdate:modelValue":e[0]||(e[0]=l=>d(r)?r.value=l:null)},null,8,["modelValue"]),u(M,{class:"justify-space-between"},{default:c(()=>[a("div",X,[u(t(S),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u753B\u50CF\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=l=>B())})])]),_:1}),a("div",Y,[Z,u(t(A),{tag:"div",onEnd:e[2]||(e[2]=l=>t(x)({value:p.value},{method:"post",endpoints:["app/galleries","project_details/"+t(o).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:c(({element:l,index:D})=>[a("div",{onContextmenu:_=>t(y)(_,l),onClick:_=>E(l),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[u(t(I),{id:"rc_menu",ref_key:"rcm",ref:b,class:"rc has-final-action",model:w.value,popup:!0},null,8,["model"]),se,a("div",te,[a("span",le,f(D+1),1)]),a("div",ae,[u(P,{svg:"image"}),a("span",oe,f(l.image.split("/",6)[5].split(".")[0]),1)])],40,ee)]),_:1},8,["list"])]),u(N,{modelValue:t(i),"onUpdate:modelValue":e[4]||(e[4]=l=>d(i)?i.value=l:null),title:"\u30AE\u30E3\u30E9\u30EA\u30FC\u30D5\u30A9\u30FC\u30E0"},{default:c(()=>[u(W,{modelValue:t(i),"onUpdate:modelValue":e[3]||(e[3]=l=>d(i)?i.value=l:null),"close-after":"",topProgress:"",progress:t(F),form:t(K),query:{project:t(o).id},submit:t(j)},null,8,["modelValue","progress","form","query","submit"])]),_:1},8,["modelValue"])]))}});export{Ee as default};
