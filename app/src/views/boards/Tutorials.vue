<template>
  <div id="tutorials" class="panel-board flex align-start">
    <div class="content part">
      <BarTool v-if="content" class="justify-space-between">
        <div class="part-wrap">
          <h4 class="title">{{ content.title }} <span class="sub-title block">{{ content.sub_title }}</span></h4>
        </div>
      </BarTool>
      <video v-if="content && content.video" controls class="pointer">
        <source :src="content.video" type="video/mp4">
        <!--        <source src="movie.ogg" type="video/ogg">-->
      </video>
      <div class="tabs"></div>
    </div>

    <div class="sidebar part">
      <div class="button-wrapper flex align-center justify-center">
        <button v-for="(item, idx) in buttons" :key="idx"
                @click="type=item"
                :class="{active: type===item}"
                class="flex align-center justify-center">
          {{ item }}
        </button>
      </div>
      <ul class="tutorials-by-type">
        <li class="flex pointer" v-for="(item, idx) in getTutorialsByType" :key="idx" @click="content=item">
          <span class="num">{{ idx + 1 }}.</span>
          <div class="context">
            <span class="title block">{{ item.title }}</span>
            <span class="summary flex align-center">
              <Icon v-if="item.video" class="relative" svg="video" width="25px" height="25px"/>
              <Icon v-if="item.pdf && item.pdf.length" svg="pdf2" width="22px" height="22px"/>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BarTool from "@/components/bars/BarTool.vue";

import {onMounted, ref, watch} from "vue";
import useStore from "@/helpers/useStore";
import {Tutorial} from "@/types/Tutorial";
import Icon from "@/components/icons/Icon.vue";

const {tutorials} = useStore()
const content = ref<Tutorial>() as Tutorial
const type = ref<string>("パネル")
const getTutorialsByType = ref<Tutorial[]>([])
const types: string[] = ["アプリ", "パネル", "API"]
const buttons = ref<string[]>(["パネル", "アプリ", "API"])

const setDef = (): void => {
  if (getTutorialsByType.value.length) content.value = getTutorialsByType.value[0] as Tutorial
  console.log(content.value)
}

watch(type, (val) => {
  getTutorialsByType.value = tutorials.value.filter(item => {
    return item.type === val
  }) || []
  setDef()
})

onMounted((): void => {
  getTutorialsByType.value = tutorials.value.filter(item => {
    return item.type === type.value
  }) || []
  setDef()
})

</script>

<style scoped>
#tutorials .part {
  height: 100%;
}

#tutorials .content {
  width: calc(100% - 254px);
}

#tutorials .content h4.title {
  font-size: .85rem;
  font-weight: 500;
}

#tutorials .content h4.title > span.sub-title {
  font-size: .75rem;
  font-weight: 400;
}

#tutorials .content video {
  width: calc(100% - 254px);
}

#tutorials .content .summary {
  width: calc(100% - 254px);
}

#tutorials .content video {
  width: 100%;
}

#tutorials .sidebar {
  width: 254px;
  background-color: #FFFFFF;
  border-left: 1px solid #F5F5F5;
}

#tutorials .sidebar .button-wrapper {
  height: 40px;
  width: calc(100% - 6px);
  margin: 2px auto 0 auto;
}

#tutorials .sidebar .button-wrapper button {
  height: 37px;
  width: 33.33%;
}

#tutorials .sidebar .button-wrapper button.active {
  background-color: #F5F5F5;
}


#tutorials .sidebar ul.tutorials-by-type {
  height: calc(100% - 44px);
  width: calc(100% - 6px);
  margin: 2px auto 0 auto;
}

#tutorials .sidebar ul.tutorials-by-type li {
  height: 56px;
}

#tutorials .sidebar ul.tutorials-by-type li:hover {
  background-color: #f5f6fa;
}

#tutorials .sidebar ul.tutorials-by-type li span.num {
  width: 30px;
  padding-left: 4px;
  height: 100%;
}

#tutorials .sidebar ul.tutorials-by-type li .context {
  width: calc(100% - 30px);
  padding-right: 5px;
  padding-top: 2px;
  font-size: .9rem;
  font-weight: 400;
}

#tutorials .sidebar ul.tutorials-by-type li .context .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#tutorials .sidebar ul.tutorials-by-type li .context .summary {
  margin-top: 4px;
}
</style>
