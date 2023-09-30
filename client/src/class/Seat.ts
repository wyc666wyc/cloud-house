export default class Seat {
  x: number
  y: number
  w: number
  h: number
  id?: string
  radius: number
  constructor(x: number, y: number, w: number = 20, h: number = 20, radius = 4) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    if (radius > w / 2) {
      this.radius = w / 2
    } else {
      this.radius = radius
    }

  }
  draw(ctx: CanvasRenderingContext2D, color = "transparent") {
    // ctx.strokeRect(this.x, this.y, this.w, this.h)
    ctx.clearRect(this.x - 1, this.y - 1, this.w + 2, this.h + 2)
    const realSize = this.w - this.radius
    ctx.beginPath()
    ctx.moveTo(this.x + this.radius, this.y)
    ctx.lineTo(this.x + realSize, this.y)
    ctx.arcTo(this.x + this.w, this.y, this.x + this.w, this.y + this.radius, this.radius)
    ctx.lineTo(this.x + this.w, this.y + realSize)
    ctx.arcTo(this.x + this.w, this.y + this.h, this.x + realSize, this.y + this.h, this.radius)
    ctx.lineTo(this.x + this.radius, this.y + this.h)
    ctx.arcTo(this.x, this.y + this.h, this.x, this.y + realSize, this.radius)
    ctx.lineTo(this.x, this.y + this.radius)
    ctx.arcTo(this.x, this.y, this.x + this.radius, this.y, this.radius)
    ctx.closePath()

    ctx.fillStyle = color
    ctx.strokeStyle = "blue"
    ctx.fill()
    ctx.stroke()
  }
  changeColor(ctx: CanvasRenderingContext2D, color = "transparent") {
    this.draw(ctx, color)
  }
}
