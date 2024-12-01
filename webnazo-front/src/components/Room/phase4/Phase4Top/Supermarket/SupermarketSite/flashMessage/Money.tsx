import { isMillionaireAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"

export default function Money() {
  const isMillionaire = useAtomValue(isMillionaireAtom)
  return (
    <>
      {isMillionaire ? (
        <div className="font-isekai rounded-3xl p-7 text-5xl font-extrabold text-green-700">
          1000000円持っている
        </div>
      ) : (
        <div className="font-isekai rounded-3xl p-7 text-5xl font-extrabold text-red-900">
          お金を持っていな縺?Κ繧ｦ繝?
        </div>
      )}
    </>
  )
}
