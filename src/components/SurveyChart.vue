<template>
  <div
    :class="['chart-wrapper', chartType === 'doughnut' ? 'chart-doughnut' : 'chart-bar']"
  >
    <Doughnut
      v-if="chartType === 'doughnut'"
      :data="chartData"
      :options="doughnutOptions"
    />
    <Bar
      v-else
      :data="chartData"
      :options="barOptions"
    />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { Bar, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend)

const PALETTE = [
  '#0f5bff',
  '#041336',
  '#5b8def',
  '#1a3a6e',
  '#8fb1f7',
  '#0a2e80',
  '#b8cef9',
  '#6c757d',
  '#adb5bd',
  '#dee2e6',
]

function truncateLabel(label, max = 30) {
  if (!label) return ''
  return label.length > max ? label.slice(0, max) + '...' : label
}

export default defineComponent({
  name: 'SurveyChart',
  components: { Bar, Doughnut },
  props: {
    questionId: { type: String, required: true },
    chartType: { type: String, required: true, validator: (v) => ['horizontal-bar', 'doughnut'].includes(v) },
    labels: { type: Array, required: true },
    data: { type: Array, required: true },
    percentages: { type: Array, required: true },
    animate: { type: Boolean, default: false },
  },
  setup(props) {
    const colors = computed(() => PALETTE.slice(0, props.data.length))

    const chartData = computed(() => ({
      labels: props.chartType === 'doughnut'
        ? props.labels
        : props.labels.map((l) => truncateLabel(l)),
      datasets: [{
        data: props.chartType === 'doughnut' ? props.data : props.percentages,
        backgroundColor: colors.value,
        borderWidth: props.chartType === 'doughnut' ? 2 : 0,
        borderColor: '#fff',
        borderRadius: props.chartType === 'doughnut' ? 0 : 4,
        barPercentage: 0.7,
        categoryPercentage: 0.85,
      }],
    }))

    const animationConfig = computed(() => {
      if (!props.animate) return { duration: 0 }
      return props.chartType === 'doughnut'
        ? { duration: 800, easing: 'easeOutQuart' }
        : { duration: 600, easing: 'easeOutQuart', delay: (ctx) => ctx.dataIndex * 150 }
    })

    const barOptions = computed(() => ({
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: animationConfig.value,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => props.labels[items[0].dataIndex],
            label: (item) => `${props.percentages[item.dataIndex]}% (${props.data[item.dataIndex]})`,
          },
          titleFont: { family: "'Roboto Mono', monospace", size: 12 },
          bodyFont: { family: "'Roboto Mono', monospace", size: 12 },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (v) => v + '%',
            font: { family: "'Roboto Mono', monospace", size: 11 },
            color: 'rgba(0,0,0,0.5)',
          },
          grid: { color: 'rgba(4,26,82,0.06)' },
        },
        y: {
          ticks: {
            font: { family: "'Roboto Mono', monospace", size: 11 },
            color: 'rgba(0,0,0,0.7)',
          },
          grid: { display: false },
        },
      },
    }))

    const doughnutOptions = computed(() => ({
      responsive: true,
      maintainAspectRatio: true,
      animation: animationConfig.value,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 16,
            usePointStyle: true,
            pointStyle: 'circle',
            font: { family: "'Roboto Mono', monospace", size: 11 },
            color: 'rgba(0,0,0,0.7)',
          },
        },
        tooltip: {
          callbacks: {
            label: (item) => `${item.label}: ${props.percentages[item.dataIndex]}% (${props.data[item.dataIndex]})`,
          },
          titleFont: { family: "'Roboto Mono', monospace", size: 12 },
          bodyFont: { family: "'Roboto Mono', monospace", size: 12 },
        },
      },
    }))

    return { chartData, barOptions, doughnutOptions }
  },
})
</script>

<style scoped>
.chart-bar {
  height: 220px;
  position: relative;
}

.chart-doughnut {
  max-width: 320px;
  margin: 0 auto;
}

@media screen and (max-width: 767px) {
  .chart-bar {
    height: 200px;
  }

  .chart-doughnut {
    max-width: 280px;
  }
}
</style>
