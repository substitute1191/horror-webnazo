import Pyramid from "@/assets/image/mascot/mascot.png"
import DarkPyramid from "@/assets/image/mascot/mascot_dark.png"
import SpeechBubble from "./SpeechBubble"
import useTextManager from "../hooks/useTextManager"
import useAnimationState from "../hooks/useAnimationState"
import { useEffect, useState } from "react"
import { clsx } from "clsx"
import PyramidFlicker from "./PyramidFlicker"
import useVisibilityState from "../hooks/useVisibilityState"
import useTimingState from "../hooks/useTimingState"

/* eslint-disable complexity */
const Phase3Pyramid = () => {
  const { idx, showText, handleComplete, handleComplete2 } = useTextManager()
  const { isStartPhase3TransitionAnim } = useTimingState()

  const { firstAnimate, isShake, setIsShake } = useAnimationState()
  const {
    isEndFadein,
    setIsEndFadein,
    isCursorAtCloseBtn,
    isEndShuffleNumber,
  } = useTimingState()

  const { isShowAdv, isShowTexts2 } = useVisibilityState()

  useEffect(() => {
    if (isCursorAtCloseBtn) setIsShake(false)
  }, [isCursorAtCloseBtn, setIsShake])

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isEndFadein) {
      setHasAnimated(true)
    }
  }, [isEndFadein])

  const classes = clsx(
    {
      ["animate-[fadein-left_1s_ease-out_forwards]"]:
        isEndShuffleNumber && !hasAnimated,
      hidden: !isEndShuffleNumber,
      ["animate-float"]: isEndFadein && !isShowAdv,
      ["animate-[shake_0.3s_linear_infinite]"]: isShake,
    },
    "-ml-12 w-64"
  )

  return (
    <div className="flex h-52 w-full px-2">
      {!isCursorAtCloseBtn ? (
        <img
          className={classes}
          onAnimationEnd={() => setIsEndFadein(true)}
          src={Pyramid}
          alt=""
        />
      ) : (
        <>{!isStartPhase3TransitionAnim ? <PyramidFlicker /> : null}</>
      )}
      {isStartPhase3TransitionAnim ? (
        <img className="-ml-12 w-64" src={DarkPyramid} alt="" />
      ) : null}
      {isEndFadein && !isShowAdv ? (
        <SpeechBubble
          key={idx}
          text={showText}
          handleComplete={handleComplete}
          firstAnimate={firstAnimate}
        />
      ) : null}
      {isShowAdv && isShowTexts2 ? (
        <SpeechBubble
          key={idx}
          text={showText}
          handleComplete={handleComplete2}
          firstAnimate={false}
        />
      ) : null}
    </div>
  )
}

export default Phase3Pyramid
