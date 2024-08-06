import rankmatchLogo from "@/assets/image/rankmatch_logo.png"
import pyramid from "@/assets/image/mascot/mascot.png"

const Phase1 = () => {
  return (
    <div className="bg-yumekawa bg-cover">
      <div className="bg-cyan-200 pt-7 w-3/5 mx-auto pb-52 font-pop">
        <h1>
          <img
            src={rankmatchLogo}
            alt="ランクマッチのロゴ"
            className="w-1/2 mx-auto mb-5 animate-float"
          />
        </h1>
        <div className="bg-white w-11/12 mx-auto border-stone-600 border-solid border-2 px-14 py-7">
          <h2 className="text-center text-6xl tracking-widest pb-5">
            このサイトは？
          </h2>
          <p className="bg-teal-100 text-left p-8 text-2xl">
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
          <p className="font-extrabold text-3xl text-center mt-14 mb-5">
            次回のゲームは<span className="text-red-500">8月1日21時</span>
            からスタート！
          </p>
          <div className="text-center">
            <button className="border-solid border-2 w-full border-stone-600 bg-zinc-200 text-7xl text-center px-3 py-7">
              ゲームに参加する
            </button>
          </div>
          <div>
            <h3 className="text-6xl mt-16 mb-7">前回の成績優秀者</h3>
            <ul className="leading-loose mb-6">
              <li className="text-8xl mb-7">○○さん</li>
              <li className="text-6xl mb-7">○○さん</li>
              <li className="text-4xl">○○さん</li>
            </ul>
          </div>
          <div>
            <img src={pyramid} alt="ピラミッド君" className="mx-auto mb-10" />
            <h3 className="text-center text-5xl">ピラミッド君</h3>
            <p className="mt-8 mb-20 text-2xl">
              このサイトのマスコットキャラクター。謎で頂点を目指すユーザーの皆を応援している。可愛い外見で毒のあることを言うという自己認識を持っているが、そもそも自分が可愛くないことに気づいていない。
              <br />
              オカルトが大の苦手であり、心霊スポットなどお化けが出そうなところからはすぐに逃げ出してしまう。
              <br />
              そのためピラミッドが王族の墓として作られたという通説を真っ赤なデマであるとして強く否定している。
            </p>
          </div>
          <div>
            <h3 className="text-center text-5xl mb-10">注意事項</h3>
            <ul className="text-2xl">
              {/*
              デフォルトでリストの点がなかったため、
              list-discで点をつけている
              （検証したブラウザはEdgeとChrome）
              */}
              <li className="list-disc list-inside">
                シーズン中は謎の回答をSNSなどでネタバレしないようにしてください。
              </li>
              <br />
              <li className="list-disc list-inside">
                このサイトは同時に多くのユーザーが閲覧しています。過度な更新を行うとサーバーに過剰な負荷がかかる恐れがあるため、ページが表示されない時にたくさん更新はしないでください。
              </li>
              <br />
              <li className="list-disc list-inside">
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
