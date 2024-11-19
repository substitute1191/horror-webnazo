import CubeNet from "@/components/Room/phase4/GetDice/CubeNet"
import Question1 from "@/components/Room/phase4/GetDice/Questions/Question1"
import { useState } from "react"

const QUESTION_COUNT = 7

export default function DiceQuestionManager() {
  const [whichQuestion, setWhichQuestion] = useState(0)

  // 画像の移動 5を足せばマイナスにも対応できる
  const handleClick = (move: number) => {
    setWhichQuestion((prev) => (prev + move + QUESTION_COUNT) % QUESTION_COUNT)
  }

  return (
    <div className="flex h-full items-center justify-center">
      <button
        className={`absolute left-[5vw] top-[50%] z-20 h-10 w-10 -rotate-45 rounded border-l-4 border-t-4 border-slate-400 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
        onClick={() => handleClick(-1)}
      ></button>
      {whichQuestion === 0 ? <CubeNet /> : null}
      {whichQuestion === 1 ? <Question1 /> : null}
      <button
        className={`absolute right-[5vw] top-[50%] z-20 h-10 w-10 rotate-45 rounded border-r-4 border-t-4 border-slate-400 hover:animate-[hover-r-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
        onClick={() => handleClick(1)}
      ></button>
    </div>
  )
}
