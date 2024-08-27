import React, { useCallback, useEffect, useState } from "react"
import charaPopSE2 from "@/assets/sound/popchara/b.mp3"
import useSE from "@/SoundManager/useSE"

interface SpeakingPyramidProps {
  text: string
  onComplete: () => void
}

const SpeakingPyramid: React.FC<SpeakingPyramidProps> = ({
  text,
  onComplete,
}) => {
  const [showText, setShowText] = useState("")
  const [idx, setIdx] = useState(0)
  const { play } = useSE(charaPopSE2)

  const updateText = useCallback(async () => {
    if (idx < text.length) {
      setShowText((prev) => prev + text[idx])
      setIdx((prev) => prev + 1)
      if (text[idx] === "\n") {
        await new Promise((resolve) => setTimeout(resolve, 3000))
      } else {
        play()
      }
    } else if (idx === text.length) {
      setTimeout(() => {
        onComplete()
      }, 3000)
      setIdx(idx + 1)
    }
  }, [idx, text, play, onComplete])

  useEffect(() => {
    setShowText("")
    setIdx(0)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(() => {
      void updateText()
    }, 75)

    return () => {
      clearTimeout(timer)
    }
  }, [idx, updateText])

  return (
    <div className="flex h-full w-full items-center">
      <div className="-bottom-4 left-4 mt-12 h-0 w-0 rotate-90 transform border-l-[10px] border-r-[10px] border-t-[30px] border-l-transparent border-r-transparent border-t-slate-50"></div>
      <div className="flex h-full w-full items-center rounded-xl bg-slate-50 p-12 text-5xl opacity-90">
        {showText}
      </div>
    </div>
  )
}

export default SpeakingPyramid
