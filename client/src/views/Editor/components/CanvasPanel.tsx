type Props = {
  name?: String
}

import { h, resolveComponent, defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'
// import FCConfig from '@dynamic-form/generator/src/index'
import type { FormComponent } from '@dynamic-form/generator/src/config'

const group = {
  name: 'form',
  pull: 'clone'
}
export default defineComponent({
  components: {
    draggable
  },
  setup(props: Props) {
    const list = ref<FormComponent[]>([])
    const handleChange = () => {
      console.log(list.value)
    }
    return () => (
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
})

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
