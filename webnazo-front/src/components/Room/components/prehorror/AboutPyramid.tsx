import pyramid from "@/assets/image/mascot/mascot.png"
import CollectableChara from "./Questions/Question2/CollectableChara"

const AboutPyramid = () => {
  return (
    <div className="mb-20 bg-red-50 p-12">
      <img src={pyramid} alt="ピラミッド君" className="mx-auto mb-10" />
      <h3 className="text-center text-5xl">ピラミッド君</h3>
      <p className="mt-8 text-2xl">
        このサイトのマスコットキャラクター。謎で頂点を目指すユーザーの皆を応援している。可愛い外見で毒のあることを言うという自己認識を持っているが、そもそも自分が可愛くないことに気づいていない。
        <br />
        オカルトが大の苦手であり、お化けが出そうな場所からはすぐ逃げ出してしまう。
        <br />
        そのためピラミッドが王族の墓として作られたという通説を真っ赤なデマであるとして強く否定している。
        <br />
        座右の銘は「
        <CollectableChara chara="ぎ" />
        りぎりでいつも生きていたいから」。
      </p>
    </div>
  )
}

export default AboutPyramid
