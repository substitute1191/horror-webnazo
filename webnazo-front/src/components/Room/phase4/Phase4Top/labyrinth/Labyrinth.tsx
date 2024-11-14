import { myCharaAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import Player1Labyrinth from "./Player1Labyrinth"
import Player2Labyrinth from "./Player2Labyrinth"

export default function Labyrinth() {
  const charaNum = useAtomValue(myCharaAtom)

  return charaNum === 1 ? <Player1Labyrinth /> : <Player2Labyrinth />
}
