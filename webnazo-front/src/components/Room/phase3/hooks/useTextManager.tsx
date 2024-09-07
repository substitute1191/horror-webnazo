import { useCallback, useContext, useMemo, useState } from "react"
import { Phase3Context } from "../Phase3BGMProvider"
import useAnimationState from "./useAnimationState"

const useTextManager = () => {
  const { stopEndroll, playKinshiku } = useContext(Phase3Context)
  const {
    isEndFadein,
    setIsEndFadein,
    firstAnimate,
    setFirstAnimate,
    isShowAdv,
    setIsShowAdv,
    handlePyramidFadeIn,
  } = useAnimationState()
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

  const [idx, setIdx] = useState(0)
  const [showText, setShowText] = useState(texts[0])
  const [isShowText2, setIsShowText2] = useState(false)

  const updateText = useCallback(
    (texts: string[]) => {
      setIdx((prev) => prev + 1)
      setShowText(texts[idx + 1])
      setFirstAnimate(false)
    },
    [idx, setFirstAnimate]
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

  return {
    isEndFadein,
    setIsEndFadein,
    firstAnimate,
    setFirstAnimate,
    isShowAdv,
    setIsShowAdv,
    handlePyramidFadeIn,
    texts,
    texts2,
    idx,
    setIdx,
    showText,
    setShowText,
    handleComplete,
    isShowText2,
    updateText,
  }
}

export default useTextManager
