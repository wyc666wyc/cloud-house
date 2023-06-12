import { h, defineComponent, resolveComponent } from "vue"
import useFormList from "@/hooks/useFormList"
import type { FormComponent } from "@dynamic-form/generator/src/config"
import {
  DocumentCopy,
  Delete,
} from '@element-plus/icons-vue'
import './index.scss'

type Props = {
  element: FormComponent
  index: number
}
const group = {
  name: 'form',
}
export default function (props: Props) {
  const { element, index } = props
  const { __config__: config, __prop__: prop } = element
  const layout = layouts[config.layout]
  return (
    <div>
      { layout(element, index) }
    </div>
  )
}
const itemBtn = (element: FormComponent, index: number) => {
  return (
    <div class="drag-item-btn">
      <el-button onClick={handleDelete(index)} type="danger" size="small" icon={Delete} circle />
      <el-button onClick={handleCopy(element)} type="primary" size="small" icon={DocumentCopy} circle />
    </div>
  )
}
const layouts = {
  col(element: FormComponent, index: number) {
    const { __config__: config, __prop__: prop } = element
    const className = { 'drag-item': true, 'drag-item-active': useFormList.activeItem.value === element }
    const handleUpdate = (val: any) => {
      console.log('handleInput', val)
      prop.modelValue = val
    }
    return (
      <el-col class={className} span={config.span} onClick={handleClick(element)}>
        <el-form-item label={config.name}>
          <dynamic-render attr={element} modelValue={prop.modelValue} onUpdate:modelValue={handleUpdate}></dynamic-render>
        </el-form-item>
        { itemBtn(element, index) }
      </el-col>
    )
  },
  sub(element: FormComponent, index: number) {
    const { __config__: config, __prop__: prop } = element
    const className = { 'drag-item': true, 'drag-row': true, 'drag-row-active': useFormList.activeItem.value === element }
    return (
      <el-col class={className} span={config.span} onClick={handleClick(element)}>
        <div class='drag-row-title'>{ config.name }</div>
        <draggable
          list={element.__config__.children}
          group={group}
          item-key="render"
          animation={200}
          delay={0}
          force-fallback={true}
          ghost-class="ghostClass"
          chosen-class="chosenClass"
          drag-class="dragClass"
          v-slots={{ item: renderChildren }}
        >
        </draggable>
        { itemBtn(element, index) }
      </el-col>
    )
  },
  container() {
    return (
      <div>container</div>
    )
  }
}
const renderChildren = (item: { element: FormComponent, index: number }) => {
  const { __config__: config, __prop__: prop } = item.element
  const layout = layouts[config.layout]
  return layout(item.element, item.index)
}
const handleClick = (element: FormComponent) => (e: MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
  useFormList.activeItem.value = element
  console.log(element)
}
const handleDelete = (index: number) => () => {
  useFormList.deleteItem(index)
}
const handleCopy = (element: FormComponent) => () => {
  useFormList.addItem(element)
}
