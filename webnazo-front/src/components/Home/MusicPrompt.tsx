import * as React from "react"

interface MusicPromptProps {
  onAccept: () => void
  onDecline: () => void
}

const MusicPrompt: React.FC<MusicPromptProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-onryou mb-4 text-gray-200">
          BGMを再生しますか？
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 font-onryo bg-green-700 text-black rounded hover:bg-green-800"
            onClick={onAccept}
          >
            はい
          </button>
          <button
            className="px-4 py-2 font-onryo bg-red-700 text-black rounded hover:bg-red-800"
            onClick={onDecline}
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  )
}

export default MusicPrompt
