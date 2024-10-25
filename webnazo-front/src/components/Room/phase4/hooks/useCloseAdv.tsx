import { useRef, useCallback, useEffect, Dispatch, SetStateAction } from "react"

// 背景がクリックされたら謎モーダルを閉じるためのカスタムフック
export default function useCloseAdv(
  closeAdv: Dispatch<SetStateAction<boolean>>
) {
  const bgRef = useRef<HTMLDivElement | null>(null)

  const closeQuestion = useCallback(
    (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeAdv(false)
      }
    },
    [closeAdv]
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
