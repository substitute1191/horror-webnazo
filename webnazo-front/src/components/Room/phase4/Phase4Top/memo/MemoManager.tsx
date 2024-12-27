/* eslint-disable complexity */
import { myCharaAtom } from "@/atoms/roomAtoms"
import Player1MemoManager from "@/components/Room/phase4/Phase4Top/memo/Player1MemoManager"
import Player2MemoManager from "@/components/Room/phase4/Phase4Top/memo/Player2MemoManager"
import { useAtomValue } from "jotai"

export default function MemoManager() {
  const myChara = useAtomValue(myCharaAtom)

  return <>{myChara === 1 ? <Player1MemoManager /> : <Player2MemoManager />}</>
}
