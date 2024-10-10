import { useEffect, useRef, useState } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"
import { Point } from "./Point"
import TileGrid from "./TileGrid"

export default function Labyrinth() {
  const { resetLabyrinth } = useIsShowLabyrinth()
  const memoBackgroundRef = useRef<HTMLDivElement | null>(null)
  const [currentPoint] = useState(new Point(1, 9))

  // メモ以外の部分がクリックされたらメモを閉じる
  useEffect(() => {
    const currentRef = memoBackgroundRef.current
    if (currentRef !== null) {
      currentRef.addEventListener("click", resetLabyrinth)
    }

    return () => {
      if (currentRef !== null) {
        currentRef.removeEventListener("click", resetLabyrinth)
      }
    }
  }, [resetLabyrinth])

  return (
    <>
      <div
        ref={memoBackgroundRef}
        className="fixed inset-0 z-10 h-screen w-screen text-white"
      >
        <div
          className={`fixed left-[50%] top-[50%] z-[15] flex h-2/3 w-4/5 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded bg-slate-50 px-12 py-8 text-black`}
        >
          <TileGrid side={3} currentPoint={currentPoint} />
        </div>
      </div>
    </>
  )
}
