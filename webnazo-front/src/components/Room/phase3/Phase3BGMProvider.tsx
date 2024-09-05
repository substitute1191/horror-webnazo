import useBGM from "@/SoundManager/useBGM"
import { createContext } from "react"
import endrollBGM from "@/assets/sound/Waffle_Finale.mp3"

interface SharedFunctions {
  playEndroll: () => void
  stopEndroll: () => void
}

export const Phase3Context = createContext<SharedFunctions | null>(null)

const Phase3BGMProvider = ({ children }: { children: React.ReactNode }) => {
  const { play: playEndroll, stop: stopEndroll } = useBGM(endrollBGM)

  return (
    <Phase3Context.Provider value={{ playEndroll, stopEndroll }}>
      {children}
    </Phase3Context.Provider>
  )
}

export default Phase3BGMProvider
