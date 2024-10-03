const ButtonComponent = ({
  value,
  onClick,
}: {
  value: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <button
      className="mb-3 transform rounded-2xl border-b-4 border-pink-500 bg-pink-400 px-4 py-2 text-3xl text-white shadow-lg transition duration-150 ease-in-out hover:-translate-y-0.5 hover:border-pink-400 hover:shadow-inner active:border-pink-600"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default ButtonComponent
