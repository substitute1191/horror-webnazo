import { act, renderHook } from "@testing-library/react"
import { useCharacterFlicker } from "./useCharacterFlicker"
import useSE from "@/SoundManager/useSE"

jest.mock("@/SoundManager/useSE", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    play: jest.fn(),
    stop: jest.fn(),
  })),
}))

jest.mock("@/assets/sound/base_noise1.mp3", () => "mocked-se-file")

describe("useCharacterFlickerのテスト", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.clearAllMocks()
  })

  test("初期状態の確認", () => {
    const { result } = renderHook(() =>
      useCharacterFlicker("A", ["B", "C"], ["D", "E"], 0.5)
    )
    expect(result.current.result).toBe("A")
    expect(result.current.classNames).toBe("")
  })

  test("確率に基づいて文字が変更される", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.1)
    const { result } = renderHook(() =>
      useCharacterFlicker("A", ["B", "C"], ["D", "E"], 0.5)
    )

    act(() => {
      jest.advanceTimersByTime(200)
    })

    expect(["B", "C"]).toContain(result.current.result)
    expect(["D", "E"]).toContain(result.current.classNames)
  })

  test("確率に基づいて文字が変更されない", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.6)
    const { result } = renderHook(() =>
      useCharacterFlicker("A", ["B", "C"], ["D", "E"], 0.5)
    )

    act(() => {
      jest.advanceTimersByTime(200)
    })

    expect(result.current.result).toBe("A")
    expect(result.current.classNames).toBe("")
  })

  test("play関数の呼び出しを確認する", () => {
    const mockPlay = jest.fn()
    ;(useSE as jest.Mock).mockReturnValue({ play: mockPlay, stop: jest.fn() })

    renderHook(() => {
      useCharacterFlicker("A", ["B"], ["otherClass1"], 1)
    })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(mockPlay).toHaveBeenCalled()
  })
})
