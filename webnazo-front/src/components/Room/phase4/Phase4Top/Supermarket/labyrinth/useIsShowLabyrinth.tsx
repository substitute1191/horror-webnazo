import { atom, useAtom } from "jotai"
import { useCallback } from "react"

const isShowLabyrinthAtom = atom(0)

export default function useIsShowLabyrinth() {
  const [isShowLabyrinth, setIsShowLabyrinth] = useAtom(isShowLabyrinthAtom)

  const handleClickLabyrinth = (labyrinth: number) => {
    setIsShowLabyrinth(labyrinth)
  }

  const resetLabyrinth = useCallback(() => {
    if (isShowLabyrinth !== 0) {
      setIsShowLabyrinth(0)
    }
  }, [isShowLabyrinth, setIsShowLabyrinth])

  return {
    isShowLabyrinth,
    setIsShowLabyrinth,
    handleClickLabyrinth,
    resetLabyrinth,
  }
}
