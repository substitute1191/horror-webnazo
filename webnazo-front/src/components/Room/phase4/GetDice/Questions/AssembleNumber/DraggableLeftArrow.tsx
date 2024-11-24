import useWhichDiceQuestion from "@/components/Room/phase4/GetDice/hooks/useWhichDiceQuestion"
import { useDraggable } from "@dnd-kit/core"

export default function DraggableLeftArrow() {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: "LeftArrow",
  })

  const { handleClick } = useWhichDiceQuestion()
  const transformStyle =
    transform !== null
      ? `translate3d(${transform.x}px, ${transform.y}px,0) rotate(-45deg)`
      : undefined

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transformStyle,
      }}
      className={`absolute left-[5vw] top-[50%] z-20 h-10 w-10 -rotate-45 cursor-grab rounded border-l-4 border-t-4 border-slate-200 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
      onClick={() => handleClick(-1)}
    ></button>
  )
}
