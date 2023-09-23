import { lerp } from '../utils/index'

export default class Road {
  x: number
  w: number
  laneCount: number
  left: number
  right: number
  top: number
  bottom: number
  lineWidth = 5
  constructor(x: number, w: number, laneCount = 3) {
    this.x = x
    this.w = w
    this.laneCount = laneCount
    this.left = x - w / 2
    this.right = x + w / 2
    const infinity = 1000000
    this.top = -infinity
    this.bottom = infinity
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = '#fff'

    for(let i = 0; i <= this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount)
      if (i > 0 && i < this.laneCount) {
        ctx.setLineDash([20, 20])
      } else {
        ctx.setLineDash([])
      }
      ctx.beginPath()
      ctx.moveTo(x, this.top)
      ctx.lineTo(x, this.bottom)
      ctx.stroke()
    }

    // ctx.beginPath()
    // ctx.moveTo(this.right, this.top)
    // ctx.lineTo(this.right, this.bottom)
    // ctx.stroke()
  }
}