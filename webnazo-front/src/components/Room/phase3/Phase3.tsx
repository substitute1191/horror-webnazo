import GameClearMessage from "./ClearAnim/GameClearMessage"
import Drumroll from "./ClearAnim/Drumroll"
import Phase3Pyramid from "./Pyramid/Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import Advertisement from "./Advertisement/Advertisement"
import useAnimationState from "./hooks/useAnimationState"
import FakeCursor from "./Cursor/FakeCursor"
import usePhase3CursorAnim from "./usePhase3CurosrAnim"
import usePhase3AdvAnim from "./usePhase3AdvAnim"

const Phase3 = () => {
  const { isShowGameClearMsg, isShowAdv } = useAnimationState()
  const { cursorRef } = usePhase3CursorAnim()
  const { currentImg } = usePhase3AdvAnim()

  return (
    <Phase3BGMProvider>
      <div
        id="phase2"
        className={`bg-yumekawa "bg-white/20" relative bg-cover bg-blend-color`}
      >
        <div className="font-pop grad1 mx-auto flex h-screen w-full flex-col items-center border-2 border-solid pb-52 pt-7 lg:w-3/5">
          <Phase3Pyramid />
          <GameClearMessage />
          {isShowGameClearMsg ? <Drumroll /> : null}
          {isShowAdv ? <Advertisement currentImg={currentImg} /> : null}
          <FakeCursor ref={cursorRef} />
        </div>
      </div>
    </Phase3BGMProvider>
  )
}

export default Phase3
