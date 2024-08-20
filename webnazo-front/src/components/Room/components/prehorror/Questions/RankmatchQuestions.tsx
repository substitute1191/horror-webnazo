import FlipTile from "./Question1/FlipTile"
import { useAtomValue } from "jotai"
import { q2sentenceAtom } from "@/atoms/roomAtoms"
import mapSrc from "@/assets/image/map/map.png"
import PlaceImage from "./Question1/PlaceImage"
import cafeSrc from "@/assets/image/map/cafe.png"
import superSrc from "@/assets/image/map/super.png"
import buildingSrc from "@/assets/image/map/building.png"
import ohakaSrc from "@/assets/image/map/ohaka.png"
import parkSrc from "@/assets/image/map/park.png"
import postSrc from "@/assets/image/map/post.png"
import schoolSrc from "@/assets/image/map/school.png"

// eslint-disable-next-line complexity
const RankmatchQuestions = () => {
  const q2sentence = useAtomValue(q2sentenceAtom)

  return (
    <>
      <div className="text-3xl">
        問題：「Q1の答え」の「Q2の答え」を「Q3の答え」せよ
      </div>
      <FlipTile />
      <div className="text-3xl">
        Q2 「<span className="font-gothic text-[0.95em] font-bold">これ</span>
        」を集めろ！
      </div>
      <div className="text-2xl">
        {q2sentence["や"] ? "や" : "？"}
        {q2sentence["に"] ? "に" : "？"}
        {q2sentence["ざ"] ? "ざ" : "？"}
        {q2sentence["き"] ? "き" : "？"}
        {q2sentence["の"] ? "の" : "？"}
        {q2sentence["み"] ? "み" : "？"}
        {q2sentence["ぎ"] ? "ぎ" : "？"}
        {q2sentence["は"] ? "は" : "？"}？
      </div>
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
            3.信号を通らずに、カフェから墓地に行く方法はありません。
          </li>
          <li>
            4.ビルからバス停の前を通らずに公園へ行くには、必ず学校かカフェの入口の前を
            通る必要があります。
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">以下の画像を配置して考えてみよう！</h2>
        <PlaceImage imgSrc={cafeSrc} initialPosition={{ x: 453, y: 1640 }} />
        <PlaceImage
          imgSrc={buildingSrc}
          initialPosition={{ x: 553, y: 1640 }}
        />
        <PlaceImage imgSrc={ohakaSrc} initialPosition={{ x: 653, y: 1640 }} />
        <PlaceImage imgSrc={parkSrc} initialPosition={{ x: 753, y: 1640 }} />
        <PlaceImage imgSrc={postSrc} initialPosition={{ x: 853, y: 1640 }} />
        <PlaceImage imgSrc={schoolSrc} initialPosition={{ x: 953, y: 1640 }} />
        <PlaceImage imgSrc={superSrc} initialPosition={{ x: 1053, y: 1640 }} />
      </div>
    </>
  )
}

export default RankmatchQuestions
