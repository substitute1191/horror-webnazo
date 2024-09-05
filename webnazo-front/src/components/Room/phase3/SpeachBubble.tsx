import useSE from "@/SoundManager/useSE"
import { useCallback, useEffect, useState } from "react"
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

  const updateText = useCallback(() => {
    console.debug(charaIdx === text.length)
    if (charaIdx < text.length) {
      play()
      setShowText((prev) => `${prev}${text[charaIdx]}`)
      setCharaIdx((prev) => prev + 1)
    }

    if (charaIdx === text.length) {
      console.debug("texts end")
      setCharaIdx((prev) => prev + 1)
      setTimeout(() => {
        handleComplete()
      }, 3000)
    }
  }, [charaIdx, handleComplete, play, text])

  useEffect(() => {
    const timer = setInterval(() => {
      updateText()
    }, 75)

    return () => {
      clearInterval(timer)
    }
  }, [updateText])

  return (
    <div
      className={`flex w-[80%] ${firstAnimate ? "animate-[fadein_1s_linear]" : ""}`}
    >
      <div className="-bottom-4 left-4 mt-20 h-0 w-0 rotate-90 transform border-l-[10px] border-r-[10px] border-t-[30px] border-l-transparent border-r-transparent border-t-slate-50"></div>
      <div className="h-full w-full rounded-xl bg-slate-50 p-8 text-5xl opacity-90">
        {showText}
      </div>
    </div>
  )
}

export default SpeachBubble
