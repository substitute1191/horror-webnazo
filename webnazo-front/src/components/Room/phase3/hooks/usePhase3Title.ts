import { atom, useAtom } from "jotai"

const phase3TitlePhrases = [
  "ゲームクリア！",
  "ゲーアリムク！",
  "ゲ！ームクアリ",
  "ゲ縺ムクリア！",
  "ゲ縺ムク累ア？",
  "ゲ縺ﾑｸ羽＾ア！",
  "ゲ繝ｼ繝?繧ｯ繝ｪア！",
  "繧ｲ繝ム?繧ｯ繝ｪ繧｢?",
  "繧ｲ繝ｼ繝?繧ｯ繝ｪ繧｢?",
]

const phase3TitleAtom = atom<string>("ゲームクリア！")
const derivedPhase3TitleAtom = atom(
  (get) => get(phase3TitleAtom),
  (_get, set, currentImg: number) => {
    if (currentImg < phase3TitlePhrases.length)
      set(phase3TitleAtom, phase3TitlePhrases[currentImg])
  }
)

const usePhase3Title = () => {
  const [phase3Title, changePhase3Title] = useAtom(derivedPhase3TitleAtom)

  return {
    phase3Title,
    changePhase3Title,
  }
}

export default usePhase3Title
