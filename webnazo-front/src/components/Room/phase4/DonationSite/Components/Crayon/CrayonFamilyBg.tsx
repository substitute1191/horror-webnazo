import { ReactNode } from "react"

type Props = {
  children: ReactNode
  classNames?: string
}

export default function CrayonFamilyBg({ children, classNames }: Props) {
  return (
    <div
      id="family"
      className={`bg-crayon-bg absolute left-[50%] top-[50%] h-[400px] min-w-[600px] bg-contain bg-center bg-no-repeat ${classNames}`}
    >
      {children}
    </div>
  )
}
