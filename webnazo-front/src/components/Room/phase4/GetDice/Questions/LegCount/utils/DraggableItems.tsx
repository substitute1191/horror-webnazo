export const DRAGGABLE_ITEMS = [
  {
    type: "BlueArrow",
    content: <span className="text-blue-500">→</span>,
  },
  {
    type: "RedArrow",
    content: <span className="text-red-500">→</span>,
  },
  {
    type: "GreenArrow",
    content: <span className="text-green-500">→</span>,
  },
]

export function findDraggableItem(searchType: string) {
  return DRAGGABLE_ITEMS.find((item) => item.type === searchType)
}
