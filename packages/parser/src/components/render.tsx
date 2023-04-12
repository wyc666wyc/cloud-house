import { CSSProperties, h, ref, resolveComponent } from 'vue'
import { FormComponent, FormComponentSlot } from '@dynamic-form/generator/src/config'
type Props = {
  attr: FormComponent,
}
export default function render (props: Props) {
  const { attr } = props
  const { __config__, __prop__, __slot__ } = attr
  const children = buildChildren(__slot__)
  return (
    <>
      { h(resolveComponent(__config__.tag), __prop__, children) }
    </>
  )
}

const buildChildren = (slot: FormComponentSlot | undefined) => {
  if (!slot) return () => undefined
  if (slot.options) {
    return slot.options.map((item) => (
      <el-option value={item.value} disabled={item.disabled}>{item.label}</el-option>
    ))
  }
}