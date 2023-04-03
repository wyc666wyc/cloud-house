type Props = {
  name?: String
}

import { h, resolveComponent, defineComponent } from 'vue'
import draggable from 'vuedraggable'
import { FormComponent } from '@dynamic-form/generator/src/config'
import { inputFormComponent, selectFormComponent, layoutFormComponent, customFormComponent } from '@dynamic-form/generator/src/index'

export default defineComponent({
  components: {
    draggable
  },
  render: () => (
    <div>
      <div>输入型组件</div>
      {
        <componentGroup list={inputFormComponent}></componentGroup>
      }
      <div>选择型组件</div>
      {
        <componentGroup list={selectFormComponent}></componentGroup>
      }
      <div>布局型组件</div>
      {
        <componentGroup list={layoutFormComponent}></componentGroup>
      }
      <div>自定义组件</div>
      {
        <componentGroup list={customFormComponent}></componentGroup>
      }
    </div>
  )
})
const componentGroup = (props: {list: FormComponent[]}) => {
  return (
    <draggable
      item-key='test'
      list={props.list}
      v-slots={dragSlot}
    />
  )
}
const dragSlot = {
  item: ({ element: FormComponent}) => {
    return h(resolveComponent(element.tag))
  }
}
// const componentGroup = (list: FormComponent[]) => {
//   return {
//     item: list.map(({__config__}) => (
//       <div>{__config__.name}</div>
//     ))
//   }
// }