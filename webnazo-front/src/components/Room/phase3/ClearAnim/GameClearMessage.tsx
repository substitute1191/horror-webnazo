import { useEffect } from "react"
import SEsrc from "@/assets/sound/claphand.mp3"
import useSE from "@/SoundManager/useSE"

const GameClearMessage = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void
}) => {
  const { play, stop } = useSE(SEsrc)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return (
    <div
      className="mt-12 animate-[scaleup_1s_ease-in-out] text-center text-6xl text-orange-500"
      onAnimationEnd={onAnimationComplete}
    >
      ゲームクリア！おめでとう！
    </div>
  )
}

export default GameClearMessage
