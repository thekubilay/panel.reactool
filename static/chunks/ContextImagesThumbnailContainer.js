import{_ as m}from"./Icon.js";import{d,r as g,l as f,B as v,w as h,c as r,F as _,s as y,g as C,e as c,o as l,C as x,b as p}from"../main.js";const I=c("span",{class:"preview absolute"},"\u30D7\u30EC\u30D3\u30E5\u30FC",-1),k=["onClick"],E=d({__name:"ContextImagesThumbnailContainer",props:{images:{type:Array,default:[]},remove:Function,containerId:String},setup(e){const n=e,a=g(null);function o(t=50){n.images.length&&n.containerId&&setTimeout(()=>{var s;a.value&&n.containerId&&a.value&&((s=document.getElementById(n.containerId))==null||s.children[0].appendChild(a.value))},t)}return f(()=>{v(),o()}),h(()=>n.images,t=>{t.length&&o(50)},{immediate:!0}),(t,s)=>e.images.length&&e.containerId?(l(),r("div",{key:0,ref_key:"thumbnails",ref:a,class:"context-thumbnails flex-wrap relative"},[I,(l(!0),r(_,null,y(e.images,(i,u)=>(l(),r("div",{key:u,style:x({backgroundImage:"url("+i.image+")"}),class:"image relative flex align-center justify-center"},[c("div",{onClick:b=>e.remove(i==null?void 0:i.id),class:"overlay flex align-center justify-center"},[p(m,{svg:"close",width:"20px"})],8,k)],4))),128))],512)):C("",!0)}});export{E as _};
