import { phaseAtom } from "@/atoms/roomAtoms"
import CharaSelect from "./phase0/CharaSelect"
import Phase1 from "./phase1/Phase1"
import { useAtomValue } from "jotai"
import { SocketContext } from "./socketContext"
import Phase2 from "./phase2/Phase2"
import useRoom from "./useRoom"
import Phase3 from "./phase3/Phase3"
import Phase4 from "./phase4/Phase4"

/* eslint-disable complexity */
const Room = () => {
  const phase = useAtomValue(phaseAtom)
  const { socket, isConnected, isPending, error } = useRoom()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error !== null) {
    return <div>Error: {error.message}</div>
  }

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      <div>
        {phase === 0 ? <CharaSelect /> : null}
        {phase === 1 ? <Phase1 /> : null}
        {phase === 2 ? <Phase2 /> : null}
        {phase === 3 ? <Phase3 /> : null}
        {phase === 4 ? <Phase4 /> : null}
      </div>
    </SocketContext.Provider>
  )
}

export default Room
