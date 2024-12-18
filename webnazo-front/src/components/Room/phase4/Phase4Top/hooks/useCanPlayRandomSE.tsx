import { atom, useAtom } from "jotai"

const canPlayRandomSEAtom = atom(true)

export default function useCanPlayRandomSE() {
  const [canPlayRandomSE, setCanPlayRandomSE] = useAtom(canPlayRandomSEAtom)

  return {
    canPlayRandomSE,
    setCanPlayRandomSE,
  }
}
