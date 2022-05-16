<template>
  <div id="dashboard" class="panel-board relative">
    <h1>リアクツールにようこそ</h1>
    <Spinner v-model="content" />
  </div>
</template>

<script lang="ts" setup>
import Spinner from "@/components/loading/Spinner.vue";
import useStore from "@/helpers/useStore";
const {content} = useStore()
</script>

<style scoped>
#dashboard {
  padding: 7px;
}
#dashboard h1 {
  color: #dcdde1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
