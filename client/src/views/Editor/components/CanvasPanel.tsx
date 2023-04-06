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
    <el-form>
      <draggable
        class="h-full"
        group={group}
        item-key="render"
        list={list.value}
        v-slots={dragSlot}
        onChange={handleChange}
      >
      </draggable>
    </el-form>
  )
}
const dragSlot = {
  item: (item: { element: FormComponent}) => {
    const { __config__: config, __prop__: prop } = item.element
    return (
      <wrapper>
        <el-form-item label={config.name}>
          { h(resolveComponent(config.tag)) }
        </el-form-item>
      </wrapper>
    )
  }
}
const wrapper = (props: any, ctx: { slots: any }) => {
  console.log(props, ctx)
  return (
    <div>
      haha
      { ctx.slots }
    </div>
  )
}
