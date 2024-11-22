import OwnableWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/OwnableWord"
import useUnusedWords from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useUnusedWords"

export default function UnusedWordsZone() {
  const { unusedWords } = useUnusedWords()

  return (
    <div>
      <span className="font-gothic -ml-2 rounded bg-yellow-600 p-2 text-xs font-normal">
        アイテム
      </span>
      <div className="flex min-w-[360px] justify-center gap-6 rounded-md border border-yellow-500 bg-yellow-300 bg-opacity-20 px-4 py-2">
        {unusedWords.map((word, idx) => (
          <OwnableWord key={idx} word={word} />
        ))}
      </div>
    </div>
  )
}
