import { useAtomValue } from "jotai"
import Money from "./Money"
import CartItems from "./CartItems"
import PurchaseMessage from "./PurchaseMessage"
import { pushedButtonAtom } from "../SupermarketNav"

export default function FlashMessage() {
  const pushedButton = useAtomValue(pushedButtonAtom)
  const getFlashElement = () => {
    switch (pushedButton) {
      case "money":
        return <Money />
      case "cart":
        return <CartItems />
      case "purchase":
        return <PurchaseMessage />
      default:
        return <></>
    }
  }

  return <div className="col-span-3">{getFlashElement()}</div>
}
