import useDonate from "@/components/Room/phase4/DonationSite/Hooks/useDonate"
import DonationButton from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationButton"
import useNoHelp from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useNoHelp"

type Props = {
  classNames?: string
}

export default function DonationButtons({ classNames }: Props) {
  const { handleDonate } = useDonate()
  const { toggleNoHelp } = useNoHelp()

  return (
    <div
      className={`${classNames} absolute left-[50%] top-[80%] mt-4 w-full -translate-x-[50%] text-center`}
    >
      <DonationButton
        text={"喜んで100万円を寄付する"}
        classNames="bg-pink-300"
        onClick={() => void handleDonate()}
      />
      <DonationButton
        text={"女の子が死のうと興味が無いので見捨てる"}
        classNames="bg-blue-300"
        onClick={() => toggleNoHelp()}
      />
    </div>
  )
}
