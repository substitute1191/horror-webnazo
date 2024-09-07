import Pyramid from "@/assets/image/mascot/mascot.png"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"
import { useCallback, useContext, useMemo, useState } from "react"
import SpeachBubble from "./SpeachBubble"
import { Phase3Context } from "./Phase3BGMProvider"
import { useAtom } from "jotai"
import { isShowAdvAtom } from "@/atoms/phase3Atom"

/* eslint-disable max-lines-per-function,complexity */
const Phase3Pyramid = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  const [isEndFadein, setIsEndFadein] = useState(false)
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

  const texts2 = useMemo(
    () => [
      "ん？何この変な広告。さっさと消しちゃおうよ。",
      "あれ？ちょっと待って！この広告、昔流行ってた「赤い部屋」っていうflashに似てない？",
      "ほら、あのネットを見ていると偶に消してはいけないポップアップ広告が出てきて、消すと殺されちゃうっていうホラーflashだよ",
      "あの話って今でこそ懐かしい怪談みたいな扱いされているけどさ、実は本当に死者とかが出てたらしいよ？",
      "今の時代、ポップアップ広告なんてほぼ見かけなくなったけどわざわざそれを模してるってことは何かあるのかも。",
      "ねえ、念のため消さないでおこうよ！その方が安全だよ。",
    ],
    []
  )
  const { stopEndroll, playKinshiku } = useContext(Phase3Context)
  const [isShowAdv, setIsShowAdv] = useAtom(isShowAdvAtom)
  const [showText, setShowText] = useState(texts[0])
  const [isShowText2, setIsShowText2] = useState(false)

  const handlePyramidFadeIn = () => {
    setIsEndFadein(true)
    handleAnimEnd()
  }

  const updateText = useCallback(
    (texts: string[]) => {
      setIdx((prev) => prev + 1)
      setShowText(texts[idx + 1])
      setFirstAnimate(false)
    },
    [idx]
  )

  const handleComplete = () => {
    if (idx !== texts.length - 1) {
      setTimeout(() => {
        updateText(texts)
      }, 2000)
    } else {
      stopEndroll()
      setIsShowAdv(true)
      setShowText("")
      setTimeout(() => {
        playKinshiku()
      }, 3000)
      setIdx(0)
      setShowText(texts2[0])
      setTimeout(() => {
        setIsShowText2(true)
      }, 1000)
    }
  }

  const handleComplete2 = () => {
    if (idx !== texts2.length - 1) {
      setTimeout(() => {
        updateText(texts2)
      }, 1000)
    } else {
      // 後で処理を追加
    }
  }

  return (
    <div className="flex h-52 w-full px-2">
      <img
        className={` ${animStep < 3 ? "hidden" : ""} ${animStep === 3 ? "animate-[fadein-left_1s_ease-out_forwards]" : ""} ${animStep >= 4 && !isShowAdv ? "animate-float" : ""} -ml-12 w-64`}
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
      {isShowAdv && isShowText2 ? (
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
