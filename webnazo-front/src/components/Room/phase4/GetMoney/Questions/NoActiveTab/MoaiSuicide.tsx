import Door from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/Door"
import useCountupMsgEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useCountUpMsgEnd"
import SequentialMoai from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/SequentialMoai"

export default function MoaiSuicide() {
  const { countupMsgEnd } = useCountupMsgEnd()

  return (
    <div>
      <Door />
      {countupMsgEnd ? <SequentialMoai /> : null}
    </div>
  )
}
