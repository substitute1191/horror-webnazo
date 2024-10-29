import boybody from "@/assets/image/imprisonment/crayon/クレヨンボーイ体.png"
import boyhead from "@/assets/image/imprisonment/crayon/クレヨンボーイ顔.png"
import { isDonatedAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"

export default function CrayonBoy() {
  const isDonated = useAtomValue(isDonatedAtom)

  return (
    <div
      className={`relative z-10 ${isDonated ? "animate-[bounce_1s_ease-in_infinite]" : ""}`}
    >
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
    </div>
  )
}
