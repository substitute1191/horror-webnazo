import GameClearMessage from "./ClearAnim/GameClearMessage"
import Drumroll from "./ClearAnim/Drumroll"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"
import Phase3Pyramid from "./Pyramid/Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import Advertisement from "./Advertisement/Advertisement"
import useAnimationState from "./hooks/useAnimationState"
import FakeCursor from "./Cursor/FakeCursor"
import usePhase3Anim from "./usePhase3Anim"

const Phase3 = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  const { isShowAdv } = useAnimationState()
  const { cursorRef } = usePhase3Anim()

  return (
    <Phase3BGMProvider>
      <div
        id="phase2"
        className="bg-yumekawa relative bg-white/40 bg-cover bg-blend-color"
      >
        <div className="font-pop mx-auto flex h-screen w-full flex-col items-center border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
          <Phase3Pyramid />
          <GameClearMessage onAnimationComplete={handleAnimEnd} />
          {animStep >= 1 ? <Drumroll /> : null}
          {isShowAdv ? <Advertisement /> : null}
          <FakeCursor ref={cursorRef} />
        </div>
      </div>
    </Phase3BGMProvider>
  )
}

export default Phase3
