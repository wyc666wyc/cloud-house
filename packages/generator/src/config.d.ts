import { CSSProperties } from "vue"
import { layouts, componentTypes, customTags } from './index'
// import { TupleToUnion } from '@dynamic-form/utils/src/typings/utils'

export type TupleToUnion<T extends readonly any[]> = keyof {
  [K in T[number]]
}

type FormLayout = TupleToUnion<typeof layouts>
type FormComponentType = TupleToUnion<typeof componentTypes>
type FormComponentConfig = {
  name: string,
  tag: string,
  defaultValue: string | number | Array<unknown> | null | undefined,
  required: boolean,
  layout: FormLayout,
  span: number,
  regList?: Array<unknown>,
  labelWidth?: number,
  showLabel?: boolean,
  isHidden?: boolean,
  icon?: string,
  children?: FormComponent[],
  renderKey: string,
}
type FormComponentProp = {
  value: string | number | Array<unknown> | null | undefined,
  readonly?: boolean,
  disabled?: boolean
  clearable?: boolean,
  maxlength?: number,
  placeholder?: string,
  style?: CSSProperties,
  'prefix-icon'?: string,
  'suffix-icon'?: string,
  'show-word-limit'?: boolean,
}
type FormComponentSlot = {
  options?: FormComponentSlotOption[],
}
type FormComponentSlotOption = {
  label: string,
  value: string | number,
  disabled?: boolean,
}
type FormComponent = {
  type: FormComponentType
  __config__: FormComponentConfig,
  __prop__: FormComponentProp,
  __slot__?: FormComponentSlot,
  __vModel__?: string,
}

type TransferRule = {
  componentTransfer: (tag: string) => string
  ruleTransfer?: (rule: string) => string
}