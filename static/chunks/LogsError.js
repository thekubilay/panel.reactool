import{_ as o}from"./BarTool.js";import{u as i}from"../main.js";import{a as r,q as l,f as d,w as u,x as e,F as _,E as h,t as v,W as p,B as f,b as a,A as t}from"./vendor.js";const x={id:"admin-app-routes",class:"admin-board"},g=e("div",{class:"part-wrap"},null,-1),m={class:"spreadsheet-wrapper overflow-x"},b=p('<div class="sh-container ss-container"><div class="sheet-row sheet-row-header flex align-center"><div class="sheet-cell num flex align-center">#</div><div class="sheet-cell value flex align-center">Method</div><div class="sheet-cell value flex align-center">\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8</div><div class="sheet-cell value flex align-center">\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9</div><div class="sheet-cell value sheet-cell-long flex align-center">\u539F\u56E0</div><div class="sheet-cell value flex align-center">\u767A\u751F\u65E5\u6642</div></div></div>',1),k={class:"sb-container ss-container"},w={class:"sheet-cell num flex align-center"},B={class:"text block"},F={class:"sheet-cell value flex align-center"},C={class:"text block"},j={class:"sheet-cell value flex align-center"},A={class:"text block"},E={class:"sheet-cell value flex align-center"},y={class:"text block"},D={class:"sheet-cell value sheet-cell-long flex align-center"},N={class:"text block"},S={class:"sheet-cell value flex align-center"},V={class:"text block"},$=r({setup(q){f();const{errors:c}=i();return(L,M)=>(a(),l("div",x,[d(o,{class:"justify-space-between"},{default:u(()=>[g]),_:1}),e("div",m,[b,e("div",k,[(a(!0),l(_,null,h(v(c),(s,n)=>(a(),l("div",{key:s.id,class:"sheet-row flex align-center relative pointer"},[e("div",w,[e("span",B,t(n+1),1)]),e("div",F,[e("span",C,t(s.method),1)]),e("div",j,[e("span",A,t(s.endpoint),1)]),e("div",E,[e("span",y,t(s.status),1)]),e("div",D,[e("span",N,t(s.problem),1)]),e("div",S,[e("span",V,t(s.created_at),1)])]))),128))])])]))}});export{$ as default};
