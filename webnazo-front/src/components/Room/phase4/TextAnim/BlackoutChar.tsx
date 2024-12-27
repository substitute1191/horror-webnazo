import RandomRotateChar from "@/components/Room/phase4/TextAnim/RandomRotateChar"
import useDynamicRandom from "@/components/Room/phase4/TextAnim/hooks/useDynamicRandom"
import clsx from "clsx"

type Props = {
  char: string
}

export default function BlackoutChar({ char }: Props) {
  const { dynamicRandom } = useDynamicRandom(300)

  const classNames = clsx("inline-block", "font-onryou", "w-[3rem]", {
    ["text-black"]: dynamicRandom > 0.97,
  })

  return (
    <span className={classNames}>
      {dynamicRandom <= 0.97 ? <RandomRotateChar char={char} /> : "■"}
    </span>
  )
}
