import { useEffect } from "react"
import Car from '../../class/Car'

export default function Home() {
  useEffect(() => {
    initCanvas()
  }, [])
  return <canvas id="cvs"></canvas>
}

function initCanvas() {
  const cvs = document.getElementById("cvs")! as HTMLCanvasElement
  cvs.width = 300
  cvs.height = 600
  const ctx = cvs.getContext("2d")!
  const car = new Car(10, 10, 10, 10)
  car.draw(ctx)
}
