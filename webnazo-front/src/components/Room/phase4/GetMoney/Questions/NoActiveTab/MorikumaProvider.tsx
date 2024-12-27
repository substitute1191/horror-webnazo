import bear from "@/assets/sound/imprisonment/森のくまさん.mp3"
import useMorikumaRate from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useMorikumaRate"
import useBGM from "@/SoundManager/useBGM"
import { createContext } from "react"

export const MorikumaContext = createContext({
  playMorikuma: () => {},
  stopMorikuma: () => {},
})

export default function MorikumaProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { morikumaRate } = useMorikumaRate()
  const { play: playMorikuma, stop: stopMorikuma } = useBGM(bear, morikumaRate)

  return (
    <MorikumaContext.Provider value={{ playMorikuma, stopMorikuma }}>
      {children}
    </MorikumaContext.Provider>
  )
}
