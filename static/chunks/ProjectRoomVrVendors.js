import{D as N}from"./vuedraggable.umd.js";import{a as P,C as f,o as H,N as M,q as F,f as a,t,D as d,w as c,x as u,W as L,X as O,B as G,b as B,G as C,A as g,v as Q}from"./vendor.js";import{s as W}from"./menu.esm.js";import{S as X}from"./Spinner.js";import{_ as z}from"./BarTool.js";import{_ as J}from"./FormQuery.js";import{_ as K}from"./Dialog.js";import{_ as Y}from"./DialogDelete.js";import{_ as Z}from"./ContextImagesThumbnailContainer.js";import{_ as ee}from"./Icon.js";import{A as le,u as se}from"../main.js";import{a as te,u as ue}from"./useFormRequestBuilder.js";import{u as ae}from"./useRightClickHandler.js";import"./overlayeventbus.esm.js";import"./plugin-vue_export-helper.js";const oe=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"title",type:"text",model:null,label:"\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u30EA\u30D3\u30F3\u30B0\u30EB\u30FC\u30E0",required:!0,id:"title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]},{component:null,name:"InputText",db_column_name:"sub_title",type:"text",model:null,label:"\u3000\u30B5\u30D6\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u3007\u3007\u30B3\u30FC\u30CA\u30FC",required:!1,id:"sub_title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"url",type:"text",model:null,label:"URL",hint:null,placeholder:"https://marumaru.com/vendor/vr_url",required:!0,id:"url_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u9593\u53D6\u308A\u30BF\u30A4\u30D7\u753B\u50CF",hint:".jpeg, .png \u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"vendor_image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","image_path","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const ne={id:"project_room_vr_vendors",class:"panel-board relative"},ie={class:"part-wrap"},re={class:"part-wrap part-end"},de={class:"spreadsheet-wrapper overflow-y"},ce=L('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell sheet-value-cell value flex align-center">\u30BF\u30A4\u30C8\u30EB</div><div class="sheet-cell sheet-value-cell value flex align-center">\u30B5\u30D6\u30BF\u30A4\u30C8\u30EB</div><div class="sheet-cell sheet-value-cell flex align-center">URL</div><div class="sheet-cell sheet-value-cell flex align-center">\u753B\u50CF</div></div></div>',1),me=["onClick"],pe=u("div",{class:"sheet-cell handle flex align-center justify-center grab"},[u("i",{class:"pi pi-bars"})],-1),ve={class:"sheet-cell num flex align-center"},_e={class:"sheet-cell sheet-value-cell flex align-center"},fe={class:"sheet-cell sheet-value-cell flex align-center"},ge={class:"sheet-cell sheet-value-cell flex align-center"},he={class:"sheet-cell sheet-value-cell flex align-center"},be={key:0,class:"text flex"},Ce={class:"button-wrapper flex justify-end"},Me=P({setup(xe){const x=O(),m=G(),{get:D,save:je}=le(),{submit:j,submitRowReorder:A,remove:V}=te(),{d:i,dr:o,data:p,images:v,useToggle:y}=ue(),{rcm:E,rcmOpened:ye,isRCOn:Fe}=ae(p),{payload:R,content:h,progress:Be,project:n}=se(),_=f([]),b=f(!1),r=f(!1),w=f([{icon:"pi pi-plus",label:"\u65B0\u898F\u753B\u50CF",command:()=>{}},{icon:"pi pi-copy",label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{}},{icon:"pi pi-trash",label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{}}]);H(()=>{var s;_.value=((s=n.value)==null?void 0:s.room_vr_vendors)||[]});function k(){var s;b.value=!1,v.value=[],y({method:"post",endpoints:["app/room_vr_vendors","project_details/"+((s=n.value)==null?void 0:s.id)],state:"project"})}function $(s){var e;b.value=!0,v.value=s.image?[{image:s.image}]:[],y({method:"patch",endpoints:["app/room_vr_vendors/"+s.id,"project_details/"+((e=n.value)==null?void 0:e.id)],state:"project"},s)}function q(s){var e;r.value=!0,R.value={method:"patch",endpoints:["app/room_vr_vendors/"+p.value.id,"project_details/"+((e=n.value)==null?void 0:e.id)],state:"project"},j({image:null},null,"object").then(()=>{r.value=!1,v.value=[]})}function I(){var s;r.value=!0,V("app/room_vr_vendors/"+((s=p.value)==null?void 0:s.id)).then(()=>{var e;o.value=!1,D("project_details/"+((e=n.value)==null?void 0:e.id),"project").then(()=>{i.value=!1,r.value=!1})})}const T=()=>{x.push({name:"ProjectRoomVrFloors",params:{cid:m.params.cid,dynid:m.params.dynid}})},U=()=>{x.push({name:"ProjectRoomVrTypes",params:{cid:m.params.cid,dynid:m.params.dynid}})};return M(()=>{var s;return(s=n.value)==null?void 0:s.room_vr_vendors},s=>{_.value=s||[]}),(s,e)=>(B(),F("div",ne,[a(X,{modelValue:t(h),"onUpdate:modelValue":e[0]||(e[0]=l=>d(h)?h.value=l:null)},null,8,["modelValue"]),a(z,{class:"justify-space-between"},{default:c(()=>[u("div",ie,[a(t(C),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u30D9\u30F3\u30C0\u30FCVR\u3092\u8FFD\u52A0",onClick:e[1]||(e[1]=l=>k())})]),u("div",re,[a(t(C),{style:{"margin-left":"5px"},onClick:e[2]||(e[2]=l=>T()),type:"button",class:"tool-button",label:"VR\u4E00\u89A7\u3078"}),a(t(C),{style:{"margin-left":"5px"},onClick:e[3]||(e[3]=l=>U()),type:"button",class:"tool-button",label:"\u9593\u53D6\u308A\u30BF\u30A4\u30D7\u4E00\u89A7\u3078"})])]),_:1}),u("div",de,[ce,a(t(N),{tag:"div",onEnd:e[4]||(e[4]=l=>t(A)({value:_.value},{method:"post",endpoints:["app/room_vr_vendors","project_details/"+t(n).id],state:"project"})),list:_.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:c(({element:l,index:S})=>[u("div",{onClick:De=>$(l),class:"sheet-row flex align-center list-group-item relative pointer"},[a(t(W),{id:"rc_menu",ref_key:"rcm",ref:E,class:"rc has-final-action",model:w.value,popup:!0},null,8,["model"]),pe,u("div",ve,g(S+1),1),u("div",_e,g(l.title),1),u("div",fe,g(l.sub_title),1),u("div",ge,g(l.url),1),u("div",he,[l.image?(B(),F("span",be,[a(ee,{style:{"margin-right":"5px"},svg:"image"})])):Q("",!0)])],8,me)]),_:1},8,["list"])]),a(K,{modelValue:t(i),"onUpdate:modelValue":e[10]||(e[10]=l=>d(i)?i.value=l:null),title:"\u30D9\u30F3\u30C0\u30FCVR\u30D5\u30A9\u30FC\u30E0"},{default:c(()=>[a(J,{modelValue:t(i),"onUpdate:modelValue":e[5]||(e[5]=l=>d(i)?i.value=l:null),dr:t(o),"onUpdate:dr":e[6]||(e[6]=l=>d(o)?o.value=l:null),"close-after":"",form:t(oe),data:t(p),remove:b.value,loading:r.value,query:{project:t(n).id},submit:t(j)},{default:c(()=>[a(Z,{containerId:"plan_type_image_input",images:t(v),remove:q},null,8,["images"])]),_:1},8,["modelValue","dr","form","data","remove","loading","query","submit"]),a(Y,{modelValue:t(o),"onUpdate:modelValue":e[9]||(e[9]=l=>d(o)?o.value=l:null)},{default:c(()=>[u("div",Ce,[u("button",{onClick:e[7]||(e[7]=l=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),u("button",{onClick:e[8]||(e[8]=l=>I()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Me as default};
