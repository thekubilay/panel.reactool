import{U as P,V as b,C as E,M as $,t as w}from"./vendor.js";function S(o){return P()?(b(o),!0):!1}const a=typeof window!="undefined",C=o=>typeof o=="string",c=()=>{};function v(o){var t;const e=w(o);return(t=e==null?void 0:e.$el)!=null?t:e}const _=a?window:void 0;a&&window.document;a&&window.navigator;a&&window.location;function m(...o){let t,e,r,i;if(C(o[0])?([e,r,i]=o,t=_):[t,e,r,i]=o,!t)return c;let l=c;const u=$(()=>w(t),n=>{l(),!!n&&(n.addEventListener(e,r,i),l=()=>{n.removeEventListener(e,r,i),l=c})},{immediate:!0,flush:"post"}),d=()=>{u(),l()};return S(d),d}function V(o,t,e={}){const{window:r=_}=e;if(!r)return;const i=E(!0),u=[m(r,"click",n=>{const s=v(o);!s||s===n.target||n.composedPath().includes(s)||!i.value||t(n)},{passive:!0,capture:!0}),m(r,"pointerdown",n=>{const s=v(o);i.value=!!s&&!n.composedPath().includes(s)},{passive:!0})];return()=>u.forEach(n=>n())}const p=typeof globalThis=="undefined"?void 0:globalThis,f="__vueuse_ssr_handlers__";p[f]=p[f]||{};p[f];var h,g;a&&(window==null?void 0:window.navigator)&&((h=window==null?void 0:window.navigator)==null?void 0:h.platform)&&/iP(ad|hone|od)/.test((g=window==null?void 0:window.navigator)==null?void 0:g.platform);var L=Object.defineProperty,y=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,O=(o,t,e)=>t in o?L(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,D=(o,t)=>{for(var e in t||(t={}))j.call(t,e)&&O(o,e,t[e]);if(y)for(var e of y(t))x.call(t,e)&&O(o,e,t[e]);return o};const I={top:0,left:0,bottom:0,right:0,height:0,width:0};D({text:""},I);export{V as o};