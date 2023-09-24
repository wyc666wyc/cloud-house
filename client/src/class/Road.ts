import { lerp } from "../utils/index"
import { Coordinate } from '../../types'

export default class Road {
  x: number
  w: number
  laneCount: number
  left: number
  right: number
  top: number
  bottom: number
  lineWidth = 5

  topLeft: Coordinate
  topRight: Coordinate
  bottomLeft: Coordinate
  bottomRight: Coordinate

  borders: Coordinate[][]
  constructor(x: number, w: number, laneCount = 3) {
    this.x = x
    this.w = w
    this.laneCount = laneCount
    this.left = x - w / 2
    this.right = x + w / 2
    const infinity = 1000000
    this.top = -infinity
    this.bottom = infinity

    this.topLeft = { x: this.left, y: this.top }
    this.topRight = { x: this.right, y: this.top }
    this.bottomLeft = { x: this.left, y: this.bottom }
    this.bottomRight = { x: this.right, y: this.bottom }
    this.borders = [
      [this.topLeft, this.bottomLeft],
      [this.topRight, this.bottomRight]
    ]
  }
  getRoadCenter(index: number) {
    if (index < 0) {
      index = 0
    }
    const laneWidth = this.w / this.laneCount
    return (
      this.left +
      laneWidth / 2 +
      Math.min(index, this.laneCount - 1) * laneWidth
    )
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = "#fff"

    for (let i = 1; i < this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount)
      ctx.setLineDash([20, 20])
      ctx.beginPath()
      ctx.moveTo(x, this.top)
      ctx.lineTo(x, this.bottom)
      ctx.stroke()
    }
    this.borders.forEach(border => {
      const [b1, b2] = border
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.moveTo(b1.x, b1.y)
      ctx.lineTo(b2.x, b2.y)
      ctx.stroke()
    })
  }
}
