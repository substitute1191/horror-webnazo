import { phaseAtom } from "@/atoms/roomAtoms"
import api from "@/utils/api"
import { useSetAtom } from "jotai"
import { useParams } from "react-router-dom"
import { Room } from "shared-types"

export default function useProceed() {
  const { roomId } = useParams()
  const setPhase = useSetAtom(phaseAtom)

  const proceed = (phase: number) => {
    api
      .post<Room>(`/room/${roomId}/proceed`, {
        phase: phase,
      })
      .then(({ data }) => {
        setPhase(data.phase)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return { proceed }
}
