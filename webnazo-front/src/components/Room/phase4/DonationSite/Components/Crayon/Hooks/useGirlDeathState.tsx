import { hasStolenAtom } from "@/atoms/roomAtoms"
import { atom, useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"

const isGirlDyingAtom = atom(false)
const hasGirlDeadAtom = atom(false)

// hasStolenがtrueになったタイミングでアニメーションフラグをONにする
export default function useGirlDeathState() {
  const hasStolen = useAtomValue(hasStolenAtom)
  const [isGirlDying, setIsGirlDying] = useAtom(isGirlDyingAtom)
  const [hasGirlDead, setHasGirlDead] = useAtom(hasGirlDeadAtom)

  // 募金箱が盗まれた時女の子がまだ生きているなら、死に始める
  useEffect(() => {
    if (hasStolen && !hasGirlDead) {
      setIsGirlDying(true)
    }
  }, [hasGirlDead, hasStolen, setIsGirlDying])

  return {
    isGirlDying,
    hasGirlDead,
    setHasGirlDead,
  }
}
