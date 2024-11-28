import useWhichDiceQuestion from "@/components/Room/phase4/GetDice/hooks/useWhichDiceQuestion"

const HIDDEN_SPACE = [0, 2, 3, 8, 10, 11]

const isHiddenSpace = (num: number) => {
  return HIDDEN_SPACE.includes(num)
}

const questionToSpace = [0, 1, 4, 5, 6, 7, 9]

export default function MiniCubeNet() {
  const { whichQuestion } = useWhichDiceQuestion()

  if (whichQuestion === 0) return null

  return (
    <div className="absolute right-[10vw] top-[15vh] grid grid-cols-4 grid-rows-3 gap-1 p-4">
      {Array.from({ length: 12 }, (_, index) => {
        return isHiddenSpace(index) ? (
          <div key={index}></div>
        ) : (
          <div
            key={index}
            className={`flex h-[1rem] w-[1rem] items-center justify-center border border-gray-300 bg-gray-100 text-slate-700 ${questionToSpace[whichQuestion] === index ? "border-2 border-red-700 bg-red-400" : ""} `}
          ></div>
        )
      })}
    </div>
  )
}
