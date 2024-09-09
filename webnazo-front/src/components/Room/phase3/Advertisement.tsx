import advSrc from "@/assets/image/adv/広告背景1.png"
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
    <div className="absolute top-[15rem] z-10">
      <div className="absolute right-3 top-[1rem] z-10 w-[1.6rem] border border-slate-100 bg-red-500 text-center shadow-md">
        ✕
      </div>
      <img src={advSrc} alt="" className="z-5 relative" />
    </div>
  )
}

export default Advertisement
