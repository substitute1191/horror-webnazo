import advSrc from "@/assets/image/adv/広告背景1.png"
import useSE from "@/SoundManager/useSE"
import windowSE from "@/assets/sound/ビープ音1.mp3"
import { useEffect } from "react"
import CloseButton from "./CloseButton"

const Advertisement = () => {
  const { play, stop } = useSE(windowSE)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return (
    <div className="absolute top-[15rem] z-10">
      <CloseButton />
      <img src={advSrc} alt="" className="z-5 relative" />
    </div>
  )
}

export default Advertisement
