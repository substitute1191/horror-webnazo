import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"
import TileGrid from "./TileGrid"
import useLabyrinth from "./useLabyrinth"
import Instruction from "./Instruction"
import Compass from "@/assets/image/compass.png"
import walk from "@/assets/image/imprisonment/walk.gif"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"

export default function Player1Labyrinth() {
  const { resetLabyrinth } = useIsShowLabyrinth()
  const labyrinthbackgroundRef = useRef<HTMLDivElement | null>(null)
  const labyrinthModalRef = useRef<HTMLDivElement | null>(null)
  const { keyDownHandler } = useLabyrinth()

  // モーダル以外の部分がクリックされたらメモを閉じる
  useEffect(() => {
    const handleBackgroundClick = (event: MouseEvent) => {
      if (
        labyrinthbackgroundRef.current !== null &&
        labyrinthModalRef.current !== null &&
        !labyrinthModalRef.current.contains(event.target as Node)
      ) {
        resetLabyrinth()
      }
    }

    const currentBackgroundRef = labyrinthbackgroundRef.current
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
        ref={labyrinthbackgroundRef}
        className="fixed inset-0 z-10 h-screen w-screen text-white"
      >
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref={labyrinthModalRef}
          onKeyDown={keyDownHandler}
          tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          className={`fixed left-[50%] top-[50%] z-[15] h-2/3 w-4/5 -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded bg-slate-500 text-black`}
        >
          <img
            src={walk}
            className="absolute h-full w-full opacity-30"
            alt=""
          />
          <h2 className="mt-4 text-center text-5xl">
            <TextShakeTiltScale text="ゴールを目指せ！" />
          </h2>
          <p className="mb-4 text-center text-2xl">
            <TextShakeTiltScale text="※間違った方向に行くとやばい！" />
          </p>
          <div className="flex h-full w-full justify-around">
            <Instruction />
            <TileGrid />
            <img
              src={Compass}
              className="w-[25%] -translate-y-[15%] object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
