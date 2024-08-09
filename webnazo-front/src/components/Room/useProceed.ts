import { phaseAtom } from "@/atoms/roomAtoms"
import api from "@/utils/api"
import { useSetAtom } from "jotai"
import { useParams } from "react-router-dom"
import { Room } from "shared-types"
import { SocketContext } from "./socketContext"
import { useContext, useEffect } from "react"

export default function useProceed() {
  const { roomId } = useParams()
  const setPhase = useSetAtom(phaseAtom)
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    if (socket) {
      socket.on("updatePhase", (newPhase: number) => {
        const localPhase = Number(localStorage.getItem("phase"))
        if (localPhase !== newPhase) {
          setPhase(newPhase)
        }
      })
    }
  })

  const proceed = (phase: number) => {
    api
      .post<Room>(`/room/${roomId}/proceed`, {
        phase: phase,
      })
      .then(({ data }) => {
        setPhase(data.phase)
        if (socket !== null) {
          socket.emit("proceed", {
            roomId,
            phase: data.phase,
          })
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return { proceed }
}
