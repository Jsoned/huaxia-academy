export class AudioManager {
  private ctx: AudioContext | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private voiceGain: GainNode | null = null;
  private isMuted = false;
  private bgmOsc: OscillatorNode | null = null;
  private bgmInterval: number | null = null;

  init() {
    try {
      this.ctx = new AudioContext();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.voiceGain = this.ctx.createGain();
      this.bgmGain.connect(this.ctx.destination);
      this.sfxGain.connect(this.ctx.destination);
      this.voiceGain.connect(this.ctx.destination);
      this.bgmGain.gain.value = 0.12;
      this.sfxGain.gain.value = 0.3;
      this.voiceGain.gain.value = 0.8;
      return true;
    } catch (e) { return false; }
  }

  playBGM() {
    if (!this.ctx || !this.bgmGain) return;
    this.stopBGM();
    const notes = [220, 261.63, 329.63, 392, 440, 392, 329.63, 261.63];
    let idx = 0;
    const playNote = () => {
      if (!this.ctx || !this.bgmGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.bgmGain);
      osc.type = 'sine';
      osc.frequency.value = notes[idx % notes.length];
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.5);
      idx++;
    };
    playNote();
    this.bgmInterval = window.setInterval(playNote, 1800);
  }

  stopBGM() {
    if (this.bgmInterval) { clearInterval(this.bgmInterval); this.bgmInterval = null; }
    if (this.bgmOsc) { this.bgmOsc.stop(); this.bgmOsc = null; }
  }

  playClick() { this.playTone(880, 0.05, 0.08); }
  playHover() { this.playTone(660, 0.03, 0.05); }
  playSuccess() {
    this.playTone(523.25, 0.1, 0.12);
    setTimeout(() => this.playTone(659.25, 0.1, 0.12), 120);
    setTimeout(() => this.playTone(783.99, 0.15, 0.15), 240);
    setTimeout(() => this.playTone(1046.50, 0.3, 0.18), 400);
  }
  playError() {
    this.playTone(200, 0.12, 0.15);
    setTimeout(() => this.playTone(150, 0.18, 0.12), 150);
  }
  playLevelUp() {
    this.playTone(523, 0.1, 0.1);
    setTimeout(() => this.playTone(659, 0.1, 0.1), 100);
    setTimeout(() => this.playTone(784, 0.1, 0.1), 200);
    setTimeout(() => this.playTone(1047, 0.2, 0.15), 300);
    setTimeout(() => this.playTone(1319, 0.4, 0.2), 500);
  }
  playCoin() {
    this.playTone(1200, 0.05, 0.08);
    setTimeout(() => this.playTone(1600, 0.08, 0.1), 80);
  }

  playTone(freq: number, dur: number, vol: number) {
    if (!this.ctx || !this.sfxGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  }

  speak(text: string) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.85;
    u.pitch = 1.05;
    window.speechSynthesis.speak(u);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    const v = this.isMuted ? 0 : 1;
    if (this.bgmGain) this.bgmGain.gain.value = 0.12 * v;
    if (this.sfxGain) this.sfxGain.gain.value = 0.3 * v;
    if (this.voiceGain) this.voiceGain.gain.value = 0.8 * v;
    return this.isMuted;
  }

  isAudioMuted() { return this.isMuted; }
}

export const audioManager = new AudioManager();
