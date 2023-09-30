import { useEffect } from "react"
import Seat from "../../class/Seat"

export default function Home() {
  useEffect(() => {
    initCanvas()
  }, [])
  return <canvas id="cvs" style={{background: "#ccc"}}></canvas>
}

function initCanvas() {
  const cvs = document.getElementById("cvs")! as HTMLCanvasElement
  cvs.width = window.innerWidth
  cvs.height = window.innerHeight
  const ctx = cvs.getContext("2d")!

  const size = 20
  const margin = 6
  const raduis = 2
  const grid = size + margin
  const rows = 15
  const cols = 200
  const seats: Seat[] = []
  const selects: Set<number> = new Set()
  for(let row = 0; row < rows; row ++) {
    for(let col = 0; col < cols; col ++) {
      const seat = new Seat(row * grid, col * grid, size, size, raduis)
      seat.draw(ctx)
      seats.push(seat)
    }
  }
  function setSeatStatus(e: MouseEvent) {
    const x = Math.floor(e.clientX / grid)
    const y = Math.floor(e.clientY / grid)
    const index = x * cols + y
    if (selects.has(index)) {
      seats[index].changeColor(ctx, 'transparent')
      selects.delete(index)
    } else {
      seats[index].changeColor(ctx, 'yellow')
      selects.add(index)
    }
  }
  cvs.addEventListener('click', setSeatStatus)
  // cvs.addEventListener('toch')
  animate()
  function animate() {

  }
}
