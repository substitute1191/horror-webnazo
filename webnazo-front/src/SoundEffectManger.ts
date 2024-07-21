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

  constructor(audioUrl: string) {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
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

    // 既存の音源があれば停止
    this.stop()

    this.source = this.audioContext.createBufferSource()
    this.source.buffer = this.buffer

    this.gainNode = this.audioContext.createGain()
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
