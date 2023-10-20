export interface Coordinate {
  x: number
  y: number
}

export interface Reading extends Coordinate {
  offset: number
}

export interface CarConfig {
  maxSpeed: number
  acceleration: number
  friction: number
}