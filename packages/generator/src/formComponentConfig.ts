import type { FormComponent } from './config'

export const inputConfig: FormComponent[] = [
  {
    type: 'input',
    __config__: {
      name: '输入框',
      tag: 'input',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
]
export const selectConfig: FormComponent[] = [
  {
    type: 'select',
    __config__: {
      name: '选择框',
      tag: 'select',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
  {
    type: 'select',
    __config__: {
      name: '级联选择',
      tag: 'cascader',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
]
export const layoutConfig: FormComponent[] = [

]
export const customConfig: FormComponent[] = [

]