import eye from "@/assets/image/gif/meanic23.gif"
import { useRef, useState } from "react"
import useSlider from "../../hooks/useSlider"

/* eslint-disable complexity*/
export default function EyeGifSlider() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)

  useSlider({ raf, lastTime, interval: 10, setImgCnt })

  return (
    <div className="fixed left-[15vw] top-[90vh] z-40 w-40">
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
