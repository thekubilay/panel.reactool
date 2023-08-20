import{D as J}from"./vuedraggable.umd.js";import{s as K}from"./menu.esm.js";import{_ as Q}from"./Dialog.js";import{S as W}from"./Spinner.js";import{_ as R}from"./Icon.js";import{_ as X}from"./DialogDelete.js";import{_ as Y}from"./ContextImagesThumbnailContainer.js";import{_ as Z}from"./FormQuery.js";import{a as ee,u as le}from"./useFormRequestBuilder.js";import{d as ae,A as se,u as ne,r as c,w as D,c as U,b as p,f as o,z as g,e as n,q as b,a2 as te,o as y,t as F,y as q,g as oe,F as ue,s as ie}from"../main.js";import{f as A}from"./FormSalonPlaces.js";import{u as de}from"./useRightClickHandler.js";import"./_commonjsHelpers.js";import"./portal.esm.js";import"./plugin-vue_export-helper.js";import"./rules.js";const re={id:"salon-map",class:"panel-board"},ce={class:"spreadsheet-wrapper overflow-y"},ve=te('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell handle flex align-center"></div><div class="sheet-cell num flex align-center">\u9806\u756A</div><div class="sheet-cell sheet-cell-long value flex align-center">\u65BD\u8A2D\u540D</div><div class="sheet-cell sheet-cell-long value flex align-center">\u4F4F\u6240</div><div class="sheet-cell value flex align-center">PIN</div><div class="sheet-cell value flex align-center">\u65BD\u8A2D\u753B\u50CF</div></div></div>',1),pe=["onClick","onContextmenu"],me=n("div",{class:"sheet-cell handle flex align-center justify-center grab"},[n("i",{class:"pi pi-bars"})],-1),_e={class:"sheet-cell num flex align-center"},fe={class:"sheet-cell sheet-cell-long value flex align-center"},ge={class:"context block"},he={class:"sheet-cell sheet-cell-long value flex align-center"},xe={class:"context block"},be={class:"sheet-cell sheet-value-cell flex align-center"},ye={class:"text block"},Ce={class:"sheet-cell sheet-value-cell flex align-center"},ke={class:"text flex"},Be={class:"button-wrapper flex justify-end"},Oe=ae({__name:"SalonPlaces",setup(Ve){var S;const{get:C,save:E}=se(),{d:i,dr:d,images:u,data:s,useToggle:$}=ee(),{submit:I,submitRowReorder:N,remove:k}=le(),{rcm:P,rcmOpened:T,isRCOn:j}=de(s),{payload:B,content:v,progress:H,salon:t}=ne(),m=c(!1),V=c("place_pin_image_input"),r=c(0),O=c(["\u5185\u5BB9","\u5834\u6240\u306E\u753B\u50CF"]),w=c(A),_=c(null),f=c((S=t.value)==null?void 0:S.map_places),z=c([{label:"\u65B0\u898F\u65BD\u8A2D",command:()=>{var a,e;u.value=[],_.value={id:null,order_id:null,salon:(a=t.value)==null?void 0:a.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},w.value=A,$({method:"post",endpoints:["salons_places","salons/"+((e=t.value)==null?void 0:e.id)],state:"salon"})}},{label:"\u884C\u3092\u8907\u88FD\u3059\u308B",command:()=>{var e;v.value=!0;const a={order_id:f.value?f.value.length+1:1,salon:(e=t.value)==null?void 0:e.id,show_directions:s.value.show_directions,type:s.value.type,place:s.value.place,address:s.value.address,context:s.value.context};E("salons_places",a).then(()=>{var l;C("salons/"+((l=t.value)==null?void 0:l.id),"salon").then(()=>{v.value=!1})})}},{label:"\u884C\u3092\u524A\u9664\u3059\u308B",command:()=>{var a;v.value=!0,k("salons_places/"+((a=s.value)==null?void 0:a.id)).then(()=>{var e;C("salons/"+((e=t.value)==null?void 0:e.id),"salon").then(()=>{v.value=!1})})}}]);function L(a){var e,l;T.value||(u.value=a.pin?[{image:a.pin}]:[],w.value=A,_.value={id:null,order_id:null,salon:(e=t.value)==null?void 0:e.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null},$({method:"patch",endpoints:["salons_places/"+a.id,"salons/"+((l=t.value)==null?void 0:l.id)],state:"salon"},a))}function M(a){var e;m.value=!0,B.value={method:"patch",endpoints:["salons_places/"+s.value.id,"salons/"+((e=t.value)==null?void 0:e.id)],state:"salon"},r.value===0?I({pin:null},null,"object").then(()=>{m.value=!1,u.value=[]}):r.value===1&&k("salons_places_images/"+a).then(()=>{m.value=!1,u.value=u.value.filter(l=>l.id!==a)})}function G(){var a;m.value=!0,k("salons_places/"+((a=s.value)==null?void 0:a.id)).then(()=>{var e;d.value=!1,C("salons/"+((e=t.value)==null?void 0:e.id),"salon").then(()=>{i.value=!1,m.value=!1})})}return D(()=>i.value,a=>{a||(r.value=0)}),D(()=>{var a;return(a=t.value)==null?void 0:a.map_places},a=>{f.value=a,a==null||a.forEach(e=>{var l;s.value&&s.value.id===e.id&&(s.value=e,r.value===0?u.value=e.pin?[{image:e.pin}]:[]:r.value===1&&(u.value=(l=e.map_place_images)!=null&&l.length?e.map_place_images:[]))})}),D(()=>r.value,a=>{var e,l,h;a===0?(B.value={method:"patch",endpoints:["salons_places/"+s.value.id,"salons/"+((e=t.value)==null?void 0:e.id)],state:"salon"},V.value="place_pin_image_input",u.value=s.value.pin?[{image:s.value.pin}]:[],_.value={id:null,order_id:null,salon:(l=t.value)==null?void 0:l.id,show_directions:!1,type:null,place:null,address:null,context:null,pin:null}):(B.value={method:"post",endpoints:["salons_places_images","salons/"+((h=t.value)==null?void 0:h.id)],state:"salon"},V.value="place_image_input",_.value={id:null,map_place:s.value.id,image:null,thumbnail:null},u.value=s.value.map_place_images?s.value.map_place_images:[])}),(a,e)=>(y(),U("div",re,[p(W,{modelValue:o(v),"onUpdate:modelValue":e[0]||(e[0]=l=>g(v)?v.value=l:null)},null,8,["modelValue"]),n("div",ce,[ve,p(o(J),{tag:"div",onEnd:e[1]||(e[1]=l=>o(N)({value:f.value},{method:"post",endpoints:["salons_places","salons"],state:"salons"})),list:f.value,class:"sb-container ss-container",handle:".handle","item-key":"id"},{item:b(({element:l,index:h})=>[n("div",{onClick:x=>L(l),onContextmenu:x=>o(j)(x,l),"aria-haspopup":"true","aria-controls":"plan_rc_menu",class:"sheet-row flex align-center list-group-item relative pointer"},[p(o(K),{id:"rc_menu",ref_key:"rcm",ref:P,class:"rc has-final-action",model:z.value,popup:!0},null,8,["model"]),me,n("div",_e,F(h+1),1),n("div",fe,[n("span",ge,F(l.place),1)]),n("div",he,[n("span",xe,F(l.address),1)]),n("div",be,[n("span",ye,[l.pin?(y(),q(R,{key:0,svg:"image"})):oe("",!0)])]),n("div",Ce,[n("span",ke,[(y(!0),U(ue,null,ie(l.map_place_images,x=>(y(),q(R,{style:{"margin-right":"5px"},key:x.id,svg:"image"}))),128))])])],40,pe)]),_:1},8,["list"])]),p(Q,{modelValue:o(i),"onUpdate:modelValue":e[8]||(e[8]=l=>g(i)?i.value=l:null),title:"\u65BD\u8A2D\u30D5\u30A9\u30FC\u30E0"},{default:b(()=>[p(Z,{modelValue:o(i),"onUpdate:modelValue":e[2]||(e[2]=l=>g(i)?i.value=l:null),dr:o(d),"onUpdate:dr":e[3]||(e[3]=l=>g(d)?d.value=l:null),activeTab:r.value,"onUpdate:activeTab":e[4]||(e[4]=l=>r.value=l),topProgress:"",tabs:O.value,progress:o(H),form:w.value,data:o(s),loading:m.value,query:_.value,remove:!0,submit:o(I)},{default:b(()=>[p(Y,{containerId:V.value,images:o(u),remove:M},null,8,["containerId","images"])]),_:1},8,["modelValue","dr","activeTab","tabs","progress","form","data","loading","query","submit"]),p(X,{modelValue:o(d),"onUpdate:modelValue":e[7]||(e[7]=l=>g(d)?d.value=l:null)},{default:b(()=>[n("div",Be,[n("button",{onClick:e[5]||(e[5]=l=>d.value=!1),class:"cancel"},"\u3044\u3044\u3048"),n("button",{onClick:e[6]||(e[6]=l=>G()),class:"delete"},"\u306F\u3044")])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});export{Oe as default};
