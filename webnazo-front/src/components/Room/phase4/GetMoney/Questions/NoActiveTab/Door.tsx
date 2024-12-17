import door from "@/assets/image/imprisonment/door.png"
import useIsOpenDoor from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsOpenDoor"
import kubitsuri from "@/assets/image/imprisonment/首吊り縄.png"
import cell from "@/assets/image/imprisonment/cell_purple.gif"
import { useEffect, useRef } from "react"
import useDoorPos from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useDoorPos"

export default function Door() {
  const { isOpenDoor } = useIsOpenDoor()
  const doorRef = useRef<HTMLImageElement>(null)
  const { setDoorPos } = useDoorPos()

  useEffect(() => {
    if (doorRef.current !== null) {
      setDoorPos({
        top: doorRef.current.getBoundingClientRect().bottom,
        left: doorRef.current.getBoundingClientRect().left,
        right: doorRef.current.getBoundingClientRect().right,
      })
    }
  }, [setDoorPos])

  return (
    <>
      {!isOpenDoor ? (
        <img
          ref={doorRef}
          className="absolute left-[20%] top-[35%] h-[17rem] w-40"
          src={door}
          alt=""
        />
      ) : (
        <div
          ref={doorRef}
          className="absolute left-[20%] top-[35%] h-[17rem] w-40 overflow-hidden"
        >
          <div className="absolute h-full w-full bg-black"></div>
          <img
            src={kubitsuri}
            className="absolute -top-1 origin-top animate-[swing_7s_ease-in-out_infinite]"
            alt=""
          />
          <img
            src={cell}
            className="absolute h-full w-full object-cover opacity-50"
            alt=""
          />
        </div>
      )}
    </>
  )
}
