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
  pull: 'clone'
}
export default function (props: Props) {
  const { element, index } = props
  const { __config__: config, __prop__: prop } = element
  const layout = layouts[config.layout]
  return (
    <div>
      <div>
        <el-button onClick={handleDelete(index)}>删除</el-button>
        <el-button onClick={handleCopy(element)}>复制</el-button>
      </div>
      { layout(element, index) }
    </div>
  )
}

const layouts = {
  col(element: FormComponent, index: number) {
    return (
      <el-col>
        <el-form-item label={element.__config__.name}>
          <dynamic-render attr={element}></dynamic-render>
        </el-form-item>
      </el-col>
    )
  },
  row(element: FormComponent, index: number) {
    return (
      <el-row>
        <el-col>
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
      </el-row>
    )
  },
}
const renderChildren = (children: FormComponent[]) => {
  
}
const handleDelete = (index: number) => () => {
  useFormList.deleteItem(index)
}
const handleCopy = (element: FormComponent) => () => {
  useFormList.addItem(element)
}
