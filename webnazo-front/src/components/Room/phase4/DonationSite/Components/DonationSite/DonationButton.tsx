type Props = {
  text: string
  classNames?: string
  onClick?: () => void
}

export default function DonationButton({ text, classNames, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${classNames} mx-4 my-2 h-16 rounded border border-slate-400 px-4 py-4 text-xl text-slate-800 shadow-md`}
    >
      {text}
    </button>
  )
}
