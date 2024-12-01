import {
  hasMicrowaveAtom,
  isMicrowaveInCartAtom,
  isMillionaireAtom,
  roomAtom,
} from "@/atoms/roomAtoms"
import { SocketContext } from "@/components/Room/socketContext"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { atom, useAtom, useSetAtom } from "jotai"
import { useContext } from "react"
import { useParams } from "react-router-dom"
export const pushedButtonAtom = atom("")

export default function SupermarketNav() {
  const [, setHasMicrowave] = useAtom(hasMicrowaveAtom)
  const [, setIsMillionaire] = useAtom(isMillionaireAtom)
  const [isMicrowaveInCart, setIsMicrowaveInCart] = useAtom(
    isMicrowaveInCartAtom
  )
  const { roomId } = useParams()
  const { socket, isConnected } = useContext(SocketContext)
  const setRoom = useSetAtom(roomAtom)
  const [, setPushedButton] = useAtom(pushedButtonAtom)

  const purchaseMicrowave = async () => {
    setPushedButton("purchase")
    setHasMicrowave(true)
    setIsMicrowaveInCart(false)
    setIsMillionaire(false)

    try {
      await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "hasMicrowave",
        newValue: true,
      })
      const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "isMillionaire",
        newValue: false,
      })
      setRoom(data)
    } catch (e) {
      console.error(e)
    }
    if (socket !== null && isConnected) {
      socket.emit("updateRoom", { roomId })
    }
  }

  return (
    <nav className="content-end pt-14">
      <ul className="mr-16 flex list-none justify-around text-2xl">
        <li>
          <button
            className="cursor-pointer hover:text-yellow-500"
            onClick={() => setPushedButton("money")}
          >
            所持金の確認
          </button>
        </li>
        <li>
          <button
            className="ml-5 cursor-pointer hover:text-yellow-500"
            onClick={() => setPushedButton("cart")}
          >
            カートを見る
          </button>
        </li>
        <li className="relative ml-5 hover:text-yellow-500">
          <button
            onClick={() => void purchaseMicrowave()}
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
