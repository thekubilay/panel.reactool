var N=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var A=(t,e,s)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,P=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&A(t,s,e[s]);if(W)for(var s of W(e))D.call(e,s)&&A(t,s,e[s]);return t},H=(t,e)=>M(t,E(e));import{Q as k,o as C,c as v,J as T,h as O,I as _,S as f,Y as j,r as Z,z as L,F as V,q as F,f as R,g as q}from"../main.js";var J={name:"TimesIcon",extends:k};const Q=O("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),Y=[Q];function G(t,e,s,n,o,i){return C(),v("svg",T({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Y,16)}J.render=G;var K={name:"VirtualScroller",extends:_,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems(t){this.d_numToleratedItems=t},loading(t){this.d_loading=t},items(t,e){(!e||e.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize(){this.init(),this.calculateAutoSize()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight(){this.init(),this.calculateAutoSize()},scrollWidth(){this.init(),this.calculateAutoSize()}},mounted(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated(){!this.initialized&&this.viewInit()},unmounted(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit(){f.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=f.getWidth(this.element),this.defaultHeight=f.getHeight(this.element),this.defaultContentWidth=f.getWidth(this.content),this.defaultContentHeight=f.getHeight(this.content),this.initialized=!0)},init(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex(t,e="auto"){const s=this.isBoth(),n=this.isHorizontal(),o=this.first,{numToleratedItems:i}=this.calculateNumItems(),l=this.getContentPosition(),r=this.itemSize,h=(w=0,y)=>w<=y?0:w,g=(w,y,B)=>w*y+B,c=(w=0,y=0)=>this.scrollTo({left:w,top:y,behavior:e});let d=s?{rows:0,cols:0}:0,p=!1;s?(d={rows:h(t[0],i[0]),cols:h(t[1],i[1])},c(g(d.cols,r[1],l.left),g(d.rows,r[0],l.top)),p=d.rows!==o.rows||d.cols!==o.cols):(d=h(t,i),n?c(g(d,r,l.left),0):c(0,g(d,r,l.top)),p=d!==o),this.isRangeChanged=p,this.first=d},scrollInView(t,e,s="auto"){if(e){const n=this.isBoth(),o=this.isHorizontal(),{first:i,viewport:l}=this.getRenderedRange(),r=(c=0,d=0)=>this.scrollTo({left:c,top:d,behavior:s}),h=e==="to-start",g=e==="to-end";if(h){if(n)l.first.rows-i.rows>t[0]?r(l.first.cols*this.itemSize[1],(l.first.rows-1)*this.itemSize[0]):l.first.cols-i.cols>t[1]&&r((l.first.cols-1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.first-i>t){const c=(l.first-1)*this.itemSize;o?r(c,0):r(0,c)}}else if(g){if(n)l.last.rows-i.rows<=t[0]+1?r(l.first.cols*this.itemSize[1],(l.first.rows+1)*this.itemSize[0]):l.last.cols-i.cols<=t[1]+1&&r((l.first.cols+1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.last-i<=t+1){const c=(l.first+1)*this.itemSize;o?r(c,0):r(0,c)}}}else this.scrollToIndex(t,s)},getRenderedRange(){const t=(n,o)=>Math.floor(n/(o||n));let e=this.first,s=0;if(this.element){const n=this.isBoth(),o=this.isHorizontal(),{scrollTop:i,scrollLeft:l}=this.element.scrollTop;n?(e={rows:t(i,this.itemSize[0]),cols:t(l,this.itemSize[1])},s={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols}):(e=t(o?l:i,this.itemSize),s=e+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:e,last:s}}},calculateNumItems(){const t=this.isBoth(),e=this.isHorizontal(),s=this.itemSize,n=this.getContentPosition(),o=this.element?this.element.offsetWidth-n.left:0,i=this.element?this.element.offsetHeight-n.top:0,l=(c,d)=>Math.ceil(c/(d||c)),r=c=>Math.ceil(c/2),h=t?{rows:l(i,s[0]),cols:l(o,s[1])}:l(e?o:i,s),g=this.d_numToleratedItems||(t?[r(h.rows),r(h.cols)]:r(h));return{numItemsInViewport:h,numToleratedItems:g}},calculateOptions(){const t=this.isBoth(),e=this.first,{numItemsInViewport:s,numToleratedItems:n}=this.calculateNumItems(),o=(l,r,h,g=!1)=>this.getLast(l+r+(l<h?2:3)*h,g),i=t?{rows:o(e.rows,s.rows,n[0]),cols:o(e.cols,s.cols,n[1],!0)}:o(e,s,n);this.last=i,this.numItemsInViewport=s,this.d_numToleratedItems=n,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:s.rows}).map(()=>Array.from({length:s.cols})):Array.from({length:s})),this.lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this.step?t?{rows:0,cols:e.cols}:0:e,last:Math.min(this.step?this.step:i,this.items.length)},this.$emit("lazy-load",this.lazyLoadState)})},calculateAutoSize(){this.autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.content){const t=this.isBoth(),e=this.isHorizontal(),s=this.isVertical();this.content.style.minHeight=this.content.style.minWidth="auto",this.content.style.position="relative",this.element.style.contain="none";const[n,o]=[f.getWidth(this.content),f.getHeight(this.content)];n!==this.defaultContentWidth&&(this.element.style.width=""),o!==this.defaultContentHeight&&(this.element.style.height="");const[i,l]=[f.getWidth(this.element),f.getHeight(this.element)];(t||e)&&(this.element.style.width=i<this.defaultWidth?i+"px":this.scrollWidth||this.defaultWidth+"px"),(t||s)&&(this.element.style.height=l<this.defaultHeight?l+"px":this.scrollHeight||this.defaultHeight+"px"),this.content.style.minHeight=this.content.style.minWidth="",this.content.style.position="",this.element.style.contain=""}})},getLast(t=0,e){return this.items?Math.min(e?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition(){if(this.content){const t=getComputedStyle(this.content),e=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),s=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),n=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),o=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:e,right:s,top:n,bottom:o,x:e+s,y:n+o}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const t=this.isBoth(),e=this.isHorizontal(),s=this.element.parentElement,n=this.scrollWidth||`${this.element.offsetWidth||s.offsetWidth}px`,o=this.scrollHeight||`${this.element.offsetHeight||s.offsetHeight}px`,i=(l,r)=>this.element.style[l]=r;t||e?(i("height",o),i("width",n)):i("height",o)}},setSpacerSize(){const t=this.items;if(t){const e=this.isBoth(),s=this.isHorizontal(),n=this.getContentPosition(),o=(i,l,r,h=0)=>this.spacerStyle=H(P({},this.spacerStyle),{[`${i}`]:(l||[]).length*r+h+"px"});e?(o("height",t,this.itemSize[0],n.y),o("width",this.columns||t[1],this.itemSize[1],n.x)):s?o("width",this.columns||t,this.itemSize,n.x):o("height",t,this.itemSize,n.y)}},setContentPosition(t){if(this.content&&!this.appendOnly){const e=this.isBoth(),s=this.isHorizontal(),n=t?t.first:this.first,o=(l,r)=>l*r,i=(l=0,r=0)=>this.contentStyle=H(P({},this.contentStyle),{transform:`translate3d(${l}px, ${r}px, 0)`});if(e)i(o(n.cols,this.itemSize[1]),o(n.rows,this.itemSize[0]));else{const l=o(n,this.itemSize);s?i(l,0):i(0,l)}}},onScrollPositionChange(t){const e=t.target,s=this.isBoth(),n=this.isHorizontal(),o=this.getContentPosition(),i=(a,m)=>a?a>m?a-m:a:0,l=(a,m)=>Math.floor(a/(m||a)),r=(a,m,u,z,S,I)=>a<=S?S:I?u-z-S:m+S-1,h=(a,m,u,z,S,I,b)=>a<=I?0:Math.max(0,b?a<m?u:a-I:a>m?u:a-2*I),g=(a,m,u,z,S,I)=>{let b=m+z+2*S;return a>=S&&(b+=S+1),this.getLast(b,I)},c=i(e.scrollTop,o.top),d=i(e.scrollLeft,o.left);let p=s?{rows:0,cols:0}:0,w=this.last,y=!1,B=this.lastScrollPos;if(s){const a=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=d;if(!this.appendOnly||this.appendOnly&&(a||m)){const u={rows:l(c,this.itemSize[0]),cols:l(d,this.itemSize[1])},z={rows:r(u.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:r(u.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};p={rows:h(u.rows,z.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],a),cols:h(u.cols,z.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},w={rows:g(u.rows,p.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:g(u.cols,p.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},y=p.rows!==this.first.rows||w.rows!==this.last.rows||p.cols!==this.first.cols||w.cols!==this.last.cols||this.isRangeChanged,B={top:c,left:d}}}else{const a=n?d:c,m=this.lastScrollPos<=a;if(!this.appendOnly||this.appendOnly&&m){const u=l(a,this.itemSize),z=r(u,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);p=h(u,z,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),w=g(u,p,this.last,this.numItemsInViewport,this.d_numToleratedItems),y=p!==this.first||w!==this.last||this.isRangeChanged,B=a}}return{first:p,last:w,isRangeChanged:y,scrollPos:B}},onScrollChange(t){const{first:e,last:s,isRangeChanged:n,scrollPos:o}=this.onScrollPositionChange(t);if(n){const i={first:e,last:s};if(this.setContentPosition(i),this.first=e,this.last=s,this.lastScrollPos=o,this.$emit("scroll-index-change",i),this.lazy&&this.isPageChanged(e)){const l={first:this.step?Math.min(this.getPageByFirst(e)*this.step,this.items.length-this.step):e,last:Math.min(this.step?(this.getPageByFirst(e)+1)*this.step:s,this.items.length)};(this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last)&&this.$emit("lazy-load",l),this.lazyLoadState=l}}},onScroll(t){if(this.$emit("scroll",t),this.delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:e}=this.onScrollPositionChange(t);(e||(this.step?this.isPageChanged():!1))&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this.lazy||this.loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst())},this.delay)}else this.onScrollChange(t)},onResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(f.isVisible(this.element)){const t=this.isBoth(),e=this.isVertical(),s=this.isHorizontal(),[n,o]=[f.getWidth(this.element),f.getHeight(this.element)],[i,l]=[n!==this.defaultWidth,o!==this.defaultHeight];(t?i||l:s?i:e?l:!1)&&(this.d_numToleratedItems=this.numToleratedItems,this.defaultWidth=n,this.defaultHeight=o,this.defaultContentWidth=f.getWidth(this.content),this.defaultContentHeight=f.getHeight(this.content),this.init())}},this.resizeDelay)},bindResizeListener(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions(t){const e=(this.items||[]).length,s=this.isBoth()?this.first.rows+t:this.first+t;return{index:s,count:e,first:s===0,last:s===e-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions(t,e){let s=this.loaderArr.length;return P({index:t,count:s,first:t===0,last:t===s-1,even:t%2===0,odd:t%2!==0},e)},getPageByFirst(t){return Math.floor(((t!=null?t:this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged(t){return this.step?this.page!==this.getPageByFirst(t!=null?t:this.first):!0},setContentEl(t){this.content=t||this.content||f.findSingle(this.element,".p-virtualscroller-content")},elementRef(t){this.element=t},contentRef(t){this.content=t}},computed:{containerClass(){return["p-virtualscroller",{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.appendOnly?0:this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const t=this.isBoth(),e=this.isHorizontal();if(t||e)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:j}};const U=["tabindex"];function X(t,e,s,n,o,i){const l=Z("SpinnerIcon");return s.disabled?(C(),v(V,{key:1},[L(t.$slots,"default"),L(t.$slots,"content",{items:s.items,rows:s.items,columns:i.loadedColumns})],64)):(C(),v("div",T({key:0,ref:i.elementRef,class:i.containerClass,tabindex:s.tabindex,style:s.style,onScroll:e[0]||(e[0]=(...r)=>i.onScroll&&i.onScroll(...r))},t.ptm("root")),[L(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:o.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:s.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:o.spacerStyle,contentStyle:o.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},()=>[O("div",T({ref:i.contentRef,class:i.contentClass,style:o.contentStyle},t.ptm("content")),[(C(!0),v(V,null,F(i.loadedItems,(r,h)=>L(t.$slots,"item",{key:h,item:r,options:i.getOptions(h)})),128))],16)]),s.showSpacer?(C(),v("div",T({key:0,class:"p-virtualscroller-spacer",style:o.spacerStyle},t.ptm("spacer")),null,16)):R("",!0),!s.loaderDisabled&&s.showLoader&&o.d_loading?(C(),v("div",T({key:1,class:i.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(C(!0),v(V,{key:0},F(o.loaderArr,(r,h)=>L(t.$slots,"loader",{key:h,options:i.getLoaderOptions(h,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})),128)):R("",!0),L(t.$slots,"loadingicon",{},()=>[q(l,T({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)])],16)):R("",!0)],16,U))}function $(t,e){e===void 0&&(e={});var s=e.insertAt;if(!(!t||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",s==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}var tt=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-virtualscroller-loading-icon {
    font-size: 2rem;
}
.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}
.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;$(tt);K.render=X;export{J as a,K as s};
