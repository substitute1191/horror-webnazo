import { useState } from "react"
import usePhase3AnimStep from "./usePhase3AnimStep"

const useAnimationState = () => {
  const { handleAnimEnd } = usePhase3AnimStep()
  const [isEndFadein, setIsEndFadein] = useState(false)
  const [firstAnimate, setFirstAnimate] = useState(true)
  const [isShowAdv, setIsShowAdv] = useState(false)

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
  }
}

export default useAnimationState
