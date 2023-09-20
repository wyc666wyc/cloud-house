import { useEffect } from "react"
import Car from "../../class/Car"

export default function Home() {
  useEffect(() => {
    initCanvas()
  }, [])
  return <canvas id="cvs" style={{background: "#eee"}}></canvas>
}

function initCanvas() {
  const cvs = document.getElementById("cvs")! as HTMLCanvasElement
  cvs.width = 1200
  cvs.height = 600
  const ctx = cvs.getContext("2d")!
  const car = new Car(100, 100, 30, 60)
  car.draw(ctx)

  animate()
  function animate() {
    car.update()
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    car.draw(ctx)
    requestAnimationFrame(animate)
  }
}
