import type { FormComponent, TransferRule } from '../config'
export function transfer(config: FormComponent[], transferRules: TransferRule): FormComponent[]  {
  return config.map(({
    type,
    __config__,
    ...rest
  }) => {
    const { tag, ...rest__config__ } = __config__
    const newTag = type === 'custom' ? tag : transferRules.componentTransfer(tag)
    return {
      type,
      __config__: {
        tag: newTag,
        ...rest__config__,
      },
      ...rest
    }
  })
}