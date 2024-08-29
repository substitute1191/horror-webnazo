import Pyramid from "@/assets/image/mascot/mascot.png"
import usePhase3AnimStep from "./usePhase3AnimStep"
import { useState } from "react"
import SpeachBubble from "./SpeachBubble"

const Phase3Pyramid = () => {
  const { animStep } = usePhase3AnimStep()
  const [pyramidEnd, setPyramidEnd] = useState(false)

  const handlePyramidFadeIn = () => {
    setPyramidEnd(true)
  }

  return (
    <div className="flex h-52 w-full px-2">
      <img
        className={`${animStep >= 3 ? "animate-[fadein-left_1s_ease-out_forwards]" : "hidden"} -ml-12 w-64`}
        onAnimationEnd={handlePyramidFadeIn}
        src={Pyramid}
        alt=""
      />
      {pyramidEnd ? (
        <SpeachBubble text={"二人ともお疲れ様！納得の行く成績は出せたかな？"} />
      ) : null}
    </div>
  )
}

export default Phase3Pyramid
