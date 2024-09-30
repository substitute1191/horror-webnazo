import { useEffect, useRef, useState } from "react"
import horror from "@/assets/image/blackedeyesbigfacegirl.png"
import useSlider from "../hooks/useSlider"
import useProceed from "../../useProceed"

export default function BlackedEyesWomanFlicker() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)
  const { proceed } = useProceed()

  useSlider({ raf, lastTime, interval: 40, setImgCnt })

  useEffect(() => {
    setTimeout(() => {
      proceed(4)
    }, 2000)
  }, [proceed])

  return (
    <>
      {imgCnt % 2 === 0 ? (
        <img className="h-screen w-screen object-cover" src={horror} alt="" />
      ) : (
        <div className="h-screen w-screen bg-black"></div>
      )}
    </>
  )
}
