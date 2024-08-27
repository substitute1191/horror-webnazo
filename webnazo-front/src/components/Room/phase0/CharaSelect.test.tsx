/* eslint-disable max-lines */
import CharaSelect from "./CharaSelect"
import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import * as jotai from "jotai"
import type * as react from "react"

jest.mock("react-router-dom", () => ({
  useParams: jest.fn((): { roomId: string } => ({ roomId: mockRoomId })),
}))
jest.mock("jotai", () => ({
  ...jest.requireActual<typeof jotai>("jotai"),
  useAtomValue: jest.fn((): string => mockUserId),
}))
jest.mock("react", () => ({
  ...jest.requireActual<typeof react>("react"),
  useContext: jest.fn(() => ({
    socket: { init: null },
    isConnected: false,
  })),
}))
jest.mock("./useCharaSelect", () => ({
  __esModule: true,
  default: () => mockUseCharaSelect(),
}))

const mockRoomId = "mock-room-id"
const mockUserId = "mock-user-id"
const mockUseCharaSelectState = {
  myChara: 0,
  otherChara: 0,
  handleChange: jest.fn(),
  isAllSelected: false,
}
const mockUseCharaSelect = jest.fn(() => mockUseCharaSelectState)

describe("CharaSelect単体のテスト", () => {
  const user = userEvent.setup()
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseCharaSelectState.myChara = 0
    mockUseCharaSelectState.otherChara = 0
    mockUseCharaSelectState.isAllSelected = false
  })

  it("ボタンのレンダリング確認", () => {
    render(<CharaSelect />)

    const player1 = screen.getByText("プレイヤー１")
    const player2 = screen.getByText("プレイヤー２")
    const hiddenStartButton = screen.queryByText("ゲームスタート")
    expect(player1).toBeInTheDocument()
    expect(player2).toBeInTheDocument()
    expect(hiddenStartButton).not.toBeInTheDocument()
  })

  it("スタートボタンの出現確認", () => {
    mockUseCharaSelectState.myChara = 1
    mockUseCharaSelectState.otherChara = 2
    mockUseCharaSelectState.isAllSelected = true

    const { container } = render(<CharaSelect />)

    const StartButton = screen.queryByText("ゲームスタート")

    expect(StartButton).toBeInTheDocument()
    expect(container).toMatchSnapshot("両プレイヤー選択後")
  })

  // TODO 一項目の粒度の見直し
  it("プレイヤー選択時の処理確認", async () => {
    const { rerender } = render(<CharaSelect />)
    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    // プレイヤー選択時にhandleChangeが呼ばれることの確認
    await user.click(player1)
    await waitFor(() =>
      expect(mockUseCharaSelectState.handleChange).toHaveBeenCalledWith(1)
    )

    // プレイヤー１を選択した状態でプレイヤー２選択時にhandleChangeが呼ばれることの確認
    mockUseCharaSelectState.myChara = 1
    rerender(<CharaSelect />)
    await user.click(player2)
    await waitFor(() =>
      expect(mockUseCharaSelectState.handleChange).toHaveBeenCalledWith(2)
    )

    // プレイヤー２を選択した状態でプレイヤー２選択時にhandleChangeが呼ばれないことの確認
    mockUseCharaSelectState.myChara = 2
    rerender(<CharaSelect />)
    await user.click(player2)
    await waitFor(() =>
      expect(mockUseCharaSelectState.handleChange).toHaveBeenCalledTimes(2)
    )
  })

  it("相手がプレイヤー１を選択しているときの処理確認", () => {
    mockUseCharaSelectState.otherChara = 1

    const { rerender } = render(<CharaSelect />)

    const player1 = screen.getByLabelText("プレイヤー１")
    const player2 = screen.getByLabelText("プレイヤー２")

    // 相手がプレイヤー１を選択時にこちらがプレイヤー１だけ選択できないことのテスト
    expect(player1).toBeDisabled()
    expect(player2).not.toBeDisabled()

    // 相手がプレイヤー２を選択しているときのテスト
    mockUseCharaSelectState.otherChara = 2
    rerender(<CharaSelect />)

    expect(player1).not.toBeDisabled()
    expect(player2).toBeDisabled()
  })

  it("初期状態のコンポーネントのスナップショットが一致する", () => {
    const { container } = render(<CharaSelect />)
    const StartButton = screen.queryByText("ゲームスタート")

    expect(StartButton).not.toBeInTheDocument()
    expect(container).toMatchSnapshot("初期状態")
  })
})
