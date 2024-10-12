import { seVolumeAtom, bgmVolumeAtom } from "@/atoms/soundAtoms"
import { useAtom } from "jotai"
import { useState, useRef, useEffect } from "react"

const useSoundMenu = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [seVol, setSeVol] = useAtom(seVolumeAtom)
  const [bgmVol, setBgmVol] = useAtom(bgmVolumeAtom)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F2") {
        setIsVisible((prev) => !prev)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current !== null &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeVol(parseFloat(e.target.value))
  }

  const handleBGMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgmVol(parseFloat(e.target.value))
  }

  const handleMute = () => {
    setSeVol(0)
    setBgmVol(0)
  }

  return {
    isVisible,
    menuRef,
    seVol,
    bgmVol,
    handleSEChange,
    handleBGMChange,
    handleMute,
  }
}

export default useSoundMenu
