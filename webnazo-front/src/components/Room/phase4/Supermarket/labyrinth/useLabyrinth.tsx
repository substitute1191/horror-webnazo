/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { useContext, useEffect, useMemo } from "react"
import { Point } from "./Point"
import { useAtom, useSetAtom } from "jotai"
import { currentPointAtom, reachedShopAtom, roomAtom } from "@/atoms/roomAtoms"
import { useParams } from "react-router-dom"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { SocketContext } from "@/components/Room/socketContext"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"
import useIsShowJumpScare from "@/components/Room/phase4/Supermarket/labyrinth/useisShowJumpScare"

const stopChars = [
  "色",
  "欲",
  "未",
  "困",
  "寝",
  "手",
  "怯",
  "総",
  "頼",
  "駄",
  "話",
  "法",
  "酸",
  "亜",
  "平",
  "炉",
]

const useLabyrinth = () => {
  const [currentPoint, setCurrentPoint] = useAtom(currentPointAtom)
  const [, setHasBeenShop] = useAtom(reachedShopAtom)
  const { roomId } = useParams()
  const { socket, isConnected } = useContext(SocketContext)
  const setRoom = useSetAtom(roomAtom)
  const { setMemoFlags } = useMemoFlags()
  const { toggleIsShowJumpScare } = useIsShowJumpScare()

  const map = useMemo(
    () => [
      ["止", "止", "止", "止", "止", "止", "止", "止", "止", "止", "止"],
      ["止", "断", "列", "軽", "掘", "頼", "止", "色", "止", "始", "止"],
      ["止", "地", "止", "止", "揉", "止", "欲", "虚", "無", "霊", "止"],
      ["止", "緑", "止", "止", "知", "止", "止", "怨", "止", "止", "止"],
      ["止", "引", "止", "総", "泣", "止", "止", "出", "辣", "跳", "止"],
      ["止", "遣", "止", "止", "六", "止", "寝", "止", "止", "養", "止"],
      ["止", "霊", "止", "怯", "丸", "栓", "毛", "令", "猟", "斬", "止"],
      ["止", "龍", "止", "止", "手", "止", "止", "困", "止", "死", "止"],
      ["止", "怨", "霊", "策", "止", "駄", "止", "発", "止", "未", "止"],
      ["止", "影", "止", "怒", "止", "真", "止", "止", "法", "止", "止"],
      ["止", "話", "止", "来", "夜", "令", "犬", "団", "陳", "見", "止"],
      ["止", "止", "或", "止", "止", "和", "止", "節", "止", "濃", "止"],
      ["止", "根", "頂", "行", "短", "絶", "止", "焼", "止", "人", "止"],
      ["止", "窒", "止", "止", "止", "止", "嶺", "笑", "止", "全", "止"],
      ["止", "鎌", "辺", "揶", "酸", "電", "機", "止", "郎", "悪", "止"],
      ["止", "怨", "止", "止", "止", "止", "愛", "止", "六", "止", "止"],
      ["止", "霊", "止", "粘", "遍", "師", "止", "水", "波", "海", "止"],
      ["止", "止", "止", "蜘", "止", "金", "返", "弩", "止", "怨", "止"],
      ["止", "霊", "止", "兵", "亜", "止", "霊", "止", "平", "ボ", "止"],
      ["止", "怨", "怨", "止", "止", "武", "楽", "弦", "止", "濡", "止"],
      ["止", "怨", "止", "止", "止", "止", "止", "野", "止", "魔", "止"],
      ["止", "終", "県", "漣", "流", "劉", "士", "議", "止", "炉", "止"],
      ["止", "止", "止", "止", "止", "止", "止", "止", "止", "止", "止"],
    ],
    []
  )

  useEffect(() => {
    if (map[currentPoint.col][currentPoint.row] === "終") {
      void (async () => {
        const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
          fieldName: "reachedShop",
          newValue: true,
        })
        setRoom(data)
        setMemoFlags("reachedShop")
        if (socket !== null && isConnected) {
          socket.emit("updateRoom", { roomId })
        }
      })()
    }
  }, [
    map,
    socket,
    isConnected,
    currentPoint,
    setHasBeenShop,
    roomId,
    setRoom,
    setMemoFlags,
  ])

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
    const currentChar = map[nextPoint.col][nextPoint.row]
    if (currentChar !== "止") {
      setCurrentPoint(nextPoint)
    }
    // ジャンプスケアを出してスタートに戻す文字のリストに含まれているか
    if (stopChars.includes(currentChar)) {
      const randomSec = Math.floor(Math.random() * 400) + 100
      setTimeout(() => {
        setCurrentPoint(new Point(1, 9))
        toggleIsShowJumpScare()
      }, randomSec)
    }
  }

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault()
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
