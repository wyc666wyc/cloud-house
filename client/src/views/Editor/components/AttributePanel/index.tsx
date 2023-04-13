import { ref, computed, watch } from 'vue'
import useFormList from "@/hooks/useFormList"
import type { FormComponent } from "@dynamic-form/generator/src/config"
import { Minus, Plus } from '@element-plus/icons-vue'
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
      <el-form class="attributePanel-form" style={{ display: display('component').value }}>
        { componentConfig(activeItem) }
      </el-form>
      <el-form class="attributePanel-form" style={{ display: display('form').value }}>
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
  const { __config__: config, __prop__: prop, __slot__: slot, __vModel__ } = activeItem 
  return (
    <>
      <el-form-item label="标题">
        <el-input v-model={config.name}></el-input>
      </el-form-item>
      <el-form-item label="字段名">
        <el-input v-model={__vModel__}></el-input>
      </el-form-item>
      <el-form-item label="占位提示">
        <el-input v-model={prop.placeholder}></el-input>
      </el-form-item>
    </>
  )
}
const selectAttrs = (activeItem: FormComponent) => {
  const { __config__: config, __prop__: prop, __slot__: slot } = activeItem
  const handleAddOption = () => {
    slot?.options?.push({
      label: '',
      value: '',
      disabled: false
    })
  }
  const handleDeleteOption = (index: number) => () => {
    slot?.options?.splice(index, 1)
  }
  return (
    <>
      <el-divider>
        选项
      </el-divider>
      {
        slot?.options?.map((item, index) => {
          return (
            <div class="flex items-center gap-1 mb-2">
              <el-input v-model={item.label} placeholder='选项名'></el-input>
              <el-input v-model={item.value} placeholder='选项值'></el-input>
              <el-button type="danger" icon={Minus} circle size="small" onClick={handleDeleteOption(index)}></el-button>
            </div>
          )
        })
      }
      <el-button text type="primary" icon={Plus} onClick={handleAddOption}>添加选项</el-button>
    </>
  )
}