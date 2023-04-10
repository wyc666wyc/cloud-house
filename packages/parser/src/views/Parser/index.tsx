import { FormComponent } from '@dynamic-form/generator/src/config'
import { h, ref, resolveComponent } from 'vue'

type Props = {
  config: FormComponent[],
}
export default function(props: Props) {
  const config = ref(props.config)
  return (
    <el-form>
      {
        config.value.map((item) => {
          const { __config__, __prop__ } = item
          return (
            <el-form-item label={__config__.name}>
              <dynamic-render attr={item}></dynamic-render>
            </el-form-item>
          )
        })
      }
    </el-form>
  )
}