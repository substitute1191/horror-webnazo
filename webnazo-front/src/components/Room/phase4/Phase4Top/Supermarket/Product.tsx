import image from "@/assets/image/mascot/mascot.png"
export default function Product() {
  return (
    <div className="flex flex-col p-5 hover:bg-pink-200">
      <img src={image} alt="" className="mb-4" />
      <h2 className="text-3xl">商品名</h2>
      <p className="mt-2 self-end">
        <span className="text-5xl font-bold text-red-500">価格</span>
        <span className="font-gothic ml-3 text-xl font-bold">円</span>
      </p>
      <button className="mt-2 w-full rounded-2xl bg-slate-400 py-2 text-xl">
        カートに入れる
      </button>
    </div>
  )
}
