import {
  ownedWordAtom,
  unusedWordsAtom,
} from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import { atom, useAtom } from "jotai"

const addUnusedWordsAtom = atom(
  (get) => get(unusedWordsAtom),
  // 言葉を所持していたらそれを空にしてunusedWordに追加する
  (get, set) => {
    const prev = get(unusedWordsAtom)
    const ownedWord = get(ownedWordAtom)
    if (ownedWord !== "") {
      set(unusedWordsAtom, [...prev, ownedWord])
      set(ownedWordAtom, "")
    }
  }
)

export default function useUnusedWords() {
  const [unusedWords, addUnusedWords] = useAtom(addUnusedWordsAtom)

  return {
    unusedWords,
    addUnusedWords,
  }
}
