import ShuffleNumber from "./ShuffleNumber"

export default function BrokenDrumroll() {
  return (
    <div className="w-120 absolute left-[15rem] top-[30rem] z-40 mt-12 animate-[fadein-up_0.7s_linear] rounded border border-pink-800 bg-black bg-opacity-70 p-12 text-center">
      <span className="font-pop text-3xl text-white">豌励↓縺ｪ繧矩??ｽ阪??</span>
      <div className="text-white">
        <ShuffleNumber display="هل هناك أي معنى" classNames="text-4xl" />
      </div>
    </div>
  )
}
