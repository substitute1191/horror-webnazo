/* eslint-disable complexity */
import useSequentialMoaiEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useSequentialMoaiEnd"
import Moai from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/Moai"
import { MorikumaContext } from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MorikumaProvider"
import { useCallback, useContext, useEffect, useState } from "react"

export default function SequentialMoai() {
  const [moaiCount, setMoaiCount] = useState(0)
  const { setSequentialMoaiEnd } = useSequentialMoaiEnd()
  const { stopMorikuma } = useContext(MorikumaContext)

  const moaiAppear = useCallback(() => {
    setMoaiCount((prev) => prev + 1)
    if (moaiCount >= 20) {
      setSequentialMoaiEnd(true)
      stopMorikuma()
      setMoaiCount(0)
    }
  }, [moaiCount, setSequentialMoaiEnd, stopMorikuma])

  useEffect(() => {
    const timerId = setInterval(moaiAppear, 700)

    return () => {
      clearInterval(timerId)
    }
  }, [moaiAppear])

  return (
    <>
      {moaiCount >= 1 ? <Moai /> : null}
      {moaiCount >= 2 ? <Moai /> : null}
      {moaiCount >= 3 ? <Moai /> : null}
      {moaiCount >= 5 ? <Moai /> : null}
      {moaiCount >= 8 ? <Moai /> : null}
      {moaiCount >= 11 ? <Moai /> : null}
      {moaiCount >= 12 ? <Moai /> : null}
      {moaiCount >= 18 ? <Moai /> : null}
      {moaiCount >= 20 ? <Moai /> : null}
    </>
  )
}
