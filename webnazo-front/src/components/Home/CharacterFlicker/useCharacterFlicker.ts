import { useEffect, useRef, useState, useCallback } from "react"
import SEsrc from "@/assets/sound/base_noise1.mp3"
import useSE from "@/SoundManager/useSE"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const useCharacterFlicker = (
  origin: string,
  sometime: string[],
  sometimeClassName: string[],
  probability: number
) => {
  const [classNames, setClassNames] = useState("")
  const [result, setResult] = useState(origin)
  const { play, stop } = useSE(SEsrc)
  const isChangingRef = useRef(false)

  const resetCharacter = useCallback(() => {
    setClassNames("")
    setResult(origin)
    stop()
    isChangingRef.current = false
  }, [origin, stop])

  const changeCharacter = useCallback(async () => {
    if (Math.random() < probability && !isChangingRef.current) {
      isChangingRef.current = true
      setClassNames(
        sometimeClassName[Math.floor(Math.random() * sometimeClassName.length)]
      )
      setResult(sometime[Math.floor(Math.random() * sometime.length)])
      play()

      try {
        await delay(300 + Math.random() * 100)
      } finally {
        resetCharacter()
      }
    }
  }, [probability, sometime, sometimeClassName, play, resetCharacter])

  useEffect(() => {
    const intervalId = setInterval(() => {
      void changeCharacter()
    }, 200)

    return () => {
      clearInterval(intervalId)
    }
  }, [changeCharacter])

  return { classNames, result }
}
