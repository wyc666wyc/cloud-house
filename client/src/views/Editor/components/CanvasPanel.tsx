type Props = {
  name?: String
}

import { h, resolveComponent } from 'vue'
import FCConfig from '@dynamic-form/generator/src/formComponentConfig'

export default function (props: Props) {
  return (
    <div>
      {
        FCConfig.map(component => h(resolveComponent(component.__config__.tag)))
      }
    </div>
  )
}