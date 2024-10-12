import useHasPochiLeft from "@/hooks/Pochi/useHasPochiLeft"
import nazo3 from "@/assets/image/imprisonment/謎3.png"
import ans from "@/assets/image/imprisonment/謎3の答え.jpg"

export default function PochiRoom() {
  const { hasPochiLeft } = useHasPochiLeft()

  return (
    <>{hasPochiLeft ? <img src={ans} alt="" /> : <img src={nazo3} alt="" />}</>
  )
}
