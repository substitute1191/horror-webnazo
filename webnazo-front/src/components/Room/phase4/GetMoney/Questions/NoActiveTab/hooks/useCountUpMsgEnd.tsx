import { atom, useAtom } from "jotai"

const countupMsgEndAtom = atom(false)

export default function useCountupMsgEnd() {
  const [countupMsgEnd, setCountupMsgEnd] = useAtom(countupMsgEndAtom)

  return {
    countupMsgEnd,
    setCountupMsgEnd,
  }
}
