import y from"./dropdown.esm.js";import{a as P,C as p,c as F,M as S,o as M,q as E,f as r,w as m,t,v as w,D as d,W as G,B as H,X as Q,b,x as u,G as W,e as X,A as h}from"./vendor.js";import{D as z}from"./vuedraggable.umd.js";import J from"./Dialog.js";import{_ as K}from"./FormQuery.js";import{_ as L}from"./DialogDelete.js";import O from"./BarTool.js";import{A as Y,u as Z}from"../main.js";import{a as ee,u as le}from"./useFormRequestBuilder.js";import"./overlayeventbus.esm.js";import"./virtualscroller.esm.js";import"./index3.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";const te=[[{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"title",type:"text",model:null,label:"\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u30FC",required:!0,id:"title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"InputText",db_column_name:"sub_title",type:"text",model:null,label:"\u30B5\u30D6\u30BF\u30A4\u30C8\u30EB",hint:null,placeholder:"\u30FC",required:!1,id:"sub_title_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"Textarea",db_column_name:"content",type:"text",model:null,label:"\u5185\u5BB9",hint:null,placeholder:"\u30FC",required:!1,rows:"6",cols:"10",id:"content_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-1"]}]},{classes:["flex"],elements:[{component:null,name:"FileInput",db_column_name:"image",type:"text",model:null,label:"\u753B\u50CF",hint:".jpeg, .jpg, .png \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059",required:!1,id:"image_input",preview_text:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u305F\u3081\u3001\u30AF\u30EA\u30C3\u30AF\u3084\u753B\u50CF\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",limit:"1MB\u4EE5\u4E0B",accept:"image/*",rules:[],rule:null,disabled:!1,props:["placeholder","required","disabled","accept","hint","model","preview_text","limit","rule"],classes:["flex-column","column-1"]}]}]],se={id:"admin-tutorials",class:"admin-board"},ue={class:"part-wrap"},ae={class:"part-wrap part-end"},oe={key:0,class:"spreadsheet-wrapper overflow-x"},ne=G('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell value flex align-center">\u30BF\u30A4\u30D7</div><div class="sheet-cell sheet-cell-long value flex align-center">\u30BF\u30A4\u30C8\u30EB</div></div></div>',1),ie=["onClick"],re=u("div",{class:"sheet-cell handle flex align-center handle grab"},[u("i",{class:"pi pi-bars"})],-1),de={class:"sheet-cell num flex align-center"},ce={class:"text block"},pe={class:"sheet-cell sheet-cell value flex align-center"},me={class:"text block"},ve={class:"sheet-cell sheet-cell-long value flex align-center"},fe={class:"text block"},_e={class:"button-wrapper flex justify-end"},Ne=P({setup(ge){const{get:D}=Y(),{store:be,progress:A,user:he,companies:xe,company:Ce,users:Be,content:x,tutorials:v}=Z(),{submit:V,remove:j,submitRowReorder:k}=ee(),{d:i,dr:n,data:C,useToggle:B}=le();H();const q=Q(),f=p(!1),c=p("\u30D1\u30CD\u30EB"),a=p([]),T=["\u30D1\u30CD\u30EB","\u30A2\u30D7\u30EA","API"],o=p(),_=F({set(s){c.value=s,a.value=v.value.filter(e=>e.type===s)||[],a.value.length?o.value=a.value[0]:o.value={}},get(){return c.value}}),g=F({set(s){o.value=a.value.find(e=>e.id===s)},get(){return o.value.id}});function $(){q.push({name:"Tutorials"})}function R(){f.value=!1,B({method:"post",endpoints:["tutorial_images","tutorials"],state:"tutorials"})}function I(s){f.value=!0,B({method:"patch",endpoints:["tutorial_images/"+s.id,"tutorials"],state:"tutorials"},s)}function U(){var s;x.value=!0,j("tutorial_images/"+((s=C.value)==null?void 0:s.id)).then(()=>{D("tutorials","tutorials").then(e=>{n.value=!1,i.value=!1,x.value=!1})})}return S(()=>v.value,s=>{a.value=s.filter(e=>e.type===c.value)||[],a.value.length&&(o.value=a.value[0])}),M(()=>{a.value=v.value.filter(s=>s.type===c.value)||[],o.value=a.value[0]}),(s,e)=>(b(),E("div",se,[r(O,{class:"justify-space-between"},{default:m(()=>[u("div",ue,[r(t(W),{type:"button",class:"submit-button",icon:"pi pi-plus","icon-pos":"left",label:"\u65B0\u898F\u30D1\u30FC\u30C4",onClick:e[0]||(e[0]=l=>R())})]),u("div",ae,[r(t(y),{style:{width:"100px"},class:"dropdown",modelValue:t(_),"onUpdate:modelValue":e[1]||(e[1]=l=>d(_)?_.value=l:null),options:T},null,8,["modelValue"]),a.value.length?(b(),X(t(y),{key:0,style:{width:"200px"},class:"dropdown",modelValue:t(g),"onUpdate:modelValue":e[2]||(e[2]=l=>d(g)?g.value=l:null),"option-label":"title","option-value":"id",options:a.value},null,8,["modelValue","options"])):w("",!0),u("button",{onClick:e[3]||(e[3]=l=>$()),class:"tool-button"},"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB")])]),_:1}),t(o)?(b(),E("div",oe,[ne,r(t(z),{tag:"div",onEnd:e[4]||(e[4]=l=>t(k)({value:t(o).tutorial_images},{method:"post",endpoints:["tutorial_images","tutorials"],state:"tutorials"})),list:t(o).tutorial_images,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:m(({element:l,index:N})=>[u("div",{onClick:ye=>I(l),class:"sheet-row flex align-center list-group-item relative pointer"},[re,u("div",de,[u("span",ce,h(l.order_id?l.order_id:N+1),1)]),u("div",pe,[u("span",me,h(c.value),1)]),u("div",ve,[u("span",fe,h(l.title),1)])],8,ie)]),_:1},8,["list"])])):w("",!0),r(J,{modelValue:t(i),"onUpdate:modelValue":e[10]||(e[10]=l=>d(i)?i.value=l:null),title:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u30D5\u30A9\u30FC\u30E0",overflow:""},{default:m(()=>[r(K,{modelValue:t(i),"onUpdate:modelValue":e[5]||(e[5]=l=>d(i)?i.value=l:null),dr:t(n),"onUpdate:dr":e[6]||(e[6]=l=>d(n)?n.value=l:null),"close-after":"",form:t(te),onload:t(A)+"%",query:{tutorials:t(o).id},data:t(C),remove:f.value,submit:t(V)},null,8,["modelValue","dr","form","onload","query","data","remove","submit"]),r(L,{modelValue:t(n),"onUpdate:modelValue":e[9]||(e[9]=l=>d(n)?n.value=l:null)},{default:m(()=>[u("div",_e,[u("button",{onClick:e[7]||(e[7]=l=>n.value=!1),class:"cancel"},"\u3044\u3044\u3048"),u("button",{onClick:e[8]||(e[8]=l=>U()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Ne as default};
