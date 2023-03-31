import type { FormComponent } from './index'

export const inputFormComponent: FormComponent[] = [
  {
    type: 'input',
    __config__: {
      name: '输入框',
      tag: 'el-input',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
]
export const selectFormComponent: FormComponent[] = [
  {
    type: 'input',
    __config__: {
      name: '选择框',
      tag: 'el-select',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
]
export const layoutFormComponent: FormComponent[] = [

]
export const customFormComponent: FormComponent[] = [

]
const formComponent = [
  ...inputFormComponent,
  ...selectFormComponent,
  ...layoutFormComponent,
  ...customFormComponent
]
export default formComponent