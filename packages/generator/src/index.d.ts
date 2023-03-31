import { CSSProperties } from "vue"

type FormLayout = 'col' | 'row'
type FormComponentType = 'input' | 'select' | 'layout' | 'custom'
type FormComponentConfig = {
  name: string,
  tag: string,
  defaultValue: string | number | Array | null | undefined,
  required: boolean,
  layout: FormLayout,
  span: number,
  regList?: Array<unknown>,
  labelWidth?: number,
  showLabel?: boolean,
  isHidden?: boolean,
  icon?: string,
}
type FormComponentProp = {
  style?: CSSProperties
  readonly?: boolean,
  disabled?: boolean
  clearable?: boolean,
  maxlength?: number,
  placeholder?: string,
}
type FormComponentSlot = {

}
type FormComponent = {
  type: FormComponentType
  __config__: FormComponentConfig,
  __prop__: FormComponentProp,
  __slot__?: FormComponentSlot,
}

type UIMapping = {
  components: FormComponent[],
  formRules: {}
}