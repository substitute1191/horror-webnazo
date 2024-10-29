import papabody from "@/assets/image/imprisonment/crayon/クレヨンパパ体.png"
import papahead from "@/assets/image/imprisonment/crayon/クレヨンパパ顔.png"
import CrayonBoy from "./CrayonBoy"
import CrayonGirl from "./CrayonGirl"
import CrayonMama from "./CrayonMama"

export default function CrayonFamily({ classNames }: { classNames?: string }) {
  return (
    <div
      id="family"
      className={`bg-crayon-bg absolute left-[50%] top-[50%] h-[400px] min-w-[600px] bg-contain bg-center bg-no-repeat ${classNames}`}
    >
      <CrayonBoy />
      <CrayonGirl />
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
      <CrayonMama />
    </div>
  )
}
