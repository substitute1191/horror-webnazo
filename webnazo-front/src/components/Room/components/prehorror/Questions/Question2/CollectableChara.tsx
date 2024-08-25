import { q2sentenceAtom } from "@/atoms/roomAtoms"
import api from "@/utils/api"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import getSE from "@/assets/sound/決定ボタンを押す53.mp3"
import useSE from "@/SoundManager/useSE"

const CollectableChara = ({ chara }: { chara: string }) => {
  const { roomId } = useParams() as { roomId: string }
  const [q2sentence, setQ2sentence] = useAtom(q2sentenceAtom)
  const { play } = useSE(getSE)

  useEffect(() => {
    api
      .get<Record<string, boolean>>(`/room/${roomId}/q2sentence`)
      .then(({ data }) => {
        setQ2sentence(data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [roomId, setQ2sentence])

  const handleCollect = (chara: string) => {
    api
      .post<Record<string, boolean>>(`/room/${roomId}/collectQ2Sentence`, {
        roomId: roomId,
        chara: chara,
      })
      .then(({ data }) => {
        play()
        setQ2sentence(data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <>
      {q2sentence[chara] ? (
        <span className="px-2"> </span>
      ) : (
        <button
          className="font-gothic text-[0.91em] font-bold"
          onClick={() => handleCollect(chara)}
        >
          {chara}
        </button>
      )}
    </>
  )
}

export default CollectableChara
