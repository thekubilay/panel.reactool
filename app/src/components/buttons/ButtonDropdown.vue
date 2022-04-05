<template>
  <div class="button-dropdown">
    <Button type="button" :label="label" @click="toggle" icon="pi pi-caret-down"
            :icon-pos="iconPos"
            aria-haspopup="true"
            :aria-controls="id"/>
    <Menu :id="id" :class="{'has-final-action': final}" ref="menu" :model="items" :popup="true"/>
  </div>
</template>
<script lang="ts" setup>
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import {ref} from "vue";

const props = defineProps({
  id: {type: String, default: "drop_menu"},
  iconPos: {type: String, default: "right"},
  label: {type: String, default: ""},
  items: {type: Array, default: []},
  final: {type: Boolean, default: false},
})

const menu = ref<any>(null)
const toggle = (event: MouseEvent) => {
  menu.value.toggle(event);
  if (menu.value.target){
    setTimeout(() => {
      const m = document.getElementById(props.id)
      if (m) {
        m.style.top = (event?.pageY+20)+"px";
        m.style.borderRadius = "0"
      }
      }, 30)
  }
}

</script>
<style>
.button-dropdown .pi-caret-down {
  font-size: .7rem;
}
</style>
