export function test() {
  return 1
}

export function getRenderKey() {
  return new Date().getTime().toString(36)
}
export function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, delay)
  })
}