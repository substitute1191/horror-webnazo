import { atom, useAtom } from "jotai"

const isEndFadeinAtom = atom(false)
const firstAnimateAtom = atom(true)
const isShakeAtom = atom(false)
const isApproachingCloseBtnAtom = atom(false)
const speakingTimeAtom = atom<number>(75)
const isCursorAtCloseBtnAtom = atom(false)
const isEndShuffleNumberAtom = atom(false)
const bgModeAtom = atom(0)

// TODO 後で役割毎に分割する
const useAnimationState = () => {
  const [isEndFadein, setIsEndFadein] = useAtom(isEndFadeinAtom)
  const [firstAnimate, setFirstAnimate] = useAtom(firstAnimateAtom)
  const [isShake, setIsShake] = useAtom(isShakeAtom)
  const [isApproachingCloseBtn, setIsApproachingCloseBtn] = useAtom(
    isApproachingCloseBtnAtom
  )
  const [speakingTime, setSpeakingTime] = useAtom(speakingTimeAtom)
  const [isCursorAtCloseBtn, setIsCursorAtCloseBtn] = useAtom(
    isCursorAtCloseBtnAtom
  )
  const [isEndShuffleNumber, setIsEndShuffleNumber] = useAtom(
    isEndShuffleNumberAtom
  )

  const [bgMode, setBgMode] = useAtom(bgModeAtom)

  return {
    bgMode,
    setBgMode,
    isEndShuffleNumber,
    setIsEndShuffleNumber,
    isEndFadein,
    setIsEndFadein,
    firstAnimate,
    setFirstAnimate,
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
