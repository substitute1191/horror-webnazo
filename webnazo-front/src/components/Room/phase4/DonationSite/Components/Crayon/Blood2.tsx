import blood from "@/assets/image/imprisonment/l22_血飛沫2(非ループ).png"
import bloodSE from "@/assets/sound/imprisonment/血しぶき・飛び散る02.mp3"
import useSE from "@/SoundManager/useSE"
import { useEffect } from "react"
import { createPortal } from "react-dom"

export default function Blood2() {
  const { play: playBlood, stop: stopBlood } = useSE(bloodSE)

  useEffect(() => {
    playBlood()

    return () => {
      stopBlood()
    }
  }, [playBlood, stopBlood])

  return createPortal(
    <img
      src={blood}
      className="absolute top-[0px] z-[40] h-full w-full"
      alt=""
    />,
    document.body
  )
}
