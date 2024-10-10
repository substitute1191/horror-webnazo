import { atom, useAtom } from "jotai"
import { useCallback } from "react"

const isShowLabyrinthAtom = atom(0)

export default function useIsShowLabyrinth() {
  const [isShowLabyrinth, setIsShowLabyrinth] = useAtom(isShowLabyrinthAtom)

  const handleClickLabyrinth = (labyrinth: number) => {
    console.log("handleClickLabyrinth called!")
    setIsShowLabyrinth(labyrinth)
  }

  const resetLabyrinth = useCallback(() => {
    if (isShowLabyrinth !== 0) {
      console.log("resetLabyrinth called!")
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
