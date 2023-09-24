import Car from "./Car"
import { lerp } from '../utils'
import { Coordinate } from '../../types'

export default class Sensor {
  car: Car
  rayCount: number
  rayLength: number
  raySpred: number
  rays: Coordinate[][]
  readings: []
  constructor(car: Car, rayCount = 10) {
    this.car = car
    this.rayCount = rayCount
    this.rayLength = 100
    this.raySpred = Math.PI / 4
    this.rays = []
  }
  update(roadBorders: Coordinate[][]) {
    this.#castRays()
    this.readings = []
    this.rays.forEach(ray => {
      this.readings.push(
        this.#getReadings(ray, roadBorders)
      )
    })
  }
  #getReadings(ray: Coordinate[], roadBorders: Coordinate[][]) {

  }
  #castRays() {
    this.rays.length = 0
    const { x, y } = this.car
    for(let i = 0; i < this.rayCount; i++) {
      const angle = lerp(this.raySpred / 2, -this.raySpred / 2, this.rayCount === 1 ? 0.5 : (i / (this.rayCount - 1))) + this.car.angle
      const start = { x, y }
      const end = {
        x: x - Math.sin(angle) * this.rayLength,
        y: y - Math.cos(angle) * this.rayLength
      }
      this.rays.push([start, end])
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.rays.forEach(([start, end]) => {
      ctx.beginPath()
      ctx.strokeStyle = 'yellow'
      ctx.lineWidth = 2
  
      ctx.moveTo(start.x, start.y)
      ctx.lineTo(end.x, end.y)
      ctx.stroke()
    })
  }
}