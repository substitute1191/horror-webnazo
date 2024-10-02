import useSE from "@/SoundManager/useSE"
import p from "@/assets/sound/p02.mp3"
import { useEffect } from "react"
import BlackedEyesWomanFlicker from "./BlackedEyesWomanFlicker"

export default function Phase3Error() {
  const { play, stop } = useSE(p)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return <BlackedEyesWomanFlicker />
}
