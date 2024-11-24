import { unusedWordsAtom } from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import { atom, useAtom } from "jotai"

const addUnusedWordsAtom = atom(
  (get) => get(unusedWordsAtom),
  (get, set, newWord: string) => {
    const prev = get(unusedWordsAtom)
    set(unusedWordsAtom, [...prev, newWord])
  }
)

export default function useUnusedWords() {
  const [unusedWords, addUnusedWords] = useAtom(addUnusedWordsAtom)

  return {
    unusedWords,
    addUnusedWords,
  }
}
