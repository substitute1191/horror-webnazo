import { useState, useCallback, useMemo, useEffect, useRef } from "react"
import SpeakingPyramid from "./SpeakingPyramid"
import pyramid from "@/assets/image/mascot/mascot.png"
import { useAtomValue } from "jotai"
import { ohakaPositionAtom } from "./Questions/Question3/OhakaPositionAtom"
import useSE from "@/SoundManager/useSE"
import runawaySrc from "@/assets/sound/ピューンと逃げる.mp3"

const KeepSpeakingPyramid = () => {
  const sentences = useMemo(
    () => [
      "こんにちは！謎解き、楽しんでますか？\n僕はこのサイトのマスコットのピラミッド君です。",
      "謎解き中にすみませんが少しお話をさせてください。",
      "皆さんはピラミッドの事を何だと思っていますか？",
    ],
    []
  )
  const [idx, setIdx] = useState(0)
  const ohakaPosition = useAtomValue(ohakaPositionAtom)
  const pyramidRef = useRef<HTMLImageElement>(null)
  const [isRunaway, setIsRunaway] = useState(false)
  const { play } = useSE(runawaySrc)
  const [isRunawayAnimationEnd, setIsRunawayAnimationEnd] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (pyramidRef.current !== null) {
      const rect = pyramidRef.current.getBoundingClientRect()
      const pyramidX = rect.left + rect.width / 2
      const pyramidY = rect.top + rect.height / 2
      const { x: ohakaX, y: ohakaY } = ohakaPosition

      if (
        Math.sqrt((pyramidX - ohakaX) ** 2 + (pyramidY - ohakaY) ** 2) <= 200 &&
        !isPlaying
      ) {
        setIsPlaying(true)
        play()
        setIsRunaway(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ohakaPosition, play])

  const handleComplete = useCallback(() => {
    setIdx((prev) => (prev + 1) % sentences.length)
  }, [sentences.length])

  const handleRunawayAnimationEnd = () => {
    setIsRunawayAnimationEnd(true)
  }

  return (
    <>
      {!isRunawayAnimationEnd ? (
        <div
          className={`absolute -left-32 flex h-full w-[120%] gap-4 ${isRunawayAnimationEnd ? "z-0" : "z-10"}`}
        >
          <img
            ref={pyramidRef}
            src={pyramid}
            alt="ピラミッド君"
            className={`animate-float ${isRunaway ? "animate-runaway" : ""}`}
            onAnimationEnd={handleRunawayAnimationEnd}
          />
          {isRunaway ? (
            <div className="pointer-events-none flex h-full w-full animate-[fadeout_0.8s_linear_forwards] items-center">
              <div className="pointer-events-none flex h-full w-full animate-[fadeout_0.8s_linear_forwards] items-center rounded-xl bg-slate-50 p-12 text-5xl opacity-90">
                うわあああああああーーーーーーー！！
              </div>
            </div>
          ) : (
            <SpeakingPyramid
              key={idx}
              text={sentences[idx]}
              onComplete={handleComplete}
            />
          )}
        </div>
      ) : null}
    </>
  )
}

export default KeepSpeakingPyramid
