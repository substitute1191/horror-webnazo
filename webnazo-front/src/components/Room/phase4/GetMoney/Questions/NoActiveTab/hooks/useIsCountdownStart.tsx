import { atom, useAtom } from "jotai"

const isCountdownStartAtom = atom(false)

export default function useIsCountdownStart() {
  const [isCountdownStart, setIsCountdownStart] = useAtom(isCountdownStartAtom)

  const handleClickPlayBtn = () => setIsCountdownStart(true)

  return {
    isCountdownStart,
    setIsCountdownStart,
    handleClickPlayBtn,
  }
}
