import img2 from "@/assets/image/imprisonment/crayon/背景2.png"
import img3 from "@/assets/image/imprisonment/crayon/背景3.png"
import img4 from "@/assets/image/imprisonment/crayon/背景4.png"
import { useCallback, useEffect, useState } from "react"
import CrayonFamily from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonFamily"
import DonationMsg from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationMsg"
import DonationButtons from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationButtons"
import useNoMillionYenMsg from "@/components/Room/phase4/DonationSite/Hooks/useNoMillionYenMsg"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomScaleAnim from "@/components/Room/phase4/TextAnim/RandomScaleAnim"
import RandomTilt from "@/components/Room/phase4/TextAnim/RandomTilt"
import RandomColor from "@/components/Room/phase4/TextAnim/RandomColor"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"

export default function Crayons() {
  const [crayonImgIdx, setCrayonImgIdx] = useState(0)
  const { noMillionYenMsg, setNoMillionYenMsg } = useNoMillionYenMsg()

  const handleImg = useCallback(() => {
    setCrayonImgIdx((prev) => prev + 1)
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      handleImg()
    }, 2000)

    return () => {
      clearInterval(timerId)
      // 100万円が無いというエラーメッセージを初期化
      setNoMillionYenMsg("")
    }
  }, [handleImg, setNoMillionYenMsg])

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
      <span className="absolute left-[50%] top-[50%] inline-block w-full -translate-x-[50%] -translate-y-[50%] bg-black text-center text-9xl">
        {noMillionYenMsg.split("").map((char, idx) => {
          return idx % 2 !== 0 ? (
            <RandomShakeXChar key={idx}>
              <RandomScaleAnim>
                <RandomTilt>
                  <RandomColor>{char}</RandomColor>
                </RandomTilt>
              </RandomScaleAnim>
            </RandomShakeXChar>
          ) : (
            <RandomShakeYChar key={idx}>
              <RandomScaleAnim>
                <RandomTilt>
                  <RandomColor>{char}</RandomColor>
                </RandomTilt>
              </RandomScaleAnim>
            </RandomShakeYChar>
          )
        })}
      </span>
    </div>
  )
}
