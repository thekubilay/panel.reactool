import{o as i}from"./useFormRequestBuilder.js";import{D as r}from"./vendor.js";function m(o){const e=r(null),t=r();return i(e,l=>{e.value&&t.value&&(e.value.toggle(),setTimeout(()=>{t.value=!1},100))}),{rcm:e,rcmOpened:t,isRCOn:(l,u)=>{l.preventDefault(),t.value=!0;try{e.value.toggle(l),setTimeout(()=>{e.value.container?(e.value.container.style.top=l.clientY+10+"px",e.value.container.style.left=l.clientX+"px",o.value=u):o.value=null},20)}catch(n){console.log("right click toggle error, probably *rcm is empty")}}}}export{m as u};