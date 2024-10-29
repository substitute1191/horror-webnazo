import useDonate from "../../Hooks/useDonate"
import DonationButton from "./DonationButton"

type Props = {
  classNames?: string
}

export default function DonationButtons({ classNames }: Props) {
  const { handleDonate } = useDonate()

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
      />
    </div>
  )
}
