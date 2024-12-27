import useWhichDiceQuestion from "@/components/Room/phase4/GetDice/hooks/useWhichDiceQuestion"
import DraggableLeftArrow from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/DraggableLeftArrow"
import DraggableParts from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/DraggableParts"
import DroppableArea from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/DroppableArea"
import useDroppableAreaContent from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/useDroppableAreaContent"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core"
import { useState } from "react"
import { createPortal } from "react-dom"

export default function AssembleNumber() {
  const { droppableAreaContent, setDroppableAreaContent } =
    useDroppableAreaContent()
  const { handleClick } = useWhichDiceQuestion()

  const [activeId, setActiveId] = useState<string | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over === null) {
      if (active.id === "LeftArrow") handleClick(-1)
      return
    }
    const draggedItemContent =
      String(active.id) !== "LeftArrow" ? String(active.id) : "く"
    const targetAreaId = String(over.id)
    setDroppableAreaContent({
      id: targetAreaId,
      content: draggedItemContent,
    })
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <DraggableLeftArrow />
      <div className="relative">
        <h2 className="font-pop text-center text-3xl font-normal">
          <TextShakeTiltScale text="パーツを組み合わせて数字を作ろう！" />
        </h2>
        <span className="font-gothic -ml-2 rounded bg-yellow-600 p-2 text-xs font-normal">
          アイテム
        </span>
        <div className="mb-4 flex justify-center gap-12 rounded border border-yellow-600 bg-yellow-300 bg-opacity-20 py-2">
          <DraggableParts id="ー" content="ー" />
          <DraggableParts id="つ" content="つ" />
        </div>
        <div className="flex items-center gap-8">
          <div>
            <div className="mb-12 flex items-center">
              <DroppableArea
                id="Area1"
                content={droppableAreaContent[0].content}
              />{" "}
              →
            </div>
            <div className="flex items-center">
              <DroppableArea
                id="Area2"
                content={droppableAreaContent[1].content}
              />{" "}
              →
            </div>
          </div>
          <div className="font-pop flex h-56 w-60 items-center justify-center rounded-md border-4 border-gray-950 bg-gray-900 text-2xl font-normal shadow-md">
            <TextShakeTiltScale text="何が出来るかな？" />
          </div>
        </div>
      </div>
      {createPortal(
        <DragOverlay>
          {activeId === "ー" ? (
            <div className="cursor-grabbing text-5xl font-normal text-white">
              ー
            </div>
          ) : null}
          {activeId === "つ" ? (
            <div className="cursor-grabbing text-5xl font-normal text-white">
              つ
            </div>
          ) : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  )
}
