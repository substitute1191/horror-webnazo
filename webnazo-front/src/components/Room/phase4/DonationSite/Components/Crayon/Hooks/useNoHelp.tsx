import { isShowDonationSiteAtom } from "@/components/Room/phase4/DonationSite/Hooks/useIsShowDonation"
import { atom, useAtom } from "jotai"

// 女の子を見捨てた時に出すアニメーションを管理するHooks
const noHelpAtom = atom(false)
const toggleNoHelpAtom = atom(
  (get) => get(noHelpAtom),
  (_get, set) => {
    set(noHelpAtom, true)
    set(isShowDonationSiteAtom, false)
    setTimeout(() => set(noHelpAtom, false), 3000)
  }
)

export default function useNoHelp() {
  const [noHelp, toggleNoHelp] = useAtom(toggleNoHelpAtom)

  return {
    noHelp,
    toggleNoHelp,
  }
}
