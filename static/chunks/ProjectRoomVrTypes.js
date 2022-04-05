import{d as M,D as p,o as P,F as H,b,k as u,u as s,l as d,w as v,e as a,M as O,N as J,a3 as L,I as Q,J as z,a as _,U as B,t as V,c as G,g as K}from"./vendor.js";import{s as W}from"./menu.esm.js";import{u as X,a as Y,S as Z,_ as ee}from"./useFormRequestBuilder.js";import{_ as le}from"./BarTool.js";import{_ as te}from"./FormQuery.js";import{_ as se}from"./DialogDelete.js";import{_ as ae}from"./ContextImagesThumbnailContainer.js";import{_ as ue}from"./Icon.js";import{A as oe,u as ne}from"../main.js";import{u as ie}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";const C=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"plan_type",type:"text",model:null,label:"\u9593\u53D6\u308A\u30D7\u30E9\u30F3",hint:null,placeholder:"AB type",required:!0,id:"name_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u9593\u53D6\u308A\u30D7\u30E9\u30F3\u753B\u50CF",hint:".jpeg, .png \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!0,id:"plan_type_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const re={id:"project_room_vr",class:"panel-board relative"},de={class:"part-wrap"},ce={class:"part-wrap part-end"},me={class:"spreadsheet-wrapper overflow-x"},pe=L('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell img flex align-center"><i class="pi pi-file"></i></div><div class="sheet-cell value sheet-cell-long flex align-center">\u9593\u53D6\u308A\u30BF\u30A4\u30D7</div></div></div>',1),ve={class:"sb-container ss-container"},_e=["onClick","onContextmenu"],fe=a("div",{class:"sheet-cell handle flex align-center"},null,-1),ge={class:"sheet-cell num flex align-center"},he={class:"text block"},be={class:"sheet-cell img flex align-center"},Ce={class:"sheet-cell value flex align-center"},xe={class:"text block"},je={class:"button-wrapper flex justify-end"},Te=M({setup(ye){const D=Q(),x=z(),{get:k,save:Fe}=oe(),{submit:j,submitRowReorder:Be,remove:w}=X(),{d:n,dr:o,data:c,images:m,useToggle:y}=Y(),{rcm:A,rcmOpened:Ve,isRCOn:E}=ie(c),{payload:R,content:f,progress:De,project:i}=ne(),g=p([]),h=p(!1),r=p(!1),$=p([{icon:"pi pi-plus",label:"\u65B0\u898F\u753B\u50CF",command:()=>{}},{icon:"pi pi-copy",label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{}},{icon:"pi pi-trash",label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{}}]);P(()=>{var l;g.value=((l=i.value)==null?void 0:l.room_vr)||[]});function q(){var l;h.value=!1,m.value=[],C[0][1].elements[0].required=!0,y({method:"post",endpoints:["app/room_vrs","project_details/"+((l=i.value)==null?void 0:l.id)],state:"project"})}function I(l){var e;h.value=!0,m.value=l.image?[{image:l.image}]:[],C[0][1].elements[0].required=!1,y({method:"patch",endpoints:["app/room_vrs/"+l.id,"project_details/"+((e=i.value)==null?void 0:e.id)],state:"project"},l)}function U(l){var e;r.value=!0,R.value={method:"patch",endpoints:["app/room_vrs/"+c.value.id,"project_details/"+((e=i.value)==null?void 0:e.id)],state:"project"},j({image:null},null,"object").then(()=>{r.value=!1,m.value=[]})}function N(){var l;r.value=!0,w("app/room_vrs/"+((l=c.value)==null?void 0:l.id)).then(()=>{var e;o.value=!1,k("project_details/"+((e=i.value)==null?void 0:e.id),"project").then(()=>{n.value=!1,r.value=!1})})}const S=()=>{D.push({name:"ProjectRoomVrFloors",params:{cid:x.params.cid,dynid:x.params.dynid}})};return H(()=>{var l;return(l=i.value)==null?void 0:l.room_vr},l=>{g.value=l||[]}),(l,e)=>(_(),b("div",re,[u(Z,{modelValue:s(f),"onUpdate:modelValue":e[0]||(e[0]=t=>d(f)?f.value=t:null)},null,8,["modelValue"]),u(le,{class:"justify-space-between"},{default:v(()=>[a("div",de,[u(s(B),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898FVR\u30D7\u30E9\u30F3",onClick:e[1]||(e[1]=t=>q())})]),a("div",ce,[u(s(B),{style:{"margin-left":"5px"},onClick:e[2]||(e[2]=t=>S()),type:"button",class:"tool-button",label:"VR\u4E00\u89A7\u3078"})])]),_:1}),a("div",me,[pe,a("div",ve,[(_(!0),b(O,null,J(g.value,(t,T)=>(_(),b("div",{key:t.id,onClick:F=>I(t),onContextmenu:F=>s(E)(F,t),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[u(s(W),{id:"rc_menu",ref_for:!0,ref_key:"rcm",ref:A,class:"rc has-final-action",model:$.value,popup:!0},null,8,["model"]),fe,a("div",ge,[a("span",he,V(T+1),1)]),a("div",be,[t.image?(_(),G(ue,{key:0,svg:"image"})):K("",!0)]),a("div",Ce,[a("span",xe,V(t.plan_type),1)])],40,_e))),128))])]),u(ee,{modelValue:s(n),"onUpdate:modelValue":e[8]||(e[8]=t=>d(n)?n.value=t:null),title:"\u30EB\u30FC\u30C8\u30D5\u30A9\u30FC\u30E0"},{default:v(()=>[u(te,{modelValue:s(n),"onUpdate:modelValue":e[3]||(e[3]=t=>d(n)?n.value=t:null),dr:s(o),"onUpdate:dr":e[4]||(e[4]=t=>d(o)?o.value=t:null),"close-after":"",form:s(C),data:s(c),remove:h.value,loading:r.value,query:{project:s(i).id},submit:s(j)},{default:v(()=>[u(ae,{containerId:"plan_type_image_input",images:s(m),remove:U},null,8,["images"])]),_:1},8,["modelValue","dr","form","data","remove","loading","query","submit"]),u(se,{modelValue:s(o),"onUpdate:modelValue":e[7]||(e[7]=t=>d(o)?o.value=t:null)},{default:v(()=>[a("div",je,[a("button",{onClick:e[5]||(e[5]=t=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),a("button",{onClick:e[6]||(e[6]=t=>N()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Te as default};
