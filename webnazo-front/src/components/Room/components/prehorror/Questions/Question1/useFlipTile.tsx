import useSE from "@/SoundManager/useSE"
import { areArraysEqual } from "@/utils/areArraysEqual"
import { useState } from "react"
import flipSE from "@/assets/sound/flipTile.mp3"
import clapHandsSE from "@/assets/sound/claphand.mp3"

const useFlipTile = () => {
  const idx = [0, 1, 2, 3]
  const [puzzle, setPuzzle] = useState([
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ])
  const answer = [
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
  ]
  const [isClear, setIsClear] = useState(false)
  const { play: playFlip } = useSE(flipSE)
  const { play: playClapHands } = useSE(clapHandsSE)

  const isin = (i: number, j: number) => {
    return 0 <= i && i < 4 && 0 <= j && j < 4
  }

  const flip = (row: number, col: number) => {
    const newPuzzle = puzzle.map((rowArray) => rowArray.slice())
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (isin(row + dr, col + dc)) {
          newPuzzle[row + dr][col + dc] = 1 - newPuzzle[row + dr][col + dc]
          playFlip()
        }
      }
    }
    setPuzzle(newPuzzle)
    if (areArraysEqual(newPuzzle, answer)) {
      setIsClear(true)
      playClapHands()
    }
  }

  return { idx, puzzle, answer, isClear, flip }
}

export default useFlipTile
