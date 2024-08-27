import { roomAtom, roomIdAtom , phaseAtom } from "@/atoms/roomAtoms"
import { useRoomOperation } from "@/hooks/useRoomQuery"
import { useSocket } from "@/utils/useSocket"
import { useSetAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function useRoom() {
  const { roomId } = useParams()
  const { data: room, isPending, error } = useRoomOperation()
  const setRoom = useSetAtom(roomAtom)
  const setPhase = useSetAtom(phaseAtom)
  const { socket, connect, disconnect, isConnected } = useSocket()
  const setRoomId = useSetAtom(roomIdAtom)

  useEffect(() => {
    if (room !== undefined) {
      setRoom(room)
    }
    if (roomId !== undefined) {
      setRoomId(roomId)
    }
  }, [room, setRoom, roomId, setRoomId])

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    connect()
    return () => disconnect()
  }, [])

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("updatePhase", (newPhase: number) => {
        const localPhase = Number(localStorage.getItem("phase"))
        if (localPhase !== newPhase) {
          setPhase(newPhase)
        }
      })
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
