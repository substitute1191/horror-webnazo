import kid from "@/assets/image/gif/kao-b11.gif"
import { useCallback, useEffect, useRef, useState } from "react"

export default function KidImageSlider() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)

  const imgSlide = useCallback((currentTime: number) => {
    if (currentTime - lastTime.current >= 30) {
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
    <div className="fixed left-[75vw] z-40 w-40">
      {imgCnt >= 1 ? <img src={kid} className="absolute" alt="" /> : null}
      {imgCnt >= 2 ? (
        <img src={kid} className="absolute left-4 top-[5rem]" alt="" />
      ) : null}
      {imgCnt >= 3 ? (
        <img src={kid} className="absolute left-8 top-[10rem]" alt="" />
      ) : null}
      {imgCnt >= 4 ? (
        <img src={kid} className="absolute left-12 top-[15rem]" alt="" />
      ) : null}
      {imgCnt >= 5 ? (
        <img src={kid} className="absolute left-16 top-[20rem]" alt="" />
      ) : null}
      {imgCnt >= 6 ? (
        <img src={kid} className="absolute left-20 top-[25rem]" alt="" />
      ) : null}
      {imgCnt >= 7 ? (
        <img src={kid} className="absolute left-24 top-[30rem]" alt="" />
      ) : null}
      {imgCnt >= 8 ? (
        <img src={kid} className="absolute left-28 top-[35rem]" alt="" />
      ) : null}
      {imgCnt >= 9 ? (
        <img src={kid} className="absolute left-32 top-[40rem]" alt="" />
      ) : null}
      {imgCnt >= 10 ? (
        <img src={kid} className="absolute left-36 top-[45rem]" alt="" />
      ) : null}
      {imgCnt >= 11 ? (
        <img src={kid} className="absolute left-40 top-[50rem]" alt="" />
      ) : null}
    </div>
  )
}
