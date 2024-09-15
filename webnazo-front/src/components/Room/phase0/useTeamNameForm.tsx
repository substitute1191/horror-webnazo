import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import useProceed from "../useProceed"
import api from "@/utils/api"

export const useTeamNameForm = (
  isOpen: boolean,
  onRequestClose: () => void
) => {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen)
  const [teamName, setTeamName] = useState("")
  const { proceed } = useProceed()
  const { roomId } = useParams()
  const [isClosing, setIsClosing] = useState(false)

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
    [teamName, roomId, onRequestClose, proceed]
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
