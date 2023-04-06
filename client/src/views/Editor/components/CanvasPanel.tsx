import { h, resolveComponent, ref } from 'vue'
import type { FormComponent } from '@dynamic-form/generator/src/config'
import useFormList from '@/hooks/useFormList'

const group = {
  name: 'form',
  pull: 'clone'
}

export default function() {
  const { list } = useFormList()
  const handleChange = () => {
    console.log(list.value)
  }
  return (
    <draggable
      group={group}
      item-key="render"
      list={list.value}
      v-slots={dragSlot}
      onChange={handleChange}
    >
    </draggable>
  )
}
const dragSlot = {
  item: (item: { element: FormComponent}) => {
    const { __config__: config, __prop__: prop } = item.element
    return (
      <div>
        <div>{config.name}</div>
        { h(resolveComponent(config.tag)) }
      </div>
    )
  }
}
