import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"

export default function Labyrinth() {
  const { resetLabyrinth } = useIsShowLabyrinth()
  const memoBackgroundRef = useRef<HTMLDivElement | null>(null)

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
          className={`fixed left-[50%] top-[50%] z-[15] h-[80vh] w-[50vw] -translate-x-[50%] -translate-y-[50%] rounded bg-slate-50 px-12 py-8 text-black`}
        >
          labyrinth
        </div>
      </div>
    </>
  )
}
