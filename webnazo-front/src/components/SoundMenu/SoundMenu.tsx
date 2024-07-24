import { useEffect, useState } from "react"
import { useKeyPress } from "./useKeyPress"
import { useAtom } from "jotai"
import { volumeAtom } from "@/atoms/soundAtoms"

const SoundMenu = () => {
  const isKeyPressed = useKeyPress("F2")
  const [isVisible, setIsVisible] = useState(false)
  const [vol, setVol] = useAtom(volumeAtom)

  useEffect(() => {
    if (isKeyPressed) {
      setIsVisible((prev) => !prev)
    }
  }, [isKeyPressed])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVol(parseFloat(e.target.value))
  }

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col p-4 bg-black rounded w-40 h-24">
            <span className="text-white">サウンドメニュー</span>
            <label htmlFor="volume" className="text-white">
              音量
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              value={vol}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default SoundMenu
