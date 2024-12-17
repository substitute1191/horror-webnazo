/* eslint-disable jsx-a11y/media-has-caption */
import countdown from "@/assets/image/imprisonment/カウントダウン.mp4"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import eisyaki from "@/assets/sound/imprisonment/映写機.mp3"
import useSE from "@/SoundManager/useSE"
import useIsCountdownStart from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownStart"
import useIsCountdownEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownEnd"

export default function Countdown() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { play: playEisyaki, stop: stopEisyaki } = useSE(eisyaki)
  const { setIsCountdownStart } = useIsCountdownStart()
  const { setIsCountdownEnd } = useIsCountdownEnd()

  useEffect(() => {
    if (videoRef.current !== null) {
      void videoRef.current.play()
    }
    playEisyaki()

    setTimeout(() => {
      setIsCountdownStart(false)
      setIsCountdownEnd(true)
    }, 4400)

    return () => {
      stopEisyaki()
    }
  }, [playEisyaki, setIsCountdownEnd, setIsCountdownStart, stopEisyaki])

  return createPortal(
    <video
      className="absolute z-[100] h-screen w-screen object-cover"
      ref={videoRef}
    >
      <source src={countdown} type="video/mp4" />
    </video>,
    document.getElementById("phase4")
  )
}
