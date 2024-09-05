import Pyramid from "@/assets/image/mascot/mascot.png"
import usePhase3AnimStep from "./usePhase3AnimStep"
import { useContext, useMemo, useState } from "react"
import SpeachBubble from "./SpeachBubble"
import { Phase3Context } from "./Phase3BGMProvider"

const Phase3Pyramid = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  const [pyramidEnd, setPyramidEnd] = useState(false)
  const [idx, setIdx] = useState(0)
  const [firstAnimate, setFirstAnimate] = useState(true)
  const texts = useMemo(
    () => [
      "二人ともお疲れ様！納得の行く成績は出せたかな？",
      "僕がお墓嫌いなこと、そして動かせるお墓の画像があることに気付いていれば……",
      "面倒な謎を3つも解かなくても簡単にクリア出来たかもしれないね。",
      "この謎解きは今日の22時にも同じ内容で開催されるんだ。その時順位はどう変動するかな？",
      "じゃあ皆、次の謎解きでまた会",
    ],
    []
  )
  const { stopEndroll } = useContext(Phase3Context)!

  const handlePyramidFadeIn = () => {
    setPyramidEnd(true)
    handleAnimEnd()
  }

  const handleComplete = () => {
    console.info(idx)
    console.info(texts.length)
    if (idx !== texts.length - 1) {
      setTimeout(() => {
        setIdx((prev) => prev + 1)
        setFirstAnimate(false)
      }, 2000)
    } else {
      console.info("音楽を止める処理が呼ばれる")
      stopEndroll()
    }
  }

  return (
    <div className="flex h-52 w-full px-2">
      <img
        className={` ${animStep >= 3 ? "animate-[fadein-left_1s_ease-out_forwards]" : "hidden"} ${animStep >= 4 ? "animate-float" : ""} -ml-12 w-64`}
        onAnimationEnd={handlePyramidFadeIn}
        src={Pyramid}
        alt=""
      />
      {pyramidEnd ? (
        <SpeachBubble
          key={idx}
          text={texts[idx]}
          handleComplete={handleComplete}
          firstAnimate={firstAnimate}
        />
      ) : null}
    </div>
  )
}

export default Phase3Pyramid
