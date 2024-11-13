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

export default function CrayonsAfterStolen() {
  const { isGirlNeckBroken } = useIsGirlNeckBroken()
  const { handleGirlAnimEnd, girlHeadRef } = useGirlAnimEnd()

  return (
    <CrayonFamilyBg classNames="animate-[shake-crayon-bg_0.1s_ease-in-out_infinite]">
      <img
        src={boybody}
        alt=""
        className="absolute left-[300px] top-[250px] z-10 max-w-[100px]"
      />
      <img
        src={boyhead}
        alt=""
        className="absolute left-[300px] top-[190px] z-10 max-w-[100px]"
      />
      <img
        src={girlbody}
        alt=""
        className={`absolute left-[210px] top-[280px] z-10 max-w-[100px] ${isGirlNeckBroken ? "" : "animate-[shake_0.2s_infinite]"} `}
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
        className="absolute left-[364px] top-[200px] z-0 max-w-[100px]"
      />
      <img
        src={mamahead}
        alt=""
        className="absolute left-[360px] top-[130px] z-0 max-w-[100px]"
      />
      <img
        src={papabody}
        alt=""
        className="absolute left-[120px] top-[200px] max-w-[100px]"
      />
      <img
        src={papahead}
        alt=""
        className="absolute left-[120px] top-[120px] max-w-[100px]"
      />
    </CrayonFamilyBg>
  )
}
