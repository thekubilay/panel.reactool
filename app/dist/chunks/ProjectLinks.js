import{d as T,D as f,F as H,b as L,k as n,u as t,l as _,w as m,e as a,a3 as M,a as B,U as P,t as y,c as O,g as G,G as Q}from"./vendor.js";import{d as z}from"./vuedraggable.umd.js";import{s as J}from"./menu.esm.js";import{u as K,a as W,S as X,_ as Y}from"./useFormRequestBuilder.js";import{_ as Z}from"./BarTool.js";import{_ as ee}from"./Icon.js";import{_ as le}from"./FormQuery.js";import{_ as se}from"./DialogDelete.js";import{_ as te}from"./ContextImagesThumbnailContainer.js";import{A as ae,u as ue}from"../main.js";import{u as ne}from"./useRightClickHandler.js";import{c as oe,d as ie}from"./rules.js";import"./overlayeventbus.esm.js";const re=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u30B5\u30A4\u30C8\u540D",hint:null,placeholder:"reactool",required:!0,id:"name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"link",type:"text",model:null,label:"\u30B5\u30A4\u30C8URL",hint:null,placeholder:"https://reactool.jp",required:!0,id:"link_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u30B5\u30A4\u30C8\u753B\u50CF",hint:".jpeg, .png, .svg \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"link_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[oe],rule:ie,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const de={id:"project_links",class:"panel-board relative"},ce={class:"part-wrap"},pe={class:"spreadsheet-wrapper overflow-x"},me=M('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell img flex align-center">\u753B\u50CF</div><div class="sheet-cell value sheet-cell-long flex align-center">\u30B5\u30A4\u30C8\u540D</div><div class="sheet-cell value sheet-cell-long flex align-center">\u30EA\u30F3\u30AF</div></div></div>',1),ve=["onClick","onContextmenu"],fe=a("div",{class:"sheet-cell handle flex align-center handle grab"},[a("i",{class:"pi pi-bars"})],-1),_e={class:"sheet-cell num flex align-center"},ge={class:"text block"},he={class:"sheet-cell img flex align-center"},be={class:"sheet-cell value sheet-cell-long flex align-center"},je={class:"text block"},ke=["onClick"],Ce=a("span",{style:{color:"blue","text-decoration":"underline"},class:"text block"},"\u30B5\u30A4\u30C8\u3078\u98DB\u3076",-1),xe=[Ce],Fe={class:"button-wrapper flex justify-end"},He=T({setup(Be){var F;const{get:g,save:A}=ae(),{submit:k,submitRowReorder:w,remove:C}=K(),{d:o,dr:c,data:i,images:h,useToggle:b}=W(),{rcm:V,rcmOpened:ye,isRCOn:D}=ne(i),{payload:E,content:r,progress:$,project:u}=ue(),p=f((F=u.value)==null?void 0:F.links),x=f(!1),v=f(!1);function I(l){window.open(l.link||"#")}function q(){var l;b({method:"post",endpoints:["app/links","project_details/"+((l=u.value)==null?void 0:l.id)],state:"project"})}function R(l){var e;h.value=l.image?[{image:l.image}]:[],x.value=!0,b({method:"patch",endpoints:["app/links/"+l.id,"project_details/"+((e=u.value)==null?void 0:e.id)],state:"project"},l)}function U(l){var e;v.value=!0,E.value={method:"patch",endpoints:["app/links/"+i.value.id,"project_details/"+((e=u.value)==null?void 0:e.id)],state:"project"},k({image:null,thumbnail:null},null,"object").then(()=>{v.value=!1,h.value=[]})}function N(){var l;v.value=!0,C("app/links/"+((l=i.value)==null?void 0:l.id)).then(()=>{var e;c.value=!1,g("project_details/"+((e=u.value)==null?void 0:e.id),"project").then(()=>{o.value=!1,v.value=!1})})}const S=f([{icon:"pi pi-plus",label:"\u65B0\u898F\u753B\u50CF",command:()=>{var l;b({method:"post",endpoints:["app/links","project_details/"+((l=u.value)==null?void 0:l.id)],state:"project"})}},{icon:"pi pi-copy",label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e;r.value=!0;const l={order_id:p.value?p.value.length+1:1,project:((e=u.value)==null?void 0:e.id)||null,name:i.value.name,link:i.value.link};A("app/links",l).then(()=>{var s;g("project_details/"+((s=u.value)==null?void 0:s.id),"project").then(()=>{r.value=!1})})}},{icon:"pi pi-trash",label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var l;r.value=!0,C("app/links/"+((l=i.value)==null?void 0:l.id)).then(()=>{var e;g("project_details/"+((e=u.value)==null?void 0:e.id),"project").then(()=>{r.value=!1})})}}]);return H(()=>u.value,l=>{p.value=l==null?void 0:l.links}),(l,e)=>(B(),L("div",de,[n(X,{modelValue:t(r),"onUpdate:modelValue":e[0]||(e[0]=s=>_(r)?r.value=s:null)},null,8,["modelValue"]),n(Z,{class:"justify-space-between"},{default:m(()=>[a("div",ce,[n(t(P),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u30EA\u30F3\u30AF\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=s=>q())})])]),_:1}),a("div",pe,[me,n(t(z),{tag:"div",onEnd:e[2]||(e[2]=s=>t(w)({value:p.value},{method:"post",endpoints:["app/links","project_details/"+t(u).id],state:"project"})),list:p.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:m(({element:s,index:d})=>[a("div",{onClick:j=>R(s),onContextmenu:j=>t(D)(j,s),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[n(t(J),{id:"rc_menu",ref_key:"rcm",ref:V,class:"rc has-final-action",model:S.value,popup:!0},null,8,["model"]),fe,a("div",_e,[a("span",ge,y(d+1),1)]),a("div",he,[s.image?(B(),O(ee,{key:0,svg:"image"})):G("",!0)]),a("div",be,[a("span",je,y(s.name),1)]),a("div",{onClick:Q(j=>I(s),["stop"]),class:"sheet-cell value sheet-cell-long flex align-center"},xe,8,ke)],40,ve)]),_:1},8,["list"])]),n(Y,{modelValue:t(o),"onUpdate:modelValue":e[7]||(e[7]=s=>_(o)?o.value=s:null),title:"\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30E0"},{default:m(()=>{var s;return[n(le,{modelValue:t(o),"onUpdate:modelValue":e[3]||(e[3]=d=>_(o)?o.value=d:null),"close-after":"",topProgress:"",progress:t($),form:t(re),data:t(i),remove:x.value,query:{project:(s=t(u))==null?void 0:s.id},submit:t(k)},{default:m(()=>[n(te,{containerId:"link_image_input",images:t(h),remove:U},null,8,["images"])]),_:1},8,["modelValue","progress","form","data","remove","query","submit"]),n(se,{modelValue:t(c),"onUpdate:modelValue":e[6]||(e[6]=d=>_(c)?c.value=d:null)},{default:m(()=>[a("div",Fe,[a("button",{onClick:e[4]||(e[4]=d=>c.value=!1),class:"cancel"},"\u3044\u3044\u3048"),a("button",{onClick:e[5]||(e[5]=d=>N()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]}),_:1},8,["modelValue"])]))}});export{He as default};
