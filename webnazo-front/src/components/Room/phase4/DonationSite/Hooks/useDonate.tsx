import { myCharaAtom, roomAtom, roomIdAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "@/components/Room/socketContext"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { useAtomValue, useSetAtom } from "jotai"
import { useCallback, useContext } from "react"

export default function useDonate() {
  const roomId = useAtomValue(roomIdAtom)
  const myChara = useAtomValue(myCharaAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)

  const handleDonate = useCallback(async () => {
    if (myChara === 1) return
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
      socket.emit("roomUpdated")
    }
  }, [isConnected, myChara, roomId, setRoom, socket])

  return {
    handleDonate,
  }
}
