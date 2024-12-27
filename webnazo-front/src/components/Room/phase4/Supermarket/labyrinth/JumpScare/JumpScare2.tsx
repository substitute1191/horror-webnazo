import kowaikao from "@/assets/image/imprisonment/怖い顔5.png"
import noise from "@/assets/image/imprisonment/apng_noise.png"
import se from "@/assets/sound/imprisonment/3_ahhahha.wav"
import useSE from "@/SoundManager/useSE"
import { useEffect } from "react"

export default function JumpScare2() {
  const { play, stop } = useSE(se)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return (
    <div className="absolute top-0 z-[100] h-full w-full bg-black">
      <img src={kowaikao} alt="" className="absolute h-full w-full" />
      <img src={noise} alt="" className="absolute h-full w-full opacity-40" />
    </div>
  )
}
