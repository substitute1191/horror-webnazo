import { useAtomValue } from "jotai"
import { isPlayableAtom, seVolumeAtom } from "@/atoms/soundAtoms"
import { useCallback, useEffect, useRef, useState } from "react"
import SEManager from "@/SoundManager/SEManager"

/* eslint-disable */
const useSE = (soundUrl: string) => {
  const volume = useAtomValue(seVolumeAtom)
  const isPlayable = useAtomValue(isPlayableAtom)
  const managerRef = useRef<SEManager | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!managerRef.current) {
      managerRef.current = new SEManager(soundUrl, volume, isPlayable)
      const checkLoaded = async () => {
        const loaded = await managerRef.current?.isLoaded()
        setIsLoaded(loaded ?? false)
      }
      void checkLoaded()
    }

    return () => {
      void managerRef.current?.stop()
      managerRef.current = null
    }
  }, [soundUrl]) // 依存配列からvolumeとisPlayableを削除

  useEffect(() => {
    if (managerRef.current) {
      managerRef.current.setVolume(volume)
    }
  }, [volume])

  useEffect(() => {
    if (managerRef.current) {
      managerRef.current.setIsPlayable(isPlayable)
    }
  }, [isPlayable])

  const play = useCallback(() => {
    if (!isPlayable || !managerRef.current) return
    void managerRef.current.play()
  }, [isPlayable])

  const stop = useCallback(() => {
    if (!managerRef.current) return
    void managerRef.current.stop()
  }, [])

  return { play, stop, isLoaded }
}

export default useSE
