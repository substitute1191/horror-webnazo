import { useDraggable } from "@dnd-kit/core"

type Props = {
  id: string
  content: string
}

export default function DraggableParts({ id, content }: Props) {
  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transformOrigin: "0 0",
        opacity: isDragging ? "0.5" : "",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className="text-slate-200"
    >
      {content}
    </div>
  )
}
