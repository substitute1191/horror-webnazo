/* eslint-disable max-lines-per-function */
import rankmatchLogo from "@/assets/image/rankmatch_logo.png"

import useProceed from "../useProceed"
import useBGM from "@/SoundManager/useBGM"
import bgmSrc from "@/assets/sound/pom_pom_shower.mp3"
import { useEffect } from "react"
import SiteDescription from "../components/prehorror/SiteDescription"
import HighAchierver from "../components/prehorror/HighAchiever"
import AboutPyramid from "../components/prehorror/AboutPyramid"
import Precautions from "../components/prehorror/Precautions"

const Phase1 = () => {
  const { proceed } = useProceed()
  const { play, pause } = useBGM(bgmSrc)

  useEffect(() => {
    void play()
    return () => {
      pause()
    }
  })

  return (
    <div className="bg-yumekawa bg-white/40 bg-cover bg-blend-color">
      <div className="font-pop mx-auto w-full border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
        <h1>
          <img
            src={rankmatchLogo}
            alt="ランクマッチのロゴ"
            className="animate-float mx-auto mb-5 w-1/2"
          />
        </h1>
        <div className="mx-auto w-11/12 rounded-2xl border border-solid border-fuchsia-200 bg-white px-2 py-2">
          <div className="rounded-2xl border-2 border-dashed border-fuchsia-200 px-12 py-5">
            <SiteDescription />
            <div className="mb-5 mt-14 text-center text-3xl font-extrabold">
              <div>
                次回のゲームは<span className="text-red-500">8月1日21時</span>
                からスタート！
              </div>
              今回は
              <span className="underline-offset-3 text-red-500 underline">
                2人1組
              </span>
              での参加となります！友人を誘って参加しよう！
            </div>
            <div className="text-center">
              <button
                className="flex w-full transform items-center justify-between rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-7 text-center text-7xl font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
                onClick={() => proceed(2)}
              >
                <span className="flex-grow text-center">ゲームに参加する</span>
                <i className="fas fa-angle-right mr-5"></i>
              </button>
            </div>
            <HighAchierver />
            <AboutPyramid />
            <Precautions />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Phase1
