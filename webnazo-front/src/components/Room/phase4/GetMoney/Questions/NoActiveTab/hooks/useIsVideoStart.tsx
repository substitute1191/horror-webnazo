import useIsPlayedVideo from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsPlayedVideo"
import { atom, useAtom } from "jotai"

const isVideoStartAtom = atom(false)

export default function useIsVideoStart() {
  const [isVideoStart, setIsVideoStart] = useAtom(isVideoStartAtom)
  const { setIsPlayedVideo } = useIsPlayedVideo()

  const handleClickPlayBtn = () => {
    setIsVideoStart(true)
    setIsPlayedVideo(true)
  }

  return {
    isVideoStart,
    setIsVideoStart,
    handleClickPlayBtn,
  }
}
