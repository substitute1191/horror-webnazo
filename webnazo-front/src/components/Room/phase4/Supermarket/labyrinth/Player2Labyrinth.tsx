/* eslint-disable max-lines-per-function */
import { useEffect, useRef } from "react"
import useIsShowLabyrinth from "./useIsShowLabyrinth"
import useLabyrinth from "./useLabyrinth"
import Player2LabyrinthOverlay from "@/components/Room/phase4/Supermarket/labyrinth/Player2LabyrinthOverlay"
import noise from "@/assets/image/imprisonment/apng_noise.png"
import TextShakeScaleAnimTilt from "@/components/Room/phase4/TextAnim/TextShakeScaleAnimTilt"

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
          className={`font-onryou fixed left-[50%] top-[50%] z-[15] h-full w-full -translate-x-[50%] -translate-y-[50%] items-center justify-around rounded bg-slate-900 text-slate-200`}
        >
          <img
            src={noise}
            className="pointer-events-none absolute h-full w-full opacity-70"
            alt=""
          />
          <h1 className="mb-10 text-5xl font-bold">
            ショッピングセンターへの行き方メモ
          </h1>
          <ul className="max-h-full pr-28 text-3xl leading-loose">
            <TextShakeScaleAnimTilt
              text="虚まで来たら東へ進む"
              classNames="animate-[move-updown_16s_ease-in-out_infinite] absolute top-[10vh] left-[5vw]"
            />
            <TextShakeScaleAnimTilt
              text="毛と困の分かれ道があったら毛へ進む"
              classNames="animate-[move-rightleft_18s_ease-in-out_infinite]  absolute top-[17vh] left-[1vw]"
            />
            <TextShakeScaleAnimTilt
              text="丸まで来たら４画の漢字の方向へ進む"
              classNames="animate-[move-updown_24s_ease-in-out_infinite] absolute top-[22vh] left-[12vw]"
            />
            <TextShakeScaleAnimTilt
              text="総へは決して進まない"
              classNames="animate-[move-rightleft_19s_ease-in-out_infinite] absolute top-[40vh] left-[85vw]"
            />
            <TextShakeScaleAnimTilt
              text="軽を見つけたら必ず進む"
              classNames="animate-[move-updown_13s_ease-in-out_infinite] absolute top-[34vh] left-[51vw]"
            />
            <TextShakeScaleAnimTilt
              text="「怨霊」の熟語を見つけたらその方向へ進む"
              classNames="absolute animate-[move-diagonal_10s_ease-in-out_infinite]  top-[9vh] left-[70vw]"
            />
            <TextShakeScaleAnimTilt
              text="元号の熟語を見つけたら必ずその方向へ進む"
              classNames="absolute animate-[move-diagonal_17s_ease-in-out_infinite] top-[33vh] left-[0vw]"
            />
            <TextShakeScaleAnimTilt
              text="頂まで来たら北へ進む"
              classNames="absolute animate-[rotation_10s_ease-in-out_infinite] top-[79vh] left-[46vw]"
            />
            <TextShakeScaleAnimTilt
              text="鎌まで来たら南へ進む"
              classNames="absolute animate-[move-updown_14s_ease-in-out_infinite] top-[43vh] left-[1vw]"
            />
            <TextShakeScaleAnimTilt
              text="東の方向に愛があるなら、反対側へ進む"
              classNames="absolute animate-[move-rightleft_18s_ease-in-out_infinite] top-[20vh] left-[59vw]"
            />
            <TextShakeScaleAnimTilt
              text="犬へは決して進まない"
              classNames="absolute animate-[move-updown_15s_ease-in-out_infinite] top-[81vh] left-[63vw]"
            />
            <TextShakeScaleAnimTilt
              text="近くに海がある時に北へ進めるなら北へ進む"
              classNames="absolute animate-[move-rightleft_15s_ease-in-out_infinite] top-[73vh] left-[15vw]"
            />
            <TextShakeScaleAnimTilt
              text="返まで来たら東へ進む"
              classNames="absolute animate-[move-rightleft_19s_ease-in-out_infinite] top-[50vh] left-[25vw]"
            />
            <TextShakeScaleAnimTilt
              text="隣に霊があるなら南へ進む"
              classNames="absolute animate-[move-updown_16s_ease-in-out_infinite] top-[61vh] left-[5vw]"
            />
          </ul>
          <Player2LabyrinthOverlay />
        </div>
      </div>
    </>
  )
}
