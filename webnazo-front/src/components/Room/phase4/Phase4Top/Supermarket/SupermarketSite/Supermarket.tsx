import Product from "../Product"
import mascot from "@/assets/image/mascot/mascot.png"
import microwave from "@/assets/image/imprisonment/電子レンジ.png"
import SupermarketNav from "./SupermarketNav"
import FlashMessage from "./flashMessage/FlashMessage"
import horrorFace from "@/assets/image/supermarket/髪の長い女.png"

const Supermarket = () => {
  return (
    <>
      <header className="font-isekai flex h-1/5 justify-between rounded-t bg-lime-900 pb-8">
        <h1 className="ml-10 pt-8 text-7xl font-extrabold text-red-700">
          万屋 しゃれこうべ
        </h1>
        <SupermarketNav />
      </header>
      <div className="flex h-4/5 rounded-b">
        <nav className="w-1/6 rounded-bl bg-yellow-900 text-2xl">
          <ul className="italic text-white">
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">
              繝医ャ繝励?繝ｼ繧ｸ
            </li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">
              譛ｬ譌･縺ｮ縺翫
            </li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">
              繧ｷ繝後Ρ繝ｨ
            </li>
          </ul>
        </nav>
        <main className="grid w-5/6 grid-cols-3 gap-x-16 gap-y-8 overflow-scroll overflow-x-hidden rounded-br px-10 pt-8">
          <FlashMessage />
          <Product
            src={horrorFace}
            price={99999999}
            name={"こっちを見ている"}
          />
          <Product src={mascot} price={22448655} name={"微笑ましい記憶"} />
          <Product
            src={mascot}
            price={-1100022}
            name={"繝｡繧ｬ繧てしまった繧ｯ繝薙ヮ繝"}
          />
          <Product src={mascot} price={1 / 0} name={"くられでぁし゜ょ"} />
          <Product src={mascot} price={4917111} name={"ピラミッド"} />
          <Product src={microwave} price={1000000} name={"電子レンジ"} />
          <Product
            src={mascot}
            price={29657198}
            name={"昨日繧ｳ繝ｭしたはずの！"}
          />
          <Product
            src={mascot}
            price={666666666666667000000}
            name={
              "ｱｱｱｱ■■■■■ｱｱｱｱｱｱｱｱ■■■■■■■■■■ｱｱｱｱｱｱｱｱｱ■■ｱｱｱ■ｱｱ■ｱｱｱｱｱｱｱｱｱｱｱｱｱｱｱ■■■■■■■■■■ｱｱｱｱ"
            }
          />
          <Product src={mascot} price={3000000} name={"ピラミッド"} />
        </main>
      </div>
    </>
  )
}
export default Supermarket
