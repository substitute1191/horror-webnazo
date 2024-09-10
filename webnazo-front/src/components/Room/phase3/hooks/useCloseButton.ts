import { atom, useAtom } from "jotai"

interface Position {
  top: number
  left: number
}

const closeButtonAtom = atom<Position>({
  top: 0,
  left: 0,
})
const isClickedCloseBtnAtom = atom(false)

const useCloseButton = () => {
  const [closeButton, setcloseButton] = useAtom(closeButtonAtom)
  const [isClickedCloseBtn, setIsClickedCloseBtn] = useAtom(
    isClickedCloseBtnAtom
  )

  return {
    closeButton,
    setcloseButton,
    isClickedCloseBtn,
    setIsClickedCloseBtn,
  }
}

export default useCloseButton
