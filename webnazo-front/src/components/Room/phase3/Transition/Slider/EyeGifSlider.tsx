import eye from "@/assets/image/gif/meanic23.gif"
import { useCallback, useEffect, useRef, useState } from "react"

/* eslint-disable complexity*/
export default function EyeGifSlider() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)

  const imgSlide = useCallback((currentTime: number) => {
    if (currentTime - lastTime.current >= 15) {
      lastTime.current = currentTime
      setImgCnt((prev) => prev + 1)
    }
  }, [])

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
  }, [imgSlide])

  return (
    <div className="fixed left-[15vw] top-[70vh] z-40 w-40">
      {Array.from(
        { length: 50 },
        (_, index) =>
          imgCnt >= index + 1 && (
            <img
              key={index}
              src={eye}
              className="absolute w-12"
              alt=""
              style={{
                left: `${index * 2}rem`,
                top: `${-index * 0.5}rem`,
              }}
            />
          )
      )}
    </div>
  )
}
