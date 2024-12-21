import { roomIdAtom, roomAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "@/components/Room/socketContext"
import api from "@/utils/api"
import { useAtomValue, useSetAtom } from "jotai"
import { useContext, useCallback } from "react"
import { Room } from "@/types/RoomType"
import bokinbako from "@/assets/image/imprisonment/募金箱「.png"
import CrayonFamily from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonFamily"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"
import RandomScaleAnim from "@/components/Room/phase4/TextAnim/RandomScaleAnim"

// 100万円を募金されて強奪される前のクレヨンファミリー
export default function CrayonsWithMillionYen() {
  const roomId = useAtomValue(roomIdAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const { setMemoFlags } = useMemoFlags()

  const handleStealing = useCallback(async () => {
    try {
      const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "hasStolen",
        newValue: true,
      })
      setRoom(data)
      setMemoFlags("hasStolen")
      if (socket !== null && isConnected) {
        socket.emit("updateRoom", { roomId })
      }
    } catch (e) {
      console.error(e)
    }
  }, [isConnected, roomId, setMemoFlags, setRoom, socket])

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

      <div className="absolute bottom-4 flex w-full -translate-x-12 flex-col items-center">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <img
          onClick={() => void handleStealing()}
          className="z-20 h-32 w-40"
          src={bokinbako}
          alt=""
        />
        <div className="relative z-30 text-4xl font-black text-red-700">
          {"クリックしたら盗めるけど絶対盗んじゃダメ"
            .split("")
            .map((char, idx) => {
              return <RandomScaleAnim key={idx}>{char}</RandomScaleAnim>
            })}
        </div>
        <div className="relative z-30 text-2xl font-black text-red-700">
          {"私たちから未来を奪わないで".split("").map((char, idx) => {
            return <RandomScaleAnim key={idx}>{char}</RandomScaleAnim>
          })}
        </div>
      </div>
    </>
  )
}
