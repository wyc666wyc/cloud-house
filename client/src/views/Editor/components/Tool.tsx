import { ref } from 'vue'
import type { FormComponent } from '@dynamic-form/generator/src/config'
import Parser from '@dynamic-form/parser/src/views/Parser/index'

const config: FormComponent[] = []

export default function() {
  return (
    <div>
      <el-button onClick={handlePreview}>预览</el-button>
      <el-button>清空</el-button>
      <el-dialog v-model={visible.value}>
        <Parser config={config}></Parser>
      </el-dialog>
    </div>
  )
}
const visible = ref(false)
const handlePreview = () => {
  visible.value = true
}