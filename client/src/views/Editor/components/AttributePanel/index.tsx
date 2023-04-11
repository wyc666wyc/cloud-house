import { ref, computed, watch } from 'vue'
import useFormList from "@/hooks/useFormList"
import type { FormComponent } from "@dynamic-form/generator/src/config"
import './index.scss'

const attrType = ref('component')
export default function () {
  const activeItem = useFormList.activeItem.value
  const display = (type: string) => {
    return computed(() => {
      return attrType.value === type ? 'block' : 'none'
    })
  }
  return (
    <div class="attributePanel">
      <el-tabs v-model={attrType.value}>
        <el-tab-pane label="组件属性" name="component"></el-tab-pane>
        <el-tab-pane label="表单属性" name="form"></el-tab-pane>
      </el-tabs>
      <el-form style={{ display: display('component').value }}>
        { componentConfig(activeItem) }
      </el-form>
      <el-form style={{ display: display('form').value }}>
        { formConfig() }
      </el-form>
    </div>
  )
}
const formConfig = () => {
  return (
    <div>表单属性</div>
  )
}
const componentConfig = (activeItem: FormComponent | null) => {
  if (!activeItem) {
    return (
      <el-empty />
    )
  }
  return (
    <div>
      { baseAttrs(activeItem) }
      { selectAttrs(activeItem) }
    </div>
  )
}
const baseAttrs = (activeItem: FormComponent) => {
  const { __config__: config, __prop__: prop, __slot__: slot } = activeItem 
  return (
    <>
      <el-form-item label="标题">
        <el-input v-model={config.name}></el-input>
      </el-form-item>
      <el-form-item label="占位提示">
        <el-input v-model={prop.placeholder}></el-input>
      </el-form-item>
    </>
  )
}
const selectAttrs = (activeItem: FormComponent) => {
  const { __config__: config, __prop__: prop, __slot__: slot } = activeItem 
  return (
    <>
      <el-form-item label="">
        <el-input v-model={config.name}></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model={config.name}></el-input>
      </el-form-item>
    </>
  )
}