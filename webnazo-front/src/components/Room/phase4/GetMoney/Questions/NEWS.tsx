import { isWClickedAtom } from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import useOwnedWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useOwnedWord"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
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
        <RandomShakeXChar origin="text-indigo-700" sometime="text-indigo-900">
          北
        </RandomShakeXChar>
        <RandomShakeYChar>→</RandomShakeYChar>
        {isWClicked ? null : (
          <button className="font-gothick" onClick={handleClickW}>
            <RandomShakeXChar origin="text-blue-600" probability={0}>
              W
            </RandomShakeXChar>
          </button>
        )}
      </div>
      <div className="absolute left-[60%]">
        <RandomShakeYChar
          origin="text-green-600"
          sometime="text-pink-300"
          probability={0.3}
        >
          南
        </RandomShakeYChar>
        <RandomShakeXChar origin="text-pink-800">→</RandomShakeXChar>
        <RandomShakeYChar origin="text-yellow-600" sometime="text-yellow-900">
          S
        </RandomShakeYChar>
      </div>
      <div className="absolute left-[35%] top-[70%]">
        <RandomShakeXChar origin="text-lime-500" sometime="text-stone-600">
          西
        </RandomShakeXChar>
        <RandomShakeYChar origin="text-teal-400" probability={0}>
          →
        </RandomShakeYChar>
        <RandomShakeXChar>1⃣</RandomShakeXChar>
      </div>
    </div>
  )
}
