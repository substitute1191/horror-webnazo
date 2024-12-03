import { isMicrowaveInCartAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"

export default function CartItems() {
  const isMicrowaveInCart = useAtomValue(isMicrowaveInCartAtom)
  return (
    <>
      {isMicrowaveInCart ? (
        <div className="font-isekai rounded-3xl p-7 text-5xl font-extrabold text-green-700">
          カートには<span className="mx-5 text-6xl">髮ｻ蟄舌Ξ繝ｳ繧ｸ</span>
          が入っていル
        </div>
      ) : (
        <div className="font-isekai rounded-3xl p-7 text-5xl font-extrabold text-red-900">
          繧ｫ繝ｼ繝には何も入っていないようだ
        </div>
      )}
    </>
  )
}
