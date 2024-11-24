import { droppableAreaContentAtom } from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/useDroppableAreaContent"
import { areArraysEqual } from "@/utils/areArraysEqual"
import { atom, useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"

const FOUR_ARRAY = [
  ["く", "ー"],
  ["ー", "く"],
]
const SEVEN_ARRAY = ["ー", "ー"]
const THREE_ARRAY = ["つ", "つ"]

const assembledNumberAtom = atom("")
const setAssembledNumberAtom = atom(
  (get) => get(assembledNumberAtom),
  (get, set) => {
    const droppableAreaContentList = get(droppableAreaContentAtom).map(
      (item) => item.content
    )
    if (
      FOUR_ARRAY.some((arr) => areArraysEqual(droppableAreaContentList, arr))
    ) {
      set(assembledNumberAtom, "4")
    } else if (areArraysEqual(droppableAreaContentList, SEVEN_ARRAY)) {
      set(assembledNumberAtom, "7")
    } else if (areArraysEqual(droppableAreaContentList, THREE_ARRAY)) {
      set(assembledNumberAtom, "3")
    } else {
      set(assembledNumberAtom, "?")
    }
  }
)

export default function useAssembledNumber() {
  const [assembledNumber, setAssembledNumber] = useAtom(setAssembledNumberAtom)
  const droppableAreaContent = useAtomValue(droppableAreaContentAtom)

  useEffect(() => {
    setAssembledNumber()
  }, [droppableAreaContent, setAssembledNumber])

  return {
    assembledNumber,
    setAssembledNumber,
  }
}
