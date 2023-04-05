import { FormComponent } from '@dynamic-form/generator/src/config'
import { ref, Ref, toRefs } from 'vue'
type Props = {
  config: FormComponent[],
}
export default function(props: Props) {
  const config = ref(props.config)
  return (
    <div>
      { config.value.map(({
        __config__
      }) => (
        <div>{ __config__.name }</div>
      ))}
    </div>
  )
}