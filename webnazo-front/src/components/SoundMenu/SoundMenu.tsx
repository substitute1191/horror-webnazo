import { useEffect, useRef, useState } from "react"
import { useAtom } from "jotai"
import { bgmVolumeAtom, isPlayableAtom, seVolumeAtom } from "@/atoms/soundAtoms"

/* eslint-disable max-lines-per-function*/
const SoundMenu = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlayable, setIsPlayable] = useAtom(isPlayableAtom)
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

  const handleIsPlayableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPlayable(!e.target.checked)
  }

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={menuRef}
            className="flex flex-col p-4 bg-black rounded w-40"
          >
            <span className="text-white">サウンドメニュー</span>
            <label className="text-white">
              <input
                type="checkbox"
                name=""
                id=""
                checked={!isPlayable}
                onChange={handleIsPlayableChange}
              />
              ミュートにする
            </label>
            <label htmlFor="volume" className="text-white">
              SE音量
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              value={seVol}
              onChange={(e) => handleSEChange(e)}
            />
            <label htmlFor="volume" className="text-white">
              BGM音量
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              value={bgmVol}
              onChange={(e) => handleBGMChange(e)}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default SoundMenu