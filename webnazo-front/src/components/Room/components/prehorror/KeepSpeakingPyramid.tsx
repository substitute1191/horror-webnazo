import { useState, useCallback, useMemo } from "react"
import SpeakingPyramid from "./SpeakingPyramid"
import pyramid from "@/assets/image/mascot/mascot.png"

const KeepSpeakingPyramid = () => {
  const sentences = useMemo(
    () => [
      "こんにちは！謎解き、楽しんでますか？\n僕はこのサイトのマスコットのピラミッド君です。",
      "謎解き中にすみませんが少しお話をさせてください。",
    ],
    []
  )
  const [idx, setIdx] = useState(0)

  const handleComplete = useCallback(() => {
    setIdx((prev) => (prev + 1) % sentences.length)
  }, [sentences.length])

  return (
    <div className="absolute -left-32 flex h-full w-[120%] gap-4">
      <img src={pyramid} alt="ピラミッド君" className="animate-float" />
      <SpeakingPyramid
        key={idx}
        text={sentences[idx]}
        onComplete={handleComplete}
      />
    </div>
  )
}

export default KeepSpeakingPyramid
