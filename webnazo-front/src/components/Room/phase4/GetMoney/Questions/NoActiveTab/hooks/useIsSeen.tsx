import { atom, useAtom } from "jotai"

const isSeenAtom = atom(false)

export default function useIsSeen() {
  const [isSeen, setIsSeen] = useAtom(isSeenAtom)

  return {
    isSeen,
    setIsSeen,
  }
}
