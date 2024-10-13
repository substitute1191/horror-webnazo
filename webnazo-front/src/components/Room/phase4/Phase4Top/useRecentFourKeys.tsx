import { atom, useAtom } from "jotai"

const keysAtom = atom("")

// 直近の４文字の押されたキーを保持するアトム
const recenetFourKeysAtom = atom(
  (get) => get(keysAtom),
  (get, set, newKey: string) => {
    const curKeys = get(keysAtom)
    // アルファベットと数字以外のキーを検出しない
    if (newKey.length !== 1) return
    console.info(`curKeys: ${curKeys}, newKey: ${newKey}`)
    if (curKeys.length >= 4) {
      set(keysAtom, `${curKeys.slice(1, 4)}${newKey}`)
    } else {
      set(keysAtom, `${curKeys}${newKey}`)
    }
  }
)

export default function useRecentFourKeys() {
  const [recentFourKeys, setRecentFourKeys] = useAtom(recenetFourKeysAtom)

  return {
    recentFourKeys,
    setRecentFourKeys,
  }
}
