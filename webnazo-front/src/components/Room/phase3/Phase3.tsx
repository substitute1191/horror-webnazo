import GameClearMessage from "./ClearAnim/GameClearMessage"
import Drumroll from "./ClearAnim/Drumroll"
import Phase3Pyramid from "./Pyramid/Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import Advertisement from "./Advertisement/Advertisement"
import FakeCursor from "./Cursor/FakeCursor"
import usePhase3CursorAnim from "./hooks/Adv/usePhase3CurosrAnim"
import usePhase3AdvAnim from "./hooks/Adv/usePhase3AdvAnim"
import { clsx } from "clsx"
import { Helmet } from "react-helmet-async"
import usePhase3Title from "./hooks/usePhase3Title"
import useVisibilityState from "./hooks/useVisibilityState"
import usePhase3TransitionAnim from "./hooks/usePhase3TransitionAnim"
import CharacterRevealManager from "./Transition/CharacterRevealManager"
import useAdvImageManager from "./hooks/Adv/useAdvImageManager"
import ClearTime from "./ClearAnim/ClearTime"
import useTimingState from "./hooks/useTimingState"

const Phase3 = () => {
  const { isShowGameClearMsg, isShowAdv, isShowTime } = useVisibilityState()
  const { cursorRef } = usePhase3CursorAnim()
  usePhase3AdvAnim()
  const { currentImg } = useAdvImageManager()
  const { phase3Title } = usePhase3Title()
  const { isEndAdvAnim } = useTimingState()
  usePhase3TransitionAnim()

  const bgClasses = clsx({
    ["bg-white/20"]: currentImg === 1,
    ["bg-blue-400"]: currentImg === 2,
    ["bg-slate-400"]: currentImg === 3,
    ["bg-slate-500"]: currentImg === 4,
    ["bg-slate-600"]: currentImg === 5,
    ["bg-slate-700"]: currentImg === 6,
    ["bg-slate-800"]: currentImg === 7,
    ["bg-slate-900"]: currentImg >= 8,
  })

  const bgGradClasses = clsx({
    ["grad1"]: currentImg === 1,
    ["grad2"]: currentImg === 2,
    ["grad3"]: currentImg === 3,
    ["grad4"]: currentImg === 4,
    ["grad5"]: currentImg === 5,
    ["grad6"]: currentImg === 6,
    ["grad7"]: currentImg === 7,
    ["grad8"]: currentImg >= 8,
  })

  return (
    <Phase3BGMProvider>
      <Helmet>
        <title>{phase3Title}</title>
      </Helmet>
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
    </Phase3BGMProvider>
  )
}

export default Phase3
