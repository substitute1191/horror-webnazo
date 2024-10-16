import { seVolumeAtom, bgmVolumeAtom } from "@/atoms/soundAtoms"
import { useAtom } from "jotai"
import { useState, useRef, useEffect } from "react"

export default function usePochiSoundMenu() {
  const [isVisible, setIsVisible] = useState(false)
  const [seVol, setSeVol] = useAtom(seVolumeAtom)
  const [bgmVol, setBgmVol] = useAtom(bgmVolumeAtom)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isShowPochi, setIsShowPochi] = useState(false)

  // 普通のサウンドメニューとしてのロジック
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F2" && !isShowPochi) {
        setIsVisible((prev) => !prev)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current !== null &&
        !menuRef.current.contains(event.target as Node) &&
        !isShowPochi
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
  }, [isShowPochi])

  // ポチを出現させるためのロジック
  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (isVisible) {
      timerId = setTimeout(() => setIsShowPochi(true), 2000)
    }

    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId)
      }
    }
  }, [isVisible])

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
    setIsVisible,
    isShowPochi,
    setIsShowPochi,
    menuRef,
    seVol,
    bgmVol,
    handleSEChange,
    handleBGMChange,
    handleMute,
  }
}
