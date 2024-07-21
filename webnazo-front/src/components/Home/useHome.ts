import { useEffect, useRef, useState } from "react"
import bgmSrc from "@/assets/sound/lp-horror.mp3"
import { useAtom } from "jotai"
import { isPlayableAtom } from "@/atoms/atoms"

const useHome = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showPrompt, setShowPrompt] = useState(true)
  const [_, setPlayable] = useAtom(isPlayableAtom)

  useEffect(() => {
    audioRef.current = new Audio(bgmSrc)
    audioRef.current.volume = 1

    return () => {
      if (audioRef.current !== null) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleAccept = () => {
    setPlayable(true)
    setShowPrompt(false)
    if (audioRef.current !== null) {
      audioRef.current
        .play()
        .then(() => {
          console.debug("音楽が再生されました！")
        })
        .catch((e) => console.error("BGMの再生に失敗しました;", e))
    }
  }

  const handleDecline = () => {
    setPlayable(false)
    setShowPrompt(false)
  }

  return { showPrompt, handleAccept, handleDecline }
}

export default useHome
