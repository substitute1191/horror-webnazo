import { useRef, useCallback, useEffect } from "react"
import useIsShowQuestionForMoney from "../../../../../hooks/useIsShowQuestionForMoney"

// 背景がクリックされたら謎モーダルを閉じるためのカスタムフック
export default function useCloseGetMoney() {
  const bgRef = useRef<HTMLDivElement | null>(null)
  const { setIsShowQuestionForMoney } = useIsShowQuestionForMoney()

  const closeQuestion = useCallback(
    (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        setIsShowQuestionForMoney(false)
      }
    },
    [setIsShowQuestionForMoney]
  )

  useEffect(() => {
    const curBgRef = bgRef.current

    if (curBgRef !== null) {
      curBgRef.addEventListener("click", closeQuestion)
    }

    return () => {
      if (curBgRef !== null) {
        curBgRef.removeEventListener("click", closeQuestion)
      }
    }
  }, [closeQuestion])

  return bgRef
}
