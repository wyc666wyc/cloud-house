import type { FormComponent } from "./config"

export const inputConfig: FormComponent[] = [
  {
    type: "input",
    __config__: {
      name: "输入框",
      tag: "input",
      defaultValue: "",
      required: false,
      layout: "col",
      span: 24,
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
      clearable: true,
      style: {
        width: "100%",
      },
      placeholder: "请输入",
    },
    __vModel__: "",
  },
]
export const selectConfig: FormComponent[] = [
  {
    type: "select",
    __config__: {
      name: "选择框",
      tag: "select",
      defaultValue: "",
      required: false,
      layout: "col",
      span: 24,
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
      clearable: true,
      filterable: true,
      style: {
        width: "100%",
      },
      placeholder: "请选择",
    },
    __slot__: {
      options: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
    },
    __vModel__: "",
  },
  {
    type: "select",
    __config__: {
      name: "级联选择",
      tag: "cascader",
      defaultValue: "",
      required: false,
      layout: "col",
      span: 24,
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
      style: {
        width: "100%",
      },
    },
    __vModel__: "",
  },
]
export const layoutConfig: FormComponent[] = [
  {
    type: "layout",
    __config__: {
      name: "容器",
      tag: "container",
      defaultValue: "",
      required: false,
      layout: "container",
      span: 24,
      children: [],
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
    },
    __vModel__: "",
  },
  {
    type: "layout",
    __config__: {
      name: "子表单",
      tag: "sub",
      defaultValue: "",
      required: false,
      layout: "sub",
      span: 24,
      children: [],
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
    },
    __vModel__: "",
  },
]
export const customConfig: FormComponent[] = [
  {
    type: "custom",
    __config__: {
      name: "示例",
      tag: "Example",
      defaultValue: "",
      required: false,
      layout: "col",
      span: 24,
      renderKey: "",
    },
    __prop__: {
      modelValue: null,
    },
    __vModel__: "",
  },
]
