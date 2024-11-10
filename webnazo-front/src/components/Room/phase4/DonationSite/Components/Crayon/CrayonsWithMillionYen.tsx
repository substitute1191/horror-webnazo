import { roomIdAtom, roomAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "@/components/Room/socketContext"
import api from "@/utils/api"
import { useAtomValue, useSetAtom } from "jotai"
import { useContext, useCallback } from "react"
import { Room } from "@/types/RoomType"
import bokinbako from "@/assets/image/imprisonment/募金箱「.png"
import CrayonFamily from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonFamily"

// 100万円を募金されて強奪される前のクレヨンファミリー
export default function CrayonsWithMillionYen() {
  const roomId = useAtomValue(roomIdAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)

  const handleStealing = useCallback(async () => {
    try {
      const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "hasStolen",
        newValue: true,
      })
      setRoom(data)
      if (socket !== null && isConnected) {
        socket.emit("updateRoom", { roomId })
      }
    } catch (e) {
      console.error(e)
    }
  }, [isConnected, roomId, setRoom, socket])

  return (
    <>
      <div
        className={`font-pop absolute left-[50%] mt-4 w-[80%] -translate-x-[50%] text-center text-2xl`}
      >
        100万円が集まりました！これで手術を受けられます。ありがとう！
        <br />
        元気になったら、家族みんなでいろんなところに行きたいです。
      </div>
      <CrayonFamily classNames={"-translate-x-[50%] -translate-y-[50%]"} />
      <span className="absolute bottom-16 left-[20%] z-30 font-black text-red-600">
        クリックしたら盗めるけど絶対盗んじゃダメ→
      </span>
      <span className="absolute bottom-16 left-[60%] z-30 font-black text-blue-600">
        ←私たちから未来を奪わないで
      </span>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        onClick={() => void handleStealing()}
        className="absolute bottom-4 left-[50%] z-20 h-32 w-40 -translate-x-[50%]"
        src={bokinbako}
        alt=""
      />
    </>
  )
}
