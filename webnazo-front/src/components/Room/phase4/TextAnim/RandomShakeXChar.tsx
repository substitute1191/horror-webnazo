import useDynamicRandom from "@/components/Room/phase4/TextAnim/useDynamicRandom"
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

export default function RandomShakeXChar({
  char, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
  origin = "text-white", // 基本的な色
  sometime = "text-red-600", // 時々差し替える色
  probability = 0.05, // 色を変える確率
  interval = 500, // 色変えのための変数を何秒ごとに抽選するか
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])
  const randomFontNum = useMemo(() => Math.random(), [])
  const randomIntervalNum = useMemo(() => Math.random(), [])
  // コンポーネント描画中も切り替わり続ける変数
  const { dynamicRandom } = useDynamicRandom(interval)

  const randomShakeX = clsx({
    ["animate-[shake_0.1s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake_0.5s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake_1.7s_linear_infinite]"]: randomNum >= 0.66,
  })

  const randomFont = clsx({
    ["font-MSPGothic"]: randomFontNum > 0.8,
    ["font-mincho"]: randomFontNum > 0.6,
    ["font-onryou"]: randomFontNum > 0.4,
    ["font-pop"]: randomFontNum > 0.2,
    ["font-ZeroGothic"]: randomFontNum >= 0,
  })

  const randomInterval = clsx({
    [500]: randomIntervalNum > 0.8,
    [800]: randomIntervalNum > 0.6,
    [1200]: randomIntervalNum > 0.4,
    [1600]: randomIntervalNum > 0.2,
    [2000]: randomIntervalNum >= 0,
  })

  const allClass = clsx(classNames, randomFont, randomInterval, {
    [sometime]: dynamicRandom < probability,
    [origin]: dynamicRandom >= probability,
  })

  return (
    <span className={clsx("inline-block", randomShakeX, allClass)}>{char}</span>
  )
}
