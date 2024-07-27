import * as React from "react"
import useMusicPrompt from "./useMusicPrompt"

const MusicPrompt: React.FC = () => {
  const { showPrompt, handleAccept, handleDecline } = useMusicPrompt()

  if (!showPrompt) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-onryou mb-4 text-gray-200">
          <div>BGMを再生しますか？</div>
          (F2キーでいつでもサウンドメニューを開けます)
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 font-onryo bg-green-700 text-black rounded hover:bg-green-800"
            onClick={handleAccept}
          >
            はい
          </button>
          <button
            className="px-4 py-2 font-onryo bg-red-700 text-black rounded hover:bg-red-800"
            onClick={handleDecline}
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  )
}

export default MusicPrompt
