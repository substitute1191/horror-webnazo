import {
  ALL_UNUSED_WORDS,
  ansWordsAtom,
  ownedWordAtom,
  unusedWordsAtom,
  isWClickedAtom,
} from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import { atom, useAtom, useSetAtom } from "jotai"

const addAnsWordsAtom = atom(
  (get) => get(ansWordsAtom),
  (get, set) => {
    const prev = get(ansWordsAtom)
    const ownedWord = get(ownedWordAtom)
    if (ownedWord !== "") {
      set(ansWordsAtom, [...prev, ownedWord])
      set(ownedWordAtom, "")
    }
  }
)

const resetAnsWordsAtom = atom(
  null,
  // 答えの初期化と共に使ってない言葉と持っている言葉も空にする
  (_get, set) => {
    set(ansWordsAtom, [])
    set(unusedWordsAtom, ALL_UNUSED_WORDS)
    set(ownedWordAtom, "")
    set(isWClickedAtom, false)
  }
)

export default function useAnsWords() {
  const [ansWords, addAnsWords] = useAtom(addAnsWordsAtom)
  const resetAnsWords = useSetAtom(resetAnsWordsAtom)

  return {
    ansWords,
    addAnsWords,
    resetAnsWords,
  }
}
