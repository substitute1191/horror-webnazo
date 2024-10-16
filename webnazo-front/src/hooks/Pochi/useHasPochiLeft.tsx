import { atom, useAtom } from "jotai"

const hasPochiLeftAtom = atom(false)

export default function useHasPochiLeft() {
  const [hasPochiLeft, setHasPochiLeft] = useAtom(hasPochiLeftAtom)

  return {
    hasPochiLeft,
    setHasPochiLeft,
  }
}
