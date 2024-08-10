import { roomAtom } from "@/atoms/roomAtoms"
import { useRoomQuery } from "@/hooks/useRoomQuery"
import { useSocket } from "@/utils/useSocket"
import { useSetAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function useRoom() {
  const { roomId } = useParams()
  const { data: room, isPending, error } = useRoomQuery(roomId as string)
  const setRoom = useSetAtom(roomAtom)
  const { socket, connect, disconnect, isConnected } = useSocket()

  useEffect(() => {
    if (room !== undefined) {
      setRoom(room)
    }
  }, [room, setRoom])

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    connect()
    return () => disconnect()
  }, [])

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.emit("joinRoom", {
        roomId: roomId,
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("joinRoom")
      }
    }
  }, [socket, isConnected])

  return { socket, isConnected, isPending, error }
}
