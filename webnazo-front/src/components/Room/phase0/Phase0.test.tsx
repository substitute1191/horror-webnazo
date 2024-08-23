/* eslint-disable max-lines */
import CharaSelect from "./CharaSelect"
import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import api from "@/utils/api"
import { SocketContext } from "../socketContext"
import React, { act } from "react"
import * as jotai from "jotai"
import { getDefaultStore } from "jotai"
import { RESET } from "jotai/utils"
import {
  myCharaAtom,
  otherCharaAtom,
  isAllSelectedAtom,
} from "@/atoms/roomAtoms"
import { Socket } from "socket.io-client"

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(() => ({ roomId: mockRoomId })),
}))
jest.mock("jotai", () => ({
  ...jest.requireActual<typeof jotai>("jotai"),
  useSetAtom: jest.fn(),
}))

const mockRoomId = "mock-room-id"

const createWrapper =
  (mockSocket: Socket) =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <SocketContext.Provider value={{ socket: mockSocket, isConnected: true }}>
        {children}
      </SocketContext.Provider>
    )
  }

// TODO 「プレイヤー１」「プレイヤー２」の取得をまとめる
describe("Phase0のテスト", () => {
  let mockSetPhase: jest.Mock
  let mockSocket: Partial<Socket>
  let wrapper: ({ children }: { children: React.ReactNode }) => JSX.Element
  const user = userEvent.setup()
  const apiPost = jest.spyOn(api, "post").mockResolvedValue({})

  beforeEach(() => {
    mockSetPhase = jest.fn()
    jest.spyOn(jotai, "useSetAtom").mockReturnValue(mockSetPhase)

    mockSocket = {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    }

    wrapper = createWrapper(mockSocket as Socket)
  })

  afterEach(() => {
    jest.clearAllMocks()

    const store = getDefaultStore()
    act(() => {
      store.set(myCharaAtom, RESET)
      store.set(otherCharaAtom, RESET)
      store.set(isAllSelectedAtom, RESET)
    })
  })

  it("キャラクター選択時の処理確認", async () => {
    render(<CharaSelect />, { wrapper })
    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    await user.click(player1)

    await waitFor(() => {
      expect(apiPost).toHaveBeenCalledWith(`/room/${mockRoomId}/selectPlayer`, {
        userId: expect.any(String) as string,
        chara: 1,
      })
      expect(
        mockSocket.emit as jest.MockedFunction<Socket["emit"]>
      ).toHaveBeenCalledWith("selectChara", {
        roomId: mockRoomId,
        chara: 1,
      })
      expect(player1).toBeChecked()
      expect(player2).not.toBeChecked()
    })
  })

  it("自分で選んだキャラクターを再度選択しても処理が起こらないことの確認", async () => {
    render(<CharaSelect />)
    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    await user.click(player1)
    await waitFor(() => expect(apiPost).toHaveBeenCalledTimes(1))
    expect(player2).not.toBeDisabled()

    await user.click(player1)
    await waitFor(() => expect(apiPost).toHaveBeenCalledTimes(1))
    expect(player2).not.toBeDisabled()
  })

  it("キャラクターを選択しなおせることの確認", async () => {
    render(<CharaSelect />)
    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    await user.click(player1)
    await waitFor(() => expect(player1).toBeChecked())
    expect(player2).not.toBeChecked()

    await user.click(player2)
    await waitFor(() => expect(player1).not.toBeChecked())
    expect(player2).toBeChecked()
  })

  it("ほかのプレイヤーが選んだキャラは選択できないことの確認", () => {
    render(<CharaSelect />, { wrapper })
    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    const [[, onSelectedCallback]] = (
      mockSocket.on as jest.MockedFunction<Socket["on"]>
    ).mock.calls
    act(() => {
      onSelectedCallback(2)
    })

    expect(player1).not.toBeDisabled()
    expect(player2).toBeDisabled()
  })

  it("「ゲームスタート」ボタンを押すとproceed関数が実行されることの確認", async () => {
    apiPost.mockResolvedValue({
      data: {
        phase: 1,
      },
    })

    const { rerender } = render(<CharaSelect />, { wrapper })
    const player1 = screen.getByLabelText("プレイヤー１")
    const [[, onSelectedCallback]] = (
      mockSocket.on as jest.MockedFunction<Socket["on"]>
    ).mock.calls
    act(() => {
      onSelectedCallback(2)
    })

    await user.click(player1)
    rerender(<CharaSelect />)

    const startButton = screen.queryByText("ゲームスタート")
    await waitFor(() => expect(startButton).toBeInTheDocument())
    await user.click(startButton as HTMLElement)

    await waitFor(() => {
      expect(apiPost).toHaveBeenCalledWith(`/room/${mockRoomId}/proceed`, {
        phase: 1,
      })
      expect(mockSetPhase).toHaveBeenCalledWith(1)
      expect(mockSocket.emit).toHaveBeenCalledWith("proceed", {
        roomId: mockRoomId,
        phase: 1,
      })
    })
  })
})
