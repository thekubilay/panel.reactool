import{d as r,D as u,a as c,b as d,k as l,u as n,U as p,n as m}from"./vendor.js";import{s as f}from"./menu.esm.js";const y={class:"button-dropdown"},h=r({props:{id:{type:String,default:"drop_menu"},iconPos:{type:String,default:"right"},label:{type:String,default:""},items:{type:Array,default:[]},final:{type:Boolean,default:!1}},setup(e){const s=e,o=u(null),i=t=>{o.value.toggle(t),o.value.target&&setTimeout(()=>{const a=document.getElementById(s.id);a&&(a.style.top=(t==null?void 0:t.pageY)+20+"px",a.style.borderRadius="0")},30)};return(t,a)=>(c(),d("div",y,[l(n(p),{type:"button",label:e.label,onClick:i,icon:"pi pi-caret-down","icon-pos":e.iconPos,"aria-haspopup":"true","aria-controls":e.id},null,8,["label","icon-pos","aria-controls"]),l(n(f),{id:e.id,class:m({"has-final-action":e.final}),ref_key:"menu",ref:o,model:e.items,popup:!0},null,8,["id","class","model"])]))}});export{h as _};
