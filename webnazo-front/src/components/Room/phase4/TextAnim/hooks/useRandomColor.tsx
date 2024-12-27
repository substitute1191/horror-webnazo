/* eslint-disable complexity */
import clsx from "clsx"
import { useMemo } from "react"

export default function useRandomColor() {
  const randomColorNum = useMemo(() => Math.random(), [])

  const randomColor = clsx({
    ["text-slate-700"]: randomColorNum > 0.9,
    ["text-red-700"]: randomColorNum > 0.8 && randomColorNum <= 0.9,
    ["text-blue-700"]: randomColorNum > 0.7 && randomColorNum <= 0.8,
    ["text-yellow-700"]: randomColorNum > 0.6 && randomColorNum <= 0.7,
    ["text-green-700"]: randomColorNum > 0.5 && randomColorNum <= 0.6,
    ["text-purple-700"]: randomColorNum > 0.4 && randomColorNum <= 0.5,
    ["text-pink-700"]: randomColorNum > 0.3 && randomColorNum <= 0.4,
    ["text-teal-700"]: randomColorNum > 0.2 && randomColorNum <= 0.3,
    ["text-rose-700"]: randomColorNum > 0.1 && randomColorNum <= 0.2,
    ["text-indigo-700"]: randomColorNum >= 0 && randomColorNum <= 0.1,
  })

  return {
    randomColor,
  }
}
