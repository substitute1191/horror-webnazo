import clsx from "clsx"
import { useMemo } from "react"

export default function useRandomFont() {
  const randomFontNum = useMemo(() => Math.random(), [])

  const randomFont = clsx({
    ["font-hiragino"]: randomFontNum > 0.9,
    ["font-MSPGothic"]: randomFontNum > 0.8 && randomFontNum <= 0.9,
    ["font-mincho"]: randomFontNum > 0.6 && randomFontNum <= 0.8,
    ["font-gothic"]: randomFontNum > 0.5 && randomFontNum <= 0.6,
    ["font-onryou"]: randomFontNum > 0.4 && randomFontNum <= 0.5,
    ["font-pop"]: randomFontNum > 0.2 && randomFontNum <= 0.4,
    ["font-ibaraji"]: randomFontNum > 0.1 && randomFontNum <= 0.2,
    ["font-ZeroGothic"]: randomFontNum >= 0 && randomFontNum <= 0.1,
  })

  return {
    randomFont,
  }
}
