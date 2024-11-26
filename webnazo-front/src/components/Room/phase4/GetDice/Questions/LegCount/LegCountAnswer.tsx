import DraggableList from "@/components/Room/phase4/GetDice/Questions/LegCount/DraggableList"
import DroppableRow from "@/components/Room/phase4/GetDice/Questions/LegCount/DroppableRow"
import useDroppedItems from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useDroppedItems"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const keyIdxAtom = atomWithStorage("arrowKeyIdx", 0)

export default function LegCountAnswer() {
  const { droppedItems, addDroppedItems, filterDroppedItems } =
    useDroppedItems()
  const [keyIdx, setKeyIdx] = useAtom(keyIdxAtom)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const targetId = String(active.id)
    // 解答エリア上のアイテムではない時
    if (!droppedItems.some((item) => item.id === targetId)) {
      if (over !== null && over.id === "DroppableRow") {
        addDroppedItems({
          id: `${targetId}${keyIdx}`,
          type: targetId,
        })
        setKeyIdx((prev) => prev + 1)
      }
    } else {
      filterDroppedItems(targetId)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <DroppableRow />
      <DraggableList />
    </DndContext>
  )
}
