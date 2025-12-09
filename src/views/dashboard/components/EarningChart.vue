<script setup lang="ts">
import { computed } from "vue";

// third party
import { BCard } from "bootstrap-vue-next";

const chartOptions = computed(() => {
  return {
    chart: {
      type: "line",
      height: 210,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#fff"],
    fill: {
      type: "solid",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        width: 0,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        bottom: 0,
        left: 10,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    markers: {
      size: 5,
      colors: "#fff",
      opacity: 0.9,
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "Statistics :";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
});

const lineChart = {
  series: [
    {
      data: [10, 60, 45, 72, 45, 86],
    },
  ],
};
</script>

<template>
  <BCard
    class="bg-primary overflow-hidden"
    header-class="border-0"
    body-class="py-0 p-x-25"
  >
    <template #header>
      <h5 class="text-white">Earnings</h5>
    </template>
    <div class="earning-text mb-4">
      <h3 class="mb-3 text-white f-w-300">
        $4295.36
        <i class="ph ph-arrow-up teal accent-3"></i>
      </h3>
      <span class="text-uppercase text-white d-block">Total Earnings</span>
    </div>
    <!-- ---------------------------------------------------- -->
    <!-- Line Chart -->
    <!-- ---------------------------------------------------- -->
    <apexchart
      type="line"
      height="210"
      class="WidgetlineChart2 ChartShadow"
      :options="chartOptions"
      :series="lineChart.series"
    />
  </BCard>
</template>
