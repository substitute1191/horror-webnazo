import useExpression from "@/components/Room/phase4/GetDice/Questions/Expression/useExpression"
import useIsBarActive from "@/components/Room/phase4/GetDice/Questions/Bar/useIsBarActive"
import useViewer from "@/components/Room/phase4/GetDice/Questions/TV/useViewer"
import useLegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useLegCountAnswer"
import useBuildWordsAns from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useBuildWordsAns"
import useAssembledNumber from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/useAssembledNumber"

// ３ｘ４のマス目に左上から番号を振った時、描画されない番号のリスト
const HIDDEN_SPACE = [0, 2, 3, 8, 10, 11]

const isHiddenSpace = (num: number) => {
  return HIDDEN_SPACE.includes(num)
}

export default function CubeNet() {
  const { expressionAns } = useExpression()
  const { barNumber } = useIsBarActive()
  const { viewer } = useViewer()
  const legCountAnswer = useLegCountAnswer()
  const { buildWordsAns } = useBuildWordsAns()
  const { assembledNumber } = useAssembledNumber()

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      {Array.from({ length: 12 }, (_, index) => {
        return isHiddenSpace(index) ? (
          <div key={index}></div>
        ) : (
          <div
            key={index}
            className="flex h-[8rem] w-[8rem] items-center justify-center border border-gray-300 bg-gray-100 text-slate-700"
          >
            {index === 1 ? barNumber : null}
            {index === 4 ? expressionAns : null}
            {index === 5 ? buildWordsAns : null}
            {index === 6 ? legCountAnswer : null}
            {index === 7 ? viewer : null}
            {index === 9 ? assembledNumber : null}
          </div>
        )
      })}
    </div>
  )
}