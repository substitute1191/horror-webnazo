import RandomSkewChar from "@/components/Room/phase4/TextAnim/RandomSkewChar"

export default function PhoneTranslate() {
  return (
    <div className="text-7xl">
      <div className="absolute left-[20%] top-[30%]">
        <RandomSkewChar char="か" />
        <RandomSkewChar char="か" />
        <RandomSkewChar char="か" />
        <RandomSkewChar char="→" />
        <RandomSkewChar char="C" />
      </div>
      <div className="absolute left-[50%] top-[45%] text-blue-700">
        <RandomSkewChar char="ま" />
        <RandomSkewChar char="ま" />
        <RandomSkewChar char="ま" />
        <RandomSkewChar char="ま" />
        <RandomSkewChar char="→" />
        <RandomSkewChar char="S" />
      </div>
      <div className="absolute left-[25%] top-[65%] text-orange-800">
        <RandomSkewChar char="あ" />
        <RandomSkewChar char="→" />
        <RandomSkewChar char="@" />
      </div>
      <div className="absolute left-[55%] top-[70%] text-purple-700">
        <RandomSkewChar char="な" />
        <RandomSkewChar char="な" />
        <RandomSkewChar char="→" />
        <span>2⃣</span>
      </div>
    </div>
  )
}
