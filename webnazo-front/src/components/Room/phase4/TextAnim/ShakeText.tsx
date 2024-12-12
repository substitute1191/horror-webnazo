import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
import clsx from "clsx"

type Props = {
  text: string
}

export default function ShakeText({ text }: Props) {
  return (
    <>
      {text.split("").map((char, idx) => {
        const randomColor = Math.random()
        const sometimeColor = clsx({
          ["text-red-800"]: randomColor > 0.75,
          ["text-yellow-600"]: randomColor <= 0.75 && randomColor > 0.5,
          ["text-rose-700"]: randomColor <= 0.5 && randomColor > 0.25,
          ["text-pink-800"]: randomColor <= 0.25,
        })

        const randomProb = Math.random() % 0.05

        return idx % 2 !== 0 ? (
          <RandomShakeXChar
            key={idx}
            char={char}
            sometime={sometimeColor}
            probability={randomProb}
          />
        ) : (
          <RandomShakeYChar
            key={idx}
            char={char}
            sometime={sometimeColor}
            probability={randomProb}
          />
        )
      })}
    </>
  )
}
