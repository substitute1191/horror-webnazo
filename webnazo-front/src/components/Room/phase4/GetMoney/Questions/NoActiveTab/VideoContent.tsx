import { createPortal } from "react-dom"
import { useCallback, useContext, useEffect } from "react"
import MoaiCount from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MoaiCount"
import { MorikumaContext } from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MorikumaProvider"
import useSequentialMoaiEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useSequentialMoaiEnd"
import HorrorFace from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/HorrorFace"
import useIsSeen from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsSeen"

export default function VideoContent() {
  const { playMorikuma, stopMorikuma } = useContext(MorikumaContext)
  const { sequentialMoaiEnd, setSequentialMoaiEnd } = useSequentialMoaiEnd()
  const { setIsSeen } = useIsSeen()

  const handleHasSeenVideo = useCallback(() => {
    if (document.visibilityState === "visible") {
      setIsSeen(true)
    }
  }, [setIsSeen])

  useEffect(() => {
    setIsSeen(false)
    playMorikuma()
    handleHasSeenVideo()

    return () => {
      stopMorikuma()
    }
  }, [
    handleHasSeenVideo,
    playMorikuma,
    setIsSeen,
    setSequentialMoaiEnd,
    stopMorikuma,
  ])

  useEffect(() => {
    document.addEventListener("visibilitychange", handleHasSeenVideo)

    return () => {
      document.removeEventListener("visibilitychange", handleHasSeenVideo)
    }
  }, [handleHasSeenVideo])

  return (
    <>
      {!sequentialMoaiEnd
        ? createPortal(<MoaiCount />, document.getElementById("phase4"))
        : createPortal(<HorrorFace />, document.getElementById("phase4"))}
    </>
  )
}
