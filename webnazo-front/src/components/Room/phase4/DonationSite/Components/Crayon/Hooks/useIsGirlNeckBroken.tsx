import yakan from "@/assets/sound/imprisonment/ヤカンが沸騰.mp3"
import useBGM from "@/SoundManager/useBGM"
import { useEffect, useState } from "react"
import butsukaru from "@/assets/sound/imprisonment/butukaru06.mp3"
import useSE from "@/SoundManager/useSE"

export default function useIsGirlNeckBroken() {
  const { play: playYakan, stop: stopYakan } = useBGM(yakan)
  const [isGirlNeckBroken, setIsGirlNeckBroken] = useState(false)
  const { play: playButsukaru, stop: stopButsukaru } = useSE(butsukaru)

  // アニメーションを開始し、沸騰音を再生
  useEffect(() => {
    playYakan()
    setTimeout(() => {
      setIsGirlNeckBroken(true)
      stopYakan()
      playButsukaru()
    }, 2000)

    return () => {
      stopYakan()
      stopButsukaru()
    }
  }, [playButsukaru, playYakan, stopButsukaru, stopYakan])

  return { isGirlNeckBroken }
}
