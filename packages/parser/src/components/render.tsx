import { h, ref, resolveComponent } from 'vue'
import { FormComponent } from '@dynamic-form/generator/src/config'
type Props = {
  attr: FormComponent,
}
export default function (props: Props) {
  const { attr } = props
  const { __config__: config, __prop__: prop } = attr
  return (
    <div>
      { h(resolveComponent(config.tag), prop) }
    </div>
  )
}