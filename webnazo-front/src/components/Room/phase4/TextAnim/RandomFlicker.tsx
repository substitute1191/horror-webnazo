import useDynamicRandom from "@/components/Room/phase4/TextAnim/hooks/useDynamicRandom"
import noisese from "@/assets/sound/base_noise1.mp3"
import useSE from "@/SoundManager/useSE"
import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
  probability?: number
}

const otherChars = [
  "ヌ",
  "■",
  "縺",
  "虚",
  "撞",
  "仏",
  "ュ",
  "菱",
  "℃",
  "ﾐ",
  "怨",
]

export default function RandomBlackSquareFlicker({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
  probability = 0.05,
}: Props) {
  const { dynamicRandom } = useDynamicRandom()
  const { play: playSE, stop: stopSE } = useSE(noisese)
  const otherCharIdx = useRef(Math.floor(Math.random() * otherChars.length))
  const isChangingRef = useRef(false)

  useEffect(() => {
    console.log(dynamicRandom)

    if (dynamicRandom <= probability && !isChangingRef.current) {
      playSE()
      isChangingRef.current = true
    } else {
      stopSE()
      isChangingRef.current = false
      otherCharIdx.current = Math.floor(Math.random() * otherChars.length)
    }

    return () => {
      stopSE()
    }
  }, [dynamicRandom, playSE, probability, stopSE])

  return (
    <span className={`${classNames}`}>
      {dynamicRandom > probability ? (
        children
      ) : (
        <span className="text-black">■</span>
      )}
    </span>
  )
}
