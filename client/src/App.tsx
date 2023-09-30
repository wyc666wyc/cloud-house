import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./views/home"
import Ticket from "./views/ticket"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
      </Routes>
    </div>
  )
}

export default App
