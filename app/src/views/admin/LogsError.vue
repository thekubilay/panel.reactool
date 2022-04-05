<template>
  <div id="admin-app-routes" class="admin-board">
    <BarTool class="justify-space-between">
      <div class="part-wrap">
<!--        <Button type="button" class="submit-button" icon="pi pi-plus" icon-pos="left" label="新規ルート"-->
<!--                @click="create()"/>-->
      </div>
    </BarTool>


    <div class="spreadsheet-wrapper overflow-x">
      <div class="sh-container ss-container">
        <div class="sheet-row sheet-row-header flex align-center">
          <div class="sheet-cell num flex align-center">#</div>
          <div class="sheet-cell value flex align-center">Method</div>
          <div class="sheet-cell value flex align-center">エンドポイント</div>
          <div class="sheet-cell value flex align-center">ステータスコード</div>
          <div class="sheet-cell value sheet-cell-long flex align-center">原因</div>
          <div class="sheet-cell value flex align-center">発生日時</div>
        </div>
      </div>
      <div class="sb-container ss-container">
        <div v-for="(element, idx) in errors" :key="element.id"
             class="sheet-row flex align-center relative pointer">
          <div class="sheet-cell num flex align-center"><span class="text block">{{ idx + 1 }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.method }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.endpoint }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.status }}</span></div>
          <div class="sheet-cell value sheet-cell-long flex align-center"><span class="text block">{{ element.problem }}</span></div>
          <div class="sheet-cell value flex align-center"><span class="text block">{{ element.created_at }}</span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import BarTool from "@/components/bars/BarTool.vue";


import useStore from "@/helpers/useStore";
import {useRoute} from "vue-router";


const route = useRoute()
const {errors} = useStore()

</script>
