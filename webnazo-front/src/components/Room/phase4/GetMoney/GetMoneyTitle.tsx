import BlackoutChar from "@/components/Room/phase4/TextAnim/BlackoutChar"

export default function GetMoneyTitle() {
  return (
    <h2 className="font-DelaGothicOne mb-12 mt-8 text-5xl text-white">
      {"100万円をゲットせよ！".split("").map((char, idx) => (
        <BlackoutChar key={idx} char={char} />
      ))}
    </h2>
  )
}
