import usePhase3AnimStep from "./usePhase3AnimStep"
import { atom, useAtom } from "jotai"

const isEndFadeinAtom = atom(false)
const firstAnimateAtom = atom(true)
const isShowAdvAtom = atom(false)
const isShowTexts2Atom = atom(false)
const isShakeAtom = atom(false)
const isApproachingCloseBtnAtom = atom(false)

const useAnimationState = () => {
  const { handleAnimEnd } = usePhase3AnimStep()
  const [isEndFadein, setIsEndFadein] = useAtom(isEndFadeinAtom)
  const [firstAnimate, setFirstAnimate] = useAtom(firstAnimateAtom)
  const [isShowAdv, setIsShowAdv] = useAtom(isShowAdvAtom)
  const [isShowTexts2, setIsShowTexts2] = useAtom(isShowTexts2Atom)
  const [isShake, setIsShake] = useAtom(isShakeAtom)
  const [isApproachingCloseBtn, setIsApproachingCloseBtn] = useAtom(
    isApproachingCloseBtnAtom
  )

  const handlePyramidFadeIn = () => {
    setIsEndFadein(true)
    handleAnimEnd()
  }

  return {
    isEndFadein,
    setIsEndFadein,
    firstAnimate,
    setFirstAnimate,
    isShowAdv,
    setIsShowAdv,
    handlePyramidFadeIn,
    isShowTexts2,
    setIsShowTexts2,
    isShake,
    setIsShake,
    isApproachingCloseBtn,
    setIsApproachingCloseBtn,
  }
}

export default useAnimationState
