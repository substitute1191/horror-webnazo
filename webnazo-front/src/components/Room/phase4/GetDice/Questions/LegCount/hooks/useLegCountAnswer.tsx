import useDroppedItems, {
  droppedItemsAtom,
} from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useDroppedItems"
import {
  convertLegCount,
  kanaToNum,
  shiftToDown50Table,
  shiftToLeft50Table,
} from "@/components/Room/phase4/GetDice/Questions/LegCount/utils/ArrowsConversion"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"

const answerAtom = atom("カコ")
const legCountAnswerAtom = atom(
  (get) => get(answerAtom),
  (get, set) => {
    const droppedItems = get(droppedItemsAtom)
    let newAnsList = ["カ", "コ"]

    // 入れられた矢印に従って文字を変換する
    for (const { type } of droppedItems) {
      if (type === "BlueArrow") {
        newAnsList[0] = shiftToLeft50Table(newAnsList[0])
      } else if (type === "GreenArrow") {
        newAnsList[0] = shiftToDown50Table(newAnsList[0])
      } else if (type === "RedArrow") {
        newAnsList = convertLegCount(newAnsList.join("")).split("")
      }
    }
    const newAnswer = kanaToNum(newAnsList.join(""))

    set(answerAtom, newAnswer)
  }
)

export default function useLegCountAnswer() {
  const { droppedItems } = useDroppedItems()
  const [legCountAnswer, solveLegCount] = useAtom(legCountAnswerAtom)

  // droppedItemsが変更されるたび新しい答えを導く
  useEffect(() => {
    solveLegCount()
  }, [solveLegCount, droppedItems])

  return legCountAnswer
}
