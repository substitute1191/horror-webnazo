import { atom, useAtom } from "jotai"
import { useEffect } from "react"

type DroppableAreaContentType = {
  id: string
  content: string
}

export const droppableAreaContentAtom = atom([
  { id: "Area1", content: "" },
  { id: "Area2", content: "" },
])

const setDroppableAreaContentAtom = atom(
  (get) => get(droppableAreaContentAtom),
  (get, set, newContent: DroppableAreaContentType) => {
    const prev = get(droppableAreaContentAtom)
    const newDroppableAreaContent = prev.map(({ id, content }) => {
      if (id === newContent.id) return newContent
      else return { id, content }
    })
    set(droppableAreaContentAtom, newDroppableAreaContent)
  }
)

export default function useDroppableAreaContent() {
  const [droppableAreaContent, setDroppableAreaContent] = useAtom(
    setDroppableAreaContentAtom
  )

  useEffect(() => {}, [])

  return {
    droppableAreaContent,
    setDroppableAreaContent,
  }
}
