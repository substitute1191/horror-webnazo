import { useCallback, useEffect, useRef } from "react"
import useAlert from "./useAlert"
import keikoku from "@/assets/sound/imprisonment/警告音1.mp3"
import useSE from "@/SoundManager/useSE"
import AnnouncementIcon from "@mui/icons-material/Announcement"

export default function Alert() {
  const { isAlert, setIsAlert, alertMsg, alertCls } = useAlert()

  const { play: playAlert, stop: stopAlert } = useSE(keikoku)
  const lastTimeRef = useRef<number>(0)
  const raf = useRef<number>()

  const alertOff = useCallback(
    (curTime: number) => {
      if (curTime - lastTimeRef.current >= 3000) {
        setIsAlert(false)
      }
    },
    [setIsAlert]
  )

  useEffect(() => {
    if (isAlert) {
      playAlert()
      lastTimeRef.current = performance.now()
      const animate = (curTime: number) => {
        alertOff(curTime)
        requestAnimationFrame(animate)
      }
      raf.current = requestAnimationFrame(animate)
    }

    return () => {
      stopAlert()
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [alertOff, isAlert, playAlert, setIsAlert, stopAlert])

  return (
    <div
      className={` ${isAlert ? "animate-[fadein-alert_1s_ease-in]" : "hidden"} rounded] font-ZeroGothic absolute left-[50%] top-[5%] z-[60] w-[80%] -translate-x-[50%] border-4 border-blue-500 bg-blue-400 px-12 py-4 text-5xl text-white ${alertCls} flex items-center justify-center`}
    >
      <AnnouncementIcon
        style={{ fontSize: "3rem", marginRight: "10px", marginTop: "5px" }}
      />
      {alertMsg}
    </div>
  )
}
