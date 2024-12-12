import clsx from "clsx"
import { useMemo } from "react"

export default function RandomRotateChar({ char }: { char: string }) {
  const randomNum = useMemo(() => Math.random(), [])

  const classNames = clsx("inline-block", {
    ["animate-[rotate-char_5s_ease-in-out_infinite] font-DelaGothicOne"]:
      randomNum <= 0.33,
    ["animate-[rotate-char_8s_ease-in-out_infinite] font-ZeroGothic"]:
      randomNum > 0.33 && randomNum < 0.66,
    ["animate-[rotate-char_11s_ease-in-out_infinite]"]: randomNum > 0.66,
  })

  return <span className={classNames}>{char}</span>
}
