import { areArraysEqual } from "@/utils/areArraysEqual"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"

const BAR_FIFTEEN = [true, true, true, true, true, true, true]
const BAR_FIVE = [false, false, true, true, true, true, true]
const BAR_ONE_ARRAYS = [
  [true, true, false, false, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, false, true],
]
const BAR_TWO_ARRAYS = [
  // ひらがなの「に」
  [true, true, true, false, false, false, true],
  // 漢字の二
  [false, false, true, false, true, false, false],
  [false, false, true, false, false, false, true],
  [false, false, false, false, true, false, true],
]
const BAR_THREE = [false, false, true, false, true, false, true]

const isBarActiveAtom = atom([true, true, true, true, true, true, true])
// 指定されたindexのtrue/falseを切り替えるアトム
const isBarActiveDerivedAtom = atom(
  (get) => get(isBarActiveAtom),
  (get, set, targetIdx) => {
    const prev = get(isBarActiveAtom)
    const newState = prev.map((item, idx) => (targetIdx !== idx ? item : !item))
    set(isBarActiveAtom, newState)
  }
)
const barNumberAtom = atom("15")

export default function useIsBarActive() {
  const [isBarActive, toggleIsBarActive] = useAtom(isBarActiveDerivedAtom)
  const [barNumber, setBarNumber] = useAtom(barNumberAtom)

  // バーの状態によって答えを変える
  useEffect(() => {
    if (areArraysEqual(isBarActive, BAR_FIFTEEN)) {
      setBarNumber("15")
    } else if (areArraysEqual(isBarActive, BAR_FIVE)) {
      setBarNumber("5")
    } else if (
      BAR_ONE_ARRAYS.some((barOne) => areArraysEqual(isBarActive, barOne))
    ) {
      setBarNumber("1")
    } else if (
      // 2のパターンは複数あるので1つでも当てはまったら
      BAR_TWO_ARRAYS.some((barTwo) => areArraysEqual(isBarActive, barTwo))
    ) {
      setBarNumber("2")
    } else if (areArraysEqual(isBarActive, BAR_THREE)) {
      setBarNumber("3")
    } else {
      setBarNumber("?")
    }
  }, [isBarActive, setBarNumber])

  return {
    isBarActive,
    toggleIsBarActive,
    barNumber,
    setBarNumber,
  }
}
