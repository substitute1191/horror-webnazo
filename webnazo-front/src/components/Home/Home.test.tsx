import { MemoryRouter } from "react-router-dom"
import Home from "./Home"
import { userEvent } from "@testing-library/user-event"
import { render, screen, waitFor } from "@testing-library/react"
import type * as ReactRouterDOM from "react-router-dom"
import api from "@/utils/api"

jest.mock("@/SoundManager/useBGM", () => ({
  __esModule: true,
  default: () => ({
    play: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
  }),
}))

jest.mock("../SoundMenu/SoundMenu", () => () => (
  <div data-testid="sound-menu">Sound Menu</div>
))
jest.mock("./MusicPrompt/MusicPrompt", () => () => (
  <div data-testid="music-prompt">Music Prompt</div>
))
jest.mock(
  "./CharacterFlicker/CharacterFlicker",
  () =>
    ({ origin }: { origin: string }) => <span>{origin}</span>
)
jest.mock("./NoiseOverlay/NoiseOverlay", () => () => (
  <div data-testid="noise-overlay">Noise Overlay</div>
))
jest.mock("@/assets/sound/lp-horror.mp3", () => "mocked-bgm-file")

const mockedUseNavigate = jest.fn()
jest.mock("react-router-dom", () => {
  const actual = jest.requireActual<typeof ReactRouterDOM>("react-router-dom")
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  }
})

jest.mock("@/utils/api", () => ({
  get: jest.fn(),
}))

describe("Homeコンポーネント", () => {
  const user = userEvent.setup()
  const apiGet = jest.spyOn(api, "get")

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("部屋を作成するボタンの描画テスト", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const createRoomButton = screen.getByText("部屋を作成する")
    expect(createRoomButton).toBeInTheDocument()
  })

  test("enterRoomがボタンをクリックすると呼ばれる", async () => {
    ;(api.get as jest.MockedFunction<typeof api.get>).mockResolvedValue({
      data: { roomId: "test-room-id" },
    })

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const startButton = screen.getByText("部屋を作成する")
    await user.click(startButton)

    await waitFor(() => {
      expect(apiGet).toHaveBeenCalledWith("/createRoom")
    })

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith("/room/test-room-id")
    })
  })
})
