import { AnimationEvent, useContext, useEffect, useState } from "react"
import useSE from "@/SoundManager/useSE"
import drumrollSE from "@/assets/sound/ドラムロール.mp3"
import drumrollEndSE from "@/assets/sound/ロールの閉め.mp3"
import { Phase3Context } from "../Phase3BGMProvider"
import useAnimationState from "../hooks/useAnimationState"

const ShuffleNumber = ({ display }: { display: number }) => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const { play: drumrollPlay, stop: drumrollStop } = useSE(drumrollSE)
  const { play: drumrollEndPlay, stop: _drumrollEndStop } = useSE(drumrollEndSE)
  const [isDrumrollEnd, setIsDrumrollEnd] = useState("")
  const { playEndroll, stopEndroll } = useContext(Phase3Context)
  const { setIsEndShuffleNumber } = useAnimationState()

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
        playEndroll()
      }, 1000)
    }, 3000)

    return () => {
      stopEndroll()
      drumrollStop()
      clearInterval(intervalId)
    }
  }, [
    display,
    drumrollEndPlay,
    drumrollPlay,
    drumrollStop,
    playEndroll,
    stopEndroll,
  ])

  return (
    <div
      className={`text-3xl ${isDrumrollEnd}`}
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <span className="text-9xl">{currentNumber}</span>位
    </div>
  )
}

export default ShuffleNumber
