import { atom, useAtom, useSetAtom } from "jotai"

type ItemType = {
  id: string
  type: string
}

// ユニークなidと種類でdroppedItemの状態を管理する
export const droppedItemsAtom = atom([
  {
    id: "InitialValue",
    type: "InitialValue",
  },
])

// リストの末尾に値を追加
const addDroppedItemsAtom = atom(
  (get) => get(droppedItemsAtom),
  (get, set, newItem: ItemType) => {
    const prev = get(droppedItemsAtom)
    const newItems = [...prev, newItem]
    set(droppedItemsAtom, newItems)
  }
)
// リストから値を削除
const filterDroppedItemsAtom = atom(
  (get) => get(droppedItemsAtom),
  (get, set, filterId: string) => {
    const prev = get(droppedItemsAtom)
    const newItems = prev.filter((item) => item.id !== filterId)
    set(droppedItemsAtom, newItems)
  }
)

export default function useDroppedItems() {
  const [droppedItems, addDroppedItems] = useAtom(addDroppedItemsAtom)
  const filterDroppedItems = useSetAtom(filterDroppedItemsAtom)

  return {
    droppedItems,
    addDroppedItems,
    filterDroppedItems,
  }
}
