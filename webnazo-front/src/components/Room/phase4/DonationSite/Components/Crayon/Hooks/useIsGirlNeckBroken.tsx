import yakan from "@/assets/sound/imprisonment/ヤカンが沸騰.mp3"
import useBGM from "@/SoundManager/useBGM"
import { useEffect, useState } from "react"

export default function useIsGirlNeckBroken() {
  const { play: playYakan, stop: stopYakan } = useBGM(yakan)
  const [isGirlNeckBroken, setIsGirlNeckBroken] = useState(false)

  // アニメーションを開始し、沸騰音を再生
  useEffect(() => {
    playYakan()
    setTimeout(() => {
      setIsGirlNeckBroken(true)
      stopYakan()
    }, 2000)

    return () => {
      stopYakan()
    }
  }, [playYakan, stopYakan])

  return { isGirlNeckBroken }
}
