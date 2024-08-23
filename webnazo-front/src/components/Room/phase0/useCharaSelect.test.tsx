/* eslint-disable max-lines */
import { renderHook, act } from "@testing-library/react"
import { useParams } from "react-router-dom"
import { SocketContext } from "../socketContext"
import useCharaSelect from "./useCharaSelect"
import * as jotai from "jotai"
import api from "@/utils/api"
import { Atom } from "jotai"
import {
  myCharaAtom,
  otherCharaAtom,
  userIdAtom,
  checkAllSelectedAtom,
} from "@/atoms/roomAtoms"
import { Socket } from "socket.io-client"

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}))
// jest.mock('@/utils/api', () => ({
//     post: jest.fn(),
// }))
jest.mock("@/atoms/roomAtoms", () => ({
  myCharaAtom: { init: null },
  otherCharaAtom: { init: null },
  userIdAtom: { init: "" },
  checkAllSelectedAtom: { init: false },
}))
jest.mock("jotai", () => ({
  useAtom: jest.fn(),
  useAtomValue: jest.fn(),
}))

const mockRoomId = "mock-room-id"
const mockUserId = "mock-user-id"

const createWrapper =
  (mockSocket: Socket) =>
  ({ children }: { children: React.ReactNode }) => (
    <SocketContext.Provider value={{ socket: mockSocket, isConnected: true }}>
      {children}
    </SocketContext.Provider>
  )

describe("useCharaSelect", () => {
  let mockSocket: Partial<Socket>
  let mockSetMyChara: jest.Mock
  let mockSetOtherChara: jest.Mock
  let mockCheckAllSelected: jest.Mock
  let wrapper: ({ children }: { children: React.ReactNode }) => JSX.Element
  const apiPost = jest.spyOn(api, "post")

  beforeEach(() => {
    mockSocket = {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    }

    mockSetMyChara = jest.fn()
    mockSetOtherChara = jest.fn()
    mockCheckAllSelected = jest.fn()

    wrapper = createWrapper(mockSocket as Socket)

    apiPost.mockResolvedValue({})
    ;(jotai.useAtom as jest.Mock).mockImplementation((atom: Atom<unknown>) => {
      if (atom === myCharaAtom) return [0, mockSetMyChara]
      if (atom === otherCharaAtom) return [0, mockSetOtherChara]
      if (atom === checkAllSelectedAtom) return [false, mockCheckAllSelected]
      return [null, jest.fn()]
    })
    ;(jotai.useAtomValue as jest.Mock).mockImplementation(
      (atom: Atom<unknown>) => {
        if (atom === userIdAtom) return mockUserId
        return null
      }
    )
    ;(useParams as jest.Mock).mockReturnValue({ roomId: mockRoomId })
  })

  it("テスト環境の初期化の確認", () => {
    const { result } = renderHook(() => useCharaSelect(), { wrapper })

    expect(result.current.myChara).toBe(0)
    expect(result.current.otherChara).toBe(0)
    expect(result.current.isAllSelected).toBeFalsy()
    expect(typeof result.current.handleChange).toBe("function")
  })

  it("初回レンダリング時にsocket.onが呼ばれる", () => {
    renderHook(() => useCharaSelect(), { wrapper })

    expect(mockSocket.on).toHaveBeenCalledWith("selected", expect.any(Function))
    const onSelectedCallback = (
      mockSocket.on as jest.MockedFunction<Socket["on"]>
    ).mock.calls[0][1]
    act(() => {
      onSelectedCallback(2)
    })
    expect(mockSetOtherChara).toHaveBeenCalledWith(2)
  })

  it("handleChange実行時の処理確認", () => {
    const { result } = renderHook(() => useCharaSelect(), { wrapper })

    act(() => {
      result.current.handleChange(1)
    })

    expect(apiPost).toHaveBeenCalledWith(`/room/${mockRoomId}/selectPlayer`, {
      userId: mockUserId,
      chara: 1,
    })
    expect(mockSocket.emit).toHaveBeenCalledWith("selectChara", {
      roomId: mockRoomId,
      chara: 1,
    })
    expect(mockSetMyChara).toHaveBeenCalledWith(1)
  })

  it("should check if all players are selected", () => {
    ;(jotai.useAtom as jest.Mock).mockImplementation((atom: Atom<unknown>) => {
      if (atom === myCharaAtom) return [1, mockSetMyChara]
      if (atom === otherCharaAtom) return [2, mockSetOtherChara]
      if (atom === checkAllSelectedAtom) return [true, mockCheckAllSelected]
      return [null, jest.fn()]
    })

    const { result } = renderHook(() => useCharaSelect(), { wrapper })

    expect(result.current.isAllSelected).toBeTruthy()
  })

  it("アンマウント時にクリーンアップ関数が実行される", () => {
    const { unmount: u } = renderHook(() => useCharaSelect(), { wrapper })
    const unmount = u
    act(() => {
      unmount()
    })
    expect(mockSocket.off).toHaveBeenCalledWith("selected")
  })
})
