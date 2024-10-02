import { SetStateAction } from "jotai"
import { Dispatch, MutableRefObject, useCallback, useEffect } from "react"

type Props = {
  raf: MutableRefObject<number | undefined>
  lastTime: MutableRefObject<number>
  interval: number
  setImgCnt: Dispatch<SetStateAction<number>>
}

export default function useSlider({
  raf,
  lastTime,
  interval,
  setImgCnt,
}: Props) {
  const imgSlide = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current >= interval) {
        lastTime.current = currentTime
        setImgCnt((prev) => prev + 1)
      }
    },
    [interval, lastTime, setImgCnt]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      imgSlide(currentTime)
      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [imgSlide, raf])
}
