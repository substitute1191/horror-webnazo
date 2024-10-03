import { q2sentenceAtom, roomAtom } from "@/atoms/roomAtoms"
import { useAtom, useAtomValue } from "jotai"
import InputComponent from "./InputComponent"
import ButtonComponent from "../ButtonComponent"
import { useContext, useEffect, useState } from "react"
import { SocketContext } from "@/components/Room/socketContext"
import { Room } from "@/types/RoomType"
import ClearComponent from "../CorrectComponent/ClearComponent"
import PartnerClearComponent from "../CorrectComponent/PartnerClearComponent"
import { useParams } from "react-router-dom"
import api from "@/utils/api"
import useSE from "@/SoundManager/useSE"
import clapHandsSE from "@/assets/sound/claphand.mp3"

const Question2 = () => {
  const { roomId } = useParams()
  const q2sentence = useAtomValue(q2sentenceAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const [, setRoom] = useAtom(roomAtom)
  const [isClear, setIsClear] = useState(false)
  const [isPartnerClear, setIsPartnerClear] = useState(false)

  const { play: playClapHands } = useSE(clapHandsSE)

  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("partnerClearedQ2", (data: Room) => {
        setIsPartnerClear(true)
        setRoom(data)
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("partnerClearedQ1")
      }
    }
  }, [socket, isConnected, setRoom])

  const checkQ2 = (inputValue: string) => {
    if (inputValue === "まちがい") {
      setIsClear(true)
      api
        .post(`/room/${roomId}/clearQ2`)
        .then((res) => {
          setRoom(res.data as Room)
          if (socket !== null && isConnected) {
            socket.emit("clearQuestion", {
              roomId,
              questionNo: 2,
              room: res.data as Room,
            })
          }
        })
        .catch((e) => console.error(e))
      playClapHands()
    }
  }

  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <>
      <div className="text-3xl">
        Q2 「
        <span className="font-gothic text-[0.95em] font-bold">この文字</span>
        」を集めろ！
      </div>
      <div className="text-2xl">
        「{q2sentence["や"] ? "や" : "？"}
        {q2sentence["に"] ? "に" : "？"}
        {q2sentence["ざ"] ? "ざ" : "？"}
        {q2sentence["き"] ? "き" : "？"}」{q2sentence["の"] ? "の" : "？"}
        {q2sentence["み"] ? "み" : "？"}
        {q2sentence["ぎ"] ? "ぎ" : "？"}
        {q2sentence["は"] ? "は" : "？"}？
      </div>
      <div className="flex justify-center space-x-10">
        <InputComponent
          label="解答"
          value={inputValue}
          placeholder="Q2の解答を入れてね！"
          onChange={handleInputChange}
        />
        <ButtonComponent value="解答する" onClick={() => checkQ2(inputValue)} />
      </div>
      {isClear ? (
        <ClearComponent />
      ) : isPartnerClear ? (
        <PartnerClearComponent />
      ) : null}
    </>
  )
}

export default Question2
