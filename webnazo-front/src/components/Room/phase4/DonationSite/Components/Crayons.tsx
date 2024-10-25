import img2 from "@/assets/image/imprisonment/crayon/背景2.png"
import img3 from "@/assets/image/imprisonment/crayon/背景3.png"
import img4 from "@/assets/image/imprisonment/crayon/背景4.png"
import { useCallback, useEffect, useState } from "react"
import CrayonFamily from "./CrayonFamily"
import DonationMsg from "./DonationMsg"
import DonationButtons from "./DonationButtons"

export default function Crayon() {
  const [crayonImgIdx, setCrayonImgIdx] = useState(0)

  const handleImg = useCallback(() => {
    console.log(crayonImgIdx)
    setCrayonImgIdx((prev) => prev + 1)
  }, [crayonImgIdx])

  useEffect(() => {
    const timerId = setInterval(() => {
      handleImg()
    }, 2000)

    return () => {
      clearInterval(timerId)
    }
  }, [handleImg])

  return (
    <div className="relative h-full w-full">
      <img
        src={img2}
        alt=""
        className={`h-[400px] min-w-[600px] ${crayonImgIdx >= 0 ? "absolute animate-[fadein-left-fadeout_3s_forwards]" : "hidden"}`}
      />
      <img
        src={img3}
        alt=""
        className={`h-[400px] min-w-[600px] ${crayonImgIdx >= 1 ? "absolute bottom-0 right-0 animate-[fadein-right-fadeout_3s_forwards]" : "hidden"}`}
      />
      <img
        src={img4}
        alt=""
        className={`h-[400px] min-w-[600px] ${crayonImgIdx >= 2 ? "absolute animate-[fadein-left-fadeout_3s_forwards]" : "hidden"}`}
      />
      <CrayonFamily
        classNames={
          crayonImgIdx >= 3 ? "animate-[fadein-family_3s_forwards]" : "hidden"
        }
      />
      <DonationMsg
        classNames={
          crayonImgIdx >= 4 ? "animate-[fadein-up_3s_forwards]" : "hidden"
        }
      />
      <DonationButtons classNames={crayonImgIdx >= 5 ? "" : "hidden"} />
    </div>
  )
}
