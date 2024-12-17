import { createPortal } from "react-dom"
import { useContext, useEffect } from "react"
import MoaiCount from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MoaiCount"
import { MorikumaContext } from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MorikumaProvider"
import useSequentialMoaiEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useSequentialMoaiEnd"
import HorrorFace from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/HorrorFace"

export default function VideoContent() {
  const { playMorikuma, stopMorikuma } = useContext(MorikumaContext)
  const { sequentialMoaiEnd, setSequentialMoaiEnd } = useSequentialMoaiEnd()

  useEffect(() => {
    playMorikuma()

    return () => {
      stopMorikuma()
    }
  }, [playMorikuma, setSequentialMoaiEnd, stopMorikuma])

  return (
    <>
      {!sequentialMoaiEnd
        ? createPortal(<MoaiCount />, document.getElementById("phase4"))
        : createPortal(<HorrorFace />, document.getElementById("phase4"))}
    </>
  )
}
