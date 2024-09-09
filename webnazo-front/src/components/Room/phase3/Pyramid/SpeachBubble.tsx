import useSE from "@/SoundManager/useSE"
import { useCallback, useEffect, useRef, useState } from "react"
import popchara from "@/assets/sound/popchara/b.mp3"

type Props = {
  text: string
  handleComplete: () => void
  firstAnimate: boolean
}

const SpeachBubble: React.FC<Props> = ({
  text,
  handleComplete,
  firstAnimate,
}) => {
  const [showText, setShowText] = useState("")
  const [charaIdx, setCharaIdx] = useState(0)
  const { play } = useSE(popchara)
  const lastTime = useRef<number>(0)

  const updateText = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > 100) {
        lastTime.current = currentTime
        if (charaIdx < text.length) {
          console.info(text, charaIdx)
          play()
          setShowText((prev) => `${prev}${text[charaIdx]}`)
          setCharaIdx((prev) => prev + 1)
        }

        if (charaIdx === text.length) {
          setCharaIdx((prev) => prev + 1)
          handleComplete()
        }
      }
      requestAnimationFrame(updateText)
    },
    [charaIdx, handleComplete, play, text]
  )

  useEffect(() => {
    setShowText("")
    setCharaIdx(0)
  }, [text])

  useEffect(() => {
    const animationId = requestAnimationFrame(updateText)
    // const timer = setInterval(() => {
    //   updateText()
    // }, 75)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [updateText])

  return (
    <div
      className={`flex w-[80%] ${firstAnimate ? "animate-[fadein_1s_linear]" : ""}`}
    >
      <div className="-bottom-4 left-4 mt-20 h-0 w-0 rotate-90 transform border-l-[10px] border-r-[10px] border-t-[30px] border-l-transparent border-r-transparent border-t-slate-50"></div>
      <div className="h-full w-full rounded-xl bg-slate-50 p-8 text-4xl opacity-90">
        {text !== "" ? showText : ""}
      </div>
    </div>
  )
}

export default SpeachBubble
