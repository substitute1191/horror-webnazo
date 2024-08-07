/* eslint-disable max-lines-per-function */
import rankmatchLogo from "@/assets/image/rankmatch_logo.png"
import pyramid from "@/assets/image/mascot/mascot.png"
import rank1 from "@/assets/image/ranking/rank_1.png"
import rank2 from "@/assets/image/ranking/rank_2.png"
import rank3 from "@/assets/image/ranking/rank_3.png"
import api from "@/utils/api"
import { useParams } from "react-router-dom"
import { useAtom } from "jotai"
import { phaseAtom } from "@/atoms/atoms"

const Phase1 = () => {
  const { roomId } = useParams()
  const [, setPhase] = useAtom(phaseAtom)

  const joinGame = () => {
    api
      .post(`/api/room/${roomId}/joinGame`)
      .then(() => {
        setPhase((prev) => ++prev)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <div className="bg-yumekawa bg-cover">
      <div className="font-pop mx-auto w-3/5 bg-cyan-200 pb-52 pt-7">
        <h1>
          <img
            src={rankmatchLogo}
            alt="ランクマッチのロゴ"
            className="animate-float mx-auto mb-5 w-1/2"
          />
        </h1>
        <div className="mx-auto w-11/12 border-2 border-solid border-stone-600 bg-white px-14 py-7">
          <h2 className="pb-5 text-center text-6xl tracking-widest">
            このサイトは？
          </h2>
          <p className="bg-teal-100 p-8 text-left text-2xl">
            このサイトでは毎週所定の時間に「
            <span className="text-red-500">ナゾトキランクマッチ</span>
            」が開催される！
            <br />
            皆で一斉に同じ謎解き問題に参加して、解くまでの時間を競うのだ！解くのが早ければ早いほどレーティングが上がっていくぞ！
            <br />
            <span className="text-red-500">
              全国の謎解きマニアたちと勝負せよ！
            </span>
          </p>
          <p className="mb-5 mt-14 text-center text-3xl font-extrabold">
            次回のゲームは<span className="text-red-500">8月1日21時</span>
            からスタート！
          </p>
          <div className="text-center">
            <button
              className="w-full border-2 border-solid border-stone-600 bg-zinc-200 px-3 py-7 text-center text-7xl"
              onClick={joinGame}
            >
              ゲームに参加する
            </button>
          </div>
          <div className="mb-20 mt-16 bg-pink-100 p-5">
            <h3 className="mb-7 text-6xl">前回の成績優秀者</h3>
            <ul className="leading-loose">
              <li className="flex text-6xl">
                <img src={rank1} alt="一位" className="w-48" />
                <span className="mb-10 mt-auto">知的生命体YOSHIO さん</span>
              </li>
              <li className="mb-7 flex pl-8 text-5xl">
                <img src={rank2} alt="二位" className="w-32" />
                <span className="mb-7 ml-3 mt-auto">北亨夏高校クイ研 さん</span>
              </li>
              <li className="flex pl-14 text-4xl">
                <img src={rank3} alt="三位" className="w-20" />
                <span className="mb-4 ml-7 mt-auto">ゆゅ（＠ω＠） さん</span>
              </li>
            </ul>
          </div>
          <div className="mb-20 bg-red-50 p-5">
            <img src={pyramid} alt="ピラミッド君" className="mx-auto mb-10" />
            <h3 className="text-center text-5xl">ピラミッド君</h3>
            <p className="mt-8 text-2xl">
              このサイトのマスコットキャラクター。謎で頂点を目指すユーザーの皆を応援している。可愛い外見で毒のあることを言うという自己認識を持っているが、そもそも自分が可愛くないことに気づいていない。
              <br />
              オカルトが大の苦手であり、心霊スポットなどお化けが出そうなところからはすぐに逃げ出してしまう。
              <br />
              そのためピラミッドが王族の墓として作られたという通説を真っ赤なデマであるとして強く否定している。
            </p>
          </div>
          <div className="bg-orange-100 p-5">
            <h3 className="mb-10 text-center text-5xl">注意事項</h3>
            <ul className="text-2xl">
              {/*
              デフォルトでリストの点がなかったため、
              list-discで点をつけている
              （検証したブラウザはEdgeとChrome）
              */}
              <li className="list-inside list-disc">
                シーズン中は謎の回答をSNSなどでネタバレしないようにしてください。
              </li>
              <br />
              <li className="list-inside list-disc">
                このサイトは同時に多くのユーザーが閲覧しています。過度な更新を行うとサーバーに過剰な負荷がかかる恐れがあるため、ページが表示されない時にたくさん更新はしないでください。
              </li>
              <br />
              <li className="list-inside list-disc">
                ソースコードを閲覧して解く行為はお控えください。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Phase1
