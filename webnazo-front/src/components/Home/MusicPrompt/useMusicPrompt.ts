import { useEffect, useState } from "react"
import { useSetAtom } from "jotai"
import { isPlayableAtom } from "@/atoms/soundAtoms"

const useMusicPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(true)
  const setPlayable = useSetAtom(isPlayableAtom)

  useEffect(() => {
    if (localStorage.getItem("isPlayable") !== null) {
      setShowPrompt(false)
    }
  }, [])

  const handleAccept = () => {
    setPlayable(true)
    setShowPrompt(false)
  }

  const handleDecline = () => {
    setPlayable(false)
    setShowPrompt(false)
  }

  return { showPrompt, handleAccept, handleDecline }
}

export default useMusicPrompt
