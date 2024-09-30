import tv from "@/assets/image/gif/tvani11.gif"
import { useRef, useState } from "react"
import useSlider from "../../hooks/useSlider"

/* eslint-disable complexity*/
export default function TVImageSlider() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)

  useSlider({ raf, lastTime, interval: 25, setImgCnt })

  return (
    <div className="fixed left-[3vw] top-[75vh] z-40 w-40">
      {imgCnt >= 1 ? <img src={tv} className="absolute" alt="" /> : null}
      {imgCnt >= 2 ? (
        <img src={tv} className="absolute -top-[10rem] left-12" alt="" />
      ) : null}
      {imgCnt >= 3 ? (
        <img src={tv} className="absolute -top-[20rem] left-24" alt="" />
      ) : null}
      {imgCnt >= 4 ? (
        <img src={tv} className="absolute -top-[30rem] left-36" alt="" />
      ) : null}
      {imgCnt >= 5 ? (
        <img src={tv} className="absolute -top-[40rem] left-48" alt="" />
      ) : null}
    </div>
  )
}
