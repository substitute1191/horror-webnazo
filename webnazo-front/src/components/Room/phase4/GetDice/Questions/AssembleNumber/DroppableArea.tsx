import { useDroppable } from "@dnd-kit/core"

type Props = {
  id: string
  content?: string
}

export default function DroppableArea({ id, content = "" }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={`${isOver ? "bg-pink-500" : ""} mr-4 flex h-20 w-20 items-center justify-center rounded border border-pink-500 bg-pink-300 bg-opacity-20`}
    >
      {content}
    </div>
  )
}
