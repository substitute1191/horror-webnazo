import { useCallback, useContext, useEffect, useMemo } from "react"
import { Phase3Context } from "../Phase3BGMProvider"
import useAnimationState from "./useAnimationState"
import { atom, useAtom } from "jotai"
import useFakeCursor from "../Cursor/useFakeCursor"

/* eslint-disable max-lines-per-function */
const idxAtom = atom<number>(0)
const showTextAtom = atom<string>("")

const useTextManager = () => {
  const [idx, setIdx] = useAtom(idxAtom)
  const [showText, setShowText] = useAtom(showTextAtom)
  const {
    setFirstAnimate,
    setIsShowAdv,
    setIsShowTexts2,
    setIsShake,
    setIsApproachingCloseBtn,
  } = useAnimationState()
  const { stopEndroll, playKinshiku } = useContext(Phase3Context)
  const { setIsHideCursor } = useFakeCursor()

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

  const updateText = useCallback(
    (texts: string[]) => {
      setIdx((prev) => prev + 1)
      setShowText(texts[idx + 1])
      setFirstAnimate(false)
    },
    [idx, setFirstAnimate, setIdx, setShowText]
  )

  const handleComplete = () => {
    if (idx !== texts.length - 1) {
      setTimeout(() => {
        updateText(texts)
      }, 20)
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
        setIsShowTexts2(true)
      }, 1000)
    }
  }

  const handleComplete2 = () => {
    if (idx !== texts2.length - 1) {
      setTimeout(() => {
        updateText(texts2)
      }, 10)
    } else {
      console.debug("handleComplete2 end!")
      setIsShake(true)
      setIsHideCursor(true)
      setIsApproachingCloseBtn(true)
    }
  }

  useEffect(() => {
    setShowText(texts[0])
  }, [setShowText, texts])

  return {
    idx,
    setIdx,
    showText,
    setShowText,
    texts,
    texts2,
    handleComplete,
    handleComplete2,
  }
}

export default useTextManager
