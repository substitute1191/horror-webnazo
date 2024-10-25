import boybody from "@/assets/image/imprisonment/crayon/クレヨンボーイ体.png"
import boyhead from "@/assets/image/imprisonment/crayon/クレヨンボーイ顔.png"
import girlbody from "@/assets/image/imprisonment/crayon/クレヨンガール体.png"
import girlhead from "@/assets/image/imprisonment/crayon/クレヨンガール顔.png"
import papabody from "@/assets/image/imprisonment/crayon/クレヨンパパ体.png"
import papahead from "@/assets/image/imprisonment/crayon/クレヨンパパ顔.png"
import mamabody from "@/assets/image/imprisonment/crayon/クレヨンママ体.png"
import mamahead from "@/assets/image/imprisonment/crayon/クレヨンママ顔.png"

export default function CrayonFamily({ classNames }: { classNames?: string }) {
  return (
    <div
      id="family"
      className={`bg-crayon-bg absolute left-[50%] top-[50%] h-[400px] min-w-[600px] bg-contain bg-center bg-no-repeat ${classNames}`}
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
      <img
        src={mamabody}
        alt=""
        className="absolute left-[364px] top-[200px] max-w-[100px]"
      />
      <img
        src={mamahead}
        alt=""
        className="absolute left-[360px] top-[130px] max-w-[100px]"
      />
    </div>
  )
}
