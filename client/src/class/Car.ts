export default class Car {
  x: number
  y: number
  w: number
  h: number
  constructor(x: number, y: number, w: number, h: number) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.rect(
      this.x,
      this.y,
      this.w,
      this.h
    )
    ctx.fill()
  }
}