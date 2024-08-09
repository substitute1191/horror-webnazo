/* eslint-disable max-lines-per-function */
import rankmatchLogo from "@/assets/image/rankmatch_logo.png"
import pyramid from "@/assets/image/mascot/mascot.png"
import rank1 from "@/assets/image/ranking/rank_1.png"
import rank2 from "@/assets/image/ranking/rank_2.png"
import rank3 from "@/assets/image/ranking/rank_3.png"
import useProceed from "../useProceed"
import useBGM from "@/SoundManager/useBGM"
import bgmSrc from "@/assets/sound/pom_pom_shower.mp3"
import { useEffect } from "react"

const Phase1 = () => {
  const { proceed } = useProceed()
  const { play, pause } = useBGM(bgmSrc)

  useEffect(() => {
    void play()
    return () => {
      pause()
    }
  })

  return (
    <div className="bg-yumekawa bg-white/40 bg-cover bg-blend-color">
      <div className="font-pop mx-auto w-3/5 border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7">
        <h1>
          <img
            src={rankmatchLogo}
            alt="ランクマッチのロゴ"
            className="animate-float mx-auto mb-5 w-1/2"
          />
        </h1>
        <div className="mx-auto w-11/12 rounded-2xl border border-solid border-fuchsia-200 bg-white px-2 py-2">
          <div className="rounded-2xl border-2 border-dashed border-fuchsia-200 px-12 py-5">
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
                className="flex w-full transform items-center justify-between rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-7 text-center text-7xl font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
                onClick={() => proceed(2)}
              >
                <span className="flex-grow text-center">ゲームに参加する</span>
                <i className="fas fa-angle-right mr-5"></i>
              </button>
            </div>
            <div className="mb-20 mt-16 bg-pink-100 p-12">
              <h3 className="mb-7 text-6xl">前回の成績優秀者</h3>
              <ul className="leading-loose">
                <li className="flex text-6xl">
                  <img src={rank1} alt="一位" className="w-48" />
                  <span className="mb-10 mt-auto">
                    知的生命体YOSHIO <span className="text-4xl">さん</span>
                  </span>
                </li>
                <li className="mb-7 flex pl-8 text-5xl">
                  <img src={rank2} alt="二位" className="w-32" />
                  <span className="mb-7 ml-3 mt-auto">
                    北亨夏高校クイ研 <span className="text-[2rem]">さん</span>
                  </span>
                </li>
                <li className="flex pl-14 text-4xl">
                  <img src={rank3} alt="三位" className="w-20" />
                  <span className="mb-4 ml-7 mt-auto">
                    ゆ（＠ω＠） <span className="text-3xl">さん</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="mb-20 bg-red-50 p-12">
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
            <div className="bg-orange-100 p-12">
              <h3 className="mb-10 text-center text-5xl">注意事項</h3>
              <ul className="text-2xl">
                <li className="list-inside list-disc">
                  シーズン中は謎の回答をSNSなどでネタバレしないようにしてください。
                </li>
                <br />
                <li className="list-inside list-disc">
                  このサイトは同時に多くのユーザーが閲覧しています。過度な更新を行うとサーバーに過剰な負荷がかかる恐れがあるため、ページが表示されない時にたくさん更新はしないでください。
                </li>
                <br />
                <li className="list-inside list-disc">
                  サイトが落ちてしまったときは、5分程度で正常に戻りますので更新せずにそのままお待ちください。
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
    </div>
  )
}
export default Phase1
