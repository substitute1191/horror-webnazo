import { useEffect, useRef, useState } from "react"
import SEsrc from "@/assets/sound/base_noise1.mp3"
import { useAtomValue } from "jotai"
import { isPlayableAtom } from "@/atoms/atoms"
import SoundEffectManager from "@/SoundEffectManger"

// 元の文字originと変化対象となる文字配列sometimeを与える。
// 確率probabilityによってoriginがsometimeで与えられた文字列の中のどれかに変化する
// スタイルも一定確率でsometimeClassNameの文字配列のものが新しく付与される
export const useCharacterFlicker = (
  origin: string,
  sometime: string[],
  sometimeClassName: string[],
  probability: number
) => {
  const [classNames, setClassNames] = useState("")
  const isPlayable = useAtomValue(isPlayableAtom)
  const [result, setResult] = useState(origin)
  const managerRef = useRef<SoundEffectManager | null>(null)

  useEffect(() => {
    managerRef.current = new SoundEffectManager(SEsrc)
    const timer = setInterval(() => {
      if (Math.random() < probability) {
        setClassNames(
          sometimeClassName[
            Math.floor(Math.random() * sometimeClassName.length)
          ]
        )
        setResult(sometime[Math.floor(Math.random() * sometime.length)])
        if (managerRef.current !== null && isPlayable) {
          managerRef.current.play()
        }
        setTimeout(
          () => {
            setClassNames("")
            setResult(origin)
            if (managerRef.current !== null && isPlayable) {
              managerRef.current.stop()
            }
          },
          300 + Math.random() * 100
        )
      }
    }, 200)

    return () => clearInterval(timer)
  }, [probability, isPlayable, origin, sometime, sometimeClassName])

  return { classNames, result }
}
