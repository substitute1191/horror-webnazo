import useCharaSelect from "./useCharaSelect"

const CharaSelect = () => {
  const { myChara, otherChara, handleChange, startGame } = useCharaSelect()

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
            checked={myChara === 1}
            disabled={otherChara === 1 ? true : false}
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
            checked={myChara === 2}
            disabled={otherChara === 2 ? true : false}
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

export default CharaSelect