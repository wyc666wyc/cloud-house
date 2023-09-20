import Controls from "./Control"
export default class Car {
  x: number
  y: number
  w: number
  h: number
  speed: number
  maxSpeed: number
  acceleration: number
  friction: number
  angle: number
  controls: Controls
  constructor(x: number, y: number, w: number, h: number) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.speed = 0
    this.maxSpeed = 10
    this.acceleration = 0.1
    this.friction = 0.02
    this.angle = 0
    this.controls = new Controls()
  }
  update() {
    if (this.controls.forward) {
      this.speed += this.acceleration
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2
    }
    if (this.speed > 0) {
      this.speed -= this.friction
    }
    if(this.speed < 0) {
      this.speed += this.friction
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0
    }
    if (this.controls.left) {
      this.angle += 0.03
    }
    if (this.controls.right) {
      this.angle -= 0.03
    }
    this.y -= this.speed
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(-this.angle)
    ctx.beginPath()
    ctx.rect(
      - this.w / 2,
      - this.y / 2,
      this.w,
      this.h
    )
    ctx.fill()
    ctx.restore()
  }
}