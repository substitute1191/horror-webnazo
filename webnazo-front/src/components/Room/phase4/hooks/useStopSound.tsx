import { Phase4BGMContext } from "@/components/Room/phase4/Phase4BGMProvider"
import useCanPlayRandomSE from "@/components/Room/phase4/Phase4Top/hooks/useCanPlayRandomSE"
import { useContext, useEffect } from "react"

// 一時的に背景の音楽とランダム効果音を止めたい時に使うカスタムフック
export default function useStopSound() {
  const { playBGM, stopBGM } = useContext(Phase4BGMContext)
  const { setCanPlayRandomSE } = useCanPlayRandomSE()

  useEffect(() => {
    stopBGM()
    setCanPlayRandomSE(false)

    return () => {
      playBGM()
      setCanPlayRandomSE(true)
    }
  }, [playBGM, setCanPlayRandomSE, stopBGM])
}
