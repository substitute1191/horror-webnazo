import SE1 from "@/assets/sound/グサッ1.mp3"
import SE2 from "@/assets/sound/自主規制ピー音.mp3"
import SE3 from "@/assets/sound/突撃ラッパ.mp3"
import SE4 from "@/assets/sound/不安（ピアノ演奏）.mp3"
import SE5 from "@/assets/sound/金額表示.mp3"
import SE6 from "@/assets/sound/チーン1.mp3"
import SE7 from "@/assets/sound/ニュースタイトル表示1.mp3"
import SE8 from "@/assets/sound/ホラー文字表示音.mp3"
import { useEffect, useMemo, useRef } from "react"
import useSE from "@/SoundManager/useSE"

/* eslint-disable complexity */
const soundFiles = {
  [2]: SE1,
  [3]: SE2,
  [4]: SE3,
  [5]: SE4,
  [6]: SE5,
  [7]: SE6,
  [8]: SE7,
  [9]: SE8,
}

const useAdvAnimSE = (number: number) => {
  const currentSound = useRef<number | null>(null)

  // 各音声ファイルに対してuseSEフックを呼び出す
  const se2 = useSE(soundFiles[2])
  const se3 = useSE(soundFiles[3])
  const se4 = useSE(soundFiles[4])
  const se5 = useSE(soundFiles[5])
  const se6 = useSE(soundFiles[6])
  const se7 = useSE(soundFiles[7])
  const se8 = useSE(soundFiles[8])
  const se9 = useSE(soundFiles[9])

  // 全ての音声コントロールをオブジェクトにまとめる
  const soundControls = useMemo(
    () => ({
      [2]: se2,
      [3]: se3,
      [4]: se4,
      [5]: se5,
      [6]: se6,
      [7]: se7,
      [8]: se8,
      [9]: se9,
    }),
    [se2, se3, se4, se5, se6, se7, se8, se9]
  )

  useEffect(() => {
    const stopCurrentSound = () => {
      if (
        currentSound.current &&
        soundControls[currentSound.current as keyof typeof soundControls]
      ) {
        soundControls[currentSound.current as keyof typeof soundControls].stop()
      }
    }

    stopCurrentSound() // 前の音声を停止

    if (soundControls[number as keyof typeof soundControls]) {
      soundControls[number as keyof typeof soundControls].play()
      currentSound.current = number
    }

    return stopCurrentSound // クリーンアップ時に呼ばれる
  }, [number, soundControls])
}

export default useAdvAnimSE
