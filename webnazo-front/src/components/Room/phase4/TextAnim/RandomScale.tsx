import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomScale({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])

  const randomScale = clsx({
    ["scale-1"]: randomNum < 0.33,
    ["scale-[1.2]"]: randomNum >= 0.33 && randomNum < 0.66,
    ["scale-[0.8]"]: randomNum >= 0.66,
  })

  return (
    <span className={clsx("inline-block", classNames, randomScale)}>
      {children}
    </span>
  )
}
