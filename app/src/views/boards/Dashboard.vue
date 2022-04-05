<template>
  <div id="dashboard" class="panel-board relative">
    <h1>リアクツールにようこそ</h1>
<!--    <div class="content flex">-->
<!--      <div class="chart-wrapper">-->
<!--        <div class="ph flex justify-space-between">-->
<!--          <h3>会社全体セール数</h3>-->
<!--          <h4>合計部屋数{{ company.overview.total_rooms }}</h4>-->
<!--        </div>-->
<!--        <div class="chart">-->
<!--          <Chart type="doughnut" :data="completeStatusChart" :options="lightOptions"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="chart-wrapper">-->
<!--        <div class="ph flex justify-space-between">-->
<!--          <h3>物件ごと売り上げ</h3>-->
<!--          <h4>合計売り上げ{{ company.overview.total_sales }}万円</h4>-->
<!--        </div>-->
<!--        <div class="chart">-->
<!--          <Chart type="doughnut" :data="salesByProject" :options="lightOptions"/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Chart from "primevue/chart";

import useStore from "@/helpers/useStore";

const {company} = useStore()
const pallet: string[] = ["#FDA7DF", "#9980FA", "#B53471", "#006266", "#F79F1F", "#EE5A24", "#FFC312", "#1B1464", "#0652DD", "#2ecc71"]
const colors: string[] = company.value.overview.projects.map((item, i) => {
  return pallet[i]
})
const projects: string[] = company.value.overview.projects.map(item => {
  return item.name.replaceAll("<br>", "")
})
const sales: number[] = company.value.overview.projects.map(item => {
  return item.sales
})



const completeStatusChart = ref<any>({
  labels: ['完売済', '未完売'],
  datasets: [
    {
      data: [company.value.overview.total_completed, company.value.overview.total_uncompleted],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"]
    }
  ]
});

const salesByProject = ref<any>({
  labels: projects,
  datasets: [
    {
      data: sales,
      backgroundColor: colors,
      hoverBackgroundColor: colors
    }
  ]
});


const lightOptions = ref<any>({
  plugins: {
    legend: {
      labels: {
        color: '#495057'
      }
    }
  }
});
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

#dashboard .chart-wrapper {
  width: 300px;
  height: 340px;
  border: 1px solid #f5f6fa;
  padding: 14px;
  margin: 7px;
}

#dashboard .chart-wrapper .ph {
  height: 40px;
}

#dashboard .chart-wrapper .ph h3 {
  font-weight: 500;
  font-size: .8rem;
}

#dashboard .chart-wrapper .ph h4 {
  font-weight: 400;
  font-size: .8rem;
  color: #969595;
}

#dashboard .chart-wrapper .chart {
  width: 100%;
}
</style>
