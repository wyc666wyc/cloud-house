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
  const cols = 20
  const seats: Seat[] = []
  const selects: Set<number> = new Set()
  for(let row = 0; row < rows; row ++) {
    for(let col = 0; col < cols; col ++) {
      const seat = new Seat(row * grid, col * grid, size, size, raduis)
      seat.draw(ctx)
      seats.push(seat)
    }
  }
  function getIndex(e: MouseEvent) {
    const x = Math.floor(e.clientX / grid)
    const y = Math.floor(e.clientY / grid)
    const index = x * cols + y
    return index
  }
  function getIndex2(e: MouseEvent) {
    const { clientX, clientY } = e
    let index = null
    for(let i = 0; i < seats.length; i++) {
      const { x, y } = seats[i]
      if (clientX < x + size && clientX > x && clientY < y + size && clientY > y) {
        index = i
      }
    }
    return index
  }
  function setSeatStatus(e: MouseEvent) {
    const index = getIndex2(e)
    if (!index && index !== 0 ) return
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
