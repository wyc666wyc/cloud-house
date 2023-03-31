type Props = {
  name?: String
}

import { h, resolveComponent } from 'vue'
import { FormComponent } from '@dynamic-form/generator/src/index'
import { inputFormComponent, selectFormComponent, customFormComponent } from '@dynamic-form/generator/src/formComponentConfig'

export default function (props: Props) {
  return (
    <div>
      <div>输入型组件</div>
      {
        raw(inputFormComponent)
      }
      <div>选择型组件</div>
      {
        raw(selectFormComponent)
      }
    </div>
  )
}

const raw = (list: FormComponent[]) => {
  return list.map(({__config__}) => (
    <div>{__config__.name}</div>
  ))
}