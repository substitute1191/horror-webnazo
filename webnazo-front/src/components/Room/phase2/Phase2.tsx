import useBGM from "@/SoundManager/useBGM"
import { useEffect, useRef, useState } from "react"
import bgmSrc from "@/assets/sound/Sunflower.mp3"
import rankmatchFakeLogo from "@/assets/image/rankmatch_fake_logo.png"
import AboutSite from "../components/prehorror/AboutSite"
import RankmatchQuestions from "../components/prehorror/RankmatchQuestions"
import useProceed from "../useProceed"

const Phase2 = () => {
  const { play, pause } = useBGM(bgmSrc)
  const [tab, setTab] = useState(0)
  const imageMapResizerLoaded = useRef(false)
  const { proceed } = useProceed()

  useEffect(() => {
    void play()

    return () => {
      pause()
    }
  }, [play, pause])

  useEffect(() => {
    if (!imageMapResizerLoaded.current) {
      const script = document.createElement("script")
      script.src =
        "https://unpkg.com/image-map-resizer@1.0.10/js/imageMapResizer.min.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        // スクリプトがロードされた後にimageMapResize()を実行
        if (typeof window.imageMapResize === "function") {
          window.imageMapResize()
        }
        imageMapResizerLoaded.current = true
      }

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleClick = (num: number) => {
    setTab(num)
  }

  return (
    <div className="bg-yumekawa bg-white/40 bg-cover bg-blend-color">
      <div className="font-pop mx-auto w-full border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
        <div className="relative">
          <img
            src={rankmatchFakeLogo}
            className="mx-auto mb-5 w-1/2"
            useMap="#ImageMap"
            alt=""
          />
          <map name="ImageMap">
            <area
              onClick={() => proceed(3)}
              shape="rect"
              coords="137,272,243,382"
              href="#"
              alt=""
            />
          </map>
          {/* <div
            className="absolute border boreder-1-gray rounded-full w-20 h-20 top-0 left-20 bg-blue-200">
          </div> */}
        </div>
        <div className="mx-auto w-11/12 rounded-2xl border border-solid border-fuchsia-200 bg-white px-2 py-2">
          <div className="p-2">
            <button
              onClick={() => handleClick(0)}
              className={`mr-4 ${tab === 0 ? "disabled cursor-not-allowed opacity-20" : null}`}
            >
              問題
            </button>
            <button
              onClick={() => handleClick(1)}
              className={`${tab === 1 ? "disabled cursor-not-allowed opacity-20" : null}`}
            >
              このサイトについて
            </button>
          </div>
          <div className="mb-1 rounded-2xl border-2 border-dashed border-fuchsia-200 px-12 py-5">
            {tab === 0 ? <RankmatchQuestions /> : null}
            {tab === 1 ? <AboutSite /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phase2
