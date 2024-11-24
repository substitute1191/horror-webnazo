import {
  ownedWordAtom,
  ansWordsAtom,
  unusedWordsAtom,
} from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import { atom, useAtom } from "jotai"

const setOwnedWordAtom = atom(
  (get) => get(ownedWordAtom),
  (get, set, newWord: string) => {
    const unusedWords = get(unusedWordsAtom)
    const newUnusedWords = unusedWords.filter((item) => item !== newWord)
    // 使っていない言葉から新しく入手した言葉を削除する
    set(unusedWordsAtom, newUnusedWords)

    const ansWords = get(ansWordsAtom)
    const newAnsWords = ansWords.filter((word) => word !== newWord)
    set(ansWordsAtom, newAnsWords)

    const prevOwnedWord = get(ownedWordAtom)
    // 所持済みの言葉があれば元に戻す
    if (prevOwnedWord !== "") {
      set(unusedWordsAtom, [...newUnusedWords, prevOwnedWord])
    }

    // 新しい言葉を所持する
    set(ownedWordAtom, newWord)
  }
)

export default function useOwnedWord() {
  const [ownedWord, setOwnedWord] = useAtom(setOwnedWordAtom)

  return {
    ownedWord,
    setOwnedWord,
  }
}
