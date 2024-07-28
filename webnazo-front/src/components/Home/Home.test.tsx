import { MemoryRouter } from "react-router-dom"
import Home from "./Home"
import { render, screen } from "@testing-library/react"

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

describe("Homeコンポーネント", () => {
  test("部屋を作成するボタンの描画テスト", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const createRoomButton = screen.getByText("部屋を作成する")
    expect(createRoomButton).toBeInTheDocument()
  })

  //TODO ボタンがクリック可能かのテストを書く
})
