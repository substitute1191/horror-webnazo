declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

class SEManager {
  private buffer: AudioBuffer | null = null
  private source: AudioBufferSourceNode | null = null
  private gainNode: GainNode | null = null
  private volume: number
  private isPlayable: boolean

  constructor(
    private soundUrl: string,
    volume: number,
    isPlayable: boolean
  ) {
    this.volume = volume
    this.isPlayable = isPlayable
    void this.loadSound()
  }

  private async loadSound(): Promise<void> {
    try {
      const response = await fetch(this.soundUrl)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await audioContext.decodeAudioData(arrayBuffer)
    } catch (error) {
      console.error("Failed to load sound:", error)
    }
  }

  public play(): void {
    if (this.buffer === null || !this.isPlayable) return

    console.debug("play!")
    this.source = audioContext.createBufferSource()
    this.source.buffer = this.buffer

    this.gainNode = audioContext.createGain()
    this.gainNode.gain.setValueAtTime(this.volume, audioContext.currentTime)

    this.source.connect(this.gainNode)
    this.gainNode.connect(audioContext.destination)

    this.source.start()
  }

  public stop(): void {
    if (!this.isPlayable || this.source === null || this.gainNode === null)
      return

    console.debug("stop!")
    const currentTime = audioContext.currentTime
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, currentTime)
    this.gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.01)
    this.source.stop(currentTime + 0.01)

    this.source = null
    this.gainNode = null
  }

  public setVolume(volume: number): void {
    this.volume = volume
    if (this.gainNode !== null) {
      this.gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
    }
  }

  public setIsPlayable(isPlayable: boolean): void {
    this.isPlayable = isPlayable
  }

  public isLoaded(): boolean {
    return this.buffer !== null
  }
}

export default SEManager
