import advSrc from "@/assets/image/広告背景.png"
import useSE from "@/SoundManager/useSE"
import windowSE from "@/assets/sound/ビープ音1.mp3"
import { useEffect } from "react"

const Advertisement = () => {
  const { play, stop } = useSE(windowSE)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return (
    <div className="absolute top-[15rem]">
      <img src={advSrc} alt="" />
    </div>
  )
}

export default Advertisement
