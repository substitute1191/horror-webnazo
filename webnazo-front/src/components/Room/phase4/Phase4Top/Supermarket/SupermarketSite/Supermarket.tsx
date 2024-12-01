import Product from "../Product"
import mascot from "@/assets/image/mascot/mascot.png"
import microwave from "@/assets/image/imprisonment/電子レンジ.png"
import SupermarketNav from "./SupermarketNav"
import FlashMessage from "./flashMessage/FlashMessage"

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
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">トップ</li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">
              本日のおすすめ
            </li>
            <li className="border-y py-4 pl-3 hover:bg-yellow-600">サイド３</li>
          </ul>
        </nav>
        <main className="grid w-5/6 grid-cols-3 gap-x-16 gap-y-8 overflow-scroll overflow-x-hidden rounded-br px-10 pt-8">
          <FlashMessage />
          <Product src={mascot} price={99999999} name={"ピラミッド"} />
          <Product src={mascot} price={22448655} name={"ピラミッド"} />
          <Product src={mascot} price={-1100022} name={"ピラミッド"} />
          <Product src={mascot} price={1 / 0} name={"ピラミッド"} />
          <Product src={mascot} price={4917111} name={"ピラミッド"} />
          <Product src={microwave} price={1000000} name={"電子レンジ"} />
          <Product src={mascot} price={29657198} name={"ピラミッド"} />
          <Product
            src={mascot}
            price={666666666666667000000}
            name={"ピラミッド"}
          />
          <Product src={mascot} price={3000000} name={"ピラミッド"} />
        </main>
      </div>
    </>
  )
}
export default Supermarket
