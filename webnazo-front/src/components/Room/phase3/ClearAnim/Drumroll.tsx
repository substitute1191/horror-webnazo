import ShuffleNumber from "./ShuffleNumber"
import { AnimationEvent } from "react"
import useAnimationState from "../hooks/useAnimationState"

const Drumroll = () => {
  const { isShowDrumroll, setIsShowDrumroll } = useAnimationState()

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadein-up") {
      setIsShowDrumroll(true)
    }
  }

  return (
    <div
      className="mt-12 w-[50%] animate-[fadein-up_0.7s_linear] rounded border border-slate-50 bg-slate-50 bg-opacity-70 p-12 text-center"
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <span className="text-3xl">気になる順位は？</span>
      {isShowDrumroll ? <ShuffleNumber display={100} /> : null}
    </div>
  )
}

export default Drumroll
