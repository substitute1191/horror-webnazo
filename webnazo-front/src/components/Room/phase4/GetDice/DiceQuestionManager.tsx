import CubeNet from "@/components/Room/phase4/GetDice/CubeNet"
import Expression from "@/components/Room/phase4/GetDice/Questions/Expression/Expression"
import BarNumber from "@/components/Room/phase4/GetDice/Questions/Bar/BarNumber"
import TV from "@/components/Room/phase4/GetDice/Questions/TV/TV"
import LegCount from "@/components/Room/phase4/GetDice/Questions/LegCount/LegCount"
import BuildWords from "@/components/Room/phase4/GetDice/Questions/BuildWords/BuildWords"
import AssembleNumber from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/AssembleNumber"
import useWhichDiceQuestion from "@/components/Room/phase4/GetDice/hooks/useWhichDiceQuestion"

const renderQuestion = (num: number) => {
  switch (num) {
    case 0:
      return <CubeNet />
    case 1:
      return <BarNumber />
    case 2:
      return <Expression />
    case 3:
      return <BuildWords />
    case 4:
      return <LegCount />
    case 5:
      return <TV />
    case 6:
      return <AssembleNumber />
    default:
      return null
  }
}

export default function DiceQuestionManager() {
  const { whichQuestion, handleClick } = useWhichDiceQuestion()

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {whichQuestion !== 6 ? (
        <button
          className={`absolute left-[5vw] top-[50%] z-20 h-10 w-10 -rotate-45 rounded border-l-4 border-t-4 border-slate-200 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
          onClick={() => handleClick(-1)}
        ></button>
      ) : null}
      {renderQuestion(whichQuestion)}
      <button
        className={`absolute right-[5vw] top-[50%] z-20 h-10 w-10 rotate-45 rounded border-r-4 border-t-4 border-slate-200 hover:animate-[hover-r-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
        onClick={() => handleClick(1)}
      ></button>
    </div>
  )
}
