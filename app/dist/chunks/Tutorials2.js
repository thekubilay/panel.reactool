import{_ as C}from"./BarTool.js";import{u as w}from"../main.js";import{_ as m}from"./Icon.js";import{_ as j}from"./plugin-vue_export-helper.js";import{a as B,p as d,t as D,o as I,v as a,x as e,z as l,e as v,w as T,A as p,I as x,J as g,W as S,X as A,b as o,C as E,K as c,y as $}from"./vendor.js";const N=r=>(S("data-v-7ee59ab2"),r=r(),A(),r),V={id:"tutorials",class:"panel-board flex align-start"},z={class:"content part"},F={class:"part-wrap"},J={class:"title"},K={class:"sub-title block"},L={key:1,controls:"",class:"pointer"},M=["src"],P=N(()=>e("div",{class:"tabs"},null,-1)),W={class:"sidebar part"},X={class:"button-wrapper flex align-center justify-center"},q=["onClick"],G={class:"tutorials-by-type"},H=["onClick"],O={class:"num"},Q={class:"context"},R={class:"title block"},U={class:"summary flex align-center"},Y=B({setup(r){const{tutorials:h}=w(),t=d(),i=d("\u30D1\u30CD\u30EB"),n=d([]),b=d(["\u30D1\u30CD\u30EB","\u30A2\u30D7\u30EA","API"]),f=()=>{n.value.length&&(t.value=n.value[0]),console.log(t.value)};return D(i,u=>{n.value=h.value.filter(y=>y.type===u)||[],f()}),I(()=>{n.value=h.value.filter(u=>u.type===i.value)||[],f()}),(u,y)=>(o(),a("div",V,[e("div",z,[l(t)?(o(),v(C,{key:0,class:"justify-space-between"},{default:T(()=>[e("div",F,[e("h4",J,[E(c(l(t).title)+" ",1),e("span",K,c(l(t).sub_title),1)])])]),_:1})):p("",!0),l(t)&&l(t).video?(o(),a("video",L,[e("source",{src:l(t).video,type:"video/mp4"},null,8,M)])):p("",!0),P]),e("div",W,[e("div",X,[(o(!0),a(x,null,g(b.value,(s,_)=>(o(),a("button",{key:_,onClick:k=>i.value=s,class:$([{active:i.value===s},"flex align-center justify-center"])},c(s),11,q))),128))]),e("ul",G,[(o(!0),a(x,null,g(n.value,(s,_)=>(o(),a("li",{class:"flex pointer",key:_,onClick:k=>t.value=s},[e("span",O,c(_+1)+".",1),e("div",Q,[e("span",R,c(s.title),1),e("span",U,[s.video?(o(),v(m,{key:0,class:"relative",svg:"video",width:"25px",height:"25px"})):p("",!0),s.pdf&&s.pdf.length?(o(),v(m,{key:1,svg:"pdf2",width:"22px",height:"22px"})):p("",!0)])])],8,H))),128))])])]))}});var ae=j(Y,[["__scopeId","data-v-7ee59ab2"]]);export{ae as default};
