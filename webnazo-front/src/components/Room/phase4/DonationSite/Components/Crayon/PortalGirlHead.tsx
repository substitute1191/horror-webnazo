import useGirlAnimEnd from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useGirlAnimEnd"
import girlhead from "@/assets/image/imprisonment/crayon/クレヨンガール顔.png"

export default function PortalGirlHead() {
  const { isGirlAnimEnd, girlFinalStyle } = useGirlAnimEnd()
  const phase4TopElem = document.getElementById("phase4Top")

  return isGirlAnimEnd && phase4TopElem !== null ? (
    <img
      src={girlhead}
      style={{ ...girlFinalStyle }}
      className="absolute max-w-[100px] -rotate-[507deg]"
      alt=""
    />
  ) : null
}