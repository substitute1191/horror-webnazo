import Product from "./Product"

const Supermarket = () => {
  return (
    <>
      <header className="flex h-1/5 justify-between rounded-t bg-lime-600 pb-8">
        <h1 className="ml-10 pt-8 text-7xl font-extrabold">
          ショッピングセンター
        </h1>
        <nav className="content-end pt-14">
          <ul className="mr-16 flex list-none justify-around text-2xl">
            <li className="hover:text-orange-500">所持金の確認</li>
            <li className="ml-5 hover:text-orange-500">カートを見る</li>
            <li className="ml-5 hover:text-orange-500">タブ３</li>
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
        <main className="grid grid-cols-3 gap-x-32 gap-y-8 overflow-scroll rounded-br px-10 pt-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </main>
      </div>
    </>
  )
}
export default Supermarket
