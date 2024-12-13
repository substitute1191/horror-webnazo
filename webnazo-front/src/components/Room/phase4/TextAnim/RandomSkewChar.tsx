import useDynamicRandom from "@/components/Room/phase4/TextAnim/hooks/useDynamicRandom"
import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  char: string
  classNames?: string
  origin?: string
  sometime?: string
  probability?: number
  interval?: number
}

export default function RandomSkewChar({
  char, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
  origin = "", // 基本的な色
  sometime = "", // 時々差し替える色
  probability = 0, // 色を変える確率
  interval = 500, // 色変えのための変数を何秒ごとに抽選するか
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])
  const randomFontNum = useMemo(() => Math.random(), [])
  // コンポーネント描画中も切り替わり続ける変数
  const { dynamicRandom } = useDynamicRandom(interval)

  const randomShakeX = clsx({
    ["animate-[skew_0.8s_linear_infinite]"]: randomNum > 0.75,
    ["animate-[skew_1.7s_linear_infinite]"]: randomNum > 0.5,
    ["animate-[skew_2.3s_linear_infinite]"]: randomNum > 0.25,
    ["animate-[skew_3.9s_linear_infinite]"]: randomNum >= 0,
  })

  const randomFont = clsx({
    ["font-MSPGothic"]: randomFontNum > 0.8,
    ["font-mincho"]: randomFontNum > 0.6,
    ["font-onryou"]: randomFontNum > 0.4,
    ["font-pop"]: randomFontNum > 0.2,
    ["font-ZeroGothic"]: randomFontNum >= 0,
  })

  const allClass = clsx(classNames, randomFont, {
    [sometime]: dynamicRandom < probability,
    [origin]: dynamicRandom >= probability,
  })

  return (
    <span className={clsx("inline-block", randomShakeX, allClass)}>{char}</span>
  )
}
