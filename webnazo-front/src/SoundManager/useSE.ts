import { useAtomValue } from "jotai"
import { isPlayableAtom, seVolumeAtom } from "@/atoms/soundAtoms"
import { useCallback, useEffect, useRef } from "react"
import SEManager from "@/SoundManager/SEManager"

const useSE = (soundUrl: string) => {
  const volume = useAtomValue(seVolumeAtom)
  const isPlayable = useAtomValue(isPlayableAtom)
  const managerRef = useRef<SEManager | null>(null)

  useEffect(() => {
    managerRef.current = new SEManager(soundUrl, volume, isPlayable)
    return () => {
      void managerRef.current?.stop()
      managerRef.current = null
    }
  }, [soundUrl, volume, isPlayable])

  useEffect(() => {
    managerRef.current?.setVolume(volume)
  }, [volume])

  useEffect(() => {
    managerRef.current?.setIsPlayable(isPlayable)
  }, [isPlayable])

  const play = useCallback(() => {
    if (!isPlayable) return
    void managerRef.current?.play()
  }, [isPlayable])

  const stop = useCallback(() => {
    if (!isPlayable) return
    void managerRef.current?.stop()
  }, [isPlayable])

  const isLoaded = useCallback(() => {
    return managerRef.current?.isLoaded() ?? false
  }, [])

  return { play, stop, isLoaded }
}

export default useSE
