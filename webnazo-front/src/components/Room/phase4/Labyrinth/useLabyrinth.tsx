import { useMemo } from "react"
import { Point } from "./Point"
import { useAtom } from "jotai"
import { currentPointAtom } from "@/atoms/roomAtoms"

const useLabyrinth = () => {
  const [currentPoint, setCurrentPoint] = useAtom(currentPointAtom)

  const map = useMemo(
    () => [
      ["止", "止", "止", "止", "止", "止", "止", "止", "止", "止", "止"],
      ["止", "断", "列", "軽", "掘", "頼", "止", "色", "止", "始", "止"],
      ["止", "地", "止", "止", "揉", "止", "欲", "虚", "無", "霊", "止"],
      ["止", "緑", "止", "止", "知", "止", "止", "怨", "止", "止", "止"],
      ["止", "引", "止", "総", "泣", "止", "止", "出", "辣", "跳", "止"],
      ["止", "遣", "霊", "止", "六", "止", "寝", "止", "止", "養", "止"],
      ["止", "霊", "止", "怯", "丸", "栓", "毛", "令", "猟", "斬", "止"],
      ["止", "龍", "止", "止", "手", "止", "止", "困", "止", "死", "止"],
      ["止", "怨", "或", "策", "止", "駄", "止", "発", "法", "未", "止"],
      ["止", "影", "頂", "怒", "止", "真", "止", "止", "陳", "止", "止"],
      ["止", "話", "止", "来", "夜", "令", "止", "団", "止", "見", "止"],
      ["止", "止", "辺", "止", "止", "和", "止", "節", "止", "濃", "止"],
      ["止", "根", "止", "行", "短", "絶", "止", "焼", "止", "人", "止"],
      ["止", "窒", "止", "止", "止", "止", "止", "笑", "郎", "全", "止"],
      ["止", "鎌", "止", "揶", "酸", "電", "犬", "止", "六", "悪", "止"],
      ["止", "怨", "止", "止", "遍", "止", "止", "止", "波", "止", "止"],
      ["止", "霊", "止", "粘", "止", "師", "止", "水", "止", "海", "止"],
      ["止", "止", "止", "蜘", "亜", "金", "止", "弩", "平", "怨", "止"],
      ["止", "霊", "止", "兵", "止", "止", "嶺", "止", "止", "ボ", "止"],
      ["止", "怨", "止", "止", "武", "機", "止", "止", "濡", "魔", "止"],
      ["止", "怨", "終", "止", "流", "止", "愛", "止", "止", "炉", "止"],
      ["止", "止", "止", "止", "止", "止", "返", "止", "止", "止", "止"],
      ["止", "止", "止", "止", "止", "止", "止", "止", "止", "止", "止"],
    ],
    []
  )

  const move = (moveType: string) => {
    let nextPoint
    switch (moveType) {
      case "up":
        nextPoint = new Point(currentPoint.col, currentPoint.row - 1)
        break
      case "left":
        nextPoint = new Point(currentPoint.col - 1, currentPoint.row)
        break
      case "down":
        nextPoint = new Point(currentPoint.col, currentPoint.row + 1)
        break
      case "right":
        nextPoint = new Point(currentPoint.col + 1, currentPoint.row)
        break
      default:
        nextPoint = currentPoint
    }
    if (map[nextPoint.col][nextPoint.row] !== "止") {
      setCurrentPoint(nextPoint)
    }
  }

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        move("up")
        return
      case "KeyA":
      case "ArrowLeft":
        move("left")
        return
      case "KeyS":
      case "ArrowDown":
        move("down")
        return
      case "KeyD":
      case "ArrowRight":
        move("right")
        return
    }
  }

  return {
    map,
    currentPoint,
    keyDownHandler,
  }
}

export default useLabyrinth
