import { useEffect } from "react"
import Car from "../../class/Car"
import Road from "../../class/Road"

export default function Home() {
  useEffect(() => {
    initCanvas()
  }, [])
  return <canvas id="cvs" style={{background: "#ccc"}}></canvas>
}

function initCanvas() {
  const cvs = document.getElementById("cvs")! as HTMLCanvasElement
  cvs.width = 300
  cvs.height = window.innerHeight
  const ctx = cvs.getContext("2d")!
  const car = new Car(150, 100, 30, 50)
  car.draw(ctx)
  const road = new Road(cvs.width / 2, cvs.width * 0.9)
  animate()
  function animate() {
    car.update()
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    road.draw(ctx)
    car.draw(ctx)
    requestAnimationFrame(animate)
  }
}
