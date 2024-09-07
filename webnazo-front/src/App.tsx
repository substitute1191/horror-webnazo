import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/components/Home/Home"
import Room from "@/components/Room/Room"
import SoundMenu from "./components/SoundMenu/SoundMenu"

const App = () => {
  return (
    <div className="App">
      <SoundMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
