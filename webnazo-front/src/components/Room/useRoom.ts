import { roomAtom, phaseAtom, roomIdAtom } from "@/atoms/roomAtoms"
import { useSocket } from "@/hooks/useSocket"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { useSetAtom } from "jotai"
import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"

const fetchRoom = async (roomId: string): Promise<Room> => {
  const { data } = await api.get<Room>(`/room/${roomId}`)
  return data
}

export default function useRoom() {
  const { roomId } = useParams()
  const setPhase = useSetAtom(phaseAtom)
  const { socket, connect, disconnect, isConnected } = useSocket()
  const setRoom = useSetAtom(roomAtom)
  const setRoomId = useSetAtom(roomIdAtom)

  useEffect(() => {
    if (roomId !== undefined) {
      setRoomId(roomId)
    }
  }, [roomId, setRoomId])

  const fetchAndSetRoom = useCallback(async () => {
    if (roomId === undefined) return
    const res = await fetchRoom(roomId)
    console.log("fetchAndSetRoom called!")
    console.table(res)
    setRoom(res)
  }, [roomId, setRoom])

  useEffect(() => {
    void fetchAndSetRoom()

    if (socket !== null && isConnected) {
      socket.on("roomUpdated", fetchAndSetRoom)
    }

    return () => {
      if (socket !== null) {
        socket.off("roomUpdated")
      }
    }
  }, [fetchAndSetRoom, isConnected, roomId, setRoom, socket])

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

  return { socket, isConnected }
}
