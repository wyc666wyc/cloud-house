import { h, defineComponent, resolveComponent } from "vue"
import useFormList from "@/hooks/useFormList"
import render from '@dynamic-form/parser/src/components/render'
import type { FormComponent } from "@dynamic-form/generator/src/config"

type Props = {
  element: FormComponent
  index: number
}

export default function (props: Props) {
  const { element, index } = props
  const { __config__: config, __prop__: prop } = element
  return (
    <div>
      <div>
        <el-button onClick={handleDelete(index)}>删除</el-button>
        <el-button onClick={handleCopy(element)}>复制</el-button>
      </div>
      <el-form-item label={config.name}>
        <dynamic-render attr={element}></dynamic-render>
      </el-form-item>
    </div>
  )
}
const handleDelete = (index: number) => () => {
  useFormList.deleteItem(index)
}
const handleCopy = (element: FormComponent) => () => {
  useFormList.addItem(element)
}
