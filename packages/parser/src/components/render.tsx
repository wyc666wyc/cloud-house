import { CSSProperties, computed, defineComponent, h, ref, render, resolveComponent } from 'vue'
import { FormComponent, FormComponentProp, FormComponentSlot } from '@dynamic-form/generator/src/config'
type Props = {
  attr: FormComponent,
}
// export default function render (props: Props, { emit }: any) {
//   console.log('props', props)
//   const { attr } = props
//   const { __config__, __prop__, __slot__ } = attr
//   const children = buildChildren(__slot__)
//   const handleInput = (val: any) => {
//     console.log(val)
//     emit('update:attr', { ...attr, __prop__: { ...__prop__, value: val } })
//   }
//   const prop = {
//     ...__prop__,
//     onInput: handleInput,
//   }
//   return (
//     <>
//       { h(resolveComponent(__config__.tag), prop, children) }
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
    modelValue: {

    }
  },
  emits: ['update:modelValue'],
  setup(props: Props, { emit }: any) {
    const { attr } = props
    const { __config__, __prop__, __slot__ } = attr
    const children = buildChildren(__slot__)
    const handleInput = (val: any) => {
      console.log(val)
      emit('update:modelValue', val)
    }
    return () => h(resolveComponent(__config__.tag), {
      value: __prop__.value,
      onInput: handleInput,
    }, children)
  }
})
const buildChildren = (slot: FormComponentSlot | undefined) => {
  if (!slot) return () => undefined
  if (slot.options) {
    return slot.options.map((item) => (
      <el-option value={item.value} disabled={item.disabled}>{item.label}</el-option>
    ))
  }
}