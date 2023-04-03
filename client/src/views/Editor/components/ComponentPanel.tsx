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
  const group = {
    name: 'form',
    pull: 'clone'
  }
  return (
    props.list.length ? <draggable
      group={group}
      sort={false}
      item-key='test'
      list={props.list}
      v-slots={dragSlot}
    /> : '暂无数据'
  )
}
const dragSlot = {
  item: (item: { element: FormComponent}) => {
    return (
      <el-button>{item.element.__config__.name}</el-button>
    )
  }
}