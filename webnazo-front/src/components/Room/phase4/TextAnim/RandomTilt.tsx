import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomTilt({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])

  const randomTilt = clsx({
    ["rotate-0"]: randomNum < 0.2,
    ["rotate-[10deg]"]: randomNum >= 0.2 && randomNum < 0.4,
    ["rotate-[15deg]"]: randomNum >= 0.4 && randomNum < 0.6,
    ["-rotate-[5deg]"]: randomNum >= 0.6 && randomNum < 0.8,
    ["-rotate-[12deg]"]: randomNum >= 0.8,
  })

  return (
    <span className={clsx("inline-block", classNames, randomTilt)}>
      {children}
    </span>
  )
}
