var H=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var F=(e,l,i)=>l in e?H(e,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[l]=i,K=(e,l)=>{for(var i in l||(l={}))M.call(l,i)&&F(e,i,l[i]);if(D)for(var i of D(l))N.call(l,i)&&F(e,i,l[i]);return e},B=(e,l)=>R(e,z(l));import{Z as V,a5 as h,Y as f,_ as j,a6 as G,$ as q,r as P,a0 as U,b as r,e as o,f as n,N as p,I as b,C as v,K as m,J as x,A as y,a1 as _,w,F as k,G as W,R as Z,a7 as J,T as Y}from"./vendor.js";import{O as Q}from"./overlayeventbus.esm.js";import{s as X}from"./virtualscroller.esm.js";var $={name:"MultiSelect",emits:["update:modelValue","before-show","before-hide","change","show","hide","filter","selectall-change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},placeholder:String,disabled:Boolean,tabindex:String,inputId:String,dataKey:null,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},ariaLabelledBy:null,appendTo:{type:String,default:"body"},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},display:{type:String,default:"comma"},panelClass:null,selectedItemsLabel:{type:String,default:"{0} items selected"},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},virtualScrollerOptions:{type:Object,default:null},selectAll:{type:Boolean,default:null}},data(){return{focused:!1,headerCheckboxFocused:!1,filterValue:null,overlayVisible:!1}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(V.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,l){return this.virtualScrollerDisabled?e:l&&l(e).index},getOptionLabel(e){return this.optionLabel?h.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?h.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?h.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},getOptionGroupRenderKey(e){return h.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return h.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return h.resolveFieldData(e,this.optionGroupChildren)},isOptionDisabled(e){return this.maxSelectionLimitReached&&!this.isSelected(e)?!0:this.optionDisabled?h.resolveFieldData(e,this.optionDisabled):!1},getSelectedOptionIndex(){if(this.modelValue!=null&&this.options)if(this.optionGroupLabel)for(let e=0;e<this.options.length;e++){let l=this.findOptionIndexInList(this.modelValue,this.getOptionGroupChildren(this.options[e]));if(l!==-1)return{group:e,option:l}}else return this.findOptionIndexInList(this.modelValue,this.options);return-1},findOptionIndexInList(e,l){return e?l.findIndex(i=>e.some(a=>h.equals(a,this.getOptionValue(i),this.equalityKey))):-1},isSelected(e){if(this.modelValue){let l=this.getOptionValue(e),i=this.equalityKey;return this.modelValue.some(a=>h.equals(a,l,i))}return!1},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(){this.focused=!0},onBlur(){this.focused=!1},onHeaderCheckboxFocus(){this.headerCheckboxFocused=!0},onHeaderCheckboxBlur(){this.headerCheckboxFocused=!1},onClick(e){this.disabled||this.loading||(!this.overlay||!this.overlay.contains(e.target))&&!f.hasClass(e.target,"p-multiselect-close")&&(f.hasClass(e.target,"p-multiselect-close"),this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus())},onCloseClick(){this.hide()},onKeyDown(e){switch(e.which){case 40:this.visibleOptions&&!this.overlayVisible&&e.altKey&&this.show();break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break}},onOptionSelect(e,l){if(this.disabled||this.isOptionDisabled(l))return;let i=this.isSelected(l),a=null;i?a=this.modelValue.filter(d=>!h.equals(d,this.getOptionValue(l),this.equalityKey)):a=[...this.modelValue||[],this.getOptionValue(l)],this.$emit("update:modelValue",a),this.$emit("change",{originalEvent:e,value:a})},onOptionKeyDown(e,l){let i=e.target;switch(e.which){case 40:var a=this.findNextItem(i);a&&a.focus(),e.preventDefault();break;case 38:var d=this.findPrevItem(i);d&&d.focus(),e.preventDefault();break;case 13:this.onOptionSelect(e,l),e.preventDefault();break}},findNextItem(e){let l=e.nextElementSibling;return l?f.hasClass(l,"p-disabled")||f.hasClass(l,"p-multiselect-item-group")?this.findNextItem(l):l:null},findPrevItem(e){let l=e.previousElementSibling;return l?f.hasClass(l,"p-disabled")||f.hasClass(l,"p-multiselect-item-group")?this.findPrevItem(l):l:null},onOverlayEnter(e){if(V.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.filter&&this.$refs.filterInput.focus(),!this.virtualScrollerDisabled){const l=this.getSelectedOptionIndex();l!==-1&&this.virtualScroller.scrollToIndex(l)}this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){V.clear(e)},alignOverlay(){this.appendDisabled?f.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=f.getOuterWidth(this.$el)+"px",f.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new j(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!f.isAndroid()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},getLabelByValue(e){let l;if(this.options)if(this.optionGroupLabel){for(let i of this.options)if(l=this.findOptionByValue(e,this.getOptionGroupChildren(i)),l)break}else l=this.findOptionByValue(e,this.options);return l?this.getOptionLabel(l):null},findOptionByValue(e,l){for(let i of l){let a=this.getOptionValue(i);if(h.equals(a,e,this.equalityKey))return i}return null},getSelectedItemsLabel(){let e=/{(.*?)}/;return e.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(e)[0],this.modelValue.length+""):this.selectedItemsLabel},onToggleAll(e){if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:e,checked:!this.allSelected});else{let l=null;this.allSelected?l=[]:this.visibleOptions&&(this.optionGroupLabel?(l=[],this.visibleOptions.forEach(i=>l=[...l,...this.getOptionGroupChildren(i)])):l=this.visibleOptions.map(i=>this.getOptionValue(i))),this.$emit("update:modelValue",l),this.$emit("change",{originalEvent:e,value:l})}},onFilterChange(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.overlayVisible&&this.alignOverlay()},overlayRef(e){this.overlay=e},virtualScrollerRef(e){this.virtualScroller=e},removeChip(e){let l=this.modelValue.filter(i=>!h.equals(i,e,this.equalityKey));this.$emit("update:modelValue",l),this.$emit("change",{originalEvent:event,value:l})},onOverlayClick(e){Q.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{visibleOptions(){if(this.filterValue)if(this.optionGroupLabel){let e=[];for(let l of this.options){let i=G.filter(this.getOptionGroupChildren(l),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);i&&i.length&&e.push(B(K({},l),{items:i}))}return e}else return G.filter(this.options,this.searchFields,this.filterValue,"contains",this.filterLocale);else return this.options},containerClass(){return["p-multiselect p-component p-inputwrapper",{"p-multiselect-chip":this.display==="chip","p-disabled":this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue&&this.modelValue.length,"p-inputwrapper-focus":this.focused||this.overlayVisible}]},labelClass(){return["p-multiselect-label",{"p-placeholder":this.label===this.placeholder,"p-multiselect-label-empty":!this.placeholder&&(!this.modelValue||this.modelValue.length===0)}]},panelStyleClass(){return["p-multiselect-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},label(){let e;if(this.modelValue&&this.modelValue.length)if(!this.maxSelectedLabels||this.modelValue.length<=this.maxSelectedLabels){e="";for(let l=0;l<this.modelValue.length;l++)l!==0&&(e+=", "),e+=this.getLabelByValue(this.modelValue[l])}else return this.getSelectedItemsLabel();else e=this.placeholder;return e},allSelected(){if(this.selectAll!==null)return this.selectAll;if(this.filterValue&&this.filterValue.trim().length>0){if(this.visibleOptions.length===0)return!1;if(this.optionGroupLabel){for(let e of this.visibleOptions)for(let l of this.getOptionGroupChildren(e))if(!this.isSelected(l))return!1}else for(let e of this.visibleOptions)if(!this.isSelected(e))return!1;return!0}else{if(this.modelValue&&this.options){let e=0;return this.optionGroupLabel?this.options.forEach(l=>e+=this.getOptionGroupChildren(l).length):e=this.options.length,e>0&&e===this.modelValue.length}return!1}},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo},virtualScrollerDisabled(){return!this.virtualScrollerOptions},maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue&&this.modelValue.length===this.selectionLimit},dropdownIconClass(){return["p-multiselect-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]}},directives:{ripple:q},components:{VirtualScroller:X}};const ee={class:"p-hidden-accessible"},le={class:"p-multiselect-label-container"},te={class:"p-multiselect-token-label"},ie={class:"p-multiselect-trigger"},se={key:0,class:"p-multiselect-header"},ne={class:"p-hidden-accessible"},ae={key:1,class:"p-multiselect-filter-container"},re=n("span",{class:"p-multiselect-filter-icon pi pi-search"},null,-1),oe=n("span",{class:"p-multiselect-close-icon pi pi-times"},null,-1),de={class:"p-checkbox p-component"},ue={class:"p-multiselect-item-group"},ce={class:"p-checkbox p-component"},he={key:2,class:"p-multiselect-empty-message"},pe={key:3,class:"p-multiselect-empty-message"};function fe(e,l,i,a,d,t){const T=P("VirtualScroller"),L=U("ripple");return r(),o("div",{ref:"container",class:t.containerClass,onClick:l[11]||(l[11]=(...s)=>t.onClick&&t.onClick(...s))},[n("div",ee,[n("input",{ref:"focusInput",type:"text",role:"listbox",id:i.inputId,readonly:"",disabled:i.disabled,onFocus:l[1]||(l[1]=(...s)=>t.onFocus&&t.onFocus(...s)),onBlur:l[2]||(l[2]=(...s)=>t.onBlur&&t.onBlur(...s)),onKeydown:l[3]||(l[3]=(...s)=>t.onKeyDown&&t.onKeyDown(...s)),tabindex:i.tabindex,"aria-haspopup":"true","aria-expanded":d.overlayVisible,"aria-labelledby":i.ariaLabelledBy},null,40,["id","disabled","tabindex","aria-expanded","aria-labelledby"])]),n("div",le,[n("div",{class:t.labelClass},[p(e.$slots,"value",{value:i.modelValue,placeholder:i.placeholder},()=>[i.display==="comma"?(r(),o(b,{key:0},[v(m(t.label||"empty"),1)],64)):i.display==="chip"?(r(),o(b,{key:1},[(r(!0),o(b,null,x(i.modelValue,s=>(r(),o("div",{class:"p-multiselect-token",key:t.getLabelByValue(s)},[p(e.$slots,"chip",{value:s},()=>[n("span",te,m(t.getLabelByValue(s)),1)]),i.disabled?y("",!0):(r(),o("span",{key:0,class:"p-multiselect-token-icon pi pi-times-circle",onClick:I=>t.removeChip(s)},null,8,["onClick"]))]))),128)),!i.modelValue||i.modelValue.length===0?(r(),o(b,{key:0},[v(m(i.placeholder||"empty"),1)],64)):y("",!0)],64)):y("",!0)])],2)]),n("div",ie,[p(e.$slots,"indicator",{},()=>[n("span",{class:t.dropdownIconClass},null,2)])]),(r(),o(_,{to:t.appendTarget,disabled:t.appendDisabled},[n(Y,{name:"p-connected-overlay",onEnter:t.onOverlayEnter,onLeave:t.onOverlayLeave,onAfterLeave:t.onOverlayAfterLeave},{default:w(()=>[d.overlayVisible?(r(),o("div",{key:0,ref:t.overlayRef,class:t.panelStyleClass,onClick:l[10]||(l[10]=(...s)=>t.onOverlayClick&&t.onOverlayClick(...s))},[p(e.$slots,"header",{value:i.modelValue,options:t.visibleOptions}),i.showToggleAll&&i.selectionLimit==null||i.filter?(r(),o("div",se,[i.showToggleAll&&i.selectionLimit==null?(r(),o("div",{key:0,class:"p-checkbox p-component",onClick:l[6]||(l[6]=(...s)=>t.onToggleAll&&t.onToggleAll(...s)),role:"checkbox","aria-checked":t.allSelected},[n("div",ne,[n("input",{type:"checkbox",readonly:"",onFocus:l[4]||(l[4]=(...s)=>t.onHeaderCheckboxFocus&&t.onHeaderCheckboxFocus(...s)),onBlur:l[5]||(l[5]=(...s)=>t.onHeaderCheckboxBlur&&t.onHeaderCheckboxBlur(...s))},null,32)]),n("div",{class:["p-checkbox-box",{"p-highlight":t.allSelected,"p-focus":d.headerCheckboxFocused}],role:"checkbox","aria-checked":t.allSelected},[n("span",{class:["p-checkbox-icon",{"pi pi-check":t.allSelected}]},null,2)],10,["aria-checked"])],8,["aria-checked"])):y("",!0),i.filter?(r(),o("div",ae,[k(n("input",{type:"text",ref:"filterInput","onUpdate:modelValue":l[7]||(l[7]=s=>d.filterValue=s),class:"p-multiselect-filter p-inputtext p-component",placeholder:i.filterPlaceholder,onInput:l[8]||(l[8]=(...s)=>t.onFilterChange&&t.onFilterChange(...s))},null,40,["placeholder"]),[[W,d.filterValue]]),re])):y("",!0),k(n("button",{class:"p-multiselect-close p-link",onClick:l[9]||(l[9]=(...s)=>t.onCloseClick&&t.onCloseClick(...s)),type:"button"},[oe],512),[[L]])])):y("",!0),n("div",{class:"p-multiselect-items-wrapper",style:{"max-height":t.virtualScrollerDisabled?i.scrollHeight:""}},[n(T,Z({ref:t.virtualScrollerRef},i.virtualScrollerOptions,{items:t.visibleOptions,style:{height:i.scrollHeight},disabled:t.virtualScrollerDisabled}),J({content:w(({styleClass:s,contentRef:I,items:g,getItemOptions:O,contentStyle:E})=>[n("ul",{ref:I,class:["p-multiselect-items p-component",s],style:E,role:"listbox","aria-multiselectable":"true"},[i.optionGroupLabel?(r(!0),o(b,{key:1},x(g,(u,C)=>(r(),o(b,{key:t.getOptionGroupRenderKey(u)},[n("li",ue,[p(e.$slots,"optiongroup",{option:u,index:t.getOptionIndex(C,O)},()=>[v(m(t.getOptionGroupLabel(u)),1)])]),(r(!0),o(b,null,x(t.getOptionGroupChildren(u),(c,A)=>k((r(),o("li",{class:["p-multiselect-item",{"p-highlight":t.isSelected(c),"p-disabled":t.isOptionDisabled(c)}],role:"option","aria-selected":t.isSelected(c),key:t.getOptionRenderKey(c),onClick:S=>t.onOptionSelect(S,c),onKeydown:S=>t.onOptionKeyDown(S,c),tabindex:i.tabindex||"0","aria-label":t.getOptionLabel(c)},[n("div",ce,[n("div",{class:["p-checkbox-box",{"p-highlight":t.isSelected(c)}]},[n("span",{class:["p-checkbox-icon",{"pi pi-check":t.isSelected(c)}]},null,2)],2)]),p(e.$slots,"option",{option:c,index:t.getOptionIndex(A,O)},()=>[n("span",null,m(t.getOptionLabel(c)),1)])],42,["aria-selected","onClick","onKeydown","tabindex","aria-label"])),[[L]])),128))],64))),128)):(r(!0),o(b,{key:0},x(g,(u,C)=>k((r(),o("li",{class:["p-multiselect-item",{"p-highlight":t.isSelected(u),"p-disabled":t.isOptionDisabled(u)}],role:"option","aria-selected":t.isSelected(u),key:t.getOptionRenderKey(u),onClick:c=>t.onOptionSelect(c,u),onKeydown:c=>t.onOptionKeyDown(c,u),tabindex:i.tabindex||"0","aria-label":t.getOptionLabel(u)},[n("div",de,[n("div",{class:["p-checkbox-box",{"p-highlight":t.isSelected(u)}]},[n("span",{class:["p-checkbox-icon",{"pi pi-check":t.isSelected(u)}]},null,2)],2)]),p(e.$slots,"option",{option:u,index:t.getOptionIndex(C,O)},()=>[n("span",null,m(t.getOptionLabel(u)),1)])],42,["aria-selected","onClick","onKeydown","tabindex","aria-label"])),[[L]])),128)),d.filterValue&&(!g||g&&g.length===0)?(r(),o("li",he,[p(e.$slots,"emptyfilter",{},()=>[v(m(t.emptyFilterMessageText),1)])])):!i.options||i.options&&i.options.length===0?(r(),o("li",pe,[p(e.$slots,"empty",{},()=>[v(m(t.emptyMessageText),1)])])):y("",!0)],6)]),_:2},[e.$slots.loader?{name:"loader",fn:w(({options:s})=>[p(e.$slots,"loader",{options:s})])}:void 0]),1040,["items","style","disabled"])],4),p(e.$slots,"footer",{value:i.modelValue,options:t.visibleOptions})],2)):y("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],2)}function be(e,l){l===void 0&&(l={});var i=l.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",i==="top"&&a.firstChild?a.insertBefore(d,a.firstChild):a.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}var me=`
.p-multiselect {
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
.p-multiselect-trigger {
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
.p-multiselect-label-container {
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    cursor: pointer;
}
.p-multiselect-label  {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}
.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}
.p-multiselect-token {
    cursor: default;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
}
.p-multiselect-token-icon {
    cursor: pointer;
}
.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}
.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-multiselect-items-wrapper {
    overflow: auto;
}
.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-multiselect-item {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-multiselect-item-group {
    cursor: auto;
}
.p-multiselect-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.p-multiselect-filter-container {
    position: relative;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}
.p-multiselect-close {
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
    overflow: hidden;
    position: relative;
    margin-left: auto;
}
.p-fluid .p-multiselect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
`;be(me);$.render=fe;export{$ as default};
