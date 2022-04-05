var R=Object.defineProperty,A=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var L=(t,s,e)=>s in t?R(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,B=(t,s)=>{for(var e in s||(s={}))O.call(s,e)&&L(t,e,s[e]);if(V)for(var e of V(s))M.call(s,e)&&L(t,e,s[e]);return t},v=(t,s)=>A(t,x(s));import{a as y,c as z,O as C,k as N,M as P,N as k,g as H}from"./vendor.js";var F={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},watch:{numToleratedItems(t){this.d_numToleratedItems=t},loading(t){this.d_loading=t},items(t,s){(!s||s.length!==(t||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(t){this.element&&this.element.scrollTo(t)},scrollToIndex(t,s="auto"){const e=this.isBoth(),r=this.isHorizontal(),o=this.getContentPosition(),i=(a=0,f)=>a<=f?0:a,l=(a,f,c)=>a*f+c,n=(a=0,f=0)=>this.scrollTo({left:a,top:f,behavior:s});if(e){const a={rows:i(t[0],this.d_numToleratedItems[0]),cols:i(t[1],this.d_numToleratedItems[1])};(a.rows!==this.first.rows||a.cols!==this.first.cols)&&(n(l(a.cols,this.itemSize[1],o.left),l(a.rows,this.itemSize[0],o.top)),this.first=a)}else{const a=i(t,this.d_numToleratedItems);a!==this.first&&(r?n(l(a,this.itemSize,o.left),0):n(0,l(a,this.itemSize,o.top)),this.first=a)}},scrollInView(t,s,e="auto"){if(s){const r=this.isBoth(),o=this.isHorizontal(),{first:i,viewport:l}=this.getRenderedRange(),n=(c=0,u=0)=>this.scrollTo({left:c,top:u,behavior:e}),a=s==="to-start",f=s==="to-end";if(a){if(r)l.first.rows-i.rows>t[0]?n(l.first.cols*this.itemSize[1],(l.first.rows-1)*this.itemSize[0]):l.first.cols-i.cols>t[1]&&n((l.first.cols-1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.first-i>t){const c=(l.first-1)*this.itemSize;o?n(c,0):n(0,c)}}else if(f){if(r)l.last.rows-i.rows<=t[0]+1?n(l.first.cols*this.itemSize[1],(l.first.rows+1)*this.itemSize[0]):l.last.cols-i.cols<=t[1]+1&&n((l.first.cols+1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.last-i<=t+1){const c=(l.first+1)*this.itemSize;o?n(c,0):n(0,c)}}}else this.scrollToIndex(t,e)},getRenderedRange(){const t=(r,o)=>Math.floor(r/(o||r));let s=this.first,e=0;if(this.element){const r=this.isBoth(),o=this.isHorizontal(),i=this.element.scrollTop,l=this.element.scrollLeft;r?(s={rows:t(i,this.itemSize[0]),cols:t(l,this.itemSize[1])},e={rows:s.rows+this.numItemsInViewport.rows,cols:s.cols+this.numItemsInViewport.cols}):(s=t(o?l:i,this.itemSize),e=s+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:s,last:e}}},calculateOptions(){const t=this.isBoth(),s=this.isHorizontal(),e=this.getContentPosition(),r=this.element?this.element.offsetWidth-e.left:0,o=this.element?this.element.offsetHeight-e.top:0,i=(u,p)=>Math.ceil(u/(p||u)),l=u=>Math.ceil(u/2),n=t?{rows:i(o,this.itemSize[0]),cols:i(r,this.itemSize[1])}:i(s?r:o,this.itemSize);let a=this.d_numToleratedItems||(t?[l(n.rows),l(n.cols)]:l(n));const f=(u,p,g,T)=>this.getLast(u+p+(u<g?2:3)*g,T),c=t?{rows:f(this.first.rows,n.rows,a[0]),cols:f(this.first.cols,n.cols,a[1],!0)}:f(this.first,n,a);this.last=c,this.numItemsInViewport=n,this.d_numToleratedItems=a,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:n.rows}).map(()=>Array.from({length:n.cols})):Array.from({length:n})),this.lazy&&this.$emit("lazy-load",{first:this.first,last:c})},getLast(t=0,s){return this.items?Math.min(s?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition(){if(this.content){const t=getComputedStyle(this.content),s=parseInt(t.paddingLeft,10)+Math.max(parseInt(t.left,10),0),e=parseInt(t.paddingRight,10)+Math.max(parseInt(t.right,10),0),r=parseInt(t.paddingTop,10)+Math.max(parseInt(t.top,10),0),o=parseInt(t.paddingBottom,10)+Math.max(parseInt(t.bottom,10),0);return{left:s,right:e,top:r,bottom:o,x:s+e,y:r+o}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const t=this.isBoth(),s=this.isHorizontal(),e=this.element.parentElement,r=this.scrollWidth||`${this.element.offsetWidth||e.offsetWidth}px`,o=this.scrollHeight||`${this.element.offsetHeight||e.offsetHeight}px`,i=(l,n)=>this.element.style[l]=n;t||s?(i("height",o),i("width",r)):i("height",o)}},setSpacerSize(){const t=this.items;if(t){const s=this.isBoth(),e=this.isHorizontal(),r=this.getContentPosition(),o=(i,l,n,a=0)=>this.spacerStyle=v(B({},this.spacerStyle),{[`${i}`]:(l||[]).length*n+a+"px"});s?(o("height",t,this.itemSize[0],r.y),o("width",this.columns||t[1],this.itemSize[1],r.x)):e?o("width",this.columns||t,this.itemSize,r.x):o("height",t,this.itemSize,r.y)}},setContentPosition(t){if(this.content){const s=this.isBoth(),e=this.isHorizontal(),r=t?t.first:this.first,o=(l,n)=>l*n,i=(l=0,n=0)=>{this.contentStyle=v(B({},this.contentStyle),{transform:`translate3d(${l}px, ${n}px, 0)`})};if(s)i(o(r.cols,this.itemSize[1]),o(r.rows,this.itemSize[0]));else{const l=o(r,this.itemSize);e?i(l,0):i(0,l)}}},onScrollPositionChange(t){const s=t.target,e=this.isBoth(),r=this.isHorizontal(),o=this.getContentPosition(),i=(h,m)=>h?h>m?h-m:h:0,l=(h,m)=>Math.floor(h/(m||h)),n=(h,m,d,w,S,I)=>h<=S?S:I?d-w-S:m+S-1,a=(h,m,d,w,S,I,b)=>h<=I?0:Math.max(0,b?h<m?d:h-I:h>m?d:h-2*I),f=(h,m,d,w,S,I)=>{let b=m+w+2*S;return h>=S&&(b+=S+1),this.getLast(b,I)},c=i(s.scrollTop,o.top),u=i(s.scrollLeft,o.left);let p=0,g=this.last,T=!1;if(e){const h=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=u,d={rows:l(c,this.itemSize[0]),cols:l(u,this.itemSize[1])},w={rows:n(d.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:n(d.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};p={rows:a(d.rows,w.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:a(d.cols,w.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},g={rows:f(d.rows,p.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:f(d.cols,p.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},T=p.rows!==this.first.rows&&g.rows!==this.last.rows||p.cols!==this.first.cols&&g.cols!==this.last.cols,this.lastScrollPos={top:c,left:u}}else{const h=r?u:c,m=this.lastScrollPos<=h,d=l(h,this.itemSize),w=n(d,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);p=a(d,w,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),g=f(d,p,this.last,this.numItemsInViewport,this.d_numToleratedItems),T=p!==this.first&&g!==this.last,this.lastScrollPos=h}return{first:p,last:g,isRangeChanged:T}},onScrollChange(t){const{first:s,last:e,isRangeChanged:r}=this.onScrollPositionChange(t);if(r){const o={first:s,last:e};this.setContentPosition(o),this.first=s,this.last=e,this.$emit("scroll-index-change",o),this.lazy&&this.$emit("lazy-load",o)}},onScroll(t){if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:s}=this.onScrollPositionChange(t);s&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(t)},getOptions(t){const s=(this.items||[]).length,e=this.isBoth()?this.first.rows+t:this.first+t;return{index:e,count:s,first:e===0,last:e===s-1,even:e%2==0,odd:e%2!=0}},getLoaderOptions(t,s){let e=this.loaderArr.length;return B({index:t,count:e,first:t===0,last:t===e-1,even:t%2==0,odd:t%2!=0},s)},elementRef(t){this.element=t},contentRef(t){this.content=t}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const t=this.items;return t&&!this.d_loading?this.isBoth()?t.slice(this.first.rows,this.last.rows).map(s=>this.columns?s:s.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?t:t.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const t=this.isBoth(),s=this.isHorizontal();if(t||s)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}}};const D={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function W(t,s,e,r,o,i){return e.disabled?(y(),z(P,{key:1},[C(t.$slots,"default"),C(t.$slots,"content",{items:e.items,rows:e.items,columns:i.loadedColumns})],64)):(y(),z("div",{key:0,ref:i.elementRef,class:i.containerClass,tabindex:0,style:e.style,onScroll:s[1]||(s[1]=(...l)=>i.onScroll&&i.onScroll(...l))},[C(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:o.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:e.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:o.spacerStyle,contentStyle:o.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},()=>[N("div",{ref:i.contentRef,class:i.contentClass,style:o.contentStyle},[(y(!0),z(P,null,k(i.loadedItems,(l,n)=>C(t.$slots,"item",{key:n,item:l,options:i.getOptions(n)})),128))],6)]),e.showSpacer?(y(),z("div",{key:0,class:"p-virtualscroller-spacer",style:o.spacerStyle},null,4)):H("",!0),!e.loaderDisabled&&e.showLoader&&o.d_loading?(y(),z("div",{key:1,class:i.loaderClass},[t.$slots&&t.$slots.loader?(y(!0),z(P,{key:0},k(o.loaderArr,(l,n)=>C(t.$slots,"loader",{key:n,options:i.getLoaderOptions(n,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})),128)):(y(),z("i",D))],2)):H("",!0)],38))}function _(t,s){s===void 0&&(s={});var e=s.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}var E=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
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
    -webkit-transform-origin: 0 0;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
`;_(E);F.render=W;export{F as s};
