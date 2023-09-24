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
  const road = new Road(cvs.width / 2, cvs.width * 0.9)
  const car = new Car(road.getRoadCenter(0), 100, 30, 50)
  // const car2 = new Car(road.getRoadCenter(1), 100, 30, 50)
  animate()
  function animate() {
    car.update(road.borders)
    ctx.clearRect(0, 0, cvs.width, cvs.height)

    ctx.save()
    ctx.translate(0, -car.y + cvs.height / 2)
    road.draw(ctx)
    car.draw(ctx)
    // car2.draw(ctx)
    ctx.restore()
    requestAnimationFrame(animate)
  }
}
