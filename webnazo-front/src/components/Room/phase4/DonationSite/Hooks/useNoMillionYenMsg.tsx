import { atom, useAtom } from "jotai"

const noMillionYenMsgAtom = atom("")

export default function useNoMillionYenMsg() {
  const [noMillionYenMsg, setNoMillionYenMsg] = useAtom(noMillionYenMsgAtom)

  return {
    noMillionYenMsg,
    setNoMillionYenMsg,
  }
}
