export default class AudioContextSingleton {
  private static instance: AudioContext | null = null

  static getInstance(): AudioContext {
    if (this.instance === null) {
      this.instance = new (window.AudioContext || window.webkitAudioContext)()
    }
    return this.instance
  }
}
