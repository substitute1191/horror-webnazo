import useSE from "@/SoundManager/useSE"
import { useEffect } from "react"

export default function SE({ src }: { src: string }) {
  const { play, stop } = useSE(src)

  useEffect(() => {
    play()

    return () => {
      stop()
    }
  }, [play, stop])

  return null
}
