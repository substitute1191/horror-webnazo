import { Provider } from "jotai"
import SoundMenu from "./SoundMenu"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("SoundMenuコンポーネント", () => {
  const user = userEvent.setup()

  beforeEach(() => {
    jest.spyOn(window, "addEventListener")
    jest.spyOn(window, "removeEventListener")
    jest.spyOn(document, "addEventListener")
    jest.spyOn(document, "removeEventListener")
  })

  afterEach(() => {
    jest.restoreAllMocks()
    cleanup()
  })

  const renderSoundMenu = () => {
    return render(
      <Provider>
        <SoundMenu />
      </Provider>
    )
  }

  test("初期状態では表示されていない", () => {
    renderSoundMenu()
    expect(screen.queryByText("サウンドメニュー")).not.toBeInTheDocument()
  })

  test("F2キーでメニューの表示非表示が切り替わる", async () => {
    renderSoundMenu()

    expect(screen.queryByText("サウンドメニュー")).not.toBeInTheDocument()

    await user.keyboard("{F2}")

    await waitFor(
      () => {
        expect(screen.getByText("サウンドメニュー")).toBeInTheDocument()
      },
      { timeout: 3000 }
    )

    // もう一度F2キーを押してメニューを閉じる
    await user.keyboard("{F2}")

    await waitFor(
      () => {
        expect(screen.queryByText("サウンドメニュー")).not.toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  })

  test("SE音量スライダーの値を変更すると値が変わる", async () => {
    renderSoundMenu()
    await user.keyboard("{F2}")
    const slider = screen.getByLabelText<HTMLInputElement>("SE音量")
    expect(slider).toBeInTheDocument()
    expect(slider.value).toBe("0.5")
    fireEvent.change(slider, { target: { value: "0.7" } })
    await waitFor(() => {
      expect(slider.value).toBe("0.7")
    })
    fireEvent.change(slider, { target: { value: "0.3" } })
    await waitFor(() => {
      expect(slider.value).toBe("0.3")
    })
  })

  test("BGM音量スライダーの値を変更すると値が変わる", async () => {
    renderSoundMenu()
    await user.keyboard("{F2}")
    const slider = screen.getByLabelText<HTMLInputElement>("BGM音量")
    expect(slider).toBeInTheDocument()
    expect(slider.value).toBe("0.5")
    fireEvent.change(slider, { target: { value: "0.9" } })
    await waitFor(() => {
      expect(slider.value).toBe("0.9")
    })
    fireEvent.change(slider, { target: { value: "0.4" } })
    await waitFor(() => {
      expect(slider.value).toBe("0.4")
    })
  })
})
