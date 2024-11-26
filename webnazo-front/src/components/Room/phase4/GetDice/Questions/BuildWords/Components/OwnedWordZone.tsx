import useOwnedWord from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useOwnedWord"

export default function OwnedWordZone() {
  const { ownedWord } = useOwnedWord()

  return (
    <div className="absolute left-[15%] top-[10%] flex flex-col items-center">
      <span className="text-lg">所持中</span>
      <div className="flex h-16 w-16 items-center justify-center rounded border border-slate-400 text-blue-500">
        {ownedWord}
      </div>
    </div>
  )
}
