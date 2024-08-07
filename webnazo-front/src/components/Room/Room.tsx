import { phaseAtom } from "@/atoms/roomAtoms"
import CharaSelect from "./phase0/CharaSelect"
import Phase1 from "./phase1/Phase1"
import { useAtomValue } from "jotai"
import { useSocket } from "@/utils/useSocket"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { SocketContext } from "./socketContext"
import Phase2 from "./phase2/Phase2"

const Room = () => {
  const phase = useAtomValue(phaseAtom)
  const { roomId } = useParams()
  const { socket, connect, disconnect, isConnected } = useSocket()

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
  }, [socket, isConnected])

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      <div>
        {phase === 0 ? <CharaSelect /> : null}
        {phase === 1 ? <Phase1 /> : null}
        {phase === 2 ? <Phase2 /> : null}
      </div>
    </SocketContext.Provider>
  )
}

export default Room
