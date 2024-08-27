import Phase1 from "./Phase1"
import { render, screen, waitFor } from "@testing-library/react"
import api from "@/utils/api"
import userEvent from "@testing-library/user-event"
import { act } from "react"

jest.mock("@/assets/image/rankmatch_logo.png", () => "rankmatch_logo.png")
jest.mock("@/assets/image/mascot/mascot.png", () => "mascot.png")
jest.mock("@/assets/image/ranking/rank_1.png", () => "rank_1.png")
jest.mock("@/assets/image/ranking/rank_2.png", () => "rank_2.png")
jest.mock("@/assets/image/ranking/rank_3.png", () => "rank_3.png")

jest.mock("@/assets/sound/pom_pom_shower.mp3", () => "mocked-bgm-file")
jest.mock("@/assets/sound/決定ボタンを押す53.mp3", () => "mocked-bgm-file")

const mockPlay = jest.fn(() => Promise.resolve())
const mockPause = jest.fn()
jest.mock("@/SoundManager/useBGM", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    play: mockPlay,
    pause: mockPause,
  })),
}))

jest.mock("@/SoundManager/useSE", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    play: mockPlay,
    pause: mockPause,
  })),
}))

const mockRoomId = "test-room-id"
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(() => ({ roomId: mockRoomId })),
}))

describe("Phase1 component", () => {
  const user = userEvent.setup()
  const apiPost = jest.spyOn(api, "post")

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("マウント時とアンマウント時にそれぞれplay()とpause()が実行されることの確認", () => {
    const { unmount: u } = render(<Phase1 />)
    const unmount = u
    expect(mockPlay).toHaveBeenCalledTimes(1)

    act(() => {
      unmount()
    })
    expect(mockPause).toHaveBeenCalledTimes(1)
  })

  it("子コンポーネントのレンダリング確認", () => {
    render(<Phase1 />)
    const siteDescription = screen.getByText("このサイトは？")
    const highAchiever = screen.getByText("知的生命体YOSHIO")
    const aboutPyramid = screen.getByText("ピラミッド君")
    const precautions = screen.getByText("注意事項")

    expect(siteDescription).toBeInTheDocument()
    expect(highAchiever).toBeInTheDocument()
    expect(aboutPyramid).toBeInTheDocument()
    expect(precautions).toBeInTheDocument()
  })

  it("「ゲームに参加する」ボタンを押すとproceedが呼ばれる", async () => {
    ;(api.post as jest.MockedFunction<typeof api.post>).mockResolvedValue({
      data: { phase: 2 },
    })

    render(<Phase1 />)

    const joinGame = screen.getByText("ゲームに参加する")
    expect(joinGame).toBeInTheDocument()

    await user.click(joinGame)

    await waitFor(() => {
      expect(apiPost).toHaveBeenCalledWith(`/room/${mockRoomId}/proceed`, {
        phase: 2,
      })
    })
  })

  it("コンポーネントのスナップショットが一致する", () => {
    const { container } = render(<Phase1 />)
    expect(container).toMatchSnapshot()
  })
})
