import { AnimationEvent, useEffect, useState } from "react"
import useSE from "@/SoundManager/useSE"
import drumrollSE from "@/assets/sound/ドラムロール.mp3"
import drumrollEndSE from "@/assets/sound/ロールの閉め.mp3"
import useTimingState from "../hooks/useTimingState"

const ShuffleNumber = ({
  display,
  classNames,
}: {
  display: number | string
  classNames?: string
}) => {
  const [currentNumber, setCurrentNumber] = useState<number | string>(0)
  const { play: drumrollPlay, stop: drumrollStop } = useSE(drumrollSE)
  const { play: drumrollEndPlay, stop: _drumrollEndStop } = useSE(drumrollEndSE)
  const [isDrumrollEnd, setIsDrumrollEnd] = useState("")
  const { setIsEndShuffleNumber } = useTimingState()

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "text-pulse") {
      setIsEndShuffleNumber(true)
    }
  }

  useEffect(() => {
    drumrollPlay()
    const intervalId = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 100))
    }, 50)

    setTimeout(() => {
      drumrollStop()
      clearInterval(intervalId)
      setCurrentNumber(display)
      drumrollEndPlay()
      setIsDrumrollEnd(
        "text-red-500 animate-[text-pulse_0.1s_ease-in-out_forwards]"
      )
      setTimeout(() => {
        setIsDrumrollEnd(
          "text-red-500 animate-[text-inpulse_0.3s_ease-in-out_forwards]"
        )
      }, 1000)
    }, 3000)

    return () => {
      drumrollStop()
      clearInterval(intervalId)
    }
  }, [display, drumrollEndPlay, drumrollPlay, drumrollStop])

  return (
    <div
      className={`text-3xl ${isDrumrollEnd}`}
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <span className={`${classNames}`}>{currentNumber}</span>位
    </div>
  )
}

export default ShuffleNumber
