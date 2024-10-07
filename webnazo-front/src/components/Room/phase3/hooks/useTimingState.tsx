import { atom, useAtom } from "jotai"

const isEndFadeinAtom = atom(false)
const isApproachingCloseBtnAtom = atom(false)
const isCursorAtCloseBtnAtom = atom(false)
const isEndShuffleNumberAtom = atom(false)
const isEndAdvAnimAtom = atom(false)
const isStartPhase3TransitionAnimAtom = atom(false)
const isStartErrorSceneAtom = atom(false)

// アニメーションの開始・終了のタイミングを管理するカスタムフック
export default function useTimingState() {
  const [isEndFadein, setIsEndFadein] = useAtom(isEndFadeinAtom)
  const [isApproachingCloseBtn, setIsApproachingCloseBtn] = useAtom(
    isApproachingCloseBtnAtom
  )
  const [isCursorAtCloseBtn, setIsCursorAtCloseBtn] = useAtom(
    isCursorAtCloseBtnAtom
  )
  const [isEndShuffleNumber, setIsEndShuffleNumber] = useAtom(
    isEndShuffleNumberAtom
  )
  const [isEndAdvAnim, setIsEndAdvAnim] = useAtom(isEndAdvAnimAtom)
  const [isStartPhase3TransitionAnim, setIsStartPhase3TransitionAnim] = useAtom(
    isStartPhase3TransitionAnimAtom
  )
  const [isStartErrorScene, setIsStartErrorScene] = useAtom(
    isStartErrorSceneAtom
  )

  return {
    isEndFadein,
    setIsEndFadein,
    isApproachingCloseBtn,
    setIsApproachingCloseBtn,
    isCursorAtCloseBtn,
    setIsCursorAtCloseBtn,
    isEndShuffleNumber,
    setIsEndShuffleNumber,
    isEndAdvAnim,
    setIsEndAdvAnim,
    isStartPhase3TransitionAnim,
    setIsStartPhase3TransitionAnim,
    isStartErrorScene,
    setIsStartErrorScene,
  }
}
