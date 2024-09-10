import useSE from "@/SoundManager/useSE"
import { useState, useRef, useCallback, useEffect } from "react"
import popchara from "@/assets/sound/popchara/b.mp3"
import useAnimationState from "../hooks/useAnimationState"

type Props = {
  text: string
  handleComplete: () => void
}

const useSpeechBubbleAnim = ({ text, handleComplete }: Props) => {
  const [showText, setShowText] = useState("")
  const [charaIdx, setCharaIdx] = useState(0)
  const { play } = useSE(popchara)
  const lastTime = useRef<number>(0)
  const requestRef = useRef<number>()
  const { speakingTime } = useAnimationState()

  const updateText = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > speakingTime) {
        lastTime.current = currentTime
        if (charaIdx < text.length) {
          play()
          setShowText((prev) => `${prev}${text[charaIdx]}`)
          setCharaIdx((prev) => prev + 1)
        } else if (charaIdx === text.length) {
          setCharaIdx((prev) => prev + 1)
          handleComplete()
        }
      }
    },
    [charaIdx, handleComplete, play, speakingTime, text]
  )

  useEffect(() => {
    const animate = (time: number) => {
      updateText(time)
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [updateText])

  useEffect(() => {
    setShowText("")
    setCharaIdx(0)
  }, [text])

  return {
    showText,
  }
}

export default useSpeechBubbleAnim
