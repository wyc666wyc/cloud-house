import { CSSProperties, computed, defineComponent, h, ref, resolveComponent } from 'vue'
import { FormComponent, FormComponentProp, FormComponentSlot } from '@dynamic-form/generator/src/config'
type Props = {
  attr: FormComponent,
}
// export default function (props: Props, { emit }: any) {
//   console.log('props', props)
//   const { attr } = props
//   const { __config__, __prop__, __slot__ } = attr
//   const children = buildChildren(__slot__)
//   return (
//     <>
//       { h(resolveComponent(__config__.tag), __prop__, children) }
//     </>
//   )
// }

export default defineComponent({
  name: 'DynamicRender',
  props: {
    attr: {
      type: Object,
      required: true,
    },
  },
  setup(props: Props, { emit }: any) {
    const { attr } = props
    const { __config__, __prop__, __slot__ } = attr
    const children = buildChildren(__slot__)
    return () => h(resolveComponent(__config__.tag), __prop__, children)
  }
})
const buildChildren = (slot: FormComponentSlot | undefined) => {
  if (!slot) return () => undefined
  if (slot.options) {
    return slot.options.map((item) => (
      <el-option value={item.value} label={item.label} disabled={item.disabled}></el-option>
    ))
  }
}