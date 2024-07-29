/* eslint-disable max-lines-per-function */
import api from "@/utils/api"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { phaseAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"

const Phase0 = () => {
  const [, setPhase] = useAtom(phaseAtom)
  const { roomId } = useParams()
  const [selectedPlayer, setSelectedPlayer] = useState(0)

  const handleChange = (playerNumber: number): void => {
    setSelectedPlayer(playerNumber)
  }

  const startGame = (): void => {
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
    <div>
      <form id="playerSelect">
        <div>
          <input
            type="radio"
            name="player"
            id="player1"
            className="hidden peer"
            onChange={() => handleChange(1)}
          />
          <label htmlFor="player1" className="block peer-checked:bg-cyan-500">
            プレイヤー１
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="player"
            id="player2"
            className="hidden peer"
            onChange={() => handleChange(2)}
          />
          <label htmlFor="player2" className="block peer-checked:bg-cyan-500">
            プレイヤー２
          </label>
        </div>
      </form>
      <button onClick={startGame}>ゲームスタート</button>
    </div>
  )
}
export default Phase0
