import advSrc from "@/assets/image/adv/広告背景1.png"
import useSE from "@/SoundManager/useSE"
import windowSE from "@/assets/sound/ビープ音1.mp3"
import { useEffect } from "react"
import CloseButton from "./CloseButton"
import readout1 from "@/assets/sound/読み上げ/読み上げ1.mp3"

const Advertisement = () => {
  const { play: playWindow, stop: stopWindow } = useSE(windowSE)
  const { play: playReadOut1, stop: _stopReadOut1 } = useSE(readout1)

  useEffect(() => {
    playWindow()
    playReadOut1()

    return () => {
      stopWindow()
    }
  }, [playReadOut1, playWindow, stopWindow])

  return (
    <div className="absolute top-[15rem] z-10">
      <CloseButton />
      <img src={advSrc} alt="" className="z-5 relative" />
    </div>
  )
}

export default Advertisement
