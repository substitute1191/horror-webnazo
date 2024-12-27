import { useAtomValue } from "jotai"
import Product from "../Product"
import mascot from "@/assets/image/mascot/mascot.png"
import microwave from "@/assets/image/imprisonment/電子レンジ.png"
import { isMicrowaveInCartAtom } from "@/atoms/roomAtoms"
import SupermarketNav from "./SupermarketNav"
import TextShakeScaleAnimTilt from "@/components/Room/phase4/TextAnim/TextShakeScaleAnimTilt"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"
import heart from "@/assets/image/imprisonment/heart-organ-good.png"
import horror_art from "@/assets/image/imprisonment/背景イラスト2カラー.png"
import warumono from "@/assets/image/imprisonment/warumono.png"
import nengajo from "@/assets/image/imprisonment/年賀状.jpg"
import shibainu from "@/assets/image/imprisonment/柴犬.gif"
import shuriken from "@/assets/image/imprisonment/手裏剣.png"
import clock from "@/assets/image/imprisonment/clock.png"

const Supermarket = () => {
  const isMicrowaveInCart = useAtomValue(isMicrowaveInCartAtom)

  return (
    <>
      <header
        className={`h-2/1 flex justify-between rounded-t bg-black pb-8 ${isMicrowaveInCart ? "-scale-x-100 transform" : ""}`}
      >
        <div className="absolute inset-0 bg-[url(/src/assets/image/imprisonment/背景赤012.png)] opacity-40"></div>
        <h1 className="ml-10 w-full pt-8 text-7xl font-extrabold">
          <TextShakeScaleAnimTilt text="ショッピングセンター" />
        </h1>
        <SupermarketNav />
      </header>
      <div className="relative flex h-4/5 rounded-b bg-green-600">
        <nav className="relative w-1/6 rounded-bl text-2xl">
          <div className="absolute inset-0 bg-[url(/src/assets/image/imprisonment/背景石緑.png)] bg-cover opacity-30"></div>
          <ul className="font-black italic text-white">
            <li className="border-y py-4 pl-3 hover:bg-green-600 hover:bg-opacity-50">
              <TextShakeTiltScale text="トップ" />
            </li>
            <li className="border-y py-4 pl-3 hover:bg-green-600 hover:bg-opacity-50">
              <TextShakeTiltScale text="本日のおすすめ" />
            </li>
            <li className="border-y py-4 pl-3 hover:bg-green-600 hover:bg-opacity-50">
              <TextShakeTiltScale text="履歴" />
            </li>
          </ul>
        </nav>
        <main className="grid w-5/6 grid-cols-3 gap-x-16 gap-y-8 overflow-scroll overflow-x-hidden rounded-br bg-[url(/src/assets/image/imprisonment/背景サイケモザイク1.png)] bg-cover px-10 pt-8">
          <Product src={heart} price={"12345678"} name={"著作権切れ"} />
          <Product src={horror_art} price={"ｳｯｳｯｳｯ"} name={"あど"} />
          <Product src={warumono} price={"10^12"} name={"悪人"} />
          <Product src={nengajo} price={"11921185"} name={"形骸化"} />
          <Product src={shibainu} price={"円"} name={"前科2犯"} />
          <Product src={microwave} price={"1000000"} name={"電子レンジ"} />
          <Product src={shuriken} price={"amiznik"} name={"忍者スターター"} />
          <Product src={clock} price={"1"} name={"高級時計"} />
          <Product src={mascot} price={"100"} name={"ゴミ"} />
        </main>
      </div>
    </>
  )
}
export default Supermarket
