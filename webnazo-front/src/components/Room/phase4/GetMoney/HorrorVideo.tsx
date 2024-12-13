import useIsVideoStart from "@/components/Room/phase4/GetMoney/useIsVideoStart"
import { useEffect } from "react"

export default function HorrorVideo() {
  const { setIsVideoStart } = useIsVideoStart()

  useEffect(() => {
    setTimeout(() => {
      setIsVideoStart(false)
    }, 3000)
  }, [setIsVideoStart])

  return <div className="text-9xl text-white">こんにちは。</div>
}
