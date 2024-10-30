import CrayonFamilyBg from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonFamilyBg"
import CrayonBoy from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonHuman/CrayonBoy"
import CrayonGirl from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonHuman/CrayonGirl"
import CrayonMama from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonHuman/CrayonMama"
import CrayonPapa from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonHuman/CrayonPapa"

export default function CrayonFamily({ classNames }: { classNames?: string }) {
  return (
    <CrayonFamilyBg classNames={classNames}>
      <CrayonBoy />
      <CrayonGirl />
      <CrayonPapa />
      <CrayonMama />
    </CrayonFamilyBg>
  )
}
