import{u as l}from"../main.js";import{a as i,b as c,q as r,x as e,A as u,K as _}from"./vendor.js";const d={class:"notify-top-bar flex align-center relative"},p=e("div",{class:"icon flex align-center"},"\u{1F4CB}",-1),f={class:"content"},m={class:"title"},v=e("i",{class:"pi pi-times"},null,-1),C=[v],g=i({props:{modelValue:Boolean,title:{type:String,default:"\u30A2\u30C3\u30D7\u30FC\u30C7\u30FC\u30C8"}},setup(s){const{notifyTopBar:o}=l(),n=()=>{o.value=!1};return(a,t)=>(c(),r("div",d,[p,e("div",f,[e("h3",m,u(s.title),1),_(a.$slots,"default")]),e("button",{class:"close",onClick:t[0]||(t[0]=y=>n())},C)]))}});export{g as default};