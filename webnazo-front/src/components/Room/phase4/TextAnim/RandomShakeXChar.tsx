import useDynamicRandom from "@/components/Room/phase4/TextAnim/useDynamicRandom"
import clsx from "clsx"
import { useMemo } from "react"

export default function RandomShakeXChar({ char }: { char: string }) {
  const randomNum = useMemo(() => Math.random(), [])
  const { dynamicRandom } = useDynamicRandom()

  const randomShakeX = clsx({
    ["animate-[shake_0.5s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake_0.3s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake_1s_linear_infinite]"]: randomNum >= 0.66,
  })

  const randomColor = clsx({
    ["text-red-600"]: dynamicRandom < 0.05,
    ["text-white"]: dynamicRandom >= 0.05,
  })

  return (
    <span className={clsx("inline-block", randomShakeX, randomColor)}>
      {char}
    </span>
  )
}
