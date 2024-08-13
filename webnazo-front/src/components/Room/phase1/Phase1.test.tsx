import Phase1 from "./Phase1"
import SiteDescription from "../components/prehorror/SiteDescription"
import HighAchierver from "../components/prehorror/HighAchiever"
import AboutPyramid from "../components/prehorror/AboutPyramid"
import Precautions from "../components/prehorror/Precautions"
import { render, screen, waitFor } from "@testing-library/react"
import api from "@/utils/api"
import userEvent from "@testing-library/user-event"

jest.mock("@/assets/image/rankmatch_logo.png", () => "rankmatch_logo.png")
jest.mock("@/assets/image/mascot/mascot.png", () => "mascot.png")
jest.mock("@/assets/image/ranking/rank_1.png", () => "rank_1.png")
jest.mock("@/assets/image/ranking/rank_2.png", () => "rank_2.png")
jest.mock("@/assets/image/ranking/rank_3.png", () => "rank_3.png")
jest.mock("@/SoundManager/useBGM", () => ({
  __esModule: true,
  default: () => ({
    play: jest.fn(),
    pause: jest.fn(),
  }),
}))
jest.mock("@/assets/sound/pom_pom_shower.mp3", () => "mocked-bgm-file")

const mockRoomId = "test-room-id"
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(() => ({ roomId: mockRoomId })),
}))

describe("Phase1 component", () => {
  const user = userEvent.setup()
  const apiPost = jest.spyOn(api, "post")

  it("このサイトの説明表示", () => {
    render(<SiteDescription />)
    const title = screen.getByText("このサイトは？")
    expect(title).toBeInTheDocument()
  })
  it("前回の成績優秀者表示", () => {
    render(<HighAchierver />)
    const yoshio = screen.getByText("知的生命体YOSHIO")
    expect(yoshio).toBeInTheDocument()
  })
  it("ピラミッド君の説明表示", () => {
    render(<AboutPyramid />)
    const pyramid = screen.getByText("ピラミッド君")
    expect(pyramid).toBeInTheDocument()
  })
  it("注意事項表示", () => {
    render(<Precautions />)
    const precautions = screen.getByText("注意事項")
    expect(precautions).toBeInTheDocument()
  })
  it("「ゲームに参加する」ボタンを押すとproceedが呼ばれる", async () => {
    ;(api.post as jest.MockedFunction<typeof api.post>).mockResolvedValue({
      data: { phase: 2 },
    })
    render(<Phase1 />)

    const joinGame = screen.getByText("ゲームに参加する")
    await user.click(joinGame)

    await waitFor(() => {
      expect(apiPost).toHaveBeenCalledWith(`/room/${mockRoomId}/proceed`, {
        phase: 2,
      })
    })
  })
})
