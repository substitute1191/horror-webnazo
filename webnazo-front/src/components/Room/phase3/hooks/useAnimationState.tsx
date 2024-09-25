import { atom, useAtom } from "jotai"

const isEndFadeinAtom = atom(false)
const firstAnimateAtom = atom(true)
const isShakeAtom = atom(false)
const isApproachingCloseBtnAtom = atom(false)
const speakingTimeAtom = atom<number>(75)
const isCursorAtCloseBtnAtom = atom(false)
const isEndShuffleNumberAtom = atom(false)
const bgModeAtom = atom(0)
const isEndAdvAnimAtom = atom(false)
const speechBubbleClassNameAtom = atom("")

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
  const [isEndAdvAnim, setIsEndAdvAnim] = useAtom(isEndAdvAnimAtom)

  const [speechBubbleClassName, setSpeechBubbleClassName] = useAtom(
    speechBubbleClassNameAtom
  )

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
    isEndAdvAnim,
    setIsEndAdvAnim,
    speechBubbleClassName,
    setSpeechBubbleClassName,
  }
}

export default useAnimationState
