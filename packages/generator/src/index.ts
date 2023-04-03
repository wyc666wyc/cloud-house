import {} from './config'
import { inputConfig, selectConfig, layoutConfig, customConfig } from './formComponentConfig'
import { transfer } from './componentsMapping/transfer'
import elementPlus from './componentsMapping/element-plus'
export const layouts = ['col', 'row'] as const
export const componentTypes = ['input', 'select', 'layout', 'custom'] as const

export const inputFormComponent = transfer(inputConfig, elementPlus)
export const selectFormComponent = transfer(selectConfig, elementPlus)
export const layoutFormComponent = transfer(layoutConfig, elementPlus)
export const customFormComponent = transfer(customConfig, elementPlus)

const formComponent = [
  ...inputFormComponent,
  ...selectFormComponent,
  ...layoutFormComponent,
  ...customFormComponent
]
export default formComponent