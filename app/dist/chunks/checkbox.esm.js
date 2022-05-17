import{Y as u,b as d,e as h,f as a,R as r}from"./vendor.js";var o={name:"Checkbox",inheritAttrs:!1,emits:["click","update:modelValue","change","input"],props:{value:null,modelValue:null,binary:Boolean,class:null,style:null,trueValue:{type:null,default:!0},falseValue:{type:null,default:!1}},data(){return{focused:!1}},methods:{onClick(s){if(!this.$attrs.disabled){let e;this.binary?e=this.checked?this.falseValue:this.trueValue:this.checked?e=this.modelValue.filter(c=>!u.equals(c,this.value)):e=this.modelValue?[...this.modelValue,this.value]:[this.value],this.$emit("click",s),this.$emit("update:modelValue",e),this.$emit("change",s),this.$emit("input",e),this.$refs.input.focus()}},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.binary?this.modelValue===this.trueValue:u.contains(this.value,this.modelValue)},containerClass(){return["p-checkbox p-component",this.class,{"p-checkbox-checked":this.checked,"p-checkbox-disabled":this.$attrs.disabled,"p-checkbox-focused":this.focused}]}}};const n={class:"p-hidden-accessible"};function k(s,e,c,f,i,l){return d(),h("div",{class:l.containerClass,onClick:e[3]||(e[3]=t=>l.onClick(t)),style:c.style},[a("div",n,[a("input",r({ref:"input",type:"checkbox",checked:l.checked,value:c.value},s.$attrs,{onFocus:e[1]||(e[1]=(...t)=>l.onFocus&&l.onFocus(...t)),onBlur:e[2]||(e[2]=(...t)=>l.onBlur&&l.onBlur(...t))}),null,16,["checked","value"])]),a("div",{ref:"box",class:["p-checkbox-box",{"p-highlight":l.checked,"p-disabled":s.$attrs.disabled,"p-focus":i.focused}],role:"checkbox","aria-checked":l.checked},[a("span",{class:["p-checkbox-icon",{"pi pi-check":l.checked}]},null,2)],10,["aria-checked"])],6)}o.render=k;export{o as default};
