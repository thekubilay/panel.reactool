import{_ as d}from"./Icon.js";import{a as m,p as g,o as f,L as v,t as h,b as r,v as o,I as y,J as _,M as p,x as c,f as x,A as I}from"./vendor.js";const k=c("span",{class:"preview absolute"},"\u30D7\u30EC\u30D3\u30E5\u30FC",-1),C=["onClick"],B=m({props:{images:{type:Array,default:[]},remove:Function,containerId:String},setup(e){const n=e,a=g(null);function l(t=50){n.images.length&&n.containerId&&setTimeout(()=>{var i;a.value&&n.containerId&&a.value&&((i=document.getElementById(n.containerId))==null||i.children[0].appendChild(a.value))},t)}return f(()=>{v(),l()}),h(()=>n.images,t=>{t.length&&l(50)},{immediate:!0}),(t,i)=>e.images.length&&e.containerId?(r(),o("div",{key:0,ref_key:"thumbnails",ref:a,class:"context-thumbnails flex-wrap relative"},[k,(r(!0),o(y,null,_(e.images,(s,u)=>(r(),o("div",{key:u,style:p({backgroundImage:"url("+s.image+")"}),class:"image relative flex align-center justify-center"},[c("div",{onClick:b=>e.remove(s==null?void 0:s.id),class:"overlay flex align-center justify-center"},[x(d,{svg:"close",width:"20px"})],8,C)],4))),128))],512)):I("",!0)}});export{B as _};
