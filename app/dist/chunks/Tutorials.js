import j from"./dropdown.esm.js";import{a as T,C as f,c as k,M as $,o as I,q as P,f as n,w as p,x as u,t as s,D as d,W as R,B as U,X as L,b as S,G as N,A as _}from"./vendor.js";import{D as M}from"./vuedraggable.umd.js";import G from"./Dialog.js";import{_ as H}from"./FormQuery.js";import{_ as Q}from"./DialogDelete.js";import W from"./BarTool.js";import{A as X,u as z}from"../main.js";import{a as J,u as K}from"./useFormRequestBuilder.js";import"./overlayeventbus.esm.js";import"./virtualscroller.esm.js";import"./index3.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";const O=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"Dropdown",db_column_name:"active",type:"text",model:!0,label:"\u30AA\u30F3\u30E9\u30A4\u30F3",hint:null,required:!0,rules:[],id:"active_input",disabled:!1,options:[{name:"\u306F\u3044",value:!0},{name:"\u3044\u3044\u3048",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]},{component:null,name:"Dropdown",db_column_name:"type",type:"text",model:"\u30D1\u30CD\u30EB",label:"\u30BF\u30A4\u30D7",hint:null,required:!0,rules:[],id:"type_input",disabled:!1,options:[{name:"\u30A2\u30D7\u30EA",value:"\u30A2\u30D7\u30EA"},{name:"\u30D1\u30CD\u30EB",value:"\u30D1\u30CD\u30EB"},{name:"API",value:"API"}],optionLabel:"name",optionValue:"value",placeholder:"\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"title",type:"text",model:null,label:"\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u30FC",required:!0,id:"title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"sub_title",type:"text",model:null,label:"\u30B5\u30D6\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u30FC",required:!1,id:"sub_title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"Textarea",db_column_name:"content",type:"text",model:null,label:"\u5185\u5BB9",hint:null,placeholder:"\u30FC",required:!1,rows:"6",cols:"10",id:"content_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"pdf",type:"text",model:null,label:"PDF",hint:".pdf \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084PDF\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"",accept:"pdf/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text","limit","rule"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"video",type:"text",model:null,label:"\u30D3\u30C7\u30AA",hint:null,required:!1,id:"video_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"",accept:"video/mp4,video/x-m4v,video/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]];const Y={id:"admin-tutorials",class:"admin-board"},Z={class:"part-wrap"},ee={class:"part-wrap part-end"},le={class:"spreadsheet-wrapper overflow-x"},ue=R('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30BF\u30A4\u30D7</div><div class="sheet-cell sheet-cell-long value flex align-center">\u30BF\u30A4\u30C8\u30EB</div></div></div>',1),te=["onClick"],se=u("div",{class:"sheet-cell handle flex align-center handle grab"},[u("i",{class:"pi pi-bars"})],-1),oe={class:"sheet-cell num flex align-center"},ae={class:"text block"},ne={class:"sheet-cell sheet-cell value flex align-center"},ie={class:"text block"},re={class:"sheet-cell sheet-cell-long value flex align-center"},de={class:"text block"},pe={class:"button-wrapper flex justify-end"},$e=T({setup(ce){const{get:h}=X(),{store:me,progress:ve,user:fe,companies:_e,company:be,users:xe,content:b,tutorials:c}=z(),{submit:D,remove:A,submitRowReorder:F}=J(),{d:a,dr:o,data:x,useToggle:C}=K();U();const E=L(),m=f(!1),i=f("\u30D1\u30CD\u30EB"),r=f([]),y=["\u30D1\u30CD\u30EB","\u30A2\u30D7\u30EA","API"],v=k({set(t){i.value=t,r.value=c.value.filter(e=>e.type===t)||[]},get(){return i.value}});function g(){const t=i.value==="\u30D1\u30CD\u30EB"?"panel":i.value==="\u30A2\u30D7\u30EA"?"app":"api";E.push({name:"TutorialImages",query:{tutorial:t}})}function B(){m.value=!1,C({method:"post",endpoints:["tutorials","tutorials"],state:"tutorials"})}function w(t){m.value=!0,C({method:"patch",endpoints:["tutorials/"+t.id,"tutorials"],state:"tutorials"},t)}function q(){var t;b.value=!0,A("tutorials/"+((t=x.value)==null?void 0:t.id)).then(()=>{h("tutorials","tutorials").then(e=>{o.value=!1,a.value=!1,b.value=!1})})}return $(()=>c.value,t=>{r.value=t.filter(e=>e.type===i.value)||[]}),I(()=>{r.value=c.value.filter(t=>t.type===i.value)||[]}),(t,e)=>(S(),P("div",Y,[n(W,{class:"justify-space-between"},{default:p(()=>[u("div",Z,[n(s(N),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",onClick:e[0]||(e[0]=l=>B())})]),u("div",ee,[n(s(j),{style:{width:"140px"},class:"dropdown",modelValue:s(v),"onUpdate:modelValue":e[1]||(e[1]=l=>d(v)?v.value=l:null),options:y},null,8,["modelValue"]),u("button",{onClick:e[2]||(e[2]=l=>g()),class:"tool-button"},"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u30D1\u30FC\u30C4")])]),_:1}),u("div",le,[ue,n(s(M),{tag:"div",onEnd:e[3]||(e[3]=l=>s(F)({value:r.value},{method:"post",endpoints:["tutorials","tutorials"],state:"tutorials"})),list:r.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:p(({element:l,index:V})=>[u("div",{onClick:Ce=>w(l),class:"sheet-row flex align-center list-group-item relative pointer"},[se,u("div",oe,[u("span",ae,_(l.order_id?l.order_id:V+1),1)]),u("div",ne,[u("span",ie,_(l.type),1)]),u("div",re,[u("span",de,_(l.title),1)])],8,te)]),_:1},8,["list"])]),n(G,{modelValue:s(a),"onUpdate:modelValue":e[9]||(e[9]=l=>d(a)?a.value=l:null),title:"\u30C4\u30FC\u30C8\u30FC\u30EA\u30A2\u30EB\u30D5\u30A9\u30FC\u30E0",overflow:""},{default:p(()=>[n(H,{modelValue:s(a),"onUpdate:modelValue":e[4]||(e[4]=l=>d(a)?a.value=l:null),dr:s(o),"onUpdate:dr":e[5]||(e[5]=l=>d(o)?o.value=l:null),"close-after":"",form:s(O),query:{},data:s(x),remove:m.value,submit:s(D)},null,8,["modelValue","dr","form","data","remove","submit"]),n(Q,{modelValue:s(o),"onUpdate:modelValue":e[8]||(e[8]=l=>d(o)?o.value=l:null)},{default:p(()=>[u("div",pe,[u("button",{onClick:e[6]||(e[6]=l=>o.value=!1),class:"cancel"},"\u3044\u3044\u3048"),u("button",{onClick:e[7]||(e[7]=l=>q()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{$e as default};
