import Pyramid from "@/assets/image/mascot/mascot.png"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"
import SpeachBubble from "./SpeachBubble"
import useTextManager from "./hooks/useTextManager"
import useAnimationState from "./hooks/useAnimationState"

/* eslint-disable complexity */
const Phase3Pyramid = () => {
  const { animStep } = usePhase3AnimStep()

  const { idx, showText, handleComplete, handleComplete2 } = useTextManager()

  const {
    isEndFadein,
    firstAnimate,
    isShowAdv,
    handlePyramidFadeIn,
    isShake,
    isShowTexts2,
  } = useAnimationState()

  return (
    <div className="flex h-52 w-full px-2">
      <img
        className={` ${animStep < 3 ? "hidden" : ""} ${animStep === 3 ? "animate-[fadein-left_1s_ease-out_forwards]" : ""} ${animStep >= 4 && !isShowAdv ? "animate-float" : ""} ${isShake && "animate-[shake_0.3s_linear_infinite]"} -ml-12 w-64`}
        onAnimationEnd={handlePyramidFadeIn}
        src={Pyramid}
        alt=""
      />
      {isEndFadein && !isShowAdv ? (
        <SpeachBubble
          key={idx}
          text={showText}
          handleComplete={handleComplete}
          firstAnimate={firstAnimate}
        />
      ) : null}
      {isShowAdv && isShowTexts2 ? (
        <SpeachBubble
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
