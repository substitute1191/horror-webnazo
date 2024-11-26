import {
  hasMicrowaveAtom,
  isMicrowaveInCartAtom,
  isMillionaireAtom,
} from "@/atoms/roomAtoms"
import { useAtom } from "jotai"

export default function SupermarketNav() {
  const [, setHasMicrowave] = useAtom(hasMicrowaveAtom)
  const [, setIsMillionaire] = useAtom(isMillionaireAtom)
  const [isMicrowaveInCart, setIsMicrowaveInCart] = useAtom(
    isMicrowaveInCartAtom
  )

  const purchaseMicrowave = () => {
    setHasMicrowave(true)
    setIsMicrowaveInCart(false)
    setIsMillionaire(false)
  }

  return (
    <nav className="content-end pt-14">
      <ul className="mr-16 flex list-none justify-around text-2xl">
        <li className="cursor-pointer hover:text-orange-500">所持金の確認</li>
        <li className="ml-5 cursor-pointer hover:text-orange-500">
          カートを見る
        </li>
        <li className="relative ml-5 hover:text-orange-500">
          <button
            onClick={purchaseMicrowave}
            disabled={!isMicrowaveInCart}
            className="cursor-pointer"
          >
            購入
          </button>
          {isMicrowaveInCart ? (
            <span className="absolute -right-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              1
            </span>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  )
}
