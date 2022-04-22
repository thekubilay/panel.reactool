<template>
  <div class="app-filter-wrapper relative">
    <div class="input-wrapper relative">
      <i class="pi pi-search"></i>
      <input id="afi" @click="dropped=!dropped" type="text" v-model="setKwargs" placeholder="検索">
<!--      <div class="shortcut-keys flex justify-center">-->
<!--        <span class="key block">⌘</span>-->
<!--        <span class="key block">K</span>-->
<!--      </div>-->
    </div>
    <div class="dropdown-wrapper">
      <transition name="slideDown">
        <ul v-if="dropped" class="dropdown">
          <li v-if="!results.length" class="empty-text flex-column align-center justify-center">
            <Icon svg="empty" width="24px"/>
            <span class="text block">結果なし</span>
          </li>
          <li v-for="(item, idx) in results" :key="idx"
              @click="pushToRoute(item)"
              class="dropdown-item flex align-center pointer"><span class="text block">{{ item.name }}</span> <span class="arrow-wrap flex justify-center"><i class="pi pi-arrow-right flex"></i></span></li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {computed, onMounted, ref, watch} from "vue";
import {onClickOutside} from '@vueuse/core'
import useStore from "@/helpers/useStore";
import {useRoute, useRouter} from "vue-router";
import {AppFilter} from "@/types/Filters";
import Icon from "@/components/icons/Icon.vue";


const {projects, salons} = useStore()
const router = useRouter()
const route = useRoute()
const dropped = ref<boolean>(false)
const dropdown = ref<HTMLElement>()
const kwargs = ref<string>("")
const contents = ref<AppFilter[]>([])
const results = ref<AppFilter[]>([])

onMounted((): void => {
  dropdown.value = document.getElementById("afi") as HTMLInputElement
  dropdown.value?.addEventListener("keydown", close)
  salons.value.forEach(item => {
    const object: AppFilter = {id: item.id, path: null, name: item.name.replaceAll("<br>", ""), type: "salon"}
    contents.value.push(object)
  })
  projects.value.forEach(item => {
    const object: AppFilter = {id: item.id, path: null, name: item.name.replaceAll("<br>", ""), type: "project"}
    contents.value.push(object)
  })
})

const setKwargs = computed<string>({
  set(val: string){
    results.value = contents.value.filter(item => {
      return item.name.match(val)
    })
  },
  get(){
    return kwargs.value
  }
})

function close(event: KeyboardEvent): void {
  if (event && event.keyCode === 27) {
    dropped.value = false
  }
}

function pushToRoute(context:AppFilter): void {
  if (context.type === "salon") router.push({name:"SalonProjects", params:{cid: route.params.cid, dynid:context.id}}).then(() => {
    dropped.value = false
    kwargs.value = "";
  })
  else if (context.type === "project") router.push({name:"ProjectPlaces", params:{cid: route.params.cid, dynid:context.id}}).then(() => {
    dropped.value = false
    kwargs.value = "";
  })
}

onClickOutside(dropdown, (e: any): void => {
  dropped.value = false
})


</script>

<style>
.app-filter-wrapper .input-wrapper {
  border-radius: 0;
  outline: 0;
  border: 0;
  width: auto;
  height: 100%;
}

.app-filter-wrapper .input-wrapper input {
  border-radius: 0;
  outline: 0;
  border: 0;
  width: 300px;
  height: 28px;
  padding-left: 30px;
  font-size: .7rem;
  color: #f1f1f1;
  background-color: #2b3233;
}
.app-filter-wrapper .input-wrapper i {
  font-size: 1rem;
  position: absolute;
  left: 8px;
  top: 50%;
  color: #969595;
  transform: translateY(-50%);
  display: block;
}
.app-filter-wrapper .input-wrapper .shortcut-keys {
  width: 32px;
  font-size: .65rem;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #dcdde1;
  padding: 0 4px;
  color: #969595;
}
.app-filter-wrapper .input-wrapper .shortcut-keys > span {
  line-height: 1rem;
}

.app-filter-wrapper .input-wrapper .shortcut-keys > span:last-child {
  font-size: .8rem;
  margin-left: 4px;
}

.app-filter-wrapper .dropdown-wrapper {
  position: absolute;
  z-index: 2;
  top: 34px;
  left: 0;
  width: 300px;
  background-color: #FFFFFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 50px;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown {
  height: 100%;
  max-height: 200px;
  padding: 4px 0;
  overflow-y: scroll;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown li.empty-text {
  height: 70px;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown li.empty-text i {
  font-size: 1rem;
}
.app-filter-wrapper .dropdown-wrapper ul.dropdown li.empty-text span {
  font-size: .7rem;
  color: #969595;
  margin-top: 4px;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item {
  min-width: 100px;
  border-bottom: 1px solid #F5F5F5;
  font-size: .8rem;
  color: #595959;
  height: 38px;
  padding: 0 10px;
}
.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item:hover {
  background-color: #F5F5F5;
  color: #1a1f21;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item:last-child {
  border-bottom: 0;
}

.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item span.text {
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item span.arrow-wrap {
  opacity: 0;
}
.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item:hover span.text {
  color: #0984e3;
}
.app-filter-wrapper .dropdown-wrapper ul.dropdown li.dropdown-item:hover span.arrow-wrap {
  margin-left: auto;
  width: 40px;
  opacity: 1;
}
</style>
