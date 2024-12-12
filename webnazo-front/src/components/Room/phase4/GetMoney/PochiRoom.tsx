import useHasPochiLeft from "@/hooks/Pochi/useHasPochiLeft"
import nazo3 from "@/assets/image/imprisonment/謎3.png"
import ans from "@/assets/image/imprisonment/謎3の答え.jpg"
import noise from "@/assets/image/imprisonment/apng_noise.png"

export default function PochiRoom() {
  const { hasPochiLeft } = useHasPochiLeft()

  return (
    <div className="relative">
      <img className="absolute h-full w-full opacity-40" src={noise} alt="" />
      {hasPochiLeft ? (
        <img className="h-full w-full" src={ans} alt="" />
      ) : (
        <img className="h-full w-full" src={nazo3} alt="" />
      )}
    </div>
  )
}
