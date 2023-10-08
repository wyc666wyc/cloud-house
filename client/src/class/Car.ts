import Controls from "./Control"
import Sensor from "./Sensor"
import type { Coordinate } from '../../types'
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
  angleScale: number
  controls: Controls
  sensor: Sensor
  constructor(x: number, y: number, w: number, h: number) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.speed = 0
    this.maxSpeed = 10
    this.acceleration = 0.08
    this.friction = 0.02
    this.angle = 0
    this.angleScale = 0.03
    this.controls = new Controls()
    this.sensor = new Sensor(this)
  }
  update(roadBorders: Coordinate[][]) {
    this.#move()
    this.sensor.update(roadBorders)
  }
  #move() {
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
    if (this.speed !== 0) {
      const filp = this.speed > 0 ? 1 : -1
      if (this.controls.left) {
        this.angle += this.angleScale * filp
      }
      if (this.controls.right) {
        this.angle -= this.angleScale * filp
      }
    }
    this.x -= Math.sin(this.angle) * this.speed
    this.y -= Math.cos(this.angle) * this.speed
    this.y -= this.speed
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(-this.angle)
    ctx.beginPath()
    ctx.rect(
      - this.w / 2,
      - this.h / 2,
      this.w,
      this.h
    )
    ctx.fill()
    ctx.restore()
    this.sensor.draw(ctx)
  }
}