import { ref, defineComponent, nextTick, PropType, watch } from 'vue'
import { useChart, EChartsOption } from './index.hook'

export default defineComponent({
  props: {
    option: Object as PropType<EChartsOption>
  },
  setup(props, { emit }) {
    const { chartRef, chartInstance } = useChart()
    watch(() => props.option, (val) => {
      if (!props.option) return
      chartInstance.value?.setOption(props.option)
    })
    return () => (
      <div ref={chartRef}></div>
    )
  }
})