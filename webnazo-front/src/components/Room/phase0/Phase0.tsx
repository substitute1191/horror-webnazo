/* eslint-disable max-lines-per-function */
import api from "@/utils/api"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { phaseAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"
import { SocketContext } from "../socketContext"

const Phase0 = () => {
  const [, setPhase] = useAtom(phaseAtom)
  const { roomId } = useParams()
  const [selectedPlayer, setSelectedPlayer] = useState(0)
  const [isSelected, setIsSelected] = useState([false, false])
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    if (socket !== null) {
      socket.on("selected", (number: number) => {
        console.debug("selected event")
        const newSelected = [false, false]
        newSelected[number - 1] = true
        setIsSelected(newSelected)
      })
    }
  }, [socket])

  const handleChange = (playerNumber: number): void => {
    if (socket !== null) {
      socket.emit("selectChara", {
        roomId: roomId,
        playerNumber: playerNumber,
      })
    }
    setSelectedPlayer(playerNumber)
  }

  const startGame = () => {
    if (selectedPlayer === 0) {
      console.error("プレイヤー選択ができていません！")
      return
    }
    api
      .post(`/api/room/${roomId}/selectPlayer`, {
        player: selectedPlayer,
      })
      .then(() => {
        setPhase(1)
        localStorage.setItem("player_number", JSON.stringify(selectedPlayer))
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <div className="bg-home-bg object-fit flex h-screen flex-col items-center justify-center bg-cover text-6xl">
      <form id="playerSelect">
        <div className="mb-8">
          <input
            type="radio"
            name="player"
            id="player1"
            className="peer/player1 hidden"
            onChange={() => handleChange(1)}
            disabled={isSelected[0] && selectedPlayer !== 1 ? true : false}
          />
          <label
            htmlFor="player1"
            className="font-onryou block rounded p-4 text-white peer-checked/player1:bg-slate-500 peer-disabled/player1:cursor-not-allowed peer-disabled/player1:opacity-50"
          >
            プレイヤー１
          </label>
        </div>
        <div className="mb-8">
          <input
            type="radio"
            name="player"
            id="player2"
            className="peer/player2 hidden"
            onChange={() => handleChange(2)}
            disabled={isSelected[1] && selectedPlayer !== 2 ? true : false}
          />
          <label
            htmlFor="player2"
            className="font-onryou block rounded p-4 text-white peer-checked/player2:bg-slate-500 peer-disabled/player2:cursor-not-allowed peer-disabled/player2:opacity-50"
          >
            プレイヤー２
          </label>
        </div>
      </form>
      <button className="font-onryou" onClick={startGame}>
        ゲームスタート
      </button>
    </div>
  )
}

export default Phase0
