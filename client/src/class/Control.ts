export default class Controls {
  forward
  right
  left
  reverse
  constructor() {
    this.forward = false
    this.right = false
    this.left = false
    this.reverse = false
    this.#addEventListener()
  }
  #addEventListener() {
    document.onkeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true
          break
        case "ArrowUp":
          this.forward = true
          break
        case "ArrowRight":
          this.right = true
          break
        case "ArrowDown":
          this.reverse = true
          break
        default:
          break
      }
    }
    document.onkeyup = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false
          break
        case "ArrowUp":
          this.forward = false
          break
        case "ArrowRight":
          this.right = false
          break
        case "ArrowDown":
          this.reverse = false
          break
        default:
          break
      }
    }
  }
}
