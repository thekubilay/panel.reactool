import{d as A,D as k,o as I,R as M,F as P,a as e,b as a,k as g,l as D,M as d,N as m,n as h,t as c,g as p,w as R,e as F,H as _,c as E,S as H,u as y,m as O,O as N,G as z}from"./vendor.js";import{u as G,a as L,D as Q,b as J,c as K,d as W}from"./FormQuery.js";import{S as X}from"./useFormRequestBuilder.js";import{b as Y}from"../main.js";const Z={key:0,class:"tabs flex align-center"},ee=["onClick"],ae=["onSubmit"],te={key:0,class:"label title-label"},se={class:"label flex"},le={key:0,class:"required flex align-start"},oe={key:1,class:"hint"},de=A({props:{modelValue:Boolean,loading:Boolean,selectedId:Number,activeTab:String,form:{type:Array,default:[]},onload:{type:String,default:""},progress:Number,tabs:Array},emits:["update:modelValue","update:response","update:payload","update:activeTab","update:form"],setup(n,{emit:S}){const f=n;Y();const{setDynamics:C}=J(),{setClear:x}=K(),{reform:v,setProps:U}=G(),{isElementValid:B}=W(),j=k(),r=k(!1),b=k(0);I(()=>{v.value=f.form,C(f.form.filter((o,s)=>s===b.value)).then(o=>{r.value=o})}),M(()=>{x(v.value),S("update:modelValue",!1)});const $=o=>{b.value=o,f.tabs&&S("update:activeTab",f.tabs[o])};return P(()=>b.value,o=>{r.value=!1,C(v.value).then(s=>{r.value=s})}),(o,s)=>(e(),a("div",{ref_key:"container",ref:j,id:"form"},[g(X,{modelValue:n.loading,"onUpdate:modelValue":s[0]||(s[0]=l=>D(loading)?loading.value=l:null),text:n.onload?n.onload:null},null,8,["modelValue","text"]),g(L,{id:"tpb",modelValue:n.progress,"onUpdate:modelValue":s[1]||(s[1]=l=>D(progress)?progress.value=l:null)},null,8,["modelValue"]),n.tabs?(e(),a("div",Z,[(e(!0),a(d,null,m(n.tabs,(l,u)=>(e(),a("button",{key:u,onClick:i=>$(u),class:h([{active:u===b.value},"tab flex align-center justify-center"])},c(l),11,ee))),128))])):p("",!0),g(Q,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=l=>r.value=l)},{default:R(()=>[F("form",{action:"",onSubmit:z(l=>!0,["prevent"])},[(e(!0),a(d,null,m(y(v),(l,u)=>(e(),a("div",{key:u},[(e(!0),a(d,null,m(l,(i,T)=>(e(),a("div",{key:T,class:h(["row",i.classes])},[i.elements[0].hasOwnProperty("title")?(e(),a("span",te,c(i.elements[0].title),1)):p("",!0),(e(!0),a(d,null,m(i.elements,(t,q)=>(e(),a("div",{key:q,class:h(t.classes)},[F("span",se,[_(c(t.label)+" ",1),t.required?(e(),a("span",le,"*\u5FC5\u9808")):p("",!0)]),t.component?(e(),E(O(t.component),H({key:0,id:t.id},y(U)(t),{modelValue:t.model,"onUpdate:modelValue":V=>t.model=V,class:["cfec column-1",{error:!y(B)(t).valid}]}),null,16,["id","modelValue","onUpdate:modelValue","class"])):p("",!0),(e(!0),a(d,null,m(y(B)(t).errors,(V,w)=>(e(),a("span",{key:w,class:"invalid block"},"*"+c(V),1))),128)),t.hint&&t.name!=="FileInput"?(e(),a("span",oe,c(t.hint),1)):p("",!0)],2))),128))],2))),128)),N(o.$slots,"default")]))),128)),N(o.$slots,"actions")],40,ae)]),_:3},8,["modelValue"])],512))}});export{de as _};