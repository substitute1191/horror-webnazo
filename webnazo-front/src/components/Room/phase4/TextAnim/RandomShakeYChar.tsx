import useDynamicRandom from "@/components/Room/phase4/TextAnim/useDynamicRandom"
import clsx from "clsx"
import { useMemo } from "react"

export default function RandomShakeYChar({ char }: { char: string }) {
  const randomNum = useMemo(() => Math.random(), [])
  const { dynamicRandom } = useDynamicRandom(400)

  const randomShakeY = clsx({
    ["animate-[shake-y_0.6s_linear_infinite]"]: randomNum < 0.33,
    ["animate-[shake-y_0.2s_linear_infinite]"]:
      randomNum >= 0.33 && randomNum < 0.66,
    ["animate-[shake-y_1.2s_linear_infinite]"]: randomNum >= 0.66,
  })

  const randomColor = clsx({
    ["text-red-800"]: dynamicRandom < 0.08,
    ["text-white"]: dynamicRandom >= 0.08,
  })

  return (
    <span className={clsx("inline-block", randomShakeY, randomColor)}>
      {char}
    </span>
  )
}
