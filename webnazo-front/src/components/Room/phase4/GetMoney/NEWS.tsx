import { isWClickedAtom } from "@/components/Room/phase4/GetDice/Questions/atom/questionsAtom"
import useOwnedWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useOwnedWord"
import { useAtom } from "jotai"

export default function NEWS() {
  const { setOwnedWord } = useOwnedWord()
  const [isWClicked, setIsWClicked] = useAtom(isWClickedAtom)

  const handleClickW = () => {
    setOwnedWord("W")
    setIsWClicked(true)
  }

  return (
    <div className="text-7xl">
      <div className="absolute left-[20%] top-[30%] text-blue-500">
        北→
        {isWClicked ? null : (
          <button className="font-gothick" onClick={handleClickW}>
            W
          </button>
        )}
      </div>
      <div className="absolute left-[60%] text-orange-600">南→S</div>
      <div className="absolute left-[35%] top-[70%]">西→1⃣</div>
    </div>
  )
}
