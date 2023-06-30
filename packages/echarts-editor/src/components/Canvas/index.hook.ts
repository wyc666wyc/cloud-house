import { ref, nextTick } from 'vue'
import { init, EChartsType } from 'echarts'

export type { EChartsOption } from 'echarts'

export const useChart = () => {
  const chartRef = ref<HTMLElement | null>(null)
  const chartInstance = ref<EChartsType>()
  nextTick(() => {
    chartInstance.value = init(chartRef.value!)
  })
  return {
    chartRef,
    chartInstance
  }
}