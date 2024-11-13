import mamabody from "@/assets/image/imprisonment/crayon/クレヨンママ体.png"
import mamahead from "@/assets/image/imprisonment/crayon/クレヨンママ顔.png"

export default function CrayonMama() {
  return (
    <div className="">
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
    </div>
  )
}
