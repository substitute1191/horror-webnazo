declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

class BGMManager {
  private buffer: AudioBuffer | null = null
  private source: AudioBufferSourceNode | null = null
  private gainNode: GainNode
  private isLoaded: boolean = false
  private isPlaying: boolean = false
  private startTime: number = 0
  private offset: number = 0
  private loadPromise: Promise<void> | null = null

  constructor(
    private bgmUrl: string,
    private volume: number,
    private isPlayable: boolean
  ) {
    this.gainNode = audioContext.createGain()
    this.gainNode.connect(audioContext.destination)
    this.loadPromise = this.loadSound()
  }

  private async loadSound(): Promise<void> {
    if (this.isLoaded) return
    try {
      const response = await fetch(this.bgmUrl)
      const arrayBuffer = await response.arrayBuffer()
      this.buffer = await audioContext.decodeAudioData(arrayBuffer)
      this.isLoaded = true
      console.debug("BGM loaded successfully")
    } catch (error) {
      console.error("Failed to load BGM:", error)
      throw error
    }
  }

  public async play(): Promise<void> {
    console.debug("Play method called")
    if (!this.isPlayable || this.isPlaying) {
      console.debug("Not playable or already playing")
      return
    }

    if (audioContext.state === "suspended") {
      console.debug("Resuming audio context")
      await audioContext.resume()
    }

    if (!this.isLoaded) {
      console.debug("Waiting for BGM to load")
      await this.loadPromise
    }

    console.debug("Starting playback")
    this.source = audioContext.createBufferSource()
    this.source.buffer = this.buffer
    this.source.loop = true
    this.source.connect(this.gainNode)

    this.startTime = audioContext.currentTime - this.offset
    this.source.start(0, this.offset)
    this.isPlaying = true
    console.debug("Playback started")
  }

  public pause(): void {
    if (!this.isPlaying || !this.source) return

    this.offset =
      (audioContext.currentTime - this.startTime) % (this.buffer?.duration || 0)
    this.source.stop()
    this.isPlaying = false
  }

  public stop(): void {
    if (!this.isPlaying || !this.source) return

    this.source.stop()
    this.isPlaying = false
    this.offset = 0
  }

  public setVolume(volume: number): void {
    this.volume = volume
    this.gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
  }

  public setIsPlayable(isPlayable: boolean): void {
    this.isPlayable = isPlayable
    if (!isPlayable && this.isPlaying) {
      this.pause()
    }
  }

  public async getIsLoaded(): Promise<boolean> {
    if (!this.isLoaded) {
      await this.loadPromise
    }
    return this.isLoaded
  }

  public getIsPlaying(): boolean {
    return this.isPlaying
  }
}

export default BGMManager