import React from "react"
import Modal from "react-modal"
import { useTeamNameForm } from "./useTeamNameForm"

interface TeamNameFormModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const TeamNameFormModal: React.FC<TeamNameFormModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { internalIsOpen, teamName, closeAndProceed, handleInputChange } =
    useTeamNameForm(isOpen, onRequestClose)

  return (
    <Modal
      isOpen={internalIsOpen}
      onRequestClose={onRequestClose}
      className={`${isOpen ? "animate-blur-enter" : "animate-blur-exit"} font-onryou w-full max-w-5xl rounded-lg border-2 border-red-800 bg-black p-8 shadow-xl`}
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      closeTimeoutMS={300}
    >
      <div className="flex flex-col items-center">
        <h2 className="mb-12 text-center text-5xl font-bold text-red-600">
          チーム名を入力してください
        </h2>
        <input
          type="text"
          className="mb-12 block border-2 border-red-800 bg-gray-900 px-4 py-2 text-center text-7xl text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={teamName}
          onChange={handleInputChange}
        />
        <div className="space-x-6">
          <button
            onClick={() => closeAndProceed(1)}
            className="transform rounded bg-red-900 px-6 py-3 text-3xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-red-700 hover:shadow-red-500/50"
          >
            決定
          </button>
          <button
            onClick={onRequestClose}
            className="transform rounded bg-gray-800 px-6 py-3 text-3xl font-bold text-red-500 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 hover:shadow-red-500/50"
          >
            閉じる
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default TeamNameFormModal
