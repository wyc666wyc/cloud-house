import { ref } from 'vue'
import type { FormComponent } from '@dynamic-form/generator/src/config'
import Parser from '@dynamic-form/parser/src/views/Parser/index'
import useFormList from '@/hooks/useFormList'

export default function() {
  const { list, clear } = useFormList()
  return (
    <div>
      <el-button onClick={handlePreview}>预览</el-button>
      <el-button onClick={clear}>清空</el-button>
      <el-dialog v-model={visible.value}>
        <Parser config={list.value}></Parser>
      </el-dialog>
    </div>
  )
}
const visible = ref(false)
const handlePreview = () => {
  visible.value = true
}