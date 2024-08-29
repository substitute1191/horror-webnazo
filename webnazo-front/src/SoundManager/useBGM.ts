import { useAtomValue } from "jotai"
import { isPlayableAtom, bgmVolumeAtom } from "@/atoms/soundAtoms"
import { useCallback, useEffect, useRef, useState } from "react"
import BGMManager from "@/SoundManager/BGMManager"

/* eslint-disable no-console,max-lines-per-function,react-hooks/exhaustive-deps,max-lines*/
const useBGM = (bgmUrl: string) => {
  const volume = useAtomValue(bgmVolumeAtom)
  const isPlayable = useAtomValue(isPlayableAtom)
  const managerRef = useRef<BGMManager | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const playRequestedRef = useRef(false)

  useEffect(() => {
    console.debug("useBGM: BGMManager created")
    managerRef.current = new BGMManager(bgmUrl, volume, isPlayable)

    const checkLoaded = async () => {
      try {
        const loaded = await managerRef.current?.getIsLoaded()
        console.debug("useBGM: Checking if loaded:", loaded)
        if (loaded) {
          setIsLoaded(true)
          if (playRequestedRef.current) {
            void playBGM()
          }
        }
      } catch (error) {
        console.error("useBGM: Error checking if loaded:", error)
      }
    }

    void checkLoaded()
    const loadInterval = setInterval(() => void checkLoaded(), 1000)

    const handleUserInteraction = () => {
      if (managerRef.current !== null && !hasUserInteracted) {
        managerRef.current.setUserInteracted()
        setHasUserInteracted(true)
        if (playRequestedRef.current) {
          void playBGM()
        }
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("keydown", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      }
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      clearInterval(loadInterval)
      managerRef.current?.stop()
      managerRef.current = null
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      console.debug("useBGM: Cleanup completed")
    }
  }, [bgmUrl, isPlayable])

  // 音量変更のための新しいuseEffect
  useEffect(() => {
    if (managerRef.current) {
      console.debug("useBGM: Updating volume", volume)
      managerRef.current.setVolume(volume)
    }
  }, [volume])

  const playBGM = useCallback(async () => {
    console.debug("useBGM: playBGM called")
    // 最新の状態を取得
    const currentIsLoaded = await managerRef.current?.getIsLoaded()
    const currentHasUserInteracted =
      managerRef.current?.getHasUserInteracted() ?? false
    console.debug("Current states:", {
      currentIsLoaded,
      currentHasUserInteracted,
      isPlayable,
    })

    if (managerRef.current !== null && currentIsLoaded && isPlayable) {
      try {
        await managerRef.current.play()
        setIsPlaying(managerRef.current.getIsPlaying())
        playRequestedRef.current = false
        console.debug("useBGM: BGM played successfully")
      } catch (error) {
        console.error("useBGM: Failed to play BGM:", error)
      }
    } else {
      console.debug("useBGM: Cannot play BGM. Conditions:", {
        currentIsLoaded,
        isPlayable,
        currentHasUserInteracted,
      })
    }
  }, [isPlayable])

  const play = useCallback(() => {
    console.debug("useBGM: play called")
    playRequestedRef.current = true
    void playBGM()
  }, [playBGM])

  const pause = useCallback(() => {
    console.debug("useBGM: pause called")
    managerRef.current?.pause()
    setIsPlaying(false)
    playRequestedRef.current = false
  }, [])

  const stop = useCallback(() => {
    console.debug("useBGM: stop called")
    managerRef.current?.stop()
    setIsPlaying(false)
    playRequestedRef.current = false
  }, [])

  return { play, pause, stop, isLoaded, isPlaying, hasUserInteracted }
}

export default useBGM
