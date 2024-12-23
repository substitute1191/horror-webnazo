import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomShakeYChar({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])

  const randomShakeY = clsx({
    ["animate-[shake-y_0.9s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake-y_0.6s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake-y_1.4s_linear_infinite]"]: randomNum >= 0.66,
  })

  return (
    <span className={clsx("inline-block", classNames, randomShakeY)}>
      {children}
    </span>
  )
}
