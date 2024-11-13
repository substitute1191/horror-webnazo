import { atom, useAtom } from "jotai"

const isShowDonationSiteAtom = atom(false)

export default function useIsShowDonationSite() {
  const [isShowDonationSite, setIsShowDonationSite] = useAtom(
    isShowDonationSiteAtom
  )

  return {
    isShowDonationSite,
    setIsShowDonationSite,
  }
}
