/* eslint-disable jsx-a11y/click-events-have-key-events */
import OwnableWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/OwnableWord"
import useAnsWords from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useAnsWords"

export default function AnswerZone() {
  const { ansWords, addAnsWords } = useAnsWords()

  const handleClickAnsZone = () => {
    addAnsWords()
  }

  return (
    <div>
      <span className="font-gothic -ml-2 h-16 rounded bg-pink-600 p-2 text-xs font-normal">
        回答エリア
      </span>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClickAnsZone}
        className={`flex h-16 min-w-[360px] items-center justify-center gap-6 rounded-md border border-pink-500 bg-pink-300 bg-opacity-20 px-4 py-2 hover:bg-opacity-30`}
      >
        {ansWords.map((word, idx) => (
          <OwnableWord key={idx} word={word} />
        ))}
      </div>
    </div>
  )
}
