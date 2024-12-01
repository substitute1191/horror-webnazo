import { isMillionaireAtom, isMicrowaveInCartAtom } from "@/atoms/roomAtoms"
import { useAtom, useAtomValue } from "jotai"

interface SrcType {
  src: string
  price: number
  name: string
}

export default function Product(props: SrcType) {
  const isMillionaire = useAtomValue(isMillionaireAtom)
  const [isMicrowaveInCart, setIsMicrowaveInCart] = useAtom(
    isMicrowaveInCartAtom
  )
  const tryToBuy = () => {
    if (isMillionaire && !isMicrowaveInCart && props.name === "電子レンジ") {
      setIsMicrowaveInCart(true)
    }
  }

  return (
    <div className="flex flex-col p-5 hover:bg-pink-200">
      <img src={props.src} alt="" className="mb-4" />
      <h2 className="font-productName text-3xl">{props.name}</h2>
      <p className="mt-2 self-end whitespace-nowrap">
        <span className="font-ad text-5xl font-extrabold text-red-500">
          {Number(props.price).toLocaleString()}
        </span>
        <span className="font-gothic ml-3 text-xl font-bold">円</span>
      </p>
      <button
        className="font-gothic mt-2 w-full rounded-2xl bg-slate-400 py-2 text-xl"
        onClick={tryToBuy}
      >
        カートに入れる
      </button>
    </div>
  )
}
