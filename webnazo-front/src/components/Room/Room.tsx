import { phaseAtom } from "@/atoms/atoms"
import Phase0 from "./phase0/Phase0"
import Phase1 from "./phase1/Phase1"
import { useAtomValue } from "jotai"
import { useSocket } from "@/utils/useSocket"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
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
    if (localStorage.getItem("userId") === null) {
      const userId = uuidv4()
      localStorage.setItem("userId", userId)
    }

    if (socket !== null && isConnected) {
      console.debug("joining room")
      socket.emit("joinRoom", {
        roomId: roomId,
      })
    }
  }, [socket, isConnected])

  return (
    <SocketContext.Provider value={{ socket }}>
      <div>
        {phase === 0 ? <Phase0 /> : null}
        {phase === 1 ? <Phase1 /> : null}
        {phase === 2 ? <Phase2 /> : null}
      </div>
    </SocketContext.Provider>
  )
}

export default Room
