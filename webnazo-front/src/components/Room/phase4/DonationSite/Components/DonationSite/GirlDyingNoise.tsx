import { createPortal } from "react-dom"
import horror from "@/assets/image/imprisonment/背景＿発光.png"
import noise from "@/assets/image/imprisonment/apng_noise.png"

export default function GirlDyingNoise() {
  return createPortal(
    <>
      <img
        src={horror}
        alt=""
        className="absolute top-0 z-[50] h-full w-full opacity-25"
      />
      <img
        src={noise}
        alt=""
        className="absolute top-0 z-[55] h-full w-full opacity-20"
      />
    </>,
    document.body
  )
}
