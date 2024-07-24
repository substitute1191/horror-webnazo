import { useAtomValue } from "jotai"
import SoundEffectManager from "./SoundEffectManager"
import { volumeAtom } from "@/atoms/soundAtoms"
import { useCallback, useEffect, useRef } from "react"

const useSoundEffectManager = (seSrc: string) => {
  const seRef = useRef<SoundEffectManager | null>(null)
  const vol = useAtomValue(volumeAtom)

  useEffect(() => {
    if (seRef.current === null) {
      seRef.current = new SoundEffectManager(seSrc, vol)
    }

    return () => {
      if (seRef.current !== null) {
        seRef.current.dispose()
      }
    }
  }, [seSrc, vol])

  useEffect(() => {
    if (seRef.current !== null) {
      seRef.current.setVolume(vol)
    }
  }, [vol])

  const play = useCallback(() => {
    seRef.current?.play()
  }, [])

  const stop = useCallback(() => {
    seRef.current?.stop()
  }, [])

  const setVolume = useCallback(() => {
    seRef.current?.setVolume(vol)
  }, [vol])

  return { play, stop, setVolume }
}

export default useSoundEffectManager
