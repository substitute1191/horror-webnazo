import { createContext } from "react"
import useBGM from "@/SoundManager/useBGM"
import horrorBGM from "@/assets/sound/imprisonment/疑惑の霧.mp3"

type Phase4BGMContextType = {
  playBGM: () => void
  stopBGM: () => void
}

export const Phase4BGMContext = createContext<Phase4BGMContextType>({
  playBGM: () => {},
  stopBGM: () => {},
})

export default function Phase4BGMProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { play: playBGM, stop: stopBGM } = useBGM(horrorBGM)

  return (
    <Phase4BGMContext.Provider value={{ playBGM, stopBGM }}>
      {children}
    </Phase4BGMContext.Provider>
  )
}
