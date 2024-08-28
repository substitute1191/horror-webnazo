import { useState } from "react"
import GameClearMessage from "./GameClearMessage"
import Drumroll from "./Drumroll"

const Phase3 = () => {
  const [animStep, setAnimStep] = useState(0)

  const handleAnimEnd = () => {
    setAnimStep((prev) => prev + 1)
  }

  return (
    <div
      id="phase2"
      className="bg-yumekawa bg-white/40 bg-cover bg-blend-color"
    >
      <div className="font-pop mx-auto flex h-screen w-full flex-col items-center border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
        <div className="h-40"></div>
        <GameClearMessage onAnimationComplete={handleAnimEnd} />
        {animStep >= 1 ? <Drumroll /> : null}
      </div>
    </div>
  )
}

export default Phase3
