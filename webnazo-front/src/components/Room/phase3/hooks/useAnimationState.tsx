import { atom, useAtom } from "jotai"

const isEndFadeinAtom = atom(false)
const firstAnimateAtom = atom(true)
const isShowAdvAtom = atom(false)
const isShowTexts2Atom = atom(false)
const isShakeAtom = atom(false)
const isApproachingCloseBtnAtom = atom(false)
const speakingTimeAtom = atom<number>(75)
const isCursorAtCloseBtnAtom = atom(false)

const isShowTImeAtom = atom(false)
const isShowGameClearMsgAtom = atom(false)
const isShowDrumrollAtom = atom(false)
const isEndShuffleNumberAtom = atom(false)
const bgModeAtom = atom(0)

// TODO 後で役割毎に分割する
const useAnimationState = () => {
  const [isEndFadein, setIsEndFadein] = useAtom(isEndFadeinAtom)
  const [firstAnimate, setFirstAnimate] = useAtom(firstAnimateAtom)
  const [isShowAdv, setIsShowAdv] = useAtom(isShowAdvAtom)
  const [isShowTexts2, setIsShowTexts2] = useAtom(isShowTexts2Atom)
  const [isShake, setIsShake] = useAtom(isShakeAtom)
  const [isApproachingCloseBtn, setIsApproachingCloseBtn] = useAtom(
    isApproachingCloseBtnAtom
  )
  const [speakingTime, setSpeakingTime] = useAtom(speakingTimeAtom)
  const [isCursorAtCloseBtn, setIsCursorAtCloseBtn] = useAtom(
    isCursorAtCloseBtnAtom
  )

  const [isShowTime, setIsShowTime] = useAtom(isShowTImeAtom)
  const [isShowGameClearMsg, setIsShowGameClearMsg] = useAtom(
    isShowGameClearMsgAtom
  )
  const [isShowDrumroll, setIsShowDrumroll] = useAtom(isShowDrumrollAtom)
  const [isEndShuffleNumber, setIsEndShuffleNumber] = useAtom(
    isEndShuffleNumberAtom
  )

  const [bgMode, setBgMode] = useAtom(bgModeAtom)

  return {
    bgMode,
    setBgMode,
    isShowTime,
    setIsShowTime,
    isShowGameClearMsg,
    setIsShowGameClearMsg,
    isShowDrumroll,
    setIsShowDrumroll,
    isEndShuffleNumber,
    setIsEndShuffleNumber,
    isEndFadein,
    setIsEndFadein,
    firstAnimate,
    setFirstAnimate,
    isShowAdv,
    setIsShowAdv,
    isShowTexts2,
    setIsShowTexts2,
    isShake,
    setIsShake,
    isApproachingCloseBtn,
    setIsApproachingCloseBtn,
    speakingTime,
    setSpeakingTime,
    isCursorAtCloseBtn,
    setIsCursorAtCloseBtn,
  }
}

export default useAnimationState
