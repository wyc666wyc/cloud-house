export interface Coordinate {
  x: number
  y: number
}

export interface Reading extends Coordinate {
  offset: number
}