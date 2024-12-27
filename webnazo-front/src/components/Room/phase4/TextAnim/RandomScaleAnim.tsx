import clsx from "clsx"
import { useMemo } from "react"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomScaleAnim({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  // コンポーネント描画時に固定される変数
  const randomNum = useMemo(() => Math.random(), [])

  const randomScaleAnim = clsx({
    ["animate-[scale-anim1_1s_ease-in-out_infinite]"]: randomNum < 0.2,
    ["animate-[scale-anim1_5s_ease-in-out_infinite]"]:
      randomNum >= 0.2 && randomNum < 0.4,
    ["animate-[scale-anim1_8s_linear_infinite]"]:
      randomNum >= 0.4 && randomNum < 0.6,
    ["animate-[scale-anim2_3s_ease-in-out_infinite]"]:
      randomNum >= 0.6 && randomNum < 0.8,
    ["animate-[scale-anim2_6s_ease-in-out_infinite]"]: randomNum >= 0.8,
  })

  return (
    <span className={clsx("inline-block", classNames, randomScaleAnim)}>
      {children}
    </span>
  )
}
