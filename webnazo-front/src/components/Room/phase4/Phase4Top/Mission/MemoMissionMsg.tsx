import useProceed from "@/components/Room/useProceed"
import { useState } from "react"

export default function MemoMissionMsg() {
  const { proceed } = useProceed()
  const [inputValue, setInputValue] = useState("")

  const handleClick = () => {
    if (inputValue === "ユキコ") {
      proceed(5)
    }
  }

  return (
    <div>
      <h3>
        Mission:
        18枚のメモを時系列順に並び替えて順番に開け。その後、自分がやってきたことを振り返った時に出てくる言葉は？
      </h3>
      <span>回答：</span>
      <input
        className="rounded px-2 py-1 text-black"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <button
          className="rounded border border-slate-300 bg-slate-600 px-2 py-1"
          onClick={handleClick}
        >
          回答を送信する
        </button>
      </div>
    </div>
  )
}
