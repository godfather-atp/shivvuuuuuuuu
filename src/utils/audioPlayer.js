/**
 * Romantic Music Engine:
 * - Plays custom audio file if provided in config
 * - Or uses an ambient romantic Music Box / Lofi Piano synthesizer via Web Audio API
 *   with 0 external dependencies, works 100% reliably in any browser.
 */

class RomanticAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.audioElement = null;
    this.customUrl = null;
    this.timer = null;
    this.stepIndex = 0;
    this.masterGain = null;

    // Romantic music-box notes (Hz frequencies): gentle, dreamy arpeggios
    // Notes: C4, E4, G4, B4, C5, D5, E5, G5, A5
    this.melodyChords = [
      // Chord 1: Cmaj9 (Soft warmth)
      [261.63, 329.63, 392.00, 493.88, 523.25],
      // Chord 2: Am9 (Tender & longing)
      [220.00, 261.63, 329.63, 392.00, 440.00],
      // Chord 3: Fmaj7 (Sweet romantic hope)
      [174.61, 261.63, 329.63, 349.23, 523.25],
      // Chord 4: Gsus4 -> G (Gentle resolution)
      [196.00, 293.66, 392.00, 493.88, 587.33],
      // Chord 5: Em7 (Intimate)
      [164.81, 246.94, 329.63, 392.00, 493.88],
      // Chord 6: Fadd9 (Sincere promise)
      [174.61, 261.63, 349.23, 440.00, 523.25],
      // Chord 7: Dm7 (Gentle apology)
      [146.83, 220.00, 261.63, 349.23, 440.00],
      // Chord 8: C (Full heartfelt peace)
      [130.81, 196.00, 261.63, 329.63, 523.25],
    ];
  }

  init(customUrl = null) {
    this.customUrl = customUrl;
    if (this.customUrl) {
      this.audioElement = new Audio(this.customUrl);
      this.audioElement.loop = true;
      this.audioElement.volume = 0.4;
    }
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();

      // Master Gain for smooth fades
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playNote(frequency, timeOffset = 0, duration = 2.4, velocity = 0.25) {
    if (!this.audioCtx || !this.isPlaying) return;

    const now = this.audioCtx.currentTime + timeOffset;

    // Dual oscillator for rich, warm music box bell timbre
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();

    // Gentle sine + slight triangle overtone
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(frequency, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(frequency * 2, now); // Sweet harmonic octave

    // Filter to warm the tone
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);

    // ADSR Envelope: gentle attack, long bell-like decay
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(velocity, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(velocity * 0.4, now + 0.6);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Route audio graph
    osc1.connect(noteGain);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  playSequenceStep() {
    if (!this.isPlaying) return;

    const chord = this.melodyChords[this.stepIndex % this.melodyChords.length];
    
    // Play an arpeggiated romantic sequence
    chord.forEach((freq, idx) => {
      // Arpeggiate notes with delicate timing
      const delay = idx * 0.35 + (Math.random() * 0.04);
      const vel = 0.18 + (idx === 0 ? 0.08 : 0) - (idx * 0.02);
      this.playNote(freq, delay, 2.5, Math.max(0.05, vel));
    });

    // Add high gentle sparkle note
    const sparkleFreq = chord[chord.length - 1] * (Math.random() > 0.5 ? 1.5 : 2);
    if (Math.random() > 0.4) {
      this.playNote(sparkleFreq, 1.4, 2.0, 0.08);
    }

    this.stepIndex++;
    this.timer = setTimeout(() => {
      this.playSequenceStep();
    }, 2800);
  }

  play() {
    if (this.customUrl && this.audioElement) {
      this.audioElement.play().then(() => {
        this.isPlaying = true;
      }).catch(() => {
        // Fallback to Web Audio synthesizer if audio file fails
        this.startSynth();
      });
    } else {
      this.startSynth();
    }
  }

  startSynth() {
    this.ensureAudioContext();
    this.isPlaying = true;
    this.playSequenceStep();
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const audioPlayer = new RomanticAudioPlayer();
