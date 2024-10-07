import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/components/Home/Home"
import Room from "@/components/Room/Room"
import SoundMenu from "./components/SoundMenu/SoundMenu"
import useFakeCursor from "./components/Room/phase3/Cursor/useFakeCursor"
import useScreenEffect from "./hooks/useScreenEffect"

const App = () => {
  const { isHideCursor } = useFakeCursor()
  const { isRotateScreen } = useScreenEffect()

  return (
    <div
      className={`App ${isHideCursor ? "cursor-none" : ""} ${isRotateScreen ? "rotate-180" : ""} `}
    >
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
