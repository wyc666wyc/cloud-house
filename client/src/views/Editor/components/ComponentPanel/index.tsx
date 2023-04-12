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
    pull: "clone",
    put: false
  }
  return props.list.length ? (
    <draggable
      group={group}
      clone={cloneElement}
      sort={false}
      delay={0}
      force-fallback={true}
      item-key="component"
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
    <div>
      <el-button onClick={handleClick(item.element)}>{config.name}</el-button>
    </div>
  )
}
const cloneElement = (item: FormComponent) => {
  return cloneDeep(item)
}
const handleClick = (item: FormComponent) => () => {
  const clone = cloneDeep(item)
  useFormList.activeItem.value = clone
  useFormList.addItem(clone)
}