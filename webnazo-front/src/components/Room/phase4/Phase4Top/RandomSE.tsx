import wind from "@/assets/sound/imprisonment/horror_wind.mp3"
import tinnitus1 from "@/assets/sound/imprisonment/tinnitus1.mp3"
import tinnitus3 from "@/assets/sound/imprisonment/tinnitus3.mp3"
import bullying from "@/assets/sound/imprisonment/bullying.mp3"
import coming from "@/assets/sound/imprisonment/it_is_coming.mp3"
import sigh from "@/assets/sound/imprisonment/ghost_sighs.mp3"
import haunted1 from "@/assets/sound/imprisonment/haunted_area1.mp3"
import creep_up_on from "@/assets/sound/imprisonment/creep_up_on.mp3"
import ridicule from "@/assets/sound/imprisonment/ridicule.mp3"
import inversion from "@/assets/sound/imprisonment/inversion.mp3"
import open_the_door1 from "@/assets/sound/imprisonment/open_the_door1.mp3"
import slip from "@/assets/sound/imprisonment/slip_in_bath1.mp3"
import oriental from "@/assets/sound/imprisonment/Oriental_ghost.mp3"
import noise300 from "@/assets/sound/imprisonment/300hz_noise.mp3"
import other_world from "@/assets/sound/imprisonment/other_world.mp3"
import { useCallback, useEffect, useState } from "react"
import SE from "@/components/Room/phase4/Phase4Top/SE"

const srcList = [
  wind,
  tinnitus1,
  bullying,
  coming,
  sigh,
  haunted1,
  tinnitus3,
  creep_up_on,
  ridicule,
  inversion,
  open_the_door1,
  slip,
  oriental,
  noise300,
  other_world,
]

export default function RandomSE() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [src, setSrc] = useState("")

  const generateRandom = useCallback(() => {
    const random = Math.random()
    if (random <= 0.1 && !isPlaying) {
      setIsPlaying(true)
      const randomSrc = Math.floor(Math.random() * srcList.length)
      setSrc(srcList[randomSrc])
      const randomSec = Math.floor(2000 + Math.random() * 3000)
      setTimeout(() => setIsPlaying(false), randomSec)
    }
  }, [isPlaying])

  useEffect(() => {
    const timerId = setInterval(generateRandom, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [generateRandom])

  return <>{isPlaying ? <SE src={src} /> : null}</>
}
