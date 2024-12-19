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

export default function RandomShakeXChar({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])
  const { randomFont } = useRandomFont()

  const randomShakeX = clsx({
    ["animate-[shake_0.1s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake_0.5s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake_1.7s_linear_infinite]"]: randomNum >= 0.66,
  })

  const allClass = clsx(classNames, randomFont)

  return (
    <span className={clsx("inline-block", randomShakeX, allClass)}>
      {children}
    </span>
  )
}
