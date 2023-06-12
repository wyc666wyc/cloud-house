Function.prototype.myCall = function(context = window, ...args) {
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
var val = 1
function test(config) {
  typeof config === 'function' ? config(1) : config.success(1)
}
function testCall(config) {
  typeof config === 'function' ? config.myCall(this, 1) : config.success.myCall(this, 1)
}
const vm = this
const p1 = {
  name: 1,
  success(res) {
    console.log(this.val, res)
  }
}
const p2 = function(res) {
  console.log(this, res)
}
testCall(p1)