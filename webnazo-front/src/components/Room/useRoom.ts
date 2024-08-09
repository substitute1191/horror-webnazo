import { initializeRoomAtom } from "@/atoms/roomAtoms"
import { useSocket } from "@/utils/useSocket"
import { useSetAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function useRoom() {
  const { roomId } = useParams()
  const { socket, connect, disconnect, isConnected } = useSocket()
  const initializeRoom = useSetAtom(initializeRoomAtom)

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    connect()
    return () => disconnect()
  }, [])

  useEffect(() => {
    if (roomId !== undefined) {
      void initializeRoom(roomId)
    }
  }, [roomId, initializeRoom])

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

  return { socket, isConnected }
}
