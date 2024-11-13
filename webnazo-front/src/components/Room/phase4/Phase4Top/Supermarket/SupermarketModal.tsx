import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "../labyrinth/useIsShowLabyrinth"
import Supermarket from "./Supermarket"

export default function Labyrinth() {
  const { resetLabyrinth } = useIsShowLabyrinth()
  const supermarketbackgroundRef = useRef<HTMLDivElement | null>(null)
  const supermarketModalRef = useRef<HTMLDivElement | null>(null)

  // モーダル以外の部分がクリックされたらメモを閉じる
  useEffect(() => {
    const handleBackgroundClick = (event: MouseEvent) => {
      if (
        supermarketbackgroundRef.current !== null &&
        supermarketModalRef.current !== null &&
        !supermarketModalRef.current.contains(event.target as Node)
      ) {
        resetLabyrinth()
      }
    }

    const currentBackgroundRef = supermarketbackgroundRef.current
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
    if (supermarketModalRef?.current !== null) {
      supermarketModalRef.current.focus()
    }
  }, [])

  return (
    <>
      <div
        ref={supermarketbackgroundRef}
        className="fixed inset-0 z-10 h-screen w-screen text-white"
      >
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref={supermarketModalRef}
          tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          className={`fixed left-[50%] top-[50%] z-[15] flex h-2/3 w-4/5 -translate-x-[50%] -translate-y-[50%] items-center justify-around rounded bg-slate-50 px-12 py-8 text-black`}
        >
          <Supermarket />
        </div>
      </div>
    </>
  )
}
