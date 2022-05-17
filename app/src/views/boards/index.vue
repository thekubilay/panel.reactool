<template>
  <div class="mrw">
    <NotifyTopBar v-if="notifyTopBar">
      <p class="context">
        リアクツールの新しいバージョンをご利用いただけます。よりパワフルで高速になり、安全性や使いやすさを向上しています。<br>
        プロジェクトごとにいつでも新バージョン（v1.5）に切り替える事ができます。
        <router-link :to="{name:'BoardTutorials', params:{cid:user.company}}">ツートーリアルを見る！</router-link>
      </p>
    </NotifyTopBar>

    <BarApp class="bar-board container flex align-center"/>

    <main class="flex column-1" :class="{'notify-on': notifyTopBar}">
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
import useStore from "@/helpers/useStore";
import {defineAsyncComponent} from "vue";

const BarApp = defineAsyncComponent(() => import("@/components/bars/BarAppPanel.vue"))
const SidebarApp = defineAsyncComponent(() => import("@/components/sidebars/SidebarAppPanel.vue"))
const NotifyTopBar = defineAsyncComponent(() => import("@/components/notifications/NotifyTopBar.vue"))
const {notifyTopBar,user} = useStore()

</script>
