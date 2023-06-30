import { ref, defineComponent, nextTick } from 'vue'
import { useChart, EChartsOption } from './index.hook'

export default defineComponent({
  setup(props, { emit }) {
    const { chartRef, chartInstance } = useChart()
    const setOption = () => {
      const option: EChartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
      chartInstance.value?.setOption(option)
    }
    nextTick(() => {
      setOption()
    })
    return () => (
      <div ref={chartRef}></div>
    )
  }
})