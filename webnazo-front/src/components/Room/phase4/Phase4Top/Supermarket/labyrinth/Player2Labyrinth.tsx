import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"
import useLabyrinth from "./useLabyrinth"

export default function Player2Labyrinth() {
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
          className={`font-onryou fixed left-[50%] top-[50%] z-[15] h-2/3 w-2/5 -translate-x-[50%] -translate-y-[50%] items-center justify-around overflow-y-auto rounded bg-slate-50 px-12 py-8 text-black`}
        >
          <h1 className="mb-10 text-5xl font-bold">
            ショッピングセンターへの行き方メモ
          </h1>
          <ul className="max-h-full pr-28 text-3xl leading-loose">
            <li>虚まで来たら東へ進む</li>
            <li>毛と困の分かれ道があったら毛へ進む</li>
            <li>丸まで来たら４画の漢字の方向へ進む</li>
            <li>総へは決して進まない</li>
            <li>軽を見つけたら必ず進む</li>
            <li>「怨霊」の熟語を見つけたらその方向へ進む</li>
            <li>元号の熟語を見つけたら必ずその方向へ進む</li>
            <li>頂まで来たら北へ進む</li>
            <li>鎌まで来たら南へ進む</li>
            <li>東の方向に愛があるなら、反対側へ進む</li>
            <li>犬へは決して進まない</li>
            <li>近くに海がある時に北へ進めるなら北へ進む</li>
            <li>返まで来たら東へ進む</li>
            <li>隣に霊があるなら南へ進む</li>
          </ul>
        </div>
      </div>
    </>
  )
}
