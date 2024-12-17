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
        <RandomShakeXChar
          char="北"
          origin="text-indigo-700"
          sometime="text-indigo-900"
        />
        <RandomShakeYChar char="→" />
        {isWClicked ? null : (
          <button className="font-gothick" onClick={handleClickW}>
            <RandomShakeXChar char="W" origin="text-blue-600" probability={0} />
          </button>
        )}
      </div>
      <div className="absolute left-[60%]">
        <RandomShakeYChar
          char="南"
          origin="text-green-600"
          sometime="text-pink-300"
          probability={0.3}
        />
        <RandomShakeXChar char="→" origin="text-pink-800" />
        <RandomShakeYChar
          char="S"
          origin="text-yellow-600"
          sometime="text-yellow-900"
        />
      </div>
      <div className="absolute left-[35%] top-[70%]">
        <RandomShakeXChar
          char="西"
          origin="text-lime-500"
          sometime="text-stone-600"
        />
        <RandomShakeYChar char="→" origin="text-teal-400" probability={0} />
        <RandomShakeXChar char="1⃣" />
      </div>
    </div>
  )
}
