import Draggable from "@/components/Room/phase4/GetDice/Questions/LegCount/Draggable"
import { findDraggableItem } from "@/components/Room/phase4/GetDice/Questions/LegCount/utils/DraggableItems"
import useDroppedItems from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useDroppedItems"
import { useDroppable } from "@dnd-kit/core"

export default function DroppableRow() {
  const { setNodeRef, isOver } = useDroppable({ id: "DroppableRow" })

  const { droppedItems } = useDroppedItems()

  return (
    <div className="relative">
      <span className="font-gothic absolute -left-2 -top-6 rounded bg-pink-700 p-2 text-xs font-normal">
        回答エリア
      </span>
      <div
        ref={setNodeRef}
        className={`mt-4 h-16 w-[45vw] rounded border border-pink-700 px-8 py-4 ${isOver ? "bg-pink-500" : "bg-pink-300"} flex items-center gap-4 bg-opacity-40 text-3xl font-normal`}
      >
        <span>過去</span>
        {droppedItems.map(({ id, type }) => {
          const draggableItem = findDraggableItem(type)
          if (draggableItem === undefined) return
          const { content } = draggableItem
          return <Draggable key={id} id={id} content={content} />
        })}
        <span className="ml-auto">Ans</span>
      </div>
    </div>
  )
}
