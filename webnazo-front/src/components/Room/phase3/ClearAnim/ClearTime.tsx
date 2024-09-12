import { AnimationEvent, useEffect, useState } from "react"
import SEsrc from "@/assets/sound/claphand.mp3"
import useSE from "@/SoundManager/useSE"
import useAnimationState from "../hooks/useAnimationState"
import { clearTimeAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"

const ClearTime = () => {
  const { play, stop } = useSE(SEsrc)
  const { setIsShowGameClearMsg } = useAnimationState()
  const clearTime = useAtomValue(clearTimeAtom)
  const [, setRecord] = useState("")

  useEffect(() => {
    const totalSeconds = clearTime / 1000
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const milliseconds = Math.round(
      (totalSeconds - Math.floor(totalSeconds)) * 1000
    )

    setRecord(
      `${minutes.toString().padStart(2, "0")}m${seconds.toString().padStart(2, "0")}s${milliseconds.toString().padStart(3, "0")}ms`
    )

    play()

    return () => {
      stop()
    }
  }, [clearTime, play, stop])

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "scaleup") setIsShowGameClearMsg(true)
  }

  return (
    <div
      className="mt-5 animate-[scaleup_1s_ease-in-out] p-6 text-center"
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <p className="mb-8 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
        ○○チームのスコアは・・・
      </p>
      <div className="inline-block rounded-xl bg-gradient-to-r from-fuchsia-100 to-pink-100 p-6 shadow-lg">
        <p className="text-8xl font-extrabold tracking-wider text-gray-800">
          <span className="inline-block transform transition-transform duration-200 hover:scale-110">
            00
          </span>
          <span className="ml-2 text-4xl text-gray-600">分</span>
          <span className="ml-4 inline-block transform transition-transform duration-200 hover:scale-110">
            11
          </span>
          <span className="ml-2 text-4xl text-gray-600">秒</span>
          <span className="ml-4 inline-block transform transition-transform duration-200 hover:scale-110">
            726
          </span>
        </p>
      </div>
    </div>
  )
}

export default ClearTime
