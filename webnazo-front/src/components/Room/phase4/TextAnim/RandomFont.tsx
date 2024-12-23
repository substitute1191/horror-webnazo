import useRandomFont from "@/components/Room/phase4/TextAnim/hooks/useRandomFont"
import clsx from "clsx"

type Props = {
  children: React.ReactNode
  classNames?: string
}

export default function RandomFont({
  children, // 表示する文字
  classNames, // 設定したいclassNamesがあれば
}: Props) {
  const { randomFont } = useRandomFont()

  return (
    <span className={clsx("inline-block", classNames, randomFont)}>
      {children}
    </span>
  )
}
