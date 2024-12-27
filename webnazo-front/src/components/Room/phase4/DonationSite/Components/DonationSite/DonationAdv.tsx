import kidsAdv from "@/assets/image/imprisonment/募金広告.jpg"
import DonationSite from "./DonationSite"
import useIsShowDonationSite from "@/components/Room/phase4/DonationSite/Hooks/useIsShowDonation"
import noise from "@/assets/image/imprisonment/n06_フィルム風ノイズ黒.png"
import dark from "@/assets/image/imprisonment/n12_周辺減光黒.png"
import useNoHelp from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useNoHelp"
import NoHelpWarning from "@/components/Room/phase4/DonationSite/Components/DonationSite/NoHelpWarning"

export default function DonationAdv() {
  const { isShowDonationSite, setIsShowDonationSite } = useIsShowDonationSite()
  const { noHelp } = useNoHelp()

  return (
    <>
      <button
        className="absolute bottom-0 block"
        onClick={() => setIsShowDonationSite(true)}
      >
        <img src={dark} alt="" className="z-1 absolute h-[36vh] w-[30vw]" />
        <img src={noise} alt="" className="z-1 absolute h-[36vh] w-[30vw]" />
        <img src={kidsAdv} alt="" className="object-fit h-[36vh] w-[30vw]" />
      </button>
      {isShowDonationSite && !noHelp ? <DonationSite /> : null}
      {noHelp ? <NoHelpWarning /> : null}
    </>
  )
}
