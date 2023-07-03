import { defineComponent, toRefs } from 'vue'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import type { PropType } from 'vue'
import type { EChartsOption } from 'echarts'

export default defineComponent({
  props: {
    option: Object as PropType<EChartsOption>
  },
  setup(props, { emit }) {
    const { option } = toRefs(props)
    return () => (
      <div>
        {
          option.value
          ? <ElCollapse>
            {
              Object.entries(option.value).map(([key, value]) => (
                <ElCollapseItem title={key}>
                  <OptionAttrs type={key} config={value}></OptionAttrs>
                </ElCollapseItem>
              ))
            }
          </ElCollapse>
          : <div>配置项</div>
        }
      </div>
    )
  }
})

interface OptionAttrsProps {
  type: string,
  config: unknown
}
const OptionAttrs = (props: OptionAttrsProps) => (
  <div>1</div>
)

const xAxisFragment = () => {

}