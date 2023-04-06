import { FormComponent } from '@dynamic-form/generator/src/config'
import { h, ref, resolveComponent } from 'vue'
type Props = {
  config: FormComponent[],
}
export default function(props: Props) {
  const config = ref(props.config)
  return (
    <el-form>
      { config.value.map(({
        __config__
      }) => (
        <el-form-item label={__config__.name}>
          { h(resolveComponent(__config__.tag)) }
        </el-form-item>
      ))}
    </el-form>
  )
}