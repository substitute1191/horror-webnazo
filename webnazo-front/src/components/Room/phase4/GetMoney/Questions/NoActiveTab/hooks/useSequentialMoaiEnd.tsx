import { atom, useAtom } from "jotai"

const sequentialMoaiEndAtom = atom(false)

export default function useSequentialMoaiEnd() {
  const [sequentialMoaiEnd, setSequentialMoaiEnd] = useAtom(
    sequentialMoaiEndAtom
  )

  return {
    sequentialMoaiEnd,
    setSequentialMoaiEnd,
  }
}
