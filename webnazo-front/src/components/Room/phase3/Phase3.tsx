import GameClearMessage from "./ClearAnim/GameClearMessage"
import Drumroll from "./ClearAnim/Drumroll"
import Phase3Pyramid from "./Pyramid/Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import Advertisement from "./Advertisement/Advertisement"
import FakeCursor from "./Cursor/FakeCursor"
import usePhase3CursorAnim from "./hooks/Adv/usePhase3CurosrAnim"
import usePhase3AdvAnim from "./hooks/Adv/usePhase3AdvAnim"
import { Helmet } from "react-helmet-async"
import usePhase3Title from "./hooks/usePhase3Title"
import useVisibilityState from "./hooks/useVisibilityState"
import usePhase3TransitionAnim from "./hooks/usePhase3TransitionAnim"
import CharacterRevealManager from "./Transition/CharacterRevealManager"
import useAdvImageManager from "./hooks/Adv/useAdvImageManager"
import ClearTime from "./ClearAnim/ClearTime"
import useTimingState from "./hooks/useTimingState"
import Phase3Error from "./Transition/Phase3Error"

const Phase3 = () => {
  const { isShowGameClearMsg, isShowAdv, isShowTime } = useVisibilityState()
  const { cursorRef } = usePhase3CursorAnim()
  usePhase3AdvAnim()
  const { currentImg, bgClasses, bgGradClasses } = useAdvImageManager()
  const { phase3Title } = usePhase3Title()
  const { isEndAdvAnim, isStartErrorScene } = useTimingState()
  usePhase3TransitionAnim()

  return (
    <Phase3BGMProvider>
      <Helmet>
        <title>{phase3Title}</title>
      </Helmet>
      {!isStartErrorScene ? (
        <div
          className={`bg-yumekawa ${bgClasses} relative min-h-screen overflow-auto bg-cover bg-blend-color`}
        >
          <CharacterRevealManager />
          <div
            className={`${isEndAdvAnim ? "font-gothic" : "font-pop"} ${bgGradClasses} mx-auto flex min-h-screen w-full flex-col items-center border-2 border-solid pb-52 pt-7 lg:w-3/5`}
          >
            <Phase3Pyramid />
            <GameClearMessage />
            {isShowTime ? <ClearTime /> : null}
            {isShowGameClearMsg ? <Drumroll /> : null}
            {isShowAdv ? <Advertisement currentImg={currentImg} /> : null}
            <FakeCursor ref={cursorRef} />
          </div>
        </div>
      ) : (
        <Phase3Error />
      )}
    </Phase3BGMProvider>
  )
}

export default Phase3
