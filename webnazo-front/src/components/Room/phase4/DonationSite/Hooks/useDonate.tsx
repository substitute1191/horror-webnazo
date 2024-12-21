import {
  isMillionaireAtom,
  myCharaAtom,
  roomAtom,
  roomIdAtom,
} from "@/atoms/roomAtoms"
import useNoMillionYenMsg from "@/components/Room/phase4/DonationSite/Hooks/useNoMillionYenMsg"
import { SocketContext } from "@/components/Room/socketContext"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { useAtomValue, useSetAtom } from "jotai"
import { useCallback, useContext } from "react"
import negative from "@/assets/sound/imprisonment/Onoma-Negative02-2(Long).mp3"
import useSE from "@/SoundManager/useSE"

export default function useDonate() {
  const roomId = useAtomValue(roomIdAtom)
  const myChara = useAtomValue(myCharaAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const isMillionaire = useAtomValue(isMillionaireAtom)
  const { setNoMillionYenMsg } = useNoMillionYenMsg()
  const { play } = useSE(negative)

  const handleDonate = useCallback(async () => {
    if (myChara === 1 || !isMillionaire) {
      setNoMillionYenMsg("100万円がありません。")
      play()
    } else {
      try {
        const { data: newRoomData } = await api.patch<Room>(
          `/room/${roomId}/confined`,
          {
            fieldName: "isDonated",
            newValue: true,
          }
        )
        setRoom(newRoomData)
      } catch (e) {
        console.error(e)
      }
      if (socket !== null && isConnected) {
        socket.emit("updateRoom", { roomId })
      }
    }
  }, [
    isConnected,
    isMillionaire,
    myChara,
    play,
    roomId,
    setNoMillionYenMsg,
    setRoom,
    socket,
  ])

  return {
    handleDonate,
  }
}
