/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/media-has-caption */
import src from "@/assets/image/imprisonment/テレビ.png"
import useViewer from "@/components/Room/phase4/GetDice/Questions/TV/useViewer"
import { useCallback, useEffect, useRef } from "react"
import glitch1 from "@/assets/image/imprisonment/GaNv1_glitch04.mp4"
import kowaikao from "@/assets/image/imprisonment/怖い顔2.png"
import LoopVideo from "@/components/Room/LoopVideo"
import clsx from "clsx"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"

export default function TV() {
  const { viewer, setViewer } = useViewer()
  const videoRef = useRef<HTMLVideoElement>(null)

  const decViewer = useCallback(() => {
    setViewer((prev) => prev - 1)
  }, [setViewer])

  useEffect(() => {
    setViewer((prev) => prev + 1)
    window.addEventListener("beforeunload", decViewer)
    void videoRef.current?.play()

    return () => {
      setViewer((prev) => prev - 1)
      window.removeEventListener("beforeunload", decViewer)
    }
  }, [decViewer, setViewer])

  const opacity = clsx({
    "opacity-80": viewer >= 2 && viewer < 4,
    "opacity-70": viewer >= 4 && viewer < 5,
    "opacity-60": viewer === 5,
  })

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img src={src} alt="" className="min-w-[400px] max-w-[400px]" />
        <img
          src={kowaikao}
          alt=""
          className="absolute left-3 top-3 h-[210px] w-[375px]"
        />
        <LoopVideo
          src={glitch1}
          classNames={`absolute top-3 left-3 w-[375px] ${opacity}`}
        />
      </div>
      <p className="font-gothic mt-8 text-xl">
        <TextShakeTiltScale text="テレビの視聴者数が答え" />
      </p>
    </div>
  )
}
