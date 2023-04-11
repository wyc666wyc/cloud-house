import { h, defineComponent, resolveComponent } from "vue"
import useFormList from "@/hooks/useFormList"
import type { FormComponent } from "@dynamic-form/generator/src/config"
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
    <div>
      <el-button onClick={handleDelete(index)}>删除</el-button>
      <el-button onClick={handleCopy(element)}>复制</el-button>
    </div>
  )
}
const layouts = {
  col(element: FormComponent, index: number) {
    return (
      <el-col onClick={handleClick(element)}>
        <el-form-item label={element.__config__.name}>
          <dynamic-render attr={element}></dynamic-render>
        </el-form-item>
        { itemBtn(element, index) }
      </el-col>
    )
  },
  row(element: FormComponent, index: number) {
    return (
      <el-row>
        <el-col onClick={handleClick(element)}>
          <draggable
            class="drag-row"
            list={element.__config__.children}
            group={group}
            item-key="render"
            animation={200}
            ghost-class="ghostClass"
            chosen-class="chosenClass"
            drag-class="dragClass"
            v-slots={{ item: renderChildren }}
          >
          </draggable>
        </el-col>
        { itemBtn(element, index) }
      </el-row>
    )
  },
}
const renderChildren = (item: { element: FormComponent, index: number }) => {
  const { __config__: config, __prop__: prop } = item.element
  const layout = layouts[config.layout]
  return layout(item.element, item.index)
}
const handleClick = (element: FormComponent) => (e: MouseEvent) => {
  e.preventDefault()
  useFormList.activeItem.value = element
  console.log(element)
}
const handleDelete = (index: number) => () => {
  useFormList.deleteItem(index)
}
const handleCopy = (element: FormComponent) => () => {
  useFormList.addItem(element)
}
