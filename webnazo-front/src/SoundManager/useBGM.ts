import { useAtomValue } from "jotai"
import { isPlayableAtom, bgmVolumeAtom } from "@/atoms/soundAtoms"
import { useCallback, useEffect, useRef, useState } from "react"
import BGMManager from "@/SoundManager/BGMManager"

/* eslint-disable max-lines-per-function,react-hooks/exhaustive-deps*/
const useBGM = (bgmUrl: string) => {
  const volume = useAtomValue(bgmVolumeAtom)
  const isPlayable = useAtomValue(isPlayableAtom)
  const managerRef = useRef<BGMManager | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const playRequestedRef = useRef(false)

  // BGMManagerの作成を一度だけ行う
  useEffect(() => {
    console.debug("useBGM: BGMManager created")
    managerRef.current = new BGMManager(bgmUrl, volume, isPlayable)

    const checkLoaded = async () => {
      const loaded = await managerRef.current?.getIsLoaded()
      console.debug("useBGM: Checking if loaded:", loaded)
      setIsLoaded(loaded ?? false)
    }

    void checkLoaded()

    return () => {
      managerRef.current?.stop()
      managerRef.current = null
      console.debug("useBGM: Cleanup completed")
    }
  }, [bgmUrl])

  // 音量の変更を既存のBGMManagerに適用
  useEffect(() => {
    managerRef.current?.setVolume(volume)
  }, [volume])

  // isPlayableの変更を既存のBGMManagerに適用
  useEffect(() => {
    if (managerRef.current === null) return

    managerRef.current.setIsPlayable(isPlayable)

    const handlePlayabilityChange = () => {
      if (!isPlayable && isPlaying) {
        console.debug("useBGM: Pausing due to isPlayable change")
        managerRef.current?.pause()
        setIsPlaying(false)
      } else if (isPlayable && playRequestedRef.current) {
        void playBGM()
      }
    }

    handlePlayabilityChange()
  }, [isPlayable])

  const playBGM = async () => {
    if (managerRef.current !== null && isLoaded && isPlayable) {
      try {
        await managerRef.current.play()
        setIsPlaying(managerRef.current.getIsPlaying())
        playRequestedRef.current = false
      } catch (error) {
        console.error("useBGM: Failed to play BGM:", error)
      }
    }
  }

  const play = useCallback(async () => {
    console.debug("useBGM: play called")
    playRequestedRef.current = true
    if (!isLoaded) {
      console.debug("useBGM: Waiting for BGM to load")
      await new Promise<void>((resolve) => {
        const checkLoaded = () => {
          if (isLoaded) {
            resolve()
          } else {
            setTimeout(checkLoaded, 100)
          }
        }
        checkLoaded()
      })
    }
    await playBGM()
  }, [isLoaded, isPlayable])

  const pause = useCallback(() => {
    console.debug("useBGM: pause called")
    managerRef.current?.pause()
    setIsPlaying(false)
    playRequestedRef.current = false
  }, [])

  const stop = useCallback(() => {
    console.debug("useBGM: stop called")
    managerRef.current?.stop()
    setIsPlaying(managerRef.current?.getIsPlaying() ?? false)
    playRequestedRef.current = false
  }, [])

  return { play, pause, stop, isLoaded, isPlaying }
}

export default useBGM