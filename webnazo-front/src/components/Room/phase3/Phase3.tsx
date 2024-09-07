import GameClearMessage from "./GameClearMessage"
import Drumroll from "./Drumroll"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"
import Phase3Pyramid from "./Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import { useAtomValue } from "jotai"
import { isShowAdvAtom } from "@/atoms/phase3Atom"
import Advertisement from "./Advertisement"

const Phase3 = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  const isShowAdv = useAtomValue(isShowAdvAtom)

  return (
    <Phase3BGMProvider>
      <div
        id="phase2"
        className="bg-yumekawa bg-white/40 bg-cover bg-blend-color"
      >
        <div className="font-pop mx-auto flex h-screen w-full flex-col items-center border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
          <Phase3Pyramid />
          <GameClearMessage onAnimationComplete={handleAnimEnd} />
          {animStep >= 1 ? <Drumroll /> : null}
          {isShowAdv ? <Advertisement /> : null}
        </div>
      </div>
    </Phase3BGMProvider>
  )
}

export default Phase3
