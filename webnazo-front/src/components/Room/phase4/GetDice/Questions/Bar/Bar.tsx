import useIsBarActive from "@/components/Room/phase4/GetDice/Questions/Bar/useIsBarActive"

export default function Bar({
  id,
  classNames,
}: {
  id: number
  classNames?: string
}) {
  const { isBarActive, toggleIsBarActive } = useIsBarActive()

  const handleToggle = () => {
    toggleIsBarActive(id)
  }

  return (
    <button onClick={handleToggle}>
      <div
        className={`absolute h-4 w-20 rounded-md bg-orange-300 ${classNames} ${isBarActive[id] ? "" : "opacity-5"} `}
      />
    </button>
  )
}
