import useOwnedWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useOwnedWord"
import { MouseEvent } from "react"

type Props = {
  word: string
}

export default function OwnableWord({ word }: Props) {
  const { setOwnedWord } = useOwnedWord()

  const handleClickWord = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOwnedWord(word)
  }

  return <button onClick={handleClickWord}>{word}</button>
}
