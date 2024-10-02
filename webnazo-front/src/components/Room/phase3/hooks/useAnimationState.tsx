import { atom, useAtom } from "jotai"

const firstAnimateAtom = atom(true)
const isShakeAtom = atom(false)
const speakingTimeAtom = atom<number>(75)
const bgModeAtom = atom(0)
const speechBubbleClassNameAtom = atom("")

// TODO 後で役割毎に分割する
const useAnimationState = () => {
  const [firstAnimate, setFirstAnimate] = useAtom(firstAnimateAtom)
  const [isShake, setIsShake] = useAtom(isShakeAtom)
  const [speakingTime, setSpeakingTime] = useAtom(speakingTimeAtom)
  const [bgMode, setBgMode] = useAtom(bgModeAtom)

  const [speechBubbleClassName, setSpeechBubbleClassName] = useAtom(
    speechBubbleClassNameAtom
  )

  return {
    bgMode,
    setBgMode,
    firstAnimate,
    setFirstAnimate,
    isShake,
    setIsShake,
    speakingTime,
    setSpeakingTime,
    speechBubbleClassName,
    setSpeechBubbleClassName,
  }
}

export default useAnimationState
