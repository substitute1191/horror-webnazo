import kidsAdv from "@/assets/image/imprisonment/募金広告.jpg"
import DonationSite from "./DonationSite"
import useIsShowDonationSite from "../../Hooks/useIsShowDonation"

export default function DonationAdv() {
  const { isShowDonationSite, setIsShowDonationSite } = useIsShowDonationSite()

  return (
    <>
      <button
        className="absolute bottom-0 block w-[30vw]"
        onClick={() => setIsShowDonationSite(true)}
      >
        <img src={kidsAdv} alt="" className="object-fit" />
      </button>
      {isShowDonationSite ? <DonationSite /> : null}
    </>
  )
}
