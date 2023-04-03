import type { TransferRule } from '../config'
const rule: TransferRule = {
  componentTransfer(tag: string) {
    const reg = /^\b/
    return tag.replace(reg, 'el-')
  }
}
export default rule