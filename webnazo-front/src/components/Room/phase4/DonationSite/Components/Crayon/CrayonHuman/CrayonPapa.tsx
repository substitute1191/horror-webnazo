import papabody from "@/assets/image/imprisonment/crayon/クレヨンパパ体.png"
import papahead from "@/assets/image/imprisonment/crayon/クレヨンパパ顔.png"

export default function CrayonPapa() {
  return (
    <div>
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
    </div>
  )
}
