import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const ALL_UNUSED_WORDS = [
  "H",
  "S",
  "P",
  "O",
  "R",
  "V",
  "X",
  "T",
  "E",
  "Z",
]
export const ownedWordAtom = atom("")
export const ansWordsAtom = atom<string[]>(["Z", "E", "R", "O"])
export const unusedWordsAtom = atom(["H", "S", "P", "V", "X", "T"])
export const isWClickedAtom = atomWithStorage("isWClicked", false)
