import { useState } from "react"
import CubeNet from "@/components/Room/phase4/GetDice/CubeNet"
import Expression from "@/components/Room/phase4/GetDice/Questions/Expression/Expression"
import BarNumber from "@/components/Room/phase4/GetDice/Questions/Bar/BarNumber"
import TV from "@/components/Room/phase4/GetDice/Questions/TV/TV"

const QUESTION_COUNT = 7

export default function DiceQuestionManager() {
  const [whichQuestion, setWhichQuestion] = useState(0)

  // 画像の移動
  const handleClick = (move: number) => {
    setWhichQuestion((prev) => (prev + move + QUESTION_COUNT) % QUESTION_COUNT)
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <button
        className={`absolute left-[5vw] top-[50%] z-20 h-10 w-10 -rotate-45 rounded border-l-4 border-t-4 border-slate-400 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
        onClick={() => handleClick(-1)}
      ></button>
      {whichQuestion === 0 ? <CubeNet /> : null}
      {whichQuestion === 1 ? <BarNumber /> : null}
      {whichQuestion === 2 ? <TV /> : null}
      {whichQuestion === 3 ? <Expression /> : null}
      <button
        className={`absolute right-[5vw] top-[50%] z-20 h-10 w-10 rotate-45 rounded border-r-4 border-t-4 border-slate-400 hover:animate-[hover-r-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
        onClick={() => handleClick(1)}
      ></button>
    </div>
  )
}
