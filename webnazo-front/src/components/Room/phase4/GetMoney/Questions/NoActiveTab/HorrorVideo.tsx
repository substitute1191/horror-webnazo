import Countdown from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/Countdown"
import useIsCountdownEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownEnd"
import useIsCountdownStart from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsCountdownStart"
import MorikumaProvider from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MorikumaProvider"
import VideoContent from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/VideoContent"
import { Phase4BGMContext } from "@/components/Room/phase4/Phase4BGMProvider"
import { useContext, useEffect } from "react"

export default function HorrorVideo() {
  const { isCountdownStart, setIsCountdownStart } = useIsCountdownStart()
  const { isCountdownEnd } = useIsCountdownEnd()
  const { playBGM, stopBGM } = useContext(Phase4BGMContext)

  useEffect(() => {
    setIsCountdownStart(true)
    stopBGM()

    return () => {
      playBGM()
    }
  }, [playBGM, setIsCountdownStart, stopBGM])

  return (
    <>
      {isCountdownStart ? <Countdown /> : null}
      {isCountdownEnd ? (
        <MorikumaProvider>
          <VideoContent />
        </MorikumaProvider>
      ) : null}
    </>
  )
}
