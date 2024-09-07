import ShuffleNumber from "./ShuffleNumber"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"

const Drumroll = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()

  return (
    <div
      className="mt-20 w-[50%] animate-[fadein-up_0.7s_linear] rounded border border-slate-50 bg-slate-50 bg-opacity-70 p-12 text-center"
      onAnimationEnd={handleAnimEnd}
    >
      <span className="text-3xl">気になる順位は？</span>
      {animStep >= 2 ? <ShuffleNumber display={100} /> : null}
    </div>
  )
}

export default Drumroll
