import { atom, useAtom } from "jotai"

const isAlertAtom = atom(false)
const alertMsgAtom = atom("")
const alertClsAtom = atom("")

export default function useAlert() {
  const [isAlert, setIsAlert] = useAtom(isAlertAtom)
  const [alertMsg, setAlertMsg] = useAtom(alertMsgAtom)
  const [alertCls, setAlertCls] = useAtom(alertClsAtom)

  return {
    isAlert,
    setIsAlert,
    alertMsg,
    setAlertMsg,
    alertCls,
    setAlertCls,
  }
}
