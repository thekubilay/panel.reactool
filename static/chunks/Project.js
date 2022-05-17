import{A as De,u as je,_ as Ee}from"../main.js";import{a as ke,p as Te,C as i,o as Pe,N as B,q,f as s,w as p,B as Ve,r as fe,b as C,x as o,t,F as Ie,E as qe,e as N,z as S,A as Ne,D as E,v as Fe,a4 as Se,a5 as Ue,T as $e,g as Le,S as U}from"./vendor.js";import{s as Re,a as k}from"./column.esm.js";import{_ as Oe}from"./BarTool.js";import{_ as Me}from"./ButtonDropdown.js";import{_ as He}from"./FormQuery.js";import{_ as Je}from"./ContextImagesThumbnailContainer.js";import{_ as ze}from"./FormNested.js";import{a as Qe,u as Ge}from"./useFormRequestBuilder.js";import{u as ge}from"./FormProject.js";import{u as be}from"./useUtils.js";import"./dropdown.esm.js";import"./overlayeventbus.esm.js";import"./virtualscroller.esm.js";import"./menu.esm.js";import"./Spinner.js";import"./plugin-vue_export-helper.js";import"./Icon.js";import"./rules.js";const Ke=[[{classes:["flex","justify-space-between"],elements:[{component:null,name:"InputText",db_column_name:"name",type:"text",model:null,label:"\u30C8\u30FC\u30AF\u30F3\u540D",hint:null,placeholder:"AAA\u304A\u5BA2\u69D8",required:!0,id:"token_input",rules:[],disabled:!1,props:["placeholder","required","disabled"],classes:["flex-column","column-2-space"]},{component:null,name:"Dropdown",db_column_name:"permanent",type:"text",model:!1,label:"\u6052\u4E45\u7684",hint:"\u300C\u306F\u3044\u300D\u306B\u3059\u308B\u3068\u3001\u671F\u9593\u30EA\u30DF\u30C3\u30C8\u306A\u3057\u306B\u306A\u308A\u307E\u3059",required:!1,rules:[],id:"master_token_input",disabled:!1,options:[{name:"\u306F\u3044",value:!0},{name:"\u3044\u3044\u3048",value:!1}],optionLabel:"name",optionValue:"value",placeholder:"\u6A29\u9650\u9078\u629E",appendTo:"body",props:["placeholder","required","disabled","options","optionLabel","optionValue","appendTo"],classes:["flex-column","column-2-space","relative"]}]},{classes:["flex","justify-space-between"],elements:[{component:null,name:"CalendarInput",db_column_name:"start_date",type:"text",model:new Date,label:"\u898B\u308B\u671F\u9593\u7D42\u958B\u59CB\u65E5",hint:null,placeholder:"null",required:!0,id:"start_date_input",rules:[],dateFormat:"yy\u5E74mm\u6708dd\u65E5",disabled:!1,appendTo:"self",props:["placeholder","required","disabled","dateFormat","appendTo"],classes:["flex-column","column-2-space"]},{component:null,name:"CalendarInput",db_column_name:"end_date",type:"text",model:new Date,label:"\u898B\u308B\u671F\u9593\u7D42\u4E86\u65E5",hint:null,placeholder:"null",required:!0,id:"end_date_input",rules:[],dateFormat:"yy\u5E74mm\u6708dd\u65E5",appendTo:"self",disabled:!1,props:["placeholder","required","disabled","dateFormat","appendTo"],classes:["flex-column","column-2-space"]}]}]];const We={id:"project"},Xe={class:"part-wrap flex align-center relative"},Ye=["innerHTML"],Ze=["href"],eu=o("span",{class:"divider"},null,-1),uu={class:"part-wrap flex align-center"},lu={key:0,class:"token-dialog"},au={class:"window"},tu=o("h4",{class:"title"},"\u65B0\u898F\u30C8\u30FC\u30AF\u30F3",-1),ou={class:"copy-container relative"},nu=o("p",{class:"warning-text"},[S(" *\u4F5C\u6210\u3055\u308C\u305F\u30C8\u30FC\u30AF\u30F3\u306F\u3001\u30C8\u30FC\u30AF\u30F3\u540D\u3068\u65E5\u4ED8\u542B\u3081\u3066API\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002"),o("br"),S(" **\u3053\u3061\u3089\u306E\u30C8\u30FC\u30AF\u30F3\u304B\u3089\u6A29\u9650\u3092\u5916\u3057\u305F\u3044\u5834\u5408\u3001\u4E00\u89A7\u304B\u3089\u6D88\u3057\u3066\u304F\u3060\u3055\u3044\u3002")],-1),su={class:"action-wrapper flex justify-end"},iu=["onClick"],ru=o("i",{class:"pi pi-times"},null,-1),du=[ru],Pu=ke({setup(vu){var z;const $=Te(()=>Ee(()=>import("./Dialog.js").then(function(u){return u.D}),["chunks/Dialog.js","assets/Dialog.css","chunks/vendor.js"])),{get:Ce}=De(),{submit:T,remove:he}=Qe(),{payload:Ae,user:h,project:e,progress:pu,onload:D}=je(),{checkPermission:L,findAndUpdateFormElement:R}=be(),{d:F,d2:g,dpc:A,data:O,images:m,useToggle:M}=Ge(),{copyText:ye}=be(),H=i("https://test.reactool.jp/"+((z=e.value)==null?void 0:z.id)),we=Ve(),y=i(null),w=i(""),P=i(""),c=i(ge),_=i(!1),r=i(0),V=i("pin_input"),b=i([]),j=i(["\u8A73\u7D30","\u8A2D\u5B9A","\u5730\u56F3\u306E\u30D4\u30F3","\u30ED\u30B4\u753B\u50CF"]),f=i({}),I=i([{label:"\u7DE8\u96C6",icon:"pi pi-pencil",command:()=>{var u,l,n;D.value="",P.value=((u=e.value)==null?void 0:u.name)||"",j.value=["\u8A73\u7D30","\u8A2D\u5B9A","\u5730\u56F3\u306E\u30D4\u30F3","\u30ED\u30B4\u753B\u50CF"],c.value=ge,!L((l=e.value)==null?void 0:l.permissions,"is_token")&&!((n=h.value)==null?void 0:n.is_superuser)?c.value=R(c.value,"token_on","disabled",!0,1):c.value=R(c.value,"token_on","disabled",!1,1),f.value={id:null,name:null,company:null},U(()=>{var v,a;M({method:"patch",endpoints:["projects/"+((v=e.value)==null?void 0:v.id),"project_details/"+((a=e.value)==null?void 0:a.id)],state:"project"},e.value)})}},{label:"API\u30C8\u30FC\u30AF\u30F3\u4F5C\u6210",icon:"pi pi-unlock",command:()=>{var u;D.value="\u30C8\u30FC\u30AF\u30F3\u4F5C\u6210\u4E2D",P.value="\u30C8\u30FC\u30AF\u30F3",j.value=[],f.value={project:(u=e.value)==null?void 0:u.id},c.value=Ke,c.value[0][1].elements[0].model=new Date,c.value[0][1].elements[1].model=new Date,U(()=>{var l;M({method:"post",endpoints:["project_api_tokens","project_details/"+((l=e.value)==null?void 0:l.id)],state:"project"})})}},{label:"API\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7",icon:"pi pi-list",command:()=>{g.value=!0}},{label:"JSON \u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",icon:"pi pi-database",command:()=>{var u;window.open("https://test-panel.reactool.jp/api/project_details/"+((u=e.value)==null?void 0:u.id)+"/?format=json","_blank")}}]);Pe(()=>{var u;L((u=e.value)==null?void 0:u.permissions,"is_token")||(I.value=I.value.filter(l=>!["API\u30C8\u30FC\u30AF\u30F3\u4F5C\u6210","API\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7"].includes(l.label))),J()});function J(){var u,l,n,v,a;b.value=JSON.parse(JSON.stringify(((u=e.value)==null?void 0:u.routes)||[])).filter(d=>d.active).filter(d=>!["Frame1","Frame2"].includes(d.component)),(((l=h.value)==null?void 0:l.is_staff)||((n=h.value)==null?void 0:n.is_superuser))&&(b.value.unshift({panel_name:"ProjectRoutes",title:"\u30EB\u30FC\u30C8"}),b.value.unshift({panel_name:"ProjectScopePermissions",title:"\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3"})),!((v=h.value)==null?void 0:v.company_owner)&&((a=h.value)==null?void 0:a.company)===29499988&&(b.value=b.value.filter(d=>!["ColorSimulator","Plans","VistaSimulator"].includes(d.name)))}function xe(){var u;_.value=!0,Ae.value={method:"patch",endpoints:["projects/"+O.value.id,"project_details/"+((u=e.value)==null?void 0:u.id)],state:"project"},r.value===2?T({pin:null},null,"object").then(()=>{_.value=!1,m.value=[]}):r.value===3&&T({logo:null},null,"object").then(()=>{_.value=!1,m.value=[]})}function Be(u){_.value=!0,he("project_api_tokens/"+u).then(()=>{var l;Ce("project_details/"+((l=e.value)==null?void 0:l.id),"project").then(()=>{setTimeout(()=>{_.value=!1},500)})})}return B(()=>e.value,u=>{J(),H.value="https://test.reactool.jp/"+(u==null?void 0:u.id),r.value===2?m.value=(u==null?void 0:u.pin)?[{image:u.pin}]:[]:r.value===3&&(m.value=(u==null?void 0:u.logo)?[{image:u.logo}]:[])}),B(()=>y.value,u=>{u&&f.value.hasOwnProperty("project")&&(D.value="encryption \u30B9\u30BF\u30FC\u30C8",_.value=!0,setTimeout(()=>{var n;const l="https://test.reactool.jp/";w.value=l+((n=e.value)==null?void 0:n.id)+"/?token="+u.token_id,_.value=!1,U(()=>{A.value=!0})},2e3))}),B(()=>F.value,u=>{u||(A.value=!1,r.value=0,w.value="",y.value=null)}),B(()=>A.value,u=>{u||(w.value="",y.value=null)}),B(()=>r.value,u=>{var l,n,v,a,d,x,Q,G,K,W,X,Y,Z,ee,ue,le,ae,te,oe,ne,se,ie,re,de,ve,pe,me,ce,_e;u===0?(m.value=[],f.value={id:null,order_id:null,name:(l=e.value)==null?void 0:l.name,context:(n=e.value)==null?void 0:n.context,address:(v=e.value)==null?void 0:v.address,archive:(a=e.value)==null?void 0:a.archive,token_on:(d=e.value)==null?void 0:d.token_on,salon_view:(x=e.value)==null?void 0:x.salon_view,legacy:(Q=e.value)==null?void 0:Q.legacy,tab_logo_view:(G=e.value)==null?void 0:G.tab_logo_view,tab_logo_text:(K=e.value)==null?void 0:K.tab_logo_text}):u===1?(m.value=[],f.value={salon:(W=e.value)==null?void 0:W.salon,salon_view:(X=e.value)==null?void 0:X.salon_view,archive:(Y=e.value)==null?void 0:Y.archive,token_on:(Z=e.value)==null?void 0:Z.token_on,tab_logo_view:(ee=e.value)==null?void 0:ee.tab_logo_view,tab_logo_text:(ue=e.value)==null?void 0:ue.tab_logo_text}):u===2?(f.value={logo:null,logo_width:null,logo_height:null,logo_place:3,archive:(le=e.value)==null?void 0:le.archive,token_on:(ae=e.value)==null?void 0:ae.token_on,salon_view:(te=e.value)==null?void 0:te.salon_view,legacy:(oe=e.value)==null?void 0:oe.legacy,tab_logo_view:(ne=e.value)==null?void 0:ne.tab_logo_view,tab_logo_text:(se=e.value)==null?void 0:se.tab_logo_text},m.value=((ie=e.value)==null?void 0:ie.pin)?[{image:e.value.pin}]:[],V.value="pin_input"):u===3&&(f.value={pin:null,pin_width:(re=e.value)==null?void 0:re.pin_width,pin_height:(de=e.value)==null?void 0:de.pin_height,archive:(ve=e.value)==null?void 0:ve.archive,token_on:(pe=e.value)==null?void 0:pe.token_on,salon_view:(me=e.value)==null?void 0:me.salon_view,legacy:(ce=e.value)==null?void 0:ce.legacy},m.value=((_e=e.value)==null?void 0:_e.logo)?[{image:e.value.logo}]:[],V.value="logo_input")}),(u,l)=>{const n=fe("router-link"),v=fe("router-view");return C(),q("div",We,[s(Oe,null,{default:p(()=>[o("div",Xe,[o("h3",{class:"title",innerHTML:t(e).name},null,8,Ye),s(Me,{id:"project_setting",items:I.value},null,8,["items"]),o("a",{style:{"margin-left":"5px",color:"#2ecc71"},target:"_blank",href:H.value},"APP\u3078",8,Ze)]),eu,o("div",uu,[(C(!0),q(Ie,null,qe(b.value,(a,d)=>{var x;return C(),N(n,{key:d,class:"pn-item flex align-center justify-center","active-class":"active",to:{name:a==null?void 0:a.panel_name,params:{dynid:(x=t(we))==null?void 0:x.params.dynid}}},{default:p(()=>[S(Ne(a==null?void 0:a.title.replace("<br>","")),1)]),_:2},1032,["to"])}),128))]),s(t($),{modelValue:t(F),"onUpdate:modelValue":l[6]||(l[6]=a=>E(F)?F.value=a:null),title:P.value.replaceAll("<br>",""),overflow:j.value.length>0&&r.value===3},{default:p(()=>[s(He,{modelValue:t(F),"onUpdate:modelValue":l[0]||(l[0]=a=>E(F)?F.value=a:null),response:y.value,"onUpdate:response":l[1]||(l[1]=a=>y.value=a),activeTab:r.value,"onUpdate:activeTab":l[2]||(l[2]=a=>r.value=a),onload:t(D),tabs:j.value,form:c.value,data:t(O),loading:_.value,query:f.value,submit:t(T)},{default:p(()=>[r.value===2||r.value===3?(C(),N(Je,{key:0,containerId:V.value,images:t(m),remove:xe},null,8,["containerId","images"])):Fe("",!0)]),_:1},8,["modelValue","response","activeTab","onload","tabs","form","data","loading","query","submit"]),t(A)?(C(),q("div",lu,[o("div",au,[tu,o("div",ou,[Se(o("input",{id:"token_text",type:"text",disabled:"","onUpdate:modelValue":l[3]||(l[3]=a=>w.value=a)},null,512),[[Ue,w.value]]),o("i",{onClick:l[4]||(l[4]=a=>t(ye)("token_text")),class:"pi pi-copy flex align-center justify-center"})]),nu,o("div",su,[o("button",{onClick:l[5]||(l[5]=a=>A.value=!1)},"\u9589\u3058\u308B")])])])):Fe("",!0)]),_:1},8,["modelValue","title","overflow"]),s(t($),{modelValue:t(g),"onUpdate:modelValue":l[8]||(l[8]=a=>E(g)?g.value=a:null),title:"API\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7",overflow:""},{default:p(()=>[s(ze,{modelValue:t(g),"onUpdate:modelValue":l[7]||(l[7]=a=>E(g)?g.value=a:null),form:[[]],loading:_.value},{default:p(()=>[s(t(Re),{value:t(e).api_tokens,rowindex:"index",style:{"padding-bottom":"14px"},responsiveLayout:"scroll",class:"option-datatable"},{default:p(()=>[s(t(k),{field:"name",header:"\u30C8\u30FC\u30AF\u30F3\u540D"}),s(t(k),{field:"start_date",header:"\u958B\u59CB\u65E5"}),s(t(k),{field:"end_date",header:"\u7D42\u4E86\u65E5"}),s(t(k),{style:{width:"40px","text-align":"right","margin-left":"auto"},body:"index"},{body:p(a=>[o("span",{onClick:d=>Be(a.data.id),class:"remove pointer"},du,8,iu)]),_:1})]),_:1},8,["value"])]),_:1},8,["modelValue","loading"])]),_:1},8,["modelValue"])]),_:1}),s(v,null,{default:p(({Component:a})=>[s($e,{name:"fade",mode:"out-in"},{default:p(()=>[(C(),N(Le(a)))]),_:2},1024)]),_:1})])}}});export{Pu as default};
