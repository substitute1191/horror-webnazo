import useSE from "@/SoundManager/useSE"
import { areArraysEqual } from "@/utils/areArraysEqual"
import { useContext, useEffect, useState } from "react"
import flipSE from "@/assets/sound/flipTile.mp3"
import clapHandsSE from "@/assets/sound/claphand.mp3"
import { SocketContext } from "@/components/Room/socketContext"
import { useParams } from "react-router-dom"
import api from "@/utils/api"
import { roomAtom } from "@/atoms/roomAtoms"
import { useAtom } from "jotai"
import { Room } from "@/types/RoomType"

const useFlipTile = () => {
  const { socket, isConnected } = useContext(SocketContext)
  const [, setRoom] = useAtom(roomAtom)

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("partnerClearedQ1", (data: Room) => {
        setIsPartnerClear(true)
        setRoom(data)
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("partnerClearedQ1")
      }
    }
  }, [socket, isConnected, setRoom])

  const { roomId } = useParams()
  const idx = [0, 1, 2, 3]
  const initialState = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ]
  const [puzzle, setPuzzle] = useState(initialState)
  const answer = [
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
  ]
  const [isClear, setIsClear] = useState(false)
  const [isPartnerClear, setIsPartnerClear] = useState(false)
  const { play: playFlip } = useSE(flipSE)
  const { play: playClapHands } = useSE(clapHandsSE)

  const isin = (i: number, j: number) => {
    return 0 <= i && i < 4 && 0 <= j && j < 4
  }

  const reset = () => {
    setPuzzle(initialState)
    playFlip()
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
    if (!isClear && areArraysEqual(newPuzzle, answer)) {
      setIsClear(true)
      api
        .post(`/room/${roomId}/clearQ1`)
        .then((res) => {
          setRoom(res.data as Room)
          if (socket !== null && isConnected) {
            socket.emit("clearQuestion", {
              roomId,
              questionNo: 1,
              room: res.data as Room,
            })
          }
        })
        .catch((e) => console.error(e))
      playClapHands()
    }
  }

  return {
    idx,
    puzzle,
    answer,
    isClear,
    isPartnerClear,
    setIsPartnerClear,
    reset,
    flip,
  }
}

export default useFlipTile
