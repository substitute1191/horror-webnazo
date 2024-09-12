import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/components/Home/Home"
import Room from "@/components/Room/Room"
import SoundMenu from "./components/SoundMenu/SoundMenu"
import useFakeCursor from "./components/Room/phase3/Cursor/useFakeCursor"

const App = () => {
  const { isHideCursor } = useFakeCursor()

  return (
    <div className={`App ${isHideCursor ? "cursor-none" : ""}`}>
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
