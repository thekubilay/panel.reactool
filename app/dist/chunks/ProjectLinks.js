import{d as L,A as M,u as N,r as _,w as P,c as T,b as n,f as s,z as m,q as v,e as a,a2 as H,o as O,M as z,t as B,h as G}from"../main.js";import{D as J}from"./vuedraggable.umd.js";import{s as K}from"./menu.esm.js";import{_ as Q}from"./Dialog.js";import{S as W}from"./Spinner.js";import{_ as X}from"./BarTool.js";import{_ as Y}from"./FormQuery.js";import{_ as Z}from"./DialogDelete.js";import{_ as ee}from"./ContextImagesThumbnailContainer.js";import{u as le,a as te}from"./useFormRequestBuilder.js";import{u as se}from"./useRightClickHandler.js";import{c as ae,d as ue}from"./rules.js";import"./_commonjsHelpers.js";import"./portal.esm.js";import"./plugin-vue_export-helper.js";import"./Icon.js";const oe=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u30B5\u30A4\u30C8\u540D",hint:null,placeholder:"reactool",required:!0,id:"name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"link",type:"text",model:null,label:"\u30B5\u30A4\u30C8URL",hint:null,placeholder:"https://reactool.jp",required:!0,id:"link_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u30B5\u30A4\u30C8\u753B\u50CF",hint:".jpeg, .png, .svg \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"link_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[ae],rule:ue,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const ne={id:"project_links",class:"panel-board relative"},ie={class:"part-wrap"},re={class:"spreadsheet-wrapper overflow-x"},de=H('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u753B\u50CF</div><div class="sheet-cell value sheet-cell-long flex align-center">\u30B5\u30A4\u30C8\u540D</div><div class="sheet-cell value sheet-cell-long flex align-center">\u30EA\u30F3\u30AF</div></div></div>',1),ce=["onClick","onContextmenu"],pe=a("div",{class:"sheet-cell handle flex align-center handle grab"},[a("i",{class:"pi pi-bars"})],-1),me={class:"sheet-cell num flex align-center"},ve={class:"text block"},fe={class:"sheet-cell value flex align-center"},_e=["src"],he={class:"sheet-cell value sheet-cell-long flex align-center"},ge={class:"text block"},be=["onClick"],xe=a("span",{style:{color:"blue","text-decoration":"underline"},class:"text block"},"\u30B5\u30A4\u30C8\u3078\u98DB\u3076",-1),ke=[xe],Ce={class:"button-wrapper flex justify-end"},Pe=L({__name:"ProjectLinks",setup(je){var F;const{get:h,save:w}=M(),{submit:k,submitRowReorder:A,remove:C}=le(),{d:r,dr:i,data:d,images:g,useToggle:b}=te(),{rcm:y,rcmOpened:Fe,isRCOn:V}=se(d),{payload:D,content:c,progress:E,project:u}=N(),p=_((F=u.value)==null?void 0:F.links),j=_(!1),f=_(!1);function $(l){window.open(l.link||"#")}function q(){var l;b({method:"post",endpoints:["app/links","project_details/"+((l=u.value)==null?void 0:l.id)],state:"project"})}function I(l){var e;g.value=l.image?[{image:l.image}]:[],j.value=!0,b({method:"patch",endpoints:["app/links/"+l.id,"project_details/"+((e=u.value)==null?void 0:e.id)],state:"project"},l)}function R(l){var e;f.value=!0,D.value={method:"patch",endpoints:["app/links/"+d.value.id,"project_details/"+((e=u.value)==null?void 0:e.id)],state:"project"},k({image:null,thumbnail:null},null,"object").then(()=>{f.value=!1,g.value=[]})}function U(){var l;f.value=!0,C("app/links/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;console.log("removed"),i.value=!1,h("project_details/"+((e=u.value)==null?void 0:e.id),"project").then(()=>{r.value=!1,f.value=!1})})}const S=_([{icon:"pi pi-plus",label:"\u65B0\u898F\u753B\u50CF",command:()=>{var l;b({method:"post",endpoints:["app/links","project_details/"+((l=u.value)==null?void 0:l.id)],state:"project"})}},{icon:"pi pi-copy",label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e;c.value=!0;const l={order_id:p.value?p.value.length+1:1,project:((e=u.value)==null?void 0:e.id)||null,name:d.value.name,link:d.value.link};w("app/links",l).then(()=>{var t;h("project_details/"+((t=u.value)==null?void 0:t.id),"project").then(()=>{c.value=!1})})}},{icon:"pi pi-trash",label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var l;c.value=!0,C("app/links/"+((l=d.value)==null?void 0:l.id)).then(()=>{var e;h("project_details/"+((e=u.value)==null?void 0:e.id),"project").then(()=>{c.value=!1})})}}]);return P(()=>u.value,l=>{p.value=l==null?void 0:l.links}),(l,e)=>(O(),T("div",ne,[n(W,{modelValue:s(c),"onUpdate:modelValue":e[0]||(e[0]=t=>m(c)?c.value=t:null)},null,8,["modelValue"]),n(X,{class:"justify-space-between"},{default:v(()=>[a("div",ie,[n(s(z),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=t=>q())})])]),_:1}),a("div",re,[de,n(s(J),{tag:"div",onEnd:e[2]||(e[2]=t=>s(A)({value:p.value},{method:"post",endpoints:["app/links","project_details/"+s(u).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:v(({element:t,index:o})=>[a("div",{onClick:x=>I(t),onContextmenu:x=>s(V)(x,t),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[n(s(K),{id:"rc_menu",ref_key:"rcm",ref:y,class:"rc has-final-action",model:S.value,popup:!0},null,8,["model"]),pe,a("div",me,[a("span",ve,B(o+1),1)]),a("div",fe,[a("img",{style:{width:"100px",height:"auto"},src:t.image,alt:""},null,8,_e)]),a("div",he,[a("span",ge,B(t.name),1)]),a("div",{onClick:G(x=>$(t),["stop"]),class:"sheet-cell value sheet-cell-long flex align-center"},ke,8,be)],40,ce)]),_:1},8,["list"])]),n(Q,{modelValue:s(r),"onUpdate:modelValue":e[8]||(e[8]=t=>m(r)?r.value=t:null),title:"\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30E0"},{default:v(()=>{var t;return[n(Y,{modelValue:s(r),"onUpdate:modelValue":e[3]||(e[3]=o=>m(r)?r.value=o:null),dr:s(i),"onUpdate:dr":e[4]||(e[4]=o=>m(i)?i.value=o:null),"close-after":"",topProgress:"",progress:s(E),form:s(oe),data:s(d),remove:j.value,query:{project:(t=s(u))==null?void 0:t.id},submit:s(k)},{default:v(()=>[n(ee,{containerId:"link_image_input",images:s(g),remove:R},null,8,["images"])]),_:1},8,["modelValue","dr","progress","form","data","remove","query","submit"]),n(Z,{modelValue:s(i),"onUpdate:modelValue":e[7]||(e[7]=o=>m(i)?i.value=o:null)},{default:v(()=>[a("div",Ce,[a("button",{onClick:e[5]||(e[5]=o=>i.value=!1),class:"cancel"},"\u3044\u3044\u3048"),a("button",{onClick:e[6]||(e[6]=o=>U()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]}),_:1},8,["modelValue"])]))}});export{Pe as default};
