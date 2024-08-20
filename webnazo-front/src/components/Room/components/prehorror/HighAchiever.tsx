import rank1 from "@/assets/image/ranking/rank_1.png"
import rank2 from "@/assets/image/ranking/rank_2.png"
import rank3 from "@/assets/image/ranking/rank_3.png"
import CollectableChara from "./CollectableChara"

const HighAchierver = () => {
  return (
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
            <CollectableChara chara="ざ" />
            （＠ω＠） <span className="text-3xl">さん</span>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default HighAchierver
