import { useState, useEffect, useCallback, useContext } from "react"
import { teamNameAtom } from "@/atoms/roomAtoms"
import { useParams } from "react-router-dom"
import useProceed from "../useProceed"
import api from "@/utils/api"
import { useAtom } from "jotai"
import { SocketContext } from "../socketContext"

export const useTeamNameForm = (
  isOpen: boolean,
  onRequestClose: () => void
) => {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen)
  const [teamName, setTeamName] = useState("")
  const { proceed } = useProceed()
  const { roomId } = useParams()
  const [isClosing, setIsClosing] = useState(false)
  const [, setTeamNameStorage] = useAtom(teamNameAtom)
  const { socket, isConnected } = useContext(SocketContext)

  useEffect(() => {
    if (isOpen) {
      setInternalIsOpen(true)
      setIsClosing(false)
    } else {
      setIsClosing(true)
      setTimeout(() => {
        setInternalIsOpen(false)
        setIsClosing(false)
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("setTeamNameToStorage", (teamName: string) => {
        setTeamNameStorage(teamName)
      })
    }
  }, [socket, isConnected, setTeamNameStorage])

  const closeAndProceed = useCallback(
    (phase: number) => {
      if (teamName.trim() === "") {
        alert("チーム名を入力してください")
        return
      }

      api
        .post(`/room/${roomId}/setTeamName`, {
          teamName,
        })
        .then(() => {
          setIsClosing(true)
          setTeamNameStorage(teamName)
          if (socket !== null) {
            socket.emit("setTeamName", {
              roomId,
              teamName,
            })
          }
          onRequestClose()
          setTimeout(() => {
            proceed(phase)
          }, 300) // アニメーションの終了を待つ
        })
        .catch((e) => {
          console.error(e)
          setIsClosing(false)
        })
    },
    [teamName, roomId, socket, onRequestClose, proceed, setTeamNameStorage]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTeamName(e.target.value)
    },
    []
  )

  return {
    internalIsOpen,
    teamName,
    closeAndProceed,
    handleInputChange,
    isClosing,
  }
}
