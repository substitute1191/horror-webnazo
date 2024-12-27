import blood from "@/assets/image/imprisonment/l21_血飛沫1(非ループ).png"
import bloodSE from "@/assets/sound/imprisonment/血しぶき.mp3"
import useSE from "@/SoundManager/useSE"
import { useEffect } from "react"
import { createPortal } from "react-dom"

export default function Blood() {
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
