import face from "@/assets/image/imprisonment/怖い顔11.png"
import bg from "@/assets/image/imprisonment/cell_bk.gif"
import noise from "@/assets/image/imprisonment/apng_noise.png"
import useSE from "@/SoundManager/useSE"
import mental from "@/assets/sound/imprisonment/mental_attack3.mp3"
import { useEffect } from "react"
import useCountupMsgEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useCountUpMsgEnd"
import useIsCountdownEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownEnd"
import useIsCountdownStart from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownStart"
import useIsVideoStart from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsVideoStart"
import useMorikumaRate from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useMorikumaRate"
import useSequentialMoaiEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useSequentialMoaiEnd"

export default function HorrorFace() {
  const { play, stop } = useSE(mental)
  const { setCountupMsgEnd } = useCountupMsgEnd()
  const { setIsCountdownStart } = useIsCountdownStart()
  const { setIsCountdownEnd } = useIsCountdownEnd()
  const { setIsVideoStart } = useIsVideoStart()
  const { setMorikumaRate } = useMorikumaRate()
  const { setSequentialMoaiEnd } = useSequentialMoaiEnd()

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  useEffect(() => {
    setTimeout(() => {
      setCountupMsgEnd(false)
      setIsCountdownEnd(false)
      setIsCountdownStart(false)
      setIsVideoStart(false)
      setSequentialMoaiEnd(false)
      setMorikumaRate(1)
    }, 1300)
  }, [
    setCountupMsgEnd,
    setIsCountdownEnd,
    setIsCountdownStart,
    setIsVideoStart,
    setMorikumaRate,
    setSequentialMoaiEnd,
  ])

  return (
    <>
      <img
        src={bg}
        className="absolute z-20 h-full w-full object-cover"
        alt=""
      />
      <img
        src={face}
        className="absolute left-[50%] top-[50%] z-[25] w-[30%] -translate-x-[50%] -translate-y-[50%]"
        alt=""
      />
      <img
        src={noise}
        className="absolute z-[30] h-full w-full opacity-30"
        alt=""
      />
    </>
  )
}
