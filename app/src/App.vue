<template>
  <router-view v-slot="{ Component }">
    <LoadingLogo v-model="app"/>
    <transition name="scale" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import LoadingLogo from "@/components/loading/LoadingLogo.vue";
import useStore from "@/helpers/useStore";
import {usePrimeVue} from "primevue/config";
import {onMounted} from "vue";


const {app} = useStore()
const changeDateToJapanese = (): void => {
  const primevue: any = usePrimeVue();
  primevue.config.locale.dayNames = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  primevue.config.locale.dayNamesShort = ["日", "月", "火", "水", "木", "金", "土"]
  primevue.config.locale.dayNamesMin = ["日", "月", "火", "水", "木", "金", "土"]
  primevue.config.locale.monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  primevue.config.locale.monthNamesShort = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  primevue.config.locale.today = '今日'
  primevue.config.locale.weak = '弱い'
  primevue.config.locale.medium = "普通"
  primevue.config.locale.strong = "強い"
  primevue.config.locale.tim
  primevue.config.locale.passwordPrompt = ""
}

onMounted(() => {
  changeDateToJapanese();
})
</script>
