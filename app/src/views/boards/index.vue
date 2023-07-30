<template>
  <div class="mrw">
    <BarApp class="bar-board container flex align-center"/>

    <main class="flex column-1">
      <div class="column-1 flex">
        <SidebarApp/>
        <router-view class="contents column-1" v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BarApp from "@/components/bars/BarAppPanel.vue";
import SidebarApp from "@/components/sidebars/SidebarAppPanel.vue";
import useStore from "@/helpers/useStore";
import {defineAsyncComponent} from "vue";

// // const BarApp = defineAsyncComponent(() => import("@/components/bars/BarAppPanel.vue"))
// const SidebarApp = defineAsyncComponent(() => import("@/components/sidebars/SidebarAppPanel.vue"))

</script>

