import { bgmVolumeAtom, isPlayableAtom } from "@/atoms/soundAtoms"
import { useAtomValue } from "jotai"
import { useCallback, useRef } from "react"
import useSound from "use-sound"
import useUserInteracted from "./useUserInteracted"

export default function useBGM(src: string, playbackRate: number = 1) {
  const { hasUserInteracted } = useUserInteracted()
  const bgmVolume = useAtomValue(bgmVolumeAtom)
  const isPlayable = useAtomValue(isPlayableAtom)

  const [playSound, { stop }] = useSound(src, {
    playbackRate: playbackRate,
    volume: bgmVolume,
    soundEnabled: isPlayable,
    interrupt: true,
    loop: true,
  })
  const isPlayingRef = useRef(false)

  const play = useCallback(() => {
    if (hasUserInteracted && !isPlayingRef.current) {
      playSound()
      isPlayingRef.current = true
    }
  }, [hasUserInteracted, playSound])

  const stopSound = useCallback(() => {
    stop()
    isPlayingRef.current = false
  }, [stop])

  return {
    play,
    stop: stopSound,
  }
}
