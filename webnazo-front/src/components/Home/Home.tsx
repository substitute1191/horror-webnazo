import CharacterFlicker from "./CharacterFlicker"
import MusicPrompt from "./MusicPrompt"
import StartButton from "./StartButton"
import useHome from "./useHome"

// TODO 音楽を再生するか否かの状態をグローバルに管理する状態を作成する
const Home = () => {
  const { showPrompt, handleAccept, handleDecline } = useHome()

  return (
    <div className="relative w-full h-screen">
      {/* <FoggyImage src={bgimageSrc} /> */}
      <div className="bg-home-bg object-fit bg-cover absolute inset-0 flex flex-col justify-center items-center">
        {showPrompt ? (
          <MusicPrompt onAccept={handleAccept} onDecline={handleDecline} />
        ) : null}
        <div className="p-2 text-5xl place-content-center font-onryou text-white self-center">
          Web
          <CharacterFlicker
            origin="謎"
            sometime={["縺", "死", "虚", "繧", "ュ", "恨", "苦"]}
            sometimeClassName={[
              "",
              "transform rotate-180 text-black",
              "transform rotate-90 text-black",
              "transform rotate-270 text-black",
            ]}
            probability={0.2}
          />
          へ
          <CharacterFlicker
            origin="よ"
            sometime={["%", "ラ"]}
            sometimeClassName={["text-black"]}
            probability={0.02}
          />
          う
          <CharacterFlicker
            origin="こ"
            sometime={["■", "Σ"]}
            sometimeClassName={[""]}
            probability={0.05}
          />
          そ
        </div>
        <StartButton />
      </div>
    </div>
  )
}

export default Home
