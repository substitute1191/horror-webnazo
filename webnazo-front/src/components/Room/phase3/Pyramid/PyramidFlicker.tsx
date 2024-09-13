import normal from "@/assets/image/mascot/mascot.png"

import { useCallback, useEffect, useRef, useState } from "react"
import NoizyPyramid from "./NoizyPyramid"

const PyramidFlicker = () => {
  const lastTime = useRef<number>(0)
  const [isChanging, setIsChanging] = useState(false)
  const [pyramidNoiseImg, setPyramidNoiseImg] = useState(0)
  const raf = useRef<number>()

  const changePyramid = useCallback((currentTime: number) => {
    // 指定した間隔でアニメーションを切り替える
    if (currentTime - lastTime.current > 100) {
      console.info("changePyramid!")
      lastTime.current = currentTime
      if (Math.random() < 0.5) {
        console.info("ピラミッドがノイズに切り替わる")
        setPyramidNoiseImg(Math.floor(Math.random() * 6))
        setIsChanging(true)
        setTimeout(() => setIsChanging(false), 100 + Math.random() * 100)
      }
    }
  }, [])

  useEffect(() => {
    const animate = (currentTime: number) => {
      changePyramid(currentTime)
      requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [changePyramid])

  return (
    <>
      {!isChanging ? (
        <img className="-ml-12 w-64" src={normal} alt="" />
      ) : (
        <NoizyPyramid imgIdx={pyramidNoiseImg} />
      )}
    </>
  )
}

export default PyramidFlicker
