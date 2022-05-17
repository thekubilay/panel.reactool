var B=Object.defineProperty;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var I=(e,i,t)=>i in e?B(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,D=(e,i)=>{for(var t in i||(i={}))z.call(i,t)&&I(e,t,i[t]);if(k)for(var t of k(i))E.call(i,t)&&I(e,t,i[t]);return e};import{Z as L,Y as c,_ as f,$ as H,a0 as F,a1 as N,r as P,a2 as U,b as o,e as a,f as p,v as b,K as u,z as g,A as v,a3 as j,w as V,a4 as C,a5 as A,R as W,a6 as q,F as O,E as S,T as Z}from"./vendor.js";import{O as Y}from"./overlayeventbus.esm.js";import{s as J}from"./virtualscroller.esm.js";var Q={name:"Dropdown",emits:["update:modelValue","before-show","before-hide","show","hide","change","filter","focus","blur"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:String,disabled:Boolean,dataKey:null,showClear:Boolean,inputId:String,tabindex:String,ariaLabelledBy:null,appendTo:{type:String,default:"body"},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},panelClass:null,loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},virtualScrollerOptions:{type:Object,default:null}},data(){return{focused:!1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0}},outsideClickListener:null,scrollHandler:null,resizeListener:null,searchTimeout:null,currentSearchChar:null,previousSearchChar:null,searchValue:null,overlay:null,itemsWrapper:null,virtualScroller:null,isModelValueChanged:!1,updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollValueInView(),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.itemsWrapper=null,this.overlay&&(L.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel(e){return this.optionLabel?c.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?c.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?c.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?c.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupRenderKey(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return c.resolveFieldData(e,this.optionGroupChildren)},getSelectedOption(){let e=this.getSelectedOptionIndex();return e!==-1?this.optionGroupLabel?this.getOptionGroupChildren(this.visibleOptions[e.group])[e.option]:this.visibleOptions[e]:null},getSelectedOptionIndex(){if(this.modelValue!=null&&this.visibleOptions)if(this.optionGroupLabel)for(let e=0;e<this.visibleOptions.length;e++){let i=this.findOptionIndexInList(this.modelValue,this.getOptionGroupChildren(this.visibleOptions[e]));if(i!==-1)return{group:e,option:i}}else return this.findOptionIndexInList(this.modelValue,this.visibleOptions);return-1},findOptionIndexInList(e,i){for(let t=0;t<i.length;t++)if(c.equals(e,this.getOptionValue(i[t]),this.equalityKey))return t;return-1},isSelected(e){return c.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)},onKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break;default:this.search(e);break}},onFilterKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 13:case 27:this.overlayVisible=!1,e.preventDefault();break}},onDownKey(e){if(this.visibleOptions)if(!this.overlayVisible&&e.altKey)this.show();else{let i=this.visibleOptions&&this.visibleOptions.length>0?this.findNextOption(this.getSelectedOptionIndex()):null;i&&this.updateModel(e,this.getOptionValue(i))}e.preventDefault()},onUpKey(e){if(this.visibleOptions){let i=this.findPrevOption(this.getSelectedOptionIndex());i&&this.updateModel(e,this.getOptionValue(i))}e.preventDefault()},findNextOption(e){if(this.optionGroupLabel){let i=e===-1?0:e.group,t=e===-1?-1:e.option,n=this.findNextOptionInList(this.getOptionGroupChildren(this.visibleOptions[i]),t);return n||(i+1!==this.visibleOptions.length?this.findNextOption({group:i+1,option:-1}):null)}else return this.findNextOptionInList(this.visibleOptions,e)},findNextOptionInList(e,i){let t=i+1;if(t===e.length)return null;let n=e[t];return this.isOptionDisabled(n)?this.findNextOptionInList(t):n},findPrevOption(e){if(e===-1)return null;if(this.optionGroupLabel){let i=e.group,t=e.option,n=this.findPrevOptionInList(this.getOptionGroupChildren(this.visibleOptions[i]),t);return n||(i>0?this.findPrevOption({group:i-1,option:this.getOptionGroupChildren(this.visibleOptions[i-1]).length}):null)}else return this.findPrevOptionInList(this.visibleOptions,e)},findPrevOptionInList(e,i){let t=i-1;if(t<0)return null;let n=e[t];return this.isOptionDisabled(n)?this.findPrevOption(t):n},onClearClick(e){this.updateModel(e,null)},onClick(e){this.disabled||this.loading||f.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus())},onOptionSelect(e,i){let t=this.getOptionValue(i);this.updateModel(e,t),this.$refs.focusInput.focus(),setTimeout(()=>{this.hide()},200)},onEditableInput(e){this.$emit("update:modelValue",e.target.value)},onOverlayEnter(e){if(L.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.scrollValueInView(),this.filter&&this.$refs.filterInput.focus(),!this.virtualScrollerDisabled){const i=this.getSelectedOptionIndex();i!==-1&&this.virtualScroller.scrollToIndex(i)}this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.itemsWrapper=null,this.overlay=null},onOverlayAfterLeave(e){L.clear(e)},alignOverlay(){this.appendDisabled?f.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=f.getOuterWidth(this.$el)+"px",f.absolutePosition(this.overlay,this.$el))},updateModel(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new H(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!f.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},search(e){if(!this.visibleOptions)return;this.searchTimeout&&clearTimeout(this.searchTimeout);const i=e.key;if(this.previousSearchChar=this.currentSearchChar,this.currentSearchChar=i,this.previousSearchChar===this.currentSearchChar?this.searchValue=this.currentSearchChar:this.searchValue=this.searchValue?this.searchValue+i:i,this.searchValue){let t=this.getSelectedOptionIndex(),n=this.optionGroupLabel?this.searchOptionInGroup(t):this.searchOption(++t);n&&this.updateModel(e,this.getOptionValue(n))}this.searchTimeout=setTimeout(()=>{this.searchValue=null},250)},searchOption(e){let i;return this.searchValue&&(i=this.searchOptionInRange(e,this.visibleOptions.length),i||(i=this.searchOptionInRange(0,e))),i},searchOptionInRange(e,i){for(let t=e;t<i;t++){let n=this.visibleOptions[t];if(this.matchesSearchValue(n))return n}return null},searchOptionInGroup(e){let i=e===-1?{group:0,option:-1}:e;for(let t=i.group;t<this.visibleOptions.length;t++){let n=this.getOptionGroupChildren(this.visibleOptions[t]);for(let r=i.group===t?i.option+1:0;r<n.length;r++)if(this.matchesSearchValue(n[r]))return n[r]}for(let t=0;t<=i.group;t++){let n=this.getOptionGroupChildren(this.visibleOptions[t]);for(let r=0;r<(i.group===t?i.option:n.length);r++)if(this.matchesSearchValue(n[r]))return n[r]}return null},matchesSearchValue(e){return this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},onFilterChange(e){this.$emit("filter",{originalEvent:e,value:e.target.value})},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},overlayRef(e){this.overlay=e},itemsWrapperRef(e){this.itemsWrapper=e},virtualScrollerRef(e){this.virtualScroller=e},scrollValueInView(){if(this.overlay){let e=f.findSingle(this.overlay,"li.p-highlight");e&&e.scrollIntoView({block:"nearest",inline:"start"})}},onOverlayClick(e){Y.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{visibleOptions(){if(this.filterValue)if(this.optionGroupLabel){let e=[];for(let i of this.options){let t=F.filter(this.getOptionGroupChildren(i),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(t&&t.length){let n=D({},i);n[this.optionGroupChildren]=t,e.push(n)}}return e}else return F.filter(this.options,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);else return this.options},containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible}]},labelClass(){return["p-dropdown-label p-inputtext",{"p-placeholder":this.label===this.placeholder,"p-dropdown-label-empty":!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},label(){let e=this.getSelectedOption();return e!==null?this.getOptionLabel(e):this.placeholder||"p-emptylabel"},editableInputValue(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.modelValue},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},appendDisabled(){return this.appendTo==="self"},virtualScrollerDisabled(){return!this.virtualScrollerOptions},appendTarget(){return this.appendDisabled?null:this.appendTo},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]}},directives:{ripple:N},components:{VirtualScroller:J}};const X={class:"p-hidden-accessible"},_={key:0,class:"p-dropdown-header"},$={class:"p-dropdown-filter-container"},ee=p("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),ie={class:"p-dropdown-item-group"},te={key:2,class:"p-dropdown-empty-message"},le={key:3,class:"p-dropdown-empty-message"};function ne(e,i,t,n,r,l){const G=P("VirtualScroller"),x=U("ripple");return o(),a("div",{ref:"container",class:l.containerClass,onClick:i[13]||(i[13]=s=>l.onClick(s))},[p("div",X,[p("input",{ref:"focusInput",type:"text",id:t.inputId,readonly:"",disabled:t.disabled,onFocus:i[1]||(i[1]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:i[2]||(i[2]=(...s)=>l.onBlur&&l.onBlur(...s)),onKeydown:i[3]||(i[3]=(...s)=>l.onKeyDown&&l.onKeyDown(...s)),tabindex:t.tabindex,"aria-haspopup":"true","aria-expanded":r.overlayVisible,"aria-labelledby":t.ariaLabelledBy},null,40,["id","disabled","tabindex","aria-expanded","aria-labelledby"])]),t.editable?(o(),a("input",{key:0,type:"text",class:"p-dropdown-label p-inputtext",disabled:t.disabled,onFocus:i[4]||(i[4]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:i[5]||(i[5]=(...s)=>l.onBlur&&l.onBlur(...s)),placeholder:t.placeholder,value:l.editableInputValue,onInput:i[6]||(i[6]=(...s)=>l.onEditableInput&&l.onEditableInput(...s)),"aria-haspopup":"listbox","aria-expanded":r.overlayVisible},null,40,["disabled","placeholder","value","aria-expanded"])):b("",!0),t.editable?b("",!0):(o(),a("span",{key:1,class:l.labelClass},[u(e.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},()=>[g(v(l.label||"empty"),1)])],2)),t.showClear&&t.modelValue!=null?(o(),a("i",{key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:i[7]||(i[7]=s=>l.onClearClick(s))})):b("",!0),p("div",{class:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":r.overlayVisible},[u(e.$slots,"indicator",{},()=>[p("span",{class:l.dropdownIconClass},null,2)])],8,["aria-expanded"]),(o(),a(j,{to:l.appendTarget,disabled:l.appendDisabled},[p(Z,{name:"p-connected-overlay",onEnter:l.onOverlayEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},{default:V(()=>[r.overlayVisible?(o(),a("div",{key:0,ref:l.overlayRef,class:l.panelStyleClass,onClick:i[12]||(i[12]=(...s)=>l.onOverlayClick&&l.onOverlayClick(...s))},[u(e.$slots,"header",{value:t.modelValue,options:l.visibleOptions}),t.filter?(o(),a("div",_,[p("div",$,[C(p("input",{type:"text",ref:"filterInput","onUpdate:modelValue":i[8]||(i[8]=s=>r.filterValue=s),onVnodeUpdated:i[9]||(i[9]=(...s)=>l.onFilterUpdated&&l.onFilterUpdated(...s)),autoComplete:"off",class:"p-dropdown-filter p-inputtext p-component",placeholder:t.filterPlaceholder,onKeydown:i[10]||(i[10]=(...s)=>l.onFilterKeyDown&&l.onFilterKeyDown(...s)),onInput:i[11]||(i[11]=(...s)=>l.onFilterChange&&l.onFilterChange(...s))},null,40,["placeholder"]),[[A,r.filterValue]]),ee])])):b("",!0),p("div",{ref:l.itemsWrapperRef,class:"p-dropdown-items-wrapper",style:{"max-height":l.virtualScrollerDisabled?t.scrollHeight:""}},[p(G,W({ref:l.virtualScrollerRef},t.virtualScrollerOptions,{items:l.visibleOptions,style:{height:t.scrollHeight},disabled:l.virtualScrollerDisabled}),q({content:V(({styleClass:s,contentRef:K,items:y,getItemOptions:m,contentStyle:M})=>[p("ul",{ref:K,class:["p-dropdown-items",s],style:M,role:"listbox"},[t.optionGroupLabel?(o(!0),a(O,{key:1},S(y,(d,w)=>(o(),a(O,{key:l.getOptionGroupRenderKey(d)},[p("li",ie,[u(e.$slots,"optiongroup",{option:d,index:l.getOptionIndex(w,m)},()=>[g(v(l.getOptionGroupLabel(d)),1)])]),(o(!0),a(O,null,S(l.getOptionGroupChildren(d),(h,T)=>C((o(),a("li",{class:["p-dropdown-item",{"p-highlight":l.isSelected(h),"p-disabled":l.isOptionDisabled(h)}],key:l.getOptionRenderKey(h),onClick:R=>l.onOptionSelect(R,h),role:"option","aria-label":l.getOptionLabel(h),"aria-selected":l.isSelected(h)},[u(e.$slots,"option",{option:h,index:l.getOptionIndex(T,m)},()=>[g(v(l.getOptionLabel(h)),1)])],10,["onClick","aria-label","aria-selected"])),[[x]])),128))],64))),128)):(o(!0),a(O,{key:0},S(y,(d,w)=>C((o(),a("li",{class:["p-dropdown-item",{"p-highlight":l.isSelected(d),"p-disabled":l.isOptionDisabled(d)}],key:l.getOptionRenderKey(d),onClick:h=>l.onOptionSelect(h,d),role:"option","aria-label":l.getOptionLabel(d),"aria-selected":l.isSelected(d)},[u(e.$slots,"option",{option:d,index:l.getOptionIndex(w,m)},()=>[g(v(l.getOptionLabel(d)),1)])],10,["onClick","aria-label","aria-selected"])),[[x]])),128)),r.filterValue&&(!y||y&&y.length===0)?(o(),a("li",te,[u(e.$slots,"emptyfilter",{},()=>[g(v(l.emptyFilterMessageText),1)])])):!t.options||t.options&&t.options.length===0?(o(),a("li",le,[u(e.$slots,"empty",{},()=>[g(v(l.emptyMessageText),1)])])):b("",!0)],6)]),_:2},[e.$slots.loader?{name:"loader",fn:V(({options:s})=>[u(e.$slots,"loader",{options:s})])}:void 0]),1040,["items","style","disabled"])],4),u(e.$slots,"footer",{value:t.modelValue,options:l.visibleOptions})],2)):b("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],2)}function se(e,i){i===void 0&&(i={});var t=i.insertAt;if(!(!e||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var re=`
.p-dropdown {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-dropdown-trigger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    visibility: hidden;
}
input.p-dropdown-label  {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-fluid .p-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;se(re);Q.render=ne;export{Q as default};
