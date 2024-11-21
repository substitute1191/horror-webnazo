import { useDraggable } from "@dnd-kit/core"

type Props = {
  id: string
  content: JSX.Element | string
}

export default function Draggable({ id, content }: Props) {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({ id })

  const transformStyle =
    transform !== null
      ? `translate3d(${transform.x}px, ${transform.y}px,0)`
      : undefined

  const style = {
    transform: transformStyle,
    cursor: isDragging ? "grabbing" : "grab",
    opacity: isDragging ? "0.5" : "",
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {content}
    </div>
  )
}
