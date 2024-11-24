import { ansWordsAtom } from "@/components/Room/phase4/GetDice/Questions/BuildWords/atom/wordAtoms"
import { atom, useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"

const buildWordsAnsAtom = atom("")

export default function useBuildWordsAns() {
  const [buildWordsAns, setBuildWordsAns] = useAtom(buildWordsAnsAtom)
  const ansWords = useAtomValue(ansWordsAtom)

  useEffect(() => {
    const ansStr = ansWords.join("")
    if (ansStr === "ZERO") {
      setBuildWordsAns("0")
    } else if (ansStr === "TWO") {
      setBuildWordsAns("2")
    } else {
      setBuildWordsAns("?")
    }
  }, [ansWords, setBuildWordsAns])

  return {
    buildWordsAns,
  }
}
