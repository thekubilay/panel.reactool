import{a as i,b as s,e as l,w as d,v as r,x as t,K as c,y as u,M as p,A as _,T as h,W as f,X as m}from"./vendor.js";import{_ as x}from"./plugin-vue_export-helper.js";const o=e=>(f("data-v-1ab03652"),e=e(),m(),e),g=o(()=>t("div",{class:"blur"},null,-1)),v={class:"spinner-wrapper"},y=o(()=>t("div",{class:"spinner-icon"},null,-1)),S={class:"spinner-text"},b=i({props:{modelValue:Boolean,bg:{type:Boolean},text:{type:String,default:"\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0"},fixed:{type:Boolean,default:!1},height:{type:String,default:"100%"},width:{type:String,default:"100%"}},setup(e){const a=e,n=()=>"width: "+a.width+"; height: "+a.height+";";return(B,w)=>(s(),l(h,{name:"fade"},{default:d(()=>[e.modelValue?(s(),r("div",{key:0,class:u(["loader",{fixed:e.fixed,absolute:!e.fixed,bg:e.bg}]),style:p(n())},[g,t("div",v,[y,t("p",S,c(e.text),1)])],6)):_("",!0)]),_:1}))}});var I=x(b,[["__scopeId","data-v-1ab03652"]]);export{I as S};