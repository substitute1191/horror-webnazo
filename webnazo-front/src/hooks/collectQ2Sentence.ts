import { Room } from "@/types/RoomType"
import api from "@/utils/api"

export const collectQ2Sentence = async (roomId: string, chara: string) => {
  const { data } = await api.post<Room>(`/room/${roomId}/collectQ2Sentence`, {
    chara: chara,
  })
  return data
}
