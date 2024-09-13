import { AnimationEvent, useEffect } from "react"
import SEsrc from "@/assets/sound/claphand.mp3"
import useSE from "@/SoundManager/useSE"
import useVisibilityState from "../hooks/useVisibilityState"

const GameClearMessage = () => {
  const { play, stop } = useSE(SEsrc)
  const { setIsShowGameClearMsg } = useVisibilityState()

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "scaleup") setIsShowGameClearMsg(true)
  }

  return (
    <div
      className="mt-12 animate-[scaleup_1s_ease-in-out] text-center text-6xl text-orange-500"
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      ゲームクリア！おめでとう！
    </div>
  )
}

export default GameClearMessage
