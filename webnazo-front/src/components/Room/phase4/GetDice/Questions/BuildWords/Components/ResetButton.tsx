import useAnsWords from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useAnsWords"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"

export default function ResetButton() {
  const { resetAnsWords } = useAnsWords()

  return (
    <button
      onClick={resetAnsWords}
      className="mt-4 w-36 rounded-md border border-blue-600 bg-blue-400 px-4 py-2 text-lg font-normal shadow-md hover:bg-blue-200 active:translate-y-1"
    >
      <TextShakeTiltScale text="リセットする" />
    </button>
  )
}
