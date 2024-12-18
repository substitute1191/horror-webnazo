import useDynamicRandom from "@/components/Room/phase4/TextAnim/hooks/useDynamicRandom"
import useRandomFont from "@/components/Room/phase4/TextAnim/hooks/useRandomFont"
import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
  origin?: string
  sometime?: string
  probability?: number
  interval?: number
}

export default function RandomShakeYChar({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
  origin = "text-white", // 基本的な色
  sometime = "text-red-600", // 時々差し替える色
  probability = 0.05, // 色を変える確率
  interval = 500, // 色変えのための変数を何秒ごとに抽選するか
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])
  const { randomFont } = useRandomFont()
  // コンポーネント描画中も切り替わり続ける変数
  const { dynamicRandom } = useDynamicRandom(interval)

  const randomShakeY = clsx({
    ["animate-[shake-y_0.9s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake-y_0.6s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake-y_1.4s_linear_infinite]"]: randomNum >= 0.66,
  })

  const allClass = clsx(classNames, randomFont, {
    [sometime]: dynamicRandom < probability,
    [origin]: dynamicRandom >= probability,
  })

  return (
    <span className={clsx("inline-block", randomShakeY, allClass)}>
      {children}
    </span>
  )
}
