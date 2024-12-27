import FlickChar from "@/components/Room/phase4/TextAnim/FlickChar"
import playbtn from "@/assets/image/imprisonment/再生ボタン.png"
import HorrorVideo from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/HorrorVideo"
import useIsVideoStart from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsVideoStart"
import useIsSeen from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsSeen"
import useIsPlayedVideo from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsPlayedVideo"

export default function NoActiveTab() {
  const { isVideoStart, handleClickPlayBtn } = useIsVideoStart()
  const { isSeen } = useIsSeen()
  const { isPlayedVideo } = useIsPlayedVideo()

  return (
    <>
      {isVideoStart ? <HorrorVideo /> : null}
      <div className="flex flex-col items-center text-white">
        <h3 className="absolute top-[20%] mt-12 text-4xl font-extrabold">
          {"見たら呪われるビデオを再生する".split("").map((char, idx) => (
            <FlickChar
              key={idx}
              char={char}
              origin="text-red-700"
              sometime="text-red-900"
            />
          ))}
        </h3>
        <div className="mb-4 flex h-[20rem] w-[40rem] items-center justify-center rounded bg-black">
          <button onClick={handleClickPlayBtn}>
            <img className="w-40" src={playbtn} alt="" />
          </button>
        </div>

        <div className="text-2xl">
          {!isSeen && isPlayedVideo
            ? "答えはD"
                .split("")
                .map((char, idx) => (
                  <FlickChar
                    key={idx}
                    char={char}
                    origin="text-yellow-700"
                    sometime="text-yellow-900"
                  />
                ))
            : "呪われなければ答えをゲット！"
                .split("")
                .map((char, idx) => (
                  <FlickChar
                    key={idx}
                    char={char}
                    origin="text-yellow-700"
                    sometime="text-yellow-900"
                  />
                ))}
        </div>
      </div>
    </>
  )
}
