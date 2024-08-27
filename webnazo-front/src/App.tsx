import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/components/Home/Home"
import Room from "@/components/Room/Room"
import SoundMenu from "./components/SoundMenu/SoundMenu"
import DragAndDrop from "./practice/DragAndDrop"

const App = () => {
  return (
    <div className="App">
      <SoundMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/practice" element={<DragAndDrop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
