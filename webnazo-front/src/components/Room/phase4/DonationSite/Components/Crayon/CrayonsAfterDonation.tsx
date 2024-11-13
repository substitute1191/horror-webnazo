import CrayonsAfterStolen from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonsAfterStolen"
import CrayonsWithMillionYen from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonsWithMillionYen"
import useGirlDeathState from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useGirlDeathState"

export default function CrayonsAfterDonation() {
  const { isGirlDying } = useGirlDeathState()

  return <>{isGirlDying ? <CrayonsAfterStolen /> : <CrayonsWithMillionYen />}</>
}
