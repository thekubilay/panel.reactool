import{I as m,S as r,o as d,c as h,h as g,J as o,f as u}from"../main.js";var f={name:"Slider",extends:m,emits:["update:modelValue","change","slideend"],props:{modelValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount(){this.unbindDragListeners()},methods:{updateDomData(){let e=this.$el.getBoundingClientRect();this.initX=e.left+r.getWindowScrollLeft(),this.initY=e.top+r.getWindowScrollTop(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue(e){let t,i=e.touches?e.touches[0].pageX:e.pageX,n=e.touches?e.touches[0].pageY:e.pageY;this.orientation==="horizontal"?t=(i-this.initX)*100/this.barWidth:t=(this.initY+this.barHeight-n)*100/this.barHeight;let s=(this.max-this.min)*(t/100)+this.min;if(this.step){const l=this.range?this.modelValue[this.handleIndex]:this.modelValue,a=s-l;a<0?s=l+Math.ceil(s/this.step-l/this.step)*this.step:a>0&&(s=l+Math.floor(s/this.step-l/this.step)*this.step)}else s=Math.floor(s);this.updateModel(e,s)},updateModel(e,t){let i=parseFloat(t.toFixed(10)),n;this.range?(n=this.modelValue?[...this.modelValue]:[],this.handleIndex==0?(i<this.min?i=this.min:i>=this.max&&(i=this.max),n[0]=i):(i>this.max?i=this.max:i<=this.min&&(i=this.min),n[1]=i)):(i<this.min?i=this.min:i>this.max&&(i=this.max),n=i),this.$emit("update:modelValue",n),this.$emit("change",n)},onDragStart(e,t){this.disabled||(r.addClass(this.$el,"p-slider-sliding"),this.dragging=!0,this.updateDomData(),this.range&&this.modelValue[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus(),e.preventDefault())},onDrag(e){this.dragging&&(this.setValue(e),e.preventDefault())},onDragEnd(e){this.dragging&&(this.dragging=!1,r.removeClass(this.$el,"p-slider-sliding"),this.$emit("slideend",{originalEvent:e,value:this.modelValue}))},onBarClick(e){this.disabled||r.hasClass(e.target,"p-slider-handle")||(this.updateDomData(),this.setValue(e))},onMouseDown(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown(e,t){switch(this.handleIndex=t,e.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(e,t),e.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(e,t),e.preventDefault();break;case"PageDown":this.decrementValue(e,t,!0),e.preventDefault();break;case"PageUp":this.incrementValue(e,t,!0),e.preventDefault();break;case"Home":this.updateModel(e,this.min),e.preventDefault();break;case"End":this.updateModel(e,this.max),e.preventDefault();break}},decrementValue(e,t,i=!1){let n;this.range?this.step?n=this.modelValue[t]-this.step:n=this.modelValue[t]-1:this.step?n=this.modelValue-this.step:!this.step&&i?n=this.modelValue-10:n=this.modelValue-1,this.updateModel(e,n),e.preventDefault()},incrementValue(e,t,i=!1){let n;this.range?this.step?n=this.modelValue[t]+this.step:n=this.modelValue[t]+1:this.step?n=this.modelValue+this.step:!this.step&&i?n=this.modelValue+10:n=this.modelValue+1,this.updateModel(e,n),e.preventDefault()},bindDragListeners(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)}},computed:{containerClass(){return["p-slider p-component",{"p-disabled":this.disabled,"p-slider-horizontal":this.orientation==="horizontal","p-slider-vertical":this.orientation==="vertical"}]},horizontal(){return this.orientation==="horizontal"},vertical(){return this.orientation==="vertical"},rangeStyle(){if(this.range){const e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{left:t+"%",width:e+"%"}:{bottom:t+"%",height:e+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle(){return this.horizontal?{left:this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},handlePosition(){return this.modelValue<this.min?0:this.modelValue>this.max?100:(this.modelValue-this.min)*100/(this.max-this.min)},rangeStartPosition(){return this.modelValue&&this.modelValue[0]?(this.modelValue[0]<this.min?0:this.modelValue[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition(){return this.modelValue&&this.modelValue.length===2?(this.modelValue[1]>this.max?100:this.modelValue[1]-this.min)*100/(this.max-this.min):100},rangeStartHandleStyle(){return this.horizontal?{left:this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle(){return this.horizontal?{left:this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}}};const b=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],p=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],V=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function y(e,t,i,n,s,l){return d(),h("div",o({class:l.containerClass,onClick:t[15]||(t[15]=(...a)=>l.onBarClick&&l.onBarClick(...a))},e.ptm("root")),[g("span",o({class:"p-slider-range",style:l.rangeStyle},e.ptm("range")),null,16),i.range?u("",!0):(d(),h("span",o({key:0,class:"p-slider-handle",style:l.handleStyle,onTouchstart:t[0]||(t[0]=a=>l.onDragStart(a)),onTouchmove:t[1]||(t[1]=a=>l.onDrag(a)),onTouchend:t[2]||(t[2]=a=>l.onDragEnd(a)),onMousedown:t[3]||(t[3]=a=>l.onMouseDown(a)),onKeydown:t[4]||(t[4]=a=>l.onKeyDown(a)),tabindex:i.tabindex,role:"slider","aria-valuemin":i.min,"aria-valuenow":i.modelValue,"aria-valuemax":i.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":i.orientation},e.ptm("handle")),null,16,b)),i.range?(d(),h("span",o({key:1,class:"p-slider-handle",style:l.rangeStartHandleStyle,onTouchstart:t[5]||(t[5]=a=>l.onDragStart(a,0)),onTouchmove:t[6]||(t[6]=a=>l.onDrag(a)),onTouchend:t[7]||(t[7]=a=>l.onDragEnd(a)),onMousedown:t[8]||(t[8]=a=>l.onMouseDown(a,0)),onKeydown:t[9]||(t[9]=a=>l.onKeyDown(a,0)),tabindex:i.tabindex,role:"slider","aria-valuemin":i.min,"aria-valuenow":i.modelValue?i.modelValue[0]:null,"aria-valuemax":i.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":i.orientation},e.ptm("startHandler")),null,16,p)):u("",!0),i.range?(d(),h("span",o({key:2,class:"p-slider-handle",style:l.rangeEndHandleStyle,onTouchstart:t[10]||(t[10]=a=>l.onDragStart(a,1)),onTouchmove:t[11]||(t[11]=a=>l.onDrag(a)),onTouchend:t[12]||(t[12]=a=>l.onDragEnd(a)),onMousedown:t[13]||(t[13]=a=>l.onMouseDown(a,1)),onKeydown:t[14]||(t[14]=a=>l.onKeyDown(a,1)),tabindex:i.tabindex,role:"slider","aria-valuemin":i.min,"aria-valuenow":i.modelValue?i.modelValue[1]:null,"aria-valuemax":i.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":i.orientation},e.ptm("endHandler")),null,16,V)):u("",!0)],16)}function D(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var w=`
.p-slider {
    position: relative;
}
.p-slider .p-slider-handle {
    position: absolute;
    cursor: grab;
    touch-action: none;
    display: block;
}
.p-slider-range {
    position: absolute;
    display: block;
}
.p-slider-horizontal .p-slider-range {
    top: 0;
    left: 0;
    height: 100%;
}
.p-slider-horizontal .p-slider-handle {
    top: 50%;
}
.p-slider-vertical {
    height: 100px;
}
.p-slider-vertical .p-slider-handle {
    left: 50%;
}
.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
`;D(w);f.render=y;export{f as default};
