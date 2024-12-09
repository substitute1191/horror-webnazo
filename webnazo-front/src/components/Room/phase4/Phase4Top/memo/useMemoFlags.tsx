import { atom, useAtom } from "jotai"

export type TriggerType =
  | "isMillionaire"
  | "reachedShop"
  | "hasStolen"
  | "hasDice"

const memoFlagsAtom = atom([
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
])

const setMemoFlagsAtom = atom(
  (get) => get(memoFlagsAtom),
  (get, set, trigger: TriggerType) => {
    const prev = get(memoFlagsAtom)
    if (trigger === "isMillionaire") {
      const newMemoFlags = prev.map((item, idx) => {
        if (idx === 1 || idx === 2) return true
        else return item
      })
      set(memoFlagsAtom, newMemoFlags)
    } else if (trigger === "reachedShop") {
      const newMemoFlags = prev.map((item, idx) => {
        if (idx === 3 || idx === 4) return true
        else return item
      })
      set(memoFlagsAtom, newMemoFlags)
    } else if (trigger === "hasStolen") {
      const newMemoFlags = prev.map((item, idx) => {
        if (idx === 5 || idx === 6) return true
        else return item
      })
      set(memoFlagsAtom, newMemoFlags)
    } else if (trigger === "hasDice") {
      const newMemoFlags = prev.map((item, idx) => {
        if (idx === 7 || idx === 8) return true
        else return item
      })
      set(memoFlagsAtom, newMemoFlags)
    }
  }
)

export default function useMemoFlags() {
  const [memoFlags, setMemoFlags] = useAtom(setMemoFlagsAtom)

  return {
    memoFlags,
    setMemoFlags,
  }
}
