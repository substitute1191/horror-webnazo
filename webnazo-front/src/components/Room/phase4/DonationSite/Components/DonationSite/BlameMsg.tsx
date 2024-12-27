import useRandomColor from "@/components/Room/phase4/TextAnim/hooks/useRandomColor"
import useRandomFont from "@/components/Room/phase4/TextAnim/hooks/useRandomFont"
import RandomScale from "@/components/Room/phase4/TextAnim/RandomScale"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomTilt from "@/components/Room/phase4/TextAnim/RandomTilt"
import clsx from "clsx"
import { useEffect, useMemo, useState } from "react"

export default function BlameMsg() {
  const { randomFont } = useRandomFont()
  const { randomColor } = useRandomColor()
  const [isShow, setIsShow] = useState(false)
  const appearSec = useMemo(() => {
    return Math.floor(Math.random() * (800 - 100 + 1) * 100)
  }, [])

  const allClass = clsx(randomFont, randomColor)

  useEffect(() => {
    setTimeout(() => setIsShow(true), appearSec)
  }, [appearSec])

  if (!isShow) return null

  return (
    <span className={allClass}>
      {"人殺し。".split("").map((char, idx) => (
        <RandomShakeXChar key={idx} classNames={allClass} probability={0}>
          <RandomScale>
            <RandomTilt>{char}</RandomTilt>
          </RandomScale>
        </RandomShakeXChar>
      ))}
    </span>
  )
}
