import useBGM from "@/SoundManager/useBGM"
import { createContext } from "react"
import endrollBGM from "@/assets/sound/Waffle_Finale.mp3"
import kinshikuBGM from "@/assets/sound/禁止区.mp3"

interface SharedFunctions {
  playEndroll: () => void
  stopEndroll: () => void
  playKinshiku: () => void
  stopKinshiku: () => void
}

export const Phase3Context = createContext<SharedFunctions>({
  playEndroll: () => { },
  stopEndroll: () => { },
  playKinshiku: () => { },
  stopKinshiku: () => { },
})

const Phase3BGMProvider = ({ children }: { children: React.ReactNode }) => {
  const { play: playEndroll, stop: stopEndroll } = useBGM(endrollBGM)
  const { play: playKinshiku, stop: stopKinshiku } = useBGM(kinshikuBGM)

  return (
    <Phase3Context.Provider
      value={{ playEndroll, stopEndroll, playKinshiku, stopKinshiku }}
    >
      {children}
    </Phase3Context.Provider>
  )
}

export default Phase3BGMProvider
