import { atom, useAtom } from "jotai"

const isCountdownEndAtom = atom(false)

export default function useIsCountdownEnd() {
  const [isCountdownEnd, setIsCountdownEnd] = useAtom(isCountdownEndAtom)

  return {
    isCountdownEnd,
    setIsCountdownEnd,
  }
}
