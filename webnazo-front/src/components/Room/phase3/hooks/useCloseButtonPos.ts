import { atom, useAtom } from "jotai"

interface Position {
  top: number
  left: number
}

const closeButtonPosAtom = atom<Position>({
  top: 0,
  left: 0,
})

const useCloseButtonPos = () => {
  const [closeButtonPos, setCloseButtonPos] = useAtom(closeButtonPosAtom)

  return {
    closeButtonPos,
    setCloseButtonPos,
  }
}

export default useCloseButtonPos
