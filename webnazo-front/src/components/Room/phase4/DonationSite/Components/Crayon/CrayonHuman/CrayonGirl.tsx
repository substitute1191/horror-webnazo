import girlbody from "@/assets/image/imprisonment/crayon/クレヨンガール体.png"
import girlhead from "@/assets/image/imprisonment/crayon/クレヨンガール顔.png"
import { isDonatedAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"

export default function CrayonGirl() {
  const isDonated = useAtomValue(isDonatedAtom)

  return (
    <div
      className={`${isDonated ? "animate-[bounce_0.7s_ease-out_infinite]" : ""}`}
    >
      <img
        src={girlbody}
        alt=""
        className="absolute left-[210px] top-[280px] z-10 max-w-[100px]"
      />
      <img
        src={girlhead}
        alt=""
        className="absolute left-[210px] top-[200px] z-10 max-w-[100px]"
      />
    </div>
  )
}
