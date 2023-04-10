// import { h, resolveComponent, defineComponent } from 'vue'
import { cloneDeep } from 'lodash-es'
import { FormComponent } from "@dynamic-form/generator/src/config"
import {
  inputFormComponent,
  selectFormComponent,
  layoutFormComponent,
  customFormComponent
} from "@dynamic-form/generator/src/index"
import useFormList from "@/hooks/useFormList"

export default function () {
  return (
    <div>
      <div>输入型组件</div>
      {<componentGroup list={inputFormComponent}></componentGroup>}
      <div>选择型组件</div>
      {<componentGroup list={selectFormComponent}></componentGroup>}
      <div>布局型组件</div>
      {<componentGroup list={layoutFormComponent}></componentGroup>}
      <div>自定义组件</div>
      {<componentGroup list={customFormComponent}></componentGroup>}
    </div>
  )
}
const componentGroup = (props: { list: FormComponent[] }) => {
  const group = {
    name: "form",
    pull: "clone"
  }
  return props.list.length ? (
    <draggable
      group={group}
      sort={false}
      item-key="test"
      list={props.list}
      v-slots={{ item: dragItemSlot }}
    />
  ) : (
    "暂无数据"
  )
}
const dragItemSlot = (item: { element: FormComponent }) => {
  const { __config__: config, __prop__: prop } = item.element
  return (
    <el-button onClick={handleClick(item.element)}>{config.name}</el-button>
  )
}
const handleClick = (item: FormComponent) => () => {
  useFormList.addItem(cloneDeep(item))
}
