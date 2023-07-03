import { ref } from 'vue'
import { ElColorPicker } from 'element-plus'

interface OptionAttrsProps {
  type: string,
  config: any
}
const OptionAttrs = (props: OptionAttrsProps) => {
  const { type, config } = props
  if (!config && config !== 0) {
    return null
  }
  if (Array.isArray(config)) {
    return renderArray(type, config)
  }
  if (typeof config === 'object') {
    return renderObject(type, config)
  }
  return renderNormal(type, config)
}
const renderArray = (type: string, config: Array<any>) => {
  return (
    <div>
      <label>{type}</label>:
      {
        config.map(item => (
          <div>{item}</div>
        ))
      }
    </div>
  )
}
const renderObject = (type: string, config: Object) => {
  return (
    <>
    {
      Object.entries(config).map(([key, value]) => (
        <OptionAttrs type={key} config={value}></OptionAttrs>
      ))
    }
    </>
  )
}
const renderNormal = (type: string, config: keyof any) => {
  return (
    <div>
      <label>{type}</label>:
      { renderComponent(type, config) }
    </div>
  )
}
const renderComponent = (type: string, config: keyof any) => {
  if (type.toLocaleLowerCase().indexOf('color') > -1) {
    return <ElColorPicker v-model={config}></ElColorPicker>
  }
}
export default OptionAttrs