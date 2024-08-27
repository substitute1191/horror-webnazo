import mapSrc from "@/assets/image/map/map.png"
import PlaceImage from "./PlaceImage"
import cafeSrc from "@/assets/image/map/cafe.png"
import superSrc from "@/assets/image/map/super.png"
import buildingSrc from "@/assets/image/map/building.png"
import ohakaSrc from "@/assets/image/map/ohaka.png"
import parkSrc from "@/assets/image/map/park.png"
import postSrc from "@/assets/image/map/post.png"
import schoolSrc from "@/assets/image/map/school.png"
import PlaceOhaka from "./PlaceOhaka"
import { SubmitHandler, useForm } from "react-hook-form"
import api from "@/utils/api"
import { useParams } from "react-router-dom"
import { useAtom } from "jotai"
import { roomAtom } from "@/atoms/roomAtoms"
import { Room } from "@/types/RoomType"
import { useState } from "react"

type FormValues = {
  [key: string]: string
}

type CorrectAnswer = {
  message: "correct"
} & Room

type IncorrectAnswer = {
  message: "答えが正しくありません"
}

type CheckQ3Response = CorrectAnswer | IncorrectAnswer

/* eslint-disable max-lines-per-function */
const Question3 = () => {
  const { roomId } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors: _ },
  } = useForm()
  const [_room, setRoom] = useAtom(roomAtom)
  const [message, setMessage] = useState("")

  const options = [
    "カフェ",
    "ビル",
    "墓地",
    "公園",
    "郵便局",
    "学校",
    "スーパー",
  ]

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault()
    api
      .post<CheckQ3Response>(`/room/${roomId}/checkQ3`, data)
      .then(({ data }) => {
        if (data.message === "correct") {
          const { message: _noused, ...room } = data
          setRoom(room)
        } else {
          setMessage(data.message)
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <>
      <div className="text-3xl">Q3 道案内を参考に地図を完成させろ！</div>
      <div>
        <img src={mapSrc} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">道案内</h2>
        <ul>
          <li className="mb-2">
            1.まず学校を出たら、左に曲がります。
            一つ目の突き当りで、左に曲がりそのまま直進します。
            進めなくなったら、左に曲がります。
            信号まで進む前に、右に曲がると郵便局に到着します。
          </li>
          <li className="mb-2">
            2.まず公園を出たら、左に曲がります。
            1つ目の信号で、右に曲がり、2つ目の信号まで進んでください。
            2つ目の信号で、左に曲がります。
            郵便局が左手に見える場所で、右に曲がります。
            最初の曲がり角で、右に曲がります。 左手にスーパーがあります。
          </li>
          <li className="mb-2">
            3.信号を通らずに、ビルからスーパーに行く方法はありません。
          </li>
          <li>
            4.ビルからバス停の前を通らずに公園へ行くには、必ず学校かカフェの入口の前を
            通る必要があります。
          </li>
        </ul>
      </div>
      <div className="relative h-32">
        <h2 className="text-3xl font-bold">
          以下の画像を配置して考えてみよう！
        </h2>
        <PlaceImage imgSrc={cafeSrc} initialPosition={{ x: 0, y: 35 }} />
        <PlaceImage imgSrc={buildingSrc} initialPosition={{ x: 85, y: 35 }} />
        <PlaceOhaka imgSrc={ohakaSrc} initialPosition={{ x: 170, y: 35 }} />
        <PlaceImage imgSrc={parkSrc} initialPosition={{ x: 255, y: 35 }} />
        <PlaceImage imgSrc={postSrc} initialPosition={{ x: 340, y: 35 }} />
        <PlaceImage imgSrc={schoolSrc} initialPosition={{ x: 425, y: 35 }} />
        <PlaceImage imgSrc={superSrc} initialPosition={{ x: 510, y: 35 }} />
      </div>
      <form onSubmit={void handleSubmit(onSubmit)}>
        {Array.from("ABCDEFG").map((value, index) => (
          <div key={index}>
            <label htmlFor={`select${index + 1}`}>
              {value}に当てはまる建物：
            </label>
            <select
              id={`select${index + 1}`}
              {...register(`select${value}`, { required: true })}
            >
              <option value=""></option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {/* A学校 B公園 Cカフェ Dスーパー E郵便局 Fビル G墓地 */}
        <button type="submit" className="border-1 border p-2 shadow-sm">
          回答する
        </button>
        {message}
      </form>
    </>
  )
}

export default Question3
