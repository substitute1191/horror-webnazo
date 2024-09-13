import useBGM from "@/SoundManager/useBGM"
import { useContext, useEffect } from "react"
import bgmSrc from "@/assets/sound/Sunflower.mp3"
import rankmatchFakeLogo from "@/assets/image/rankmatch_fake_logo.png"
import AboutSite from "../components/prehorror/AboutSite"
import RankmatchQuestions from "../components/prehorror/Questions/RankmatchQuestions"
import useProceed from "../useProceed"
import KeepSpeakingPyramid from "../components/prehorror/KeepSpeakingPyramid"
import { clearTimeAtom, tabInPhase2Atom } from "@/atoms/roomAtoms"
import { useAtom } from "jotai"
import api from "@/utils/api"
import { useParams } from "react-router-dom"
import useAnimationState from "../phase3/hooks/useAnimationState"
import { AxiosResponse } from "axios"
import { SocketContext } from "../socketContext"

// TODO 後で関数を分割する
/* eslint-disable max-lines-per-function */
const Phase2 = () => {
  const { play, pause } = useBGM(bgmSrc)
  const [tab, setTab] = useAtom(tabInPhase2Atom)
  const { proceed } = useProceed()
  const { roomId } = useParams()
  const { setIsShowTime } = useAnimationState()
  const [, setClearTime] = useAtom(clearTimeAtom)
  const { socket, isConnected } = useContext(SocketContext)

  // 音楽再生
  useEffect(() => {
    void play()

    return () => {
      pause()
    }
  }, [play, pause])

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("setClearTime", (clearTime: number) => {
        localStorage.setItem("clearTime", clearTime.toString())
      })
    }
  })

  // ロゴのクリック部分のレスポンシブ対応
  useEffect(() => {
    const loadImageMapResizer = () => {
      if (typeof window.imageMapResize !== "function") {
        const script = document.createElement("script")
        script.src =
          "https://unpkg.com/image-map-resizer@1.0.10/js/imageMapResizer.min.js"
        script.async = true

        script.onload = () => {
          if (typeof window.imageMapResize === "function") {
            window.imageMapResize()
          }
        }

        document.body.appendChild(script)

        return () => {
          document.body.removeChild(script)
        }
      } else {
        window.imageMapResize()
      }
    }

    void loadImageMapResizer()
  }, [])

  // タブ切り替え
  const handleClick = (num: number) => {
    setTab(num)
  }

  const proceedAndSetFinishTime = (phase: number) => {
    proceed(phase)
    const finishTime = Date.now().toString()
    api
      .post(`/room/${roomId}/stopGameTimer`, {
        finishTime,
      })
      .then((res: AxiosResponse) => {
        setIsShowTime(true)
        setClearTime(res.data as number)

        if (socket !== null) {
          socket.emit("registerClearTime", {
            roomId: roomId,
            clearTime: res.data as number,
          })
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <div
      id="phase2"
      className="bg-yumekawa bg-white/40 bg-cover bg-blend-color"
    >
      <div className="font-pop mx-auto w-full border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
        <div className="relative">
          <KeepSpeakingPyramid />
          {/* <FakeLogoSVG /> */}
          <img
            src={rankmatchFakeLogo}
            className="z-2 relative mx-auto mb-5 w-1/2"
            useMap="#ImageMap"
            alt=""
            style={{ cursor: "default" }}
          />
          <map name="ImageMap">
            <area
              onClick={() => proceedAndSetFinishTime(3)}
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
