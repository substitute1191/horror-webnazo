import Draggable from "@/components/Room/phase4/GetDice/Questions/LegCount/Draggable"
import { DRAGGABLE_ITEMS } from "@/components/Room/phase4/GetDice/Questions/LegCount/utils/DraggableItems"

export default function DraggableList() {
  return (
    <div className="relative">
      <span className="font-gothic absolute -left-2 -top-6 rounded bg-yellow-600 p-2 text-xs font-normal">
        アイテム
      </span>
      <div className="mt-8 flex justify-center gap-12 border border-yellow-600 bg-yellow-300 bg-opacity-20 px-8 py-4 text-4xl font-normal">
        {DRAGGABLE_ITEMS.map(({ type, content }) => (
          <Draggable key={type} id={type} content={content} />
        ))}
      </div>
    </div>
  )
}
