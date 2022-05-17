import{Y as u,b as c,e as o,f as a,R as r}from"./vendor.js";var n={name:"RadioButton",inheritAttrs:!1,emits:["click","update:modelValue","change"],props:{value:null,modelValue:null,class:null,style:null},data(){return{focused:!1}},methods:{onClick(t){this.$attrs.disabled||(this.$emit("click",t),this.$emit("update:modelValue",this.value),this.$refs.input.focus(),this.checked||this.$emit("change",t))},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.modelValue!=null&&u.equals(this.modelValue,this.value)},containerClass(){return["p-radiobutton p-component",this.class,{"p-radiobutton-checked":this.checked,"p-radiobutton-disabled":this.$attrs.disabled,"p-radiobutton-focused":this.focused}]}}};const h={class:"p-hidden-accessible"},f=a("div",{class:"p-radiobutton-icon"},null,-1);function k(t,s,d,p,i,e){return c(),o("div",{class:e.containerClass,onClick:s[3]||(s[3]=l=>e.onClick(l)),style:d.style},[a("div",h,[a("input",r({ref:"input",type:"radio",checked:e.checked,value:d.value},t.$attrs,{onFocus:s[1]||(s[1]=(...l)=>e.onFocus&&e.onFocus(...l)),onBlur:s[2]||(s[2]=(...l)=>e.onBlur&&e.onBlur(...l))}),null,16,["checked","value"])]),a("div",{ref:"box",class:["p-radiobutton-box",{"p-highlight":e.checked,"p-disabled":t.$attrs.disabled,"p-focus":i.focused}],role:"radio","aria-checked":e.checked},[f],10,["aria-checked"])],6)}n.render=k;export{n as default};
