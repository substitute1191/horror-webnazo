import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"
import TileGrid from "./TileGrid"
import useLabyrinth from "./useLabyrinth"

export default function Labyrinth() {
  const { resetLabyrinth } = useIsShowLabyrinth()
  const memoBackgroundRef = useRef<HTMLDivElement | null>(null)
  const labyrinthModalRef = useRef<HTMLDivElement | null>(null)
  const { keyDownHandler } = useLabyrinth()

  // モーダル以外の部分がクリックされたらメモを閉じる
  useEffect(() => {
    const handleBackgroundClick = (event: MouseEvent) => {
      if (
        memoBackgroundRef.current !== null &&
        labyrinthModalRef.current !== null &&
        !labyrinthModalRef.current.contains(event.target as Node)
      ) {
        resetLabyrinth()
      }
    }

    const currentBackgroundRef = memoBackgroundRef.current
    if (currentBackgroundRef !== null) {
      currentBackgroundRef.addEventListener("click", handleBackgroundClick)
    }

    return () => {
      if (currentBackgroundRef !== null) {
        currentBackgroundRef.removeEventListener("click", handleBackgroundClick)
      }
    }
  }, [resetLabyrinth])

  useEffect(() => {
    if (labyrinthModalRef?.current !== null) {
      labyrinthModalRef.current.focus()
    }
  }, [])

  return (
    <>
      <div
        ref={memoBackgroundRef}
        className="fixed inset-0 z-10 h-screen w-screen text-white"
      >
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref={labyrinthModalRef}
          onKeyDown={keyDownHandler}
          tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          className={`fixed left-[50%] top-[50%] z-[15] flex h-2/3 w-4/5 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded bg-slate-50 px-12 py-8 text-black`}
        >
          <TileGrid />
        </div>
      </div>
    </>
  )
}
