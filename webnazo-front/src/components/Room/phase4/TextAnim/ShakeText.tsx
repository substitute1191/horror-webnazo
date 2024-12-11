import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"

type Props = {
  text: string
}

export default function ShakeText({ text }: Props) {
  return (
    <>
      {text.split("").map((char, idx) => {
        return idx % 2 !== 0 ? (
          <RandomShakeXChar key={idx} char={char} />
        ) : (
          <RandomShakeYChar key={idx} char={char} />
        )
      })}
    </>
  )
}
