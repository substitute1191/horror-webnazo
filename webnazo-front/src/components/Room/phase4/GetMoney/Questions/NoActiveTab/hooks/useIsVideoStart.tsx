import { atom, useAtom } from "jotai"

const isVideoStartAtom = atom(false)

export default function useIsVideoStart() {
  const [isVideoStart, setIsVideoStart] = useAtom(isVideoStartAtom)

  const handleClickPlayBtn = () => {
    setIsVideoStart(true)
  }

  return {
    isVideoStart,
    setIsVideoStart,
    handleClickPlayBtn,
  }
}
