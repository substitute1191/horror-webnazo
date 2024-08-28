declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

// TODO 動作が不安定なのでコンソールはまだ残しておく 最終的には消す
/* eslint-disable no-console,max-lines*/
class SEManager {
  private buffer: AudioBuffer | null = null
  private source: AudioBufferSourceNode | null = null
  private gainNode: GainNode | null = null
  private volume: number
  private isPlayable: boolean
  private loadPromise: Promise<void>
  private isLoading: boolean = false
  private isPlaying: boolean = false
  private playPromise: Promise<void> | null = null

  constructor(
    private soundUrl: string,
    volume: number,
    isPlayable: boolean
  ) {
    this.volume = volume
    this.isPlayable = isPlayable
    this.loadPromise = this.loadSound()
  }

  private async loadSound(): Promise<void> {
    if (this.isLoading) return
    this.isLoading = true

    try {
      const response = await fetch(this.soundUrl)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await audioContext.decodeAudioData(arrayBuffer)
      console.debug("Sound loaded successfully")
    } catch (error) {
      console.error("Failed to load sound:", error)
      throw error
    } finally {
      this.isLoading = false
    }
  }

  public async play(): Promise<void> {
    if (!this.isPlayable || this.isPlaying) return

    this.playPromise = (async () => {
      try {
        await this.loadPromise

        if (this.buffer === null) {
          console.error("Buffer is null after loading")
          return
        }

        console.debug("SEManager: SE play!")
        this.source = audioContext.createBufferSource()
        this.source.buffer = this.buffer

        this.gainNode = audioContext.createGain()
        this.gainNode.gain.setValueAtTime(this.volume, audioContext.currentTime)

        this.source.connect(this.gainNode)
        this.gainNode.connect(audioContext.destination)

        this.source.start()
        this.isPlaying = true

        // 再生終了時の処理
        this.source.onended = () => {
          this.resetAudio()
        }
      } catch (error) {
        console.error("Error playing sound:", error)
        this.resetAudio()
      }
    })()

    return this.playPromise
  }

  public async stop(): Promise<void> {
    // 再生が開始されるのを待つ
    if (this.playPromise !== null) {
      await this.playPromise
    }

    if (!this.isPlaying || this.source === null || this.gainNode === null) {
      console.debug("SEManager: SE stop suspended")
      return
    }

    console.debug("SEManager: SE stop!")
    const currentTime = audioContext.currentTime
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, currentTime)
    this.gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.01)

    try {
      this.source.stop(currentTime + 0.01)
    } catch (error) {
      console.error("Error stopping sound:", error)
    }

    this.resetAudio()
  }

  private resetAudio(): void {
    this.source = null
    this.gainNode = null
    this.isPlaying = false
    this.playPromise = null
  }

  public setVolume(volume: number): void {
    this.volume = volume
    if (this.gainNode !== null) {
      this.gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
    }
  }

  public setIsPlayable(isPlayable: boolean): void {
    this.isPlayable = isPlayable
    if (!isPlayable && this.isPlaying) {
      void this.stop()
    }
  }

  public isLoaded(): boolean {
    return this.buffer !== null
  }

  public getIsPlaying(): boolean {
    return this.isPlaying
  }

  public getPlayPromise(): Promise<void> | null {
    return this.playPromise
  }
}

export default SEManager
