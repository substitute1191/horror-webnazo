/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import CrayonFamilyBg from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonFamilyBg"
import boybody from "@/assets/image/imprisonment/crayon/クレヨンボーイ体.png"
import boyhead from "@/assets/image/imprisonment/crayon/クレヨンボーイ顔.png"
import girlhead from "@/assets/image/imprisonment/crayon/クレヨンガール顔.png"
import girlbody from "@/assets/image/imprisonment/crayon/クレヨンガール体.png"
import mamabody from "@/assets/image/imprisonment/crayon/クレヨンママ体.png"
import mamahead from "@/assets/image/imprisonment/crayon/クレヨンママ顔.png"
import papabody from "@/assets/image/imprisonment/crayon/クレヨンパパ体.png"
import papahead from "@/assets/image/imprisonment/crayon/クレヨンパパ顔.png"
import useIsGirlNeckBroken from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useIsGirlNeckBroken"
import useGirlAnimEnd from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useGirlAnimEnd"
import Blood from "@/components/Room/phase4/DonationSite/Components/Crayon/Blood"
import { useEffect, useState } from "react"
import Blood2 from "@/components/Room/phase4/DonationSite/Components/Crayon/Blood2"
import Blood3 from "@/components/Room/phase4/DonationSite/Components/Crayon/Blood3"
import useSE from "@/SoundManager/useSE"
import fracture1 from "@/assets/sound/imprisonment/Fracture01-1(Dry).mp3"
import fracture2 from "@/assets/sound/imprisonment/Fracture03-1(Dry).mp3"
import comming from "@/assets/sound/imprisonment/nc257701_【効果音】迫ってくる音・ホラー系SE.wav"

export default function CrayonsAfterStolen() {
  const { isGirlNeckBroken } = useIsGirlNeckBroken()
  const { handleGirlAnimEnd, girlHeadRef } = useGirlAnimEnd()
  const [familyDeathCount, setFamilyDeathCount] = useState(0)
  const { play: playFracture1 } = useSE(fracture1)
  const { play: playFracture2 } = useSE(fracture2)
  const { play: playComming } = useSE(comming)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(true)
    // 少女が死ぬと家族もバタバタと死んでいく
    if (isGirlNeckBroken) {
      setTimeout(() => {
        setFamilyDeathCount((prev) => prev + 1)
        playFracture1()
      }, 1300)

      setTimeout(() => {
        setFamilyDeathCount((prev) => prev + 1)
        playFracture2()
      }, 2100)

      setTimeout(() => {
        setFamilyDeathCount((prev) => prev + 1)
        playFracture1()
        playComming()
      }, 3000)

      setTimeout(() => {
        setFamilyDeathCount((prev) => prev + 1)
      }, 3300)

      setTimeout(() => {
        window.alert("家族を返して")
        window.location.reload()
      }, 5000)
    }
  }, [isGirlNeckBroken, playComming, playFracture1, playFracture2])

  if (!isShow) return null

  return (
    <CrayonFamilyBg classNames="animate-[shake-crayon-bg_0.1s_ease-in-out_infinite]">
      {isGirlNeckBroken ? <Blood /> : null}
      {familyDeathCount === 1 ? <Blood2 /> : null}
      {familyDeathCount === 2 ? <Blood3 /> : null}
      <img
        src={boybody}
        alt=""
        className={`absolute left-[300px] top-[250px] z-10 max-w-[100px] origin-bottom ${familyDeathCount >= 1 ? "animate-[body-falldown-backward_1.4s_forwards]" : ""}`}
      />
      <img
        src={boyhead}
        alt=""
        className={`absolute left-[300px] top-[190px] z-10 max-w-[100px] origin-bottom ${familyDeathCount >= 1 ? "animate-[neck-rotate3_0.1s_forwards]" : ""}`}
      />
      <img
        src={girlbody}
        alt=""
        className={`absolute left-[210px] top-[280px] z-10 max-w-[100px] ${isGirlNeckBroken ? "origin-bottom animate-[body-falldown_1.5s_ease-out_forwards]" : "animate-[shake_0.2s_infinite]"} `}
      />
      <img
        ref={girlHeadRef}
        src={girlhead}
        alt=""
        onAnimationEnd={handleGirlAnimEnd}
        className={`absolute left-[210px] top-[200px] z-10 max-w-[100px] origin-center ${isGirlNeckBroken ? "animate-[neck-break_2s_forwards]" : "animate-[wobble-face_0.15s_ease-in-out_infinite]"} `}
      />

      <img
        src={mamabody}
        alt=""
        className={`absolute left-[364px] top-[200px] z-0 max-w-[100px] ${familyDeathCount >= 3 ? "animate-[body-falldown_0.3s_forwards_ease-in origin-bottom" : ""}`}
      />
      <img
        src={mamahead}
        alt=""
        className={`absolute left-[360px] top-[130px] z-0 max-w-[100px] ${familyDeathCount >= 4 ? "z-[40] origin-center animate-[scaleup-mama_1.7s_forwards_ease-out]" : ""} ${familyDeathCount >= 3 ? "origin-bottom animate-[neck-rotate2_0.2s_forwards]" : ""}`}
      />
      <img
        src={papabody}
        alt=""
        className={`absolute left-[120px] top-[200px] max-w-[100px] ${familyDeathCount >= 2 ? "animate-[body-falldown_1.4s_forwards]" : ""}`}
      />
      <img
        src={papahead}
        alt=""
        className={`absolute left-[120px] top-[120px] max-w-[100px] origin-bottom ${familyDeathCount >= 2 ? "animate-[neck-rotate_0.3s_forwards]" : ""}`}
      />
    </CrayonFamilyBg>
  )
}
