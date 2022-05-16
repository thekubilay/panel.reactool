<template>
  <div id="sidebar_app">
    <nav>
      <div class="ctr2 overflow-y">
        <div v-if="user.is_superuser" class="part part1" :style="{height:salonPartHeightClass}">
          <div @click="salonPart=!salonPart" class="header pointer">
            サロン
            <i style="top:1px;" :class="'pi pi-angle-'+ (salonPart ? 'up' : 'down')"></i>
          </div>
          <transition name="slideDown">
            <div v-if="salonPart" class="body custom-sb custom-sb-invert">
              <router-link v-for="salon in salons"
                           :key="salon.id"
                           :to="{name:'SalonProjects', params:{cid:route.params.cid, dynid: salon.id}}"
                           class="nav-item flex align-center"
                           active-class="active">
                <span class="color block" :style="{backgroundColor:setColorById(salon.id)}"></span>
                <div>{{ salon.name }}</div>
              </router-link>
            </div>
          </transition>
        </div>
        <div class="part part2" :style="{height:projectPartHeightClass}">
          <div @click="projectPart=!projectPart" class="header pointer">
            プロジェクト
            <i style="top:1px" :class="'pi pi-angle-'+ (projectPart ? 'up' : 'down')"></i>
          </div>
          <transition name="slideDown">
            <div v-if="projectPart" class="body custom-sb custom-sb-invert">
              <router-link v-for="project in projects"
                           :key="project.id"
                           :to="{name:routeFinder(project.id, route.name+''), params:{cid:route.params.cid, dynid:project.id}}"
                           class="p-nav-item nav-item flex align-center"
                           active-class="active">
                <span class="color block" :style="{backgroundColor:setColorById(project.id)}"></span>
                <div>{{ project.name.replaceAll("<br>", "") }}</div>
              </router-link>
            </div>
          </transition>
        </div>
      </div>

    </nav>
  </div>
</template>

<script lang="ts" setup>

import useStore from "@/helpers/useStore";
import useUtils from "@/common/useUtils";
import {useRoute} from "vue-router";
import {computed, nextTick, onMounted, ref} from "vue";


const {user, salons, projects, project, content} = useStore()
const {setColorById, groupBy} = useUtils()
const route = useRoute()
const salonPart = ref<boolean>(false)
const projectPart = ref<boolean>(true)
const collection = ref<HTMLCollectionOf<HTMLElement>>()
const salonPartHeightClass = computed<string>(() => {
  if (!salonPart.value) return "40px"
  else if (salonPart.value && !projectPart.value) return "auto"
  else return "50%"
})

const projectPartHeightClass = computed<string>(() => {
  if (!projectPart.value) return "40px"
  else if (projectPart.value && !salonPart.value) return "calc(100% - 40px)"
  else return "50%"
})

const routeFinder = (id: number, rn: string): string => {
  return "ProjectPlaces"
}

onMounted(() => {
  nextTick()
  collection.value = document.getElementsByClassName("nav-item") as HTMLCollectionOf<HTMLElement>
})

</script>

<style>
#sidebar_app {
  height: 100%;
  width: 254px;
  min-width: 254px;
  border-right: 2px solid #161a1d;
  background-color: #1a1f21;
}

#sidebar_app > nav {
  height: 100%;
  padding-top: 24px;
}

/* part 0 */
#sidebar_app > nav .ctr1 {
  margin-bottom: 10px;
}

#sidebar_app > nav .ctr1 a {
  padding: 0 14px;
  color: #f1f1f1;
  height: 28px;
}

#sidebar_app > nav .ctr1 a > span.icon-wrapper {
//width: 40px; margin-right: 10px;
}

#sidebar_app > nav .ctr1 .part0 a.active {
  background-color: rgba(99, 102, 241, 0.4);
}


/* part 1-2 */
#sidebar_app > nav .ctr2 .part .header {
  font-size: .8rem;
  font-weight: 400;
  color: #969595;
  height: 24px;
  padding: 0 14px;
}

#sidebar_app > nav .ctr2 .part .body a:hover {
  background-color: rgba(241, 241, 241, 0.1);
}

#sidebar_app > nav .ctr2 .part .body {
  position: relative;
  height: calc(100% - 30px);
  overflow-y: scroll;
  overflow-x: hidden;
}

#sidebar_app > nav .ctr2 .part .body a.nav-item {
  position: relative;
  min-height: 28px;
  font-size: .7rem;
  font-weight: 400;
  color: #ffffff;
  padding-left: 18px;
  padding-right: 22px;
}

#sidebar_app > nav .ctr2 .part .body a.nav-item > span.color {
  position: relative;
  top: 1px;
  margin-right: 8px;
  min-width: 8px;
  height: 8px;
}

#sidebar_app > nav .ctr2 .part .body a.nav-item > div {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#sidebar_app > nav .ctr2 .part .body a.anchor-title.active,
#sidebar_app > nav .ctr2 .part .body a.nav-item.active {
  color: #ffffff;
  background-color: rgba(99, 102, 241, 0.4);
}

#sidebar_app > nav .ctr2 .part .body a.anchor-title.active::after,
#sidebar_app > nav .ctr2 .part .body a.nav-item.active::after {
  position: absolute;
  content: "";
  right: -2px;
  background-color: #6366F1;
  width: 2px;
  height: 100%;
}

#sidebar_app > nav .ctr2 .part .body button.more {
  padding: 4px 10px;
  height: auto;
  color: #969595;
  margin-left: 8px;
  font-size: .7rem;
}
</style>
