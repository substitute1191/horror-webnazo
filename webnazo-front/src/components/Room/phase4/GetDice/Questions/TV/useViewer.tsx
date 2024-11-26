import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const viewerAtom = atomWithStorage("TVViewer", 0)

export default function useViewer() {
  const [viewer, setViewer] = useAtom(viewerAtom)

  return {
    viewer,
    setViewer,
  }
}
