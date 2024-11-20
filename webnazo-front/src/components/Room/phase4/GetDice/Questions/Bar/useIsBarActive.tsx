import { areArraysEqual } from "@/utils/areArraysEqual"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"

const BAR_FIFTEEN = [true, true, true, true, true, true, true]
const BAR_FIVE = [false, false, true, true, true, true, true]
const BAR_ONE = [true, true, false, false, false, false, false]
const BAR_TWO = [true, true, true, false, false, false, true]

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
const q2AnsAtom = atom("15")

export default function useIsBarActive() {
  const [isBarActive, toggleIsBarActive] = useAtom(isBarActiveDerivedAtom)
  const [q2Ans, setQ2Ans] = useAtom(q2AnsAtom)

  // バーの状態によって答えを変える
  useEffect(() => {
    if (areArraysEqual(isBarActive, BAR_FIFTEEN)) {
      setQ2Ans("15")
    } else if (areArraysEqual(isBarActive, BAR_FIVE)) {
      setQ2Ans("5")
    } else if (areArraysEqual(isBarActive, BAR_ONE)) {
      setQ2Ans("1")
    } else if (areArraysEqual(isBarActive, BAR_TWO)) {
      setQ2Ans("2")
    } else {
      setQ2Ans("?")
    }
  }, [isBarActive, setQ2Ans])

  return {
    isBarActive,
    toggleIsBarActive,
    q2Ans,
    setQ2Ans,
  }
}
