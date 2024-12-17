import { atom, useAtom } from "jotai"

const isPlayedVideoAtom = atom(false)

export default function useIsPlayedVideo() {
  const [isPlayedVideo, setIsPlayedVideo] = useAtom(isPlayedVideoAtom)

  return {
    isPlayedVideo,
    setIsPlayedVideo,
  }
}
