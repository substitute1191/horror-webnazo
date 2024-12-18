import { atom, useAtom } from "jotai"

export const isShowDonationSiteAtom = atom(false)

export default function useIsShowDonationSite() {
  const [isShowDonationSite, setIsShowDonationSite] = useAtom(
    isShowDonationSiteAtom
  )

  return {
    isShowDonationSite,
    setIsShowDonationSite,
  }
}
