import { useAtom } from "jotai"
import Product from "./Product"
import mascot from "@/assets/image/mascot/mascot.png"
import microwave from "@/assets/image/imprisonment/電子レンジ.png"
import {
  hasMicrowaveAtom,
  isMicrowaveInCartAtom,
  isMillionaireAtom,
} from "@/atoms/roomAtoms"

const Supermarket = () => {
  const [isMicrowaveInCart, setIsMicrowaveInCart] = useAtom(
    isMicrowaveInCartAtom
  )
  const [, setHasMicrowave] = useAtom(hasMicrowaveAtom)
  const [, setIsMillionaireAtom] = useAtom(isMillionaireAtom)
  const purchaseMicrowave = () => {
    setHasMicrowave(true)
    setIsMicrowaveInCart(false)
    setIsMillionaireAtom(false)
  }

  return (
    <>
      <header className="flex h-1/5 justify-between rounded-t bg-lime-600 pb-8">
        <h1 className="ml-10 pt-8 text-7xl font-extrabold">
          ショッピングセンター
        </h1>
        <nav className="content-end pt-14">
          <ul className="mr-16 flex list-none justify-around text-2xl">
            <li className="cursor-pointer hover:text-orange-500">
              所持金の確認
            </li>
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
      </header>
      <div className="flex h-4/5 rounded-b">
        <nav className="w-1/6 rounded-bl bg-yellow-900 text-2xl">
          <ul className="italic text-white">
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">トップ</li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">
              本日のおすすめ
            </li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">サイド３</li>
          </ul>
        </nav>
        <main className="grid w-5/6 grid-cols-3 gap-x-32 gap-y-8 overflow-scroll overflow-x-hidden rounded-br px-10 pt-8">
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={microwave} price={1000000} name={"電子レンジ"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
          <Product src={mascot} price={100} name={"ピラミッド"} />
        </main>
      </div>
    </>
  )
}
export default Supermarket
