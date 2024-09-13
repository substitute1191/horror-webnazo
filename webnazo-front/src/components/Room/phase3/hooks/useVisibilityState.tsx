import { atom, useAtom } from "jotai"

const isShowAdvAtom = atom(false)
const isShowTexts2Atom = atom(false)
const isShowGameClearMsgAtom = atom(false)
const isShowDrumrollAtom = atom(false)

const useVisibilityState = () => {
  const [isShowAdv, setIsShowAdv] = useAtom(isShowAdvAtom)
  const [isShowTexts2, setIsShowTexts2] = useAtom(isShowTexts2Atom)
  const [isShowGameClearMsg, setIsShowGameClearMsg] = useAtom(
    isShowGameClearMsgAtom
  )
  const [isShowDrumroll, setIsShowDrumroll] = useAtom(isShowDrumrollAtom)

  return {
    isShowAdv,
    setIsShowAdv,
    isShowTexts2,
    setIsShowTexts2,
    isShowGameClearMsg,
    setIsShowGameClearMsg,
    isShowDrumroll,
    setIsShowDrumroll,
  }
}

export default useVisibilityState
