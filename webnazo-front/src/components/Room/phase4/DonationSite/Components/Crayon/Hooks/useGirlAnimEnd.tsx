import { atom, useAtom } from "jotai"
import { useRef } from "react"

const isGirlAnimEndAtom = atom(false)
const girlFinalStyleAtom = atom({})

// 少女のアニメ終了時の状態・イベントハンドラを管理するカスタムフック
export default function useGirlAnimEnd() {
  const [isGirlAnimEnd, setIsGirlAnimEnd] = useAtom(isGirlAnimEndAtom)
  // アニメーション終了時の少女の状態を記録する
  const [girlFinalStyle, setGirlFinalStyle] = useAtom(girlFinalStyleAtom)
  const girlHeadRef = useRef<HTMLImageElement>(null)

  const handleGirlAnimEnd = (e: React.AnimationEvent<HTMLImageElement>) => {
    // 首の折れるアニメーションが終わった時、ポータルを使って画像を移動する
    if (e.animationName === "neck-break") {
      setIsGirlAnimEnd(true)
      if (girlHeadRef.current !== null) {
        const rect = girlHeadRef.current.getBoundingClientRect()
        setGirlFinalStyle({
          top: rect.top,
          left: rect.left,
        })
      }
    }
  }

  return {
    isGirlAnimEnd,
    handleGirlAnimEnd,
    girlFinalStyle,
    girlHeadRef,
  }
}
