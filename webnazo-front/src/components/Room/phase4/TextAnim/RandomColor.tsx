import useRandomColor from "@/components/Room/phase4/TextAnim/hooks/useRandomColor"
import clsx from "clsx"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomColor({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  const { randomColor } = useRandomColor()

  return (
    <span className={clsx("inline-block", classNames, randomColor)}>
      {children}
    </span>
  )
}
