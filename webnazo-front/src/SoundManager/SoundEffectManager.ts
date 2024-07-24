declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

class SoundEffectManager {
  private audioContext: AudioContext
  private buffer: AudioBuffer | null = null
  private source: AudioBufferSourceNode | null = null
  private gainNode: GainNode | null = null
  private volume: number

  constructor(audioUrl: string, volume: number = 0.5) {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.volume = Math.max(0, Math.min(1, volume))
    void this.loadSound(audioUrl)
  }

  private async loadSound(url: string): Promise<void> {
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await this.audioContext.decodeAudioData(arrayBuffer)
    } catch (error) {
      console.error("Failed to load sound:", error)
    }
  }

  public play(): void {
    if (this.buffer === null) return

    this.stop()

    this.source = this.audioContext.createBufferSource()
    this.source.buffer = this.buffer

    this.gainNode = this.audioContext.createGain()
    this.gainNode.gain.setValueAtTime(
      this.volume,
      this.audioContext.currentTime
    )
    this.source.connect(this.gainNode)
    this.gainNode.connect(this.audioContext.destination)

    this.source.start()
  }

  public stop(): void {
    if (this.source !== null && this.gainNode !== null) {
      const currentTime = this.audioContext.currentTime

      // 非常に短いフェードアウトを適用 (10ミリ秒)
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, currentTime)
      this.gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.01)

      // フェードアウト後に完全に停止
      this.source.stop(currentTime + 0.01)

      this.source = null
      this.gainNode = null
    }
  }

  public setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume)) // 0から1の範囲に制限
    if (this.gainNode !== null) {
      this.gainNode.gain.setValueAtTime(
        this.volume,
        this.audioContext.currentTime
      )
    }
  }

  public getVolume(): number {
    return this.volume
  }

  public isLoaded(): boolean {
    return this.buffer !== null
  }

  // リソースの解放
  public dispose(): void {
    this.stop()
    if (this.audioContext !== null) {
      void this.audioContext.close()
    }
  }
}

export default SoundEffectManager
