var DRUM_COLORS = {
  bass: "#a855f7",
  // purple
  snare: "#facc15",
  // yellow
  highTom: "#3b82f6",
  // blue
  midTom: "#ec4899",
  // pink
  lowFloorTom: "#ec4899",
  // pink
  highFloorTom: "#dc2626",
  // red
  tom1: "#7dd3fc",
  // light-blue
  tom2: "#22c55e",
  // green
  tom3: "#f97316",
  // orange
  hiHatA: "#fbcfe8",
  // baby-pink
  hiHatB: "#db2777",
  // fuchsia
  bass2: "#1e40af"
  // dark-blue
};
var DRUM_KIT_PIECES = [
  "Crash 1",
  "Crash 2",
  "Splash",
  "Hi-Hat",
  "Ride",
  "Tom 1",
  "Tom 2",
  "Snare",
  "Bass",
  "Floor Tom 1",
  "Floor Tom 2"
];
var DRUM_SAMPLES = {
  "bass": "bass.wav",
  "snare": "snare.wav",
  "hihat-closed": "hihat-closed.wav",
  "hihat-open": "hihat-open.wav",
  "ride": "ride.wav",
  "crash": "crash.wav",
  "splash": "splash.wav",
  "tom-high": "tom-high.wav",
  "tom-mid": "tom-mid.wav",
  "tom-floor": "tom-floor.wav"
};
var DRUM_SAMPLES_BASE_URL = "/public/drums/";
function drumSampleForPiece(piece) {
  var p = (piece || "").toLowerCase();
  if (p.includes("open hi-hat")) return "hihat-open";
  if (p.includes("hi-hat") || p.includes("hi hat") || p.includes("hihat")) return "hihat-closed";
  if (p.includes("ride")) return "ride";
  if (p.includes("splash")) return "splash";
  if (p.includes("crash") || p.includes("china") || p.includes("cymbal")) return "crash";
  if (p.includes("floor")) return "tom-floor";
  if (p.includes("high tom") || p.includes("hi-mid") || p.includes("high-mid")) return "tom-high";
  if (p.includes("tom")) return "tom-mid";
  if (p.includes("bass") || p.includes("kick")) return "bass";
  if (p.includes("snare") || p.includes("stick") || p.includes("clap")) return "snare";
  return "snare";
}
var EUPHONIUM_FINGERING = {
  "A#1": [],
  "Bb1": [],
  "B1": [1, 2, 3],
  "C2": [1, 3],
  "C#2": [2, 3],
  "Db2": [2, 3],
  "D2": [1, 2],
  "D#2": [1],
  "Eb2": [1],
  "E2": [2],
  "F2": [],
  "F#2": [2, 3],
  "Gb2": [2, 3],
  "G2": [1, 2],
  "G#2": [1],
  "Ab2": [1],
  "A2": [2],
  "A#2": [],
  "Bb2": [],
  "B2": [1, 2],
  "C3": [1],
  "C#3": [1, 2],
  "Db3": [1, 2],
  "D3": [],
  "D#3": [1, 2],
  "Eb3": [1, 2],
  "E3": [1],
  "F3": [],
  "F#3": [2],
  "Gb3": [2],
  "G3": [],
  "G#3": [2, 3],
  "Ab3": [2, 3],
  "A3": [1, 2],
  "A#3": [1],
  "Bb3": [1],
  "B3": [2],
  "C4": [],
  "C#4": [1, 2],
  "Db4": [1, 2],
  "D4": [1],
  "D#4": [1, 2],
  "Eb4": [1, 2],
  "E4": [],
  "F4": [1]
};
var EUPHONIUM_SAMPLES = {
  "F1": "F1.mp3",
  "A#1": "As1.mp3",
  "D#2": "Ds2.mp3",
  "F2": "F2.mp3",
  "A#2": "As2.mp3",
  "D3": "D3.mp3",
  "F3": "F3.mp3",
  "A#3": "As3.mp3",
  "D4": "D4.mp3"
};
var EUPHONIUM_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/tuba/";
var EUPHONIUM_IMAGE_CONFIG = {
  imageSrc: "/public/euphonium.png",
  alt: "Euphonium",
  aspectRatio: 1370 / 1764,
  pistonX: [35.6, 40, 44.3],
  shaftW: 2.8,
  shaftTop: 26.7,
  shaftH: 1.8,
  holeW: 2.8,
  holeH: 1.1,
  holeTop: 30.7,
  pearlW: 2.4,
  pearlH: 1.4,
  pearlTopPressed: 30.2,
  // Bell sits behind the valves — cut color matches the bell's pale gold
  // (sampled from the image at piston shaft positions).
  shaftCutColor: "#ecdfb8",
  shaftCutRadius: "20%"
};
var _F = (keys, thumb, gsharp, eb, label) => ({ keys, thumb, gsharp, eb, label });
var FLUTE_FINGERING = {
  // Low register (C4 → C5)
  "C4": [_F([1, 2, 3, 4, 5, 6], true, false, true)],
  "C#4": [_F([1, 2, 3, 4, 5, 6], true, false, true)],
  "Db4": [_F([1, 2, 3, 4, 5, 6], true, false, true)],
  "D4": [_F([1, 2, 3, 4, 5, 6], true, false, true)],
  "D#4": [_F([1, 2, 3, 4, 5, 6], true, false, false)],
  "Eb4": [_F([1, 2, 3, 4, 5, 6], true, false, false)],
  "E4": [_F([1, 2, 3, 4, 5], true, false, true)],
  "F4": [_F([1, 2, 3, 4], true, false, true)],
  "F#4": [_F([1, 2, 3, 5], true, false, true)],
  "Gb4": [_F([1, 2, 3, 5], true, false, true)],
  "G4": [_F([1, 2, 3], true, false, true)],
  "G#4": [_F([1, 2, 3], true, true, true)],
  "Ab4": [_F([1, 2, 3], true, true, true)],
  "A4": [_F([1, 2], true, false, true)],
  // Bb has 2 standard fingerings: "1 & 1" (T + L1 + R1) and "Thumb B♭".
  "A#4": [_F([1, 4], true, false, true, "1 & 1"), _F([1], true, false, true, "Thumb B\u266D")],
  "Bb4": [_F([1, 4], true, false, true, "1 & 1"), _F([1], true, false, true, "Thumb B\u266D")],
  "B4": [_F([1], true, false, true)],
  "C5": [_F([], false, false, true)],
  "C#5": [_F([], false, false, false)],
  "Db5": [_F([], false, false, false)],
  // Middle register (D5 → C6)
  "D5": [_F([1], false, false, true)],
  "D#5": [_F([1, 2, 3, 4, 5, 6], false, false, false)],
  "Eb5": [_F([1, 2, 3, 4, 5, 6], false, false, false)],
  "E5": [_F([1, 2, 3, 4, 5], true, false, true)],
  "F5": [_F([1, 2, 3, 4], true, false, true)],
  "F#5": [_F([1, 2, 3, 5], true, false, true)],
  "Gb5": [_F([1, 2, 3, 5], true, false, true)],
  "G5": [_F([1, 2, 3], true, false, true)],
  "G#5": [_F([1, 2, 3], true, true, true)],
  "Ab5": [_F([1, 2, 3], true, true, true)],
  "A5": [_F([1, 2], true, false, true)],
  "A#5": [_F([1, 4], true, false, true, "1 & 1"), _F([1], true, false, true, "Thumb B\u266D")],
  "Bb5": [_F([1, 4], true, false, true, "1 & 1"), _F([1], true, false, true, "Thumb B\u266D")],
  "B5": [_F([1], true, false, true)],
  "C6": [_F([], false, false, true)]
};
var FRETBOARD_CONFIG = {
  ukulele: { strings: [["A", 4], ["E", 4], ["C", 4], ["G", 4]], numFrets: 12 },
  guitar: { strings: [["E", 4], ["B", 3], ["G", 3], ["D", 3], ["A", 2], ["E", 2]], numFrets: 12 },
  bassGuitar: { strings: [["G", 2], ["D", 2], ["A", 1], ["E", 1]], numFrets: 12 },
  violin: { strings: [["E", 5], ["A", 4], ["D", 4], ["G", 3]], numFrets: 12 },
  cello: { strings: [["A", 3], ["D", 3], ["G", 2], ["C", 2]], numFrets: 12 },
  mandolin: { strings: [["E", 5], ["A", 4], ["D", 4], ["G", 3]], numFrets: 12 },
  banjo: { strings: [["D", 4], ["B", 3], ["G", 3], ["D", 3]], numFrets: 12 },
  viola: { strings: [["A", 4], ["D", 4], ["G", 3], ["C", 3]], numFrets: 12 },
  contrabass: { strings: [["G", 2], ["D", 2], ["A", 1], ["E", 1]], numFrets: 12 }
};
var VIOLIN_SAMPLES = {
  "A3": "A3.mp3",
  "C4": "C4.mp3",
  "E4": "E4.mp3",
  "G4": "G4.mp3",
  "A4": "A4.mp3",
  "C5": "C5.mp3",
  "E5": "E5.mp3",
  "G5": "G5.mp3",
  "A5": "A5.mp3",
  "C6": "C6.mp3"
};
var VIOLIN_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/violin/";
var CELLO_SAMPLES = {
  "C2": "C2.mp3",
  "D2": "D2.mp3",
  "E2": "E2.mp3",
  "F2": "F2.mp3",
  "G2": "G2.mp3",
  "A2": "A2.mp3",
  "C3": "C3.mp3",
  "D3": "D3.mp3",
  "E3": "E3.mp3",
  "F3": "F3.mp3",
  "G3": "G3.mp3",
  "A3": "A3.mp3",
  "C4": "C4.mp3",
  "D4": "D4.mp3",
  "E4": "E4.mp3",
  "F4": "F4.mp3",
  "G4": "G4.mp3",
  "A4": "A4.mp3"
};
var CELLO_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/cello/";
var VIOLA_SAMPLES = {
  "C3": "C3.mp3",
  "D3": "D3.mp3",
  "E3": "E3.mp3",
  "F3": "F3.mp3",
  "G3": "G3.mp3",
  "A3": "A3.mp3",
  "C4": "C4.mp3",
  "D4": "D4.mp3",
  "E4": "E4.mp3",
  "F4": "F4.mp3",
  "G4": "G4.mp3",
  "A4": "A4.mp3"
};
var VIOLA_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/cello/";
var PLUCKED_STRING_SAMPLES = {
  "B1": "B1.mp3",
  "D2": "D2.mp3",
  "E2": "E2.mp3",
  "F#2": "Fs2.mp3",
  "G#2": "Gs2.mp3",
  "A2": "A2.mp3",
  "B2": "B2.mp3",
  "C#3": "Cs3.mp3",
  "D3": "D3.mp3",
  "E3": "E3.mp3",
  "F#3": "Fs3.mp3",
  "G3": "G3.mp3",
  "A3": "A3.mp3",
  "B3": "B3.mp3",
  "C#4": "Cs4.mp3",
  "D#4": "Ds4.mp3",
  "E4": "E4.mp3",
  "F#4": "Fs4.mp3",
  "G#4": "Gs4.mp3",
  "A4": "A4.mp3",
  "B4": "B4.mp3",
  // D5.mp3 sample on the CDN is audibly out of tune — var Tone.Sampler
  // interpolate D5 from the C#5 and E5 samples instead. (Owner 2026-05-12.)
  "C#5": "Cs5.mp3",
  "E5": "E5.mp3",
  "F#5": "Fs5.mp3",
  "G5": "G5.mp3",
  "G#5": "Gs5.mp3",
  "A5": "A5.mp3",
  "A#5": "As5.mp3"
};
var PLUCKED_STRING_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/guitar-nylon/";
var RECORDER_FINGERING = {
  "C4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: true },
  "C#4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: false },
  "Db4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: false },
  "D4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: true },
  "D#4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: false },
  "Eb4": { keys: [1, 2, 3, 4, 5, 6], thumb: true, eb: false },
  "E4": { keys: [1, 2, 3, 4, 5], thumb: true, eb: true },
  "F4": { keys: [1, 2, 3, 4], thumb: true, eb: true },
  "F#4": { keys: [1, 2, 3, 5], thumb: true, eb: true },
  "Gb4": { keys: [1, 2, 3, 5], thumb: true, eb: true },
  "G4": { keys: [1, 2, 3], thumb: true, eb: true },
  "G#4": { keys: [1, 2, 3], thumb: true, eb: true },
  "Ab4": { keys: [1, 2, 3], thumb: true, eb: true },
  "A4": { keys: [1, 2], thumb: true, eb: true },
  "A#4": { keys: [1], thumb: true, eb: true },
  "Bb4": { keys: [1], thumb: true, eb: true },
  "B4": { keys: [1], thumb: true, eb: true },
  "C5": { keys: [], thumb: false, eb: true },
  "C#5": { keys: [], thumb: false, eb: false },
  "Db5": { keys: [], thumb: false, eb: false },
  "D5": { keys: [1], thumb: false, eb: true },
  "D#5": { keys: [1, 2, 3, 4, 5, 6], thumb: false, eb: false },
  "Eb5": { keys: [1, 2, 3, 4, 5, 6], thumb: false, eb: false },
  "E5": { keys: [1, 2, 3, 4, 5], thumb: false, eb: true },
  "F5": { keys: [1, 2, 3, 4], thumb: false, eb: true },
  "F#5": { keys: [1, 2, 3, 5], thumb: false, eb: true },
  "Gb5": { keys: [1, 2, 3, 5], thumb: false, eb: true },
  "G5": { keys: [1, 2, 3], thumb: false, eb: true },
  "G#5": { keys: [1, 2, 3], thumb: false, eb: true },
  "Ab5": { keys: [1, 2, 3], thumb: false, eb: true },
  "A5": { keys: [1, 2], thumb: false, eb: true },
  "A#5": { keys: [1], thumb: false, eb: true },
  "Bb5": { keys: [1], thumb: false, eb: true },
  "B5": { keys: [1], thumb: false, eb: true },
  "C6": { keys: [], thumb: false, eb: true }
};
var SAX_FINGERING = {
  "D4": { keys: [1, 3], octave: false },
  "E4": { keys: [2, 3], octave: false },
  "F4": { keys: [1, 2, 3, 4], octave: false },
  "G4": { keys: [1, 2, 3], octave: false },
  "A4": { keys: [1, 2], octave: false },
  "B4": { keys: [1], octave: false },
  "C5": { keys: [], octave: false },
  "D5": { keys: [1, 3], octave: true },
  "E5": { keys: [2, 3], octave: true },
  "F5": { keys: [1, 2, 3, 4], octave: true },
  "G5": { keys: [1, 2, 3], octave: true },
  "A5": { keys: [1, 2], octave: true },
  "B5": { keys: [1], octave: true },
  "C6": { keys: [], octave: true }
};
var TRUMPET_FINGERING = {
  // Low range (F#3 → B3):
  "F#3": [1, 2, 3],
  "Gb3": [1, 2, 3],
  "G3": [1, 3],
  "G#3": [2, 3],
  "Ab3": [2, 3],
  "A3": [1, 2],
  "A#3": [1],
  "Bb3": [1],
  "B3": [2],
  "C4": [],
  "C#4": [1, 2, 3],
  "Db4": [1, 2, 3],
  "D4": [1, 3],
  "D#4": [2, 3],
  "Eb4": [2, 3],
  "E4": [1, 2],
  "F4": [1],
  "F#4": [2],
  "Gb4": [2],
  "G4": [],
  "G#4": [2, 3],
  "Ab4": [2, 3],
  "A4": [1, 2],
  "A#4": [1],
  "Bb4": [1],
  "B4": [2],
  "C5": [],
  "C#5": [1, 2],
  "Db5": [1, 2],
  "D5": [1],
  "D#5": [2],
  "Eb5": [2],
  "E5": [],
  "F5": [1],
  "F#5": [2],
  "Gb5": [2],
  "G5": [],
  "G#5": [2, 3],
  "Ab5": [2, 3],
  "A5": [1, 2],
  "A#5": [1],
  "Bb5": [1],
  "B5": [2],
  "C6": [],
  // High range (C#6 → G6) — Yamaha altissimo primaries:
  "C#6": [1, 2],
  "Db6": [1, 2],
  "D6": [1],
  "D#6": [2],
  "Eb6": [2],
  "E6": [],
  // open preferred for high E
  "F6": [1],
  "F#6": [2],
  "Gb6": [2],
  "G6": []
  // open
};
var TRUMPET_SAMPLES = {
  "A3": "A3.mp3",
  "C4": "C4.mp3",
  "D#4": "Ds4.mp3",
  "F4": "F4.mp3",
  "G4": "G4.mp3",
  "A#4": "As4.mp3",
  "D5": "D5.mp3",
  "F5": "F5.mp3",
  "A5": "A5.mp3",
  "C6": "C6.mp3"
};
var TRUMPET_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/trumpet/";
var TRUMPET_IMAGE_CONFIG = {
  imageSrc: "/public/trumpet.png",
  alt: "Trumpet",
  aspectRatio: 2458 / 1234,
  pistonX: [38.6, 42.6, 46.6],
  shaftW: 3,
  shaftTop: 32,
  shaftH: 7.5,
  holeW: 3.2,
  holeH: 1.4,
  holeTop: 38.6,
  pearlW: 2.6,
  pearlH: 1.9,
  pearlTopPressed: 38,
  // Trumpet valves sit above the body in empty space, so the
  // page bg works — no body to match.
  shaftCutColor: "var(--bg)"
};
var TUBA_FINGERING = {
  "A#1": [],
  "Bb1": [],
  "B1": [1, 2, 3],
  "C2": [1, 3],
  "C#2": [2, 3],
  "Db2": [2, 3],
  "D2": [1, 2],
  "D#2": [1],
  "Eb2": [1],
  "E2": [2],
  "F2": [],
  "F#2": [2, 3],
  "Gb2": [2, 3],
  "G2": [1, 2],
  "G#2": [1],
  "Ab2": [1],
  "A2": [2],
  "A#2": [],
  "Bb2": [],
  "B2": [1, 2],
  "C3": [1],
  "C#3": [1, 2],
  "Db3": [1, 2],
  "D3": [],
  "D#3": [1, 2],
  "Eb3": [1, 2],
  "E3": [1],
  "F3": [],
  "F#3": [2],
  "Gb3": [2],
  "G3": [],
  "G#3": [2, 3],
  "Ab3": [2, 3],
  "A3": [1, 2],
  "A#3": [1],
  "Bb3": [1],
  "B3": [2],
  "C4": [],
  "C#4": [1, 2],
  "Db4": [1, 2],
  "D4": [1],
  "D#4": [1, 2],
  "Eb4": [1, 2],
  "E4": [],
  "F4": [1]
};
var TUBA_SAMPLES = {
  "F1": "F1.mp3",
  "A#1": "As1.mp3",
  "D#2": "Ds2.mp3",
  "F2": "F2.mp3",
  "A#2": "As2.mp3",
  "D3": "D3.mp3",
  "F3": "F3.mp3",
  "A#3": "As3.mp3",
  "D4": "D4.mp3"
};
var TUBA_SAMPLES_BASE_URL = "https://nbrosowsky.github.io/tonejs-instruments/samples/tuba/";
var TUBA_IMAGE_CONFIG = {
  imageSrc: "/public/tuba.png",
  alt: "Tuba",
  aspectRatio: 1996 / 1232
};
var { useState, useRef, useCallback, useEffect, useMemo, useLayoutEffect } = React;
var APP_T = {
  en: { findSong: "\u{1F50D} Find song" },
  zh: { findSong: "\u{1F50D} \u627E\u6B4C" },
  hi: { findSong: "\u{1F50D} \u0917\u093E\u0928\u093E \u0916\u094B\u091C\u0947\u0902" },
  es: { findSong: "\u{1F50D} Buscar" },
  fr: { findSong: "\u{1F50D} Chercher" },
  ar: { findSong: "\u{1F50D} \u0627\u0628\u062D\u062B" },
  pt: { findSong: "\u{1F50D} Buscar" },
  ru: { findSong: "\u{1F50D} \u041F\u043E\u0438\u0441\u043A" },
  ja: { findSong: "\u{1F50D} \u66F2\u3092\u63A2\u3059" },
  bn: { findSong: "\u{1F50D} \u0996\u09C1\u0981\u099C\u09C1\u09A8" },
  ur: { findSong: "\u{1F50D} \u062A\u0644\u0627\u0634" },
  tl: { findSong: "\u{1F50D} Hanapin" },
  ko: { findSong: "\u{1F50D} \uACE1 \uCC3E\uAE30" }
};
function getAppLang() {
  try {
    var saved = localStorage.getItem("rap-lang");
    if (saved && APP_T[saved]) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (APP_T[nav]) return nav;
  } catch (e) {
  }
  return "en";
}
var APP_STRINGS = APP_T[getAppLang()];
var APP_VERSION = "v425";
var _libLoading = {};
function ensureLib(globalName, src) {
  if (typeof window !== "undefined" && typeof window[globalName] !== "undefined") {
    return Promise.resolve();
  }
  if (!_libLoading[src]) {
    _libLoading[src] = new Promise((resolve, reject) => {
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return _libLoading[src];
}
var ensureJSZip = () => ensureLib("JSZip", "/keyboard/vendor/jszip.min.js");
var ensureConfetti = () => ensureLib("confetti", "/keyboard/vendor/confetti.browser.min.js");
var ensureTone = () => ensureLib("Tone", "/keyboard/vendor/tone.min.js");
var ensureMidi = () => ensureLib(
  "Midi",
  typeof window !== "undefined" && window.location.hostname === "readandplaymusic.app" ? "vendor/midi.js" : "https://cdn.jsdelivr.net/npm/@tonejs/midi@2.0.28/build/Midi.js"
);
var _MIDI_LETTERS_SHARP = ["C", "C", "D", "D", "E", "F", "F", "G", "G", "A", "A", "B"];
var _MIDI_ACC_SHARP = ["none", "sharp", "none", "sharp", "none", "none", "sharp", "none", "sharp", "none", "sharp", "none"];
var _MIDI_LETTERS_FLAT = ["C", "D", "D", "E", "E", "F", "G", "G", "A", "A", "B", "B"];
var _MIDI_ACC_FLAT = ["none", "flat", "none", "flat", "none", "none", "flat", "none", "flat", "none", "flat", "none"];
var _KS_SHARPS = {
  "C": [],
  "G": ["F"],
  "D": ["F", "C"],
  "A": ["F", "C", "G"],
  "E": ["F", "C", "G", "D"],
  "B": ["F", "C", "G", "D", "A"],
  "F#": ["F", "C", "G", "D", "A", "E"],
  "C#": ["F", "C", "G", "D", "A", "E", "B"]
};
var _KS_FLATS = {
  "F": ["B"],
  "Bb": ["B", "E"],
  "Eb": ["B", "E", "A"],
  "Ab": ["B", "E", "A", "D"],
  "Db": ["B", "E", "A", "D", "G"],
  "Gb": ["B", "E", "A", "D", "G", "C"],
  "Cb": ["B", "E", "A", "D", "G", "C", "F"]
};
function midiToSong(midi, fileName) {
  var _a;
  var ppq = midi.header.ppq || 480;
  var sixteenth = ppq / 4;
  var bpm = Math.round(midi.header.tempos && ((_a = midi.header.tempos[0]) == null ? void 0 : _a.bpm) || 120);
  var tsEv = midi.header.timeSignatures && midi.header.timeSignatures[0];
  var ts = tsEv && Array.isArray(tsEv.timeSignature) ? { top: tsEv.timeSignature[0], bottom: tsEv.timeSignature[1] } : { top: 4, bottom: 4 };
  var ksEv = midi.header.keySignatures && midi.header.keySignatures[0];
  var keySig = "C";
  if (ksEv && ksEv.key && (_KS_SHARPS[ksEv.key] || _KS_FLATS[ksEv.key] || ksEv.key === "C")) {
    keySig = ksEv.key;
  }
  var useFlat = !!_KS_FLATS[keySig];
  var ksAlteredLetters = new Set(_KS_SHARPS[keySig] || _KS_FLATS[keySig] || []);
  var ksAlterDir = _KS_SHARPS[keySig] ? "sharp" : _KS_FLATS[keySig] ? "flat" : null;
  var allNotes = [];
  for (var ti = 0; ti < (midi.tracks || []).length; ti++) {
    var track = midi.tracks[ti];
    if (track.channel === 9) continue;
    for (var n of track.notes || []) {
      var ticks = Math.round(n.ticks / sixteenth) * sixteenth;
      var durTicks = Math.max(sixteenth, Math.round(n.durationTicks / sixteenth) * sixteenth);
      allNotes.push({ midi: n.midi, ticks, durationTicks: durTicks, trackIndex: ti });
    }
  }
  if (allNotes.length === 0) throw new Error("No notes found in MIDI file");
  var trackIds = [...new Set(allNotes.map((n2) => n2.trackIndex))];
  var trackAvg = {};
  for (var id of trackIds) {
    var ns = allNotes.filter((n2) => n2.trackIndex === id);
    trackAvg[id] = ns.reduce((s, n2) => s + n2.midi, 0) / ns.length;
  }
  var overallAvg = allNotes.reduce((s, n2) => s + n2.midi, 0) / allNotes.length;
  var useGrandStaff = false;
  var staffOfTrack = null;
  if (trackIds.length >= 2) {
    var trebleIds = trackIds.filter((id2) => trackAvg[id2] >= 60);
    var bassIds = trackIds.filter((id2) => trackAvg[id2] < 60);
    if (trebleIds.length >= 1 && bassIds.length >= 1) {
      useGrandStaff = true;
      staffOfTrack = {};
      for (var id of trebleIds) staffOfTrack[id] = "treble";
      for (var id of bassIds) staffOfTrack[id] = "bass";
    }
  } else if (trackIds.length === 1) {
    var trebleCount = allNotes.filter((n2) => n2.midi >= 60).length;
    var bassCount = allNotes.filter((n2) => n2.midi < 60).length;
    var minShare = Math.min(trebleCount, bassCount) / allNotes.length;
    if (trebleCount > 0 && bassCount > 0 && minShare >= 0.15) useGrandStaff = true;
  }
  var assignStaff = (n2) => {
    if (!useGrandStaff) return overallAvg < 60 ? "bass" : "treble";
    if (staffOfTrack && staffOfTrack[n2.trackIndex]) return staffOfTrack[n2.trackIndex];
    return n2.midi >= 60 ? "treble" : "bass";
  };
  for (var n of allNotes) n.staff = assignStaff(n);
  var songClef = useGrandStaff ? "grand" : overallAvg < 60 ? "bass" : "treble";
  var midiToNoteSpelling = (m) => {
    var pc = (m % 12 + 12) % 12;
    var letters = useFlat ? _MIDI_LETTERS_FLAT : _MIDI_LETTERS_SHARP;
    var accs = useFlat ? _MIDI_ACC_FLAT : _MIDI_ACC_SHARP;
    var letter = letters[pc];
    var acc = accs[pc];
    var spnOct = Math.floor(m / 12) - 1;
    if (acc !== "none" && ksAlterDir === acc && ksAlteredLetters.has(letter)) acc = "none";
    return { name: letter, octave: spnOct, accidental: acc };
  };
  var ticksToDur = (t) => {
    if (t >= ppq * 4) return "whole";
    if (t >= ppq * 2) return "half";
    if (t >= ppq) return "quarter";
    if (t >= ppq / 2) return "eighth";
    return "sixteenth";
  };
  var durToTicks = (d) => ({ whole: ppq * 4, half: ppq * 2, quarter: ppq, eighth: ppq / 2, sixteenth: ppq / 4 })[d] || ppq;
  var beatsInQuarters = ts.top * (4 / ts.bottom);
  var ticksPerMeasure = beatsInQuarters * ppq;
  var nextId = Date.now();
  var newId = () => nextId++;
  var buildStaffMeasures = (notes, staffName) => {
    if (notes.length === 0) return [];
    notes.sort((a, b) => a.ticks - b.ticks || a.midi - b.midi);
    var groups = [];
    for (var n2 of notes) {
      if (groups.length && groups[groups.length - 1].ticks === n2.ticks) groups[groups.length - 1].notes.push(n2);
      else groups.push({ ticks: n2.ticks, notes: [n2] });
    }
    var measures2 = [];
    var slot = (mi2) => {
      while (measures2.length <= mi2) measures2.push({ notes: [] });
      return measures2[mi2];
    };
    var restNote = (durStr) => ({
      id: newId(),
      x: 80,
      name: "B",
      octave: 4,
      duration: durStr,
      dotted: false,
      triplet: false,
      accidental: "none",
      isRest: true,
      staff: staffName,
      lyric: "",
      tie: false
    });
    var fillRest = (from, to) => {
      var t = from;
      while (t < to) {
        var mi2 = Math.floor(t / ticksPerMeasure);
        var measureEnd2 = (mi2 + 1) * ticksPerMeasure;
        var remaining = Math.min(to, measureEnd2) - t;
        while (remaining >= sixteenth) {
          var chunk;
          if (remaining >= ppq * 4 && t % (ppq * 4) === 0) chunk = ppq * 4;
          else if (remaining >= ppq * 2 && t % (ppq * 2) === 0) chunk = ppq * 2;
          else if (remaining >= ppq && t % ppq === 0) chunk = ppq;
          else if (remaining >= ppq / 2 && t % (ppq / 2) === 0) chunk = ppq / 2;
          else chunk = ppq / 4;
          slot(mi2).notes.push(restNote(ticksToDur(chunk)));
          t += chunk;
          remaining -= chunk;
        }
        t = Math.min(to, measureEnd2);
      }
    };
    var cursor = 0;
    for (var g of groups) {
      if (g.ticks > cursor) fillRest(cursor, g.ticks);
      var sorted = g.notes.sort((a, b) => a.midi - b.midi);
      var primary = sorted[0];
      var mi = Math.floor(g.ticks / ticksPerMeasure);
      var measureEnd = (mi + 1) * ticksPerMeasure;
      var finalDurTicks = Math.min(primary.durationTicks, measureEnd - g.ticks);
      var finalDur = ticksToDur(finalDurTicks);
      var pSp = midiToNoteSpelling(primary.midi);
      var chord = sorted.slice(1).map((c) => {
        var sp = midiToNoteSpelling(c.midi);
        return { name: sp.name, octave: sp.octave, accidental: sp.accidental, tie: false };
      });
      var note = {
        id: newId(),
        x: 80,
        name: pSp.name,
        octave: pSp.octave,
        duration: finalDur,
        dotted: false,
        triplet: false,
        accidental: pSp.accidental,
        isRest: false,
        staff: staffName,
        lyric: "",
        tie: false
      };
      if (chord.length > 0) note.chord = chord;
      slot(mi).notes.push(note);
      cursor = g.ticks + durToTicks(finalDur);
    }
    return measures2;
  };
  var measures;
  if (useGrandStaff) {
    var trebleMeasures = buildStaffMeasures(allNotes.filter((n2) => n2.staff === "treble"), "treble");
    var bassMeasures = buildStaffMeasures(allNotes.filter((n2) => n2.staff === "bass"), "bass");
    var len = Math.max(trebleMeasures.length, bassMeasures.length);
    measures = [];
    for (var i = 0; i < len; i++) {
      var tm = trebleMeasures[i] || { notes: [] };
      var bm = bassMeasures[i] || { notes: [] };
      measures.push({ notes: [...tm.notes, ...bm.notes] });
    }
  } else {
    measures = buildStaffMeasures(allNotes, songClef === "bass" ? "bass" : "treble");
  }
  return {
    title: (fileName || "Imported MIDI").replace(/\.midi?$/i, "").trim() || "Imported MIDI",
    composer: "",
    bpm,
    keySig,
    songKey: keySig,
    timeSig: ts,
    clef: songClef,
    difficulty: 0,
    measures: measures.length > 0 ? measures : [{ notes: [] }]
  };
}
var displayOctave = (letter, spnOctave) => spnOctave;
var EMPTY_KEY_ACCIDENTALS = Object.freeze([]);
var IS_LOCALHOST = typeof window !== "undefined" && (window.location.hostname === "localhost" || /^127\./.test(window.location.hostname) || /^192\.168\./.test(window.location.hostname) || /^10\./.test(window.location.hostname) || /\.local$/i.test(window.location.hostname));
var IS_ANDROID = typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent || "");
var STAFF_TOP = 60;
var LINE_SPACING = 32;
var STAFF_LEFT = 80;
var BASE_MEASURE_WIDTH = 800;
var NOTE_RX = 20;
var NOTE_RY = 16;
var _CHORD_LETTER = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
function chordPlacement(primaryName, primaryOctave, chord, stemUp) {
  var all = [
    { idx: _CHORD_LETTER[primaryName] + (primaryOctave || 0) * 7, key: "__primary__" },
    ...(chord || []).map((c, i2) => ({ idx: _CHORD_LETTER[c.name] + (c.octave || 0) * 7, key: "c" + i2, ref: c }))
  ].sort((a, b) => a.idx - b.idx);
  var sides = new Array(all.length);
  if (stemUp) {
    sides[0] = "left";
    for (var i = 1; i < all.length; i++) {
      var prevDiff = all[i].idx - all[i - 1].idx;
      if (prevDiff === 1) sides[i] = sides[i - 1] === "left" ? "right" : "left";
      else sides[i] = "left";
    }
  } else {
    sides[all.length - 1] = "right";
    for (var i = all.length - 2; i >= 0; i--) {
      var nextDiff = all[i + 1].idx - all[i].idx;
      if (nextDiff === 1) sides[i] = sides[i + 1] === "left" ? "right" : "left";
      else sides[i] = "right";
    }
  }
  var offsetByKey = {};
  var maxOffset = 0, minOffset = 0;
  for (var i = 0; i < all.length; i++) {
    var off;
    if (stemUp) off = sides[i] === "right" ? 2 * NOTE_RX : 0;
    else off = sides[i] === "left" ? -2 * NOTE_RX : 0;
    offsetByKey[all[i].key] = off;
    if (off > maxOffset) maxOffset = off;
    if (off < minOffset) minOffset = off;
  }
  return { offsetByKey, maxOffset, minOffset };
}
var STEM_HEIGHT = 90;
var CLEF_WIDTH = 110;
var TIME_SIG_WIDTH = 90;
var ROW_HEIGHT = 420;
var BASS_STAFF_TOP = STAFF_TOP + 4 * LINE_SPACING + 220;
var NOTE_DURATIONS = [
  { id: "whole", label: "whole", beats: 4, name: "Whole" },
  { id: "half", label: "half", beats: 2, name: "Half" },
  { id: "quarter", label: "quarter", beats: 1, name: "Quarter" },
  { id: "eighth", label: "eighth", beats: 0.5, name: "8th" },
  { id: "sixteenth", label: "sixteenth", beats: 0.25, name: "16th" },
  { id: "thirty-second", label: "thirty-second", beats: 0.125, name: "32nd" }
];
var NOTE_UNICODE_ICONS = { whole: "\u{1D15D}", half: "\u{1D157}\u{1D165}", quarter: "\u{1D158}\u{1D165}", eighth: "\u{1D158}\u{1D165}\u{1D16E}", sixteenth: "\u{1D158}\u{1D165}\u{1D16F}", "thirty-second": "\u{1D158}\u{1D165}\u{1D170}" };
var isCompoundMeter = (ts) => ts && ts.bottom === 8 && (ts.top === 6 || ts.top === 9 || ts.top === 12);
function quarterSecondsAtBpm(bpm, ts) {
  if (!bpm || bpm <= 0) return 0.5;
  if (!ts) return 60 / bpm;
  if (ts.bottom === 2) return 60 / bpm / 2;
  if (ts.bottom === 8) return 60 / bpm * 2;
  return 60 / bpm;
}
function pulseBeatsPerMeasure(ts) {
  if (!ts) return 4;
  return ts.top;
}
var TEMPO_RANGES = {
  larghissimo: "\u226420",
  // ≤20
  grave: "20\u201340",
  // en-dash ranges
  largo: "40\u201360",
  larghetto: "60\u201366",
  adagio: "66\u201376",
  adagietto: "70\u201380",
  andante: "76\u2013108",
  andantino: "80\u2013108",
  moderato: "108\u2013120",
  allegretto: "112\u2013120",
  allegro: "120\u2013156",
  vivace: "156\u2013176",
  presto: "168\u2013200",
  prestissimo: "200+"
};
function measureBeatsInQuarters(ts) {
  if (!ts || !ts.bottom) return 4;
  return ts.top * 4 / ts.bottom;
}
function DurationIcon({ type, size = 28 }) {
  var ch = NOTE_UNICODE_ICONS[type];
  if (!ch) return null;
  return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, fontFamily: "'Noto Music', serif", lineHeight: 1 } }, ch);
}
var REST_IMAGES = {
  whole_rest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAAaUlEQVR4nO3XOw7AIBDE0J3c/86bM9Dk4/GrKbBWCMjuTpPr7Q08zWA6g+nqgjMzVfdS3YQNpsvp0zLJp8787uZkfd2EDaYzmM5gOoPpDKYzmM5guuP/8N/VTdhgOoPpDKYzmM5gurrgGxzGDkNIqXFtAAAAAElFTkSuQmCC",
  half_rest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAAZ0lEQVR4nO3aQQrAIBAEwZ2Q/3958gYPSaTtOivY7GnBtJ2TXH8/4GsG0xlMZzCdwXQG0xlMd69eSLLVetU2K+ePm7DBdAbTGUxnMJ3BdAbTGUyXmdlqv33bcRM2mC7+AIAzmM5gugdfuAtJU7NsdQAAAABJRU5ErkJggg==",
  quarter_rest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAE3CAYAAABYejSEAAAHZUlEQVR4nO2dW5LjOgxD4am7/y17Pvq6KpN2Yj1JkMRZQEfSMSDFXbGP8zwh+PjjPQBxj8SQIjGkSAwpEkPKNjHHcZzHcejIN8ix+rh8J+M8z2PphxRgaWI+JUTJ6cdsj5GcPrT5k2IqRqlpZ6kYbfLrWJ6YJzlKTRtbqkxy5tm2x0jOHDqVkbJVjFIzzvbE6KQ2hnuVKTX3mIhRpfVjlhhVWh/uVXah1PyLqRhVWjvmiVGltUFTZRdKzQ8uYlRpz7glRpX2Hboqu6ieGlcxqrTP0CamOu5ilJp73MW0UFEOhRid0H5DIaaFaqmhEdOSmkpyaMQAqrRXqMS0UCU14cQANeTQiVGd/UAnBtBBACAVI4KLyZwaWjGte01WObRiesgoJ4WYjFCL6Tk6Z0sNtRigrhx6MVVJJyZLatKJAXLICSGm4v2zEGJGiJ6aMGJGUhNZThgx1UgvJmpq0ouJSigxo6eziKkJJWaGaHLKiAFiySklJhLlxERJTTkxQAw5JcVEoKwY9tSUFQNwyykthpnyYlhTU14MKxIDztRIzP+wyZEYUiTmBabUSMwbLHJCiWFZNAtCibGC4QKQmA94y5GYL3jKkRhSwojxunq9PjeMmGpITAMeqQkhxvuE5DGGEGIqIjEdWKZGYjqxkkMvhmF/8YBaDKsUi3FRi2FmtxyJIYVWDGuNvbJzjLRiorBLDqWYCGl5Zcd4KcUIQjHR0nKxetx0YsQPVGKipuVi5fipxGRglRwaMdHTshoaMZlYcZFRiFFafkMhJhsrnkjoLkZpucdVTEYpq57f6Z6YTKx8qKqbmGxpWf2kWxcx2aTswFxMRik7ngutPWaSXQ/rNhWTMS27MBOTUcrOR9urygbZ/b4BEzHZ0mLxEojtYrJJsWKrmIxSrF6Zoj2mA8v32GwTkzEtlmwRk1GK9VuflouRlDUsFZNRihfLxGSV4vXiOp3KvuD5NsH/Zv+AkrIHJYaUKTFKyz6GxWSVwsKQmMxSGNICDIiRFBu6xGSWwkazGEmxpUlMBSlMNQY0iJEUH/QFk5TjPNsCkTU5jGkBlBhamsWwXlkzMM+pKzHME+mFfS7dVcY+oSxojyFlSEz01EQY/3BiIkzujijjnqqyKJOMSKk9JtKFNC0m0mQjsSQxkrOeMlUW7eJZJibaxNlZmhhWOazj+sbyKou4CIxs2WMkZ55tmz+LHJZx9FLmVBaNrWKiXq0MbE+Mp5zIF4ZJlUVeIC+0x5BiJsY6NdFTapqY6ItliXmVSU4b2mNIcRGj1DzjlhjJ+Y6qjBRXMUrNZ9wTIzn3uIsBJOcOCjHiNzRilJp/oREDSM4rVGIAybmgEwNIDkAqBpAcWjHVoRYzk5rozyWgFgPUrTR6MTNETk0IMRVTE0IMMC4namrCiAFqJSeUGKCOnHBiRohYZyHFjKQmmpyQYoD8lRZWDNAvJ1JqQovJTHgxWVMTXkxWUojJmJoUYoB8ctKIAXLJSSUmE+nEZElNOjFAjrsCKcX0wpiatGKiV1paMUDsSkstphem1KQXE7XS0osBYlba9EuwV9Jzte5c7OM4Tm+Zza/C2vLhC2ujZSF7P89TjouY3T3+aUFHPtdLjpkYr031fWGjpMZk8/c86bx/dpRT2vbEsBw/gR8po+OxTs62UxmTkAvGMX1iS5VFWoBWrOe0XExGKReWc1sqJrMUa5aJqSLFap5LxFSRcmEx32kx1aRc7J53ibvLEZkSUzUtFzvnPyymupTdDN2SkZTfrL5loz2GlG4xSss9q9dFiVnISjldYpSWZ1atkRJDSrMYpaWdFWulxGxiVo7EbGRGTpMY1Zg9SsxmRi/qRzFKyzwja6jEkCIxRvSmRmIM6ZHzVYz2Fz+ofh9jwYr/m8xcsK2/vfkoJlNaVv8T6/Xv7Vqnj//BjCzG/ddgDWv3NMZUYryFvPO0ht/Gm2KPYRNyMfOjqfCJYZXyxLW+n8Yf9nvMeZ5HVCnA8wUVUkxkIa98m0c4MVmkPBFKTBUpQCAxlaQAQcRUkwIEEFNRCkAupqoUgFxMZSSGFFoxlWsMIBVTXQpAKkZIDC0SQwqdGO0vP3wUowXyhS4x4oevYpQaP5QYUiSGFIkh5VGM9hkfmhIjOfaoykhpFqPU2KLEkNIlRqmxozsxkmODqowUOjFRfv6xmyExqrP9DCdGcvYyVWWSsw+6PQbQPgMsEKPU7GFJYiRnPZRVBqjOlolRatayNDGSs47lVbZSTuU6o91jLqrK2SJGlTbPtsRIzhxbq2yVnIp1tn2PUXLGMNn8vZ9DGRGzU5nk9GF6XFattWP+PWZWTpXUuHzBVHKecfvmPyOnQmpcb8lIzmfc75Wp1u5xFwOMy8mcGgoxgOS8QyMGUK29MvTaeAt6k5BNKlViXuld6GyVRisGqC2Htsre6Vn0DLVGnZhXehY7Q3LCiAFyJKGVUGKAdjnRUxNmj7ljxbvAWAkt5mLmXWCshKuyOyIu/BMpXh4H2Lyb0pIUVZaRFFWWEYkhRWJIkRhSJIaUv/iaIH7XKCttAAAAAElFTkSuQmCC",
  eighth_rest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAFFCAYAAADmXKH8AAAKTElEQVR4nO3d627jthaAUXrQ939l9UehqeNYtiTeNsm1gAMUPYNObOrLJmU7eWzbloCY/vT+AoBjAoXABAqBCRQCEygE9k/vLyDH4/HIugW9bduj1NcCNQw7QXPjLPXfgJoe0V8H7RGRyUoUoSdorwlnshJF2AkaJRLTlByv1/HV6ylkoFHifCZUrvp0HZ+9nsIEGjHKd4TKGWev52/XU4gz6ChxpjTW10ofV66Rb3+22wQd/UI3SXnn7nV9dD11maCjx5nSHI+BsmpcE80DnenCnumxkCfnWvi0GwtxBh2ZSKkVZ0qNA531Yp71cfFd7bU3QQsR6XparHmzQFe4gFd4jPynxFqfeSWgSaArXbgrPdZVtYozpQaBumCZSevruWqgq8a56uOeXY91rRbo6hfp6o9/NiXX88q70NzFrUikc+gVZ0oChY96f5OtEmjvBxWJ52JcEdaueKARHhTkqnEd3/kElC0uvIgSZ0oChR+i7QAF2kC0Ree9iOtUNNCIDxDOqHnt5vz0DROU5UUeLMUCjfwg4Ujt6zb3Z1eZoCxrhKEiUJbUIs4SP/lRoI2M8N16FSOthUAbGunCmNHj8dharUGpn5s89C/whTNG/sZogjK10X+/rECZ1siTc1ck0BmeCObS65os/Tt7TFCmM9PAKBKo3/RFFD3jrNGBu7hMoffUrDWkBMrQeodZmzNoQ44CZc0eZ0oCbUacZUWKs+baCpThrBJnSgJlMJHibEGgDGO1OFNyF5cBRA2zxX2FYhPUTRBqWDnOlApvcUVKKS0/uxmZMygE5gzagJ3FOaNMzJbraYISgjjfEyjdjRJnD8UDtZ37yfPxmTg/q3IG3bbt4YnnyKjXRo9vtra4FZmev4nzmmqBrn5xrv743xk1zp6qTlAXKSl500EOr4NW4BvTf2aJsud6Vg/UDaO1WOuy3CQqbOXpOWOcvdezSaC9H2QrqzzOV86Y9Ty2rd3zOvMirhjnzOuZUow1bbrFjfCAa5j1cR0xMdtpOkH//qUTLe5KcY6wbs/rkfP1RlnXLjeJojz4XLM8jm9GmZgzrkeXCfr3Lx9g0Y/MeDE8G21tXtdjhumZkpdZbom0gDWsHGc0Xd9JNOKbGGaNc7R12JVej2jr2/2tfvsTEv0CibZwJUV/7o+8W5NRH8uR7oHuok7TGcOM+DxfUWtNIq5115tERyJcQBEXK1eE5zXHtzWZ5cbQszAT9FnPaRp1oe4YPchnNeOMLGSgKcXd8kY183M10zfNq0JucZ/1uPBGuiBmDfPqGsy4vU1pgEB3vS/EXovY+3H3cOe5vvs8RY4zpcBb3Fe9X47Z/95WC7pamNFD6WWYQHe9z6arhTOCmddkmC3ukZkXZwW5k3PWs+du+PfijvAk8544vxtui/tOqc8AUtcoUUQy/AR95SKIZ9u2h3W5Z4oJ+spEjSFqlFG/rneGv0l0hVjrannhz/q656spJ+iR3q+lzmq0i34kSwW6swXO0zvIldZsyUCfmarn9Q4z14hf/1Jn0KtWjjbqxbzK2XO3/AT9ZPbPII560a5EoBl6vy/4jpGjHO25LkGgmUpc8HcuvJFDa23k58oZNKjWH2+LbrWz584EDWr0C4sypnsvLvNZ8ey5EyihrfCRsk8ECoEJlCnNMD1TEiiBrXz23AmUkFY/e+4ECoEJlKnMND1TEigBOXv+T6CE4uz5k0CZwoxxpiRQCE2ghOHs+ZtAGd6s29uUBEoQq37e8xuBQmACpTtnz2MCZVizb29TEiidOXt+JlAITKB04+z5nUAZzirb25QESifOnucIlOZsbc8TKAQmUIax2vY2JYHSmLPnNQKlGWfP6wRKE36UyT0ChcAECoEJlNBW3t6mJFAacOf2PoFSlTu3eQRKSKbnfwRKNaZnPoFShTjLECjh2N7+T6CEIs6fBAqBCZTinD/LEShFeVN8WQKlGHGWJ1CKsK2tQ6AQmEDpzvb2mEDpSpyfCRQCEyjZ3CCqR6Bk8dJKXQLlNnHWJ1AITKAQmEC5xfa2DYHSlDivESiXeVmlHYFyiTjbEijN2N5eJ1BOc2OoPYFCYAKlOtPzPoFCYALlFL+hrA+B8pWXVvoRKB+5c9uXQCEwgVKF6VmGQCEwgXLIzaH+BMpbbg7FIFB+EWccAuUH29pYBEoxpmd5AoXABEoRpmcdAoXABMpfbhDFI1BSSl5aiUqgiDMwgUJgAl2cc2dsAuU229v6BMot4mxDoAuzvY1PoIty53YMAoXABLog03McAoXABMpppmd7AoXABLoYv2NlLAJdiNc9xyPQRbhzOyaBQmAC5SPTsy+BQmACXYA7t+MS6OTcuR2bQHnL9Izhn95fAHWYnHMwQfnF9IxDoBCYQPnB9IxFoBCYQCfkdc95CHQy7t7ORaAT8YmV+Qh0EibnnAQKgQkU29vABLo4ccYm0Ak4f85LoIMT59wEujDb2/gEOjCve85PoBCYQAfl7LkGgS7I9nYcAh2Qs+c6BAqBCXQhpud4BDoYN4fWItBFmJ5jEuhATM/1CHQQ7tyuSaAQmEAHYHquS6DBOXeuTaATMz3HJ1AITKCBOXsi0KCcPUlJoFMyPechUAhMoAE5e7ITaDDOnjwT6ERMz/kIFAITaCDOnrwSaBDOnrwj0AmYnvMSKAQm0ACcPTki0M6cPflEoBCYQDvKnZ62t/MT6KDEuQaBQmAC7cSdW84Q6GDEuRaBduClFc4SKAQm0MacPblCoBCYQBsyPblKoBCYQBsxPblDoBCYQBswPblLoJV5UwI5BBqY6YlAITCBVuTsSS6BVuLsSQkCDcj0ZCdQCEygFTh7UopAC3P2pCSBBmJ68kqgEJhAC3L2pDSBFuLsSQ0CDcD05IhAITCBFuDsSS0CzeTsSU0ChcAEmsHv96Q2gXYiTs4Q6E3OnrQg0A5MT84S6A2mJ60ItDHTkysECoEJ9CLvGqIlgV7g7ElrAm3E9OQOgZ5ketKDQBswPbnrj8kAcf3x3b0uzy85Tk/Q1Set0Ojh1AR9PB7b859bNdarkYqaXI9tO9/aa6grO/NNynNFrkuB8tOnSMVJCUVeZtkv1NW2vtu2Pfb/vf77Xl8Tc8meoPu21/YXysueoO/iXG2SQi3F3kkkSiiv2Bb39Z+BfMW2uM9n0ZTWvXEEJRWdoDl/Bvjt7wR9nXRnJ9+Z8MQJ9zy2bft1jnz+A+KCfj5ucWtsTW134bxHSunwNcwSIbnLC/f9naA14/FuI7jn7Ra3Raw1/tswmy6fZhEpnHP4RoWSbzBwZxjuOQz03buCjnx7DVWQcE/VLa6tLOTJfi9u7lbYe3XhWJEJalJCHUU+D/oa59WpaIrCe7/eSZT1HzNJoaivPxf3+U7up0l3dwqannDsxxb3OZb9n/eA3/30umf7/y9UKKfKzyS6Epv36MKxwzfLiwb6+5PSz0+bPG9t301CW1Fo509K58+Zz3/2nbvbXOC9j2fQox+DcobtMeSr9mkWExTyVXuzvJtMkO/ryyw1fxwn8Nm/Ds0k4tvntusAAAAASUVORK5CYII="
};
var REST_SYMBOLS = {
  whole: "whole_rest",
  half: "half_rest",
  quarter: "quarter_rest",
  eighth: "eighth_rest",
  sixteenth: "sixteenth_rest"
};
var REST_UNICODE = {
  whole_rest: "\u{1D13B}",
  half_rest: "\u{1D13C}",
  quarter_rest: "\u{1D13D}",
  eighth_rest: "\u{1D13E}",
  sixteenth_rest: "\u{1D13F}"
};
function RestIcon({ type, size = 24 }) {
  var ch = REST_UNICODE[type];
  if (!ch) return null;
  return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, fontFamily: "'Noto Music', serif", lineHeight: 1 } }, ch);
}
var ACCIDENTALS = [
  // "natural" = explicit ♮ override (overrides key signature).
  // "none" still exists as an internal value — the default for new notes,
  // meaning "follow the key signature". It has no toolbar button.
  { id: "natural", label: "\u266E", name: "Natural" },
  { id: "sharp", label: "\u266F", name: "Sharp" },
  { id: "flat", label: "\u266D", name: "Flat" }
];
var NOTE_NAMES = ["C", "D", "E", "F", "G", "A", "B"];
var DYNAMICS = [
  { id: "ppp", glyph: "\u{1D18F}\u{1D18F}\u{1D18F}", vel: 0.04, name: "pianississimo" },
  { id: "pp", glyph: "\u{1D18F}\u{1D18F}", vel: 0.063, name: "pianissimo" },
  { id: "p", glyph: "\u{1D18F}", vel: 0.1, name: "piano" },
  { id: "mp", glyph: "\u{1D190}\u{1D18F}", vel: 0.158, name: "mezzo-piano" },
  { id: "mf", glyph: "\u{1D190}\u{1D191}", vel: 0.251, name: "mezzo-forte" },
  { id: "f", glyph: "\u{1D191}", vel: 0.398, name: "forte" },
  { id: "ff", glyph: "\u{1D191}\u{1D191}", vel: 0.631, name: "fortissimo" },
  { id: "fff", glyph: "\u{1D191}\u{1D191}\u{1D191}", vel: 1, name: "fortississimo" }
];
var DYNAMIC_VEL = Object.fromEntries(DYNAMICS.map((d) => [d.id, d.vel]));
var DYN_ACCENTS = [
  { id: "sf", label: "sf", velMul: 1.4, name: "sforzando (very strong accent)" },
  { id: "sfz", label: "sfz", velMul: 1.5, name: "sforzando (very strong accent)" },
  { id: "fp", label: "fp", velMul: 1.3, name: "fortepiano (loud then soft)" },
  { id: "rf", label: "rf", velMul: 1.25, name: "rinforzando" }
];
var DYN_ACCENT_MUL = Object.fromEntries(DYN_ACCENTS.map((d) => [d.id, d.velMul]));
var KEY_SIGNATURES = [
  { id: "C", name: "C Major / A minor", sharps: [], flats: [] },
  { id: "G", name: "G Major / E minor", sharps: ["F"], flats: [] },
  { id: "D", name: "D Major / B minor", sharps: ["F", "C"], flats: [] },
  { id: "A", name: "A Major / F\u266F minor", sharps: ["F", "C", "G"], flats: [] },
  { id: "E", name: "E Major / C\u266F minor", sharps: ["F", "C", "G", "D"], flats: [] },
  { id: "B", name: "B Major / G\u266F minor", sharps: ["F", "C", "G", "D", "A"], flats: [] },
  { id: "F#", name: "F\u266F Major / D\u266F minor", sharps: ["F", "C", "G", "D", "A", "E"], flats: [] },
  { id: "C#", name: "C\u266F Major / A\u266F minor", sharps: ["F", "C", "G", "D", "A", "E", "B"], flats: [] },
  { id: "F", name: "F Major / D minor", sharps: [], flats: ["B"] },
  { id: "Bb", name: "B\u266D Major / G minor", sharps: [], flats: ["B", "E"] },
  { id: "Eb", name: "E\u266D Major / C minor", sharps: [], flats: ["B", "E", "A"] },
  { id: "Ab", name: "A\u266D Major / F minor", sharps: [], flats: ["B", "E", "A", "D"] },
  { id: "Db", name: "D\u266D Major / B\u266D minor", sharps: [], flats: ["B", "E", "A", "D", "G"] },
  { id: "Gb", name: "G\u266D Major / E\u266D minor", sharps: [], flats: ["B", "E", "A", "D", "G", "C"] },
  { id: "Cb", name: "C\u266D Major / A\u266D minor", sharps: [], flats: ["B", "E", "A", "D", "G", "C", "F"] }
];
var CHROMATIC_SHARP = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
var CHROMATIC_FLAT = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
var KEY_TONIC = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11
};
var KEY_LABEL = {
  C: "C",
  "C#": "C\u266F",
  Db: "D\u266D",
  D: "D",
  "D#": "D\u266F",
  Eb: "E\u266D",
  E: "E",
  F: "F",
  "F#": "F\u266F",
  Gb: "G\u266D",
  G: "G",
  "G#": "G\u266F",
  Ab: "A\u266D",
  A: "A",
  "A#": "A\u266F",
  Bb: "B\u266D",
  B: "B"
};
var SHARP_KEYS_SET = /* @__PURE__ */ new Set(["C", "G", "D", "A", "E", "B", "F#", "C#"]);
var KEY_UP_M2 = {
  C: "D",
  G: "A",
  D: "E",
  A: "B",
  E: "F#",
  B: "C#",
  "F#": "Ab",
  Gb: "Ab",
  // would be G# major → use Ab enharmonic
  "C#": "Eb",
  Db: "Eb",
  // would be D# major → use Eb enharmonic
  F: "G",
  Bb: "C",
  Eb: "F",
  Ab: "Bb",
  Cb: "Db"
};
var KEY_SIG_ORDER = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"];
var LETTER_SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
var ACC_DELTA = { none: 0, natural: 0, sharp: 1, flat: -1, "double-sharp": 2, "double-flat": -2 };
var LETTER_IDX = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
var IDX_TO_LETTER = ["C", "D", "E", "F", "G", "A", "B"];
var SHARP_SPELL = [["C", ""], ["C", "#"], ["D", ""], ["D", "#"], ["E", ""], ["F", ""], ["F", "#"], ["G", ""], ["G", "#"], ["A", ""], ["A", "#"], ["B", ""]];
var FLAT_SPELL = [["C", ""], ["D", "b"], ["D", ""], ["E", "b"], ["E", ""], ["F", ""], ["G", "b"], ["G", ""], ["A", "b"], ["A", ""], ["B", "b"], ["B", ""]];
var SHARP_POSITIONS = { F: 0, C: 3, G: -1, D: 2, A: 5, E: 1, B: 4 };
var FLAT_POSITIONS = { B: 4, E: 1, A: 5, D: 2, G: 6, C: 3, F: 7 };
function isMultiStaff(clefMode) {
  return clefMode === "grand" || clefMode === "grandBass";
}
function drumShapeForPiece(piece) {
  if (!piece) return null;
  var p = piece.toLowerCase();
  if (p.includes("open hi-hat")) return "circle-x";
  if (p.includes("pedal hi-hat")) return "circle-slash";
  if (p.includes("side stick") || p.includes("cross stick") || p.includes("rim")) return "slash";
  if (p.includes("tambourine")) return "diamond";
  if (p.includes("cowbell")) return "triangle-down";
  if (p.includes("crash") || p.includes("splash") || p.includes("china")) return null;
  if (p.includes("hi-hat") || p.includes("cymbal") || p.includes("ride")) return "x";
  return null;
}
function drumNoteColor(drumPiece) {
  if (!drumPiece) return null;
  var p = drumPiece.toLowerCase();
  if (p.includes("splash") || p.includes("china") || p.includes("crash")) return "var(--b-color)";
  if (p.includes("ride")) return "var(--g-color)";
  if (p.includes("hi-hat") || p.includes("hihat") || p.includes("hi hat")) return "var(--a-color)";
  if (p.includes("cowbell") || p.includes("tambourine")) return "var(--a-color)";
  if (p.includes("bass drum") || p.includes("kick")) return "var(--c-color)";
  if (p.includes("snare") || p.includes("side stick")) return "var(--e-color)";
  if (p.includes("floor tom")) return "var(--d-color)";
  if (p.includes("low tom")) return "var(--d-color)";
  if (p.includes("tom")) return "var(--f-color)";
  return null;
}
function drumStaffPos(piece) {
  if (!piece) return null;
  var p = piece.toLowerCase();
  if (p.includes("pedal hi-hat")) return { name: "D", octave: 4 };
  if (p.includes("hi-hat") || p.includes("hihat")) return { name: "G", octave: 5 };
  if (p.includes("china")) return { name: "D", octave: 6 };
  if (p.includes("splash")) return { name: "C", octave: 6 };
  if (p.includes("crash") && p.includes("2")) return { name: "B", octave: 5 };
  if (p.includes("crash")) return { name: "A", octave: 5 };
  if (p.includes("ride")) return { name: "F", octave: 5 };
  if (p.includes("high floor")) return { name: "A", octave: 4 };
  if (p.includes("low floor") || p.includes("floor tom")) return { name: "G", octave: 4 };
  if (p.includes("high tom")) return { name: "E", octave: 5 };
  if (p.includes("hi-mid tom") || p.includes("mid tom")) return { name: "D", octave: 5 };
  if (p.includes("low tom")) return { name: "B", octave: 4 };
  if (p.includes("tom")) return { name: "E", octave: 5 };
  if (p.includes("tambourine") || p.includes("cowbell")) return { name: "E", octave: 5 };
  if (p.includes("snare") || p.includes("side stick")) return { name: "C", octave: 5 };
  if (p.includes("bass drum 2") || p.includes("acoustic bass")) return { name: "E", octave: 4 };
  if (p.includes("bass drum") || p.includes("kick")) return { name: "F", octave: 4 };
  return null;
}
function drumPlayPiece(players, piece, time) {
  if (!piece || !players) return;
  try {
    if (typeof Tone !== "undefined" && Tone.start) Tone.start();
  } catch (e) {
  }
  var p = String(piece).toLowerCase();
  var _play = (key, rate) => {
    try {
      var pl = players.player(key);
      pl.playbackRate = rate || 1;
      pl.start(time);
    } catch (e) {
    }
  };
  if (p.includes("open hi-hat")) _play("hihat-open", 1);
  else if (p.includes("pedal hi-hat")) _play("hihat-pedal", 1);
  else if (p.includes("hi-hat")) _play("hihat-closed", 1);
  else if (p.includes("side stick")) _play("snare", 1.7);
  else if (p.includes("electric snare")) _play("snare", 1.15);
  else if (p.includes("snare")) _play("snare", 1);
  else if (p.includes("bass drum 2")) _play("kick", 0.9);
  else if (p.includes("bass")) _play("kick", 1);
  else if (p.includes("low floor tom")) _play("tom-himid", 0.42);
  else if (p.includes("high floor tom")) _play("tom-himid", 0.561);
  else if (p.includes("floor tom 2")) _play("tom-himid", 0.42);
  else if (p.includes("floor tom")) _play("tom-himid", 0.561);
  else if (p.includes("low-mid tom")) _play("tom-himid", 0.561);
  else if (p.includes("hi-mid tom")) _play("tom-himid", 0.749);
  else if (p.includes("high tom")) _play("tom-himid", 1);
  else if (p.includes("low tom")) _play("tom-himid", 0.561);
  else if (p.includes("tom")) _play("tom-himid", 1);
  else if (p.includes("china")) _play("crash2", 0.85);
  else if (p.includes("splash")) _play("splash", 1);
  else if (p.includes("crash cymbal 2") || p.includes("crash 2")) _play("crash2", 1);
  else if (p.includes("crash")) _play("crash", 1);
  else if (p.includes("ride bell")) _play("ride-bell", 1);
  else if (p.includes("ride cymbal 2") || p.includes("ride 2")) _play("ride", 0.9);
  else if (p.includes("ride")) _play("ride", 1);
  else if (p.includes("cowbell")) _play("cowbell", 1);
  else if (p.includes("tambourine")) _play("tambourine", 1);
}
function labelForPiece(piece) {
  if (!piece) return null;
  var p = String(piece).toLowerCase();
  if (p.includes("hi-hat")) return "Hi-Hat";
  if (p.includes("snare") || p.includes("side stick")) return "Snare";
  if (p.includes("bass")) return "Bass";
  if (p.includes("low floor tom") || p.includes("floor tom 2")) return "Floor Tom 2";
  if (p.includes("floor tom")) return "Floor Tom 1";
  if (p.includes("low tom") || p.includes("low-mid tom")) return "Tom 2";
  if (p.includes("hi-mid tom") || p.includes("high tom") || p.includes("tom 1") || p.includes("tom")) return "Tom 1";
  if (p.includes("china") || p.includes("crash 2")) return "Crash 2";
  if (p.includes("crash")) return "Crash 1";
  if (p.includes("splash")) return "Splash";
  if (p.includes("ride")) return "Ride";
  return null;
}
function deriveClefFromMeasures(currentClef, measures) {
  var hasTreble = false, hasBass = false;
  for (var m of measures || []) {
    for (var n of m.notes || []) {
      if (n.staff === "bass") hasBass = true;
      else hasTreble = true;
      if (hasTreble && hasBass) break;
    }
    if (hasTreble && hasBass) break;
  }
  if (hasBass && hasTreble) {
    return currentClef === "grandBass" ? "grandBass" : "grand";
  }
  if (hasBass && !hasTreble) return "bass";
  return currentClef || "treble";
}
function noteToY(noteName, octave, clefMode, staff, bottomClefOverride, topClefOverride) {
  var noteOrder = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
  if (isMultiStaff(clefMode)) {
    var val = octave * 7 + noteOrder[noteName];
    var onBass = staff === "bass" ? true : staff === "treble" ? false : val < 28;
    var topIsBass = clefMode === "grandBass";
    if (!onBass) {
      var topIsBassEff = topClefOverride === "bass" ? true : topClefOverride === "treble" ? false : topIsBass;
      var refIdx = topIsBassEff ? noteOrder["A"] + 3 * 7 : noteOrder["F"] + 5 * 7;
      return STAFF_TOP + (refIdx - val) * (LINE_SPACING / 2);
    } else {
      var bottomIsBass = bottomClefOverride === "treble" ? false : bottomClefOverride === "bass" ? true : true;
      var refIdx = bottomIsBass ? noteOrder["A"] + 3 * 7 : noteOrder["F"] + 5 * 7;
      return BASS_STAFF_TOP + (refIdx - val) * (LINE_SPACING / 2);
    }
  }
  var effClef = topClefOverride === "bass" || topClefOverride === "treble" || topClefOverride === "alto" ? topClefOverride : clefMode;
  var refIdx = effClef === "bass" ? noteOrder["A"] + 3 * 7 : effClef === "alto" ? noteOrder["G"] + 4 * 7 : noteOrder["F"] + 5 * 7;
  var noteIdx = noteOrder[noteName] + octave * 7;
  return STAFF_TOP + (refIdx - noteIdx) * (LINE_SPACING / 2);
}
var ORCHESTRA_INSTRUMENTS = [
  { name: "Piccolo", clef: "treble" },
  { name: "Flute", clef: "treble" },
  { name: "Oboe", clef: "treble" },
  { name: "Clarinet", clef: "treble" },
  { name: "Bassoon", clef: "bass" },
  { name: "Contrabassoon", clef: "bass" },
  { name: "Horn", clef: "treble" },
  { name: "Trumpet", clef: "treble" },
  { name: "Trombone", clef: "bass" },
  { name: "Tuba", clef: "bass" },
  { name: "Timpani", clef: "bass" },
  { name: "Percussion", clef: "percussion" },
  { name: "Organ", clef: "treble" },
  { name: "Piano", clef: "treble" },
  { name: "Violin", clef: "treble" },
  { name: "Viola", clef: "alto" },
  { name: "Cello", clef: "bass" },
  { name: "Contrabass", clef: "bass" }
];
function buildConductorScoreSvg(score, opts) {
  opts = opts || {};
  var LINE = 9, SH = 4 * LINE, GAP = 18, GUT = 160, BEATPX = 36, TOP = opts.tempoName || opts.bpm ? 46 : 16;
  var STEPI = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
  var BOTTOM = { treble: 4 * 7 + 2, bass: 2 * 7 + 4, alto: 3 * 7 + 3 };
  var GLYPH = { treble: "\u{1D11E}", bass: "\u{1D122}", alto: "\u{1D121}", percussion: "" };
  var di = function(st, oc) {
    return oc * 7 + (STEPI[st] || 0);
  };
  var esc = function(s) {
    return String(s).replace(/[&<>]/g, function(c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  };
  var line = function(x1, y1, x2, y2, c, w) {
    return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + c + '" stroke-width="' + w + '"/>';
  };
  var staves = score.staves, measures = score.measures;
  var bpb = score.timeSig && score.timeSig.top || 4;
  var measW = bpb * BEATPX;
  var totalW = GUT + measures.length * measW + 40;
  var totalH = TOP + staves.length * (SH + GAP) + 20;
  var staffTopY = function(i) {
    return TOP + i * (SH + GAP);
  };
  var p = ['<svg xmlns="http://www.w3.org/2000/svg" width="' + totalW + '" height="' + totalH + '" viewBox="0 0 ' + totalW + " " + totalH + '" font-family="serif">'];
  p.push('<rect width="' + totalW + '" height="' + totalH + '" fill="#fbfbf8"/>');
  if (opts.tempoName || opts.bpm) {
    p.push('<text x="' + (GUT - 6) + '" y="' + (TOP - 22) + '" font-size="15" fill="#101418" font-family="serif"><tspan font-weight="700">' + (opts.tempoName ? esc(opts.tempoName) : "") + "</tspan>" + (opts.bpm ? "<tspan>   \u2669 = " + opts.bpm + "</tspan>" : "") + "</text>");
  }
  staves.forEach(function(s, i) {
    var ty = staffTopY(i), midY = ty + 2 * LINE;
    p.push('<text x="10" y="' + (midY + 4) + '" font-size="13" fill="#222" font-family="sans-serif">' + esc(s.name) + "</text>");
    var g = GLYPH[s.clef] || "";
    if (g) p.push('<text x="' + (GUT - 26) + '" y="' + (ty + SH + 2) + '" font-size="' + (SH + 10) + '" fill="#111">' + g + "</text>");
    if (s.clef === "percussion") {
      p.push(line(GUT, midY, totalW - 20, midY, "#9aa3af", 1));
    } else {
      for (var L = 0; L < 5; L++) {
        var y = ty + L * LINE;
        p.push(line(GUT, y, totalW - 20, y, "#aab2bd", 1));
      }
    }
  });
  var stackTop = staffTopY(0), stackBot = staffTopY(staves.length - 1) + SH;
  for (var m = 0; m <= measures.length; m++) {
    var x = GUT + m * measW;
    p.push(line(x, stackTop, x, stackBot, "#5b6675", m === 0 || m === measures.length ? 2 : 1));
    if (m < measures.length) p.push('<text x="' + (x + 3) + '" y="' + (stackTop - 4) + '" font-size="9" fill="#7a8694" font-family="sans-serif">' + measures[m].number + "</text>");
  }
  measures.forEach(function(meas, mi) {
    var mx = GUT + mi * measW;
    meas.notes.forEach(function(n) {
      var s = staves[n.staff];
      if (!s) return;
      var ty = staffTopY(n.staff);
      var x2 = mx + n.beat * BEATPX + 6, y;
      if (s.clef === "percussion") {
        y = ty + 2 * LINE;
      } else {
        var bottomLineY = ty + 4 * LINE;
        var d = di(n.step, n.octave) - BOTTOM[s.clef];
        y = bottomLineY - d * (LINE / 2);
        for (var ly = bottomLineY + LINE; ly <= y + 0.1; ly += LINE) p.push(line(x2 - 5, ly, x2 + 5, ly, "#8a93a0", 1));
        for (var ly2 = ty - LINE; ly2 >= y - 0.1; ly2 -= LINE) p.push(line(x2 - 5, ly2, x2 + 5, ly2, "#8a93a0", 1));
      }
      var open = n.dur >= 2;
      p.push('<ellipse cx="' + x2.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="3.1" ry="2.4" fill="' + (open ? "none" : "#101418") + '" stroke="#101418" stroke-width="' + (open ? 1 : 0.6) + '"/>');
      if (n.dur < 4) p.push(line(x2 + 3, y, x2 + 3, y - 3 * LINE, "#101418", 0.9));
      if (n.alter) p.push('<text x="' + (x2 - 11) + '" y="' + (y + 3) + '" font-size="9" fill="#101418">' + (n.alter > 0 ? "\u266F" : "\u266D") + "</text>");
    });
  });
  p.push("</svg>");
  return p.join("");
}
function yToNote(y, clefMode) {
  var staffTop = STAFF_TOP;
  var baseOctave = 5;
  var noteIdx = 3;
  if (clefMode === "bass") {
    baseOctave = 3;
    noteIdx = 5;
  } else if (clefMode === "grand" || clefMode === "grandBass") {
    var midpoint = (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2;
    var topIsBass = clefMode === "grandBass";
    if (topIsBass) {
      baseOctave = 3;
      noteIdx = 5;
    }
    if (y > midpoint) {
      staffTop = BASS_STAFF_TOP;
      baseOctave = 3;
      noteIdx = 5;
    }
  }
  var halfSteps = Math.round((y - staffTop) / (LINE_SPACING / 2));
  var idx = halfSteps;
  for (var i = 0; i < Math.abs(idx); i++) {
    if (idx > 0) {
      noteIdx--;
      if (noteIdx < 0) {
        noteIdx = 6;
        baseOctave--;
      }
    } else {
      noteIdx++;
      if (noteIdx > 6) {
        noteIdx = 0;
        baseOctave++;
      }
    }
  }
  if (baseOctave < 0 || baseOctave > 8) return null;
  return { name: NOTE_NAMES[noteIdx], octave: baseOctave };
}
function effectiveKeySig(measures, idx, songKeySig) {
  for (var i = idx; i >= 0 && i < (measures || []).length; i--) {
    var ks = measures[i] && measures[i].keySig;
    if (ks) return ks;
  }
  return songKeySig;
}
function effectiveAccidentalInMeasure(measures, mi, upToNoteIdx, chordIdx, letter, octave) {
  if (!measures || !measures[mi]) return "none";
  var notes = measures[mi].notes || [];
  var end = Math.min(upToNoteIdx, notes.length - 1);
  for (var ni = end; ni >= 0; ni--) {
    var n = notes[ni];
    if (!n || n.isRest) continue;
    if (ni === upToNoteIdx) {
      if (chordIdx !== void 0 && chordIdx > 0 && Array.isArray(n.chord)) {
        for (var ci = chordIdx - 1; ci >= 0; ci--) {
          var c = n.chord[ci];
          if (c && c.name === letter && c.octave === octave && c.accidental && c.accidental !== "none") {
            return c.accidental;
          }
        }
      }
      continue;
    }
    if (n.name === letter && n.octave === octave && n.accidental && n.accidental !== "none") {
      return n.accidental;
    }
    if (Array.isArray(n.chord)) {
      for (var c of n.chord) {
        if (c && c.name === letter && c.octave === octave && c.accidental && c.accidental !== "none") {
          return c.accidental;
        }
      }
    }
  }
  return "none";
}
function noteToFreq(name, octave, accidental, keySigId) {
  var semitones = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 };
  var semi = semitones[name] + (octave - 4) * 12;
  if (accidental === "sharp") semi += 1;
  else if (accidental === "flat") semi -= 1;
  else if (accidental === "double-sharp") semi += 2;
  else if (accidental === "double-flat") semi -= 2;
  else if (accidental === "natural") {
  } else if (accidental === "none" && keySigId) {
    var ks = KEY_SIGNATURES.find((k) => k.id === keySigId);
    if (ks) {
      if (ks.sharps.includes(name)) semi += 1;
      if (ks.flats.includes(name)) semi -= 1;
    }
  }
  return 440 * Math.pow(2, semi / 12);
}
function shiftPianoKeyName(name, semis) {
  if (typeof name !== "string") return name;
  var m = name.match(/^([A-G])([#bs]?)(-?\d+)$/);
  if (!m) return name;
  var SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  var NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var semi = SEMI[m[1]];
  if (m[2] === "#" || m[2] === "s") semi += 1;
  else if (m[2] === "b") semi -= 1;
  var midi = (parseInt(m[3], 10) + 1) * 12 + semi + semis;
  var oct = Math.floor(midi / 12) - 1;
  return NAMES[(midi % 12 + 12) % 12] + oct;
}
function pitchToPianoKey(name, octave, accidental, keySigId) {
  var SEMI = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 };
  var semi = SEMI[name] + (octave - 4) * 12;
  if (accidental === "sharp") semi += 1;
  else if (accidental === "flat") semi -= 1;
  else if (accidental === "double-sharp") semi += 2;
  else if (accidental === "double-flat") semi -= 2;
  else if (accidental === "natural") {
  } else if ((accidental === "none" || accidental == null) && keySigId) {
    var ks = KEY_SIGNATURES.find((k) => k.id === keySigId);
    if (ks) {
      if (ks.sharps && ks.sharps.includes(name)) semi += 1;
      if (ks.flats && ks.flats.includes(name)) semi -= 1;
    }
  }
  var midi = semi + 69;
  var keyOctave = Math.floor((midi - 12) / 12);
  var pc = (midi % 12 + 12) % 12;
  var PC_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return PC_NAMES[pc] + keyOctave;
}
function useIsMobile() {
  var isPhone = () => {
    if (typeof window === "undefined") return false;
    var small = Math.min(window.innerWidth, window.innerHeight) < 500;
    if (!small) return false;
    var touch = !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    return touch;
  };
  var [isMobile, setIsMobile] = useState(isPhone());
  useEffect(() => {
    var handler = () => setIsMobile(isPhone());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}
function GrandStaffBrace({ x, y1, y2 }) {
  var h = y2 - y1;
  var midY = (y1 + y2) / 2;
  var scaleX = 0.4;
  var fontSize = h * 0.985;
  return /* @__PURE__ */ React.createElement("g", { transform: `translate(${x * (1 - scaleX)}, 0) scale(${scaleX}, 1)` }, /* @__PURE__ */ React.createElement(
    "text",
    {
      x,
      y: midY,
      fontSize,
      fontFamily: "'Noto Music', serif",
      fill: "var(--line-color)",
      textAnchor: "middle",
      dominantBaseline: "central"
    },
    "\u{1D114}"
  ));
}
function StaffLines({ x, width, top }) {
  var t = top || STAFF_TOP;
  return Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ React.createElement(
    "line",
    {
      key: i,
      x1: x,
      y1: t + i * LINE_SPACING,
      x2: x + width,
      y2: t + i * LINE_SPACING,
      stroke: "var(--line-color)",
      strokeWidth: 2
    }
  ));
}
function LedgerLines({ x, y, noteRx, staffTop, scale = 1 }) {
  var lines = [];
  var topLine = staffTop != null ? staffTop : STAFF_TOP;
  var bottomLine = topLine + 4 * LINE_SPACING;
  var halfWidth = (noteRx + 8) * scale;
  var stroke = 2 * scale;
  if (y < topLine) {
    for (var ly = topLine - LINE_SPACING; ly >= y - 1; ly -= LINE_SPACING) {
      lines.push(/* @__PURE__ */ React.createElement(
        "line",
        {
          key: ly,
          x1: x - halfWidth,
          y1: ly,
          x2: x + halfWidth,
          y2: ly,
          stroke: "var(--line-color)",
          strokeWidth: stroke
        }
      ));
    }
  }
  if (y > bottomLine) {
    for (var ly = bottomLine + LINE_SPACING; ly <= y + 1; ly += LINE_SPACING) {
      lines.push(/* @__PURE__ */ React.createElement(
        "line",
        {
          key: ly,
          x1: x - halfWidth,
          y1: ly,
          x2: x + halfWidth,
          y2: ly,
          stroke: "var(--line-color)",
          strokeWidth: stroke
        }
      ));
    }
  }
  return lines;
}
var BLACK_KEY_FLAT_LABELS = { "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb" };
var WhitePianoKey = React.memo(function WhitePianoKey2({
  note,
  color,
  left,
  w,
  h,
  fontSize,
  letter,
  octave,
  showOctave,
  letterShift,
  isPressed,
  onClick,
  colorNotes = true,
  showLetters = true
}) {
  var handleClick = React.useCallback(() => onClick(note), [note, onClick]);
  var isA = /^A\d/.test(note);
  var flashColor = !colorNotes ? "#bbbbbb" : isA ? "#581c87" : color;
  var bgRest = "#ffffff";
  var keyBackground = isPressed ? flashColor : bgRest;
  var badgeRingColor = colorNotes ? color : "transparent";
  var badgeFlashColor = colorNotes ? flashColor : "transparent";
  var badgeOuter = Math.min(Math.round(h * 0.42), Math.round(w * 0.92));
  var badgeInner = Math.round(badgeOuter * 0.6);
  var badgeFontSize = Math.max(10, Math.round(badgeInner * (IS_LOCALHOST ? 0.8 : 0.55)));
  var badgeBottom = Math.max(4, Math.round(h * 0.05));
  return React.createElement(
    "div",
    {
      onClick: handleClick,
      style: {
        position: "absolute",
        left,
        top: 0,
        width: w,
        height: h,
        background: keyBackground,
        borderRadius: "0 0 6px 6px",
        cursor: "pointer",
        border: isPressed ? "3px solid #000" : "1px solid rgba(0,0,0,0.2)",
        boxSizing: "border-box",
        // Public site uses flex to position the top-aligned letter; on
        // localhost the badge is absolutely positioned, so flex doesn't
        // matter there.
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 0,
        transition: "all 0.1s",
        filter: isPressed ? "brightness(1.8) saturate(1.5)" : "none",
        boxShadow: isPressed ? "0 0 20px rgba(255,255,255,0.8) inset, 0 0 15px rgba(255,255,255,0.6)" : "none",
        animation: isPressed ? "pianoKeyFlash 0.14s ease-out" : "none"
      }
    },
    React.createElement(
      "div",
      {
        // Outer colored circle — the rainbow ring. When the key is lit,
        // the ring matches the (possibly overridden) flash colour so it
        // dissolves into the key for a clean, single-tone press —
        // important for A where flashColor (dark purple) differs from the
        // resting badge colour (light purple).
        style: {
          position: "absolute",
          bottom: badgeBottom,
          left: "50%",
          transform: "translateX(-50%)",
          width: badgeOuter,
          height: badgeOuter,
          background: isPressed ? badgeFlashColor : badgeRingColor,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      React.createElement(
        "div",
        {
          // Inner white circle. C keys show letter+octave ("C4", "C5", …)
          // so users can orient on the keyboard at a glance; the leftmost
          // key also shows its octave (typically A0). Every other key
          // shows just the letter.
          style: {
            width: badgeInner,
            height: badgeInner,
            background: "#ffffff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: badgeFontSize,
            fontWeight: 700,
            color: "#000",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1,
            letterSpacing: -0.3
          }
        },
        showLetters ? showOctave ? React.createElement(
          "span",
          {
            style: { display: "inline-flex", alignItems: "baseline" }
          },
          React.createElement("span", { key: "ltr" }, letter),
          React.createElement("span", {
            key: "oct",
            style: { fontSize: Math.round(badgeFontSize * (IS_LOCALHOST ? 0.58 : 0.7)) }
          }, displayOctave(letter, octave))
        ) : letter : ""
      )
    )
  );
});
var BLACK_KEY_BADGE_GRADIENTS = {
  "C#": "linear-gradient(to right, var(--c-color) 50%, var(--d-color) 50%)",
  "D#": "linear-gradient(to right, var(--d-color) 50%, var(--e-color) 50%)",
  "F#": "linear-gradient(to right, var(--f-color) 50%, var(--g-color) 50%)",
  "G#": "linear-gradient(to right, var(--g-color) 50%, var(--a-color) 50%)",
  "A#": "linear-gradient(to right, var(--a-color) 50%, var(--b-color) 50%)"
};
var BlackPianoKey = React.memo(function BlackPianoKey2({
  note,
  label,
  left,
  w,
  h,
  fontSize,
  isPressed,
  pressColor,
  onClick,
  showLetters = true,
  topOffset = 0,
  colorNotes = true
}) {
  var handleClick = React.useCallback(() => onClick(note), [note, onClick]);
  var bg = isPressed ? pressColor : "#1a1a1a";
  var gradient = BLACK_KEY_BADGE_GRADIENTS[label];
  var badgeOuter = Math.max(14, Math.min(Math.round(h * 0.34), Math.round(w * 1.05)));
  var badgeInner = Math.round(badgeOuter * (IS_LOCALHOST ? 0.625 : 0.66));
  var badgeFontSize = Math.max(6, Math.round(badgeInner * (IS_LOCALHOST ? 0.575 : 0.42)));
  var badgeBottom = Math.max(3, Math.round(h * 0.05));
  var flatLabel = BLACK_KEY_FLAT_LABELS[label] || label;
  return React.createElement(
    "div",
    {
      onClick: handleClick,
      style: {
        position: "absolute",
        left,
        top: topOffset,
        width: w,
        height: h,
        background: bg,
        borderRadius: "0 0 4px 4px",
        cursor: "pointer",
        zIndex: 2,
        border: isPressed ? "2px solid #fff" : "1px solid #000",
        boxSizing: "border-box",
        transition: "background 0.1s",
        animation: isPressed ? "pianoKeyFlash 0.14s ease-out" : "none"
      }
    },
    showLetters && React.createElement(
      "div",
      {
        // Outer colored circle — the split gradient ring (or transparent
        // when the rainbow toggle is off).
        style: {
          position: "absolute",
          bottom: badgeBottom,
          left: "50%",
          transform: "translateX(-50%)",
          width: badgeOuter,
          height: badgeOuter,
          background: colorNotes ? gradient : "transparent",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      React.createElement(
        "div",
        {
          // Inner white circle bearing the sharp/flat label stacked.
          style: {
            width: badgeInner,
            height: badgeInner,
            background: "#ffffff",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: badgeFontSize,
            fontWeight: 700,
            color: "#000",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1,
            letterSpacing: -0.3
          }
        },
        React.createElement("span", null, label),
        React.createElement("span", { style: { fontSize: IS_LOCALHOST ? badgeFontSize : Math.round(badgeFontSize * 0.85), opacity: IS_LOCALHOST ? 1 : 0.7 } }, flatLabel)
      )
    )
  );
});
var NoteHead = React.memo(function NoteHead2({ x, y, duration, accidental, isRest, isPlaying, isSelected, noteName, noteOctave, onClick, onMouseDown, onTouchStart, isMobile, showFlag = true, forceStemDirection, staffTop, isBassStaff, stemShorten = 0, chord = null, selectedChordIdx, onChordMemberClick, onChordMemberMouseDown, bigNoteOnPlay = false, isGrace = false, graceFirstOfRun = false, graceLeadExtra = 0, fingering = null, fingerDX = 0, fingerDY = 0, showChordFingerings = true, onClearAccidental, onClearChordAccidental, keySigSharps, keySigFlats, dotted = false, doubleDotted = false, colorNotes = true, showLetters = true, drumShape = null, colorOverride = null, isDrum = false, drumPiece = null }) {
  var _kSharps = keySigSharps || [];
  var _kFlats = keySigFlats || [];
  var _renderedAcc = (() => {
    if (accidental === "double-sharp" && _kSharps.includes(noteName)) return "sharp";
    if (accidental === "double-flat" && _kFlats.includes(noteName)) return "flat";
    return accidental;
  })();
  var extraStem = duration === "thirty-second" ? 20 : duration === "sixteenth" ? 10 : 0;
  var sHeight = STEM_HEIGHT + extraStem - stemShorten;
  var playingScale = isPlaying && !bigNoteOnPlay ? 2 : 1;
  var _accStroke = playingScale > 1 ? "#fff" : "none";
  var _accStrokeWidth = playingScale > 1 ? 25 : 0;
  var NOTE_COLORS = { C: "var(--c-color)", D: "var(--d-color)", E: "var(--e-color)", F: "var(--f-color)", G: "var(--g-color)", A: "var(--a-color)", B: "var(--b-color)" };
  var noteColor = colorOverride ? colorOverride : colorNotes ? NOTE_COLORS[noteName] || "var(--note-color)" : "#000";
  var _isHollow = duration === "whole" || duration === "half";
  var _letterColor = !colorNotes && !_isHollow ? "#fff" : "#000";
  var hitPad = 16;
  if (isRest) {
    var rectWidth = 44;
    var rectHeight = LINE_SPACING / 2;
    var restFill = isSelected ? "var(--select)" : "#1a1a1a";
    var sTop = staffTop != null ? staffTop : STAFF_TOP;
    if (duration === "whole") {
      var line4 = sTop + 1 * LINE_SPACING;
      return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("rect", { x: x - hitPad, y: sTop, width: hitPad * 2, height: LINE_SPACING * 4, fill: "transparent" }), /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: x - rectWidth / 2,
          y: line4,
          width: rectWidth,
          height: rectHeight,
          fill: restFill,
          stroke: "none"
        }
      ));
    }
    if (duration === "half") {
      var line3 = sTop + 2 * LINE_SPACING;
      return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("rect", { x: x - hitPad, y: sTop, width: hitPad * 2, height: LINE_SPACING * 4, fill: "transparent" }), /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: x - rectWidth / 2,
          y: line3 - rectHeight,
          width: rectWidth,
          height: rectHeight,
          fill: restFill,
          stroke: "none"
        }
      ));
    }
    if (duration === "sixteenth") {
      return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("rect", { x: x - hitPad, y: sTop, width: hitPad * 2, height: LINE_SPACING * 4, fill: "transparent" }), /* @__PURE__ */ React.createElement(
        "text",
        {
          x,
          y: sTop + 4.5 * LINE_SPACING,
          textAnchor: "middle",
          fontSize: LINE_SPACING * 3.8,
          fill: restFill,
          fontFamily: "'Noto Music', serif",
          style: { pointerEvents: "none" }
        },
        "\u{1D13F}"
      ));
    }
    if (duration === "eighth") {
      return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("rect", { x: x - hitPad, y: sTop, width: hitPad * 2, height: LINE_SPACING * 4, fill: "transparent" }), /* @__PURE__ */ React.createElement(
        "text",
        {
          x,
          y: sTop + 3.85 * LINE_SPACING,
          textAnchor: "middle",
          fontSize: LINE_SPACING * 3.5,
          fill: restFill,
          fontFamily: "'Noto Music', serif",
          style: { pointerEvents: "none" }
        },
        "\u{1D13E}"
      ));
    }
    return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("rect", { x: x - hitPad, y: sTop, width: hitPad * 2, height: LINE_SPACING * 4, fill: "transparent" }), /* @__PURE__ */ React.createElement(
      "text",
      {
        x,
        y: sTop + 3.8 * LINE_SPACING,
        textAnchor: "middle",
        fontSize: LINE_SPACING * 3.5,
        fill: restFill,
        fontFamily: "'Noto Music', serif",
        style: { pointerEvents: "none" }
      },
      "\u{1D13D}"
    ));
  }
  var isFilled = duration !== "whole" && duration !== "half";
  var hasStem = duration !== "whole";
  var sTop = staffTop != null ? staffTop : STAFF_TOP;
  var stemThresholdY = sTop + 2 * LINE_SPACING;
  var noStem = forceStemDirection === "none";
  var stemUp = forceStemDirection === "none" ? true : forceStemDirection !== void 0 ? forceStemDirection === "up" : y > stemThresholdY;
  var _primaryPlacement = chord && chord.length > 0 ? chordPlacement(noteName, noteOctave, chord, stemUp) : null;
  var primaryOffset = _primaryPlacement ? _primaryPlacement.offsetByKey["__primary__"] || 0 : 0;
  var xp = x + primaryOffset;
  var _FCL = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
  var _allIdxOff = [];
  if (_primaryPlacement) {
    _allIdxOff.push({ idx: _FCL[noteName] + (noteOctave || 0) * 7, off: primaryOffset });
    (chord || []).forEach((c, ci) => _allIdxOff.push({ idx: _FCL[c.name] + (c.octave || 0) * 7, off: _primaryPlacement.offsetByKey["c" + ci] || 0 }));
  }
  var _fingerPos = (myIdx, myOff, pad) => {
    var blockedRight = _allIdxOff.some((o) => o.idx === myIdx + 1 && o.off > myOff);
    var myX = x + myOff;
    return blockedRight ? { x: myX - NOTE_RX * playingScale - pad, anchor: "end" } : { x: myX + NOTE_RX * playingScale + pad, anchor: "start" };
  };
  var hasFlag = duration === "eighth" || duration === "sixteenth" || duration === "thirty-second";
  var primaryArmed = isSelected && typeof selectedChordIdx !== "number";
  var outlineColor = primaryArmed ? "#000" : noteColor;
  var fillColor = primaryArmed ? "#000" : noteColor;
  var _drumHead = (key, hx, hy, shape, col) => {
    var rx = NOTE_RX * playingScale;
    var ry = NOTE_RY * playingScale;
    var sw = 3 * playingScale;
    var X = (k, sx, sy, w) => /* @__PURE__ */ React.createElement("g", { key: k, stroke: col, strokeWidth: w || sw, strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: hx - sx, y1: hy - sy, x2: hx + sx, y2: hy + sy }), /* @__PURE__ */ React.createElement("line", { x1: hx - sx, y1: hy + sy, x2: hx + sx, y2: hy - sy }));
    var ring = (k) => /* @__PURE__ */ React.createElement("ellipse", { key: k, cx: hx, cy: hy, rx, ry, fill: "none", stroke: col, strokeWidth: sw });
    if (shape === "x") return /* @__PURE__ */ React.createElement("g", { key }, X("x", rx * 0.72, ry * 0.72, 5 * playingScale));
    if (shape === "circle-x") return /* @__PURE__ */ React.createElement("g", { key }, ring("r"), X("ix", rx * 0.6, ry * 0.6));
    if (shape === "slash") return /* @__PURE__ */ React.createElement("g", { key }, /* @__PURE__ */ React.createElement("ellipse", { cx: hx, cy: hy, rx, ry, fill: col, stroke: "#000", strokeWidth: 2, transform: `rotate(-12, ${hx}, ${hy})` }), /* @__PURE__ */ React.createElement("line", { x1: hx - rx * 0.95, y1: hy + ry * 0.95, x2: hx + rx * 0.95, y2: hy - ry * 0.95, stroke: "#000", strokeWidth: sw, strokeLinecap: "round" }));
    if (shape === "diamond") return /* @__PURE__ */ React.createElement("polygon", { key, points: `${hx},${hy - ry} ${hx + rx},${hy} ${hx},${hy + ry} ${hx - rx},${hy}`, fill: col, stroke: "#000", strokeWidth: 2 });
    if (shape === "triangle-down") return /* @__PURE__ */ React.createElement("polygon", { key, points: `${hx - rx},${hy - ry} ${hx + rx},${hy - ry} ${hx},${hy + ry}`, fill: col, stroke: "#000", strokeWidth: 2 });
    if (shape === "circle-slash") return /* @__PURE__ */ React.createElement("g", { key }, ring("r"), /* @__PURE__ */ React.createElement("line", { x1: hx - rx * 0.72, y1: hy + ry * 0.72, x2: hx + rx * 0.72, y2: hy - ry * 0.72, stroke: col, strokeWidth: sw, strokeLinecap: "round" }));
    return /* @__PURE__ */ React.createElement("ellipse", { key, cx: hx, cy: hy, rx, ry, fill: col, stroke: "#000", strokeWidth: 2, transform: `rotate(-12, ${hx}, ${hy})` });
  };
  return /* @__PURE__ */ React.createElement("g", { onClick, onMouseDown, onTouchStart, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "rect",
    {
      x: xp - NOTE_RX - hitPad,
      y: y - NOTE_RY - hitPad,
      width: (NOTE_RX + hitPad) * 2,
      height: (NOTE_RY + hitPad) * 2,
      fill: "transparent"
    }
  ), isPlaying && bigNoteOnPlay && /* @__PURE__ */ React.createElement("g", { style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 44} ${y + 6} A 44 44 0 0 1 ${xp + 44} ${y + 6}`, fill: "none", stroke: "#ff3b30", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 41} ${y + 6} A 41 41 0 0 1 ${xp + 41} ${y + 6}`, fill: "none", stroke: "#ff9500", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 38} ${y + 6} A 38 38 0 0 1 ${xp + 38} ${y + 6}`, fill: "none", stroke: "#ffcc00", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 35} ${y + 6} A 35 35 0 0 1 ${xp + 35} ${y + 6}`, fill: "none", stroke: "#34c759", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 32} ${y + 6} A 32 32 0 0 1 ${xp + 32} ${y + 6}`, fill: "none", stroke: "#3498db", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${xp - 29} ${y + 6} A 29 29 0 0 1 ${xp + 29} ${y + 6}`, fill: "none", stroke: "#9b59b6", strokeWidth: 3, strokeLinecap: "butt" })), /* @__PURE__ */ React.createElement(LedgerLines, { x: xp, y, noteRx: NOTE_RX, staffTop, scale: playingScale }), hasStem && !noStem && (() => {
    var stemX = stemUp ? x + NOTE_RX - 2 : x - NOTE_RX + 2;
    var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var primaryIdx = LETTER_ORD[noteName] + (noteOctave || 0) * 7;
    var chordPitches = (chord || []).map((c) => {
      var ci = LETTER_ORD[c.name] + c.octave * 7;
      return { name: c.name, y: y + (primaryIdx - ci) * (LINE_SPACING / 2) };
    });
    var allY = [y, ...chordPitches.map((p) => p.y)];
    var minY = Math.min(...allY);
    var maxY = Math.max(...allY);
    var _graceLeadExtra = isGrace ? graceLeadExtra : 0;
    var stemStart = stemUp ? maxY : minY;
    var stemEnd = stemUp ? minY - sHeight - _graceLeadExtra : maxY + sHeight + _graceLeadExtra;
    if (chordPitches.length === 0) {
      if (isGrace) {
        return /* @__PURE__ */ React.createElement("line", { x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd, stroke: outlineColor, strokeWidth: 3 });
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", { x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd, stroke: "#000", strokeWidth: 5 }), /* @__PURE__ */ React.createElement("line", { x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd, stroke: outlineColor, strokeWidth: 3 }));
    }
    var stemLen = stemEnd - stemStart;
    var pitches = [
      { name: noteName, y, color: noteColor },
      ...chordPitches.map((p) => ({ name: p.name, y: p.y, color: colorNotes ? NOTE_COLORS[p.name] || "var(--note-color)" : "#000" }))
    ].sort((a, b) => stemUp ? b.y - a.y : a.y - b.y);
    var gradId = `stem-grad-${Math.round(x)}-${Math.round(y)}`;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("line", { x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd, stroke: "#000", strokeWidth: 5 }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: gradId, gradientUnits: "userSpaceOnUse", x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd }, pitches.map((p, i) => {
      var t = stemLen === 0 ? 0 : Math.max(0, Math.min(1, (p.y - stemStart) / stemLen));
      return /* @__PURE__ */ React.createElement("stop", { key: `s-${i}`, offset: (t * 100).toFixed(1) + "%", stopColor: p.color });
    }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: pitches[pitches.length - 1].color }))), /* @__PURE__ */ React.createElement("line", { x1: stemX, y1: stemStart, x2: stemX, y2: stemEnd, stroke: `url(#${gradId})`, strokeWidth: 3 }));
  })(), _renderedAcc === "sharp" && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp - (NOTE_RX + 30) * playingScale,
      y: y + 22 * playingScale,
      textAnchor: "middle",
      fontSize: 60 * playingScale,
      fill: outlineColor,
      fontWeight: "bold",
      stroke: _accStroke,
      strokeWidth: _accStrokeWidth,
      paintOrder: "stroke",
      style: { cursor: onClearAccidental ? "pointer" : "default" },
      onClick: onClearAccidental ? (e) => {
        e.stopPropagation();
        onClearAccidental();
      } : void 0
    },
    "\u266F"
  ), _renderedAcc === "flat" && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp - (NOTE_RX + 30) * playingScale,
      y: y + 14 * playingScale,
      textAnchor: "middle",
      fontSize: 60 * playingScale,
      fill: outlineColor,
      fontWeight: "bold",
      stroke: _accStroke,
      strokeWidth: _accStrokeWidth,
      paintOrder: "stroke",
      style: { cursor: onClearAccidental ? "pointer" : "default" },
      onClick: onClearAccidental ? (e) => {
        e.stopPropagation();
        onClearAccidental();
      } : void 0
    },
    "\u266D"
  ), _renderedAcc === "natural" && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp - (NOTE_RX + 30) * playingScale,
      y: y + 27 * playingScale,
      textAnchor: "middle",
      fontSize: 72 * playingScale,
      fill: outlineColor,
      fontWeight: "bold",
      stroke: _accStroke,
      strokeWidth: _accStrokeWidth,
      paintOrder: "stroke",
      style: { cursor: onClearAccidental ? "pointer" : "default" },
      onClick: onClearAccidental ? (e) => {
        e.stopPropagation();
        onClearAccidental();
      } : void 0
    },
    "\u266E"
  ), _renderedAcc === "double-sharp" && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp - (NOTE_RX + 38) * playingScale,
      y: y + 22 * playingScale,
      textAnchor: "middle",
      fontSize: 50 * playingScale,
      fill: outlineColor,
      fontWeight: "bold",
      stroke: _accStroke,
      strokeWidth: _accStrokeWidth,
      paintOrder: "stroke",
      style: { cursor: onClearAccidental ? "pointer" : "default" },
      onClick: onClearAccidental ? (e) => {
        e.stopPropagation();
        onClearAccidental();
      } : void 0
    },
    "\u266F\u266F"
  ), _renderedAcc === "double-flat" && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp - (NOTE_RX + 38) * playingScale,
      y: y + 14 * playingScale,
      textAnchor: "middle",
      fontSize: 60 * playingScale,
      fill: outlineColor,
      fontWeight: "bold",
      stroke: _accStroke,
      strokeWidth: _accStrokeWidth,
      paintOrder: "stroke",
      style: { cursor: onClearAccidental ? "pointer" : "default" },
      onClick: onClearAccidental ? (e) => {
        e.stopPropagation();
        onClearAccidental();
      } : void 0
    },
    "\u266D\u266D"
  ), !(chord && chord.length > 0) && (drumShape ? (() => {
    var rx = NOTE_RX * playingScale;
    var ry = NOTE_RY * playingScale;
    var sw = 3 * playingScale;
    var col = noteColor;
    var X = (k, sx, sy, w) => /* @__PURE__ */ React.createElement("g", { key: k, stroke: col, strokeWidth: w || sw, strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: xp - sx, y1: y - sy, x2: xp + sx, y2: y + sy }), /* @__PURE__ */ React.createElement("line", { x1: xp - sx, y1: y + sy, x2: xp + sx, y2: y - sy }));
    var ring = (k) => /* @__PURE__ */ React.createElement("ellipse", { key: k, cx: xp, cy: y, rx, ry, fill: "none", stroke: col, strokeWidth: sw });
    if (drumShape === "x") return X("x", rx * 0.72, ry * 0.72, 5 * playingScale);
    if (drumShape === "circle-x") return /* @__PURE__ */ React.createElement(React.Fragment, null, ring("r"), X("ix", rx * 0.6, ry * 0.6));
    if (drumShape === "slash") return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ellipse", { cx: xp, cy: y, rx, ry, fill: col, stroke: "#000", strokeWidth: 2, transform: `rotate(-12, ${xp}, ${y})` }), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: xp - rx * 0.95,
        y1: y + ry * 0.95,
        x2: xp + rx * 0.95,
        y2: y - ry * 0.95,
        stroke: "#000",
        strokeWidth: sw,
        strokeLinecap: "round"
      }
    ));
    if (drumShape === "diamond") return /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: `${xp},${y - ry} ${xp + rx},${y} ${xp},${y + ry} ${xp - rx},${y}`,
        fill: col,
        stroke: "#000",
        strokeWidth: 2
      }
    );
    if (drumShape === "triangle-down") return /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: `${xp - rx},${y - ry} ${xp + rx},${y - ry} ${xp},${y + ry}`,
        fill: col,
        stroke: "#000",
        strokeWidth: 2
      }
    );
    return /* @__PURE__ */ React.createElement(React.Fragment, null, ring("r"), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: xp - rx * 0.72,
        y1: y + ry * 0.72,
        x2: xp + rx * 0.72,
        y2: y - ry * 0.72,
        stroke: col,
        strokeWidth: sw,
        strokeLinecap: "round"
      }
    ));
  })() : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "ellipse",
    {
      cx: xp,
      cy: y,
      rx: NOTE_RX * playingScale,
      ry: NOTE_RY * playingScale,
      fill: duration === "whole" || duration === "half" ? outlineColor : isFilled ? fillColor : "transparent",
      stroke: "#000",
      strokeWidth: 2,
      transform: `rotate(-12, ${xp}, ${y})`
    }
  ), duration === "whole" && /* @__PURE__ */ React.createElement(
    "ellipse",
    {
      cx: xp + 1,
      cy: y,
      rx: NOTE_RX * 0.55 * playingScale,
      ry: NOTE_RY * 0.7 * playingScale,
      fill: "var(--bg)",
      stroke: "none",
      transform: `rotate(35, ${xp + 1}, ${y})`
    }
  ), duration === "half" && /* @__PURE__ */ React.createElement(
    "ellipse",
    {
      cx: xp,
      cy: y,
      rx: NOTE_RX * 0.6 * playingScale,
      ry: NOTE_RY * 0.65 * playingScale,
      fill: "var(--bg)",
      stroke: "none",
      transform: `rotate(-12, ${xp}, ${y})`
    }
  ))), hasFlag && showFlag && !noStem && (() => {
    var LETTER_ORD_FLAG = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var primaryIdxFlag = LETTER_ORD_FLAG[noteName] + (noteOctave || 0) * 7;
    var chordYsFlag = (chord || []).map((c) => {
      var ci = LETTER_ORD_FLAG[c.name] + c.octave * 7;
      return y + (primaryIdxFlag - ci) * (LINE_SPACING / 2);
    });
    var tipAnchorY = stemUp ? Math.min(y, ...chordYsFlag) : Math.max(y, ...chordYsFlag);
    var xs = stemUp ? x + NOTE_RX - 2 : x - NOTE_RX + 2;
    var _graceLeadExtraFlag = isGrace && graceFirstOfRun ? 24 : 0;
    var ys = stemUp ? tipAnchorY - sHeight - _graceLeadExtraFlag : tipAnchorY + sHeight + _graceLeadExtraFlag;
    var yDir = stemUp ? 1 : -1;
    var flagAt = (offset) => {
      var sy = ys + offset * yDir;
      return `M${xs},${sy} c${16},${6 * yDir} ${22},${18 * yDir} ${12},${36 * yDir} c${10},${-14 * yDir} ${4},${-22 * yDir} ${-12},${-20 * yDir} z`;
    };
    var d = flagAt(0) + (duration === "sixteenth" || duration === "thirty-second" ? " " + flagAt(14) : "") + (duration === "thirty-second" ? " " + flagAt(28) : "");
    return /* @__PURE__ */ React.createElement("path", { d, fill: outlineColor, stroke: isGrace ? "none" : "#000", strokeWidth: isGrace ? 0 : 2, strokeLinejoin: "round", style: { pointerEvents: "none" } });
  })(), !(chord && chord.length > 0) && showLetters && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: xp,
      y: y + 6 * playingScale,
      textAnchor: "middle",
      fontSize: 18 * playingScale,
      fill: _letterColor,
      fontWeight: "700",
      fontFamily: "'DM Sans', sans-serif",
      style: { pointerEvents: "none" }
    },
    noteName
  ), fingering != null && (() => {
    var _dotPad = doubleDotted ? 34 : dotted ? 22 : 8;
    var _fp = _fingerPos(_FCL[noteName] + (noteOctave || 0) * 7, primaryOffset, _dotPad);
    return /* @__PURE__ */ React.createElement(
      "text",
      {
        x: _fp.x + fingerDX,
        y: y + 8 * playingScale + fingerDY,
        textAnchor: _fp.anchor,
        fontSize: 26 * playingScale,
        fill: "#000",
        fontWeight: "700",
        fontFamily: "'DM Sans', sans-serif",
        style: { pointerEvents: "none" }
      },
      fingering
    );
  })(), chord && chord.length > 0 && (() => {
    var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var primaryIdx = LETTER_ORD[noteName] + (noteOctave || 0) * 7;
    var _placement = _primaryPlacement || chordPlacement(noteName, noteOctave, chord, stemUp);
    var chordOffsetFor = (_cn, ci) => isDrum ? 0 : _placement.offsetByKey["c" + ci] || 0;
    var _orderedChord = [
      { cn: { name: noteName, octave: noteOctave, accidental }, ci: -1, cIdx: primaryIdx, cy: y, isPrimary: true },
      ...chord.map((cn, ci) => ({ cn, ci, cIdx: LETTER_ORD[cn.name] + cn.octave * 7 })).map((o) => ({ ...o, cy: y + (primaryIdx - o.cIdx) * (LINE_SPACING / 2), isPrimary: false }))
    ].sort((a, b) => b.cy - a.cy);
    return _orderedChord.map(({ cn, ci, cy: _cy, isPrimary }) => {
      if (isPrimary) {
        if (isDrum) {
          return /* @__PURE__ */ React.createElement("g", { key: "chord-primary", style: { pointerEvents: "none" } }, _drumHead("cp", xp, y, drumShapeForPiece(drumPiece), outlineColor));
        }
        return /* @__PURE__ */ React.createElement("g", { key: "chord-primary", style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(
          "ellipse",
          {
            cx: xp,
            cy: y,
            rx: NOTE_RX * playingScale,
            ry: NOTE_RY * playingScale,
            fill: duration === "whole" || duration === "half" ? outlineColor : isFilled ? fillColor : "transparent",
            stroke: "#000",
            strokeWidth: 2,
            transform: `rotate(-12, ${xp}, ${y})`
          }
        ), duration === "whole" && /* @__PURE__ */ React.createElement(
          "ellipse",
          {
            cx: xp + 1,
            cy: y,
            rx: NOTE_RX * 0.55 * playingScale,
            ry: NOTE_RY * 0.7 * playingScale,
            fill: "var(--bg)",
            stroke: "none",
            transform: `rotate(35, ${xp + 1}, ${y})`
          }
        ), duration === "half" && /* @__PURE__ */ React.createElement(
          "ellipse",
          {
            cx: xp,
            cy: y,
            rx: NOTE_RX * 0.6 * playingScale,
            ry: NOTE_RY * 0.65 * playingScale,
            fill: "var(--bg)",
            stroke: "none",
            transform: `rotate(-12, ${xp}, ${y})`
          }
        ), showLetters && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: xp,
            y: y + 6 * playingScale,
            textAnchor: "middle",
            fontSize: 18 * playingScale,
            fill: _letterColor,
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif"
          },
          noteName
        ));
      }
      var cIdx = LETTER_ORD[cn.name] + cn.octave * 7;
      var cy = y + (primaryIdx - cIdx) * (LINE_SPACING / 2);
      var cx = x + chordOffsetFor(cn, ci);
      var memberArmed = isSelected && selectedChordIdx === ci;
      var cColor = memberArmed ? "#000" : isDrum ? drumNoteColor(cn.drumPiece) || (NOTE_COLORS[cn.name] || "var(--note-color)") : !colorNotes ? "#000" : NOTE_COLORS[cn.name] || "var(--note-color)";
      var memberClick = onChordMemberClick ? (e) => {
        e.stopPropagation();
        onChordMemberClick(ci, e);
      } : void 0;
      var memberMouseDown = onChordMemberMouseDown ? (e) => {
        e.stopPropagation();
        onChordMemberMouseDown(ci, e);
      } : void 0;
      var memberPointer = onChordMemberClick ? "auto" : "none";
      return /* @__PURE__ */ React.createElement("g", { key: `chord-${ci}`, onClick: memberClick, onMouseDown: memberMouseDown, onTouchStart: memberMouseDown, style: { pointerEvents: memberPointer, cursor: onChordMemberClick ? "pointer" : "default" } }, onChordMemberClick && /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: cx - NOTE_RX - 8,
          y: cy - NOTE_RY - 8,
          width: (NOTE_RX + 8) * 2,
          height: (NOTE_RY + 8) * 2,
          fill: "transparent",
          style: { pointerEvents: "auto" }
        }
      ), isPlaying && bigNoteOnPlay && // Per-pitch rainbow tracker. Each chord member gets its own
      // arc so the student sees every sounding pitch (primary + all
      // chord members) light up simultaneously — teaches that
      // music is polyphonic and maps each sounding key on the
      // piano to the specific note on the staff producing it.
      // Suppressed when big-note-on-play is on (explode tracker
      // takes over).
      /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 44} ${cy + 6} A 44 44 0 0 1 ${cx + 44} ${cy + 6}`, fill: "none", stroke: "#ff3b30", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 41} ${cy + 6} A 41 41 0 0 1 ${cx + 41} ${cy + 6}`, fill: "none", stroke: "#ff9500", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 38} ${cy + 6} A 38 38 0 0 1 ${cx + 38} ${cy + 6}`, fill: "none", stroke: "#ffcc00", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 35} ${cy + 6} A 35 35 0 0 1 ${cx + 35} ${cy + 6}`, fill: "none", stroke: "#34c759", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 32} ${cy + 6} A 32 32 0 0 1 ${cx + 32} ${cy + 6}`, fill: "none", stroke: "#3498db", strokeWidth: 3, strokeLinecap: "butt" }), /* @__PURE__ */ React.createElement("path", { d: `M ${cx - 29} ${cy + 6} A 29 29 0 0 1 ${cx + 29} ${cy + 6}`, fill: "none", stroke: "#9b59b6", strokeWidth: 3, strokeLinecap: "butt" })), /* @__PURE__ */ React.createElement(LedgerLines, { x: cx, y: cy, noteRx: NOTE_RX, staffTop, scale: playingScale }), (() => {
        var _cAcc = cn.accidental;
        if (_cAcc === "double-sharp" && _kSharps.includes(cn.name)) _cAcc = "sharp";
        else if (_cAcc === "double-flat" && _kFlats.includes(cn.name)) _cAcc = "flat";
        return /* @__PURE__ */ React.createElement(React.Fragment, null, _cAcc === "sharp" && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx - (NOTE_RX + 30) * playingScale,
            y: cy + 22 * playingScale,
            textAnchor: "middle",
            fontSize: 60 * playingScale,
            fill: cColor,
            fontWeight: "bold",
            stroke: _accStroke,
            strokeWidth: _accStrokeWidth,
            paintOrder: "stroke",
            style: { cursor: onClearChordAccidental ? "pointer" : "default" },
            onClick: onClearChordAccidental ? (e) => {
              e.stopPropagation();
              onClearChordAccidental(ci);
            } : void 0
          },
          "\u266F"
        ), _cAcc === "flat" && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx - (NOTE_RX + 30) * playingScale,
            y: cy + 14 * playingScale,
            textAnchor: "middle",
            fontSize: 60 * playingScale,
            fill: cColor,
            fontWeight: "bold",
            stroke: _accStroke,
            strokeWidth: _accStrokeWidth,
            paintOrder: "stroke",
            style: { cursor: onClearChordAccidental ? "pointer" : "default" },
            onClick: onClearChordAccidental ? (e) => {
              e.stopPropagation();
              onClearChordAccidental(ci);
            } : void 0
          },
          "\u266D"
        ), _cAcc === "natural" && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx - (NOTE_RX + 30) * playingScale,
            y: cy + 27 * playingScale,
            textAnchor: "middle",
            fontSize: 72 * playingScale,
            fill: cColor,
            fontWeight: "bold",
            stroke: _accStroke,
            strokeWidth: _accStrokeWidth,
            paintOrder: "stroke",
            style: { cursor: onClearChordAccidental ? "pointer" : "default" },
            onClick: onClearChordAccidental ? (e) => {
              e.stopPropagation();
              onClearChordAccidental(ci);
            } : void 0
          },
          "\u266E"
        ), _cAcc === "double-sharp" && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx - (NOTE_RX + 38) * playingScale,
            y: cy + 22 * playingScale,
            textAnchor: "middle",
            fontSize: 50 * playingScale,
            fill: cColor,
            fontWeight: "bold",
            stroke: _accStroke,
            strokeWidth: _accStrokeWidth,
            paintOrder: "stroke",
            style: { cursor: onClearChordAccidental ? "pointer" : "default" },
            onClick: onClearChordAccidental ? (e) => {
              e.stopPropagation();
              onClearChordAccidental(ci);
            } : void 0
          },
          "\u266F\u266F"
        ), _cAcc === "double-flat" && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx - (NOTE_RX + 38) * playingScale,
            y: cy + 14 * playingScale,
            textAnchor: "middle",
            fontSize: 60 * playingScale,
            fill: cColor,
            fontWeight: "bold",
            stroke: _accStroke,
            strokeWidth: _accStrokeWidth,
            paintOrder: "stroke",
            style: { cursor: onClearChordAccidental ? "pointer" : "default" },
            onClick: onClearChordAccidental ? (e) => {
              e.stopPropagation();
              onClearChordAccidental(ci);
            } : void 0
          },
          "\u266D\u266D"
        ));
      })(), isDrum ? (
        // Drum chord member: its own piece-shaped, piece-colored head,
        // no note letter (drums never show letters).
        _drumHead(`cm-${ci}`, cx, cy, drumShapeForPiece(cn.drumPiece), cColor)
      ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx,
          cy,
          rx: NOTE_RX * playingScale,
          ry: NOTE_RY * playingScale,
          fill: cColor,
          stroke: "#000",
          strokeWidth: 2,
          transform: `rotate(-12, ${cx}, ${cy})`
        }
      ), (cn.duration || duration) === "whole" && /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx: cx + 1,
          cy,
          rx: NOTE_RX * 0.55 * playingScale,
          ry: NOTE_RY * 0.7 * playingScale,
          fill: "var(--bg)",
          stroke: "none",
          transform: `rotate(35, ${cx + 1}, ${cy})`
        }
      ), (cn.duration || duration) === "half" && /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx,
          cy,
          rx: NOTE_RX * 0.6 * playingScale,
          ry: NOTE_RY * 0.65 * playingScale,
          fill: "var(--bg)",
          stroke: "none",
          transform: `rotate(-12, ${cx}, ${cy})`
        }
      ), showLetters && /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + 6 * playingScale,
          textAnchor: "middle",
          fontSize: 18 * playingScale,
          fill: _letterColor,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif"
        },
        cn.name
      )), showChordFingerings && cn.fingering != null && (() => {
        var _dotPad = doubleDotted ? 34 : dotted ? 22 : 8;
        var _fp = _fingerPos(_FCL[cn.name] + (cn.octave || 0) * 7, _placement.offsetByKey["c" + ci] || 0, _dotPad);
        return /* @__PURE__ */ React.createElement(
          "text",
          {
            x: _fp.x,
            y: cy + 8 * playingScale,
            textAnchor: _fp.anchor,
            fontSize: 26 * playingScale,
            fill: "#000",
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif",
            style: { pointerEvents: "none" }
          },
          cn.fingering
        );
      })());
    });
  })());
}, (prev, next) => {
  if (prev.x !== next.x || prev.y !== next.y || prev.duration !== next.duration || prev.accidental !== next.accidental || prev.isRest !== next.isRest || prev.isPlaying !== next.isPlaying || prev.isSelected !== next.isSelected || prev.noteName !== next.noteName || prev.noteOctave !== next.noteOctave || prev.isMobile !== next.isMobile || prev.showFlag !== next.showFlag || prev.forceStemDirection !== next.forceStemDirection || prev.staffTop !== next.staffTop || prev.isBassStaff !== next.isBassStaff || prev.stemShorten !== next.stemShorten || prev.selectedChordIdx !== next.selectedChordIdx || prev.bigNoteOnPlay !== next.bigNoteOnPlay || prev.isGrace !== next.isGrace || prev.graceFirstOfRun !== next.graceFirstOfRun || prev.graceLeadExtra !== next.graceLeadExtra || prev.fingering !== next.fingering || prev.showChordFingerings !== next.showChordFingerings || prev.dotted !== next.dotted || prev.doubleDotted !== next.doubleDotted || prev.colorNotes !== next.colorNotes || prev.showLetters !== next.showLetters || prev.chord !== next.chord || prev.drumShape !== next.drumShape || prev.colorOverride !== next.colorOverride || prev.isDrum !== next.isDrum || prev.drumPiece !== next.drumPiece || prev.keySigSharps !== next.keySigSharps || prev.keySigFlats !== next.keySigFlats) return false;
  return true;
});
function AltoClef({ x, lineSpacing = LINE_SPACING, staffTop = STAFF_TOP }) {
  var textRef = useRef(null);
  var [transform, setTransform] = useState(null);
  useEffect(() => {
    var cancelled = false;
    var measure = () => {
      if (cancelled || !textRef.current) return;
      try {
        var bbox = textRef.current.getBBox();
        if (!bbox || !bbox.height || bbox.height < 1) return;
        var targetH = 4 * lineSpacing * 1.65;
        var scale = targetH / bbox.height;
        var X_OFFSET = 16;
        var tx = x + X_OFFSET - bbox.x * scale;
        var middleY = staffTop + 2 * lineSpacing;
        var ty = middleY - (bbox.y + bbox.height / 2) * scale;
        setTransform(`translate(${tx}, ${ty}) scale(${scale})`);
      } catch (e) {
      }
    };
    measure();
    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === "function") {
      document.fonts.ready.then(() => {
        if (cancelled) return;
        measure();
        setTimeout(measure, 100);
        setTimeout(measure, 500);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [x, lineSpacing, staffTop]);
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "line",
    {
      x1: x,
      y1: staffTop,
      x2: x,
      y2: staffTop + 4 * lineSpacing,
      stroke: "var(--line-color)",
      strokeWidth: 2
    }
  ), /* @__PURE__ */ React.createElement("g", { transform: transform || `translate(${x + 8}, ${staffTop + 2 * lineSpacing})` }, /* @__PURE__ */ React.createElement(
    "text",
    {
      ref: textRef,
      x: "0",
      y: "0",
      fontSize: "100",
      fill: "var(--clef-color)",
      fontFamily: "'Noto Music', 'Noto Serif', serif"
    },
    "\u{1D121}"
  )));
}
function TrebleClef({ x }) {
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "line",
    {
      x1: x,
      y1: STAFF_TOP,
      x2: x,
      y2: STAFF_TOP + 4 * LINE_SPACING,
      stroke: "var(--line-color)",
      strokeWidth: 2
    }
  ), /* @__PURE__ */ React.createElement(
    "text",
    {
      x: x + 6,
      y: STAFF_TOP + 4 * LINE_SPACING + 2,
      fontSize: 115,
      fill: "var(--clef-color)",
      fontFamily: "'Noto Music', 'Noto Serif', serif"
    },
    "\u{1D11E}"
  ));
}
function PercussionClef({ x }) {
  var top = STAFF_TOP + LINE_SPACING;
  var height = LINE_SPACING * 2;
  var barW = LINE_SPACING * 0.42;
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "line",
    {
      x1: x,
      y1: STAFF_TOP,
      x2: x,
      y2: STAFF_TOP + 4 * LINE_SPACING,
      stroke: "var(--line-color)",
      strokeWidth: 2
    }
  ), /* @__PURE__ */ React.createElement("rect", { x: x + 14, y: top, width: barW, height, fill: "var(--clef-color)" }), /* @__PURE__ */ React.createElement("rect", { x: x + 14 + barW + barW * 0.7, y: top, width: barW, height, fill: "var(--clef-color)" }));
}
function DrumKit({ width, height, onHit, activePiece }) {
  var VBW = 1e3, VBH = 500;
  var shellFill = "#f0f0f0";
  var shellEdge = "#4a4a4a";
  var headFill = "#fafafa";
  var headEdge = "#888888";
  var cymbalFill = "#cfcfcf";
  var cymbalEdge = "#3a3a3a";
  var bellFill = "#9a9a9a";
  var hardware = "#5a5a5a";
  var hardwareDark = "#1a1a1a";
  var labelColor = "#222222";
  var PIECES = [
    // Cymbals
    // Measured from IMG_3372 (2732×2048). Kit bounds: x∈[350,2150], y∈[770,1670].
    // Mapping: x_svg = 50 + (x_photo - 350) × 0.5
    //          y_svg = 50 + (y_photo - 770) × 0.478
    {
      id: "crash1",
      type: "cymbal",
      cx: 250,
      cy: 127,
      rx: 150,
      ry: 38,
      tilt: 7,
      label: "Crash 1",
      bellScale: 0.1,
      mountY: 145
    },
    {
      id: "splash",
      type: "cymbal",
      cx: 533,
      cy: 67,
      rx: 58,
      ry: 17,
      tilt: 0,
      label: "Splash",
      bellScale: 0.12,
      mountY: 80
    },
    {
      id: "crash2",
      type: "cymbal",
      cx: 765,
      cy: 134,
      rx: 145,
      ry: 31,
      tilt: -2,
      label: "Crash 2",
      bellScale: 0.1,
      mountY: 150
    },
    {
      id: "hihat",
      type: "cymbal-pair",
      cx: 138,
      cy: 252,
      rx: 88,
      ry: 13,
      tilt: 0,
      label: "Hi-Hat",
      bellScale: 0.12
    },
    {
      id: "ride",
      type: "cymbal",
      cx: 815,
      cy: 210,
      rx: 105,
      ry: 31,
      tilt: 5,
      label: "Ride",
      bellScale: 0.12,
      mountY: 225
    },
    // Drums
    {
      id: "tom1",
      type: "drum",
      cx: 430,
      cy: 155,
      rx: 55,
      ry: 24,
      shellH: 67,
      label: "Tom 1",
      headTilt: -2
    },
    {
      id: "tom2",
      type: "drum",
      cx: 565,
      cy: 158,
      rx: 50,
      ry: 26,
      shellH: 67,
      label: "Tom 2",
      headTilt: 0
    },
    {
      id: "snare",
      type: "drum",
      cx: 318,
      cy: 327,
      rx: 58,
      ry: 29,
      shellH: 43,
      label: "Snare",
      headTilt: -3
    },
    {
      id: "bass",
      type: "drum-kick",
      cx: 495,
      cy: 289,
      rx: 125,
      ry: 76,
      label: "Bass",
      headTilt: 0
    },
    {
      id: "floortom1",
      type: "drum-floor",
      cx: 690,
      cy: 323,
      rx: 70,
      ry: 43,
      shellH: 60,
      label: "Floor Tom 1",
      headTilt: -3
    },
    {
      id: "floortom2",
      type: "drum-floor",
      cx: 880,
      cy: 425,
      rx: 70,
      ry: 55,
      shellH: 45,
      label: "Floor Tom 2",
      headTilt: -8
    }
  ];
  var drums = PIECES.filter((p) => p.type.startsWith("drum"));
  var cymbals = PIECES.filter((p) => p.type.startsWith("cymbal"));
  var bass = PIECES.find((p) => p.id === "bass");
  var tom1 = PIECES.find((p) => p.id === "tom1");
  var tom2 = PIECES.find((p) => p.id === "tom2");
  var hihat = PIECES.find((p) => p.id === "hihat");
  var snare = PIECES.find((p) => p.id === "snare");
  var TripodLegs = ({ cx, topY, botY, spread }) => {
    var leftX = cx - spread, rightX = cx + spread;
    return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: cx, y1: topY, x2: leftX, y2: botY, stroke: hardware, strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("line", { x1: cx, y1: topY, x2: cx, y2: botY, stroke: hardware, strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("line", { x1: cx, y1: topY, x2: rightX, y2: botY, stroke: hardware, strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement("circle", { cx: leftX, cy: botY, r: 3, fill: hardwareDark }), /* @__PURE__ */ React.createElement("circle", { cx, cy: botY, r: 3, fill: hardwareDark }), /* @__PURE__ */ React.createElement("circle", { cx: rightX, cy: botY, r: 3, fill: hardwareDark }));
  };
  var CymbalStand = ({ cx, topY }) => /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: cx, y1: topY, x2: cx, y2: 460, stroke: hardware, strokeWidth: 3 }), /* @__PURE__ */ React.createElement(TripodLegs, { cx, topY: 430, botY: 470, spread: 28 }));
  var renderDrum = (p) => {
    var isActive = activePiece === p.id;
    var fill = isActive ? "#ffe066" : headFill;
    if (p.type === "drum-kick") {
      var headFillKick = isActive ? "#ffe066" : "url(#headGrad)";
      return /* @__PURE__ */ React.createElement(
        "g",
        {
          key: p.id,
          id: "drum-" + p.id,
          style: { cursor: "pointer" },
          onClick: () => onHit && onHit(p.id)
        },
        /* @__PURE__ */ React.createElement(
          "ellipse",
          {
            cx: p.cx,
            cy: p.cy,
            rx: p.rx,
            ry: p.ry,
            fill: "url(#shellGrad)",
            stroke: shellEdge,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ React.createElement(
          "ellipse",
          {
            cx: p.cx,
            cy: p.cy,
            rx: p.rx * 0.86,
            ry: p.ry * 0.86,
            fill: headFillKick,
            stroke: headEdge,
            strokeWidth: 1.5
          }
        ),
        [...Array(10)].map((_, i) => {
          var angle = i / 10 * 2 * Math.PI - Math.PI / 2;
          var ex = p.cx + p.rx * 0.94 * Math.cos(angle);
          var ey = p.cy + p.ry * 0.94 * Math.sin(angle);
          return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: ex, cy: ey, r: 3.5, fill: hardware, stroke: hardwareDark, strokeWidth: 0.8 }), /* @__PURE__ */ React.createElement("circle", { cx: ex, cy: ey, r: 1.5, fill: hardwareDark }));
        }),
        /* @__PURE__ */ React.createElement(
          "text",
          {
            x: p.cx,
            y: p.cy + 5,
            textAnchor: "middle",
            fontSize: 15,
            fontWeight: 700,
            fill: labelColor,
            fontFamily: "'DM Sans', sans-serif",
            pointerEvents: "none"
          },
          p.label
        )
      );
    }
    var isFloor = p.type === "drum-floor";
    return /* @__PURE__ */ React.createElement(
      "g",
      {
        key: p.id,
        id: "drum-" + p.id,
        style: { cursor: "pointer" },
        onClick: () => onHit && onHit(p.id)
      },
      /* @__PURE__ */ React.createElement("path", { d: `M ${p.cx - p.rx} ${p.cy}
           L ${p.cx - p.rx} ${p.cy + p.shellH}
           A ${p.rx} ${p.ry * 0.9} 0 0 0 ${p.cx + p.rx} ${p.cy + p.shellH}
           L ${p.cx + p.rx} ${p.cy}
           Z`, fill: "url(#shellGrad)", stroke: shellEdge, strokeWidth: 1.8, opacity: 0.95 }),
      /* @__PURE__ */ React.createElement("path", { d: `M ${p.cx - p.rx + 4} ${p.cy + 4}
           Q ${p.cx - p.rx + 8} ${p.cy + p.shellH / 2}
             ${p.cx - p.rx + 12} ${p.cy + p.shellH - 6}`, fill: "none", stroke: "#ffffff", strokeWidth: 2, opacity: 0.5 }),
      /* @__PURE__ */ React.createElement("path", { d: `M ${p.cx + p.rx - 4} ${p.cy + 4}
           Q ${p.cx + p.rx - 8} ${p.cy + p.shellH / 2}
             ${p.cx + p.rx - 12} ${p.cy + p.shellH - 6}`, fill: "none", stroke: hardwareDark, strokeWidth: 2, opacity: 0.25 }),
      /* @__PURE__ */ React.createElement("path", { d: `M ${p.cx - p.rx} ${p.cy + p.shellH}
           A ${p.rx} ${p.ry * 0.9} 0 0 0 ${p.cx + p.rx} ${p.cy + p.shellH}`, fill: "none", stroke: shellEdge, strokeWidth: 2 }),
      [...Array(8)].map((_, i) => {
        var t = i / 7;
        var angle = Math.PI + t * Math.PI;
        var lx = p.cx + p.rx * Math.cos(angle) * 0.85;
        if (Math.sin(angle) <= 0) return null;
        return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement(
          "line",
          {
            x1: lx,
            y1: p.cy + 3,
            x2: lx,
            y2: p.cy + p.shellH - 4,
            stroke: hardware,
            strokeWidth: 1.3,
            opacity: 0.85
          }
        ), /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: lx - 2,
            y: p.cy + 2,
            width: 4,
            height: 6,
            fill: hardwareDark,
            opacity: 0.7
          }
        ), /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: lx - 2,
            y: p.cy + p.shellH - 8,
            width: 4,
            height: 6,
            fill: hardwareDark,
            opacity: 0.7
          }
        ));
      }),
      /* @__PURE__ */ React.createElement("g", { transform: `rotate(${p.headTilt || 0} ${p.cx} ${p.cy})` }, /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx: p.cx,
          cy: p.cy,
          rx: p.rx,
          ry: p.ry,
          fill: shellEdge,
          stroke: "none"
        }
      ), /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx: p.cx,
          cy: p.cy,
          rx: p.rx * 0.93,
          ry: p.ry * 0.88,
          fill,
          stroke: headEdge,
          strokeWidth: 1.2
        }
      ), [...Array(8)].map((_, i) => {
        var angle = i / 8 * 2 * Math.PI;
        var ex = p.cx + p.rx * 0.96 * Math.cos(angle);
        var ey = p.cy + p.ry * 0.96 * Math.sin(angle);
        return /* @__PURE__ */ React.createElement("circle", { key: "rim-" + i, cx: ex, cy: ey, r: 1.6, fill: hardwareDark });
      }), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: p.cx,
          y: p.cy + 4,
          textAnchor: "middle",
          fontSize: 12,
          fontWeight: 600,
          fill: labelColor,
          fontFamily: "'DM Sans', sans-serif",
          pointerEvents: "none"
        },
        p.label
      )),
      isFloor && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: p.cx - p.rx + 6,
          y1: p.cy + p.shellH - 4,
          x2: p.cx - p.rx - 6,
          y2: p.cy + p.shellH + 32,
          stroke: hardware,
          strokeWidth: 2.5
        }
      ), /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: p.cx + p.rx - 6,
          y1: p.cy + p.shellH - 4,
          x2: p.cx + p.rx + 6,
          y2: p.cy + p.shellH + 32,
          stroke: hardware,
          strokeWidth: 2.5
        }
      ), /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: p.cx,
          y1: p.cy + p.shellH - 2,
          x2: p.cx,
          y2: p.cy + p.shellH + 32,
          stroke: hardware,
          strokeWidth: 2.5
        }
      ), /* @__PURE__ */ React.createElement("circle", { cx: p.cx - p.rx - 6, cy: p.cy + p.shellH + 32, r: 3, fill: hardwareDark }), /* @__PURE__ */ React.createElement("circle", { cx: p.cx + p.rx + 6, cy: p.cy + p.shellH + 32, r: 3, fill: hardwareDark }), /* @__PURE__ */ React.createElement("circle", { cx: p.cx, cy: p.cy + p.shellH + 32, r: 3, fill: hardwareDark }))
    );
  };
  var drawCymbalDisc = (cx, cy, rx, ry, isActive, bellScale) => {
    var fill = isActive ? "#ffe066" : "url(#cymGrad)";
    var bs = bellScale != null ? bellScale : 0.15;
    var bellRx = rx * bs;
    var bellRy = ry * bs * 1.05;
    return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx,
        ry,
        fill,
        stroke: cymbalEdge,
        strokeWidth: 2
      }
    ), /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx: rx * 0.85,
        ry: ry * 0.85,
        fill: "none",
        stroke: cymbalEdge,
        strokeWidth: 0.5,
        opacity: 0.4
      }
    ), /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx: rx * 0.7,
        ry: ry * 0.75,
        fill: "none",
        stroke: cymbalEdge,
        strokeWidth: 0.5,
        opacity: 0.4
      }
    ), /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx: rx * 0.55,
        ry: ry * 0.65,
        fill: "none",
        stroke: cymbalEdge,
        strokeWidth: 0.5,
        opacity: 0.4
      }
    ), /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx: rx * 0.4,
        ry: ry * 0.55,
        fill: "none",
        stroke: cymbalEdge,
        strokeWidth: 0.5,
        opacity: 0.4
      }
    ), /* @__PURE__ */ React.createElement(
      "ellipse",
      {
        cx,
        cy,
        rx: bellRx,
        ry: bellRy,
        fill: isActive ? "#ffd060" : "url(#bellGrad)",
        stroke: cymbalEdge,
        strokeWidth: 1.2
      }
    ), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: cx,
        y1: cy - bellRy * 0.4,
        x2: cx,
        y2: cy - bellRy * 3.2,
        stroke: hardwareDark,
        strokeWidth: 2.4
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: cx - 2.5,
        y: cy - bellRy * 3.4,
        width: 5,
        height: 3.5,
        fill: hardwareDark,
        stroke: "#111",
        strokeWidth: 0.6
      }
    ));
  };
  var renderCymbal = (p) => {
    var isActive = activePiece === p.id;
    if (p.type === "cymbal-pair") {
      var topTilt = -6;
      var botTilt = -2;
      var bottomCy = p.cy + 18;
      var topCy = p.cy - 18;
      return /* @__PURE__ */ React.createElement(
        "g",
        {
          key: p.id,
          id: "drum-" + p.id,
          style: { cursor: "pointer" },
          onClick: () => onHit && onHit(p.id)
        },
        /* @__PURE__ */ React.createElement(
          "line",
          {
            x1: p.cx,
            y1: bottomCy,
            x2: p.cx,
            y2: topCy,
            stroke: hardwareDark,
            strokeWidth: 2.5
          }
        ),
        /* @__PURE__ */ React.createElement("g", { transform: `rotate(${botTilt} ${p.cx} ${bottomCy})` }, drawCymbalDisc(p.cx, bottomCy, p.rx, p.ry, isActive, p.bellScale * 0.9)),
        /* @__PURE__ */ React.createElement("g", { transform: `rotate(${topTilt} ${p.cx} ${topCy})` }, drawCymbalDisc(p.cx, topCy, p.rx * 0.95, p.ry * 0.92, isActive, p.bellScale)),
        /* @__PURE__ */ React.createElement("g", { transform: `rotate(${topTilt} ${p.cx} ${topCy})` }, /* @__PURE__ */ React.createElement(
          "circle",
          {
            cx: p.cx,
            cy: topCy - p.ry * 1.9,
            r: 3.5,
            fill: hardwareDark,
            stroke: "#111",
            strokeWidth: 1
          }
        )),
        /* @__PURE__ */ React.createElement(
          "text",
          {
            x: p.cx,
            y: p.cy + p.ry + 40,
            textAnchor: "middle",
            fontSize: 11,
            fontWeight: 600,
            fill: labelColor,
            fontFamily: "'DM Sans', sans-serif",
            pointerEvents: "none"
          },
          p.label
        )
      );
    }
    return /* @__PURE__ */ React.createElement(
      "g",
      {
        key: p.id,
        id: "drum-" + p.id,
        style: { cursor: "pointer" },
        transform: `rotate(${p.tilt} ${p.cx} ${p.cy})`,
        onClick: () => onHit && onHit(p.id)
      },
      drawCymbalDisc(p.cx, p.cy, p.rx, p.ry, isActive, p.bellScale),
      /* @__PURE__ */ React.createElement(
        "text",
        {
          x: p.cx,
          y: p.cy + p.ry + 16,
          textAnchor: "middle",
          fontSize: 11,
          fontWeight: 600,
          fill: labelColor,
          fontFamily: "'DM Sans', sans-serif",
          pointerEvents: "none"
        },
        p.label
      )
    );
  };
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: `0 0 ${VBW} ${VBH}`,
      preserveAspectRatio: "xMidYMax meet",
      width,
      height,
      style: { display: "block", userSelect: "none" }
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: "cymGrad", cx: "50%", cy: "50%", r: "50%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#e8e8e8" }), /* @__PURE__ */ React.createElement("stop", { offset: "60%", stopColor: "#c8c8c8" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#a8a8a8" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "shellGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#f8f8f8" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#c0c0c0" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "headGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#ffffff" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#e0e0e0" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "bellGrad", cx: "40%", cy: "35%", r: "60%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#bababa" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#707070" }))),
    /* @__PURE__ */ React.createElement("line", { x1: 140, y1: 250, x2: 140, y2: 455, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement("line", { x1: 140, y1: 250, x2: 215, y2: 122, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement(TripodLegs, { cx: 140, topY: 420, botY: 465, spread: 26 }),
    /* @__PURE__ */ React.createElement("line", { x1: 800, y1: 250, x2: 800, y2: 455, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement("line", { x1: 800, y1: 250, x2: 720, y2: 130, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement(TripodLegs, { cx: 800, topY: 420, botY: 465, spread: 26 }),
    /* @__PURE__ */ React.createElement("line", { x1: 484, y1: 108, x2: 484, y2: 160, stroke: hardware, strokeWidth: 2.5 }),
    /* @__PURE__ */ React.createElement("line", { x1: 815, y1: 310, x2: 815, y2: 455, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement("line", { x1: 815, y1: 310, x2: 705, y2: 253, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement("line", { x1: 200, y1: 246, x2: 200, y2: 420, stroke: hardware, strokeWidth: 3 }),
    /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: 170,
        y: 428,
        width: 62,
        height: 9,
        fill: hardwareDark,
        stroke: "#111",
        strokeWidth: 1,
        rx: 1.5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: 172,
        y: 415,
        width: 58,
        height: 6,
        fill: hardwareDark,
        stroke: "#111",
        strokeWidth: 1,
        rx: 1
      }
    ),
    /* @__PURE__ */ React.createElement(TripodLegs, { cx: 200, topY: 432, botY: 465, spread: 30 }),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: snare.cx - 14,
        y1: snare.cy + 6,
        x2: snare.cx - 38,
        y2: snare.cy + 80,
        stroke: hardware,
        strokeWidth: 2.5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: snare.cx + 14,
        y1: snare.cy + 6,
        x2: snare.cx + 38,
        y2: snare.cy + 80,
        stroke: hardware,
        strokeWidth: 2.5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: snare.cx,
        y1: snare.cy + snare.ry + 8,
        x2: snare.cx,
        y2: snare.cy + 90,
        stroke: hardware,
        strokeWidth: 2.5
      }
    ),
    /* @__PURE__ */ React.createElement("circle", { cx: snare.cx - 38, cy: snare.cy + 80, r: 3, fill: hardwareDark }),
    /* @__PURE__ */ React.createElement("circle", { cx: snare.cx + 38, cy: snare.cy + 80, r: 3, fill: hardwareDark }),
    /* @__PURE__ */ React.createElement("circle", { cx: snare.cx, cy: snare.cy + 90, r: 3, fill: hardwareDark }),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: bass.cx,
        y1: bass.cy - bass.ry - 4,
        x2: bass.cx,
        y2: tom1.cy - 12,
        stroke: hardware,
        strokeWidth: 5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: bass.cx - 5,
        y: bass.cy - bass.ry - 10,
        width: 10,
        height: 8,
        fill: hardwareDark
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: tom1.cx + tom1.rx * 0.3,
        y1: tom1.cy - 12,
        x2: tom2.cx - tom2.rx * 0.3,
        y2: tom1.cy - 12,
        stroke: hardware,
        strokeWidth: 3.5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: tom1.cx + tom1.rx * 0.3,
        y1: tom1.cy - 12,
        x2: tom1.cx + tom1.rx * 0.3,
        y2: tom1.cy,
        stroke: hardware,
        strokeWidth: 3
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: tom2.cx - tom2.rx * 0.3,
        y1: tom1.cy - 12,
        x2: tom2.cx - tom2.rx * 0.3,
        y2: tom2.cy,
        stroke: hardware,
        strokeWidth: 3
      }
    ),
    /* @__PURE__ */ React.createElement("circle", { cx: tom1.cx + tom1.rx * 0.3, cy: tom1.cy - 12, r: 3, fill: hardwareDark }),
    /* @__PURE__ */ React.createElement("circle", { cx: tom2.cx - tom2.rx * 0.3, cy: tom1.cy - 12, r: 3, fill: hardwareDark }),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: 200 - 14,
        y1: 420,
        x2: 200 - 6,
        y2: 428,
        stroke: hardwareDark,
        strokeWidth: 1.5
      }
    ),
    /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: 200 + 14,
        y1: 420,
        x2: 200 + 6,
        y2: 428,
        stroke: hardwareDark,
        strokeWidth: 1.5
      }
    ),
    drums.map(renderDrum),
    bass && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: bass.cx - bass.rx + 10,
        y1: bass.cy + bass.ry - 8,
        x2: bass.cx - bass.rx - 8,
        y2: bass.cy + bass.ry + 28,
        stroke: hardware,
        strokeWidth: 3
      }
    ), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: bass.cx + bass.rx - 10,
        y1: bass.cy + bass.ry - 8,
        x2: bass.cx + bass.rx + 8,
        y2: bass.cy + bass.ry + 28,
        stroke: hardware,
        strokeWidth: 3
      }
    ), /* @__PURE__ */ React.createElement("circle", { cx: bass.cx - bass.rx - 8, cy: bass.cy + bass.ry + 28, r: 3, fill: hardwareDark }), /* @__PURE__ */ React.createElement("circle", { cx: bass.cx + bass.rx + 8, cy: bass.cy + bass.ry + 28, r: 3, fill: hardwareDark })),
    bass && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: bass.cx - 25,
        y: bass.cy + bass.ry + 4,
        width: 50,
        height: 14,
        fill: hardwareDark,
        stroke: "#111",
        strokeWidth: 1.2,
        rx: 2
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: bass.cx - 12,
        y: bass.cy + bass.ry + 18,
        width: 24,
        height: 28,
        fill: hardwareDark,
        stroke: "#111",
        strokeWidth: 1.2,
        rx: 2
      }
    ), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: bass.cx,
        y1: bass.cy + bass.ry + 4,
        x2: bass.cx,
        y2: bass.cy + bass.ry * 0.5,
        stroke: hardwareDark,
        strokeWidth: 2.5
      }
    )),
    cymbals.map(renderCymbal)
  );
}
function TimeSignature({ x, top, bottom, bassClef, staffTop }) {
  var sTop = staffTop != null ? staffTop : bassClef ? BASS_STAFF_TOP : STAFF_TOP;
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "text",
    {
      x,
      y: sTop + 1.7 * LINE_SPACING,
      textAnchor: "middle",
      fontSize: 60,
      fontWeight: "bold",
      fill: "var(--line-color)",
      fontFamily: "'Libre Baskerville', serif"
    },
    top
  ), /* @__PURE__ */ React.createElement(
    "text",
    {
      x,
      y: sTop + 3.7 * LINE_SPACING,
      textAnchor: "middle",
      fontSize: 60,
      fontWeight: "bold",
      fill: "var(--line-color)",
      fontFamily: "'Libre Baskerville', serif"
    },
    bottom
  ));
}
function keyChangeSymbols(oldKeyId, newKeyId) {
  var oldKs = KEY_SIGNATURES.find((k) => k.id === oldKeyId) || { sharps: [], flats: [] };
  var newKs = KEY_SIGNATURES.find((k) => k.id === newKeyId) || { sharps: [], flats: [] };
  var out = [];
  for (var s of oldKs.sharps) if (!newKs.sharps.includes(s)) out.push({ note: s, symbol: "\u266E", useSharpPos: true });
  for (var f of oldKs.flats) if (!newKs.flats.includes(f)) out.push({ note: f, symbol: "\u266E", useSharpPos: false });
  for (var s of newKs.sharps) if (!oldKs.sharps.includes(s)) out.push({ note: s, symbol: "\u266F", useSharpPos: true });
  for (var f of newKs.flats) if (!oldKs.flats.includes(f)) out.push({ note: f, symbol: "\u266D", useSharpPos: false });
  return out;
}
function KeyChangeDisplay({ x, oldKey, newKey, bassClef }) {
  var changes = keyChangeSymbols(oldKey, newKey);
  if (changes.length === 0) return null;
  var sTop = bassClef ? BASS_STAFF_TOP : STAFF_TOP;
  return /* @__PURE__ */ React.createElement("g", { className: "key-change-anim" }, changes.map((c, i) => {
    var _a, _b;
    var positions = c.useSharpPos ? SHARP_POSITIONS : FLAT_POSITIONS;
    var pos = bassClef ? ((_a = positions[c.note]) != null ? _a : 0) + 2 : (_b = positions[c.note]) != null ? _b : 0;
    var y = sTop + pos * (LINE_SPACING / 2);
    var yAdj = c.symbol === "\u266D" ? y + 14 : y + 22;
    return /* @__PURE__ */ React.createElement(
      "text",
      {
        key: i,
        x: x + i * 30,
        y: yAdj,
        fontSize: 52,
        fontWeight: "bold",
        fill: "var(--line-color)",
        textAnchor: "middle"
      },
      c.symbol
    );
  }));
}
var KEY_SIG_RAINBOW = { C: "var(--c-color)", D: "var(--d-color)", E: "var(--e-color)", F: "var(--f-color)", G: "var(--g-color)", A: "var(--a-color)", B: "var(--b-color)" };
function KeySignatureDisplay({ x, keySigId, bassClef, staffTop, activeNoteIds }) {
  var ks = KEY_SIGNATURES.find((k) => k.id === keySigId);
  if (!ks || ks.sharps.length === 0 && ks.flats.length === 0) return null;
  var sTop = staffTop != null ? staffTop : bassClef ? BASS_STAFF_TOP : STAFF_TOP;
  var noteIdOf = (letter) => activeNoteIds == null ? void 0 : activeNoteIds.get(letter);
  var items = [];
  if (ks.sharps.length > 0) {
    ks.sharps.forEach((note, i) => {
      var pos = bassClef ? SHARP_POSITIONS[note] + 2 : SHARP_POSITIONS[note];
      var y = sTop + pos * (LINE_SPACING / 2);
      var noteId = noteIdOf(note);
      var fill = noteId ? KEY_SIG_RAINBOW[note] || "var(--line-color)" : "var(--line-color)";
      items.push(
        /* @__PURE__ */ React.createElement(
          "text",
          {
            key: `s${i}-${noteId || "off"}`,
            x: x + i * 36,
            y: y + 22,
            fontSize: 60,
            fontWeight: "bold",
            fill,
            className: noteId ? "ks-pulse" : "",
            textAnchor: "middle"
          },
          "\u266F"
        )
      );
    });
  } else {
    ks.flats.forEach((note, i) => {
      var pos = bassClef ? FLAT_POSITIONS[note] + 2 : FLAT_POSITIONS[note];
      var y = sTop + pos * (LINE_SPACING / 2);
      var noteId = noteIdOf(note);
      var fill = noteId ? KEY_SIG_RAINBOW[note] || "var(--line-color)" : "var(--line-color)";
      items.push(
        /* @__PURE__ */ React.createElement(
          "text",
          {
            key: `f${i}-${noteId || "off"}`,
            x: x + i * 32,
            y: y + 14,
            fontSize: 60,
            fontWeight: "bold",
            fill,
            className: noteId ? "ks-pulse" : "",
            textAnchor: "middle"
          },
          "\u266D"
        )
      );
    });
  }
  return /* @__PURE__ */ React.createElement("g", null, items);
}
var TOOLBAR_TABS = [
  { id: "note", label: "\u270F\uFE0F", name: "Note" },
  { id: "duration", label: "\u2669", name: "Duration" },
  { id: "options", label: "\u2699\uFE0F", name: "Options" }
];
window._bpmFocused = false;
function BpmInput({ bpm, setBpm }) {
  var inputRef = useRef(null);
  var lastBpmRef = useRef(bpm);
  useEffect(() => {
    if (inputRef.current && bpm !== lastBpmRef.current && !window._bpmFocused) {
      inputRef.current.value = String(bpm);
      lastBpmRef.current = bpm;
    }
  }, [bpm]);
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: inputRef,
      type: "text",
      inputMode: "numeric",
      defaultValue: bpm,
      onClick: (e) => e.target.select(),
      onDoubleClick: (e) => e.target.select(),
      onFocus: (e) => {
        window._bpmFocused = true;
        e.target.select();
      },
      onBlur: (e) => {
        window._bpmFocused = false;
        var num = parseInt(e.target.value, 10);
        if (!isNaN(num) && num >= 20 && num <= 500) {
          setBpm(num);
          lastBpmRef.current = num;
          e.target.value = String(num);
        } else {
          e.target.value = String(bpm);
        }
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") e.target.blur();
      },
      style: {
        width: 34,
        height: 16,
        fontSize: 13,
        fontWeight: 600,
        textAlign: "center",
        background: "transparent",
        border: "none",
        borderRadius: 0,
        color: "var(--text)",
        padding: 0,
        fontFamily: "inherit",
        outline: "none"
      }
    }
  );
}
function LibraryOverlay({ open, isAdmin, onClose, onOpenSong }) {
  useEffect(() => {
    if (!open) return;
    var handler = (e) => {
      if (e.origin !== window.location.origin) return;
      var d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "rpm-close-library") onClose();
      else if (d.type === "rpm-open-song" && typeof d.title === "string") onOpenSong(d.title);
      else if (d.type === "rpm-profile-changed" || d.type === "rpm-profiles-changed") {
        window.dispatchEvent(new CustomEvent("rpm-profiles-sync"));
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [open, onClose, onOpenSong]);
  if (!open) return null;
  var _instParam = window.__RPM_DRUMS__ ? "drums" : window.__RPM_UKULELE__ ? "ukulele" : window.__RPM_GUITAR__ ? "guitar" : window.__RPM_BASS_GUITAR__ ? "bass-guitar" : window.__RPM_VIOLIN__ ? "violin" : window.__RPM_VIOLA__ ? "viola" : window.__RPM_CELLO__ ? "cello" : window.__RPM_MANDOLIN__ ? "mandolin" : window.__RPM_BANJO__ ? "banjo" : window.__RPM_FLUTE__ ? "flute" : window.__RPM_RECORDER__ ? "recorder" : window.__RPM_TRUMPET__ ? "trumpet" : window.__RPM_EUPHONIUM__ ? "euphonium" : window.__RPM_SAXOPHONE__ ? "saxophone" : "keyboard";
  var src = (isAdmin ? window.location.pathname.replace(/\/+$/, "").replace(/\/(keyboard|drums|guitar|ukulele|violin|viola|cello|bass-guitar|mandolin|banjo|flute|recorder|trumpet|euphonium|saxophone)$/, "") + "/library" : "/library") + "?embed=1&instrument=" + _instParam;
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, zIndex: 2500, background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src,
      title: "Song Library",
      style: { width: "100%", height: "100%", border: 0, display: "block" }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: onClose, "aria-label": "Close library", style: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2501,
    width: 44,
    height: 44,
    borderRadius: 22,
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontSize: 22,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  } }, "\u2715"));
}
function MusicNotationEditor() {
  var _a, _b;
  var celebrationBufferRef = useRef(null);
  var celebrationAudioRef = useRef(null);
  useEffect(() => {
    var unlocked = false;
    var unlockAudio = () => {
      if (unlocked) return;
      if (typeof Tone === "undefined" || !Tone.Synth) return;
      unlocked = true;
      try {
        Tone.start();
        if (Tone.context && Tone.context.state !== "running") {
          Tone.context.resume();
        }
        var ctx = Tone.context.rawContext || Tone.context;
        var buffer = ctx.createBuffer(1, 1, 22050);
        var source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        if (source.start) source.start(0);
        var testSynth = new Tone.Synth().toDestination();
        testSynth.volume.value = -100;
        testSynth.triggerAttackRelease("C4", "32n");
        setTimeout(() => {
          try {
            testSynth.dispose();
          } catch (e) {
          }
        }, 100);
        if (!celebrationBufferRef.current && ctx && ctx.decodeAudioData) {
          fetch("/public/celebration.mp3").then((r) => r.arrayBuffer()).then((ab) => new Promise((resolve, reject) => {
            try {
              var p = ctx.decodeAudioData(ab, resolve, reject);
              if (p && typeof p.then === "function") p.then(resolve, reject);
            } catch (e) {
              reject(e);
            }
          })).then((buf) => {
            celebrationBufferRef.current = buf;
          }).catch(() => {
          });
        }
        if (!celebrationAudioRef.current) {
          var a = new Audio("/public/celebration.mp3");
          a.preload = "auto";
          a.volume = 1;
          celebrationAudioRef.current = a;
        }
      } catch (e) {
        unlocked = false;
      }
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("touchend", unlockAudio);
    };
    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);
    document.addEventListener("touchend", unlockAudio);
    return () => {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("touchend", unlockAudio);
    };
  }, []);
  var [measures, setMeasuresRaw] = useState([
    { notes: [] },
    { notes: [] },
    { notes: [] },
    { notes: [] }
  ]);
  var undoStackRef = useRef([]);
  var redoStackRef = useRef([]);
  var isUndoRedoRef = useRef(false);
  var setMeasures = useCallback((updater) => {
    setMeasuresRaw((prev) => {
      var next = typeof updater === "function" ? updater(prev) : updater;
      if (!isUndoRedoRef.current) {
        undoStackRef.current.push(JSON.stringify(prev));
        if (undoStackRef.current.length > 50) undoStackRef.current.shift();
        redoStackRef.current = [];
      }
      isUndoRedoRef.current = false;
      return next;
    });
  }, []);
  var copyNotes = useCallback(() => {
    if (copyMode) {
      setCopyMode(false);
      setSelectedNotes([]);
      setSelectedNote(null);
      setPasteTarget(null);
      setSelectedMeasures(null);
      setMeasureCopyPhase("pick");
      setCopyScope("notes");
    } else {
      setCopyMode(true);
      setSelectedNotes([]);
      setSelectedNote(null);
      setPasteTarget(null);
      setSelectedMeasures(null);
      setMeasureCopyPhase("pick");
    }
  }, [copyMode]);
  var commitMeasurePaste = useCallback((targetMi, range) => {
    if (!range) {
      showEditHint("No measure range picked.");
      return;
    }
    var lo = Math.min(range.from, range.to);
    var hi = Math.max(range.from, range.to);
    var copiedMeasures = [];
    for (var i = lo; i <= hi; i++) {
      var m = measures[i];
      if (!m) continue;
      var dup = JSON.parse(JSON.stringify(m));
      dup.notes = dup.notes.map((n) => ({ ...n, id: Date.now() + Math.random(), x: 0 }));
      copiedMeasures.push(dup);
    }
    if (copiedMeasures.length === 0) {
      showEditHint("Nothing to paste \u2014 selected range produced 0 measures.");
      return;
    }
    var insertAt = targetMi + 1;
    setMeasures((prev) => {
      var next = [...prev];
      var distributed = copiedMeasures.map((m2) => ({ ...m2, notes: distributeNotes(m2.notes) }));
      next.splice(insertAt, 0, ...distributed);
      return next;
    });
    showEditHint(`Pasted ${copiedMeasures.length} measure${copiedMeasures.length === 1 ? "" : "s"} after measure ${targetMi + 1}.`);
    setCopyMode(false);
    setSelectedNotes([]);
    setSelectedNote(null);
    setPasteTarget(null);
    setSelectedMeasures(null);
    setMeasureCopyPhase("pick");
  }, [measures, setMeasures, distributeNotes, showEditHint]);
  var pasteNotes = useCallback(() => {
    if (!copyMode) return;
    if (!pasteTarget) return;
    if (copyScope === "measures") {
      if (!selectedMeasures) {
        showEditHint("No measure range picked. Click measures to build a range, then \u2713 Set Target, then a destination.");
        return;
      }
      commitMeasurePaste(pasteTarget.measure, selectedMeasures);
      return;
    }
    if (selectedNotes.length === 0) return;
    var sorted = [...selectedNotes].sort((a, b) => a.measure - b.measure || a.note - b.note);
    var clipboard = sorted.map((s) => {
      var _a2;
      var note = (_a2 = measures[s.measure]) == null ? void 0 : _a2.notes[s.note];
      return note ? JSON.parse(JSON.stringify(note)) : null;
    }).filter(Boolean);
    if (clipboard.length === 0) return;
    clipboardRef.current = clipboard;
    var targetMi = pasteTarget.measure;
    var insertAt = pasteTarget.note + 1;
    setMeasures((prev) => {
      var next = [...prev];
      var targetMeasure = next[targetMi];
      var newNotes = [...targetMeasure.notes];
      var pasted = clipboard.map((n) => ({ ...n, id: Date.now() + Math.random(), x: 0 }));
      newNotes.splice(insertAt, 0, ...pasted);
      next[targetMi] = { ...targetMeasure, notes: distributeNotes(newNotes) };
      return next;
    });
    setCopyMode(false);
    setSelectedNotes([]);
    setSelectedNote(null);
    setPasteTarget(null);
  }, [copyMode, copyScope, selectedNotes, selectedMeasures, pasteTarget, measures, setMeasures, distributeNotes, showEditHint]);
  var undo = useCallback(() => {
    if (undoStackRef.current.length === 0) return;
    setMeasuresRaw((prev) => {
      redoStackRef.current.push(JSON.stringify(prev));
      var restored = JSON.parse(undoStackRef.current.pop());
      isUndoRedoRef.current = true;
      return restored;
    });
    setSelectedNote(null);
  }, []);
  var redo = useCallback(() => {
    if (redoStackRef.current.length === 0) return;
    setMeasuresRaw((prev) => {
      undoStackRef.current.push(JSON.stringify(prev));
      var restored = JSON.parse(redoStackRef.current.pop());
      isUndoRedoRef.current = true;
      return restored;
    });
    setSelectedNote(null);
  }, []);
  var [selectedDuration, setSelectedDuration] = useState("quarter");
  var [isDotted, setIsDotted] = useState(false);
  var [isTriplet, setIsTriplet] = useState(false);
  var [isGraceNote, setIsGraceNote] = useState(false);
  var [selectedAccidental, setSelectedAccidental] = useState("none");
  var [selectedFingering, setSelectedFingering] = useState(null);
  var [keySig, setKeySig] = useState("C");
  var [songKey, setSongKey] = useState("C");
  var [transposeOffset, setTransposeOffset] = useState(0);
  var [keyInput, setKeyInput] = useState("C");
  var [keySigInput, setKeySigInput] = useState("C");
  var [clef, setClef] = useState("treble");
  var [difficulty, setDifficulty] = useState(0);
  var [isRestMode, setIsRestMode] = useState(false);
  var [toolbarMin, setToolbarMin] = useState(() => {
    try {
      return localStorage.getItem("rpm_toolbar_min") === "1";
    } catch (e) {
      return false;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("rpm_toolbar_min", toolbarMin ? "1" : "0");
    } catch (e) {
    }
  }, [toolbarMin]);
  var [childLock, setChildLock] = useState(true);
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [isFullscreen, setIsFullscreen] = useState(false);
  var [showHomeScreenHint, setShowHomeScreenHint] = useState(false);
  var [toolbarHidden, setToolbarHidden] = useState(
    () => typeof window !== "undefined" && Math.min(window.innerWidth || 999, window.innerHeight || 999) < 500
  );
  var [showPhoneTip, setShowPhoneTip] = useState(true);
  useEffect(() => {
    var t = setTimeout(() => setShowPhoneTip(false), 1e4);
    return () => clearTimeout(t);
  }, []);
  var [pianoHidden, setPianoHidden] = useState(() => {
    if (typeof localStorage === "undefined") return false;
    return localStorage.getItem("rapmusic.pianoHidden") === "1";
  });
  useEffect(() => {
    try {
      localStorage.setItem("rapmusic.pianoHidden", pianoHidden ? "1" : "0");
    } catch (e) {
    }
  }, [pianoHidden]);
  var swipeStartYRef = useRef(null);
  var [editHint, setEditHint] = useState(null);
  var editHintTimerRef = useRef(null);
  var showEditHint = useCallback((text) => {
    setEditHint({ text, id: Date.now() });
    if (editHintTimerRef.current) clearTimeout(editHintTimerRef.current);
    editHintTimerRef.current = setTimeout(() => setEditHint(null), 2200);
  }, []);
  var [lyricsScrollY, setLyricsScrollY] = useState(0);
  var [playMode, setPlayMode] = useState(null);
  var playModeRef = useRef(null);
  useEffect(() => {
    playModeRef.current = playMode;
  }, [playMode]);
  var [vibeMode, setVibeMode] = useState(0);
  var colorNotes = vibeMode === 0;
  var showLetters = vibeMode !== 2;
  var [midiInputCount, setMidiInputCount] = useState(0);
  var [midiStatus, setMidiStatus] = useState("idle");
  var [midiDebugCount, setMidiDebugCount] = useState(0);
  var [midiDebugLast, setMidiDebugLast] = useState("");
  var [midiDebugError, setMidiDebugError] = useState("");
  var requestMidiRef = useRef(null);
  var midiAccessRef = useRef(null);
  var tieSkipAttackMap = useMemo(() => {
    var map = /* @__PURE__ */ new Map();
    var lastTiedKey = { treble: null, bass: null };
    for (var mi = 0; mi < measures.length; mi++) {
      var mnotes = measures[mi].notes;
      for (var ni = 0; ni < mnotes.length; ni++) {
        var n = mnotes[ni];
        var sk = n.staff === "bass" ? "bass" : "treble";
        var key = `${mi}-${ni}`;
        if (lastTiedKey[sk] && !n.isRest) {
          map.set(key, true);
          lastTiedKey[sk] = null;
        }
        if (n.tie && !n.isRest) lastTiedKey[sk] = key;
      }
    }
    return map;
  }, [measures]);
  var keySigByMeasure = useMemo(() => {
    var map = /* @__PURE__ */ new Map();
    for (var mi = 0; mi < measures.length; mi++) {
      var ks = KEY_SIGNATURES.find((k) => k.id === effectiveKeySig(measures, mi, keySig));
      map.set(mi, {
        sharps: ks && ks.sharps || EMPTY_KEY_ACCIDENTALS,
        flats: ks && ks.flats || EMPTY_KEY_ACCIDENTALS
      });
    }
    return map;
  }, [measures, keySig]);
  var practiceSequence = useMemo(() => {
    var _a2;
    if (playMode !== "practice") return [];
    var seq = [];
    var volta1Label = ((_a2 = measures.find((m) => m.volta1Label)) == null ? void 0 : _a2.volta1Label) || "";
    var nums = volta1Label.match(/\d+/g);
    var maxRepeats = nums ? Math.max(...nums.map(Number)) : 1;
    var hasVolta2 = measures.some((m) => m.volta2Start);
    var repeatStart = measures.findIndex((m) => m.repeatStart);
    var repeatEnd = measures.findIndex((m) => m.repeat);
    var repeatLimit = repeatStart >= 0 && repeatEnd >= 0 ? maxRepeats : 0;
    for (var rep = 0; rep <= repeatLimit; rep++) {
      var inVolta1 = false, inVolta2 = false;
      for (var mi = rep > 0 && repeatStart >= 0 ? repeatStart : 0; mi < measures.length; mi++) {
        var measure = measures[mi];
        if (measure.volta1Start) inVolta1 = true;
        if (measure.volta2Start) {
          inVolta2 = true;
          inVolta1 = false;
        }
        if (inVolta1 && rep >= maxRepeats && hasVolta2) {
          if (measure.volta1End || measure.repeat) inVolta1 = false;
          continue;
        }
        if (inVolta2 && rep < maxRepeats) {
          if (measure.volta2End) inVolta2 = false;
          continue;
        }
        if (measure.volta1End) inVolta1 = false;
        if (measure.volta2End) inVolta2 = false;
        var _measureEntries = [];
        for (var ni = 0; ni < measure.notes.length; ni++) {
          var note = measure.notes[ni];
          if (note.isRest) continue;
          var staffKey = note.staff || "treble";
          var _accepts = clef === "alto" || clef === "drum" ? "treble" : clef;
          if (!isMultiStaff(clef) && staffKey !== _accepts) continue;
          _measureEntries.push({ ni, x: note.x || 0, staffOrder: staffKey === "bass" ? 1 : 0 });
        }
        _measureEntries.sort((a, b) => a.x === b.x ? a.staffOrder - b.staffOrder : a.x - b.x);
        for (var _e of _measureEntries) {
          seq.push({ measure: mi, note: _e.ni, repeat: rep });
        }
        if (measure.repeat && rep < repeatLimit) break;
      }
    }
    return seq;
  }, [playMode, measures, clef]);
  var [practiceIdx, setPracticeIdx] = useState(0);
  var practicePos = practiceSequence[practiceIdx] || { measure: 0, note: 0 };
  var practiceBeatKeys = useMemo(() => {
    var _a2, _b2;
    var set = /* @__PURE__ */ new Set();
    if (playMode !== "practice" || !practiceSequence.length) return set;
    var here = practiceSequence[practiceIdx];
    if (!here) return set;
    var m = measures[here.measure];
    if (!m) return set;
    var refX = (_b2 = (_a2 = m.notes[here.note]) == null ? void 0 : _a2.x) != null ? _b2 : 0;
    var _addIf = (i2) => {
      var _a3, _b3;
      var p = practiceSequence[i2];
      if (!p) return false;
      if (p.measure !== here.measure) return false;
      var px = (_b3 = (_a3 = measures[p.measure]) == null ? void 0 : _a3.notes[p.note]) == null ? void 0 : _b3.x;
      if (px !== refX) return false;
      set.add(`${p.measure}-${p.note}`);
      return true;
    };
    for (var i = practiceIdx; i < practiceSequence.length && _addIf(i); i++) ;
    for (var i = practiceIdx - 1; i >= 0 && _addIf(i); i--) ;
    return set;
  }, [playMode, practiceSequence, practiceIdx, measures]);
  var practiceSatisfiedRef = useRef(/* @__PURE__ */ new Set());
  var practiceJustFinishedRef = useRef(false);
  var celebratingRef = useRef(false);
  useEffect(() => {
    if (playMode === "practice" && practiceSequence.length > 0) {
      setPracticeIdx(0);
      practiceSatisfiedRef.current = /* @__PURE__ */ new Set();
      var first = practiceSequence[0];
      setPlayingIdx({ measure: first.measure, note: first.note });
      repeatCountRef.current = first.repeat || 0;
      practiceJustFinishedRef.current = false;
    } else if (playMode !== "practice") {
      setPracticeIdx(0);
      practiceSatisfiedRef.current = /* @__PURE__ */ new Set();
      if (practiceJustFinishedRef.current) {
        practiceJustFinishedRef.current = false;
      } else if (!isPlaying) {
        setPlayingIdx({ measure: -1, note: -1 });
        setPlayingNotes({});
      }
    }
  }, [playMode, practiceSequence]);
  useEffect(() => {
    var isEditUrl = window.__RPM_READONLY__ === false;
    if (!isEditUrl) return;
    fetch("/api/auth", { credentials: "include" }).then((r) => r.json()).then((data) => {
      setIsLoggedIn(data.authenticated);
      if (data.authenticated) setChildLock(false);
      else setShowPinPrompt(true);
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    var handler = () => setIsFullscreen(
      !!(document.fullscreenElement || document.webkitFullscreenElement)
    );
    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    handler();
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
    };
  }, []);
  var [libraryOpen, setLibraryOpen] = useState(false);
  var isStandalone = typeof window !== "undefined" && (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true);
  var toggleFullscreen = useCallback(() => {
    var _a2, _b2;
    if (isStandalone) return;
    var el = document.documentElement;
    var req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
    var exit = document.exitFullscreen || document.webkitExitFullscreen;
    var fsElem = document.fullscreenElement || document.webkitFullscreenElement;
    if (!req) {
      setShowHomeScreenHint(true);
      return;
    }
    if (fsElem) {
      (_a2 = exit == null ? void 0 : exit.call(document)) == null ? void 0 : _a2.catch(() => {
      });
    } else {
      (_b2 = req.call(el)) == null ? void 0 : _b2.catch(() => {
      });
    }
  }, [isStandalone]);
  var [lockTaps, setLockTaps] = useState(0);
  var lockTapTimer = useRef(null);
  var playStartTimeRef = useRef(null);
  var scrollTimelineRef = useRef([]);
  var playPositionRef = useRef({ measure: 0, note: 0, beatOffset: 0 });
  var playBpmRef = useRef(null);
  var repeatCountRef = useRef(0);
  var endRepeatPassRef = useRef(null);
  var navStateRef = useRef({ mode: "none", tookNav: /* @__PURE__ */ new Set() });
  var prevPracticeNoteXRef = useRef(-Infinity);
  var sliderActiveRef = useRef(false);
  var metronomeStartBeatOffsetRef = useRef(0);
  var wasPlayingRef = useRef(false);
  var scheduleFromRef = useRef(null);
  var [timeSig, setTimeSig] = useState({ top: 4, bottom: 4 });
  var [bpm, setBpm] = useState(120);
  var [tempoName, setTempoName] = useState("");
  var bpmRef = useRef(bpm);
  bpmRef.current = bpm;
  var [isPlaying, setIsPlaying] = useState(false);
  var [isPaused, setIsPaused] = useState(false);
  var [isLooping, setIsLooping] = useState(false);
  var [playRestartTick, setPlayRestartTick] = useState(0);
  var [dropPulse, setDropPulse] = useState(-1);
  var [dropMeasure, setDropMeasure] = useState(-1);
  var dropPulseIntervalRef = useRef(null);
  var dropStartMiRef = useRef(0);
  var [clickedDrop, setClickedDrop] = useState(null);
  var [bigNoteOnPlay, setBigNoteOnPlay] = useState(false);
  var [showFingering, setShowFingering] = useState(false);
  var isLoopingRef = useRef(false);
  var isPlayingRef = useRef(false);
  var [playingIdx, setPlayingIdx] = useState({ measure: -1, note: -1 });
  var lastPlayedMeasureRef = useRef(-1);
  useEffect(() => {
    if (playingIdx.measure >= 0) lastPlayedMeasureRef.current = playingIdx.measure;
  }, [playingIdx.measure]);
  var [playingNotes, setPlayingNotes] = useState({});
  var activeKeySigNoteIds = useMemo(() => {
    var map = /* @__PURE__ */ new Map();
    var _consider = (mi2, ni2) => {
      var _a2;
      var n = (_a2 = measures[mi2]) == null ? void 0 : _a2.notes[ni2];
      if (!n || n.isRest) return;
      if (n.accidental === "natural") return;
      var _eff = effectiveKeySig(measures, mi2, keySig);
      var _ks = KEY_SIGNATURES.find((k2) => k2.id === _eff);
      if (!_ks) return;
      var _affected = /* @__PURE__ */ new Set([..._ks.sharps || [], ..._ks.flats || []]);
      if (_affected.has(n.name)) map.set(n.name, `${mi2}-${ni2}`);
    };
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      _consider(mi, ni);
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      _consider(practicePos.measure, practicePos.note);
    }
    return map;
  }, [playingNotes, measures, keySig, playMode, practicePos]);
  var [selectedNote, setSelectedNote] = useState(null);
  var [slurArmed, setSlurArmed] = useState(null);
  useEffect(() => {
    if (!slurArmed || !selectedNote) return;
    if (selectedNote.measure === slurArmed.mi && selectedNote.note === slurArmed.ni) return;
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[selectedNote.measure].notes];
      notes[selectedNote.note] = { ...notes[selectedNote.note], slurEnd: true };
      next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
      return next;
    });
    setSlurArmed(null);
  }, [selectedNote, slurArmed]);
  useEffect(() => {
    if (!slurArmed) return;
    var t = setTimeout(() => setSlurArmed(null), 8e3);
    return () => clearTimeout(t);
  }, [slurArmed]);
  var [hairpinArmed, setHairpinArmed] = useState(null);
  useEffect(() => {
    if (!hairpinArmed || !selectedNote) return;
    if (selectedNote.measure === hairpinArmed.mi && selectedNote.note === hairpinArmed.ni) return;
    setMeasures((prev) => {
      var next = [...prev];
      var sNotes = [...next[hairpinArmed.mi].notes];
      sNotes[hairpinArmed.ni] = { ...sNotes[hairpinArmed.ni], hairpin: hairpinArmed.kind };
      next[hairpinArmed.mi] = { ...next[hairpinArmed.mi], notes: sNotes };
      var eNotes = [...next[selectedNote.measure].notes];
      eNotes[selectedNote.note] = { ...eNotes[selectedNote.note], hairpinEnd: true };
      next[selectedNote.measure] = { ...next[selectedNote.measure], notes: eNotes };
      return next;
    });
    setHairpinArmed(null);
  }, [selectedNote, hairpinArmed]);
  useEffect(() => {
    if (!hairpinArmed) return;
    var t = setTimeout(() => setHairpinArmed(null), 8e3);
    return () => clearTimeout(t);
  }, [hairpinArmed]);
  var [tempoSpanArmed, setTempoSpanArmed] = useState(null);
  useEffect(() => {
    if (!tempoSpanArmed || !selectedNote) return;
    if (selectedNote.measure === tempoSpanArmed.mi && selectedNote.note === tempoSpanArmed.ni) return;
    setMeasures((prev) => {
      var next = [...prev];
      var sNotes = [...next[tempoSpanArmed.mi].notes];
      sNotes[tempoSpanArmed.ni] = { ...sNotes[tempoSpanArmed.ni], tempoSpan: tempoSpanArmed.kind };
      next[tempoSpanArmed.mi] = { ...next[tempoSpanArmed.mi], notes: sNotes };
      var eNotes = [...next[selectedNote.measure].notes];
      eNotes[selectedNote.note] = { ...eNotes[selectedNote.note], tempoSpanEnd: true };
      next[selectedNote.measure] = { ...next[selectedNote.measure], notes: eNotes };
      return next;
    });
    setTempoSpanArmed(null);
  }, [selectedNote, tempoSpanArmed]);
  useEffect(() => {
    if (!tempoSpanArmed) return;
    var t = setTimeout(() => setTempoSpanArmed(null), 8e3);
    return () => clearTimeout(t);
  }, [tempoSpanArmed]);
  var [lastClickedMeasure, setLastClickedMeasure] = useState(0);
  var [selectedNotes, setSelectedNotes] = useState([]);
  var clipboardRef = useRef([]);
  var [copyMode, setCopyMode] = useState(false);
  var [pasteTarget, setPasteTarget] = useState(null);
  var [copyScope, setCopyScope] = useState("notes");
  var [selectedMeasures, setSelectedMeasures] = useState(null);
  var [measureCopyPhase, setMeasureCopyPhase] = useState("pick");
  var [tool, setTool] = useState("note");
  var [title, setTitle] = useState("Untitled Score");
  var measureWidth = BASE_MEASURE_WIDTH * (isMobile ? 0.1 : 1.5);
  var [composer, setComposer] = useState("");
  var [loaded, setLoaded] = useState(false);
  var [mobileTab, setMobileTab] = useState("note");
  var [mobileZoom, setMobileZoom] = useState(1);
  var [metronomeOn, setMetronomeOn] = useState(false);
  var metronomeOnRef = useRef(false);
  var metronomeModeRef = useRef("click");
  var metroClickSynthRef = useRef(null);
  useEffect(() => {
    metronomeOnRef.current = metronomeOn;
  }, [metronomeOn]);
  useEffect(() => {
    metronomeModeRef.current = metronomeMode;
  }, [metronomeMode]);
  useEffect(() => {
    isLoopingRef.current = isLooping;
  }, [isLooping]);
  var [metronomeBeat, setMetronomeBeat] = useState(-1);
  var [metronomeMode, setMetronomeMode] = useState("click");
  var [metronomeSound, setMetronomeSound] = useState("drum");
  var [showLibrary, setShowLibrary] = useState(false);
  var [siteDeploying, setSiteDeploying] = useState(false);
  var [lessonsPushing, setLessonsPushing] = useState(false);
  var [showProfileMenu, setShowProfileMenu] = useState(false);
  var [celebrateMsg, setCelebrateMsg] = useState(null);
  var [playerName, setPlayerName] = useState(() => {
    var found = "";
    try {
      var ls = localStorage.getItem("playerName");
      if (ls) found = ls;
    } catch (e) {
    }
    if (!found) {
      try {
        var m = document.cookie.match(/(?:^|; )rpm_playerName=([^;]*)/);
        if (m) found = decodeURIComponent(m[1]);
      } catch (e) {
      }
    }
    if (!found && typeof window !== "undefined") {
      try {
        var u = new URLSearchParams(window.location.search).get("u");
        if (u) found = u.trim();
      } catch (e) {
      }
    }
    if (found) {
      try {
        localStorage.setItem("playerName", found);
      } catch (e) {
      }
      try {
        document.cookie = "rpm_playerName=" + encodeURIComponent(found) + "; path=/; max-age=31536000; SameSite=Lax";
      } catch (e) {
      }
    }
    return found;
  });
  var savePlayerName = useCallback((name) => {
    var trimmed = (name || "").trim();
    setPlayerName(trimmed);
    try {
      if (trimmed) localStorage.setItem("playerName", trimmed);
      else localStorage.removeItem("playerName");
    } catch (e) {
    }
    try {
      if (trimmed) {
        document.cookie = "rpm_playerName=" + encodeURIComponent(trimmed) + "; path=/; max-age=31536000; SameSite=Lax";
      } else {
        document.cookie = "rpm_playerName=; path=/; max-age=0";
      }
    } catch (e) {
    }
    try {
      var u = new URL(window.location.href);
      if (trimmed) u.searchParams.set("u", trimmed);
      else u.searchParams.delete("u");
      window.history.replaceState({}, "", u.toString());
    } catch (e) {
    }
  }, []);
  var [showNamePrompt, setShowNamePrompt] = useState(false);
  var [nameInput, setNameInput] = useState("");
  var [colorInput, setColorInput] = useState("#dc2626");
  var profileColors = ["#dc2626", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6", "#f43f5e", "#6366f1"];
  var [allProfiles, setAllProfiles] = useState(() => {
    try {
      var raw = JSON.parse(localStorage.getItem("profiles") || "{}");
      var migrated = {};
      for (var [k, v] of Object.entries(raw)) {
        if (Array.isArray(v)) migrated[k] = { songs: v, color: "#3b82f6" };
        else migrated[k] = v;
      }
      return migrated;
    } catch {
      return {};
    }
  });
  var [passwordModal, setPasswordModal] = useState(null);
  var [pwInput, setPwInput] = useState("");
  var [pwConfirm, setPwConfirm] = useState("");
  var [pwHint, setPwHint] = useState("");
  var [pwError, setPwError] = useState("");
  var [pwShowHint, setPwShowHint] = useState(false);
  var hashPassword = useCallback(async (pw) => {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }, []);
  var resetPwFields = useCallback(() => {
    setPwInput("");
    setPwConfirm("");
    setPwHint("");
    setPwError("");
    setPwShowHint(false);
  }, []);
  var closePwModal = useCallback(() => {
    setPasswordModal(null);
    resetPwFields();
  }, [resetPwFields]);
  useEffect(() => {
    var sync = () => {
      var raw = localStorage.getItem("playerName") || "";
      savePlayerName(raw);
      try {
        var p = JSON.parse(localStorage.getItem("profiles") || "{}");
        var migrated = {};
        for (var [k, v] of Object.entries(p)) {
          if (Array.isArray(v)) migrated[k] = { songs: v, color: "#3b82f6" };
          else migrated[k] = v;
        }
        setAllProfiles(migrated);
      } catch {
      }
    };
    window.addEventListener("rpm-profiles-sync", sync);
    return () => window.removeEventListener("rpm-profiles-sync", sync);
  }, []);
  var mySongs = playerName && allProfiles[playerName] ? allProfiles[playerName].songs || [] : [];
  var getProfileColor = (name) => {
    var _a2;
    return ((_a2 = allProfiles[name]) == null ? void 0 : _a2.color) || "#3b82f6";
  };
  var [libraryTab, setLibraryTab] = useState("all");
  var [songSearchQuery, setSongSearchQuery] = useState("");
  var toggleMySong = useCallback((title2) => {
    if (!playerName) {
      setShowNamePrompt(true);
      return;
    }
    setAllProfiles((prev) => {
      var profile = prev[playerName] || { songs: [], color: "#3b82f6" };
      var songs = profile.songs || [];
      var next = { ...prev, [playerName]: { ...profile, songs: songs.includes(title2) ? songs.filter((t) => t !== title2) : [...songs, title2] } };
      localStorage.setItem("profiles", JSON.stringify(next));
      return next;
    });
  }, [playerName]);
  var switchProfile = useCallback((name) => {
    if (name === playerName) return;
    var target = allProfiles[name];
    if (target == null ? void 0 : target.passwordHash) {
      setPasswordModal({ type: "verify-switch", profileName: name });
      resetPwFields();
      return;
    }
    savePlayerName(name);
  }, [playerName, allProfiles, resetPwFields, savePlayerName]);
  var createProfile = useCallback(async (name, color, password, hint) => {
    var trimmed = (name || "").trim();
    if (!trimmed) return;
    if (!password || password.length < 4) return;
    if (!hint || !hint.trim()) return;
    var passwordHash = await hashPassword(password);
    setAllProfiles((prev) => {
      var existing = prev[trimmed] || { songs: [], color: color || "#3b82f6" };
      var next = { ...prev, [trimmed]: { ...existing, color: color || existing.color, passwordHash, hint: hint.trim() } };
      localStorage.setItem("profiles", JSON.stringify(next));
      return next;
    });
    savePlayerName(trimmed);
    setShowNamePrompt(false);
    setNameInput("");
    resetPwFields();
    setLibraryTab("mine");
  }, [hashPassword, resetPwFields, savePlayerName]);
  var [library, setLibrary] = useState([]);
  var displayLibrary = useMemo(() => {
    if (typeof window !== "undefined" && window.__RPM_CONDUCTOR__ === true) {
      return (library || []).filter((s) => s.conductor === true);
    }
    if (typeof window !== "undefined" && window.__RPM_DRUMS__ === true) {
      return (library || []).filter((s) => s.clef === "drum" || s.clef === "percussion");
    }
    return (library || []).filter((s) => s.conductor !== true);
  }, [library]);
  var [currentSongId, setCurrentSongId] = useState(null);
  var [saveDir, setSaveDir] = useState(null);
  var [showFolderBrowser, setShowFolderBrowser] = useState(false);
  var [browsePath, setBrowsePath] = useState(null);
  var [browseEntries, setBrowseEntries] = useState([]);
  var [browseParent, setBrowseParent] = useState(null);
  var [newFolderName, setNewFolderName] = useState("");
  var [showNewFolder, setShowNewFolder] = useState(false);
  var [showSaveAs, setShowSaveAs] = useState(false);
  var [saveConfirm, setSaveConfirm] = useState("");
  var [saveAsName, setSaveAsName] = useState("");
  var [saveAsFolder, setSaveAsFolder] = useState("");
  var [savedTitle, setSavedTitle] = useState(null);
  var pendingSaveRef = useRef(false);
  var [hoverNote, setHoverNote] = useState(null);
  var [draggingNote, setDraggingNote] = useState(null);
  var [draggingOttava, setDraggingOttava] = useState(null);
  var [draggingDynamic, setDraggingDynamic] = useState(null);
  var dynamicJustDraggedRef = useRef(false);
  var [pressedPianoKeys, setPressedPianoKeys] = useState({});
  var [pianoKeyPulse, setPianoKeyPulse] = useState({});
  var bumpPianoKeyPulse = useCallback((keys) => {
    if (!keys || !keys.length) return;
    setPianoKeyPulse((prev) => {
      var next = { ...prev };
      for (var k of keys) next[k] = (next[k] || 0) + 1;
      return next;
    });
  }, []);
  var noteColorMap = { C: "var(--c-color)", D: "var(--d-color)", E: "var(--e-color)", F: "var(--f-color)", G: "var(--g-color)", A: "var(--a-color)", B: "var(--b-color)" };
  var blackKeyGradient = {
    "C#": "linear-gradient(to right, var(--c-color), var(--d-color))",
    "D#": "linear-gradient(to right, var(--d-color), var(--e-color))",
    "F#": "linear-gradient(to right, var(--f-color), var(--g-color))",
    "G#": "linear-gradient(to right, var(--g-color), var(--a-color))",
    "A#": "linear-gradient(to right, var(--a-color), var(--b-color))"
  };
  var pianoSynthRef = useRef(null);
  var pianoLoadedRef = useRef(false);
  useEffect(() => {
    ensureTone().catch(() => {
    });
    if (pianoSynthRef.current) return;
    var cancelled = false;
    var initSampler = () => {
      if (cancelled || pianoSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(initSampler, 50);
        return;
      }
      try {
        var baseUrl = "/public/piano/";
        pianoSynthRef.current = new Tone.Sampler({
          urls: {
            A0: "A0.mp3",
            C1: "C1.mp3",
            "D#1": "Ds1.mp3",
            "F#1": "Fs1.mp3",
            A1: "A1.mp3",
            C2: "C2.mp3",
            "D#2": "Ds2.mp3",
            "F#2": "Fs2.mp3",
            A2: "A2.mp3",
            C3: "C3.mp3",
            "D#3": "Ds3.mp3",
            "F#3": "Fs3.mp3",
            A3: "A3.mp3",
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            "D#5": "Ds5.mp3",
            "F#5": "Fs5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            "D#6": "Ds6.mp3",
            "F#6": "Fs6.mp3",
            A6: "A6.mp3",
            C7: "C7.mp3",
            "D#7": "Ds7.mp3",
            "F#7": "Fs7.mp3",
            A7: "A7.mp3"
          },
          release: 1,
          baseUrl,
          onload: () => {
            pianoLoadedRef.current = true;
          }
        }).toDestination();
        pianoSynthRef.current.volume.value = -3;
      } catch (e) {
      }
    };
    var idle = typeof window !== "undefined" && window.requestIdleCallback ? window.requestIdleCallback : (cb) => setTimeout(cb, 1500);
    var idleHandle = idle(initSampler, { timeout: 2500 });
    var earlyStart = () => {
      try {
        if (typeof Tone !== "undefined" && Tone.start) Tone.start();
      } catch (e) {
      }
      initSampler();
    };
    window.addEventListener("pointerdown", earlyStart, { once: true, capture: true });
    window.addEventListener("keydown", earlyStart, { once: true, capture: true });
    return () => {
      cancelled = true;
      if (typeof window !== "undefined" && window.cancelIdleCallback && typeof idleHandle === "number") {
        try {
          window.cancelIdleCallback(idleHandle);
        } catch (e) {
        }
      }
      window.removeEventListener("pointerdown", earlyStart, { capture: true });
      window.removeEventListener("keydown", earlyStart, { capture: true });
    };
  }, []);
  var ukuleleSynthRef = useRef(null);
  var ukuleleLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    var _isFret = window.__RPM_UKULELE__ === true || window.__RPM_GUITAR__ === true || window.__RPM_BASS_GUITAR__ === true || window.__RPM_VIOLIN__ === true || window.__RPM_CELLO__ === true || window.__RPM_MANDOLIN__ === true || window.__RPM_BANJO__ === true || window.__RPM_VIOLA__ === true;
    if (!_isFret) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || ukuleleSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        ukuleleSynthRef.current = new Tone.Sampler({
          urls: PLUCKED_STRING_SAMPLES,
          release: 1,
          baseUrl: PLUCKED_STRING_SAMPLES_BASE_URL,
          onload: () => {
            ukuleleLoadedRef.current = true;
          }
        }).toDestination();
        ukuleleSynthRef.current.volume.value = -6;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var trumpetSynthRef = useRef(null);
  var trumpetLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_TRUMPET__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || trumpetSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        trumpetSynthRef.current = new Tone.Sampler({
          urls: TRUMPET_SAMPLES,
          release: 0.25,
          baseUrl: TRUMPET_SAMPLES_BASE_URL,
          onload: () => {
            trumpetLoadedRef.current = true;
          }
        }).toDestination();
        trumpetSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var euphoniumSynthRef = useRef(null);
  var euphoniumLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_EUPHONIUM__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || euphoniumSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        euphoniumSynthRef.current = new Tone.Sampler({
          urls: EUPHONIUM_SAMPLES,
          release: 0.25,
          baseUrl: EUPHONIUM_SAMPLES_BASE_URL,
          onload: () => {
            euphoniumLoadedRef.current = true;
          }
        }).toDestination();
        euphoniumSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var drumPlayersRef = useRef(null);
  var drumLoadedRef = useRef(false);
  var hiHatOpenRef = useRef(true);
  var [hiHatOpen, setHiHatOpen] = useState(true);
  var [flashHotspot, setFlashHotspot] = useState(null);
  var flashDrumByLabelRef = useRef(null);
  var armedDrumPieceRef = useRef(null);
  var [armedDrumLabel, setArmedDrumLabel] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_DRUMS__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || drumPlayersRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Players) {
        setTimeout(init, 50);
        return;
      }
      try {
        var players = new Tone.Players({
          kick: "/public/drums/kick-01.wav",
          snare: "/public/drums/snare-porkpie.wav",
          "hihat-closed": "/public/drums/hihat-closed.wav",
          "hihat-open": "/public/drums/hihat-open.wav",
          "hihat-pedal": "/public/drums/hihat-pedal.wav",
          crash: "/public/drums/crash-01.wav",
          crash2: "/public/drums/crash-02.wav",
          ride: "/public/drums/ride-01.wav",
          splash: "/public/drums/splash-01.wav",
          "tom-high": "/public/drums/tom-high.wav",
          "tom-himid": "/public/drums/tom-himid.wav",
          "tom-lowmid": "/public/drums/tom-lowmid.wav",
          "tom-low": "/public/drums/tom-low.wav",
          "tom-floor-high": "/public/drums/tom-floor-high.wav",
          "tom-floor-low": "/public/drums/tom-floor-low.wav",
          "ride-bell": "/public/drums/ride-bell.wav",
          cowbell: "/public/drums/cowbell.wav",
          tambourine: "/public/drums/tambourine.wav"
        }, () => {
          drumLoadedRef.current = true;
        }).toDestination();
        players.volume.value = -3;
        drumPlayersRef.current = players;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var tubaSynthRef = useRef(null);
  var tubaLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_TUBA__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || tubaSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        tubaSynthRef.current = new Tone.Sampler({
          urls: TUBA_SAMPLES,
          release: 0.25,
          baseUrl: TUBA_SAMPLES_BASE_URL,
          onload: () => {
            tubaLoadedRef.current = true;
          }
        }).toDestination();
        tubaSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var violinSynthRef = useRef(null);
  var violinLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_VIOLIN__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || violinSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        violinSynthRef.current = new Tone.Sampler({
          urls: VIOLIN_SAMPLES,
          release: 1,
          baseUrl: VIOLIN_SAMPLES_BASE_URL,
          onload: () => {
            violinLoadedRef.current = true;
          }
        }).toDestination();
        violinSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var celloSynthRef = useRef(null);
  var celloLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_CELLO__ !== true && window.__RPM_CONTRABASS__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || celloSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        celloSynthRef.current = new Tone.Sampler({
          urls: CELLO_SAMPLES,
          release: 1,
          baseUrl: CELLO_SAMPLES_BASE_URL,
          onload: () => {
            celloLoadedRef.current = true;
          }
        }).toDestination();
        celloSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var violaSynthRef = useRef(null);
  var violaLoadedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || window.__RPM_VIOLA__ !== true) return;
    var cancelled = false;
    var init = () => {
      if (cancelled || violaSynthRef.current) return;
      if (typeof Tone === "undefined" || !Tone.Sampler) {
        setTimeout(init, 50);
        return;
      }
      try {
        violaSynthRef.current = new Tone.Sampler({
          urls: VIOLA_SAMPLES,
          release: 1,
          baseUrl: VIOLA_SAMPLES_BASE_URL,
          onload: () => {
            violaLoadedRef.current = true;
          }
        }).toDestination();
        violaSynthRef.current.volume.value = -4;
      } catch (e) {
      }
    };
    init();
    return () => {
      cancelled = true;
    };
  }, []);
  var playPianoNote = useCallback((noteName) => {
    var _a2, _b2, _c, _d, _e2, _f, _g;
    try {
      Tone.start();
      if (!pianoSynthRef.current || pianoSynthRef.current.disposed) {
        var baseUrl = "/public/piano/";
        pianoSynthRef.current = new Tone.Sampler({
          urls: {
            A0: "A0.mp3",
            C1: "C1.mp3",
            "D#1": "Ds1.mp3",
            "F#1": "Fs1.mp3",
            A1: "A1.mp3",
            C2: "C2.mp3",
            "D#2": "Ds2.mp3",
            "F#2": "Fs2.mp3",
            A2: "A2.mp3",
            C3: "C3.mp3",
            "D#3": "Ds3.mp3",
            "F#3": "Fs3.mp3",
            A3: "A3.mp3",
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            "D#5": "Ds5.mp3",
            "F#5": "Fs5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            "D#6": "Ds6.mp3",
            "F#6": "Fs6.mp3",
            A6: "A6.mp3",
            C7: "C7.mp3",
            "D#7": "Ds7.mp3",
            "F#7": "Fs7.mp3",
            A7: "A7.mp3"
          },
          release: 1,
          baseUrl,
          onload: () => {
            pianoLoadedRef.current = true;
          }
        }).toDestination();
        pianoSynthRef.current.volume.value = -3;
      }
      var baseNote = noteName.replace(/[#b]?\d+$/, "").replace("#", "").replace("b", "");
      if (playModeRef.current === "practice") {
        if (celebratingRef.current) return;
        var _here = practiceSequence[practiceIdx];
        if (!_here) return;
        var _refX = (_c = (_b2 = (_a2 = measures[_here.measure]) == null ? void 0 : _a2.notes[_here.note]) == null ? void 0 : _b2.x) != null ? _c : 0;
        var _groupIndices = [];
        var _groupStart = (() => {
          var _a3, _b3, _c2;
          var i2 = practiceIdx;
          while (i2 - 1 >= 0) {
            var p2 = practiceSequence[i2 - 1];
            if (p2.measure !== _here.measure) break;
            if (((_c2 = (_b3 = (_a3 = measures[p2.measure]) == null ? void 0 : _a3.notes[p2.note]) == null ? void 0 : _b3.x) != null ? _c2 : -1) !== _refX) break;
            i2--;
          }
          return i2;
        })();
        for (var i = _groupStart; i < practiceSequence.length; i++) {
          var p = practiceSequence[i];
          if (p.measure !== _here.measure) break;
          if (((_f = (_e2 = (_d = measures[p.measure]) == null ? void 0 : _d.notes[p.note]) == null ? void 0 : _e2.x) != null ? _f : -1) !== _refX) break;
          _groupIndices.push(i);
        }
        var _expectations = [];
        for (var _gi of _groupIndices) {
          var _p = practiceSequence[_gi];
          var _exp = (_g = measures[_p.measure]) == null ? void 0 : _g.notes[_p.note];
          if (!_exp || _exp.isRest) continue;
          var _eff = effectiveKeySig(measures, _p.measure, keySig);
          var _primAcc = _exp.accidental && _exp.accidental !== "none" ? _exp.accidental : effectiveAccidentalInMeasure(measures, _p.measure, _p.note, void 0, _exp.name, _exp.octave);
          _expectations.push({
            seqIdx: _gi,
            chordIdx: -1,
            key: pitchToPianoKey(_exp.name, _exp.octave, _primAcc, _eff),
            tieKey: `${_p.measure}-${_p.note}`
          });
          if (Array.isArray(_exp.chord)) {
            for (var _ci = 0; _ci < _exp.chord.length; _ci++) {
              var _cm = _exp.chord[_ci];
              if (!_cm) continue;
              var _cmAcc = _cm.accidental && _cm.accidental !== "none" ? _cm.accidental : effectiveAccidentalInMeasure(measures, _p.measure, _p.note, _ci, _cm.name, _cm.octave);
              _expectations.push({
                seqIdx: _gi,
                chordIdx: _ci,
                key: pitchToPianoKey(_cm.name, _cm.octave, _cmAcc, _eff),
                tieKey: `${_p.measure}-${_p.note}-c${_ci}`
              });
            }
          }
        }
        var _satisfied = practiceSatisfiedRef.current;
        var _expKeyOf = (_e3) => `${_e3.seqIdx}:${_e3.chordIdx}`;
        var _matchedExp = null;
        for (var _e of _expectations) {
          if (_e.key === noteName) {
            _matchedExp = _e;
            if (!_satisfied.has(_expKeyOf(_e))) break;
          }
        }
        var _matchedSeqIdx = _matchedExp ? _matchedExp.seqIdx : -1;
        if (_matchedExp) {
          var _matchedPos = practiceSequence[_matchedSeqIdx];
          var isTieDest = tieSkipAttackMap.get(_matchedExp.tieKey);
          if (!isTieDest && (pianoLoadedRef.current || (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current || window.__RPM_VIOLA__ && violaLoadedRef.current || window.__RPM_VIOLIN__ && violinLoadedRef.current || (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current || window.__RPM_TRUMPET__ && trumpetLoadedRef.current || window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current || window.__RPM_TUBA__ && tubaLoadedRef.current)) {
            var _synth = window.__RPM_TRUMPET__ && trumpetLoadedRef.current ? trumpetSynthRef.current : window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current ? euphoniumSynthRef.current : window.__RPM_TUBA__ && tubaLoadedRef.current ? tubaSynthRef.current : window.__RPM_VIOLA__ && violaLoadedRef.current ? violaSynthRef.current : window.__RPM_VIOLIN__ && violinLoadedRef.current ? violinSynthRef.current : (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current ? celloSynthRef.current : (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current ? ukuleleSynthRef.current : pianoSynthRef.current;
            _synth.triggerAttackRelease(
              window.__RPM_GUITAR__ ? shiftPianoKeyName(noteName, -12) : window.__RPM_TRUMPET__ || window.__RPM_EUPHONIUM__ || window.__RPM_TUBA__ ? shiftPianoKeyName(noteName, -2) : noteName,
              "2n"
            );
          }
          setPressedPianoKeys((prev) => ({ ...prev, [noteName]: noteColorMap[baseNote] || "#fff" }));
          bumpPianoKeyPulse([noteName]);
          setTimeout(() => {
            setPressedPianoKeys((prev) => {
              var next2 = { ...prev };
              delete next2[noteName];
              return next2;
            });
          }, 300);
          _satisfied.add(_expKeyOf(_matchedExp));
          var _allSatisfied = _expectations.every((e) => _satisfied.has(_expKeyOf(e)));
          if (_allSatisfied) {
            practiceSatisfiedRef.current = /* @__PURE__ */ new Set();
            var nextIdx = _groupIndices[_groupIndices.length - 1] + 1;
            if (nextIdx < practiceSequence.length) {
              setPracticeIdx(nextIdx);
              var next = practiceSequence[nextIdx];
              setPlayingIdx({ measure: next.measure, note: next.note });
              repeatCountRef.current = next.repeat || 0;
            } else {
              celebratingRef.current = true;
              setPressedPianoKeys({});
              (() => {
                var DURATION = 900;
                var startTime = performance.now();
                var startTabletViewX = null;
                var startScrollLeft = null;
                var easeInOut = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
                var cssPerSvg = isMobile ? mobileScale * (mobileZoom || 1) * staffScale : 1;
                var step = () => {
                  var elapsed = performance.now() - startTime;
                  var p2 = Math.min(1, elapsed / DURATION);
                  var eased = easeInOut(p2);
                  if (isWidescreen) {
                    setTabletViewX((prev) => {
                      if (startTabletViewX === null) startTabletViewX = prev;
                      var target2 = Math.max(startTabletViewX, maxViewX);
                      return startTabletViewX + (target2 - startTabletViewX) * eased;
                    });
                  }
                  if (scoreAreaRef.current) {
                    if (startScrollLeft === null) startScrollLeft = scoreAreaRef.current.scrollLeft;
                    var clientW = scoreAreaRef.current.clientWidth;
                    var vbOffset = isMobile ? mobileViewBoxX : 0;
                    var rightPadEnd = isMobile ? MOBILE_RIGHT_PAD_SVG : STAFF_LEFT;
                    var endScroll = Math.max(0, (endBarX + rightPadEnd - vbOffset) * cssPerSvg - clientW);
                    var target = Math.max(startScrollLeft, endScroll);
                    scoreAreaRef.current.scrollLeft = startScrollLeft + (target - startScrollLeft) * eased;
                  }
                  if (p2 < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
              })();
              setTimeout(() => {
                var PHRASES_BY_LANG = {
                  en: ["Amazing playing!", "Awesome work!", "Job well done!", "You nailed it!", "Bravo!", "Fantastic!", "Magnificent!", "Woo hoo!", "Nice one!", "Rock star!", "Beautiful music!"],
                  zh: ["\u6F14\u594F\u5F97\u592A\u68D2\u4E86\uFF01", "\u505A\u5F97\u597D\uFF01", "\u5E72\u5F97\u6F02\u4EAE\uFF01", "\u4F60\u505A\u5230\u4E86\uFF01", "\u592A\u5389\u5BB3\u4E86\uFF01", "\u592A\u68D2\u4E86\uFF01", "\u58EE\u89C2\uFF01", "\u54C7\u54E6\uFF01", "\u771F\u4E0D\u9519\uFF01", "\u6447\u6EDA\u660E\u661F\uFF01", "\u7F8E\u5999\u7684\u97F3\u4E50\uFF01"],
                  hi: ["\u092C\u0939\u0941\u0924 \u092C\u0922\u093C\u093F\u092F\u093E \u092C\u091C\u093E\u092F\u093E!", "\u0936\u093E\u0928\u0926\u093E\u0930 \u0915\u093E\u092E!", "\u092C\u0939\u0941\u0924 \u0916\u0942\u092C!", "\u0924\u0941\u092E\u0928\u0947 \u0915\u0930 \u0926\u093F\u0916\u093E\u092F\u093E!", "\u0935\u093E\u0939!", "\u091C\u093C\u092C\u0930\u0926\u0938\u094D\u0924!", "\u0905\u0926\u094D\u092D\u0941\u0924!", "\u0939\u0941\u0930\u094D\u0930\u0947!", "\u092C\u0939\u0941\u0924 \u0905\u091A\u094D\u091B\u093E!", "\u0930\u0949\u0915 \u0938\u094D\u091F\u093E\u0930!", "\u0938\u0941\u0902\u0926\u0930 \u0938\u0902\u0917\u0940\u0924!"],
                  es: ["\xA1Una actuaci\xF3n incre\xEDble!", "\xA1Buen trabajo!", "\xA1Trabajo bien hecho!", "\xA1Lo lograste!", "\xA1Bravo!", "\xA1Fant\xE1stico!", "\xA1Magn\xEDfico!", "\xA1Yupi!", "\xA1Muy bien!", "\xA1Eres una estrella!", "\xA1M\xFAsica hermosa!"],
                  fr: ["Interpr\xE9tation incroyable !", "Excellent travail !", "Bien jou\xE9 !", "Tu as r\xE9ussi !", "Bravo !", "Fantastique !", "Magnifique !", "Youpi !", "Super !", "Une vraie star !", "Belle musique !"],
                  ar: ["\u0639\u0632\u0641 \u0631\u0627\u0626\u0639!", "\u0639\u0645\u0644 \u0645\u0645\u062A\u0627\u0632!", "\u0623\u062D\u0633\u0646\u062A \u0635\u0646\u0639\u0627\u064B!", "\u0644\u0642\u062F \u0641\u0639\u0644\u062A\u0647\u0627!", "\u0628\u0631\u0627\u0641\u0648!", "\u0631\u0627\u0626\u0639!", "\u0631\u0627\u0626\u0639 \u062C\u062F\u0627\u064B!", "\u064A\u0648\u0647\u0648!", "\u0623\u062D\u0633\u0646\u062A!", "\u0646\u062C\u0645 \u0627\u0644\u0631\u0648\u0643!", "\u0645\u0648\u0633\u064A\u0642\u0649 \u062C\u0645\u064A\u0644\u0629!"],
                  pt: ["Tocada incr\xEDvel!", "\xD3timo trabalho!", "Muito bem feito!", "Voc\xEA conseguiu!", "Bravo!", "Fant\xE1stico!", "Magn\xEDfico!", "Uhu!", "Boa!", "Estrela do rock!", "M\xFAsica linda!"],
                  ru: ["\u041F\u043E\u0442\u0440\u044F\u0441\u0430\u044E\u0449\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435!", "\u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430!", "\u041F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0441\u044F!", "\u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C!", "\u0411\u0440\u0430\u0432\u043E!", "\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430!", "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u043E!", "\u0423\u0440\u0430!", "\u041C\u043E\u043B\u043E\u0434\u0435\u0446!", "\u0420\u043E\u043A-\u0437\u0432\u0435\u0437\u0434\u0430!", "\u041F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430\u044F \u043C\u0443\u0437\u044B\u043A\u0430!"],
                  ja: ["\u7D20\u6674\u3089\u3057\u3044\u6F14\u594F\uFF01", "\u3088\u304F\u3067\u304D\u307E\u3057\u305F\uFF01", "\u304A\u898B\u4E8B\uFF01", "\u3084\u3063\u305F\u306D\uFF01", "\u30D6\u30E9\u30DC\u30FC\uFF01", "\u7D20\u6575\uFF01", "\u898B\u4E8B\uFF01", "\u3084\u3063\u305F\u30FC\uFF01", "\u30CA\u30A4\u30B9\uFF01", "\u30ED\u30C3\u30AF\u30B9\u30BF\u30FC\uFF01", "\u7F8E\u3057\u3044\u97F3\u697D\uFF01"],
                  bn: ["\u099A\u09AE\u09CE\u0995\u09BE\u09B0 \u09AC\u09BE\u099C\u09BF\u09AF\u09BC\u09C7\u099B!", "\u09A6\u09BE\u09B0\u09C1\u09A3 \u0995\u09BE\u099C!", "\u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u0995\u09B0\u09C7\u099B!", "\u09A4\u09C1\u09AE\u09BF \u09AA\u09C7\u09B0\u09C7\u099B!", "\u09AC\u09CD\u09B0\u09BE\u09AD\u09CB!", "\u0985\u09B8\u09BE\u09A7\u09BE\u09B0\u09A3!", "\u09A6\u09C1\u09B0\u09CD\u09A6\u09BE\u09A8\u09CD\u09A4!", "\u09B9\u09C1\u09B0\u09B0\u09C7!", "\u09B8\u09BE\u09AC\u09BE\u09B6!", "\u09B0\u0995 \u09B8\u09CD\u099F\u09BE\u09B0!", "\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0 \u09B8\u0999\u09CD\u0997\u09C0\u09A4!"],
                  ur: ["\u0632\u0628\u0631\u062F\u0633\u062A \u067E\u0631\u0641\u0627\u0631\u0645\u0646\u0633!", "\u0628\u06C1\u062A\u0631\u06CC\u0646 \u06A9\u0627\u0645!", "\u0628\u06C1\u062A \u062E\u0648\u0628!", "\u062A\u0645 \u0646\u06D2 \u06A9\u0631 \u062F\u06A9\u06BE\u0627\u06CC\u0627!", "\u0648\u0627\u06C1!", "\u0634\u0627\u0646\u062F\u0627\u0631!", "\u0634\u0627\u0646\u062F\u0627\u0631!", "\u06C1\u0648\u0631\u06D2!", "\u0628\u06C1\u062A \u0627\u0686\u06BE\u0627!", "\u0631\u0627\u06A9 \u0627\u0633\u0679\u0627\u0631!", "\u062E\u0648\u0628\u0635\u0648\u0631\u062A \u0645\u0648\u0633\u06CC\u0642\u06CC!"],
                  tl: ["Galing mong tumugtog!", "Magaling!", "Mahusay ang ginawa mo!", "Yakang-yaka!", "Bravo!", "Ang husay!", "Kahanga-hanga!", "Woo hoo!", "Ang galing!", "Rock star!", "Magandang musika!"],
                  ko: ["\uC798 \uC5F0\uC8FC\uD588\uC5B4\uC694!", "\uD6CC\uB96D\uD574\uC694!", "\uC798\uD588\uC5B4\uC694!", "\uD574\uB0C8\uC5B4\uC694!", "\uBE0C\uB77C\uBCF4!", "\uD658\uC0C1\uC801\uC774\uC5D0\uC694!", "\uAD49\uC7A5\uD574\uC694!", "\uC57C\uD638!", "\uBA4B\uC838\uC694!", "\uB85D\uC2A4\uD0C0!", "\uC544\uB984\uB2E4\uC6B4 \uC74C\uC545!"]
                };
                var lang = "en";
                try {
                  var saved = localStorage.getItem("rap-lang");
                  if (saved && PHRASES_BY_LANG[saved]) lang = saved;
                  else {
                    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
                    if (PHRASES_BY_LANG[nav]) lang = nav;
                  }
                } catch (e) {
                }
                var phrases = PHRASES_BY_LANG[lang];
                var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];
                ensureConfetti().then(() => {
                  if (typeof window === "undefined" || !window.confetti) return;
                  var colors = ["#dc2626", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];
                  window.confetti({ particleCount: 180, spread: 100, origin: { y: 0.65 }, colors });
                  setTimeout(() => window.confetti({ particleCount: 120, spread: 70, origin: { x: 0.15, y: 0.7 }, colors }), 250);
                  setTimeout(() => window.confetti({ particleCount: 120, spread: 70, origin: { x: 0.85, y: 0.7 }, colors }), 450);
                }).catch(() => {
                });
                try {
                  var buf = celebrationBufferRef.current;
                  var ctx = typeof Tone !== "undefined" && Tone.context ? Tone.context.rawContext || Tone.context : null;
                  if (buf && ctx) {
                    var src = ctx.createBufferSource();
                    src.buffer = buf;
                    var gain = ctx.createGain();
                    gain.gain.value = 2.5;
                    src.connect(gain).connect(ctx.destination);
                    src.start(0);
                  } else {
                    var audio = celebrationAudioRef.current;
                    if (!audio) {
                      audio = new Audio("/public/celebration.mp3");
                      audio.volume = 1;
                      celebrationAudioRef.current = audio;
                    }
                    audio.currentTime = 0;
                    audio.volume = 0.9;
                    audio.play().catch(() => {
                    });
                  }
                } catch (e) {
                }
                setTimeout(() => setCelebrateMsg(chosenPhrase), 1e3);
                setTimeout(() => {
                  setCelebrateMsg(null);
                  practiceJustFinishedRef.current = true;
                  setPlayMode(null);
                  celebratingRef.current = false;
                }, 4700);
              }, 1e3);
            }
          }
        }
        return;
      }
      if (pianoLoadedRef.current || (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current || window.__RPM_VIOLA__ && violaLoadedRef.current || window.__RPM_VIOLIN__ && violinLoadedRef.current || (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current || window.__RPM_TRUMPET__ && trumpetLoadedRef.current || window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current || window.__RPM_TUBA__ && tubaLoadedRef.current) {
        var _synth = window.__RPM_TRUMPET__ && trumpetLoadedRef.current ? trumpetSynthRef.current : window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current ? euphoniumSynthRef.current : window.__RPM_TUBA__ && tubaLoadedRef.current ? tubaSynthRef.current : window.__RPM_VIOLA__ && violaLoadedRef.current ? violaSynthRef.current : window.__RPM_VIOLIN__ && violinLoadedRef.current ? violinSynthRef.current : (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current ? celloSynthRef.current : (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current ? ukuleleSynthRef.current : pianoSynthRef.current;
        _synth.triggerAttackRelease(
          window.__RPM_GUITAR__ ? shiftPianoKeyName(noteName, -12) : window.__RPM_TRUMPET__ || window.__RPM_EUPHONIUM__ || window.__RPM_TUBA__ ? shiftPianoKeyName(noteName, -2) : noteName,
          "2n"
        );
      }
      setPressedPianoKeys((prev) => ({ ...prev, [noteName]: noteColorMap[baseNote] || "#fff" }));
      bumpPianoKeyPulse([noteName]);
      setTimeout(() => {
        setPressedPianoKeys((prev) => {
          var next2 = { ...prev };
          delete next2[noteName];
          return next2;
        });
      }, 200);
    } catch (e) {
    }
  }, [practicePos, practiceIdx, practiceSequence, measures]);
  var playPianoNoteRef = useRef(playPianoNote);
  useEffect(() => {
    playPianoNoteRef.current = playPianoNote;
  }, [playPianoNote]);
  var handlePianoKeyClick = useCallback((note) => {
    playPianoNoteRef.current(note);
  }, []);
  var midiDebounceRef = useRef({});
  var writeMidiNote = useCallback((name, octave, accidental) => {
    var _a2;
    if (isPlayingRef.current) return;
    {
      var _SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
      var _pc = (_SEMI[name] + (accidental === "sharp" ? 1 : accidental === "flat" ? -1 : 0) + 12) % 12;
      var _useFlat = !!_KS_FLATS[keySig];
      name = (_useFlat ? _MIDI_LETTERS_FLAT : _MIDI_LETTERS_SHARP)[_pc];
      accidental = (_useFlat ? _MIDI_ACC_FLAT : _MIDI_ACC_SHARP)[_pc];
      var _ksDir = _KS_SHARPS[keySig] ? "sharp" : _KS_FLATS[keySig] ? "flat" : null;
      var _ksLetters = new Set(_KS_SHARPS[keySig] || _KS_FLATS[keySig] || []);
      if (accidental !== "none" && _ksDir === accidental && _ksLetters.has(name)) accidental = "none";
    }
    var _pitchKey = (accidental === "sharp" ? name + "#" : accidental === "flat" ? name + "b" : name) + octave;
    var _now = Date.now();
    if (_now - (midiDebounceRef.current[_pitchKey] || 0) < 80) return;
    midiDebounceRef.current[_pitchKey] = _now;
    var _writtenSig = "";
    var _staff = "treble";
    if (clef === "bass") _staff = "bass";
    else if (clef === "grand" || clef === "grandBass") {
      var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
      var midi = octave * 7 + ((_a2 = LETTER_ORD[name]) != null ? _a2 : 0);
      _staff = midi >= 28 ? "treble" : "bass";
    }
    setMeasures((prev) => {
      var _a3;
      if (!prev || prev.length === 0) return prev;
      var next = [...prev];
      var mbq = measureBeatsInQuarters(timeSig);
      var baseDur = ((_a3 = NOTE_DURATIONS.find((d) => d.id === selectedDuration)) == null ? void 0 : _a3.beats) || 1;
      var noteBeats = isDotted ? baseDur * 1.5 : isTriplet ? baseDur * 2 / 3 : baseDur;
      var targetMi = -1;
      for (var i = 0; i < next.length; i++) {
        var used = (next[i].notes || []).reduce((s, n) => {
          var _a4;
          if (n.grace) return s;
          var st = n.staff === "bass" ? "bass" : "treble";
          if (st !== _staff) return s;
          var b = ((_a4 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _a4.beats) || 1;
          return s + (n.doubleDotted ? b * 1.75 : n.dotted ? b * 1.5 : n.triplet ? b * 2 / 3 : b);
        }, 0);
        if (used + noteBeats <= mbq + 1e-6) {
          targetMi = i;
          break;
        }
      }
      if (targetMi === -1) {
        next.push({ notes: [] });
        targetMi = next.length - 1;
      }
      var m = next[targetMi];
      var newNote = {
        id: Date.now() + Math.random(),
        x: 0,
        name,
        octave,
        duration: selectedDuration,
        dotted: isDotted,
        triplet: isTriplet,
        accidental: accidental || "none",
        isRest: false,
        staff: _staff
      };
      var _newNi = m.notes.length;
      next[targetMi] = { ...m, notes: [...m.notes, newNote] };
      var recalced = recalcMeasures(next, timeSig);
      _writtenSig = "m" + (targetMi + 1) + " (clef=" + clef + ", staff=" + _staff + ", dur=" + selectedDuration + ")";
      pendingScrollMeasureRef.current = { measure: targetMi, note: _newNi };
      return recalced;
    });
    setTimeout(() => {
      try {
        showEditHint("\u270F\uFE0F wrote " + name + (accidental === "sharp" ? "\u266F" : accidental === "flat" ? "\u266D" : "") + octave + " \u2192 " + _writtenSig);
      } catch (e) {
      }
    }, 0);
  }, [clef, selectedDuration, isDotted, isTriplet, timeSig, keySig]);
  var writeMidiNoteRef = useRef(writeMidiNote);
  useEffect(() => {
    writeMidiNoteRef.current = writeMidiNote;
  }, [writeMidiNote]);
  var _KIT_LABEL_TO_GM = {
    "Crash 1": "Crash Cymbal 1",
    "Crash 2": "Crash Cymbal 2",
    "Splash": "Splash Cymbal",
    "Ride": "Ride Cymbal 1",
    "Snare": "Acoustic Snare",
    "Bass": "Bass Drum 1",
    "Tom 1": "High Tom",
    "Tom 2": "Hi-Mid Tom",
    "Floor Tom 1": "High Floor Tom",
    "Floor Tom 2": "Low Floor Tom",
    "Hi-Hat": "Closed Hi-Hat",
    "Hi-Hat Pedal": "Pedal Hi-Hat"
  };
  var writeDrumNote = useCallback((label) => {
    if (isPlayingRef.current) return;
    if (isPublishedRef.current) {
      try {
        showEditHint("Song is published \u2014 unpublish to edit");
      } catch (e) {
      }
      return;
    }
    var gm = _KIT_LABEL_TO_GM[label] || label;
    var pos = drumStaffPos(gm) || { name: "C", octave: 5 };
    setMeasures((prev) => {
      var _a2;
      if (!prev || prev.length === 0) return prev;
      var next = [...prev];
      var mbq = measureBeatsInQuarters(timeSig);
      var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === selectedDuration)) == null ? void 0 : _a2.beats) || 1;
      var noteBeats = isDotted ? baseDur * 1.5 : isTriplet ? baseDur * 2 / 3 : baseDur;
      var targetMi = -1;
      for (var i = 0; i < next.length; i++) {
        var used = (next[i].notes || []).reduce((s, n) => {
          var _a3;
          if (n.grace || (n.staff === "bass" ? "bass" : "treble") !== "treble") return s;
          var b = ((_a3 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _a3.beats) || 1;
          return s + (n.doubleDotted ? b * 1.75 : n.dotted ? b * 1.5 : n.triplet ? b * 2 / 3 : b);
        }, 0);
        if (used + noteBeats <= mbq + 1e-6) {
          targetMi = i;
          break;
        }
      }
      if (targetMi === -1) {
        next.push({ notes: [] });
        targetMi = next.length - 1;
      }
      var m = next[targetMi];
      var newNote = {
        id: Date.now() + Math.random(),
        x: 0,
        name: pos.name,
        octave: pos.octave,
        duration: selectedDuration,
        dotted: isDotted,
        triplet: isTriplet,
        accidental: "none",
        isRest: false,
        staff: "treble",
        drumPiece: gm,
        // Foot pieces (bass drum, hi-hat pedal) are played with the foot, not
        // a hand — they get a committed stem DOWN immediately, no g/h prompt.
        // Hand pieces start stemless ('none') until the owner picks g/h.
        stem: /bass drum|kick|pedal hi-hat/.test(gm.toLowerCase()) ? "down" : "none"
      };
      var newNi = m.notes.length;
      next[targetMi] = { ...m, notes: [...m.notes, newNote] };
      setTimeout(() => setSelectedNote({ measure: targetMi, note: newNi }), 0);
      return recalcMeasures(next, timeSig);
    });
    try {
      showEditHint("\u{1F941} " + label + " \u2192 staff (press g/h for stem)");
    } catch (e) {
    }
  }, [selectedDuration, isDotted, isTriplet, timeSig]);
  var currentDrumMeasureRef = useRef(0);
  var placeDrumOnBeat = useCallback((beatIdx) => {
    if (isPlayingRef.current) return;
    if (isPublishedRef.current) {
      try {
        showEditHint("Song is published \u2014 unpublish to edit");
      } catch (e) {
      }
      return;
    }
    var label = armedDrumPieceRef.current;
    if (!label) {
      try {
        showEditHint("\u{1F941} Click a drum piece first, then press q/w/e/r\u2026 for the beat");
      } catch (e) {
      }
      return;
    }
    var gm = _KIT_LABEL_TO_GM[label] || label;
    var pos = drumStaffPos(gm) || { name: "C", octave: 5 };
    var isFoot = /bass drum|kick|pedal hi-hat/.test(gm.toLowerCase());
    var bottom = timeSig && timeSig.bottom || 4;
    var top = timeSig && timeSig.top || 4;
    if (beatIdx < 0 || beatIdx >= top) {
      try {
        showEditHint("\u{1F941} Beat " + (beatIdx + 1) + " is past the end of a " + top + "/" + bottom + " bar");
      } catch (e) {
      }
      return;
    }
    setMeasures((prev) => {
      var _a2;
      if (!prev || prev.length === 0) return prev;
      var next = [...prev];
      var beatUnitQ = 4 / bottom;
      var targetOnset = beatIdx * beatUnitQ;
      var mbq = measureBeatsInQuarters(timeSig);
      var targetMi = selectedNote && next[selectedNote.measure] ? selectedNote.measure : currentDrumMeasureRef.current;
      if (targetMi == null || !next[targetMi]) targetMi = 0;
      currentDrumMeasureRef.current = targetMi;
      var durQ = (n2) => {
        var _a3;
        var b = ((_a3 = NOTE_DURATIONS.find((d) => d.id === n2.duration)) == null ? void 0 : _a3.beats) || 1;
        return n2.doubleDotted ? b * 1.75 : n2.dotted ? b * 1.5 : n2.triplet ? b * 2 / 3 : b;
      };
      var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === selectedDuration)) == null ? void 0 : _a2.beats) || 1;
      var newDurQ = isDotted ? baseDur * 1.5 : isTriplet ? baseDur * 2 / 3 : baseDur;
      var newNote = {
        id: Date.now() + Math.random(),
        x: 0,
        name: pos.name,
        octave: pos.octave,
        duration: selectedDuration,
        dotted: isDotted,
        triplet: isTriplet,
        accidental: "none",
        isRest: false,
        staff: "treble",
        drumPiece: gm,
        stem: isFoot ? "down" : "none"
      };
      var m = next[targetMi];
      var placed = [];
      var acc = 0;
      for (var n of m.notes || []) {
        var dq = durQ(n);
        if (!n.isRest) placed.push({ onset: acc, note: n, dq });
        acc += dq;
      }
      var selNote = newNote, selChordIdx = void 0;
      var exIdx = placed.findIndex((p2) => Math.abs(p2.onset - targetOnset) <= 1e-6);
      if (exIdx >= 0) {
        var ex = placed[exIdx].note;
        var already = ex.drumPiece === gm || Array.isArray(ex.chord) && ex.chord.some((c) => c.drumPiece === gm);
        if (already) {
          selNote = ex;
        } else {
          var member = { name: pos.name, octave: pos.octave, accidental: "none", drumPiece: gm };
          var newChord = Array.isArray(ex.chord) ? [...ex.chord, member] : [member];
          var merged = { ...ex, chord: newChord };
          placed[exIdx] = { ...placed[exIdx], note: merged };
          selNote = merged;
          selChordIdx = newChord.length - 1;
        }
      } else {
        placed.push({ onset: targetOnset, note: newNote, dq: newDurQ });
      }
      placed.sort((a, b) => a.onset - b.onset);
      var makeRests = (q) => {
        var out = [];
        var rem = q;
        var units = [["whole", 4], ["half", 2], ["quarter", 1], ["eighth", 0.5], ["sixteenth", 0.25], ["thirty-second", 0.125]];
        var guard = 0;
        while (rem > 1e-6 && guard++ < 64) {
          var u = units.find(([, b]) => b <= rem + 1e-6);
          if (!u) break;
          out.push({ id: Date.now() + Math.random(), x: 0, name: "B", octave: 4, duration: u[0], dotted: false, triplet: false, accidental: "none", isRest: true, staff: "treble", lyric: "" });
          rem -= u[1];
        }
        return out;
      };
      var outNotes = [];
      var cursor = 0;
      var newNi = -1;
      for (var p of placed) {
        if (p.onset - cursor > 1e-6) outNotes.push(...makeRests(p.onset - cursor));
        if (p.note === selNote) newNi = outNotes.length;
        outNotes.push(p.note);
        cursor = Math.max(cursor, p.onset + p.dq);
      }
      if (mbq - cursor > 1e-6) outNotes.push(...makeRests(mbq - cursor));
      next[targetMi] = { ...m, notes: outNotes };
      if (newNi >= 0) setTimeout(() => setSelectedNote(selChordIdx === void 0 ? { measure: targetMi, note: newNi } : { measure: targetMi, note: newNi, chordIdx: selChordIdx }), 0);
      return recalcMeasures(next, timeSig);
    });
    try {
      showEditHint("\u{1F941} " + label + " \u2192 beat " + (beatIdx + 1) + (isFoot ? "" : " (press g/h for stem)"));
    } catch (e) {
    }
  }, [selectedDuration, isDotted, isTriplet, timeSig, selectedNote]);
  var _prevDurRef = useRef(selectedDuration);
  var _prevDotRef = useRef(isDotted);
  var _prevTripRef = useRef(isTriplet);
  useEffect(() => {
    var changed = _prevDurRef.current !== selectedDuration || _prevDotRef.current !== isDotted || _prevTripRef.current !== isTriplet;
    _prevDurRef.current = selectedDuration;
    _prevDotRef.current = isDotted;
    _prevTripRef.current = isTriplet;
    if (changed && selectedNote && typeof selectedNote.chordIdx === "number") {
      setMeasures((prev) => {
        var m = prev[selectedNote.measure];
        var cur = m && m.notes[selectedNote.note];
        if (!cur || !Array.isArray(cur.chord) || !cur.chord[selectedNote.chordIdx]) return prev;
        var next = [...prev];
        var notes = [...m.notes];
        notes[selectedNote.note] = {
          ...cur,
          chord: cur.chord.map((cm, ci) => ci === selectedNote.chordIdx ? { ...cm, duration: selectedDuration } : cm)
        };
        next[selectedNote.measure] = { ...m, notes };
        return next;
      });
      return;
    }
    if (!changed || !selectedNote) return;
    if (!(isDrumsMode || clef === "drum" || clef === "percussion")) return;
    setMeasures((prev) => {
      var m = prev[selectedNote.measure];
      if (!m || !m.notes[selectedNote.note]) return prev;
      var next = [...prev];
      var notes = [...m.notes];
      notes[selectedNote.note] = { ...notes[selectedNote.note], duration: selectedDuration, dotted: isDotted, triplet: isTriplet };
      next[selectedNote.measure] = { ...m, notes };
      return recalcMeasures(next, timeSig);
    });
  }, [selectedDuration, isDotted, isTriplet]);
  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.requestMIDIAccess) {
      setMidiStatus("unsupported");
      return;
    }
    var cancelled = false;
    var access = null;
    var PC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var onMidiMessage = (e) => {
      var data = e.data;
      try {
        setMidiDebugCount((c) => c + 1);
        if (data) setMidiDebugLast(`[${Array.from(data).map((b) => b.toString(16)).join(" ")}]`);
      } catch (_e) {
      }
      if (!data || data.length < 3) return;
      var status = data[0] & 240;
      var note = data[1];
      var velocity = data[2];
      if (status === 144 && velocity > 0) {
        var octave = Math.floor(note / 12) - 1;
        var pc = PC[note % 12];
        var keyName = pc + octave;
        try {
          playPianoNoteRef.current(keyName);
        } catch (e2) {
        }
        var _natural = pc[0];
        var _accid = pc.length === 2 ? "sharp" : "none";
        try {
          writeMidiNoteRef.current && writeMidiNoteRef.current(_natural, octave, _accid);
        } catch (e2) {
        }
      }
    };
    var updateInputs = () => {
      if (!access) return;
      if (window.__rapBridgeActive) return;
      var liveCount = 0;
      var _debug = [];
      access.inputs.forEach((input) => {
        input.onmidimessage = onMidiMessage;
        if (input.connection !== "open") {
          try {
            input.open();
          } catch (e) {
          }
        }
        var counted = input.state !== "disconnected";
        if (counted) liveCount++;
        _debug.push({ name: input.name, state: input.state, connection: input.connection, counted });
      });
      try {
        console.log("[MIDI updateInputs]", { liveCount, ports: _debug });
      } catch (e) {
      }
      setMidiInputCount(liveCount);
    };
    var onAccess = (m) => {
      if (cancelled) return;
      access = m;
      midiAccessRef.current = m;
      m.onstatechange = () => updateInputs();
      try {
        var portInfo = [...m.inputs.values()].map((i) => ({
          name: i.name,
          manufacturer: i.manufacturer,
          state: i.state,
          connection: i.connection
        }));
        console.log("[MIDI] inputs:", portInfo);
      } catch (e) {
      }
      updateInputs();
    };
    var tryRequest = (silent) => {
      setMidiStatus((prev) => silent ? prev : "requesting");
      return navigator.requestMIDIAccess({ sysex: false }).then((m) => {
        setMidiStatus("granted");
        setMidiDebugError("");
        onAccess(m);
      }).catch((err) => {
        if (!silent) setMidiStatus("denied");
        try {
          setMidiDebugError(`${err && err.name || "Err"}: ${err && err.message || String(err)}`);
        } catch (_e) {
        }
        console.warn("MIDI access", silent ? "silent attempt failed" : "denied", err);
      });
    };
    requestMidiRef.current = () => tryRequest(false);
    tryRequest(true);
    var pollId = setInterval(() => {
      if (cancelled) return;
      if (!access || access.inputs.size === 0) {
        tryRequest(true);
      } else {
        updateInputs();
      }
    }, 3e3);
    var resumeAudio = () => {
      try {
        if (typeof Tone !== "undefined" && Tone.start) Tone.start();
      } catch (e) {
      }
      try {
        var ctx = typeof Tone !== "undefined" && Tone.context ? Tone.context.rawContext || Tone.context : null;
        if (ctx && ctx.state === "suspended" && ctx.resume) ctx.resume();
      } catch (e) {
      }
    };
    var onVisible = () => {
      if (cancelled) return;
      if (document.visibilityState === "visible") {
        tryRequest();
        resumeAudio();
      }
    };
    var onFocus = () => {
      if (!cancelled) {
        tryRequest();
        resumeAudio();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onFocus);
    return () => {
      cancelled = true;
      clearInterval(pollId);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onFocus);
      if (access) {
        access.inputs.forEach((input) => {
          input.onmidimessage = null;
        });
        access.onstatechange = null;
      }
    };
  }, []);
  useEffect(() => {
    var access = midiAccessRef.current;
    if (!access || !access.outputs || access.outputs.size === 0) return;
    var sendLocalControl = (value) => {
      access.outputs.forEach((out) => {
        try {
          for (var ch = 0; ch < 16; ch++) {
            out.send([176 | ch, 122, value]);
          }
        } catch (e) {
        }
      });
    };
    if (playMode === "practice") {
      sendLocalControl(0);
      return () => sendLocalControl(127);
    }
  }, [playMode, midiInputCount]);
  useEffect(() => {
    var PC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    window.__nativeMidiNote = (midi, velocity, isOn) => {
      window.__rapBridgeActive = true;
      if (typeof midi !== "number" || !isOn) return;
      var v = typeof velocity === "number" ? velocity : 0;
      if (v === 0) return;
      var octave = Math.floor(midi / 12) - 1;
      var pc = PC[midi % 12];
      var keyName = pc + octave;
      try {
        playPianoNoteRef.current(keyName);
      } catch (e) {
      }
      var _natural = pc[0];
      var _accid = pc.length === 2 ? "sharp" : "none";
      try {
        writeMidiNoteRef.current && writeMidiNoteRef.current(_natural, octave, _accid);
      } catch (e) {
      }
    };
    window.__nativeMidiSetInputCount = (n) => {
      window.__rapBridgeActive = true;
      var count = typeof n === "number" && n >= 0 ? n : 0;
      setMidiInputCount(count);
      if (count > 0) setMidiStatus("granted");
    };
    return () => {
      try {
        delete window.__nativeMidiNote;
      } catch (e) {
      }
      try {
        delete window.__nativeMidiSetInputCount;
      } catch (e) {
      }
    };
  }, []);
  useEffect(() => {
    var pianoKeys = {
      "a": "C4",
      "s": "D4",
      "d": "E4",
      "f": "F4",
      "g": "G4",
      "h": "A4",
      "j": "B4",
      "w": "C#4",
      "e": "D#4",
      "t": "F#4",
      "y": "G#4",
      "u": "A#4",
      "k": "C5",
      "l": "D5",
      ";": "E5",
      "'": "F5",
      "o": "C#5",
      "p": "D#5"
    };
    var handler = (e) => {
      var _a2;
      if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "INPUT") return;
      if (window._bpmFocused) return;
      var note = pianoKeys[e.key.toLowerCase()];
      if (note) {
        e.preventDefault();
        playPianoNote(note);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [playPianoNote]);
  var svgRef = useRef(null);
  var playViewXRef = useRef(0);
  var scoreAreaRef = useRef(null);
  var synthRef = useRef(null);
  var playTimeoutRef = useRef([]);
  var metronomeRef = useRef(null);
  var metronomeTickRef = useRef(null);
  var isMobile = useIsMobile();
  var isTouchDevice = typeof navigator !== "undefined" && (navigator.maxTouchPoints > 0 || "ontouchstart" in window);
  var isJamsMode = typeof window !== "undefined" && window.__RPM_JAMS__ === true;
  var isUkuleleMode = typeof window !== "undefined" && window.__RPM_UKULELE__ === true;
  var isGuitarMode = typeof window !== "undefined" && window.__RPM_GUITAR__ === true;
  var isBassGuitarMode = typeof window !== "undefined" && window.__RPM_BASS_GUITAR__ === true;
  var isViolinMode = typeof window !== "undefined" && window.__RPM_VIOLIN__ === true;
  var isCelloMode = typeof window !== "undefined" && window.__RPM_CELLO__ === true;
  var isContrabassMode = typeof window !== "undefined" && window.__RPM_CONTRABASS__ === true;
  var isTrumpetMode = typeof window !== "undefined" && window.__RPM_TRUMPET__ === true;
  var isEuphoniumMode = typeof window !== "undefined" && window.__RPM_EUPHONIUM__ === true;
  var isTubaMode = typeof window !== "undefined" && window.__RPM_TUBA__ === true;
  var isSaxophoneMode = typeof window !== "undefined" && window.__RPM_SAXOPHONE__ === true;
  var isMandolinMode = typeof window !== "undefined" && window.__RPM_MANDOLIN__ === true;
  var isBanjoMode = typeof window !== "undefined" && window.__RPM_BANJO__ === true;
  var isViolaMode = typeof window !== "undefined" && window.__RPM_VIOLA__ === true;
  var isFluteMode = typeof window !== "undefined" && window.__RPM_FLUTE__ === true;
  var isRecorderMode = typeof window !== "undefined" && window.__RPM_RECORDER__ === true;
  var isDrumsMode = typeof window !== "undefined" && window.__RPM_DRUMS__ === true;
  var isFretboardMode = isUkuleleMode || isGuitarMode || isBassGuitarMode || isViolinMode || isCelloMode || isContrabassMode || isMandolinMode || isBanjoMode || isViolaMode;
  var isConductorMode = typeof window !== "undefined" && window.__RPM_CONDUCTOR__ === true;
  var [condStaves, setCondStaves] = useState([]);
  var [condPickerOpen, setCondPickerOpen] = useState(false);
  var condAddInstrument = useCallback((name, clef2) => {
    setCondStaves((prev) => [...prev, { name, clef: clef2 }]);
    setCondPickerOpen(false);
  }, []);
  var condRemoveStaff = useCallback((idx) => {
    setCondStaves((prev) => prev.filter((_, i) => i !== idx));
  }, []);
  useEffect(() => {
    var isEdit = typeof window !== "undefined" && window.__RPM_READONLY__ === false;
    var instLabel = isDrumsMode ? "Drum" : isUkuleleMode ? "Ukulele" : isGuitarMode ? "Guitar" : isBassGuitarMode ? "Bass Guitar" : isViolinMode ? "Violin" : isViolaMode ? "Viola" : isCelloMode ? "Cello" : isContrabassMode ? "Contrabass" : isMandolinMode ? "Mandolin" : isBanjoMode ? "Banjo" : isFluteMode ? "Flute" : isRecorderMode ? "Recorder" : isTrumpetMode ? "Trumpet" : isEuphoniumMode ? "Euphonium" : isTubaMode ? "Tuba" : isSaxophoneMode ? "Saxophone" : "Keyboard";
    document.title = isEdit ? `${instLabel} Edit` : instLabel;
  }, [isDrumsMode, isUkuleleMode, isGuitarMode, isBassGuitarMode, isViolinMode, isViolaMode, isCelloMode, isContrabassMode, isMandolinMode, isBanjoMode, isFluteMode, isRecorderMode, isTrumpetMode, isEuphoniumMode, isTubaMode, isSaxophoneMode]);
  var _currentInstrument = isDrumsMode ? "drums" : isUkuleleMode ? "ukulele" : isGuitarMode ? "guitar" : isBassGuitarMode ? "bass-guitar" : isViolinMode ? "violin" : isViolaMode ? "viola" : isCelloMode ? "cello" : isContrabassMode ? "contrabass" : isMandolinMode ? "mandolin" : isBanjoMode ? "banjo" : isFluteMode ? "flute" : isRecorderMode ? "recorder" : isTrumpetMode ? "trumpet" : isEuphoniumMode ? "euphonium" : isTubaMode ? "tuba" : isSaxophoneMode ? "saxophone" : null;
  var activeFretboardKey = isUkuleleMode ? "ukulele" : isGuitarMode ? "guitar" : isBassGuitarMode ? "bassGuitar" : isViolinMode ? "violin" : isCelloMode ? "cello" : isContrabassMode ? "contrabass" : isMandolinMode ? "mandolin" : isBanjoMode ? "banjo" : isViolaMode ? "viola" : null;
  var activeFretboard = activeFretboardKey ? FRETBOARD_CONFIG[activeFretboardKey] : null;
  var isStudentMode = typeof window !== "undefined" && window.__RPM_STUDENT__ === true;
  var beatsPerMeasure = measureBeatsInQuarters(timeSig);
  var widthOfMeasure = (mi) => {
    var m = measures && measures[mi];
    if (m && m.pickup && m.pickupBeats > 0 && beatsPerMeasure > 0) {
      return measureWidth * Math.max(0, Math.min(1, m.pickupBeats / beatsPerMeasure));
    }
    return measureWidth;
  };
  var totalMeasuresWidth = (startMi, count) => {
    var sum = 0;
    for (var i = 0; i < count; i++) sum += widthOfMeasure(startMi + i);
    return sum;
  };
  var offsetOfMeasure = (mi) => totalMeasuresWidth(0, mi);
  var measureIdxAtRelX = (relX) => {
    if (relX < 0) return 0;
    var n = measures && measures.length || 0;
    var off = 0;
    for (var i = 0; i < n; i++) {
      var w = widthOfMeasure(i);
      if (relX < off + w) return i;
      off += w;
    }
    return Math.max(0, n - 1);
  };
  var hasLoadedRef = useRef(false);
  var recalcMeasures = (measures2, ts) => {
    var mbq = measureBeatsInQuarters(ts || timeSig);
    return measures2.map((m) => {
      if (m.notes.length === 0) return m;
      var beatSize = (measureWidth - 100) / mbq;
      var offsets = { treble: 0, bass: 0 };
      var notes = m.notes.map((note) => {
        var _a2;
        var staffKey = note.staff === "bass" ? "bass" : "treble";
        if (note.grace) {
          return { ...note, x: 80 + offsets[staffKey] * beatSize };
        }
        var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === note.duration)) == null ? void 0 : _a2.beats) || 1;
        var dur = note.doubleDotted ? baseDur * 1.75 : note.dotted ? baseDur * 1.5 : note.triplet ? baseDur * 2 / 3 : baseDur;
        var x = 80 + offsets[staffKey] * beatSize;
        offsets[staffKey] += dur;
        return { ...note, x };
      });
      var GRACE_OFFSET = 22;
      for (var i = 0; i < notes.length; i++) {
        if (!notes[i].grace) continue;
        var graceRun = 1;
        while (i + graceRun < notes.length && notes[i + graceRun].grace && notes[i + graceRun].staff === notes[i].staff) graceRun++;
        var principalIdx = i + graceRun;
        if (principalIdx < notes.length && notes[principalIdx].staff === notes[i].staff && !notes[principalIdx].grace) {
          var px = notes[principalIdx].x;
          for (var g = 0; g < graceRun; g++) {
            notes[i + g] = { ...notes[i + g], x: px - GRACE_OFFSET * (graceRun - g) };
          }
          i = principalIdx - 1;
        }
      }
      return { ...m, notes };
    });
  };
  var rebarMeasures = (measures2, ts) => {
    var mbq = measureBeatsInQuarters(ts);
    var durB = (n2) => {
      var _a2;
      if (n2.grace) return 0;
      if (n2.isRest && n2.duration === "whole") return mbq;
      var base = ((_a2 = NOTE_DURATIONS.find((d) => d.id === n2.duration)) == null ? void 0 : _a2.beats) || 1;
      return n2.doubleDotted ? base * 1.75 : n2.dotted ? base * 1.5 : n2.triplet ? base * 2 / 3 : base;
    };
    var streams = { treble: [], bass: [] };
    for (var m of measures2) for (var n of m.notes || []) {
      streams[n.staff === "bass" ? "bass" : "treble"].push(n);
    }
    var barsOf = (stream) => {
      var bars = [];
      var cur = [];
      var used = 0;
      for (var n2 of stream) {
        var d = durB(n2);
        if (cur.length && used + d > mbq + 1e-6) {
          bars.push(cur);
          cur = [];
          used = 0;
        }
        cur.push(n2);
        used += d;
        if (used >= mbq - 1e-6) {
          bars.push(cur);
          cur = [];
          used = 0;
        }
      }
      if (cur.length) bars.push(cur);
      return bars;
    };
    var tBars = barsOf(streams.treble);
    var bBars = barsOf(streams.bass);
    var count = Math.max(tBars.length, bBars.length, 1);
    var out = [];
    for (var i = 0; i < count; i++) out.push({ notes: [...tBars[i] || [], ...bBars[i] || []] });
    return recalcMeasures(out, ts);
  };
  var loadedFromRef = useRef(null);
  var loadedFolderRef = useRef("");
  var loadedBookOrderRef = useRef(null);
  var isPublishedRef = useRef(false);
  var [isPublished, setIsPublished] = useState(false);
  var loadSongData = useCallback((song) => {
    if (isPlayingRef.current) {
      playTimeoutRef.current.forEach(clearTimeout);
      playTimeoutRef.current = [];
      isPlayingRef.current = false;
      setIsPlaying(false);
      setIsPaused(false);
      setMetronomeBeat(-1);
      playStartTimeRef.current = null;
      playBpmRef.current = null;
      if (synthRef.current) synthRef.current.dispose();
    }
    setPlayMode(null);
    setCelebrateMsg(null);
    celebratingRef.current = false;
    practiceJustFinishedRef.current = false;
    setPressedPianoKeys({});
    setTabletViewX(0);
    setTabletViewYOffset(0);
    var resetScroll = () => {
      if (scoreAreaRef.current) {
        scoreAreaRef.current.scrollLeft = 0;
        scoreAreaRef.current.scrollTop = 0;
      }
    };
    resetScroll();
    setTimeout(resetScroll, 50);
    setTimeout(resetScroll, 200);
    loadedFromRef.current = song.title ? song.title.replace(/[\/\\:*?"<>|]/g, "_") + ".json" : null;
    isPublishedRef.current = !!song.published;
    setIsPublished(!!song.published);
    loadedFolderRef.current = typeof song.folder === "string" ? song.folder : "";
    loadedBookOrderRef.current = typeof song.bookOrder === "number" ? song.bookOrder : null;
    var _isFretboardSong = typeof window !== "undefined" && (window.__RPM_UKULELE__ === true || window.__RPM_GUITAR__ === true || window.__RPM_BASS_GUITAR__ === true || window.__RPM_VIOLIN__ === true || window.__RPM_CELLO__ === true || window.__RPM_CONTRABASS__ === true || window.__RPM_MANDOLIN__ === true || window.__RPM_BANJO__ === true || window.__RPM_VIOLA__ === true || window.__RPM_EUPHONIUM__ === true || window.__RPM_TUBA__ === true);
    var _forceBassClef = typeof window !== "undefined" && (window.__RPM_BASS_GUITAR__ === true || window.__RPM_CELLO__ === true || window.__RPM_CONTRABASS__ === true || window.__RPM_EUPHONIUM__ === true || window.__RPM_TUBA__ === true);
    if (song.measures) {
      var defaultStaff = song.clef === "bass" ? "bass" : "treble";
      var migrated = song.measures.map((m) => ({
        ...m,
        notes: (m.notes || []).map((n) => n.staff ? n : { ...n, staff: defaultStaff })
      }));
      var _ts = song.timeSig || { top: 4, bottom: 4 };
      var _bpmTotal = measureBeatsInQuarters(_ts);
      var _DUR_Q = { whole: 4, half: 2, quarter: 1, eighth: 0.5, sixteenth: 0.25, "thirty-second": 0.125 };
      var _beatsOf = (n) => {
        var b = _DUR_Q[n.duration] || 0;
        if (n.dotted) b *= 1.5;
        if (n.doubleDotted) b *= 1.75;
        if (n.triplet) b *= 2 / 3;
        return b;
      };
      if (migrated.length > 0 && !migrated[0].pickup) {
        var _trebleBeats = 0;
        var _hasNonRestTreble = false;
        for (var _n2 of migrated[0].notes || []) {
          if (_n2.grace || _n2.staff === "bass") continue;
          _trebleBeats += _beatsOf(_n2);
          if (!_n2.isRest) _hasNonRestTreble = true;
        }
        if (_hasNonRestTreble && _trebleBeats > 0 && _trebleBeats < _bpmTotal - 1e-3) {
          migrated[0] = { ...migrated[0], pickup: true, pickupBeats: _trebleBeats };
        }
      }
      for (var _mi = 0; _mi < migrated.length; _mi++) {
        var _m2 = migrated[_mi];
        if (!_m2.pickup || !(_m2.pickupBeats > 0)) continue;
        var _trebSrc = (_m2.notes || []).filter((n) => (n.staff === "bass" ? "bass" : "treble") === "treble");
        var _bassSrc = (_m2.notes || []).filter((n) => n.staff === "bass");
        var _stripLeading = (arr) => {
          var _firstNonRest = arr.findIndex((n) => !n.isRest);
          if (_firstNonRest <= 0) return arr;
          return arr.slice(_firstNonRest);
        };
        var _trebStripped = _stripLeading(_trebSrc);
        var _bassStripped = _stripLeading(_bassSrc);
        var _sumStaff = (arr) => arr.reduce((s, n) => s + (n.grace ? 0 : _beatsOf(n)), 0);
        var _trebSum = _sumStaff(_trebStripped);
        var _bassSum = _sumStaff(_bassStripped);
        var _staffFits = (arr, sum) => arr.length === 0 || Math.abs(sum - _m2.pickupBeats) < 1e-3 || arr.length === 1 && arr[0].isRest && arr[0].duration === "whole";
        if (_staffFits(_trebStripped, _trebSum) && _staffFits(_bassStripped, _bassSum)) {
          migrated[_mi] = { ..._m2, notes: [..._trebStripped, ..._bassStripped] };
        }
      }
      if (_isFretboardSong) {
        for (var _mi = 0; _mi < migrated.length; _mi++) {
          migrated[_mi] = {
            ...migrated[_mi],
            notes: (migrated[_mi].notes || []).filter((_n3) => (_n3.staff || "treble") !== "bass").map((_n3) => {
              if (!_forceBassClef) return _n3;
              var _u = { ..._n3, staff: "bass" };
              if (!_n3.isRest && _n3.octave != null) _u.octave = _n3.octave - 1;
              if (_n3.chord) {
                _u.chord = _n3.chord.map((_c) => _c.octave != null ? { ..._c, octave: _c.octave - 1 } : _c);
              }
              return _u;
            })
          };
        }
      }
      var _writtenMeasures = migrated;
      var _writtenKey = song.keySig || "C";
      var _isBflatInstrument = typeof window !== "undefined" && (window.__RPM_TRUMPET__ === true || window.__RPM_EUPHONIUM__ === true || window.__RPM_TUBA__ === true);
      if (_isBflatInstrument) {
        var _newKey = KEY_UP_M2[_writtenKey] || _writtenKey;
        _writtenMeasures = computeTransposedMeasures(_writtenMeasures, _writtenKey, _newKey, 2);
        _writtenKey = _newKey;
      }
      setMeasures(recalcMeasures(_writtenMeasures, _ts));
    }
    var t = song.title || "Untitled Score";
    setTitle(t);
    setSavedTitle(t);
    setComposer(song.composer || "");
    setBpm(song.bpm || 120);
    setTempoName(song.tempoName || "");
    if (isConductorMode) setCondStaves(Array.isArray(song.staves) ? song.staves : []);
    var _isBflatLoad = typeof window !== "undefined" && (window.__RPM_TRUMPET__ === true || window.__RPM_EUPHONIUM__ === true || window.__RPM_TUBA__ === true);
    var _displayKey = _isBflatLoad ? KEY_UP_M2[song.keySig || "C"] || (song.keySig || "C") : song.keySig || "C";
    setKeySig(_displayKey);
    setSongKey(_displayKey);
    setTransposeOffset(0);
    setTimeSig(song.timeSig || { top: 4, bottom: 4 });
    setDifficulty(song.difficulty || 0);
    setClef(
      // Drum edit/play page ALWAYS shows the percussion clef — never inherit
      // a treble/grand from a keyboard song that may have leaked in.
      isDrumsMode ? "drum" : _forceBassClef ? "bass" : typeof window !== "undefined" && window.__RPM_VIOLA__ === true ? "alto" : _isFretboardSong ? "treble" : song.clef || deriveClefFromMeasures(void 0, song.measures)
    );
    setCurrentSongId(t);
    setSelectedNote(null);
    setLyricsScrollY(0);
    setPracticeIdx(0);
    setPlayingIdx({ measure: -1, note: -1 });
    setPlayingNotes({});
  }, []);
  var refreshLibrary = useCallback(async () => {
    if (childLock) {
      try {
        var res = await fetch("/api/published");
        var songs = await res.json();
        setLibrary(songs);
        return songs;
      } catch {
        setLibrary([]);
        return [];
      }
    } else {
      var songs = await window.rapmusicAPI.listSongs();
      setLibrary(songs);
      return songs;
    }
  }, [childLock]);
  var loadPublishedByFilename = useCallback(async (filename) => {
    if (!filename) return;
    try {
      var res = await fetch("/api/songs/" + encodeURIComponent(filename));
      if (!res.ok) return;
      var song = await res.json();
      loadSongData(song);
    } catch (e) {
    }
  }, [loadSongData]);
  var loadFromManifest = useCallback(async (slim) => {
    if (!slim) return;
    if (slim._filename) return loadPublishedByFilename(slim._filename);
    var f = (slim.title || "Untitled").replace(/[\/\\:*?"<>|]/g, "_") + ".json";
    return loadPublishedByFilename(f);
  }, [loadPublishedByFilename]);
  var openFolderBrowser = useCallback(async () => {
    var data = await window.rapmusicAPI.browse(browsePath || "");
    if (data && !data.error) {
      setBrowsePath(data.current);
      setBrowseEntries(data.entries);
      setBrowseParent(data.parent);
      setShowFolderBrowser(true);
    }
  }, [browsePath]);
  var navigateTo = useCallback(async (dir) => {
    var data = await window.rapmusicAPI.browse(dir);
    if (data && !data.error) {
      setBrowsePath(data.current);
      setBrowseEntries(data.entries);
      setBrowseParent(data.parent);
    }
  }, []);
  var selectFolder = useCallback(async () => {
    var dir = await window.rapmusicAPI.setDirectory(browsePath);
    if (dir) {
      setSaveDir(dir);
      setShowFolderBrowser(false);
      var songs = await window.rapmusicAPI.listSongs();
      setLibrary(songs);
      if (pendingSaveRef.current) {
        pendingSaveRef.current = false;
        setSaveAsName(title || "Untitled Score");
        setShowSaveAs(true);
      }
    }
  }, [browsePath, title]);
  var createFolder = useCallback(async () => {
    if (!newFolderName.trim()) return;
    var newPath = browsePath + "/" + newFolderName.trim();
    try {
      await fetch("/api/mkdir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: newPath })
      });
      setNewFolderName("");
      setShowNewFolder(false);
      await navigateTo(browsePath);
    } catch (e) {
    }
  }, [browsePath, newFolderName, navigateTo]);
  useEffect(() => {
    var urlHasSong = new URLSearchParams(window.location.search).has("song");
    var isBabyMode = typeof window !== "undefined" && window.__RPM_READONLY__ !== false;
    var isJamsMode2 = typeof window !== "undefined" && window.__RPM_JAMS__ === true;
    (async () => {
      if (!isBabyMode) {
        var dir = await window.rapmusicAPI.getDirectory();
        if (dir) setSaveDir(dir);
        var songs = await window.rapmusicAPI.listSongs();
        setLibrary(songs);
        var state = await window.rapmusicAPI.getState();
        if (!urlHasSong && !isJamsMode2 && !isConductorMode) {
          var _isDrumSong = (s) => s && (s.clef === "drum" || s.clef === "percussion");
          if (isDrumsMode) {
            var _cand = state && state.lastSong ? songs.find((s) => s.title === state.lastSong && _isDrumSong(s)) : null;
            if (!_cand) _cand = songs.find(_isDrumSong);
            if (_cand) loadSongData(_cand);
          } else if (state && state.lastSong) {
            var lastSong = songs.find((s) => s.title === state.lastSong);
            if (lastSong) loadSongData(lastSong);
          }
        }
      } else if (!isJamsMode2) {
        try {
          var res = await fetch("/api/published");
          var published = await res.json();
          if (Array.isArray(published)) setLibrary(published);
          if (!urlHasSong) {
            var wanted = isDrumsMode ? Array.isArray(published) && published.find((s) => s.clef === "drum" || s.clef === "percussion") : Array.isArray(published) && published.find((s) => (s.title || "").trim().toLowerCase() === "hot cross buns");
            if (wanted) await loadFromManifest(wanted);
          }
        } catch (e) {
        }
      } else if (isJamsMode2) {
        try {
          var saved = localStorage.getItem("rapmusic.jamsLastSong");
          if (saved) {
            var song = JSON.parse(saved);
            if (song && Array.isArray(song.measures)) loadSongData(song);
          }
        } catch (e) {
        }
      }
      setTimeout(() => {
        hasLoadedRef.current = true;
        setLoaded(true);
      }, 200);
    })();
  }, []);
  var [securityStats, setSecurityStats] = useState(null);
  useEffect(() => {
    if (window.__RPM_READONLY__ !== false) return;
    if (!isLoggedIn) return;
    var cancelled = false;
    var fetchStats = async () => {
      var since = Number(localStorage.getItem("security.lastSeen") || 0);
      try {
        var res = await fetch(`/api/security-stats?since=${since}`, { credentials: "include" });
        if (!res.ok) return;
        var data = await res.json();
        if (!cancelled) setSecurityStats(data);
      } catch (e) {
      }
    };
    fetchStats();
    var id = setInterval(fetchStats, 60 * 1e3);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [isLoggedIn]);
  var dismissSecurityBanner = useCallback(() => {
    if (securityStats && securityStats.lastEventAt) {
      localStorage.setItem("security.lastSeen", String(securityStats.lastEventAt));
    } else {
      localStorage.setItem("security.lastSeen", String(Date.now()));
    }
    setSecurityStats(null);
  }, [securityStats]);
  useEffect(() => {
    var params = new URLSearchParams(window.location.search);
    var songTitle = params.get("song");
    if (!songTitle) return;
    var isAdmin = typeof window !== "undefined" && window.__RPM_READONLY__ === false;
    (async () => {
      var needle = songTitle.trim();
      var tryLoad = async (apiUrl) => {
        try {
          var res = await fetch(apiUrl);
          if (!res.ok) return false;
          var songs = await res.json();
          var match = songs.find(
            (s) => (s.title || "").trim() === needle || (s._filename || "").replace(/\.json$/, "") === needle
          );
          if (match) {
            if (isDrumsMode && !(match.clef === "drum" || match.clef === "percussion")) return false;
            if (isConductorMode && match.conductor !== true) return false;
            if (!isConductorMode && match.conductor === true) return false;
            await loadFromManifest(match);
            window.history.replaceState({}, "", window.location.pathname + window.location.hash);
            return true;
          }
        } catch (e) {
        }
        return false;
      };
      if (await tryLoad("/api/published")) return;
      if (isAdmin) await tryLoad("/api/songs");
    })();
  }, [loadFromManifest]);
  useEffect(() => {
    try {
      var h = location.hostname;
      var isDevHost = /^(localhost|127\.0\.0\.1)$/.test(h) || h === "::1" || /^192\.168\./.test(h) || /^10\./.test(h) || /^172\.(1[6-9]|2\d|3[01])\./.test(h) || /\.local$/i.test(h);
      if (!isDevHost || !currentSongId) return;
      var params = new URLSearchParams(window.location.search);
      if (params.get("song") !== currentSongId) {
        params.set("song", currentSongId);
        window.history.replaceState(null, "", window.location.pathname + "?" + params.toString() + window.location.hash);
      }
    } catch (e) {
    }
  }, [currentSongId]);
  var saveTimeoutRef = useRef(null);
  var [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  useEffect(() => {
    if (!hasLoadedRef.current) return;
    if (!currentSongId) return;
    if (isPublishedRef.current) return;
    var _autosaveNoteCount = (measures || []).reduce((s, m) => s + (m && m.notes ? m.notes.length : 0), 0);
    if (_autosaveNoteCount === 0) return;
    setHasUnsavedChanges(true);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(async () => {
      var oldTitle = savedTitle !== title ? savedTitle : null;
      var song = { title, composer, bpm, tempoName, keySig, songKey, timeSig, difficulty, clef, measures, savedAt: (/* @__PURE__ */ new Date()).toISOString(), ...isConductorMode ? { conductor: true, staves: condStaves } : {} };
      if (loadedFolderRef.current) song.folder = loadedFolderRef.current;
      if (loadedBookOrderRef.current != null) song.bookOrder = loadedBookOrderRef.current;
      if (_currentInstrument) song.instrument = _currentInstrument;
      var result = await window.rapmusicAPI.saveSong(song, oldTitle, { loadedFrom: loadedFromRef.current });
      if (result && result.blocked) {
        return;
      }
      await window.rapmusicAPI.saveState({ lastSong: title });
      if (oldTitle) setSavedTitle(title);
      setCurrentSongId(title);
      loadedFromRef.current = (title || "").replace(/[\/\\:*?"<>|]/g, "_") + ".json";
      setHasUnsavedChanges(false);
      refreshLibrary();
    }, 200);
  }, [measures, title, composer, bpm, tempoName, keySig, songKey, timeSig, difficulty, clef, currentSongId, savedTitle, refreshLibrary]);
  useEffect(() => {
    var handler = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [hasUnsavedChanges]);
  var renumberSongsAfter = useCallback(async (changedTitle, changedDifficulty) => {
    if (!changedDifficulty || changedDifficulty <= 0) return;
    var songs = await window.rapmusicAPI.listSongs();
    var sorted = songs.filter((s2) => s2.difficulty > 0).sort((a, b) => a.difficulty - b.difficulty);
    var nextNum = changedDifficulty + 1;
    for (var s of sorted) {
      if (s.title === changedTitle) continue;
      if (s.difficulty >= changedDifficulty) {
        if (s.difficulty !== nextNum) {
          var updated = { ...s, difficulty: nextNum, savedAt: (/* @__PURE__ */ new Date()).toISOString() };
          delete updated._filename;
          delete updated.id;
          await window.rapmusicAPI.saveSong(updated);
        }
        nextNum++;
      }
    }
  }, []);
  var doSave = useCallback(async (newTitle, oldTitle) => {
    var song = { title: newTitle, composer, bpm, tempoName, keySig, songKey, timeSig, difficulty, clef, measures, savedAt: (/* @__PURE__ */ new Date()).toISOString(), ...isConductorMode ? { conductor: true, staves: condStaves } : {} };
    if (loadedFolderRef.current) song.folder = loadedFolderRef.current;
    if (loadedBookOrderRef.current != null) song.bookOrder = loadedBookOrderRef.current;
    if (_currentInstrument) song.instrument = _currentInstrument;
    await window.rapmusicAPI.saveSong(song, oldTitle, { loadedFrom: loadedFromRef.current, allowOverwrite: true });
    loadedFromRef.current = (newTitle || "").replace(/[\/\\:*?"<>|]/g, "_") + ".json";
    await window.rapmusicAPI.saveState({ lastSong: newTitle });
    setSavedTitle(newTitle);
    setCurrentSongId(newTitle);
    await renumberSongsAfter(newTitle, difficulty);
    await refreshLibrary();
  }, [composer, bpm, tempoName, keySig, songKey, timeSig, difficulty, clef, measures, refreshLibrary, renumberSongsAfter]);
  var handleSave = useCallback(async () => {
    if (isPublishedRef.current) {
      alert("This song is published and read-only. Unpublish it first to save changes.");
      return;
    }
    if (!currentSongId) {
      setSaveAsName(title || "Untitled Score");
      setShowSaveAs(true);
      return;
    }
    await doSave(title, savedTitle !== title ? savedTitle : null);
    setSaveConfirm("Saved!");
    setTimeout(() => setSaveConfirm(""), 2e3);
  }, [currentSongId, title, savedTitle, doSave]);
  var handleSaveAs = useCallback(() => {
    setSaveAsName(title || "Untitled Score");
    setShowSaveAs(true);
  }, [title]);
  var parseMusicXMLDoc = useCallback((doc) => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    var _LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var _tieDirByStaffPos = (n, o, staff) => {
      if (!(n in _LETTER_ORD)) return null;
      var idx = _LETTER_ORD[n] + 7 * (o || 0);
      var mid = staff === "bass" ? 22 : 34;
      return idx >= mid ? "up" : "down";
    };
    var readPrintedAccidental = (noteEl) => {
      var accEl = noteEl.querySelector(":scope > accidental");
      if (!accEl) return "none";
      var t = (accEl.textContent || "").trim();
      if (t === "sharp") return "sharp";
      if (t === "flat") return "flat";
      if (t === "natural") return "natural";
      if (t === "double-sharp" || t === "sharp-sharp") return "double-sharp";
      if (t === "flat-flat") return "double-flat";
      return "none";
    };
    var title2 = ((_b2 = (_a2 = doc.querySelector("work > work-title, movement-title")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b2.trim()) || "Imported Song";
    var composer2 = ((_d = (_c = doc.querySelector('creator[type="composer"]')) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "";
    var allPartsRaw = Array.from(doc.querySelectorAll("part"));
    if (allPartsRaw.length === 0) throw new Error("No <part> element found");
    var _instById = {};
    for (var si of doc.querySelectorAll("score-instrument")) {
      var id = si.getAttribute("id");
      if (id) _instById[id] = ((_f = (_e = si.querySelector("instrument-name")) == null ? void 0 : _e.textContent) == null ? void 0 : _f.trim()) || "";
    }
    var FIFTHS_TO_KEY = {
      "-7": "Cb",
      "-6": "Gb",
      "-5": "Db",
      "-4": "Ab",
      "-3": "Eb",
      "-2": "Bb",
      "-1": "F",
      "0": "C",
      "1": "G",
      "2": "D",
      "3": "A",
      "4": "E",
      "5": "B",
      "6": "F#",
      "7": "C#"
    };
    var partMetaRaw = allPartsRaw.map((p) => {
      var _a3;
      var firstAttrs = p.querySelector("attributes");
      var staves2 = parseInt(((_a3 = firstAttrs == null ? void 0 : firstAttrs.querySelector("staves")) == null ? void 0 : _a3.textContent) || "1");
      var signs = Array.from((firstAttrs == null ? void 0 : firstAttrs.querySelectorAll("clef")) || []).map((c) => {
        var _a4;
        return (((_a4 = c.querySelector("sign")) == null ? void 0 : _a4.textContent) || "G").trim();
      });
      return { part: p, staves: staves2, signs };
    });
    var isSoloPlusPiano = partMetaRaw.length >= 2 && partMetaRaw.some((pm) => pm.staves === 1 && pm.signs.length === 1 && pm.signs[0] === "G") && partMetaRaw.some((pm) => pm.staves >= 2 || pm.signs.includes("F"));
    var soloIdx = isSoloPlusPiano ? partMetaRaw.findIndex((pm) => pm.staves === 1 && pm.signs.length === 1 && pm.signs[0] === "G") : -1;
    var allParts = isSoloPlusPiano ? [allPartsRaw[soloIdx]] : allPartsRaw;
    var partMeta = isSoloPlusPiano ? [partMetaRaw[soloIdx]] : partMetaRaw;
    var anyPartMultiStaff = partMeta.some((pm) => pm.staves >= 2);
    var allClefs = new Set(partMeta.flatMap((pm) => pm.signs));
    var hasMixedClefsAcrossParts = partMeta.length > 1 && allClefs.size > 1;
    var isGrand = anyPartMultiStaff || hasMixedClefsAcrossParts;
    var primaryVoicePerPartStaff = partMeta.map(({ part: part2 }) => {
      var _a3, _b3;
      var map = {};
      for (var m of part2.querySelectorAll("measure")) {
        for (var el of Array.from(m.children)) {
          if (el.tagName !== "note") continue;
          if (el.querySelector(":scope > chord")) continue;
          var st2 = parseInt(((_a3 = el.querySelector(":scope > staff")) == null ? void 0 : _a3.textContent) || "1");
          var vo = parseInt(((_b3 = el.querySelector(":scope > voice")) == null ? void 0 : _b3.textContent) || "1");
          if (map[st2] === void 0) map[st2] = vo;
        }
      }
      return map;
    });
    var divisions = 1;
    var parsedTimeSig = { top: 4, bottom: 4 };
    var parsedBpm = 120;
    var songKeySig = "C";
    var currentKeySig = "C";
    var outMeasures = [];
    var idCounter = Date.now();
    var DUR_BEATS = { whole: 4, half: 2, quarter: 1, eighth: 0.5, sixteenth: 0.25, "thirty-second": 0.125 };
    var noteBeats = (n) => {
      if (n.grace) return 0;
      var b = DUR_BEATS[n.duration] || 1;
      if (n.doubleDotted) b *= 1.75;
      else if (n.dotted) b *= 1.5;
      if (n.triplet) b *= 2 / 3;
      return b;
    };
    var buildRests = (gap, staff) => {
      var CHUNKS = [
        { d: 4, duration: "whole", dotted: false },
        { d: 3, duration: "half", dotted: true },
        { d: 2, duration: "half", dotted: false },
        { d: 1.5, duration: "quarter", dotted: true },
        { d: 1, duration: "quarter", dotted: false },
        { d: 0.75, duration: "eighth", dotted: true },
        { d: 0.5, duration: "eighth", dotted: false },
        { d: 0.375, duration: "sixteenth", dotted: true },
        { d: 0.25, duration: "sixteenth", dotted: false }
      ];
      var rests = [];
      var rem = gap;
      while (rem > 0.01) {
        var c = CHUNKS.find((ch) => ch.d <= rem + 0.01);
        if (!c) break;
        rests.push({
          id: idCounter++,
          x: 80,
          name: "B",
          octave: 4,
          duration: c.duration,
          dotted: c.dotted,
          triplet: false,
          accidental: "none",
          isRest: true,
          staff,
          lyric: ""
        });
        rem -= c.d;
      }
      return rests;
    };
    var measureCount = Math.max(...allParts.map((p) => p.querySelectorAll("measure").length));
    var activeOttavaImportShift = {};
    var pendingOttavaMarkerForNext = {};
    var lastNoteForOttavaEnd = {};
    var _activeTopClef = clef2 === "bass" || clef2 === "grandBass" ? "bass" : "treble";
    var _activeBottomClef = isGrand ? "bass" : null;
    var _SIGN_TO_CLEF = { G: "treble", F: "bass" };
    for (var mi = 0; mi < measureCount; mi++) {
      var measureProps = {};
      var nfNotes = [];
      var _cursorDiv = 0;
      for (var part of allParts) {
        var partMeasures = part.querySelectorAll("measure");
        var _m2 = partMeasures[mi];
        if (!_m2) continue;
        for (var attrs of _m2.querySelectorAll(":scope > attributes")) {
          for (var clefEl of attrs.querySelectorAll(":scope > clef")) {
            var num = clefEl.getAttribute("number") || "1";
            var sign = (_h = (_g = clefEl.querySelector("sign")) == null ? void 0 : _g.textContent) == null ? void 0 : _h.trim();
            var clefName = _SIGN_TO_CLEF[sign];
            if (!clefName) continue;
            if (num === "1") {
              if (_activeTopClef !== clefName) {
                measureProps.topClef = clefName;
                _activeTopClef = clefName;
              }
            } else if (num === "2") {
              if (_activeBottomClef !== clefName) {
                measureProps.bottomClef = clefName;
                _activeBottomClef = clefName;
              }
            }
          }
        }
      }
      allParts.forEach((part2, partIdx) => {
        var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k, _l, _m3, _n2, _o2, _p, _q, _r, _s, _t, _u;
        var partMeasures2 = part2.querySelectorAll("measure");
        var m = partMeasures2[mi];
        if (!m) return;
        var meta = partMeta[partIdx];
        var primaryVoice = primaryVoicePerPartStaff[partIdx];
        if (partIdx === 0) {
          for (var bar of m.querySelectorAll("barline")) {
            var repeat = bar.querySelector("repeat");
            if (repeat) {
              var dir = repeat.getAttribute("direction");
              if (dir === "forward") measureProps.repeatStart = true;
              if (dir === "backward") measureProps.repeat = true;
            }
            var ending = bar.querySelector("ending");
            if (ending) {
              var num2 = (ending.getAttribute("number") || "").trim();
              var type = ending.getAttribute("type");
              var is1 = num2 === "1" || num2.startsWith("1,") || num2.startsWith("1.");
              var is2 = num2 === "2" || num2.startsWith("2,") || num2.startsWith("2.") || num2.includes("2");
              if (type === "start") {
                if (is1) {
                  measureProps.volta1Start = true;
                  measureProps.volta1Label = num2 || "1.";
                } else if (is2) {
                  measureProps.volta2Start = true;
                }
              } else if (type === "stop" || type === "discontinue") {
                if (is1) measureProps.volta1End = true;
                else if (is2) measureProps.volta2End = true;
              }
            }
          }
        }
        if (partIdx === 0) {
          for (var dir of m.querySelectorAll("direction")) {
            var sound = dir.querySelector("sound");
            var words = (((_a3 = dir.querySelector("direction-type > words")) == null ? void 0 : _a3.textContent) || "").trim();
            var wordsLower = words.toLowerCase();
            var hasSegnoSym = !!dir.querySelector("direction-type > segno");
            var hasCodaSym = !!dir.querySelector("direction-type > coda");
            if (sound) {
              if (sound.getAttribute("segno")) measureProps.segno = true;
              if (sound.getAttribute("coda")) measureProps.coda = true;
              if (sound.getAttribute("tocoda")) measureProps.toCoda = true;
              if (sound.getAttribute("fine") === "yes") measureProps.fine = true;
              if (sound.getAttribute("dacapo") === "yes") {
                if (wordsLower.includes("al fine")) measureProps.nav = "dc-al-fine";
                else if (wordsLower.includes("al coda")) measureProps.nav = "dc-al-coda";
                else measureProps.nav = "dc";
              }
              if (sound.getAttribute("dalsegno")) {
                if (wordsLower.includes("al fine")) measureProps.nav = "ds-al-fine";
                else if (wordsLower.includes("al coda")) measureProps.nav = "ds-al-coda";
                else measureProps.nav = "ds";
              }
            }
            if (hasSegnoSym && !measureProps.segno) measureProps.segno = true;
            if (hasCodaSym && !measureProps.coda) measureProps.coda = true;
            if (!measureProps.nav) {
              if (wordsLower === "d.c." || wordsLower === "da capo") measureProps.nav = "dc";
              else if (wordsLower === "d.s." || wordsLower === "dal segno") measureProps.nav = "ds";
              else if (wordsLower.includes("d.c.") && wordsLower.includes("al fine")) measureProps.nav = "dc-al-fine";
              else if (wordsLower.includes("d.c.") && wordsLower.includes("al coda")) measureProps.nav = "dc-al-coda";
              else if (wordsLower.includes("d.s.") && wordsLower.includes("al fine")) measureProps.nav = "ds-al-fine";
              else if (wordsLower.includes("d.s.") && wordsLower.includes("al coda")) measureProps.nav = "ds-al-coda";
            }
            if (!measureProps.fine && wordsLower === "fine") measureProps.fine = true;
            if (!measureProps.toCoda && wordsLower.replace(/\s+/g, "") === "tocoda") measureProps.toCoda = true;
          }
        }
        var attrs2 = m.querySelector("attributes");
        if (attrs2 && partIdx === 0) {
          var divEl = attrs2.querySelector("divisions");
          if (divEl) divisions = parseInt(divEl.textContent) || divisions;
          var timeEl = attrs2.querySelector("time");
          if (timeEl) {
            var beats = parseInt((_b3 = timeEl.querySelector("beats")) == null ? void 0 : _b3.textContent);
            var beatType = parseInt((_c2 = timeEl.querySelector("beat-type")) == null ? void 0 : _c2.textContent);
            if (beats && beatType) parsedTimeSig = { top: beats, bottom: beatType };
          }
          var keyEl = attrs2.querySelector("key");
          if (keyEl) {
            var fifthsStr = (((_d2 = keyEl.querySelector("fifths")) == null ? void 0 : _d2.textContent) || "").trim();
            var newKey = FIFTHS_TO_KEY[fifthsStr];
            if (newKey && newKey !== currentKeySig) {
              if (mi === 0) songKeySig = newKey;
              else measureProps.keySig = newKey;
              currentKeySig = newKey;
            }
          }
        }
        if (partIdx === 0) {
          var tempoEl = m.querySelector("sound[tempo]");
          if (tempoEl) {
            var t = parseFloat(tempoEl.getAttribute("tempo"));
            if (t) parsedBpm = t;
          }
        }
        for (var el of Array.from(m.children)) {
          if (el.tagName === "backup") {
            var d = parseInt(((_e2 = el.querySelector(":scope > duration")) == null ? void 0 : _e2.textContent) || "0");
            _cursorDiv = Math.max(0, _cursorDiv - d);
            continue;
          }
          if (el.tagName === "forward") {
            var d = parseInt(((_f2 = el.querySelector(":scope > duration")) == null ? void 0 : _f2.textContent) || "0");
            _cursorDiv += d;
            continue;
          }
          if (el.tagName === "direction") {
            var oshift = el.querySelector(":scope > direction-type > octave-shift");
            if (oshift) {
              var dirStaff = parseInt(((_g2 = el.querySelector(":scope > staff")) == null ? void 0 : _g2.textContent) || "1");
              var otype = oshift.getAttribute("type");
              var placement = el.getAttribute("placement");
              var key = `${partIdx}-${dirStaff}`;
              if (otype === "up") {
                activeOttavaImportShift[key] = 1;
                pendingOttavaMarkerForNext[key] = placement === "below" ? "8vb" : "8va";
              } else if (otype === "down") {
                activeOttavaImportShift[key] = -1;
                pendingOttavaMarkerForNext[key] = placement === "above" ? "8va" : "8vb";
              } else if (otype === "stop") {
                activeOttavaImportShift[key] = 0;
                var ref = lastNoteForOttavaEnd[key];
                if (ref) ref.ottavaEnd = true;
              }
            }
            continue;
          }
          if (el.tagName !== "note") continue;
          var isChordMember = !!el.querySelector(":scope > chord");
          var staffNum = parseInt(((_h2 = el.querySelector(":scope > staff")) == null ? void 0 : _h2.textContent) || "1");
          var voice = parseInt(((_i2 = el.querySelector(":scope > voice")) == null ? void 0 : _i2.textContent) || "1");
          var _noteDur = parseInt(((_j2 = el.querySelector(":scope > duration")) == null ? void 0 : _j2.textContent) || "0");
          var _noteStartDiv = isChordMember ? Math.max(0, _cursorDiv - _noteDur) : _cursorDiv;
          var _startBeat = divisions > 0 ? _noteStartDiv / divisions : 0;
          if (!isChordMember) _cursorDiv += _noteDur;
          var staff;
          if (isGrand) {
            staff = staffNum === 1 ? "treble" : "bass";
          } else {
            staff = meta.signs[0] === "F" ? "bass" : "treble";
          }
          if (isChordMember) {
            var cName = "C", cOctave = 4, cAcc = "none", cDrumPiece;
            var cPitch = el.querySelector(":scope > pitch");
            if (cPitch) {
              cName = ((_k = cPitch.querySelector("step")) == null ? void 0 : _k.textContent.trim()) || "C";
              {
                var _o = parseInt((_l = cPitch.querySelector("octave")) == null ? void 0 : _l.textContent);
                cOctave = Number.isFinite(_o) ? _o : 4;
              }
              var _cOttava = activeOttavaImportShift[`${partIdx}-${staffNum}`] || 0;
              if (_cOttava) cOctave += _cOttava;
              cAcc = readPrintedAccidental(el);
            } else {
              var cUnp = el.querySelector(":scope > unpitched");
              if (cUnp) {
                cName = ((_m3 = cUnp.querySelector("display-step")) == null ? void 0 : _m3.textContent.trim()) || "C";
                {
                  var _o = parseInt((_n2 = cUnp.querySelector("display-octave")) == null ? void 0 : _n2.textContent);
                  cOctave = Number.isFinite(_o) ? _o : 4;
                }
              }
            }
            {
              var ie = el.querySelector(":scope > instrument");
              if (ie) {
                var dp = _instById[ie.getAttribute("id")];
                if (dp) cDrumPiece = dp;
              }
            }
            var cTieEls = el.querySelectorAll(":scope > tie, :scope > notations > tied");
            var cTie = false;
            var cTieDir = null;
            for (var t of cTieEls) {
              if (t.getAttribute("type") === "start") {
                cTie = true;
                var placement = t.getAttribute("placement");
                if (placement === "above") cTieDir = "up";
                else if (placement === "below") cTieDir = "down";
                break;
              }
            }
            for (var i = nfNotes.length - 1; i >= 0; i--) {
              var host = nfNotes[i];
              if (host.staff !== staff || host.isRest) continue;
              if (cTie && !cTieDir) {
                cTieDir = _tieDirByStaffPos(cName, cOctave, host.staff);
              }
              var chordMember = { name: cName, octave: cOctave, accidental: cAcc, tie: cTie, ...cDrumPiece ? { drumPiece: cDrumPiece } : {} };
              if (cTie && cTieDir) chordMember.tieDir = cTieDir;
              var chord = [...host.chord || [], chordMember];
              nfNotes[i] = { ...host, chord };
              break;
            }
            continue;
          }
          var restEl = el.querySelector(":scope > rest");
          var isRest = !!restEl;
          var isMeasureRest = isRest && restEl.getAttribute("measure") === "yes";
          var type = ((_o2 = el.querySelector(":scope > type")) == null ? void 0 : _o2.textContent) || (isMeasureRest ? "whole" : "quarter");
          var dotEls = el.querySelectorAll(":scope > dot");
          var dotted = dotEls.length >= 1;
          var doubleDotted = dotEls.length >= 2;
          var triplet = false;
          var timeMod = el.querySelector(":scope > time-modification");
          if (timeMod) {
            var actual = parseInt(((_p = timeMod.querySelector("actual-notes")) == null ? void 0 : _p.textContent) || "0");
            var normal = parseInt(((_q = timeMod.querySelector("normal-notes")) == null ? void 0 : _q.textContent) || "0");
            if (actual === 3 && normal === 2) triplet = true;
          }
          var durMap = {
            "whole": "whole",
            "half": "half",
            "quarter": "quarter",
            "eighth": "eighth",
            "16th": "sixteenth",
            "32nd": "thirty-second",
            "64th": "thirty-second",
            "breve": "whole"
          };
          var duration = durMap[type] || "quarter";
          var name = "B", octave = 4, accidental = "none";
          var drumPiece;
          if (!isRest) {
            var pitch = el.querySelector(":scope > pitch");
            if (pitch) {
              name = ((_r = pitch.querySelector("step")) == null ? void 0 : _r.textContent.trim()) || "C";
              {
                var _o = parseInt((_s = pitch.querySelector("octave")) == null ? void 0 : _s.textContent);
                octave = Number.isFinite(_o) ? _o : 4;
              }
              var _ottavaImportShift = activeOttavaImportShift[`${partIdx}-${staffNum}`] || 0;
              if (_ottavaImportShift) octave += _ottavaImportShift;
              accidental = readPrintedAccidental(el);
            } else {
              var unp = el.querySelector(":scope > unpitched");
              if (unp) {
                name = ((_t = unp.querySelector("display-step")) == null ? void 0 : _t.textContent.trim()) || "C";
                {
                  var _o = parseInt((_u = unp.querySelector("display-octave")) == null ? void 0 : _u.textContent);
                  octave = Number.isFinite(_o) ? _o : 4;
                }
              }
            }
            var instEl = el.querySelector(":scope > instrument");
            if (instEl) {
              var dp = _instById[instEl.getAttribute("id")];
              if (dp) drumPiece = dp;
            }
          }
          var tieEls = el.querySelectorAll(":scope > tie, :scope > notations > tied");
          var tie = false;
          var tieDir = null;
          for (var t of tieEls) {
            if (t.getAttribute("type") === "start") {
              tie = true;
              var placement = t.getAttribute("placement");
              if (placement === "above") tieDir = "up";
              else if (placement === "below") tieDir = "down";
              break;
            }
          }
          if (tie && !tieDir) {
            tieDir = _tieDirByStaffPos(name, octave, staff);
          }
          var staccato = !!el.querySelector(":scope > notations > articulations > staccato");
          var lyricEls = el.querySelectorAll(":scope > lyric");
          var lyric = "";
          var verses = null;
          if (lyricEls.length) {
            var byVerse = {};
            for (var ly of lyricEls) {
              var num2 = parseInt(ly.getAttribute("number") || "1");
              var idx = Math.max(0, num2 - 1);
              var s = "";
              var pendingSyllabic = null;
              for (var c of Array.from(ly.children)) {
                if (c.tagName === "syllabic") {
                  pendingSyllabic = (c.textContent || "").trim();
                } else if (c.tagName === "text") {
                  var piece = c.textContent || "";
                  if (pendingSyllabic === "begin" || pendingSyllabic === "middle") piece += "-";
                  s += piece;
                  pendingSyllabic = null;
                } else if (c.tagName === "elision") {
                  s += "\u203F";
                }
              }
              byVerse[idx] = s;
            }
            var maxIdx = Math.max(...Object.keys(byVerse).map(Number));
            var arr = [];
            for (var i = 0; i <= maxIdx; i++) arr.push(byVerse[i] || "");
            lyric = arr[0] || "";
            if (arr.length > 1) verses = arr;
          }
          if (staff === "bass") {
            lyric = "";
            verses = null;
          }
          var stemEl = el.querySelector(":scope > stem");
          var stemTxt = stemEl ? (stemEl.textContent || "").trim() : "";
          var stem = stemTxt === "up" || stemTxt === "down" ? stemTxt : void 0;
          var graceEl = el.querySelector(":scope > grace");
          var grace = !!graceEl;
          var graceType = grace ? graceEl.getAttribute("slash") === "no" ? "appoggiatura" : "acciaccatura" : void 0;
          var _ottavaSpanKey = `${partIdx}-${staffNum}`;
          var _markerForThis = pendingOttavaMarkerForNext[_ottavaSpanKey];
          if (_markerForThis && !isChordMember) {
            delete pendingOttavaMarkerForNext[_ottavaSpanKey];
          }
          var _pushed = {
            id: idCounter++,
            x: 80,
            name,
            octave,
            duration,
            dotted,
            triplet,
            accidental,
            isRest,
            staff,
            lyric,
            ...drumPiece ? { drumPiece } : {},
            ...verses ? { verses } : {},
            ...stem ? { stem } : {},
            ...grace ? { grace: true, graceType } : {},
            ...doubleDotted ? { doubleDotted: true } : {},
            ...staccato ? { staccato: true } : {},
            ..._markerForThis && !isChordMember ? { ottava: _markerForThis } : {},
            tie,
            ...tie && tieDir ? { tieDir } : {},
            voice,
            startBeat: _startBeat
          };
          nfNotes.push(_pushed);
          if (!isChordMember && !isRest) lastNoteForOttavaEnd[_ottavaSpanKey] = _pushed;
        }
      });
      if (mi === 0 && nfNotes.length > 0) {
        var capacity = parsedTimeSig.top * 4 / parsedTimeSig.bottom;
        var staves = Array.from(new Set(nfNotes.map((n) => n.staff)));
        var pickupBeats = 0;
        for (var st of staves) {
          var inStaff = nfNotes.filter((n) => n.staff === st);
          var used = inStaff.reduce((s, n) => s + noteBeats(n), 0);
          if (used > pickupBeats) pickupBeats = used;
        }
        if (pickupBeats > 0 && pickupBeats < capacity - 0.01) {
          measureProps.pickup = true;
          measureProps.pickupBeats = pickupBeats;
          var collapsed = [];
          for (var st of staves) {
            var inStaff = nfNotes.filter((n) => n.staff === st);
            if (inStaff.every((n) => n.isRest)) {
              collapsed.push({
                id: idCounter++,
                x: 80,
                name: "B",
                octave: 4,
                duration: "whole",
                dotted: false,
                triplet: false,
                accidental: "none",
                isRest: true,
                staff: st,
                lyric: ""
              });
            } else {
              collapsed.push(...inStaff);
            }
          }
          nfNotes.length = 0;
          nfNotes.push(...collapsed);
        }
      }
      outMeasures.push({ ...measureProps, notes: nfNotes });
    }
    var clef2 = "treble";
    if (isGrand) {
      var allBass = Array.from(allClefs).every((s) => s === "F");
      clef2 = allBass ? "grandBass" : "grand";
    } else if (partMeta[0].signs[0] === "F") clef2 = "bass";
    else if (partMeta[0].signs[0] === "percussion") clef2 = "drum";
    return {
      title: title2,
      composer: composer2,
      bpm: Math.round(parsedBpm),
      keySig: songKeySig,
      songKey: songKeySig,
      timeSig: parsedTimeSig,
      difficulty: 3,
      clef: clef2,
      measures: outMeasures,
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      published: false
    };
  }, []);
  var importMusicXML = useCallback(async (file) => {
    var _a2;
    try {
      var xmlText;
      var name = file.name.toLowerCase();
      if (name.endsWith(".mxl")) {
        await ensureJSZip();
        if (!window.JSZip) throw new Error("JSZip failed to load (check network)");
        var zip = await window.JSZip.loadAsync(file);
        var mainPath = null;
        var containerFile = zip.file("META-INF/container.xml");
        if (containerFile) {
          var containerXml = await containerFile.async("string");
          var containerDoc = new DOMParser().parseFromString(containerXml, "text/xml");
          mainPath = (_a2 = containerDoc.querySelector("rootfile")) == null ? void 0 : _a2.getAttribute("full-path");
        }
        if (!mainPath) {
          mainPath = Object.keys(zip.files).find((n) => (n.endsWith(".xml") || n.endsWith(".musicxml")) && !n.startsWith("META-INF/"));
        }
        if (!mainPath) throw new Error("No MusicXML file found inside .mxl archive");
        xmlText = await zip.file(mainPath).async("string");
      } else {
        xmlText = await file.text();
      }
      var doc = new DOMParser().parseFromString(xmlText, "text/xml");
      if (doc.querySelector("parsererror")) throw new Error("MusicXML is malformed");
      var song = parseMusicXMLDoc(doc);
      if (isJamsMode) {
        loadSongData(song);
        try {
          localStorage.setItem("rapmusic.jamsLastSong", JSON.stringify(song));
        } catch (e) {
        }
        setSaveConfirm(`Loaded "${song.title}"`);
        setTimeout(() => setSaveConfirm(""), 2500);
        return;
      }
      var existing = await window.rapmusicAPI.listSongs();
      var taken = new Set(existing.map((s) => s.title));
      if (taken.has(song.title)) {
        var suffix = 2;
        while (taken.has(`${song.title} (${suffix})`)) suffix++;
        song.title = `${song.title} (${suffix})`;
      }
      await window.rapmusicAPI.saveSong(song);
      await refreshLibrary();
      loadSongData(song);
      setSaveConfirm(`Imported "${song.title}"`);
      setTimeout(() => setSaveConfirm(""), 2500);
    } catch (err) {
      console.error("MusicXML import failed:", err);
      alert(`Import failed: ${err.message}`);
    }
  }, [parseMusicXMLDoc, loadSongData, refreshLibrary, isJamsMode]);
  var importMidi = useCallback(async (file) => {
    try {
      await ensureMidi();
      if (!window.Midi) throw new Error("MIDI library failed to load (check network)");
      var buf = await file.arrayBuffer();
      var midi = new window.Midi(buf);
      var song = midiToSong(midi, file.name);
      if (isJamsMode) {
        loadSongData(song);
        try {
          localStorage.setItem("rapmusic.jamsLastSong", JSON.stringify(song));
        } catch (e) {
        }
        setSaveConfirm(`Loaded "${song.title}"`);
        setTimeout(() => setSaveConfirm(""), 2500);
        return;
      }
      var existing = await window.rapmusicAPI.listSongs();
      var taken = new Set(existing.map((s) => s.title));
      if (taken.has(song.title)) {
        var suffix = 2;
        while (taken.has(`${song.title} (${suffix})`)) suffix++;
        song.title = `${song.title} (${suffix})`;
      }
      await window.rapmusicAPI.saveSong(song);
      await refreshLibrary();
      loadSongData(song);
      setSaveConfirm(`Imported "${song.title}"`);
      setTimeout(() => setSaveConfirm(""), 2500);
    } catch (err) {
      console.error("MIDI import failed:", err);
      alert(`Import failed: ${err.message}`);
    }
  }, [loadSongData, refreshLibrary, isJamsMode]);
  var importFile = useCallback((file) => {
    if (!file) return;
    var name = (file.name || "").toLowerCase();
    if (name.endsWith(".mid") || name.endsWith(".midi")) return importMidi(file);
    return importMusicXML(file);
  }, [importMidi, importMusicXML]);
  useEffect(() => {
    if (!isJamsMode) return;
    var onDragOver = (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
    };
    var onDrop = (e) => {
      e.preventDefault();
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) importFile(f);
    };
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", onDrop);
    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDrop);
    };
  }, [isJamsMode, importFile]);
  var xmlImportInputRef = useRef(null);
  var confirmSaveAs = useCallback(async () => {
    if (!saveAsName.trim()) return;
    var name = saveAsName.trim();
    setTitle(name);
    setSavedTitle(name);
    setCurrentSongId(name);
    setShowSaveAs(false);
    var song = {
      title: name,
      composer,
      bpm,
      tempoName,
      keySig,
      songKey,
      timeSig,
      difficulty,
      clef,
      measures,
      folder: saveAsFolder || null,
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (_currentInstrument) song.instrument = _currentInstrument;
    await window.rapmusicAPI.saveSong(song);
    loadedFolderRef.current = saveAsFolder || "";
    loadedFromRef.current = name.replace(/[\/\\:*?"<>|]/g, "_") + ".json";
    loadedBookOrderRef.current = null;
    await window.rapmusicAPI.saveState({ lastSong: name });
    await refreshLibrary();
    setSaveConfirm("Saved!");
    setTimeout(() => setSaveConfirm(""), 2e3);
  }, [saveAsName, saveAsFolder, composer, bpm, tempoName, keySig, songKey, timeSig, difficulty, clef, measures, refreshLibrary]);
  var loadFromLibrary = useCallback(async (song) => {
    if (hasUnsavedChanges) {
      if (!window.confirm("You have unsaved changes. Load this song anyway?")) {
        return;
      }
    }
    if (isPlayingRef.current) {
      playTimeoutRef.current.forEach(clearTimeout);
      playTimeoutRef.current = [];
      setIsPlaying(false);
      isPlayingRef.current = false;
      setIsPaused(false);
      setPlayingIdx({ measure: -1, note: -1 });
      setPlayingNotes({});
      setMetronomeBeat(-1);
      playStartTimeRef.current = null;
      playBpmRef.current = null;
      if (synthRef.current) {
        try {
          synthRef.current.dispose();
        } catch (e) {
        }
      }
    }
    if (metronomeOn) {
      setMetronomeOn(false);
    }
    if (metronomeRef.current) {
      clearInterval(metronomeRef.current);
      metronomeRef.current = null;
    }
    if (metronomeTickRef.current) {
      try {
        metronomeTickRef.current.synth.dispose();
      } catch (e) {
      }
      metronomeTickRef.current = null;
    }
    if (metroClickSynthRef.current) {
      try {
        metroClickSynthRef.current.dispose();
      } catch (e) {
      }
      metroClickSynthRef.current = null;
    }
    setMetronomeBeat(-1);
    var full = song;
    if (!Array.isArray(song == null ? void 0 : song.measures) && (song == null ? void 0 : song._filename)) {
      try {
        var r = await fetch("/api/songs/" + encodeURIComponent(song._filename));
        if (r.ok) full = await r.json();
      } catch (e) {
      }
    }
    loadSongData(full);
    undoStackRef.current = [];
    redoStackRef.current = [];
    setShowLibrary(false);
    window.rapmusicAPI.saveState({ lastSong: song.title });
  }, [loadSongData, hasUnsavedChanges]);
  var deleteFromLibrary = useCallback(async (song) => {
    if (!confirm(`Move "${song.title}" to trash?`)) return;
    await window.rapmusicAPI.deleteSong(song._filename);
    await refreshLibrary();
    if (currentSongId === song.title) setCurrentSongId(null);
  }, [refreshLibrary, currentSongId]);
  var computeTransposedMeasures = useCallback((srcMeasures, srcKeySig, newKey, shift) => {
    var _a2, _b2;
    var curKs = KEY_SIGNATURES.find((k) => k.id === srcKeySig);
    var curSharps = new Set(curKs ? curKs.sharps : []);
    var curFlats = new Set(curKs ? curKs.flats : []);
    var matchedKs = KEY_SIGNATURES.find((k) => k.id === newKey);
    var sigSharps = new Set(matchedKs ? matchedKs.sharps : []);
    var sigFlats = new Set(matchedKs ? matchedKs.flats : []);
    var srcTonicIdx = (_a2 = LETTER_IDX[srcKeySig[0]]) != null ? _a2 : 0;
    var tgtTonicIdx = (_b2 = LETTER_IDX[newKey[0]]) != null ? _b2 : 0;
    var letterDelta = ((tgtTonicIdx - srcTonicIdx) % 7 + 7) % 7;
    var defaultSpell = SHARP_KEYS_SET.has(newKey) ? SHARP_SPELL : FLAT_SPELL;
    var transposePitch = (name, octave, accidental) => {
      var accDelta = ACC_DELTA[accidental] || 0;
      if (accidental === "none" || accidental == null) {
        if (curSharps.has(name)) accDelta = 1;
        else if (curFlats.has(name)) accDelta = -1;
      }
      var srcMidi = octave * 12 + LETTER_SEMI[name] + accDelta;
      var tgtMidi = srcMidi + shift;
      var tgtLetterIdx = (LETTER_IDX[name] + letterDelta) % 7;
      var tgtLetter = IDX_TO_LETTER[tgtLetterIdx];
      var tgtOctave = Math.floor((tgtMidi - LETTER_SEMI[tgtLetter] + 6) / 12);
      var tgtAcc = tgtMidi - tgtOctave * 12 - LETTER_SEMI[tgtLetter];
      if (tgtAcc > 2 || tgtAcc < -2) {
        var tgtPc = (tgtMidi % 12 + 12) % 12;
        var [altLetter, altSym] = defaultSpell[tgtPc];
        tgtLetter = altLetter;
        tgtOctave = Math.floor((tgtMidi - LETTER_SEMI[tgtLetter] + 6) / 12);
        tgtAcc = altSym === "#" ? 1 : altSym === "b" ? -1 : 0;
      }
      var acc = tgtAcc === 2 ? "double-sharp" : tgtAcc === 1 ? "sharp" : tgtAcc === -1 ? "flat" : tgtAcc === -2 ? "double-flat" : "none";
      var sourceWasExplicit = accidental === "sharp" || accidental === "flat" || accidental === "natural" || accidental === "double-sharp" || accidental === "double-flat";
      if (sourceWasExplicit) {
        if (tgtAcc === 0) acc = "natural";
      } else {
        if (acc === "sharp" && sigSharps.has(tgtLetter)) acc = "none";
        else if (acc === "flat" && sigFlats.has(tgtLetter)) acc = "none";
        else if (acc === "none" && (sigSharps.has(tgtLetter) || sigFlats.has(tgtLetter))) acc = "natural";
      }
      return { name: tgtLetter, octave: tgtOctave, accidental: acc };
    };
    var _semiOf = (acc) => acc === "sharp" ? 1 : acc === "flat" ? -1 : acc === "natural" ? 0 : acc === "double-sharp" ? 2 : acc === "double-flat" ? -2 : null;
    var _accForOffset = (off) => off === 1 ? "sharp" : off === -1 ? "flat" : off === 0 ? "natural" : off === 2 ? "double-sharp" : off === -2 ? "double-flat" : "natural";
    var _keySigOffset = (letter) => sigSharps.has(letter) ? 1 : sigFlats.has(letter) ? -1 : 0;
    return srcMeasures.map((m) => {
      var _measureAcc = { treble: {}, bass: {} };
      var _processed = m.notes.map((n) => {
        var _a3;
        if (n.isRest) return n;
        var _srcDelta = ACC_DELTA[n.accidental] || 0;
        if (n.accidental === "none" || n.accidental == null) {
          if (curSharps.has(n.name)) _srcDelta = 1;
          else if (curFlats.has(n.name)) _srcDelta = -1;
        }
        var desiredMidi = n.octave * 12 + LETTER_SEMI[n.name] + _srcDelta + shift;
        var t = transposePitch(n.name, n.octave, n.accidental);
        var _staffKey = n.staff === "bass" ? "bass" : "treble";
        var _byLetter = _measureAcc[_staffKey];
        var _key = `${t.name}${t.octave}`;
        var effOffset;
        if (t.accidental && t.accidental !== "none") {
          effOffset = _semiOf(t.accidental);
        } else if (_byLetter[_key] !== void 0) {
          effOffset = _byLetter[_key];
        } else {
          effOffset = _keySigOffset(t.name);
        }
        var effMidi = t.octave * 12 + LETTER_SEMI[t.name] + effOffset;
        var finalAcc = t.accidental;
        if (effMidi !== desiredMidi) {
          var wantOffset = desiredMidi - (t.octave * 12 + LETTER_SEMI[t.name]);
          finalAcc = _accForOffset(wantOffset);
        }
        if (finalAcc && finalAcc !== "none") {
          _byLetter[_key] = (_a3 = _semiOf(finalAcc)) != null ? _a3 : 0;
        }
        var out = { ...n, name: t.name, octave: t.octave, accidental: finalAcc };
        if (Array.isArray(n.chord) && n.chord.length > 0) {
          out.chord = n.chord.map((c) => {
            var ct = transposePitch(c.name, c.octave, c.accidental);
            return { ...c, name: ct.name, octave: ct.octave, accidental: ct.accidental };
          });
        }
        return out;
      });
      return { ...m, notes: _processed };
    });
  }, []);
  var applyTransposition = useCallback((newKey, shift) => {
    var newMeasures = computeTransposedMeasures(measures, keySig, newKey, shift);
    var matchedKs = KEY_SIGNATURES.find((k) => k.id === newKey);
    setMeasures(newMeasures);
    setSongKey(newKey);
    if (matchedKs) setKeySig(newKey);
    setTransposeOffset((prev) => prev + shift);
  }, [measures, keySig, computeTransposedMeasures]);
  var stopPlaybackForTranspose = () => {
    setPressedPianoKeys({});
    if (!isPlayingRef.current) return;
    playTimeoutRef.current.forEach(clearTimeout);
    playTimeoutRef.current = [];
    setIsPlaying(false);
    isPlayingRef.current = false;
    setIsPaused(false);
    setPlayingIdx({ measure: -1, note: -1 });
    setPlayingNotes({});
    setMetronomeBeat(-1);
    if (synthRef.current) {
      try {
        synthRef.current.dispose();
      } catch (e) {
      }
    }
  };
  var transposeRange = useMemo(() => {
    var A1_MIDI = 33, C8_MIDI = 108;
    var PC_TO_MIDI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
    var minMidi = Infinity, maxMidi = -Infinity;
    (measures || []).forEach((m, mi) => (m.notes || []).forEach((n, ni) => {
      if (n.isRest) return;
      var effKS = effectiveKeySig(measures, mi, keySig);
      var resolve = (p2, ci) => p2.accidental && p2.accidental !== "none" ? p2.accidental : effectiveAccidentalInMeasure(measures, mi, ni, ci, p2.name, p2.octave);
      var pitches = [{ name: n.name, octave: n.octave, accidental: resolve(n, void 0) }];
      if (Array.isArray(n.chord)) {
        n.chord.forEach((c, ci) => pitches.push({ name: c.name, octave: c.octave, accidental: resolve(c, ci) }));
      }
      for (var p of pitches) {
        var pk = pitchToPianoKey(p.name, p.octave, p.accidental, effKS);
        var parsed = pk.match(/^([A-G])(#?)(-?\d+)$/);
        if (!parsed) continue;
        var midi = (parseInt(parsed[3], 10) + 1) * 12 + PC_TO_MIDI[parsed[1]] + (parsed[2] === "#" ? 1 : 0);
        if (midi < minMidi) minMidi = midi;
        if (midi > maxMidi) maxMidi = midi;
      }
    }));
    if (minMidi === Infinity) return { canShiftBy: () => true, canShiftDown: true, canShiftUp: true };
    return {
      canShiftBy: (semi) => minMidi + semi >= A1_MIDI && maxMidi + semi <= C8_MIDI,
      canShiftDown: minMidi > A1_MIDI,
      canShiftUp: maxMidi < C8_MIDI
    };
  }, [measures, keySig]);
  var transposeTo = useCallback(async (newKey) => {
    var _a2, _b2;
    if (!newKey || newKey === songKey) return;
    var srcTonic = (_a2 = KEY_TONIC[songKey]) != null ? _a2 : 0;
    var tgtTonic = (_b2 = KEY_TONIC[newKey]) != null ? _b2 : 0;
    var shift = ((tgtTonic - srcTonic) % 12 + 12) % 12;
    if (shift > 6) shift -= 12;
    else if (shift === 6 && tgtTonic < srcTonic) shift = -6;
    if (!transposeRange.canShiftBy(shift)) return;
    stopPlaybackForTranspose();
    var newMeasures = computeTransposedMeasures(measures, keySig, newKey, shift);
    var matchedKs = KEY_SIGNATURES.find((k) => k.id === newKey);
    var newKeyLabel = KEY_LABEL[newKey] || newKey;
    var baseTitle = `${title} (${newKeyLabel})`;
    var existing = await window.rapmusicAPI.listSongs();
    var taken = new Set((existing || []).map((s) => s.title));
    var newTitle = baseTitle;
    if (taken.has(newTitle)) {
      var suffix = 2;
      while (taken.has(`${baseTitle} (${suffix})`)) suffix++;
      newTitle = `${baseTitle} (${suffix})`;
    }
    var newSong = {
      title: newTitle,
      composer,
      bpm,
      tempoName,
      keySig: matchedKs ? newKey : keySig,
      songKey: newKey,
      timeSig,
      difficulty,
      clef,
      measures: newMeasures,
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await window.rapmusicAPI.saveSong(newSong);
    await refreshLibrary();
    loadSongData(newSong);
    setSaveConfirm(`Saved as "${newTitle}"`);
    setTimeout(() => setSaveConfirm(""), 2500);
  }, [songKey, title, composer, bpm, tempoName, keySig, timeSig, difficulty, clef, measures, transposeRange, computeTransposedMeasures, loadSongData, refreshLibrary]);
  var shiftKey = useCallback((delta) => {
    var _a2;
    if (!transposeRange.canShiftBy(delta)) return;
    stopPlaybackForTranspose();
    var curTonic = (_a2 = KEY_TONIC[songKey]) != null ? _a2 : 0;
    var newTonic = ((curTonic + delta) % 12 + 12) % 12;
    var row = delta >= 0 ? CHROMATIC_SHARP : CHROMATIC_FLAT;
    applyTransposition(row[newTonic], delta);
  }, [songKey, applyTransposition, transposeRange]);
  var normalizeKeyInput = (input) => {
    var s = (input || "").trim().replace(/♯/g, "#").replace(/♭/g, "b");
    if (!s) return null;
    s = s[0].toUpperCase() + s.slice(1);
    return s in KEY_TONIC ? s : null;
  };
  var commitKeyInput = useCallback(() => {
    var k = normalizeKeyInput(keyInput);
    if (k && k !== songKey) transposeTo(k);
    else setKeyInput(KEY_LABEL[songKey] || songKey);
  }, [keyInput, songKey, transposeTo]);
  useEffect(() => {
    setKeyInput(KEY_LABEL[songKey] || songKey);
  }, [songKey]);
  var changeKeySig = useCallback((newSig) => {
    if (!newSig || newSig === keySig) return;
    var oldKs = KEY_SIGNATURES.find((k) => k.id === keySig);
    var newKs = KEY_SIGNATURES.find((k) => k.id === newSig);
    if (!oldKs || !newKs) return;
    var implOf = (ks, letter) => ks.sharps.includes(letter) ? 1 : ks.flats.includes(letter) ? -1 : 0;
    setMeasures((prev) => prev.map((m) => ({
      ...m,
      notes: m.notes.map((n) => {
        if (n.isRest) return n;
        var curAlter;
        if (n.accidental === "sharp") curAlter = 1;
        else if (n.accidental === "flat") curAlter = -1;
        else if (n.accidental === "natural") curAlter = 0;
        else curAlter = implOf(oldKs, n.name);
        var newImp = implOf(newKs, n.name);
        var newAcc;
        if (curAlter === newImp) newAcc = "none";
        else if (curAlter === 1) newAcc = "sharp";
        else if (curAlter === -1) newAcc = "flat";
        else newAcc = "natural";
        return { ...n, accidental: newAcc };
      })
    })));
    setKeySig(newSig);
  }, [keySig]);
  var shiftKeySig = useCallback((delta) => {
    var i = KEY_SIG_ORDER.indexOf(keySig);
    if (i < 0) return;
    var next = KEY_SIG_ORDER[Math.max(0, Math.min(KEY_SIG_ORDER.length - 1, i + delta))];
    if (next !== keySig) changeKeySig(next);
  }, [keySig, changeKeySig]);
  var normalizeKeySigInput = (input) => {
    var s = (input || "").trim().replace(/♯/g, "#").replace(/♭/g, "b");
    if (!s) return null;
    s = s[0].toUpperCase() + s.slice(1);
    return KEY_SIGNATURES.some((ks) => ks.id === s) ? s : null;
  };
  var commitKeySigInput = useCallback(() => {
    var k = normalizeKeySigInput(keySigInput);
    if (k && k !== keySig) changeKeySig(k);
    else setKeySigInput(KEY_LABEL[keySig] || keySig);
  }, [keySigInput, keySig, changeKeySig]);
  useEffect(() => {
    setKeySigInput(KEY_LABEL[keySig] || keySig);
  }, [keySig]);
  var newScore = useCallback(() => {
    setMeasures([{ notes: [] }, { notes: [] }, { notes: [] }, { notes: [] }]);
    setTitle("Untitled Score");
    setComposer("");
    setBpm(60);
    setTempoName("");
    setKeySig("C");
    setSongKey("C");
    setTimeSig({ top: 4, bottom: 4 });
    setDifficulty(0);
    isPublishedRef.current = false;
    setIsPublished(false);
    loadedFromRef.current = null;
    setCurrentSongId(null);
    setSelectedNote(null);
    setSelectedNotes([]);
    setSavedTitle(null);
    setShowLibrary(false);
    undoStackRef.current = [];
    redoStackRef.current = [];
    setTimeout(() => {
      if (scoreAreaRef.current) {
        scoreAreaRef.current.scrollTo(0, 0);
      }
    }, 100);
  }, []);
  var [showPinPrompt, setShowPinPrompt] = useState(false);
  var [pinInput, setPinInput] = useState("");
  var [pinError, setPinError] = useState("");
  var handleLockTap = useCallback(() => {
    if (window.__RPM_READONLY__ !== false) return;
    if (!childLock) {
      setChildLock(true);
    } else if (isLoggedIn) {
      setChildLock(false);
    } else {
      setPinInput("");
      setPinError("");
      setShowPinPrompt(true);
    }
  }, [childLock, isLoggedIn]);
  var handlePinSubmit = useCallback(async () => {
    try {
      var res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password: pinInput })
      });
      var data = await res.json();
      if (data.ok) {
        setIsLoggedIn(true);
        setChildLock(false);
        setShowPinPrompt(false);
        setPinInput("");
        setPinError("");
      } else {
        setPinError("Wrong password");
        setPinInput("");
      }
    } catch (e) {
      setPinError("Error logging in");
      setPinInput("");
    }
  }, [pinInput]);
  useEffect(() => {
    return () => {
      playTimeoutRef.current.forEach(clearTimeout);
      if (synthRef.current) synthRef.current.dispose();
      if (metronomeRef.current) clearInterval(metronomeRef.current);
      if (metronomeTickRef.current) {
        try {
          metronomeTickRef.current.synth.dispose();
        } catch (e) {
        }
      }
    };
  }, []);
  var speakBeat = useCallback((text) => {
    return;
  }, []);
  var _makeMetronomeSoundPlayer = useCallback((sound) => {
    var synth, play;
    if (sound === "cowbell") {
      synth = new Tone.MetalSynth({
        frequency: 800,
        envelope: { attack: 1e-3, decay: 0.2, release: 0.05 },
        harmonicity: 3.1,
        modulationIndex: 16,
        resonance: 4e3,
        octaves: 0.5
      }).toDestination();
      synth.volume.value = -16;
      play = (t) => synth.triggerAttackRelease(t === 0 ? "G5" : "G4", "16n");
    } else if (sound === "woodblock") {
      synth = new Tone.MembraneSynth({
        pitchDecay: 5e-4,
        octaves: 1,
        envelope: { attack: 1e-3, decay: 0.05, sustain: 0, release: 0.02 }
      }).toDestination();
      synth.volume.value = -6;
      play = (t) => synth.triggerAttackRelease(t === 0 ? "A6" : "F6", "32n");
    } else if (sound === "hihat") {
      var closedSynth = new Tone.MetalSynth({
        harmonicity: 5.1,
        modulationIndex: 32,
        resonance: 7e3,
        octaves: 1.5,
        envelope: { attack: 1e-3, decay: 0.06, release: 0.02 }
      }).toDestination();
      closedSynth.volume.value = 6;
      var openPlayer = new Tone.Player({ url: "/public/open-hihat.wav", autostart: false }).toDestination();
      openPlayer.volume.value = 0;
      synth = { dispose: () => {
        closedSynth.dispose();
        openPlayer.dispose();
      } };
      play = (t, totalTicks) => {
        var isLastTick = t === totalTicks - 1;
        if (isLastTick) {
          if (openPlayer.loaded) {
            try {
              openPlayer.stop();
              openPlayer.start();
            } catch (e) {
            }
          }
        } else {
          closedSynth.triggerAttackRelease("F#5", "32n");
        }
      };
    } else {
      synth = new Tone.MembraneSynth({
        pitchDecay: 8e-3,
        octaves: 2,
        envelope: { attack: 1e-3, decay: 0.15, sustain: 0, release: 0.05 }
      }).toDestination();
      synth.volume.value = -6;
      play = (t) => synth.triggerAttackRelease(t === 0 ? "C5" : "C4", "32n");
    }
    return { synth, play, sound };
  }, []);
  useEffect(() => {
    if (sliderActiveRef.current) return;
    if (isPaused) {
      if (metronomeRef.current) {
        clearInterval(metronomeRef.current);
        metronomeRef.current = null;
      }
      return;
    }
    var _modeSubdiv = (m) => m === "click_sixteenth" ? 4 : m === "voice_eighth" || m === "click_eighth" ? 2 : 1;
    var _isClickMode = (m) => m === "click" || m === "click_eighth" || m === "click_sixteenth";
    if (metronomeOn) {
      if (isPlaying && playStartTimeRef.current) {
        var beatDuration = 60 / bpm;
        var _sub = _modeSubdiv(metronomeMode);
        var interval = beatDuration * 1e3 / _sub;
        var totalTicks = pulseBeatsPerMeasure(timeSig) * _sub;
        if (metronomeTickRef.current && metronomeTickRef.current.sound !== metronomeSound) {
          try {
            metronomeTickRef.current.synth.dispose();
          } catch (e) {
          }
          metronomeTickRef.current = null;
        }
        var clickPlayer = metronomeTickRef.current || null;
        if (_isClickMode(metronomeMode) && !clickPlayer) {
          (async () => {
            await Tone.start();
            if (!metronomeTickRef.current) {
              metronomeTickRef.current = _makeMetronomeSoundPlayer(metronomeSound);
            }
            clickPlayer = metronomeTickRef.current;
          })();
        }
        var playTick = (t) => {
          var _s = _modeSubdiv(metronomeMode);
          setMetronomeBeat(Math.floor(t / _s));
          var player = clickPlayer || metronomeTickRef.current;
          if (_isClickMode(metronomeMode) && player) {
            player.play(t, totalTicks, _s);
          } else if (metronomeMode === "voice_eighth") {
            speakBeat(t % 2 === 0 ? Math.floor(t / 2) + 1 : "and");
          } else if (metronomeMode === "voice") {
            speakBeat(t + 1);
          }
        };
        var _pulsesPerMeasure = pulseBeatsPerMeasure(timeSig);
        var _qPerPulse = beatsPerMeasure > 0 && _pulsesPerMeasure > 0 ? beatsPerMeasure / _pulsesPerMeasure : 1;
        var _initialPulseOffset = (metronomeStartBeatOffsetRef.current || 0) / _qPerPulse;
        var _startMi = dropStartMiRef.current || 0;
        var _firstM = measures && measures[0];
        var _isPickupSong = _firstM && _firstM.pickupBeats > 0 && _firstM.pickupBeats < beatsPerMeasure;
        if (_isPickupSong && _startMi === 0) {
          var _pickupPulses = Math.max(1, Math.round(_firstM.pickupBeats / _qPerPulse));
          _initialPulseOffset += _pulsesPerMeasure - _pickupPulses;
        }
        var elapsed = (performance.now() - playStartTimeRef.current) / 1e3;
        var tickDuration = beatDuration / _sub;
        var trueTick = (elapsed / beatDuration + _initialPulseOffset) * _sub;
        var currentTick = (Math.floor(trueTick) % totalTicks + totalTicks) % totalTicks;
        playTick(currentTick);
        var timeToNext = (Math.floor(trueTick) + 1 - trueTick) * tickDuration * 1e3;
        var tick = currentTick;
        var startMetronome = () => {
          metronomeRef.current = setInterval(() => {
            tick = (tick + 1) % totalTicks;
            playTick(tick);
          }, interval);
        };
        var alignTimeout = setTimeout(() => {
          tick = (currentTick + 1) % totalTicks;
          playTick(tick);
          startMetronome();
        }, timeToNext);
        return () => {
          clearTimeout(alignTimeout);
          if (metronomeRef.current) {
            clearInterval(metronomeRef.current);
            metronomeRef.current = null;
          }
        };
      }
      (async () => {
        var _sub2 = _modeSubdiv(metronomeMode);
        if (metronomeTickRef.current && metronomeTickRef.current.sound !== metronomeSound) {
          try {
            metronomeTickRef.current.synth.dispose();
          } catch (e) {
          }
          metronomeTickRef.current = null;
        }
        if (_isClickMode(metronomeMode)) {
          await Tone.start();
          if (!metronomeTickRef.current) {
            metronomeTickRef.current = _makeMetronomeSoundPlayer(metronomeSound);
          }
        }
        var tick2 = 0;
        var pulses = pulseBeatsPerMeasure(timeSig);
        var totalTicks2 = pulses * _sub2;
        var interval2 = 60 / bpm * 1e3 / _sub2;
        setMetronomeBeat(0);
        var playTick2 = (t) => {
          var beatNum = Math.floor(t / _sub2);
          setMetronomeBeat(beatNum);
          if (_isClickMode(metronomeMode) && metronomeTickRef.current) {
            metronomeTickRef.current.play(t, totalTicks2, _sub2);
          } else if (metronomeMode === "voice_eighth") {
            speakBeat(t % 2 === 0 ? Math.floor(t / 2) + 1 : "and");
          } else if (metronomeMode === "voice") {
            speakBeat(beatNum + 1);
          }
        };
        playTick2(0);
        metronomeRef.current = setInterval(() => {
          tick2 = (tick2 + 1) % totalTicks2;
          playTick2(tick2);
        }, interval2);
      })();
    } else {
      if (metronomeRef.current) {
        clearInterval(metronomeRef.current);
        metronomeRef.current = null;
      }
      if (metronomeTickRef.current) {
        try {
          metronomeTickRef.current.synth.dispose();
        } catch (e) {
        }
        metronomeTickRef.current = null;
      }
      setMetronomeBeat(-1);
    }
    return () => {
      if (metronomeRef.current) {
        clearInterval(metronomeRef.current);
        metronomeRef.current = null;
      }
    };
  }, [metronomeOn, bpm, beatsPerMeasure, metronomeMode, metronomeSound, _makeMetronomeSoundPlayer, speakBeat, isPlaying, isPaused, playRestartTick]);
  var songSubdivisions = useMemo(() => {
    if (!timeSig) return 1;
    var shortestQ = 4;
    for (var m of measures) {
      for (var n of m.notes || []) {
        if (n.grace) continue;
        var d = NOTE_DURATIONS.find((x) => x.id === n.duration);
        if (d && d.beats < shortestQ) shortestQ = d.beats;
      }
    }
    var beatUnitQ = 4 / timeSig.bottom;
    var ratio = beatUnitQ / shortestQ;
    var maxSubdiv = timeSig.bottom === 8 ? 2 : 4;
    if (ratio >= 4) return Math.min(4, maxSubdiv);
    if (ratio >= 2) return Math.min(2, maxSubdiv);
    return 1;
  }, [measures, timeSig]);
  var _songOneOctave = useMemo(() => {
    var ord = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var minV = 9999, maxV = -1;
    for (var m of measures) {
      for (var n of m.notes || []) {
        if (n.isRest || !n.name || n.octave == null) continue;
        var v = (n.octave || 0) * 7 + (ord[n.name] || 0);
        if (v < minV) minV = v;
        if (v > maxV) maxV = v;
        if (Array.isArray(n.chord)) {
          for (var c of n.chord) {
            if (c.name == null || c.octave == null) continue;
            var cv = (c.octave || 0) * 7 + (ord[c.name] || 0);
            if (cv < minV) minV = cv;
            if (cv > maxV) maxV = cv;
          }
        }
      }
    }
    if (maxV < 0) return false;
    var startNote = minV < 14 ? 5 : Math.floor(minV / 7) * 7;
    var endNote = maxV;
    if (endNote - startNote < 7) endNote = startNote + 7;
    var numWhiteKeys = endNote - startNote + 1;
    return numWhiteKeys <= 8;
  }, [measures]);
  useEffect(() => {
    if (isPlaying) setClickedDrop(null);
  }, [isPlaying]);
  useEffect(() => {
    if (playMode !== "practice") return;
    if (!practicePos || practicePos.measure < 0) return;
    var m = measures[practicePos.measure];
    if (!m || !m.notes) return;
    var n = m.notes[practicePos.note];
    if (!n) return;
    var _basePulses = pulseBeatsPerMeasure(timeSig);
    var _subdiv = songSubdivisions;
    var _pulses = _basePulses * _subdiv;
    var _qPerPulse = beatsPerMeasure / _pulses;
    var _playStaff = n.staff || "treble";
    var _acc = 0;
    for (var i = 0; i < practicePos.note; i++) {
      var _ni = m.notes[i];
      if (isMultiStaff(clef) && (_ni.staff || "treble") !== _playStaff) continue;
      _acc += getNoteBeat(_ni);
    }
    var _isPickup = m.pickupBeats > 0 && m.pickupBeats < beatsPerMeasure;
    var _pickupOffset = _isPickup ? _pulses - Math.max(1, Math.round(m.pickupBeats / _qPerPulse)) : 0;
    var _colorIdx = _pickupOffset + Math.floor(_acc / _qPerPulse + 1e-6);
    setClickedDrop({ measure: practicePos.measure, colorIdx: _colorIdx });
  }, [playMode, practicePos.measure, practicePos.note]);
  useEffect(() => {
    if (window.__RPM_NODROPS__) return;
    if (sliderActiveRef.current) return;
    if (isPaused) return;
    if (!isPlaying || !playStartTimeRef.current) {
      setDropPulse(-1);
      setDropMeasure(-1);
      return;
    }
    var _basePulses = pulseBeatsPerMeasure(timeSig);
    var _subdiv = songSubdivisions;
    var _pulses = _basePulses * _subdiv;
    var _qPerPulse = beatsPerMeasure / _pulses;
    var pulseDurMs = quarterSecondsAtBpm(bpm, timeSig) * _qPerPulse * 1e3;
    var firstM = measures[0];
    var isPickupSong = firstM && firstM.pickupBeats > 0 && firstM.pickupBeats < beatsPerMeasure;
    var pickupPulses = isPickupSong ? Math.max(1, Math.round(firstM.pickupBeats / _qPerPulse)) : 0;
    var pickupOffset = isPickupSong ? _pulses - pickupPulses : 0;
    var update = () => {
      if (!playStartTimeRef.current) {
        setDropPulse(-1);
        setDropMeasure(-1);
        return;
      }
      var startBeatOffset = metronomeStartBeatOffsetRef.current || 0;
      var startPulseOffset = Math.floor(startBeatOffset / _qPerPulse + 1e-6);
      var elapsedMs = performance.now() - playStartTimeRef.current;
      var totalPulses = Math.floor(elapsedMs / pulseDurMs) + startPulseOffset;
      var pulseInMeasure;
      var measureIdx;
      var startMi = dropStartMiRef.current || 0;
      if (isPickupSong && startMi === 0 && totalPulses < pickupPulses) {
        pulseInMeasure = pickupOffset + totalPulses;
        measureIdx = 0;
      } else {
        var adjusted = totalPulses - (startMi === 0 ? pickupPulses : 0);
        pulseInMeasure = (adjusted % _pulses + _pulses) % _pulses;
        var baseMi = isPickupSong && startMi === 0 ? 1 : startMi;
        measureIdx = baseMi + Math.floor(adjusted / _pulses);
      }
      setDropPulse(pulseInMeasure);
      setDropMeasure(measureIdx);
    };
    update();
    var rafId = requestAnimationFrame(function tick() {
      if (!playStartTimeRef.current) return;
      update();
      rafId = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (dropPulseIntervalRef.current) {
        clearInterval(dropPulseIntervalRef.current);
        dropPulseIntervalRef.current = null;
      }
    };
  }, [isPlaying, isPaused, bpm, timeSig, beatsPerMeasure, songSubdivisions, playRestartTick]);
  var MEASURES_PER_ROW = Math.max(1, measures.length);
  var numRows = 1;
  var _songDefaultTopClef = clef === "grandBass" || clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble";
  var _songDefaultBottomClef = isMultiStaff(clef) ? "bass" : null;
  var effectiveBottomClefByMi = [];
  var effectiveTopClefByMi = [];
  {
    var _bot = _songDefaultBottomClef;
    var _top = _songDefaultTopClef;
    for (var _i = 0; _i < measures.length; _i++) {
      var _m = measures[_i] || {};
      if (_m.bottomClef === "treble" || _m.bottomClef === "bass") _bot = _m.bottomClef;
      if (_m.topClef === "treble" || _m.topClef === "bass") _top = _m.topClef;
      effectiveBottomClefByMi[_i] = _bot;
      effectiveTopClefByMi[_i] = _top;
    }
  }
  var effClefByNote = [];
  {
    var _bot = _songDefaultBottomClef;
    var _top = _songDefaultTopClef;
    for (var _i = 0; _i < measures.length; _i++) {
      var _m = measures[_i] || {};
      if (_m.bottomClef === "treble" || _m.bottomClef === "bass") _bot = _m.bottomClef;
      if (_m.topClef === "treble" || _m.topClef === "bass") _top = _m.topClef;
      var _ns = _m.notes || [];
      effClefByNote[_i] = [];
      for (var _j = 0; _j < _ns.length; _j++) {
        var _n = _ns[_j];
        var _cb = _n && _n.clefBefore;
        if (_cb === "treble" || _cb === "bass" || _cb === "alto") {
          if (isMultiStaff(clef) && _n.staff === "bass") _bot = _cb;
          else _top = _cb;
        }
        effClefByNote[_i][_j] = { top: _top, bottom: _bot };
      }
    }
  }
  var _effTopAtNote = (mi, ni) => effClefByNote[mi] && effClefByNote[mi][ni] ? effClefByNote[mi][ni].top : effectiveTopClefByMi[mi];
  var _effBotAtNote = (mi, ni) => effClefByNote[mi] && effClefByNote[mi][ni] ? effClefByNote[mi][ni].bottom : effectiveBottomClefByMi[mi];
  var keySigData = KEY_SIGNATURES.find((k) => k.id === keySig);
  var keySigWidth = keySigData ? Math.max(keySigData.sharps.length * 36, keySigData.flats.length * 32, 0) + (keySigData.sharps.length > 0 || keySigData.flats.length > 0 ? 20 : 0) : 0;
  var contentStart = STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH;
  var totalWidth = useMemo(
    () => STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH + totalMeasuresWidth(0, MEASURES_PER_ROW) + 80,
    [keySigWidth, MEASURES_PER_ROW, measureWidth, measures]
  );
  var maxVerseCount = useMemo(() => {
    var max = 1;
    measures.forEach((m) => m.notes.forEach((n) => {
      var v = n.verses ? n.verses.filter((x) => x).length : n.lyric ? 1 : 0;
      if (v > max) max = v;
    }));
    return max;
  }, [measures]);
  var songHighestNoteY = useMemo(() => {
    var minY = STAFF_TOP;
    measures.forEach((m) => (m.notes || []).forEach((n) => {
      if (n.isRest) return;
      var noteStaff = n.staff || "treble";
      if (isMultiStaff(clef) && noteStaff !== "treble") return;
      if (clef === "treble" && noteStaff === "bass") return;
      if (clef === "bass" && noteStaff === "treble") return;
      var y = noteToY(n.name, n.octave, clef, noteStaff);
      if (y < minY) minY = y;
      if (Array.isArray(n.chord)) {
        n.chord.forEach((c) => {
          var cy = noteToY(c.name, c.octave, clef, noteStaff);
          if (cy < minY) minY = cy;
        });
      }
    }));
    return minY;
  }, [measures, clef]);
  var songLowestNoteY = useMemo(() => {
    if (isMultiStaff(clef)) return 0;
    var maxY = 0;
    measures.forEach((m) => m.notes.forEach((n) => {
      if (n.isRest) return;
      if (clef === "treble" && n.staff === "bass") return;
      if (clef === "bass" && n.staff === "treble") return;
      var y = noteToY(n.name, n.octave, clef, n.staff);
      if (y > maxY) maxY = y;
      if (Array.isArray(n.chord)) {
        n.chord.forEach((c) => {
          var cy = noteToY(c.name, c.octave, clef, n.staff);
          if (cy > maxY) maxY = cy;
        });
      }
    }));
    return maxY;
  }, [measures, clef]);
  var effectiveRowHeight = ROW_HEIGHT + Math.max(0, maxVerseCount - 1) * 34;
  var svgHeight = STAFF_TOP + numRows * effectiveRowHeight;
  var getVH = () => {
    var _a2;
    return typeof window !== "undefined" ? ((_a2 = window.visualViewport) == null ? void 0 : _a2.height) || window.innerHeight : 800;
  };
  var getVW = () => {
    var _a2;
    return typeof window !== "undefined" ? ((_a2 = window.visualViewport) == null ? void 0 : _a2.width) || window.innerWidth : 1024;
  };
  var [viewportHeight, setViewportHeight] = useState(getVH);
  var [viewportWidth, setViewportWidth] = useState(getVW);
  var isCompact = !isMobile && viewportWidth < 1100;
  useEffect(() => {
    var onResize = () => {
      setViewportHeight(getVH());
      setViewportWidth(getVW());
    };
    window.addEventListener("resize", onResize);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (window.visualViewport) window.visualViewport.removeEventListener("resize", onResize);
    };
  }, []);
  var mobileFixedH = isMobile ? 24 + 16 + (childLock ? 0 : 60) + 90 + 8 : 280;
  var mobileAvailableHeight = Math.max(100, viewportHeight - mobileFixedH);
  var mobileLyricsBottom = STAFF_TOP + 4 * LINE_SPACING + 100 + (childLock ? 0 : Math.max(0, maxVerseCount - 1) * 34) + 120;
  var _DROP_RADIUS = 32;
  var _DROP_PADDING = 12;
  var _defaultDropTip = STAFF_TOP - 70 - _DROP_RADIUS - _DROP_RADIUS * 1.4;
  var _highNoteDropTip = songHighestNoteY - _DROP_RADIUS * 2.4 - NOTE_RY - 30;
  var _dropTip = Math.min(_defaultDropTip, _highNoteDropTip);
  var _mobileTopShift = isMobile ? Math.max(0, STAFF_TOP - 70 - _dropTip + _DROP_PADDING) : 0;
  var mobileViewH = mobileLyricsBottom - (STAFF_TOP - 70);
  var mobileScale = Math.min(1, mobileAvailableHeight / mobileViewH * 1.65);
  var isTablet = isTouchDevice && !isMobile;
  var isWidescreen = !isMobile;
  var _isBrassWoodwind = isTrumpetMode || isEuphoniumMode || isTubaMode || isFluteMode || isRecorderMode || isSaxophoneMode;
  var _liftStaff = (isFretboardMode || _isBrassWoodwind || isDrumsMode) && !isTablet;
  var _LOCAL_DOWN = _liftStaff ? isEuphoniumMode ? 70 : isDrumsMode ? 90 : 100 : isMultiStaff(clef) ? isTablet ? 154 : 300 : isTablet ? 0 : 250;
  var tabletViewTop = (isTablet ? STAFF_TOP - 160 : STAFF_TOP - 120) - _LOCAL_DOWN;
  var _LOCAL_DOWN_MOBILE = _mobileTopShift;
  var tabletViewH = isMultiStaff(clef) ? isTablet ? 580 : 700 : isTablet ? 340 : 410;
  var editViewTop = STAFF_TOP - 420;
  var editViewH = isMultiStaff(clef) ? 1800 : 900;
  var toolbarH = childLock ? 0 : toolbarMin ? 24 : isTablet ? 80 : 160;
  var wideFixedH = isWidescreen ? 56 + toolbarH + 65 + 10 : 128;
  var tabletFlexH = isWidescreen ? viewportHeight - wideFixedH : 0;
  var tabletPianoRatio = isTablet ? 0.4 : 0.45;
  var wideGap = isTablet ? 68 : 10;
  var tabletVirtualTotal = tabletViewH + wideGap + tabletViewH * tabletPianoRatio;
  var tabletScale = isWidescreen ? Math.min(1.5, tabletFlexH / tabletVirtualTotal) : 1;
  var _drumScoreShrink = 1;
  var tabletScoreH = isWidescreen ? Math.floor(tabletViewH * tabletScale * _drumScoreShrink) : 0;
  var tabletGapH = isWidescreen ? Math.floor(wideGap * tabletScale) : 0;
  var tabletPianoH = isWidescreen ? tabletFlexH - tabletScoreH - tabletGapH : 0;
  var tabletViewW = isWidescreen && tabletScoreH > 0 ? tabletViewH * (viewportWidth / tabletScoreH) : 396 + measureWidth * 1.12;
  var [tabletViewX, setTabletViewX] = useState(0);
  var [tabletViewYOffset, setTabletViewYOffset] = useState(0);
  useEffect(() => {
    var reset = () => {
      setMobileZoom(1);
      setTabletViewYOffset(0);
    };
    reset();
    var onShow = (e) => {
      if (e.persisted) reset();
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);
  var [mobileScrollX, setMobileScrollX] = useState(0);
  var endBarX = contentStart + offsetOfMeasure(measures.length);
  var staffScale = childLock ? isMobile && isMultiStaff(clef) ? 0.3 : 0.55 : isMultiStaff(clef) ? 1.6 : 0.8;
  var maxViewX = Math.max(0, endBarX + STAFF_LEFT - tabletViewW / staffScale);
  var MOBILE_LEFT_PAD_SVG = childLock && isMobile ? Math.round(120 * 0.55 / staffScale) : 120;
  var MOBILE_RIGHT_PAD_SVG = 50;
  var mobileViewBoxX = STAFF_LEFT - MOBILE_LEFT_PAD_SVG;
  var mobileSvgContentWidth = endBarX + MOBILE_RIGHT_PAD_SVG - mobileViewBoxX;
  var getNoteBeat = useCallback((note) => {
    var _a2;
    if (note.isRest && note.duration === "whole") return beatsPerMeasure;
    var base = ((_a2 = NOTE_DURATIONS.find((d) => d.id === note.duration)) == null ? void 0 : _a2.beats) || 1;
    return note.doubleDotted ? base * 1.75 : note.dotted ? base * 1.5 : note.triplet ? base * 2 / 3 : base;
  }, [beatsPerMeasure]);
  var getMeasureBeats = useCallback((measureIdx, staff) => {
    var m = measures[measureIdx];
    if (!m || !Array.isArray(m.notes)) return 0;
    return m.notes.reduce((sum, n) => {
      if (staff && n.staff && n.staff !== staff) return sum;
      return sum + getNoteBeat(n);
    }, 0);
  }, [measures, getNoteBeat]);
  var distributeNotes = useCallback((notes) => {
    if (notes.length === 0) return notes;
    var firstNoteX = isMobile ? 60 : 80;
    var usable = measureWidth - firstNoteX - (isMobile ? 6 : 20);
    var beatSize = usable / beatsPerMeasure;
    var offsets = { treble: 0, bass: 0 };
    var CLEF_RESERVE = 74;
    var extra = { treble: 0, bass: 0 };
    return notes.map((note) => {
      var dur = getNoteBeat(note);
      if (note.isRest && note.duration === "whole") {
        return { ...note, x: measureWidth / 2 };
      }
      var staffKey = note.staff === "bass" ? "bass" : "treble";
      if (note.clefBefore === "treble" || note.clefBefore === "bass") extra[staffKey] += CLEF_RESERVE;
      var x = firstNoteX + offsets[staffKey] * beatSize + extra[staffKey];
      offsets[staffKey] += dur;
      return { ...note, x };
    });
  }, [beatsPerMeasure, getNoteBeat]);
  var getSVGPoint = useCallback((e) => {
    var svg = svgRef.current;
    if (!svg) return null;
    var pt = svg.createSVGPoint();
    if (e.touches) {
      pt.x = e.touches[0].clientX;
      pt.y = e.touches[0].clientY;
    } else {
      pt.x = e.clientX;
      pt.y = e.clientY;
    }
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }, []);
  var handleStaffHover = useCallback((e) => {
    if (childLock) {
      setHoverNote(null);
      return;
    }
    if (tool !== "note" || isRestMode || copyMode) {
      setHoverNote(null);
      return;
    }
    var svgPt = getSVGPoint(e);
    if (!svgPt) {
      setHoverNote(null);
      return;
    }
    if (svgPt.x < contentStart) {
      setHoverNote(null);
      return;
    }
    var effRowHeight = isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING - STAFF_TOP + 220 : ROW_HEIGHT;
    var yOffsetForRow = Math.max(0, svgPt.y - STAFF_TOP + (isMultiStaff(clef) ? 0 : ROW_HEIGHT / 2));
    var row = Math.floor(yOffsetForRow / effRowHeight);
    if (row < 0 || row >= Math.ceil(measures.length / MEASURES_PER_ROW)) {
      setHoverNote(null);
      return;
    }
    var rowY = row * ROW_HEIGHT;
    var _hoverClef = clef;
    if (!isMultiStaff(clef)) {
      var _ci = measureIdxAtRelX(svgPt.x - contentStart);
      var _c = clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble";
      for (var _i2 = 0; _i2 <= _ci; _i2++) {
        var _t = measures[_i2] && measures[_i2].topClef;
        if (_t === "treble" || _t === "bass" || _t === "alto") _c = _t;
      }
      _hoverClef = _c;
    }
    var note = yToNote(svgPt.y - rowY, _hoverClef);
    if (!note) {
      setHoverNote(null);
      return;
    }
    var hoverStaff;
    if (isMultiStaff(clef)) {
      var midpoint = (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2;
      hoverStaff = svgPt.y - rowY > midpoint ? "bass" : "treble";
    }
    var snappedY = noteToY(note.name, note.octave, _hoverClef, hoverStaff) + rowY;
    setHoverNote({ x: svgPt.x, y: snappedY, name: note.name, octave: note.octave, staff: hoverStaff });
  }, [tool, isRestMode, measures, getSVGPoint, clef, childLock, copyMode, contentStart, measureIdxAtRelX]);
  var handleStaffLeave = useCallback(() => setHoverNote(null), []);
  var handleStaffClick = useCallback((e) => {
    var _a2;
    if (draggingOttava || ottavaJustDraggedRef.current) return;
    if (copyMode && !childLock) {
      var svgPt = getSVGPoint(e);
      if (!svgPt) return;
      if (svgPt.x < contentStart) return;
      var colIdx = measureIdxAtRelX(svgPt.x - contentStart);
      if (colIdx < 0 || colIdx >= MEASURES_PER_ROW) return;
      var mi = colIdx;
      if (mi < 0 || mi >= measures.length) return;
      if (copyScope === "measures") {
        if (measureCopyPhase === "pick") {
          setSelectedMeasures((prev) => prev ? { from: prev.from, to: mi } : { from: mi, to: mi });
          setPasteTarget(null);
        } else {
          setPasteTarget({ measure: mi });
          commitMeasurePaste(mi, selectedMeasures);
        }
        return;
      }
      var mx = contentStart + offsetOfMeasure(colIdx);
      var localX = svgPt.x - mx;
      var measure = measures[mi];
      var insertAfterNi = -1;
      for (var ni = 0; ni < measure.notes.length; ni++) {
        if (measure.notes[ni].x <= localX) insertAfterNi = ni;
        else break;
      }
      setPasteTarget({ measure: mi, note: insertAfterNi });
      return;
    }
    setSelectedNote(null);
    setSelectedNotes([]);
    if ((isMobile || isPublishedRef.current) && !childLock) {
      if (isPublishedRef.current && !isMobile) {
        showEditHint("song is published \u2014 click \u{1F4E2} Published to unpublish before editing");
      }
      return;
    }
    if (childLock) {
      if (playModeRef.current === "learn") return;
      if (isPlayingRef.current) {
        playTimeoutRef.current.forEach(clearTimeout);
        playTimeoutRef.current = [];
        setIsPlaying(false);
        isPlayingRef.current = false;
        setIsPaused(false);
        setMetronomeBeat(-1);
        playStartTimeRef.current = null;
        setPlayingIdx({ measure: -1, note: -1 });
        setPlayingNotes({});
        setPressedPianoKeys({});
        if (synthRef.current) {
          try {
            synthRef.current.dispose();
          } catch (e2) {
          }
        }
        return;
      }
      var svgPt = getSVGPoint(e);
      if (!svgPt) return;
      if (svgPt.x < contentStart) return;
      var colIdx = measureIdxAtRelX(svgPt.x - contentStart);
      if (colIdx < 0 || colIdx >= MEASURES_PER_ROW) return;
      var row = Math.floor((svgPt.y - STAFF_TOP + (isMultiStaff(clef) ? 0 : ROW_HEIGHT / 2)) / ROW_HEIGHT);
      var mi = row * MEASURES_PER_ROW + colIdx;
      if (mi < 0 || mi >= measures.length) return;
      var measure = measures[mi];
      if (measure.notes.length === 0) return;
      var mx = contentStart + offsetOfMeasure(colIdx);
      var firstNoteX = isMobile ? 60 : 80;
      var mWidth = widthOfMeasure(mi);
      var usable = mWidth - firstNoteX - (isMobile ? 6 : 20);
      var beatsForLayout = measure.pickup && measure.pickupBeats > 0 ? measure.pickupBeats : beatsPerMeasure;
      var beatSize = usable / beatsForLayout;
      var beatOffset = 0;
      var closestNi = 0;
      var closestDist = Infinity;
      measure.notes.forEach((note2, ni2) => {
        var _a3;
        var baseDur = ((_a3 = NOTE_DURATIONS.find((d) => d.id === note2.duration)) == null ? void 0 : _a3.beats) || 1;
        var dur = note2.doubleDotted ? baseDur * 1.75 : note2.dotted ? baseDur * 1.5 : note2.triplet ? baseDur * 2 / 3 : baseDur;
        var noteX = mx + firstNoteX + beatOffset * beatSize;
        var dist = Math.abs(svgPt.x - noteX);
        if (dist < closestDist) {
          closestDist = dist;
          closestNi = ni2;
        }
        beatOffset += dur;
      });
      (async () => {
        await Tone.start();
        if (isPlayingRef.current) {
          playTimeoutRef.current.forEach(clearTimeout);
          playTimeoutRef.current = [];
        }
        synthRef.current = new Tone.PolySynth(Tone.Synth, {
          envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 0.8 },
          oscillator: { type: "triangle8" }
        }).toDestination();
        synthRef.current.volume.value = -8;
        setIsPlaying(true);
        isPlayingRef.current = true;
        setIsPaused(false);
        scheduleFromRef.current(mi, closestNi, 0, bpmRef.current);
      })();
      return;
    }
    if (tool === "eraser") return;
    var svgPt = getSVGPoint(e);
    if (!svgPt) return;
    if (svgPt.x < contentStart) return;
    var effRowHeight = isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING - STAFF_TOP + 220 : ROW_HEIGHT;
    var yOffsetForRow = Math.max(0, svgPt.y - STAFF_TOP + (isMultiStaff(clef) ? 0 : ROW_HEIGHT / 2));
    var row = Math.floor(yOffsetForRow / effRowHeight);
    if (row < 0 || row >= Math.ceil(measures.length / MEASURES_PER_ROW)) return;
    var colIdx = measureIdxAtRelX(svgPt.x - contentStart);
    if (colIdx < 0 || colIdx >= MEASURES_PER_ROW) return;
    var measureIdx = row * MEASURES_PER_ROW + colIdx;
    if (measureIdx < 0 || measureIdx >= measures.length) return;
    setLastClickedMeasure(measureIdx);
    var baseBeat = ((_a2 = NOTE_DURATIONS.find((d) => d.id === selectedDuration)) == null ? void 0 : _a2.beats) || 1;
    if (isRestMode && selectedDuration === "whole") baseBeat = beatsPerMeasure;
    var newBeats = isDotted ? baseBeat * 1.5 : isTriplet ? baseBeat * 2 / 3 : baseBeat;
    var rowY = row * ROW_HEIGHT;
    var _placeClef = clef;
    if (!isMultiStaff(clef)) {
      var _c = clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble";
      for (var _i2 = 0; _i2 <= measureIdx; _i2++) {
        var _t = measures[_i2] && measures[_i2].topClef;
        if (_t === "treble" || _t === "bass" || _t === "alto") _c = _t;
      }
      _placeClef = _c;
    }
    var note = yToNote(svgPt.y - rowY, _placeClef);
    if (!note && !isRestMode) return;
    if (isDrumsMode && note) {
      var _ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
      var _idx = note.octave * 7 + _ORD[note.name];
      var _clamped = Math.max(29, Math.min(44, _idx));
      if (_clamped !== _idx) {
        var _NAMES = ["C", "D", "E", "F", "G", "A", "B"];
        note = { ...note, name: _NAMES[_clamped % 7], octave: Math.floor(_clamped / 7) };
      }
    }
    var noteStaff = clef === "bass" ? "bass" : "treble";
    if (isMultiStaff(clef)) {
      var midpoint = (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2;
      noteStaff = svgPt.y - rowY > midpoint ? "bass" : "treble";
    }
    if (!isRestMode) {
      var measureStartX = contentStart + offsetOfMeasure(colIdx);
      var localX = svgPt.x - measureStartX;
      var firstNoteX = isMobile ? 60 : 80;
      var _mW = widthOfMeasure(measureIdx);
      var usable = _mW - firstNoteX - (isMobile ? 6 : 20);
      var _measureForLayout = measures[measureIdx];
      if (!_measureForLayout || !Array.isArray(_measureForLayout.notes)) return;
      var beatsForLayout = _measureForLayout.pickup && _measureForLayout.pickupBeats > 0 ? _measureForLayout.pickupBeats : beatsPerMeasure;
      var beatSize = usable / beatsForLayout;
      var existingIdx = _measureForLayout.notes.findIndex((n2) => {
        var nStaff = n2.staff === "bass" ? "bass" : "treble";
        if (nStaff !== noteStaff || n2.isRest) return false;
        var nx = n2.x || 0;
        var nBeats = getNoteBeat(n2);
        return localX >= nx - 30 && localX < nx + nBeats * beatSize - 10;
      });
      if (existingIdx !== -1) {
        var existing = _measureForLayout.notes[existingIdx];
        var dup = existing.name === note.name && existing.octave === note.octave || (existing.chord || []).some((c) => c.name === note.name && c.octave === note.octave);
        if (dup) {
          showEditHint(`${note.name}${displayOctave(note.name, note.octave)} is already in this chord`);
          return;
        }
        setMeasures((prev) => {
          var next = [...prev];
          var notes = [...next[measureIdx].notes];
          var cur = notes[existingIdx];
          var chord = [...cur.chord || [], {
            name: note.name,
            octave: note.octave,
            accidental: selectedAccidental
          }];
          notes[existingIdx] = { ...cur, chord };
          next[measureIdx] = { ...next[measureIdx], notes };
          return next;
        });
        return;
      }
    }
    var currentBeats = getMeasureBeats(measureIdx, noteStaff);
    if (currentBeats + newBeats > beatsPerMeasure + 1e-3) {
      var remaining = Math.max(0, beatsPerMeasure - currentBeats);
      showEditHint(`measure ${measureIdx + 1} ${noteStaff} is full (${currentBeats.toFixed(2)}/${beatsPerMeasure} beats, ${remaining.toFixed(2)} left). To add a pitch at an existing beat, click directly ON a notehead (becomes a chord). To add a new beat, shrink or delete a note first.`);
      return;
    }
    var newNote = {
      id: Date.now() + Math.random(),
      x: 0,
      name: isRestMode ? "C" : note.name,
      octave: isRestMode ? 4 : note.octave,
      duration: selectedDuration,
      dotted: isDotted,
      triplet: isTriplet,
      accidental: isRestMode ? "none" : selectedAccidental,
      isRest: isRestMode,
      staff: noteStaff,
      lyric: ""
    };
    if (!isRestMode) {
      (async () => {
        try {
          Tone.start();
          var s = new Tone.Synth({ oscillator: { type: "triangle" }, envelope: { attack: 0.01, decay: 0.3, sustain: 0.2, release: 0.5 } }).toDestination();
          s.volume.value = -8;
          var freq = noteToFreq(note.name, note.octave, selectedAccidental, keySig);
          s.triggerAttackRelease(freq, "8n");
          setTimeout(() => s.dispose(), 1e3);
        } catch (e2) {
        }
      })();
    }
    var insertAt = -1;
    if (tool === "insert") {
      var measureStartX = contentStart + offsetOfMeasure(colIdx);
      var localXForInsert = svgPt.x - measureStartX;
      var measureNotes = measures[measureIdx].notes;
      var lastSameStaffIdx = -1;
      for (var i = 0; i < measureNotes.length; i++) {
        var n = measureNotes[i];
        var ns = n.staff === "bass" ? "bass" : "treble";
        if (ns !== noteStaff || n.isRest) continue;
        if ((n.x || 0) <= localXForInsert) lastSameStaffIdx = i;
      }
      insertAt = lastSameStaffIdx + 1;
    }
    setMeasures((prev) => {
      var next = [...prev];
      var cur = next[measureIdx].notes;
      var newNotes = insertAt >= 0 ? [...cur.slice(0, insertAt), newNote, ...cur.slice(insertAt)] : [...cur, newNote];
      next[measureIdx] = { ...next[measureIdx], notes: distributeNotes(newNotes) };
      return next;
    });
    pendingScrollMeasureRef.current = measureIdx;
  }, [tool, childLock, selectedDuration, isDotted, selectedAccidental, isRestMode, measures, getMeasureBeats, beatsPerMeasure, getSVGPoint, keySigWidth, clef, copyMode, copyScope, measureCopyPhase, selectedMeasures, commitMeasurePaste, contentStart, measureWidth, MEASURES_PER_ROW, draggingOttava]);
  var handleNoteClick = useCallback((measureIdx, noteIdx, e, chordIdx) => {
    e.stopPropagation();
    if ((isMobile || isPublishedRef.current) && !childLock) return;
    if (copyMode && !childLock) {
      if (copyScope === "measures") {
        if (measureCopyPhase === "pick") {
          setSelectedMeasures((prev) => prev ? { from: prev.from, to: measureIdx } : { from: measureIdx, to: measureIdx });
          setPasteTarget(null);
        } else {
          setPasteTarget({ measure: measureIdx });
          commitMeasurePaste(measureIdx, selectedMeasures);
        }
        return;
      }
      var newSel = { measure: measureIdx, note: noteIdx };
      setSelectedNotes((prev) => {
        var exists = prev.some((s) => s.measure === measureIdx && s.note === noteIdx);
        return exists ? prev.filter((s) => !(s.measure === measureIdx && s.note === noteIdx)) : [...prev, newSel];
      });
      return;
    }
    if (childLock) {
      if (playModeRef.current === "learn") {
        if (isPlayingRef.current) {
          playTimeoutRef.current.forEach(clearTimeout);
          playTimeoutRef.current = [];
          setIsPlaying(false);
          isPlayingRef.current = false;
          setIsPaused(false);
          setMetronomeBeat(-1);
        }
        setPlayingIdx({ measure: measureIdx, note: noteIdx });
        (() => {
          var _m2 = measures[measureIdx];
          var _n2 = _m2 && _m2.notes && _m2.notes[noteIdx];
          if (!_n2) return;
          var _basePulses = pulseBeatsPerMeasure(timeSig);
          var _subdiv = songSubdivisions;
          var _pulses = _basePulses * _subdiv;
          var _qPerPulse = beatsPerMeasure / _pulses;
          var _playStaff = _n2.staff || "treble";
          var _acc = 0;
          for (var i2 = 0; i2 < noteIdx; i2++) {
            var _ni = _m2.notes[i2];
            if (isMultiStaff(clef) && (_ni.staff || "treble") !== _playStaff) continue;
            _acc += getNoteBeat(_ni);
          }
          var _isPickup = _m2.pickupBeats > 0 && _m2.pickupBeats < beatsPerMeasure;
          var _pickupOffset = _isPickup ? _pulses - Math.max(1, Math.round(_m2.pickupBeats / _qPerPulse)) : 0;
          var _colorIdx = _pickupOffset + Math.floor(_acc / _qPerPulse + 1e-6);
          setClickedDrop({ measure: measureIdx, colorIdx: _colorIdx });
        })();
        try {
          if (typeof Tone !== "undefined" && Tone.start) Tone.start();
        } catch (e2) {
        }
        try {
          if (typeof Tone !== "undefined" && Tone.context && Tone.context.state !== "running") {
            Tone.context.resume();
          }
        } catch (e2) {
        }
        try {
          var measure = measures[measureIdx];
          var clicked = measure == null ? void 0 : measure.notes[noteIdx];
          if (clicked && !clicked.isRest) {
            var effKS = effectiveKeySig(measures, measureIdx, keySig);
            var beatsOf = (n2) => {
              var _a2;
              var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === n2.duration)) == null ? void 0 : _a2.beats) || 1;
              return n2.isRest && n2.duration === "whole" ? beatsPerMeasure : n2.doubleDotted ? baseDur * 1.75 : n2.dotted ? baseDur * 1.5 : n2.triplet ? baseDur * 2 / 3 : baseDur;
            };
            var simultaneous = [];
            if (isMultiStaff(clef)) {
              var clickedStaff = clicked.staff === "bass" ? "bass" : "treble";
              var clickedOffset = 0;
              for (var i = 0; i < noteIdx; i++) {
                var n = measure.notes[i];
                var sk = n.staff === "bass" ? "bass" : "treble";
                if (sk === clickedStaff) clickedOffset += beatsOf(n);
              }
              var staffOffsets = { treble: 0, bass: 0 };
              measure.notes.forEach((n2, i2) => {
                var sk2 = n2.staff === "bass" ? "bass" : "treble";
                var off = staffOffsets[sk2];
                staffOffsets[sk2] += beatsOf(n2);
                if (!n2.isRest && Math.abs(off - clickedOffset) < 1e-3) {
                  simultaneous.push({ note: n2, ni: i2 });
                }
              });
            } else {
              simultaneous.push({ note: clicked, ni: noteIdx });
            }
            setPlayingNotes(() => {
              var next = {};
              simultaneous.forEach(({ ni }) => {
                next[`${measureIdx}-${ni}`] = true;
              });
              return next;
            });
            var computeShift = (targetMi, targetNi, staff) => {
              var _a2;
              var s = 0;
              for (var m = 0; m <= targetMi; m++) {
                var ms = ((_a2 = measures[m]) == null ? void 0 : _a2.notes) || [];
                var limit = m === targetMi ? targetNi : ms.length - 1;
                for (var i2 = 0; i2 <= limit; i2++) {
                  var n2 = ms[i2];
                  if (!n2) break;
                  var sk2 = n2.staff === "bass" ? "bass" : "treble";
                  if (sk2 !== staff) continue;
                  if (n2.ottava === "8va") s = 1;
                  else if (n2.ottava === "8vb") s = -1;
                  if (n2.ottavaEnd && !(m === targetMi && i2 === targetNi)) s = 0;
                }
              }
              return s;
            };
            var soundingAccLearn = (m, idx, ci, p) => {
              if (p.accidental && p.accidental !== "none") return p.accidental;
              var carried = effectiveAccidentalInMeasure(measures, m, idx, ci, p.name, p.octave);
              if (carried && carried !== "none") return carried;
              var eks = effectiveKeySig(measures, m, keySig);
              var ks = KEY_SIGNATURES.find((k) => k.id === eks);
              if (ks) {
                if (ks.sharps && ks.sharps.includes(p.name)) return "sharp";
                if (ks.flats && ks.flats.includes(p.name)) return "flat";
              }
              return "none";
            };
            var isTiedDest = (n2, mi, ni) => {
              var _a2;
              if (!n2 || n2.isRest) return false;
              var staff = n2.staff === "bass" ? "bass" : "treble";
              var myAcc = soundingAccLearn(mi, ni, void 0, n2);
              for (var m = mi; m >= 0; m--) {
                var ms = ((_a2 = measures[m]) == null ? void 0 : _a2.notes) || [];
                var start = m === mi ? ni - 1 : ms.length - 1;
                for (var i2 = start; i2 >= 0; i2--) {
                  var p = ms[i2];
                  if (!p) continue;
                  var sk2 = p.staff === "bass" ? "bass" : "treble";
                  if (sk2 !== staff) continue;
                  if (p.isRest) return false;
                  var pAcc = soundingAccLearn(m, i2, void 0, p);
                  return !!(p.tie && p.name === n2.name && p.octave === n2.octave && pAcc === myAcc);
                }
              }
              return false;
            };
            var pitches = [];
            simultaneous.forEach(({ note: n2, ni }) => {
              if (isTiedDest(n2, measureIdx, ni)) return;
              var sk2 = n2.staff === "bass" ? "bass" : "treble";
              var shift = computeShift(measureIdx, ni, sk2);
              if (n2.name) {
                var acc = soundingAccLearn(measureIdx, ni, void 0, n2);
                pitches.push({ name: n2.name, octave: (n2.octave || 0) + shift, accidental: acc });
              }
              if (Array.isArray(n2.chord)) {
                n2.chord.forEach((c, ci) => {
                  var cAcc = soundingAccLearn(measureIdx, ni, ci, c);
                  pitches.push({ name: c.name, octave: (c.octave || 0) + shift, accidental: cAcc });
                });
              }
            });
            var keyNames = pitches.map((p) => pitchToPianoKey(p.name, p.octave, p.accidental, effKS));
            setPressedPianoKeys((prev) => {
              var next = { ...prev };
              keyNames.forEach((k) => {
                next[k] = true;
              });
              return next;
            });
            setTimeout(() => {
              setPressedPianoKeys((prev) => {
                var next = { ...prev };
                keyNames.forEach((k) => {
                  delete next[k];
                });
                return next;
              });
            }, 900);
            (async () => {
              try {
                await ensureTone();
              } catch (e2) {
              }
              if (!pianoSynthRef.current || !pianoLoadedRef.current) return;
              for (var k of keyNames) {
                try {
                  var _synth = window.__RPM_TRUMPET__ && trumpetLoadedRef.current ? trumpetSynthRef.current : window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current ? euphoniumSynthRef.current : window.__RPM_TUBA__ && tubaLoadedRef.current ? tubaSynthRef.current : window.__RPM_VIOLA__ && violaLoadedRef.current ? violaSynthRef.current : window.__RPM_VIOLIN__ && violinLoadedRef.current ? violinSynthRef.current : (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current ? celloSynthRef.current : (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current ? ukuleleSynthRef.current : pianoSynthRef.current;
                  _synth.triggerAttackRelease(
                    window.__RPM_GUITAR__ ? shiftPianoKeyName(k, -12) : window.__RPM_TRUMPET__ || window.__RPM_EUPHONIUM__ || window.__RPM_TUBA__ ? shiftPianoKeyName(k, -2) : k,
                    "2n"
                  );
                } catch (e2) {
                }
              }
            })();
          }
        } catch (e2) {
        }
        return;
      }
      if (playModeRef.current === "practice") return;
      if (isPlayingRef.current) {
        playTimeoutRef.current.forEach(clearTimeout);
        playTimeoutRef.current = [];
        setIsPlaying(false);
        isPlayingRef.current = false;
        setIsPaused(false);
        setMetronomeBeat(-1);
        playStartTimeRef.current = null;
        setPlayingIdx({ measure: -1, note: -1 });
        setPlayingNotes({});
        setPressedPianoKeys({});
        if (synthRef.current) {
          try {
            synthRef.current.dispose();
          } catch (e2) {
          }
        }
        return;
      }
      (async () => {
        await Tone.start();
        synthRef.current = new Tone.PolySynth(Tone.Synth, {
          envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 0.8 },
          oscillator: { type: "triangle8" }
        }).toDestination();
        synthRef.current.volume.value = -8;
        setIsPlaying(true);
        isPlayingRef.current = true;
        setIsPaused(false);
        scheduleFromRef.current(measureIdx, noteIdx, 0, bpmRef.current);
      })();
      return;
    }
    if (tool === "eraser") {
      var arm = { measure: measureIdx, note: noteIdx };
      if (typeof chordIdx === "number") arm.chordIdx = chordIdx;
      setSelectedNote(arm);
      setSelectedNotes([{ measure: measureIdx, note: noteIdx }]);
      setLastClickedMeasure(measureIdx);
    } else {
      var newSel = { measure: measureIdx, note: noteIdx };
      if (typeof chordIdx === "number") newSel.chordIdx = chordIdx;
      setLastClickedMeasure(measureIdx);
      if (e.shiftKey) {
        setSelectedNotes((prev) => {
          if (prev.some((s) => s.measure === measureIdx && s.note === noteIdx)) {
            return prev.filter((s) => !(s.measure === measureIdx && s.note === noteIdx));
          }
          return [...prev, newSel];
        });
      } else {
        setSelectedNotes([newSel]);
      }
      setSelectedNote(newSel);
    }
  }, [tool, childLock, beatsPerMeasure, distributeNotes, copyMode, copyScope, measureCopyPhase, selectedMeasures, commitMeasurePaste]);
  var handleNoteDragStart = useCallback((measureIdx, noteIdx, e, chordIdx) => {
    if (childLock) return;
    if (isMobile || isPublishedRef.current) return;
    if (measures[measureIdx].notes[noteIdx].isRest) return;
    e.stopPropagation();
    e.preventDefault();
    var drag = { measure: measureIdx, note: noteIdx };
    if (typeof chordIdx === "number") drag.chordIdx = chordIdx;
    setDraggingNote(drag);
  }, [childLock, isMobile, measures]);
  var lastDragNoteRef = useRef("");
  var handleDragMove = useCallback((e) => {
    if (!draggingNote) return;
    var svgPt = getSVGPoint(e.touches ? e.touches[0] : e);
    if (!svgPt) return;
    var _rawRow = Math.floor((svgPt.y - STAFF_TOP + (isMultiStaff(clef) ? 0 : ROW_HEIGHT / 2)) / ROW_HEIGHT);
    var row = Math.max(0, Math.min(numRows - 1, _rawRow));
    var rowY = row * ROW_HEIGHT;
    var _dragClef = clef;
    if (!isMultiStaff(clef)) {
      var _c = clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble";
      for (var _i2 = 0; _i2 <= (draggingNote.measure || 0); _i2++) {
        var _t = measures[_i2] && measures[_i2].topClef;
        if (_t === "treble" || _t === "bass" || _t === "alto") _c = _t;
      }
      _dragClef = _c;
    }
    var noteInfo = yToNote(svgPt.y - rowY, _dragClef);
    if (!noteInfo) return;
    var noteKey = noteInfo.name + noteInfo.octave;
    if (noteKey !== lastDragNoteRef.current) {
      lastDragNoteRef.current = noteKey;
      try {
        Tone.start();
        var s = new Tone.Synth({ oscillator: { type: "triangle" }, envelope: { attack: 0.01, decay: 0.2, sustain: 0.1, release: 0.3 } }).toDestination();
        s.volume.value = -8;
        s.triggerAttackRelease(noteToFreq(noteInfo.name, noteInfo.octave, "none", keySig), "16n");
        setTimeout(() => s.dispose(), 500);
      } catch (e2) {
      }
    }
    var dragStaff;
    if (isMultiStaff(clef)) {
      var midpoint = (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2;
      dragStaff = svgPt.y - rowY > midpoint ? "bass" : "treble";
    }
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[draggingNote.measure].notes];
      var cur = notes[draggingNote.note];
      if (typeof draggingNote.chordIdx === "number" && Array.isArray(cur.chord) && cur.chord[draggingNote.chordIdx]) {
        var newChord = cur.chord.map((cm, ci) => ci === draggingNote.chordIdx ? { ...cm, name: noteInfo.name, octave: noteInfo.octave } : cm);
        notes[draggingNote.note] = { ...cur, chord: newChord };
      } else {
        var updated = { ...cur, name: noteInfo.name, octave: noteInfo.octave };
        if (dragStaff) updated.staff = dragStaff;
        notes[draggingNote.note] = updated;
      }
      next[draggingNote.measure] = { ...next[draggingNote.measure], notes };
      return next;
    });
  }, [draggingNote, getSVGPoint, keySig, clef, numRows, measures]);
  var handleDragEnd = useCallback(() => {
    setDraggingNote(null);
  }, []);
  var handleOttavaDragStart = useCallback((measureIdx, noteIdx, e) => {
    var _a2;
    if (childLock) return;
    if (isMobile || isPublishedRef.current) return;
    e.stopPropagation();
    e.preventDefault();
    setHoverNote(null);
    var note = (_a2 = measures[measureIdx]) == null ? void 0 : _a2.notes[noteIdx];
    var startMouseY = e.touches ? e.touches[0].clientY : e.clientY;
    setDraggingOttava({
      measure: measureIdx,
      note: noteIdx,
      startMouseY,
      startOttavaY: note && typeof note.ottavaY === "number" ? note.ottavaY : 0
    });
  }, [childLock, isMobile, measures]);
  var handleOttavaDragMove = useCallback((e) => {
    if (!draggingOttava) return;
    var curY = e.touches ? e.touches[0].clientY : e.clientY;
    var svg = svgRef.current;
    var deltaSvg = curY - draggingOttava.startMouseY;
    if (svg) {
      try {
        var ctm = svg.getScreenCTM();
        if (ctm && ctm.d) deltaSvg = (curY - draggingOttava.startMouseY) / ctm.d;
      } catch (e2) {
      }
    }
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[draggingOttava.measure].notes];
      var cur = notes[draggingOttava.note];
      notes[draggingOttava.note] = { ...cur, ottavaY: draggingOttava.startOttavaY + deltaSvg };
      next[draggingOttava.measure] = { ...next[draggingOttava.measure], notes };
      return next;
    });
  }, [draggingOttava]);
  var ottavaJustDraggedRef = useRef(false);
  var handleOttavaDragEnd = useCallback(() => {
    if (draggingOttava) {
      ottavaJustDraggedRef.current = true;
      setTimeout(() => {
        ottavaJustDraggedRef.current = false;
      }, 0);
    }
    setDraggingOttava(null);
  }, [draggingOttava]);
  var handleDynamicDragStart = useCallback((measureIdx, noteIdx, e) => {
    var _a2;
    if (childLock) return;
    if (isMobile || isPublishedRef.current) return;
    e.stopPropagation();
    e.preventDefault();
    setHoverNote(null);
    setSelectedNote({ measure: measureIdx, note: noteIdx });
    var note = (_a2 = measures[measureIdx]) == null ? void 0 : _a2.notes[noteIdx];
    var startMouseX = e.touches ? e.touches[0].clientX : e.clientX;
    var startMouseY = e.touches ? e.touches[0].clientY : e.clientY;
    setDraggingDynamic({
      measure: measureIdx,
      note: noteIdx,
      startMouseX,
      startMouseY,
      startDynX: note && typeof note.dynX === "number" ? note.dynX : 0,
      startDynY: note && typeof note.dynY === "number" ? note.dynY : 0
    });
  }, [childLock, isMobile, measures]);
  var handleDynamicDragMove = useCallback((e) => {
    if (!draggingDynamic) return;
    var curX = e.touches ? e.touches[0].clientX : e.clientX;
    var curY = e.touches ? e.touches[0].clientY : e.clientY;
    var svg = svgRef.current;
    var dX = curX - draggingDynamic.startMouseX;
    var dY = curY - draggingDynamic.startMouseY;
    if (svg) {
      try {
        var ctm = svg.getScreenCTM();
        if (ctm && ctm.a) dX = (curX - draggingDynamic.startMouseX) / ctm.a;
        if (ctm && ctm.d) dY = (curY - draggingDynamic.startMouseY) / ctm.d;
      } catch (e2) {
      }
    }
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[draggingDynamic.measure].notes];
      var cur = notes[draggingDynamic.note];
      notes[draggingDynamic.note] = { ...cur, dynX: draggingDynamic.startDynX + dX, dynY: draggingDynamic.startDynY + dY };
      next[draggingDynamic.measure] = { ...next[draggingDynamic.measure], notes };
      return next;
    });
  }, [draggingDynamic]);
  var handleDynamicDragEnd = useCallback(() => {
    if (draggingDynamic) {
      dynamicJustDraggedRef.current = true;
      setTimeout(() => {
        dynamicJustDraggedRef.current = false;
      }, 0);
    }
    setDraggingDynamic(null);
  }, [draggingDynamic]);
  var stopPlayback = () => {
    if (!isPlayingRef.current) return;
    playTimeoutRef.current.forEach(clearTimeout);
    playTimeoutRef.current = [];
    setIsPlaying(false);
    isPlayingRef.current = false;
    setIsPaused(false);
    setPlayingIdx({ measure: -1, note: -1 });
    setPlayingNotes({});
    setPressedPianoKeys({});
    setMetronomeBeat(-1);
    if (synthRef.current) {
      try {
        synthRef.current.dispose();
      } catch (e) {
      }
    }
  };
  useEffect(() => {
    var onHide = () => {
      if (document.hidden) stopPlayback();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", stopPlayback);
    window.addEventListener("blur", () => {
      if (document.hidden) stopPlayback();
    });
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", stopPlayback);
    };
  }, []);
  var pickClef = (c) => {
    stopPlayback();
    setClef(c);
  };
  var addMeasure = () => setMeasures((prev) => [...prev, { notes: [] }]);
  var removeMeasure = () => {
    if (measures.length > 1) setMeasures((prev) => prev.slice(0, -1));
  };
  var removeMeasureAt = (mi) => {
    if (measures.length <= 1) return;
    setMeasures((prev) => prev.filter((_, i) => i !== mi));
    setSelectedNote(null);
  };
  var insertMeasureAt = (mi) => {
    setMeasures((prev) => {
      var next = [...prev];
      next.splice(mi, 0, { notes: [] });
      return next;
    });
    setSelectedNote(null);
  };
  var clearAll = () => {
    var _clefStaff = clef === "drum" || clef === "percussion" || clef === "alto" ? "treble" : clef;
    setMeasures((prev) => prev.map((m) => {
      if (isMultiStaff(clef)) return { ...m, notes: [] };
      return { ...m, notes: (m.notes || []).filter((n) => {
        var ns = n.staff === "bass" ? "bass" : "treble";
        return ns !== _clefStaff;
      }) };
    }));
    setSelectedNote(null);
  };
  var dynamicsVelocityMap = useMemo(() => {
    var map = /* @__PURE__ */ new Map();
    var flat = [];
    for (var _mi = 0; _mi < measures.length; _mi++) {
      var _notes = measures[_mi] && measures[_mi].notes || [];
      for (var _ni = 0; _ni < _notes.length; _ni++) flat.push({ mi: _mi, ni: _ni, note: _notes[_ni] });
    }
    var base = new Array(flat.length);
    var running = 0.251;
    for (var i = 0; i < flat.length; i++) {
      var d = flat[i].note.dynamic;
      if (d && DYNAMIC_VEL[d] != null) running = DYNAMIC_VEL[d];
      base[i] = running;
    }
    for (var i = 0; i < flat.length; i++) {
      var hp = flat[i].note.hairpin;
      if (hp !== "cresc" && hp !== "dim") continue;
      var end = -1;
      for (var j = i + 1; j < flat.length; j++) {
        if (flat[j].note.hairpinEnd) {
          end = j;
          break;
        }
      }
      if (end < 0) end = Math.min(flat.length - 1, i + 1);
      var startVel = base[i];
      var endExplicit = flat[end].note.dynamic && DYNAMIC_VEL[flat[end].note.dynamic] != null;
      var endVel = endExplicit ? DYNAMIC_VEL[flat[end].note.dynamic] : hp === "cresc" ? Math.min(1, startVel + 0.25) : Math.max(0.05, startVel - 0.25);
      var span = end - i;
      for (var k = i; k <= end; k++) {
        var t = span > 0 ? (k - i) / span : 1;
        base[k] = startVel + (endVel - startVel) * t;
      }
    }
    for (var i = 0; i < flat.length; i++) {
      var n = flat[i].note;
      var v = base[i];
      if (n.dynAccent && DYN_ACCENT_MUL[n.dynAccent]) v *= DYN_ACCENT_MUL[n.dynAccent];
      if (n.accent) v *= 1.2;
      v = Math.max(0.05, Math.min(1, v));
      map.set(flat[i].mi + "-" + flat[i].ni, v);
    }
    return map;
  }, [measures]);
  var dynamicsVelocityMapRef = useRef(dynamicsVelocityMap);
  useEffect(() => {
    dynamicsVelocityMapRef.current = dynamicsVelocityMap;
  }, [dynamicsVelocityMap]);
  var tempoMulByMeasure = useMemo(() => {
    var ACCEL_TARGET = 1.3, RIT_TARGET = 0.7;
    var arr = new Array(measures.length).fill(1);
    var flat = [];
    for (var mi = 0; mi < measures.length; mi++) {
      var notes = measures[mi] && measures[mi].notes || [];
      for (var ni = 0; ni < notes.length; ni++) flat.push({ mi, note: notes[ni] });
    }
    for (var i = 0; i < flat.length; i++) {
      var kind = flat[i].note.tempoSpan;
      if (kind !== "accel" && kind !== "rit") continue;
      var startMi = flat[i].mi;
      var endMi = startMi;
      for (var j = i + 1; j < flat.length; j++) {
        if (flat[j].note.tempoSpanEnd) {
          endMi = flat[j].mi;
          break;
        }
      }
      var target = kind === "accel" ? ACCEL_TARGET : RIT_TARGET;
      var N = endMi - startMi + 1;
      for (var m = startMi; m <= endMi && m < arr.length; m++) {
        var k = m - startMi + 1;
        arr[m] = 1 + k / N * (target - 1);
      }
    }
    var _FASTER = { "accel.": 1, "stretto": 1 };
    var _SLOWER = { "rit.": 1, "rall.": 1 };
    for (var i = 0; i < flat.length; i++) {
      var mk = flat[i].note.tempoMark;
      if (!_FASTER[mk] && !_SLOWER[mk]) continue;
      var startMi = flat[i].mi;
      var endMi = measures.length - 1;
      for (var j = i + 1; j < flat.length; j++) {
        var m2 = flat[j].note.tempoMark;
        if (m2 === "a tempo" || _FASTER[m2] || _SLOWER[m2]) {
          endMi = Math.max(startMi, flat[j].mi - 1);
          break;
        }
      }
      var target = _FASTER[mk] ? ACCEL_TARGET : RIT_TARGET;
      var N = endMi - startMi + 1;
      for (var m = startMi; m <= endMi && m < arr.length; m++) {
        var k = m - startMi + 1;
        arr[m] = 1 + k / N * (target - 1);
      }
    }
    return arr;
  }, [measures]);
  var tempoMulByMeasureRef = useRef(tempoMulByMeasure);
  useEffect(() => {
    tempoMulByMeasureRef.current = tempoMulByMeasure;
  }, [tempoMulByMeasure]);
  var scheduleFrom = useCallback((startMi, startNi, _unused, currentBpm) => {
    var _a2;
    playTimeoutRef.current.forEach(clearTimeout);
    playTimeoutRef.current = [];
    var beatDuration = quarterSecondsAtBpm(currentBpm, timeSig);
    var time = 0;
    var timeouts = [];
    var scrollTimeline = [];
    var pushTimelinePoint = (t, x) => {
      var last2 = scrollTimeline[scrollTimeline.length - 1];
      if (last2 && Math.abs(last2.t - t) < 5e-4) {
        return;
      }
      scrollTimeline.push({ t, x });
    };
    var volta1Measure = measures.find((m) => m.volta1Start);
    var volta1Label = volta1Measure ? volta1Measure.volta1Label || "1." : "1.";
    var nums = volta1Label.match(/\d+/g);
    var maxRepeats = nums ? Math.max(...nums.map(Number)) : 1;
    var hasVolta2 = measures.some((m) => m.volta2Start);
    var tieInfo = /* @__PURE__ */ new Map();
    {
      var pendingByStaff = { treble: {}, bass: {} };
      var chainRootByStaff = { treble: {}, bass: {} };
      var soundingAcc = (mi2, ni2, ci2, p) => {
        if (p.accidental && p.accidental !== "none") return p.accidental;
        var carried = effectiveAccidentalInMeasure(measures, mi2, ni2, ci2, p.name, p.octave);
        if (carried && carried !== "none") return carried;
        var eks = effectiveKeySig(measures, mi2, keySig);
        var ks = KEY_SIGNATURES.find((k2) => k2.id === eks);
        if (ks) {
          if (ks.sharps && ks.sharps.includes(p.name)) return "sharp";
          if (ks.flats && ks.flats.includes(p.name)) return "flat";
        }
        return "none";
      };
      var pitchKey = (sk2, mi2, ni2, ci2, p) => `${sk2}-${p.name}-${p.octave}-${soundingAcc(mi2, ni2, ci2, p)}`;
      var addBeatsToRoot = (rootRef, nBeats2) => {
        if (!rootRef) return;
        var rootInfo = tieInfo.get(`${rootRef.mi}-${rootRef.ni}`);
        if (!rootInfo) return;
        if (rootRef.ci === -1) rootInfo.sustainAddPrimary += nBeats2;
        else if (rootInfo.sustainAddChord[rootRef.ci] !== void 0) {
          rootInfo.sustainAddChord[rootRef.ci] += nBeats2;
        }
      };
      for (var mi = 0; mi < measures.length; mi++) {
        var mnotes = measures[mi].notes;
        for (var ni = 0; ni < mnotes.length; ni++) {
          var n = mnotes[ni];
          var sk = n.staff === "bass" ? "bass" : "treble";
          var key = `${mi}-${ni}`;
          var chordLen = Array.isArray(n.chord) ? n.chord.length : 0;
          var rec = {
            attackPrimary: true,
            attackChord: Array(chordLen).fill(true),
            sustainAddPrimary: 0,
            sustainAddChord: Array(chordLen).fill(0)
          };
          tieInfo.set(key, rec);
          if (n.isRest) continue;
          var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _a2.beats) || 1;
          var nBeats = n.isRest && n.duration === "whole" ? beatsPerMeasure : n.doubleDotted ? baseDur * 1.75 : n.dotted ? baseDur * 1.5 : n.triplet ? baseDur * 2 / 3 : baseDur;
          var here = [{ pKey: pitchKey(sk, mi, ni, void 0, n), ci: -1, tieOut: !!n.tie }];
          for (var ci = 0; ci < chordLen; ci++) {
            var c = n.chord[ci];
            here.push({ pKey: pitchKey(sk, mi, ni, ci, c), ci, tieOut: !!c.tie });
          }
          var pKeysHere = new Set(here.map((h2) => h2.pKey));
          var incoming = pendingByStaff[sk];
          var chainRoot = chainRootByStaff[sk];
          for (var k of Object.keys(incoming)) {
            if (pKeysHere.has(k)) {
              for (var h of here) {
                if (h.pKey !== k) continue;
                if (h.ci === -1) rec.attackPrimary = false;
                else rec.attackChord[h.ci] = false;
                addBeatsToRoot(chainRoot[k], nBeats);
              }
            } else {
              delete chainRoot[k];
            }
            delete incoming[k];
          }
          for (var h of here) {
            if (h.tieOut) {
              incoming[h.pKey] = { mi, ni, ci: h.ci };
              var isFreshAttack = h.ci === -1 ? rec.attackPrimary : rec.attackChord[h.ci];
              if (isFreshAttack) {
                chainRoot[h.pKey] = { mi, ni, ci: h.ci };
              }
            }
          }
        }
      }
    }
    playBpmRef.current = currentBpm;
    playStartTimeRef.current = performance.now();
    var hitEndRepeat = false;
    var hitEndRepeatMi = -1;
    var hitNav = null;
    var stopAfterMeasure = false;
    if (!endRepeatPassRef.current) endRepeatPassRef.current = /* @__PURE__ */ new Map();
    var endRepeatPass = endRepeatPassRef.current;
    var sections = [];
    for (var i = 0; i < measures.length; i++) {
      if (!measures[i].repeat) continue;
      var secStart = 0;
      for (var j = i - 1; j >= 0; j--) {
        if (measures[j].repeatStart) {
          secStart = j;
          break;
        }
      }
      var v1Label = null;
      for (var j = secStart; j <= i; j++) {
        if (measures[j].volta1Start) {
          v1Label = measures[j].volta1Label || "1";
          break;
        }
      }
      var v1Nums = v1Label ? (v1Label.match(/\d+/g) || []).map(Number) : [];
      var maxV1 = v1Nums.length ? Math.max(...v1Nums) : 0;
      var totalPasses = Math.max(2, maxV1 + 1);
      var v2EndMi = i;
      if (i + 1 < measures.length && measures[i + 1].volta2Start) {
        var j = i + 1;
        while (j < measures.length) {
          v2EndMi = j;
          if (measures[j].volta2End) break;
          j++;
        }
      }
      sections.push({ endMi: i, startMi: secStart, totalPasses, v1Nums, v2EndMi });
    }
    var sectionForMeasure = (mi2) => {
      for (var s of sections) {
        if (mi2 >= s.startMi && mi2 <= s.v2EndMi) return s;
      }
      return null;
    };
    var activeOttavaShiftByStaff = { treble: 0, bass: 0 };
    var segnoMi = measures.findIndex((m) => m.segno);
    var codaMi = measures.findIndex((m) => m.coda);
    var inVolta1 = false, inVolta2 = false;
    measures.forEach((measure, mi2) => {
      if (mi2 < startMi) return;
      if (hitEndRepeat || hitNav || stopAfterMeasure) return;
      if (measure.volta1Start) inVolta1 = true;
      if (measure.volta2Start) {
        inVolta2 = true;
        inVolta1 = false;
      }
      var _sect = sectionForMeasure(mi2);
      var _sectPass = _sect ? (endRepeatPass.get(_sect.endMi) || 0) + 1 : 1;
      if (inVolta1) {
        var v1Nums2 = _sect ? _sect.v1Nums : [];
        if (v1Nums2.length && !v1Nums2.includes(_sectPass)) {
          if (measure.volta1End || measure.repeat) inVolta1 = false;
          return;
        }
      }
      if (inVolta2 && _sectPass < 2) {
        if (measure.volta2End) inVolta2 = false;
        return;
      }
      if (measure.volta1End) inVolta1 = false;
      if (measure.volta2End) inVolta2 = false;
      var measureStart = time;
      var _tempoMul = tempoMulByMeasureRef.current && tempoMulByMeasureRef.current[mi2] || 1;
      var beatDur = beatDuration / _tempoMul;
      var staffOffsets = { treble: 0, bass: 0 };
      var scheduled = [];
      var pendingGraces = { treble: [], bass: [] };
      var GRACE_LEAD_BEATS_PER = 0.0625;
      measure.notes.forEach((note, ni2) => {
        var _a3;
        var staffKey = note.staff === "bass" ? "bass" : "treble";
        if (note.grace) {
          pendingGraces[staffKey].push({ note, ni: ni2 });
          return;
        }
        var baseDur2 = ((_a3 = NOTE_DURATIONS.find((d) => d.id === note.duration)) == null ? void 0 : _a3.beats) || 1;
        var _wholeRestBeats = measure.pickup && measure.pickupBeats > 0 ? measure.pickupBeats : beatsPerMeasure;
        var beats = note.isRest && note.duration === "whole" ? _wholeRestBeats : note.doubleDotted ? baseDur2 * 1.75 : note.dotted ? baseDur2 * 1.5 : note.triplet ? baseDur2 * 2 / 3 : baseDur2;
        var offsetBeats = staffOffsets[staffKey];
        staffOffsets[staffKey] += beats;
        var q = pendingGraces[staffKey];
        if (q.length > 0) {
          var startOff = offsetBeats - GRACE_LEAD_BEATS_PER * q.length;
          q.forEach((g, idx) => {
            var gOff = startOff + GRACE_LEAD_BEATS_PER * idx;
            var gBeats = GRACE_LEAD_BEATS_PER * 0.9;
            if (mi2 === startMi && g.ni < startNi) return;
            if (!isMultiStaff(clef) && staffKey !== (clef === "alto" ? "treble" : clef)) return;
            scheduled.push({ note: g.note, ni: g.ni, offsetBeats: gOff, beats: gBeats });
          });
          pendingGraces[staffKey] = [];
        }
        if (mi2 === startMi && ni2 < startNi) return;
        if (!isMultiStaff(clef) && staffKey !== (clef === "alto" ? "treble" : clef)) return;
        scheduled.push({ note, ni: ni2, offsetBeats, beats });
      });
      var shiftBeats = mi2 === startMi && scheduled.length > 0 ? scheduled[0].offsetBeats : 0;
      if (mi2 === startMi) {
        var _firstPrincipal = scheduled.find((s) => !(s.note && s.note.grace));
        var _principalShift = _firstPrincipal ? _firstPrincipal.offsetBeats : 0;
        metronomeStartBeatOffsetRef.current = Math.max(0, _principalShift);
        dropStartMiRef.current = startMi;
      }
      scheduled.forEach(({ note, ni: ni2, offsetBeats, beats }) => {
        var tInfo = tieInfo.get(`${mi2}-${ni2}`) || {
          attackPrimary: true,
          attackChord: [],
          sustainAddPrimary: 0,
          sustainAddChord: []
        };
        var primaryEffectiveBeats = beats + tInfo.sustainAddPrimary;
        var chordEffectiveBeats = (tInfo.sustainAddChord || []).map((s) => beats + s);
        var effectiveBeats = Math.max(primaryEffectiveBeats, ...chordEffectiveBeats, beats);
        var releaseMul = note.staccato ? 0.22 : 0.9;
        var noteDur = effectiveBeats * beatDur * releaseMul;
        var noteTime = measureStart + (offsetBeats - shiftBeats) * beatDur;
        var _staffKey = note.staff === "bass" ? "bass" : "treble";
        if (note.ottava === "8va") activeOttavaShiftByStaff[_staffKey] = 1;
        else if (note.ottava === "8vb") activeOttavaShiftByStaff[_staffKey] = -1;
        var ottavaShift = activeOttavaShiftByStaff[_staffKey];
        var measureLeftAbs = contentStart + offsetOfMeasure(mi2);
        var _mWidthForBeat = widthOfMeasure(mi2);
        var _measureForBeat = measures[mi2];
        var _beatsForBeat = _measureForBeat && _measureForBeat.pickup && _measureForBeat.pickupBeats > 0 ? _measureForBeat.pickupBeats : measureBeatsInQuarters(timeSig);
        var beatSize = (_mWidthForBeat - 100) / _beatsForBeat;
        var noteAbsX = measureLeftAbs + 80 + offsetBeats * beatSize;
        pushTimelinePoint(noteTime * 1e3, noteAbsX);
        timeouts.push(setTimeout(() => {
          var _a3;
          playPositionRef.current = { measure: mi2, note: ni2 };
          if (!window.__RPM_NOVIS__) {
            setPlayingIdx({ measure: mi2, note: ni2 });
            setPlayingNotes((prev) => ({ ...prev, [mi2 + "-" + ni2]: true }));
          }
          if (!note.isRest && synthRef.current) {
            var resolve = (p, ci3) => {
              if (p.accidental && p.accidental !== "none") return p.accidental;
              return effectiveAccidentalInMeasure(measures, mi2, ni2, ci3, p.name, p.octave);
            };
            var pitches = [];
            if (tInfo.attackPrimary) {
              pitches.push({
                pitch: { name: note.name, octave: note.octave + ottavaShift, accidental: resolve(note, void 0) },
                piece: note.drumPiece,
                // Source rings through the chain (source beats + every
                // tied destination's beats). Destinations have
                // attackPrimary=false so no fresh attacks fire.
                durBeats: beats + tInfo.sustainAddPrimary
              });
            }
            if (Array.isArray(note.chord)) {
              for (var ci2 = 0; ci2 < note.chord.length; ci2++) {
                if (tInfo.attackChord[ci2] === false) continue;
                var c2 = note.chord[ci2];
                pitches.push({
                  pitch: { name: c2.name, octave: c2.octave + ottavaShift, accidental: resolve(c2, ci2) },
                  piece: c2.drumPiece,
                  durBeats: beats + (((_a3 = tInfo.sustainAddChord) == null ? void 0 : _a3[ci2]) || 0)
                });
              }
            }
            if (pitches.length > 0) {
              var effKS = effectiveKeySig(measures, mi2, keySig);
              var pianoKeyName = (p) => pitchToPianoKey(p.name, p.octave, p.accidental, effKS);
              var _attackTime = typeof Tone !== "undefined" && Tone.now ? Tone.now() : void 0;
              for (var { pitch, durBeats, piece } of pitches) {
                var f = noteToFreq(pitch.name, pitch.octave, pitch.accidental, effKS);
                var dur = durBeats * beatDur * releaseMul;
                if (playModeRef.current !== "practice") {
                  if (isDrumsMode) {
                    if (drumPlayersRef.current && drumLoadedRef.current) {
                      try {
                        drumPlayPiece(drumPlayersRef.current, piece, _attackTime);
                      } catch (e) {
                      }
                      try {
                        var _lbl = labelForPiece(piece);
                        if (_lbl && flashDrumByLabelRef.current) flashDrumByLabelRef.current(_lbl);
                      } catch (e) {
                      }
                    }
                  } else if (pianoSynthRef.current && pianoLoadedRef.current) {
                    {
                      var _synth = window.__RPM_TRUMPET__ && trumpetLoadedRef.current ? trumpetSynthRef.current : window.__RPM_EUPHONIUM__ && euphoniumLoadedRef.current ? euphoniumSynthRef.current : window.__RPM_TUBA__ && tubaLoadedRef.current ? tubaSynthRef.current : window.__RPM_VIOLA__ && violaLoadedRef.current ? violaSynthRef.current : window.__RPM_VIOLIN__ && violinLoadedRef.current ? violinSynthRef.current : (window.__RPM_CELLO__ || window.__RPM_CONTRABASS__) && celloLoadedRef.current ? celloSynthRef.current : (window.__RPM_UKULELE__ || window.__RPM_GUITAR__ || window.__RPM_BASS_GUITAR__ || window.__RPM_VIOLA__ || window.__RPM_MANDOLIN__ || window.__RPM_BANJO__) && ukuleleLoadedRef.current ? ukuleleSynthRef.current : pianoSynthRef.current;
                      _synth.triggerAttackRelease(
                        window.__RPM_GUITAR__ ? shiftPianoKeyName(pianoKeyName(pitch), -12) : window.__RPM_TRUMPET__ || window.__RPM_EUPHONIUM__ || window.__RPM_TUBA__ ? shiftPianoKeyName(pianoKeyName(pitch), -2) : pianoKeyName(pitch),
                        dur,
                        _attackTime,
                        dynamicsVelocityMapRef.current.get(mi2 + "-" + ni2) || 0.251
                      );
                    }
                  } else {
                    synthRef.current.triggerAttackRelease(f, dur, _attackTime, dynamicsVelocityMapRef.current.get(mi2 + "-" + ni2) || 0.251);
                  }
                }
              }
              var keyNames = pitches.map(({ pitch: pitch2 }) => pianoKeyName(pitch2));
              if (!window.__RPM_NOVIS__) {
                setPressedPianoKeys((prev) => {
                  var next = { ...prev };
                  for (var i2 = 0; i2 < pitches.length; i2++) {
                    next[keyNames[i2]] = noteColorMap[pitches[i2].pitch.name] || "#fff";
                  }
                  return next;
                });
                bumpPianoKeyPulse(keyNames);
              }
            }
          }
        }, noteTime * 1e3));
        timeouts.push(setTimeout(() => {
          if (!window.__RPM_NOVIS__) setPlayingNotes((prev) => {
            var next = { ...prev };
            delete next[mi2 + "-" + ni2];
            return next;
          });
        }, (noteTime + beats * beatDur) * 1e3));
        var FLASH_MIN_MS = 220;
        var keyHoldMs = Math.max(noteDur * 1e3, FLASH_MIN_MS);
        timeouts.push(setTimeout(() => {
          if (!window.__RPM_NOVIS__) setPlayingIdx((prev) => prev.measure === mi2 && prev.note === ni2 ? { measure: -1, note: -1 } : prev);
          var effKS = effectiveKeySig(measures, mi2, keySig);
          var resolveClear = (p, ci3) => {
            if (p.accidental && p.accidental !== "none") return p.accidental;
            return effectiveAccidentalInMeasure(measures, mi2, ni2, ci3, p.name, p.octave);
          };
          var pianoKeyName = (p, ci3) => pitchToPianoKey(p.name, p.octave + ottavaShift, resolveClear(p, ci3), effKS);
          var toClear = [];
          if (tInfo.attackPrimary) toClear.push([note, void 0]);
          if (Array.isArray(note.chord)) {
            for (var ci2 = 0; ci2 < note.chord.length; ci2++) {
              if (tInfo.attackChord[ci2] !== false) toClear.push([note.chord[ci2], ci2]);
            }
          }
          if (!window.__RPM_NOVIS__) setPressedPianoKeys((prev) => {
            var next = { ...prev };
            for (var [p, ci3] of toClear) delete next[pianoKeyName(p, ci3)];
            return next;
          });
        }, noteTime * 1e3 + keyHoldMs));
        if (note.ottavaEnd) {
          var _endStaffKey = note.staff === "bass" ? "bass" : "treble";
          activeOttavaShiftByStaff[_endStaffKey] = 0;
        }
      });
      var actualBeats = Math.max(staffOffsets.treble, staffOffsets.bass);
      var usedBeats = actualBeats > 0 ? actualBeats : beatsPerMeasure;
      time = measureStart + (usedBeats - shiftBeats) * beatDur;
      if (measure.repeat) {
        var _s = sectionForMeasure(mi2);
        var _passes = endRepeatPass.get(mi2) || 0;
        var _total = _s ? _s.totalPasses : 2;
        if (_passes + 1 < _total) {
          hitEndRepeat = true;
          hitEndRepeatMi = mi2;
          var _secStart = _s ? _s.startMi : 0;
          var _secStartM = measures[_secStart];
          if (_secStartM && _secStartM.pickup && _secStartM.pickupBeats > 0) {
            var _shortened = beatsPerMeasure - _secStartM.pickupBeats;
            if (_shortened > 0 && _shortened < usedBeats) {
              time = measureStart + (_shortened - shiftBeats) * beatDur;
            }
          }
        }
      }
      if (navStateRef.current.mode === "alFine" && measure.fine) {
        stopAfterMeasure = true;
        navStateRef.current.mode = "none";
      }
      if (navStateRef.current.mode === "alCoda" && measure.toCoda && codaMi >= 0) {
        hitNav = { target: codaMi, mode: "none" };
        navStateRef.current.mode = "none";
      }
      if (measure.nav && !navStateRef.current.tookNav.has(mi2)) {
        navStateRef.current.tookNav.add(mi2);
        var navMap = {
          "dc": { target: 0, mode: "none" },
          "dc-al-fine": { target: 0, mode: "alFine" },
          "dc-al-coda": { target: 0, mode: "alCoda" },
          "ds": { target: segnoMi, mode: "none" },
          "ds-al-fine": { target: segnoMi, mode: "alFine" },
          "ds-al-coda": { target: segnoMi, mode: "alCoda" }
        };
        var action = navMap[measure.nav];
        if (action && action.target >= 0) hitNav = action;
      }
    });
    var measureDurMsForGlide = beatsPerMeasure * quarterSecondsAtBpm(currentBpm, timeSig) * 1e3;
    var pxPerMsForGlide = measureWidth / measureDurMsForGlide;
    var visibleSvgWForGlide = tabletViewW / staffScale;
    var xNeededForGlide = endBarX + STAFF_LEFT - visibleSvgWForGlide / 8;
    var glideMs = 0;
    if (scrollTimeline.length > 0) {
      var last = scrollTimeline[scrollTimeline.length - 1];
      glideMs = Math.max(0, (xNeededForGlide - last.x) / pxPerMsForGlide);
      if (glideMs > 0) pushTimelinePoint(last.t + glideMs, xNeededForGlide);
    }
    scrollTimelineRef.current = scrollTimeline;
    var goBackTo = 0;
    if (hitEndRepeatMi >= 0) {
      for (var j = hitEndRepeatMi - 1; j >= 0; j--) {
        if (measures[j] && measures[j].repeatStart) {
          goBackTo = j;
          break;
        }
      }
    }
    if (hitNav) {
      var navTarget = hitNav.target;
      var navMode = hitNav.mode;
      timeouts.push(setTimeout(() => {
        navStateRef.current.mode = navMode;
        repeatCountRef.current = 0;
        if (endRepeatPassRef.current) endRepeatPassRef.current.clear();
        if (scoreAreaRef.current) scoreAreaRef.current.scrollLeft = 0;
        setTabletViewX(navTarget * measureWidth);
        scheduleFromRef.current(navTarget, 0, 0, currentBpm);
        setPlayRestartTick((t) => t + 1);
      }, time * 1e3));
    } else if (hitEndRepeat) {
      timeouts.push(setTimeout(() => {
        var prev = endRepeatPass.get(hitEndRepeatMi) || 0;
        endRepeatPass.set(hitEndRepeatMi, prev + 1);
        repeatCountRef.current = prev + 1;
        if (scoreAreaRef.current) scoreAreaRef.current.scrollLeft = 0;
        setTabletViewX(goBackTo * measureWidth);
        scheduleFromRef.current(goBackTo, 0, 0, currentBpm);
        setPlayRestartTick((t) => t + 1);
      }, time * 1e3));
    } else {
      timeouts.push(setTimeout(() => {
        repeatCountRef.current = 0;
        if (endRepeatPassRef.current) endRepeatPassRef.current.clear();
        navStateRef.current = { mode: "none", tookNav: /* @__PURE__ */ new Set() };
        if (isLoopingRef.current && !stopAfterMeasure) {
          if (scoreAreaRef.current) scoreAreaRef.current.scrollLeft = 0;
          setTabletViewX(0);
          scheduleFromRef.current(0, 0, 0, currentBpm);
          setPlayRestartTick((t) => t + 1);
        } else {
          var stopCleanup = () => {
            setIsPlaying(false);
            isPlayingRef.current = false;
            setMetronomeBeat(-1);
            playBpmRef.current = null;
            playStartTimeRef.current = null;
            if (synthRef.current) synthRef.current.dispose();
            setPressedPianoKeys({});
            setPlayingIdx({ measure: -1, note: -1 });
            setPlayingNotes({});
          };
          var FINISH_DURATION = 600;
          var finishStartTime = performance.now();
          var finishStartTabletViewX = null;
          var finishStartScrollLeft = null;
          var easeInOut = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          var finishCssPerSvg = isMobile ? mobileScale * (mobileZoom || 1) * staffScale : 1;
          var finishStep = () => {
            var elapsed = performance.now() - finishStartTime;
            var p = Math.min(1, elapsed / FINISH_DURATION);
            var eased = easeInOut(p);
            if (isWidescreen) {
              setTabletViewX((prev) => {
                if (finishStartTabletViewX === null) finishStartTabletViewX = prev;
                var target2 = Math.max(finishStartTabletViewX, maxViewX);
                return finishStartTabletViewX + (target2 - finishStartTabletViewX) * eased;
              });
            }
            if (scoreAreaRef.current) {
              if (finishStartScrollLeft === null) finishStartScrollLeft = scoreAreaRef.current.scrollLeft;
              var clientW = scoreAreaRef.current.clientWidth;
              var vbOffset = isMobile ? mobileViewBoxX : 0;
              var rightPadEnd = isMobile ? MOBILE_RIGHT_PAD_SVG : STAFF_LEFT;
              var endScroll = Math.max(0, (endBarX + rightPadEnd - vbOffset) * finishCssPerSvg - clientW);
              var target = Math.max(finishStartScrollLeft, endScroll);
              scoreAreaRef.current.scrollLeft = finishStartScrollLeft + (target - finishStartScrollLeft) * eased;
            }
            if (p < 1) requestAnimationFrame(finishStep);
            else stopCleanup();
          };
          requestAnimationFrame(finishStep);
        }
      }, time * 1e3));
    }
    playTimeoutRef.current = timeouts;
  }, [measures, beatsPerMeasure, keySig, speakBeat, clef]);
  scheduleFromRef.current = scheduleFrom;
  var bpmResumeTimer = useRef(null);
  var onBpmSliderChange = useCallback((newBpm) => {
    setBpm(newBpm);
    if (!sliderActiveRef.current && isPlayingRef.current) {
      sliderActiveRef.current = true;
      wasPlayingRef.current = true;
      playTimeoutRef.current.forEach(clearTimeout);
      playTimeoutRef.current = [];
      setPlayingIdx({ measure: -1, note: -1 });
      setPlayingNotes({});
      setMetronomeBeat(-1);
    }
    if (bpmResumeTimer.current) clearTimeout(bpmResumeTimer.current);
    bpmResumeTimer.current = setTimeout(() => {
      sliderActiveRef.current = false;
      if (wasPlayingRef.current) {
        wasPlayingRef.current = false;
        var pos = playPositionRef.current;
        var mi = pos.measure;
        if (mi >= measures.length) {
          wasPlayingRef.current = false;
          setIsPlaying(false);
          isPlayingRef.current = false;
          return;
        }
        scheduleFromRef.current(mi, 0, 0, newBpm);
        setPlayRestartTick((t) => t + 1);
      }
    }, 500);
  }, [beatsPerMeasure, measures.length]);
  var playScore = async () => {
    if (isPlaying) {
      playTimeoutRef.current.forEach(clearTimeout);
      playTimeoutRef.current = [];
      if (bpmResumeTimer.current) {
        clearTimeout(bpmResumeTimer.current);
        bpmResumeTimer.current = null;
      }
      wasPlayingRef.current = false;
      sliderActiveRef.current = false;
      setIsPlaying(false);
      isPlayingRef.current = false;
      setIsPaused(false);
      setPlayingIdx({ measure: -1, note: -1 });
      setPlayingNotes({});
      setPressedPianoKeys({});
      setMetronomeBeat(-1);
      playStartTimeRef.current = null;
      playBpmRef.current = null;
      if (endRepeatPassRef.current) endRepeatPassRef.current.clear();
      repeatCountRef.current = 0;
      if (synthRef.current) synthRef.current.dispose();
      return;
    }
    await ensureTone();
    if (typeof Tone === "undefined" || !Tone.PolySynth) return;
    try {
      Tone.start();
      if (Tone.context && Tone.context.state !== "running") {
        Tone.context.resume();
      }
    } catch (e) {
    }
    synthRef.current = new Tone.PolySynth(Tone.Synth, {
      envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 0.8 },
      oscillator: { type: "triangle8" }
    }).toDestination();
    synthRef.current.volume.value = -8;
    if (metronomeRef.current) {
      clearInterval(metronomeRef.current);
      metronomeRef.current = null;
    }
    if (metronomeTickRef.current) {
      try {
        metronomeTickRef.current.synth.dispose();
      } catch (e) {
      }
      metronomeTickRef.current = null;
    }
    var startMi = 0;
    if (isWidescreen) {
      startMi = measureIdxAtRelX(tabletViewX);
    } else if (scoreAreaRef.current) {
      var scale = isMobile ? mobileScale : 1;
      startMi = measureIdxAtRelX(scoreAreaRef.current.scrollLeft / scale);
    }
    startMi = Math.max(0, Math.min(startMi, measures.length - 1));
    setIsPlaying(true);
    isPlayingRef.current = true;
    setIsPaused(false);
    playPositionRef.current = { measure: startMi, note: 0 };
    repeatCountRef.current = 0;
    navStateRef.current = { mode: "none", tookNav: /* @__PURE__ */ new Set() };
    metronomeStartBeatOffsetRef.current = 0;
    dropStartMiRef.current = startMi;
    if (metronomeOn) {
      var beatDuration = quarterSecondsAtBpm(bpm, timeSig);
      var timeouts = [];
      if (metronomeMode === "voice_eighth") {
        for (var tick = 0; tick < 8; tick++) {
          var t = tick * beatDuration / 2;
          var tk = tick;
          timeouts.push(setTimeout(() => {
            setMetronomeBeat(Math.floor(tk / 2));
            speakBeat(tk % 2 === 0 ? Math.floor(tk / 2) + 1 : "and");
          }, t * 1e3));
        }
      } else {
        for (var beat = 0; beat < 4; beat++) {
          var t = beat * beatDuration;
          var b = beat;
          timeouts.push(setTimeout(() => {
            setMetronomeBeat(b);
            if (metronomeMode === "voice") speakBeat(b + 1);
          }, t * 1e3));
        }
      }
      timeouts.push(setTimeout(() => {
        scheduleFrom(startMi, 0, 0, bpm);
        setPlayRestartTick((t2) => t2 + 1);
      }, 4 * beatDuration * 1e3));
      playTimeoutRef.current = timeouts;
    } else {
      scheduleFrom(startMi, 0, 0, bpm);
    }
  };
  var pauseResume = useCallback(() => {
    if (!isPlaying) return;
    if (!isPaused) {
      playTimeoutRef.current.forEach(clearTimeout);
      playTimeoutRef.current = [];
      setMetronomeBeat(-1);
      setIsPaused(true);
    } else {
      var mi, ni;
      ni = 0;
      var relX = tabletViewX - contentStart;
      var partialMi = measureIdxAtRelX(relX);
      var partialLeftX = contentStart + offsetOfMeasure(partialMi);
      mi = partialLeftX >= tabletViewX ? partialMi : partialMi + 1;
      if (mi >= measures.length) {
        setIsPlaying(false);
        isPlayingRef.current = false;
        setIsPaused(false);
        return;
      }
      setPlayingIdx({ measure: mi, note: ni });
      playPositionRef.current = { measure: mi, note: ni };
      scheduleFrom(mi, ni, 0, bpm);
      setPlayRestartTick((t) => t + 1);
      setIsPaused(false);
    }
  }, [isPlaying, isPaused, measures, bpm, scheduleFrom, tabletViewX, contentStart, offsetOfMeasure, measureIdxAtRelX]);
  var deleteSelected = useCallback(() => {
    if (!selectedNote) return;
    var { measure, note: ni, chordIdx } = selectedNote;
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[measure].notes];
      if (typeof chordIdx === "number") {
        var n = { ...notes[ni] };
        var chord = [...n.chord || []];
        chord.splice(chordIdx, 1);
        if (chord.length > 0) n.chord = chord;
        else delete n.chord;
        notes[ni] = n;
      } else {
        var n = notes[ni];
        if (n.chord && n.chord.length > 0) {
          var all = [
            { name: n.name, octave: n.octave, accidental: n.accidental || "none", tie: n.tie || false, _isPrimary: true },
            ...n.chord.map((c) => ({ name: c.name, octave: c.octave, accidental: c.accidental || "none", tie: c.tie || false }))
          ];
          var remaining = all.filter((p) => !p._isPrimary).sort(
            (a, b) => _CHORD_LETTER[a.name] + (a.octave || 0) * 7 - (_CHORD_LETTER[b.name] + (b.octave || 0) * 7)
          );
          var newPrimary = remaining[0];
          var newChord = remaining.slice(1).map((p) => ({ name: p.name, octave: p.octave, accidental: p.accidental, tie: p.tie }));
          var updated = {
            ...n,
            name: newPrimary.name,
            octave: newPrimary.octave,
            accidental: newPrimary.accidental,
            tie: newPrimary.tie
          };
          if (newChord.length > 0) updated.chord = newChord;
          else delete updated.chord;
          notes[ni] = updated;
        } else {
          notes.splice(ni, 1);
        }
      }
      next[measure] = { ...next[measure], notes: distributeNotes(notes) };
      return next;
    });
    setSelectedNote(null);
    setSelectedNotes([]);
  }, [selectedNote, beatsPerMeasure, distributeNotes]);
  var updateLyric = useCallback((measureIdx, noteIdx, lyric, verseIdx) => {
    setMeasures((prev) => {
      var next = [...prev];
      var notes = [...next[measureIdx].notes];
      var note = { ...notes[noteIdx] };
      if (verseIdx === void 0 || verseIdx === 0) {
        note.lyric = lyric;
      }
      if (verseIdx !== void 0) {
        if (!note.verses) note.verses = [note.lyric || ""];
        while (note.verses.length <= verseIdx) note.verses.push("");
        note.verses[verseIdx] = lyric;
        if (verseIdx === 0) note.lyric = lyric;
        while (note.verses.length > 0 && !note.verses[note.verses.length - 1]) {
          note.verses.pop();
        }
      }
      notes[noteIdx] = note;
      next[measureIdx] = { ...next[measureIdx], notes };
      return next;
    });
  }, []);
  var advanceToNextNote = useCallback((stepChordMembers = false) => {
    var _a2, _b2;
    if (!selectedNote) return;
    var { measure: mi, note: ni, chordIdx } = selectedNote;
    var curNote = (_b2 = (_a2 = measures[mi]) == null ? void 0 : _a2.notes) == null ? void 0 : _b2[ni];
    if (stepChordMembers && curNote && Array.isArray(curNote.chord) && curNote.chord.length) {
      var curIdx = typeof chordIdx === "number" ? chordIdx : -1;
      if (curIdx + 1 < curNote.chord.length) {
        setSelectedNote({ measure: mi, note: ni, chordIdx: curIdx + 1 });
        return;
      }
    }
    var startStaff = (curNote == null ? void 0 : curNote.staff) === "bass" ? "bass" : "treble";
    var eligible = (n) => !n.isRest && (n.staff === "bass" ? "bass" : "treble") === startStaff;
    for (var j = ni + 1; j < measures[mi].notes.length; j++) {
      if (eligible(measures[mi].notes[j])) {
        setSelectedNote({ measure: mi, note: j });
        return;
      }
    }
    for (var m = mi + 1; m < measures.length; m++) {
      var ns = measures[m].notes;
      for (var j = 0; j < ns.length; j++) {
        if (eligible(ns[j])) {
          setSelectedNote({ measure: m, note: j });
          return;
        }
      }
    }
  }, [selectedNote, measures]);
  var lyricInputRef = useRef(null);
  var scrollAnimRef = useRef(null);
  useEffect(() => {
    if (window.__RPM_NOSCROLL__) return;
    if (!isPlaying || isPaused) {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
        scrollAnimRef.current = null;
      }
      return;
    }
    var container = scoreAreaRef.current;
    if (!container) return;
    var ANCHOR = 7 / 8;
    var _lastViewSync = 0;
    var _lastPaint = 0;
    var tick = () => {
      var startT = playStartTimeRef.current;
      var timeline = scrollTimelineRef.current;
      if (startT == null || !timeline.length) {
        scrollAnimRef.current = requestAnimationFrame(tick);
        return;
      }
      var elapsedMs = performance.now() - startT;
      var x = timeline[0].x;
      var lastWp = timeline[timeline.length - 1];
      if (elapsedMs >= lastWp.t) {
        var currentBpm = playBpmRef.current || bpm;
        var measureDurMs = beatsPerMeasure * quarterSecondsAtBpm(currentBpm, timeSig) * 1e3;
        var pxPerMs = measureWidth / measureDurMs;
        x = lastWp.x + (elapsedMs - lastWp.t) * pxPerMs;
      } else if (elapsedMs > timeline[0].t) {
        for (var i = 0; i < timeline.length - 1; i++) {
          var a = timeline[i], b = timeline[i + 1];
          if (elapsedMs >= a.t && elapsedMs < b.t) {
            var ratio = (elapsedMs - a.t) / (b.t - a.t);
            x = a.x + ratio * (b.x - a.x);
            break;
          }
        }
      }
      if (isWidescreen) {
        var visibleSvgW = tabletViewW / staffScale;
        var target = Math.min(maxViewX, x - visibleSvgW * ANCHOR);
        playViewXRef.current = target;
        var _nowMs = performance.now();
        if (svgRef.current && _nowMs - _lastPaint > 80) {
          _lastPaint = _nowMs;
          var _vw = tabletViewW / staffScale / (mobileZoom || 1);
          var _vh = tabletViewH / staffScale / (mobileZoom || 1);
          svgRef.current.setAttribute("viewBox", `${target} ${tabletViewTop + tabletViewYOffset} ${_vw} ${_vh}`);
        }
      } else {
        var cssPerSvg = isMobile ? mobileScale * (mobileZoom || 1) * staffScale : 1;
        var vbOffset = isMobile ? mobileViewBoxX : 0;
        var rightPadEnd = isMobile ? MOBILE_RIGHT_PAD_SVG : STAFF_LEFT;
        var endCapScroll = Math.max(0, (endBarX + rightPadEnd - vbOffset) * cssPerSvg - container.clientWidth);
        var target = Math.min(endCapScroll, Math.max(0, (x - vbOffset) * cssPerSvg - container.clientWidth * ANCHOR));
        var newScroll = Math.max(container.scrollLeft, target);
        container.scrollLeft = newScroll;
        if (isMobile) setMobileScrollX(newScroll / cssPerSvg);
      }
      scrollAnimRef.current = requestAnimationFrame(tick);
    };
    scrollAnimRef.current = requestAnimationFrame(tick);
    return () => {
      if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
    };
  }, [isPlaying, isPaused, isMobile, isWidescreen, mobileScale, mobileZoom, tabletViewW, maxViewX, bpm, beatsPerMeasure, staffScale, endBarX]);
  useEffect(() => {
    if ((playMode === "learn" || playMode === "practice") && (!pianoSynthRef.current || pianoSynthRef.current.disposed)) {
      var cancelled = false;
      ensureTone().then(() => {
        if (cancelled) return;
        if (typeof Tone === "undefined" || !Tone.Sampler) return;
        Tone.start();
        var baseUrl = "/public/piano/";
        pianoSynthRef.current = new Tone.Sampler({
          urls: {
            A0: "A0.mp3",
            C1: "C1.mp3",
            "D#1": "Ds1.mp3",
            "F#1": "Fs1.mp3",
            A1: "A1.mp3",
            C2: "C2.mp3",
            "D#2": "Ds2.mp3",
            "F#2": "Fs2.mp3",
            A2: "A2.mp3",
            C3: "C3.mp3",
            "D#3": "Ds3.mp3",
            "F#3": "Fs3.mp3",
            A3: "A3.mp3",
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            "D#5": "Ds5.mp3",
            "F#5": "Fs5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            "D#6": "Ds6.mp3",
            "F#6": "Fs6.mp3",
            A6: "A6.mp3",
            C7: "C7.mp3",
            "D#7": "Ds7.mp3",
            "F#7": "Fs7.mp3",
            A7: "A7.mp3"
          },
          release: 1,
          baseUrl,
          onload: () => {
            pianoLoadedRef.current = true;
          }
        }).toDestination();
        pianoSynthRef.current.volume.value = -3;
      }).catch(() => {
      });
      return () => {
        cancelled = true;
      };
    }
  }, [playMode]);
  useEffect(() => {
    if (metronomeOn) setMetronomeOn(false);
    if (metronomeRef.current) {
      clearInterval(metronomeRef.current);
      metronomeRef.current = null;
    }
    if (metronomeTickRef.current) {
      try {
        metronomeTickRef.current.synth.dispose();
      } catch (e) {
      }
      metronomeTickRef.current = null;
    }
    if (metroClickSynthRef.current) {
      try {
        metroClickSynthRef.current.dispose();
      } catch (e) {
      }
      metroClickSynthRef.current = null;
    }
    setMetronomeBeat(-1);
  }, [playMode]);
  useEffect(() => {
    setPlayMode(null);
  }, [childLock]);
  useEffect(() => {
    if (isMultiStaff(clef) && playMode === "practice" && midiInputCount === 0) setPlayMode(null);
  }, [clef, playMode, midiInputCount]);
  useEffect(() => {
    if (isMobile && !childLock) setChildLock(true);
  }, [isMobile, childLock]);
  useEffect(() => {
    if (!currentSongId) return;
    var svgX = offsetOfMeasure(0);
    if (IS_LOCALHOST && playMode === "learn") {
      console.log("[RESET-EFFECT FIRED]", { svgX: Math.round(svgX), tabletViewW: Math.round(tabletViewW), playMode, isWidescreen, isMobile, mobileScale, currentSongId, clef });
    }
    if (isWidescreen) {
      setTabletViewX(svgX);
    }
    if (scoreAreaRef.current) {
      var scale = isMobile ? mobileScale : 1;
      scoreAreaRef.current.scrollLeft = Math.max(0, svgX * scale);
    }
  }, [currentSongId, clef, isWidescreen, isMobile, mobileScale, tabletViewW, playMode]);
  useEffect(() => {
    var _a2;
    if (playMode !== "practice") {
      prevPracticeNoteXRef.current = -Infinity;
      return;
    }
    var note = (_a2 = measures[practicePos.measure]) == null ? void 0 : _a2.notes[practicePos.note];
    if (!note) return;
    var noteX = contentStart + offsetOfMeasure(practicePos.measure) + note.x;
    var prevNoteX = prevPracticeNoteXRef.current;
    prevPracticeNoteXRef.current = noteX;
    if (prevNoteX === -Infinity) return;
    if (noteX < prevNoteX) {
      var resetX = practicePos.measure * measureWidth;
      if (isWidescreen) setTabletViewX(resetX);
      if (scoreAreaRef.current) {
        var cssPerSvg = isMobile ? mobileScale * (mobileZoom || 1) * staffScale : 1;
        scoreAreaRef.current.scrollLeft = Math.max(0, resetX * cssPerSvg);
      }
      return;
    }
    var ANCHOR = 7 / 8;
    if (isWidescreen) {
      var visibleSvgW = tabletViewW / staffScale;
      var target = Math.min(maxViewX, noteX - visibleSvgW * ANCHOR);
      setTabletViewX((prev) => Math.max(prev, target));
    }
    if (scoreAreaRef.current) {
      var cssPerSvg = isMobile ? mobileScale * (mobileZoom || 1) * staffScale : 1;
      var clientW = scoreAreaRef.current.clientWidth;
      var vbOffset = isMobile ? mobileViewBoxX : 0;
      var rightPadEnd = isMobile ? MOBILE_RIGHT_PAD_SVG : STAFF_LEFT;
      var endCap = Math.max(0, (endBarX + rightPadEnd - vbOffset) * cssPerSvg - clientW);
      var target = Math.min(endCap, Math.max(0, (noteX - vbOffset) * cssPerSvg - clientW * ANCHOR));
      scoreAreaRef.current.scrollLeft = Math.max(scoreAreaRef.current.scrollLeft, target);
    }
  }, [playMode, practicePos.measure, practicePos.note, measures, contentStart, measureWidth, isWidescreen, tabletViewW, isMobile, mobileScale, mobileZoom, staffScale, maxViewX, endBarX, mobileViewBoxX]);
  var tabletViewXRef = useRef(0);
  useEffect(() => {
    tabletViewXRef.current = tabletViewX;
  }, [tabletViewX]);
  var editScrollAnimRef = useRef(null);
  var smoothPanTo = useCallback((target) => {
    if (editScrollAnimRef.current) cancelAnimationFrame(editScrollAnimRef.current);
    var from = tabletViewXRef.current;
    var dist = target - from;
    if (Math.abs(dist) < 1) {
      setTabletViewX(target);
      tabletViewXRef.current = target;
      return;
    }
    var dur = 220;
    var t0 = performance.now();
    var step = (now) => {
      var p = Math.min(1, (now - t0) / dur);
      var eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      var v = from + dist * eased;
      setTabletViewX(v);
      tabletViewXRef.current = v;
      if (p < 1) editScrollAnimRef.current = requestAnimationFrame(step);
    };
    editScrollAnimRef.current = requestAnimationFrame(step);
  }, []);
  useEffect(() => {
    var _a2;
    if (childLock || !isWidescreen) return;
    if (isPlayingRef.current) return;
    if (draggingNote) return;
    if (!selectedNote) return;
    var m = measures[selectedNote.measure];
    var note = (_a2 = m == null ? void 0 : m.notes) == null ? void 0 : _a2[selectedNote.note];
    if (!note) return;
    var baseSel = contentStart + offsetOfMeasure(selectedNote.measure);
    var selX = baseSel + (note.x || 0);
    var visibleSvgW = tabletViewW / staffScale / (mobileZoom || 1);
    var lo = selX;
    var hi = selX + NOTE_RX;
    var cur = tabletViewXRef.current;
    var margin = 90;
    var target = cur;
    if (hi + margin > cur + visibleSvgW) target = hi + margin - visibleSvgW;
    if (lo - margin < target) target = lo - margin;
    target = Math.max(0, Math.min(maxViewX, target));
    if (Math.abs(target - cur) < 1) return;
    smoothPanTo(target);
  }, [selectedNote, childLock, isWidescreen, draggingNote, contentStart, tabletViewW, staffScale, mobileZoom, maxViewX, smoothPanTo]);
  var tabletTouchStartX = useRef(null);
  var tabletTouchStartY = useRef(null);
  var tabletViewXOnTouchStart = useRef(0);
  var tabletLyricsScrollOnStart = useRef(0);
  var tabletSwipeAxis = useRef(null);
  var lyricsAreaTop = isMultiStaff(clef) ? STAFF_TOP + 4 * LINE_SPACING + 30 : STAFF_TOP + 4 * LINE_SPACING + 70;
  var lyricsMaxScroll = isMultiStaff(clef) ? Math.max(0, (maxVerseCount - 2) * 34) : Math.max(0, STAFF_TOP + 4 * LINE_SPACING + 100 + Math.max(0, maxVerseCount - 1) * 34 + 30 - (tabletViewTop + tabletViewH));
  var tabletViewYOffsetOnStart = useRef(0);
  var handleTabletTouchStart = useCallback((e) => {
    if (!isTablet) return;
    if (e.touches.length >= 2) return;
    tabletTouchStartX.current = e.touches[0].clientX;
    tabletTouchStartY.current = e.touches[0].clientY;
    tabletViewXOnTouchStart.current = tabletViewX;
    tabletLyricsScrollOnStart.current = lyricsScrollY;
    tabletViewYOffsetOnStart.current = tabletViewYOffset;
    tabletSwipeAxis.current = null;
  }, [isTablet, tabletViewX, lyricsScrollY, tabletViewYOffset]);
  var handleTabletTouchMove = useCallback((e) => {
    if (IS_LOCALHOST) console.log("[MOVE]", { isTablet, hasStart: tabletTouchStartX.current !== null, draggingNote, touches: e.touches.length, axis: tabletSwipeAxis.current, mode: playModeRef.current });
    if (!isTablet || tabletTouchStartX.current === null || draggingNote) return;
    if (e.touches.length >= 2) return;
    var dx = tabletTouchStartX.current - e.touches[0].clientX;
    var dy = tabletTouchStartY.current - e.touches[0].clientY;
    if (!tabletSwipeAxis.current) {
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        tabletSwipeAxis.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
      } else return;
    }
    var svgPixelsPerScreenPixel = tabletViewW / viewportWidth;
    var zoom = mobileZoom || 1;
    if (tabletSwipeAxis.current === "h") {
      var newX = Math.max(0, Math.min(maxViewX, tabletViewXOnTouchStart.current + dx * svgPixelsPerScreenPixel / zoom));
      if (IS_LOCALHOST) {
        console.log("[DRAG]", { dx: Math.round(dx), startVX: Math.round(tabletViewXOnTouchStart.current), newX: Math.round(newX), maxViewX: Math.round(maxViewX), measuresLen: measures.length, endBarX: Math.round(endBarX), contentStart: Math.round(contentStart), measureWidth: Math.round(measureWidth), measureAt: Math.round(newX / measureWidth), tabletViewW: Math.round(tabletViewW), staffScale, viewportWidth, mode: playModeRef.current });
      }
      setTabletViewX(newX);
    } else if (zoom > 1) {
      var maxYOffset = tabletViewH / staffScale * (1 - 1 / zoom);
      var newY = Math.max(0, Math.min(maxYOffset, tabletViewYOffsetOnStart.current + dy * svgPixelsPerScreenPixel / zoom));
      setTabletViewYOffset(newY);
    } else {
      var newScroll = tabletLyricsScrollOnStart.current + dy * svgPixelsPerScreenPixel;
      setLyricsScrollY(Math.max(0, Math.min(lyricsMaxScroll, newScroll)));
    }
  }, [isTablet, tabletViewW, viewportWidth, draggingNote, lyricsMaxScroll, mobileZoom, tabletViewH, staffScale, maxViewX]);
  var handleTabletTouchEnd = useCallback(() => {
    tabletTouchStartX.current = null;
    tabletTouchStartY.current = null;
    tabletSwipeAxis.current = null;
  }, []);
  var pinchStartDist = useRef(null);
  var pinchStartZoom = useRef(1);
  var handleMobilePinchStart = useCallback((e) => {
    if (!(isMobile || isTablet) || e.touches.length !== 2) return;
    var dx = e.touches[0].clientX - e.touches[1].clientX;
    var dy = e.touches[0].clientY - e.touches[1].clientY;
    pinchStartDist.current = Math.hypot(dx, dy);
    pinchStartZoom.current = mobileZoom;
  }, [isMobile, isTablet, mobileZoom]);
  var handleMobilePinchMove = useCallback((e) => {
    if (!(isMobile || isTablet) || e.touches.length !== 2 || pinchStartDist.current == null) return;
    e.preventDefault();
    var dx = e.touches[0].clientX - e.touches[1].clientX;
    var dy = e.touches[0].clientY - e.touches[1].clientY;
    var dist = Math.hypot(dx, dy);
    var next = Math.max(0.2, Math.min(3, pinchStartZoom.current * (dist / pinchStartDist.current)));
    setMobileZoom(next);
    if (next <= 1 && isTablet) setTabletViewYOffset(0);
  }, [isMobile, isTablet]);
  var handleMobilePinchEnd = useCallback((e) => {
    if (e.touches.length < 2) pinchStartDist.current = null;
  }, []);
  var handleScoreWheelZoom = useCallback((e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    setMobileZoom((z) => Math.max(0.2, Math.min(3, (z || 1) - e.deltaY * 0.01)));
  }, []);
  useEffect(() => {
    if (selectedNote && scoreAreaRef.current) {
      var cStart = STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH;
      var measureX = cStart + selectedNote.measure * measureWidth;
      var container = scoreAreaRef.current;
      var containerWidth = container.clientWidth;
      var targetScroll = measureX - containerWidth / 2 + measureWidth / 2;
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }
  }, [selectedNote, keySigWidth]);
  var pendingScrollMeasureRef = useRef(null);
  useEffect(() => {
    if (pendingScrollMeasureRef.current == null) return;
    var pend = pendingScrollMeasureRef.current;
    pendingScrollMeasureRef.current = null;
    var mi = typeof pend === "number" ? pend : pend.measure;
    if (mi == null || mi < 0) return;
    if (isWidescreen && !childLock) {
      var m = measures[mi];
      if (!m) return;
      var niRaw = typeof pend === "object" && pend.note != null ? pend.note : m.notes.length - 1;
      var note = m.notes[niRaw] || m.notes[m.notes.length - 1];
      var baseSel = contentStart + offsetOfMeasure(mi);
      var noteX = baseSel + (note && note.x || 0);
      var visibleSvgW = tabletViewW / staffScale / (mobileZoom || 1);
      var hi = noteX + NOTE_RX;
      var cur = tabletViewXRef.current;
      var margin = 90;
      var target = cur;
      if (hi + margin > cur + visibleSvgW) target = hi + margin - visibleSvgW;
      if (noteX - margin < target) target = noteX - margin;
      target = Math.max(0, Math.min(maxViewX, target));
      if (Math.abs(target - cur) < 1) return;
      smoothPanTo(target);
      return;
    }
    var container = scoreAreaRef.current;
    if (!container) return;
    var cStart = STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH;
    var measureX = cStart + mi * measureWidth;
    var targetScroll = measureX - container.clientWidth / 2 + measureWidth / 2;
    container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
  }, [measures, keySigWidth, isWidescreen, childLock, contentStart, tabletViewW, staffScale, mobileZoom, maxViewX, smoothPanTo]);
  useEffect(() => {
    var durationKeys = { "4": "whole", "2": "half", "1": "quarter", "5": "eighth", "6": "sixteenth" };
    var handler = (e) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i2, _j2;
      if (childLock) return;
      if (window._bpmFocused) return;
      if (((_a2 = document.activeElement) == null ? void 0 : _a2.tagName) === "INPUT") return;
      if (isPublished && e.key !== "Shift" && e.key !== "Meta" && e.key !== "Control" && e.key !== "Alt") {
        var _toolbarOnly = /^[1-9]$/.test(e.key) || // duration / fingering / dot toggles
        e.key === "." || e.key === "0" || e.key === "Tab" || e.key === "Escape" || e.key.startsWith("Arrow");
        if (!_toolbarOnly) {
          showEditHint("Unpublish this song first before you can edit it.");
          e.preventDefault();
          return;
        }
      }
      if ((isDrumsMode || clef === "drum" || clef === "percussion") && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
        var _beatIdx = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].indexOf(e.key.toLowerCase());
        if (_beatIdx >= 0) {
          e.preventDefault();
          e.stopImmediatePropagation();
          placeDrumOnBeat(_beatIdx);
          return;
        }
      }
      if ((isDrumsMode || clef === "drum" || clef === "percussion") && (e.key === "h" || e.key === "g") && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && selectedNote) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var _dir = e.key === "h" ? "up" : "down";
        var _cur = (_b2 = measures[selectedNote.measure]) == null ? void 0 : _b2.notes[selectedNote.note];
        if (_cur && /bass drum|kick|pedal hi-hat/.test(String(_cur.drumPiece).toLowerCase())) return;
        setMeasures((prev) => {
          var next = [...prev];
          var notes = [...next[selectedNote.measure].notes];
          notes[selectedNote.note] = { ...notes[selectedNote.note], stem: _dir };
          next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
          return next;
        });
        return;
      }
      var lk = e.key.toLowerCase();
      var _wantSharp = e.key === "#";
      var _wantFlat = lk === "b" && !e.shiftKey;
      if ((_wantSharp || _wantFlat) && !e.metaKey && !e.ctrlKey && !e.altKey && selectedNote) {
        var selNote = (_c = measures[selectedNote.measure]) == null ? void 0 : _c.notes[selectedNote.note];
        if (selNote && !selNote.isRest) {
          var selChordIdx = selectedNote.chordIdx;
          var isChordMember = typeof selChordIdx === "number" && Array.isArray(selNote.chord) && selNote.chord[selChordIdx];
          var currentAcc = isChordMember ? (_d = selNote.chord[selChordIdx].accidental) != null ? _d : "none" : (_e = selNote.accidental) != null ? _e : "none";
          e.preventDefault();
          e.stopImmediatePropagation();
          var targetAcc = _wantSharp ? "sharp" : "flat";
          var nextAcc = currentAcc === targetAcc ? "none" : targetAcc;
          setMeasures((prev) => {
            var next = [...prev];
            var notes = [...next[selectedNote.measure].notes];
            var cur = notes[selectedNote.note];
            if (isChordMember) {
              var newChord = cur.chord.map(
                (cm, ci) => ci === selChordIdx ? { ...cm, accidental: nextAcc } : cm
              );
              notes[selectedNote.note] = { ...cur, chord: newChord };
            } else {
              notes[selectedNote.note] = { ...cur, accidental: nextAcc };
            }
            next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
            return next;
          });
          setSelectedAccidental(nextAcc);
          return;
        }
      }
      if (lk === "c" && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && selectedNote) {
        var selNote = (_f = measures[selectedNote.measure]) == null ? void 0 : _f.notes[selectedNote.note];
        if (selNote && !selNote.isRest) {
          e.preventDefault();
          e.stopImmediatePropagation();
          setMeasures((prev) => {
            var next = [...prev];
            var notes = [...next[selectedNote.measure].notes];
            var cur = notes[selectedNote.note];
            notes[selectedNote.note] = { ...cur, staccato: !cur.staccato };
            next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
            return next;
          });
          return;
        }
      }
      if (lk === "a" && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && selectedNote) {
        var selNote = (_g = measures[selectedNote.measure]) == null ? void 0 : _g.notes[selectedNote.note];
        if (selNote && !selNote.isRest) {
          e.preventDefault();
          e.stopImmediatePropagation();
          setMeasures((prev) => {
            var next = [...prev];
            var notes = [...next[selectedNote.measure].notes];
            var cur = notes[selectedNote.note];
            var _acc, _dir2;
            if (!cur.accent) {
              _acc = true;
              _dir2 = "up";
            } else if (cur.accentDir !== "down") {
              _acc = true;
              _dir2 = "down";
            } else {
              _acc = false;
              _dir2 = void 0;
            }
            notes[selectedNote.note] = { ...cur, accent: _acc, accentDir: _dir2 };
            next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
            return next;
          });
          return;
        }
      }
      if (lk === "s" && !isDrumsMode && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && selectedNote) {
        var selNote = (_h = measures[selectedNote.measure]) == null ? void 0 : _h.notes[selectedNote.note];
        if (selNote && !selNote.isRest) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (slurArmed && slurArmed.dir === "up") {
            setSlurArmed(null);
            return;
          }
          setMeasures((prev) => {
            var next = [...prev];
            var notes = [...next[selectedNote.measure].notes];
            notes[selectedNote.note] = { ...notes[selectedNote.note], slur: "up" };
            next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
            return next;
          });
          setSlurArmed({ mi: selectedNote.measure, ni: selectedNote.note, dir: "up" });
          try {
            showEditHint("\u{1F3B5} Now click the END note for the slur");
          } catch (e2) {
          }
          return;
        }
      }
      if (lk === "t" && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && selectedNote) {
        var selNote = (_i2 = measures[selectedNote.measure]) == null ? void 0 : _i2.notes[selectedNote.note];
        if (selNote && !selNote.isRest) {
          e.preventDefault();
          e.stopImmediatePropagation();
          setMeasures((prev) => {
            var next = [...prev];
            var notes = [...next[selectedNote.measure].notes];
            var cur = notes[selectedNote.note];
            if (cur.tie && cur.tieDir === "up") {
              var { tieDir: _drop, ...rest } = cur;
              notes[selectedNote.note] = Array.isArray(cur.chord) ? { ...rest, tie: false, chord: cur.chord.map((c) => ({ ...c, tie: false })) } : { ...rest, tie: false };
            } else {
              notes[selectedNote.note] = Array.isArray(cur.chord) ? { ...cur, tie: true, tieDir: "up", chord: cur.chord.map((c) => ({ ...c, tie: true })) } : { ...cur, tie: true, tieDir: "up" };
            }
            next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
            return next;
          });
          return;
        }
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        deleteSelected();
        return;
      }
      if (showFingering && selectedNote && !e.repeat && !e.metaKey && !e.ctrlKey && !e.altKey && (e.key === "Shift" || e.key === "Enter")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        advanceToNextNote(true);
        return;
      }
      if (showFingering && selectedNote && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (/^[0-9]$/.test(e.key)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          var selNote = (_j2 = measures[selectedNote.measure]) == null ? void 0 : _j2.notes[selectedNote.note];
          var isBass = (selNote == null ? void 0 : selNote.staff) === "bass";
          var fingMap = isBass ? { "1": 5, "2": 4, "3": 3, "4": 2, "5": 1 } : { "6": 1, "7": 2, "8": 3, "9": 4, "0": 5 };
          var fing = fingMap[e.key];
          if (fing && selNote && !selNote.isRest) {
            if (isPublished) {
              showEditHint("Unpublish this song first before you can edit it.");
              return;
            }
            var selChordIdx = selectedNote.chordIdx;
            var isChordMember = typeof selChordIdx === "number" && Array.isArray(selNote.chord) && selNote.chord[selChordIdx];
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var cur = notes[selectedNote.note];
              if (isChordMember) {
                var newChord = cur.chord.map(
                  (cm, ci) => ci === selChordIdx ? { ...cm, fingering: fing } : cm
                );
                notes[selectedNote.note] = { ...cur, chord: newChord };
              } else {
                notes[selectedNote.note] = { ...cur, fingering: fing };
              }
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
            setSelectedFingering(fing);
          }
          return;
        }
      }
      var dur = durationKeys[e.key];
      if (dur && !showFingering) {
        if (e.shiftKey) {
          setIsRestMode(true);
        } else {
          setIsRestMode(false);
        }
        setSelectedDuration(dur);
        setIsDotted(false);
        setIsTriplet(false);
        return;
      }
      if (showFingering && /^[12456]$/.test(e.key)) return;
      if (e.key === "8") {
        setIsDotted((prev) => {
          if (!prev) setIsTriplet(false);
          return !prev;
        });
        return;
      }
      if (e.key === "r" || e.key === "R") {
        setIsRestMode((prev) => !prev);
      }
      if (e.key === "z" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if (e.key === "z" && (e.ctrlKey || e.metaKey) && e.shiftKey) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener("keydown", handler, true);
    return () => window.removeEventListener("keydown", handler, true);
  }, [deleteSelected, childLock, undo, redo, selectedNote, measures, showFingering, isPublished, showEditHint, placeDrumOnBeat]);
  var renderMobilePanel = () => {
    switch (mobileTab) {
      case "note":
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, justifyContent: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: `m-btn ${tool === "note" ? "active" : ""}`, onClick: () => setTool("note") }, "\u270F\uFE0F Note"), /* @__PURE__ */ React.createElement("button", { className: `m-btn ${tool === "insert" ? "active" : ""}`, onClick: () => setTool("insert"), title: "Insert a note BETWEEN two existing notes (rather than appending at the end)" }, "\u2935\uFE0F Insert"), /* @__PURE__ */ React.createElement("button", { className: `m-btn ${tool === "eraser" ? "active" : ""}`, onClick: () => setTool("eraser") }, "\u{1F9F9} Erase"), tool === "eraser" && /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "m-btn",
            onClick: deleteSelected,
            disabled: !selectedNote,
            style: {
              background: selectedNote ? "var(--danger)" : "var(--bg3)",
              color: selectedNote ? "#fff" : "var(--text)",
              borderColor: selectedNote ? "var(--danger)" : "var(--border)",
              opacity: selectedNote ? 1 : 0.5
            },
            title: selectedNote ? "Delete the armed (black) notehead" : "Tap a notehead to arm it for delete"
          },
          "\u{1F5D1} Delete"
        ), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), NOTE_DURATIONS.filter((d) => d.id !== "thirty-second").map((d) => /* @__PURE__ */ React.createElement(
          "button",
          {
            key: `rest-${d.id}`,
            className: `m-btn-sq ${isRestMode && selectedDuration === d.id ? "active" : ""}`,
            onClick: () => {
              if (isRestMode && selectedDuration === d.id) {
                setIsRestMode(false);
              } else {
                setIsRestMode(true);
                setSelectedDuration(d.id);
              }
            },
            title: `${d.name} Rest`
          },
          /* @__PURE__ */ React.createElement(RestIcon, { type: REST_SYMBOLS[d.id], size: 20 })
        )), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), (() => {
          var _a2, _b2, _c;
          var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
          var selChordIdx = selectedNote == null ? void 0 : selectedNote.chordIdx;
          var isChordMember = typeof selChordIdx === "number" && Array.isArray(selNote == null ? void 0 : selNote.chord) && selNote.chord[selChordIdx];
          var currentAcc = selNote && !selNote.isRest ? isChordMember ? (_b2 = selNote.chord[selChordIdx].accidental) != null ? _b2 : "none" : (_c = selNote.accidental) != null ? _c : "none" : selectedAccidental;
          return ACCIDENTALS.map((a) => /* @__PURE__ */ React.createElement(
            "button",
            {
              key: a.id,
              className: `m-btn-sq ${currentAcc === a.id ? "active" : ""}`,
              onClick: () => {
                var _next = currentAcc === a.id ? "none" : a.id;
                if (selectedNote && !(selNote == null ? void 0 : selNote.isRest)) {
                  setMeasures((prev) => {
                    var next = [...prev];
                    var notes = [...next[selectedNote.measure].notes];
                    var cur = notes[selectedNote.note];
                    if (isChordMember) {
                      var newChord = cur.chord.map(
                        (cm, ci) => ci === selChordIdx ? { ...cm, accidental: _next } : cm
                      );
                      notes[selectedNote.note] = { ...cur, chord: newChord };
                    } else {
                      notes[selectedNote.note] = { ...cur, accidental: _next };
                    }
                    next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
                    return next;
                  });
                }
                setSelectedAccidental(_next);
              }
            },
            a.label
          ));
        })());
      case "duration":
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, justifyContent: "center" } }, NOTE_DURATIONS.filter((d) => d.id !== "thirty-second").map((d) => /* @__PURE__ */ React.createElement(
          "button",
          {
            key: d.id,
            className: `m-dur ${selectedDuration === d.id ? "active" : ""}`,
            onClick: () => {
              setSelectedDuration(d.id);
              setIsDotted(false);
              setIsTriplet(false);
            }
          },
          /* @__PURE__ */ React.createElement(DurationIcon, { type: d.id, size: 32 }),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, d.name)
        )), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `m-dur ${isDotted ? "active" : ""}`,
            onClick: () => {
              setIsDotted(!isDotted);
              if (!isDotted) setIsTriplet(false);
            }
          },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 24, lineHeight: "24px", fontWeight: 700 } }, "\u2022"),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Dot")
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `m-dur ${isTriplet ? "active" : ""}`,
            onClick: () => {
              setIsTriplet(!isTriplet);
              if (!isTriplet) setIsDotted(false);
            }
          },
          /* @__PURE__ */ React.createElement("svg", { width: 32, height: 36, viewBox: "0 0 40 44", style: { display: "block" } }, /* @__PURE__ */ React.createElement("text", { x: 20, y: 10, textAnchor: "middle", fontSize: 13, fill: "currentColor", fontWeight: "600", fontFamily: "serif" }, "3"), /* @__PURE__ */ React.createElement("line", { x1: 9, y1: 13, x2: 33, y2: 13, stroke: "currentColor", strokeWidth: 3.5 }), /* @__PURE__ */ React.createElement("line", { x1: 9, y1: 13, x2: 9, y2: 33, stroke: "currentColor", strokeWidth: 1.8 }), /* @__PURE__ */ React.createElement("line", { x1: 21, y1: 13, x2: 21, y2: 33, stroke: "currentColor", strokeWidth: 1.8 }), /* @__PURE__ */ React.createElement("line", { x1: 33, y1: 13, x2: 33, y2: 33, stroke: "currentColor", strokeWidth: 1.8 }), /* @__PURE__ */ React.createElement("ellipse", { cx: 6, cy: 35, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,6,35)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 18, cy: 35, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,18,35)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 30, cy: 35, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,30,35)" })),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Trip")
        ));
      case "options":
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, justifyContent: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: "m-btn", onClick: addMeasure }, "+ Measure"), /* @__PURE__ */ React.createElement("button", { className: "m-btn", onClick: removeMeasure }, "\u2212 Measure"), /* @__PURE__ */ React.createElement("button", { className: "m-btn", onClick: clearAll, style: { color: "var(--danger)" } }, "Clear All"), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), [
          { top: 4, bottom: 4 },
          { top: 3, bottom: 4 },
          { top: 2, bottom: 4 },
          { top: 2, bottom: 2 },
          { top: 3, bottom: 8 },
          { top: 6, bottom: 8 },
          { top: 9, bottom: 8 },
          { top: 12, bottom: 8 }
        ].map((ts) => {
          var active = timeSig.top === ts.top && timeSig.bottom === ts.bottom;
          return /* @__PURE__ */ React.createElement(
            "button",
            {
              key: `${ts.top}/${ts.bottom}`,
              className: `m-btn ${active ? "active" : ""}`,
              onClick: () => {
                var newTs = { top: ts.top, bottom: ts.bottom };
                setTimeSig(newTs);
                setMeasures((prev) => isMultiStaff(clef) ? recalcMeasures(prev, newTs) : rebarMeasures(prev, newTs));
              }
            },
            ts.top,
            "/",
            ts.bottom
          );
        }), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--text2)" } }, "Key"), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => shiftKey(-1),
            disabled: !transposeRange.canShiftDown,
            title: transposeRange.canShiftDown ? "Transpose down a half step" : "Lowest note is already A1",
            className: "m-btn",
            style: { minWidth: 28, padding: "0 8px", opacity: transposeRange.canShiftDown ? 1 : 0.35, cursor: transposeRange.canShiftDown ? "pointer" : "not-allowed" }
          },
          "\u25C0"
        ), /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "text",
            value: keyInput,
            onChange: (e) => setKeyInput(e.target.value),
            onBlur: commitKeyInput,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.target.blur();
              }
              e.stopPropagation();
            },
            placeholder: "C",
            style: {
              width: 46,
              height: 32,
              fontSize: 14,
              fontWeight: 600,
              textAlign: "center",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              color: "var(--text)",
              padding: 0,
              fontFamily: "inherit",
              outline: "none"
            }
          }
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => shiftKey(1),
            disabled: !transposeRange.canShiftUp,
            title: transposeRange.canShiftUp ? "Transpose up a half step" : "Highest note is already C8",
            className: "m-btn",
            style: { minWidth: 28, padding: "0 8px", opacity: transposeRange.canShiftUp ? 1 : 0.35, cursor: transposeRange.canShiftUp ? "pointer" : "not-allowed" }
          },
          "\u25B6"
        ), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--text2)" } }, "Key Sig"), /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKeySig(-1), className: "m-btn", style: { minWidth: 28, padding: "0 8px" } }, "\u25C0"), /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "text",
            value: keySigInput,
            onChange: (e) => setKeySigInput(e.target.value),
            onBlur: commitKeySigInput,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.target.blur();
              }
              e.stopPropagation();
            },
            placeholder: "C",
            style: {
              width: 46,
              height: 32,
              fontSize: 14,
              fontWeight: 600,
              textAlign: "center",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              color: "var(--text)",
              padding: 0,
              fontFamily: "inherit",
              outline: "none"
            }
          }
        ), /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKeySig(1), className: "m-btn", style: { minWidth: 28, padding: "0 8px" } }, "\u25B6"), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `m-btn ${metronomeOn ? "active" : ""}`,
            onClick: () => setMetronomeOn((prev) => !prev),
            title: "Metronome",
            style: { padding: "0 8px", display: "flex", alignItems: "center", gap: 4 }
          },
          /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 28", width: "20", height: "22" }, /* @__PURE__ */ React.createElement("path", { d: "M 4 25 L 8 3 L 16 3 L 20 25 Z", fill: "#b45309", stroke: "#78350f", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "10", y: "7", width: "4", height: "15", fill: "#fef3c7", stroke: "#78350f", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "5.5", r: "1", fill: "#78350f" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "5.5", x2: "10", y2: "22", stroke: "#78350f", strokeWidth: "1.2", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "11", width: "5", height: "2.5", fill: "#78350f", transform: "rotate(-7 11.5 12)" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "25", width: "20", height: "2", fill: "#78350f" })),
          /* @__PURE__ */ React.createElement("span", null, "Metro")
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "m-btn",
            onClick: () => setMetronomeMode((prev) => prev === "click" ? "voice" : prev === "voice" ? "voice_eighth" : "click")
          },
          metronomeMode === "click" ? "\u{1F941} Click" : metronomeMode === "voice" ? "\u2669" : "\u266B"
        ), /* @__PURE__ */ React.createElement("div", { className: "m-sep" }), /* @__PURE__ */ (() => {
          var arrowBtnStyle = {
            height: 22,
            minWidth: 28,
            padding: "0 6px",
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            color: "var(--text)",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "inherit"
          };
          var stackStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 };
          var dec = () => setBpm(Math.max(20, bpm - 1));
          var inc = () => setBpm(Math.min(500, bpm + 1));
          return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: stackStyle }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20, lineHeight: 1 } }, "\u{1F422}"), /* @__PURE__ */ React.createElement("button", { onClick: dec, style: arrowBtnStyle, title: "Slow down 1 BPM" }, "\u25C0")), /* @__PURE__ */ React.createElement(BpmInput, { bpm, setBpm }), /* @__PURE__ */ React.createElement("div", { style: stackStyle }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 20, lineHeight: 1 } }, "\u{1F407}"), /* @__PURE__ */ React.createElement("button", { onClick: inc, style: arrowBtnStyle, title: "Speed up 1 BPM" }, "\u25B6")));
        })());
      default:
        return null;
    }
  };
  if (!loaded) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      minHeight: "100vh",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      color: "#666",
      flexDirection: "column",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: { width: 64, height: 64 }, "aria-label": "" }, /* @__PURE__ */ React.createElement("rect", { width: "512", height: "512", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "420", fill: "#dc2626" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "380", fill: "#f97316" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "340", fill: "#facc15" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "300", fill: "#22c55e" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "260", fill: "#3b82f6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "220", fill: "#8b5cf6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "180", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("g", { transform: "translate(174, 495) scale(0.43, -0.43)", fill: "#000000", stroke: "#000000", strokeWidth: "20", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M325 1009H351Q357 968 366.0 936.5Q375 905 392.0 875.5Q409 846 437 812Q467 777 487.0 753.5Q507 730 527 704Q564 658 581.5 609.5Q599 561 599 511Q599 407 511 259H495Q523 318 545.5 377.5Q568 437 568 491Q568 545 540 602Q512 659 461.5 698.0Q411 737 351 741V175L325 175Z" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "191", cy: "175", rx: "160", ry: "128", transform: "rotate(12 191 175)" }))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "Loading Read&PlayMusic..."));
  }
  return /* @__PURE__ */ React.createElement("div", { style: {
    minHeight: "100dvh",
    height: "100dvh",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    touchAction: "manipulation"
  } }, /* @__PURE__ */ React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Open+Sans:wght@300;400&family=DM+Sans:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=optional');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Music&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&text=%CC%80%CC%81%CC%82%CC%83%CC%84%CC%85%CC%86%CC%87%CC%88%CC%89%CC%8A%CC%8B%CC%8C%CC%8D%CC%8E%CC%8F%CC%90%CC%91%CC%92%CC%93%CC%94%CC%95%CC%96%CC%97%CC%98%CC%99%CC%9A%CC%9B%CC%9C%CC%9D%CC%9E%CC%9F%CC%A0%CC%A1%CC%A2%CC%A3%CC%A4%CC%A5%CC%A6%CC%A7%CC%A8%CC%A9%CC%AA%CC%AB%CC%AC%CC%AD%CC%AE%CC%AF%CC%B0%CC%B1%CC%B2%CC%B3%CC%B4%CC%B5%CC%B6%CC%B7%CC%B8%CC%B9%CC%BA%CC%BB%CC%BC%CC%BD%CC%BE%CC%BF%CD%80%CD%81%CD%82%CD%83%CD%84%CD%85%CD%86%CD%87%CD%88%CD%89%CD%8A%CD%8B%CD%8C%CD%8D%CD%8E%CD%8F%CD%90%CD%91%CD%92%CD%93%CD%94%CD%95%CD%96%CD%97%CD%98%CD%99%CD%9A%CD%9B%CD%9C%CD%9D%CD%9E%CD%9F%CD%A0%CD%A1%CD%A2%CD%A3%CD%A4%CD%A5%CD%A6%CD%A7%CD%A8%CD%A9%CD%AA%CD%AB%CD%AC%CD%AD%CD%AE%CD%AF&display=optional');
        :root {
          --bg: #ffffff; --bg2: #f5f5f7; --bg3: #e8e8ec; --bg4: #d4d4d8;
          --line-color: #888; --note-color: #1a1a1a; --clef-color: #333;
          --accent: #bae6fd; --accent-dim: #bae6fd; --select: #d97706;
          --text: #1a1a1a; --text2: #666;
          --danger: #dc2626; --green: #16a34a;
          --c-color: #dc2626; --d-color: #ea580c; --e-color: #fde047;
          --f-color: #22c55e; --g-color: #3b82f6; --a-color: #a855f7; --b-color: #ec4899;
          --border: #d4d4d8;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { height: 6px; width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg2); }
        ::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 4px; }

        .toolbar-btn {
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          padding: 5px 10px; border-radius: 5px; cursor: pointer; height: 35px;
          font-size: 12px; font-family: inherit; transition: all 0.15s;
          display: flex; align-items: center; gap: 4px;
        }
        .toolbar-btn:hover { background: var(--bg4); border-color: #aaa; }
        .toolbar-btn.active { background: var(--accent-dim); border-color: var(--accent); color: #fff; }
        .dur-btn {
          width: 35px; height: 35px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          border-radius: 5px; cursor: pointer; transition: all 0.15s; font-size: 10px; gap: 1px;
        }
        .dur-btn:hover { background: var(--bg4); }
        .dur-btn.active { background: var(--accent-dim); border-color: var(--accent); color: #fff; }
        .acc-btn {
          width: 35px; height: 35px;
          display: flex; align-items: center; justify-content: center;
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          border-radius: 5px; cursor: pointer; font-size: 16px; transition: all 0.15s;
        }
        .acc-btn:hover { background: var(--bg4); }
        .acc-btn.active { background: var(--accent-dim); border-color: var(--accent); }

        /* Tablet: shrink toolbar buttons so all fit on screen */
        @media (hover: none) and (pointer: coarse) and (min-width: 600px) {
          .dur-btn { width: 26px !important; height: 26px !important; border-radius: 4px; font-size: 9px; gap: 0 !important; padding: 2px !important; }
          .dur-btn > span:last-child { display: none !important; }
          .acc-btn { width: 26px !important; height: 26px !important; border-radius: 4px; font-size: 13px; }
          .toolbar-btn { height: 26px; padding: 3px 5px; font-size: 10px; border-radius: 4px; }
          .section-label { font-size: 7px !important; letter-spacing: 0.6px !important; margin-bottom: 1px !important; }
        }

        .m-btn {
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          padding: 10px 16px; border-radius: 10px; cursor: pointer;
          font-size: 14px; font-family: inherit; transition: all 0.15s;
          display: flex; align-items: center; gap: 5px; white-space: nowrap;
        }
        .m-btn:active { transform: scale(0.96); }
        .m-btn.active { background: var(--accent-dim); border-color: var(--accent); color: #fff; }
        .m-btn-sq {
          width: 46px; height: 46px;
          display: flex; align-items: center; justify-content: center;
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          border-radius: 10px; cursor: pointer; font-size: 22px; transition: all 0.15s;
        }
        .m-btn-sq:active { transform: scale(0.96); }
        .m-btn-sq.active { background: var(--accent-dim); border-color: var(--accent); color: #fff; }
        .m-dur {
          width: 58px; height: 60px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: var(--bg3); border: 1px solid var(--border); color: var(--text);
          border-radius: 12px; cursor: pointer; transition: all 0.15s; gap: 0;
        }
        .m-dur:active { transform: scale(0.96); }
        .m-dur.active { background: var(--accent-dim); border-color: var(--accent); color: #fff; }
        .m-sep { width: 1px; height: 32px; background: var(--border); flex-shrink: 0; }

        .tab-bar {
          display: flex; background: var(--bg2);
          border-top: 1px solid var(--border);
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        .tab-item {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          justify-content: center; padding: 8px 0; gap: 2px;
          background: none; border: none; color: var(--text2);
          font-size: 10px; font-family: inherit; cursor: pointer;
          transition: color 0.15s;
        }
        .tab-item.active { color: var(--accent); }
        .tab-item .tab-icon { font-size: 20px; }

        .measure-fill { fill: transparent; cursor: crosshair; transition: fill 0.15s; }
        .measure-fill:hover { fill: rgba(91, 156, 245, 0.04); }
        /* Brief pulse to draw the eye to a mid-song key signature change.
           Runs once on mount; no ongoing visual cost. */
        .key-change-anim {
          animation: keyChangePulse 1.4s ease-out;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes keyChangePulse {
          0%   { opacity: 0; filter: drop-shadow(0 0 0 var(--select)); }
          25%  { opacity: 1; filter: drop-shadow(0 0 12px var(--select)) drop-shadow(0 0 6px var(--select)); }
          60%  { opacity: 1; filter: drop-shadow(0 0 6px var(--select)); }
          100% { opacity: 1; filter: none; }
        }
        @keyframes profilePulse {
          0%, 100% { transform: scale(1.08); }
          50%      { transform: scale(1.12); }
        }
        /* Per-note pulse on a key-signature glyph. Replays each time its
           React key changes, i.e. every time a new note of that letter
           starts \u2014 so E-E-E in Jingle Bells m1 shows 3 visible blinks. */
        .ks-pulse {
          animation: ksPulse 0.18s ease-out;
        }
        @keyframes ksPulse {
          0%   { opacity: 0.15; }
          40%  { opacity: 1;    }
          100% { opacity: 1;    }
        }
        /* Per-note piano-key pulse: same technique. The piano key's React
           key includes pianoKeyPulse[note]; each note start increments it,
           remounting the element and replaying this animation \u2014 so three
           E4s during playback show three distinct flashes. */
        @keyframes pianoKeyFlash {
          0%   { opacity: 0.25; }
          55%  { opacity: 1;    }
          100% { opacity: 1;    }
        }
        @keyframes editHintIn {
          0%   { opacity: 0; transform: translate(-50%, -6px); }
          100% { opacity: 1; transform: translate(-50%, 0);    }
        }
        /* Instant CSS tooltip \u2014 appears immediately on hover, no native
           browser delay. Uses [data-tt] on a position:relative wrapper. */
        .tt-wrap[data-tt]::after {
          content: attr(data-tt);
          position: absolute;
          bottom: calc(100% + 6px); left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a; color: #fff;
          padding: 6px 10px; border-radius: 6px;
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0; visibility: hidden;
          z-index: 1000;
        }
        .tt-wrap[data-tt]:hover::after {
          opacity: 1; visibility: visible;
        }
        .score-title {
          background: transparent; border: none; color: var(--text);
          font-family: 'Comic Neue', cursive; font-size: 22px; font-weight: 700;
          text-align: center; width: 500px; max-width: 80vw; outline: none;
          border-bottom: 1px solid transparent; padding: 2px 8px;
        }
        .score-title:focus { border-bottom-color: var(--accent); }
        .score-composer {
          background: transparent; border: none; color: var(--text2);
          font-family: 'Libre Baskerville', serif; font-size: 13px; font-style: italic;
          text-align: center; width: 500px; max-width: 80vw; outline: none;
          border-bottom: 1px solid transparent; padding: 2px 8px;
        }
        .score-composer:focus { border-bottom-color: var(--accent); }
        .bpm-input {
          width: 54px; height: 40px; background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); border-radius: 8px; text-align: center;
          font-size: 15px; font-family: inherit; padding: 0 4px; outline: none;
        }
        .bpm-input:focus { border-color: var(--accent); }
        .section-label {
          font-size: 10px; color: var(--text2); text-transform: uppercase;
          letter-spacing: 1.2px; font-weight: 600; margin-bottom: 4px;
        }
        @media (max-width: 767px) {
          .score-title { font-size: 15px; padding: 0 4px !important; line-height: 1.1; }
          .score-composer { font-size: 10px; padding: 0 4px !important; line-height: 1.1; }
        }
      `), isMobile && showPhoneTip && /* @__PURE__ */ React.createElement("div", { style: {
    background: "#bae6fd",
    color: "#1a1a1a",
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 11,
    lineHeight: 1.3,
    borderBottom: "1px solid #7dd3fc",
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: { width: 32, height: 32, flexShrink: 0 }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { width: "512", height: "512", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "420", fill: "#dc2626" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "380", fill: "#f97316" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "340", fill: "#facc15" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "300", fill: "#22c55e" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "260", fill: "#3b82f6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "220", fill: "#8b5cf6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "180", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("g", { transform: "translate(174, 495) scale(0.43, -0.43)", fill: "#000000", stroke: "#000000", strokeWidth: "20", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M325 1009H351Q357 968 366.0 936.5Q375 905 392.0 875.5Q409 846 437 812Q467 777 487.0 753.5Q507 730 527 704Q564 658 581.5 609.5Q599 561 599 511Q599 407 511 259H495Q523 318 545.5 377.5Q568 437 568 491Q568 545 540 602Q512 659 461.5 698.0Q411 737 351 741V175L325 175Z" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "191", cy: "175", rx: "160", ry: "128", transform: "rotate(12 191 175)" }))), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("strong", null, "Read&Play Music"), " works best on a tablet or computer. On a phone, the notes, lyrics, and piano keys are smaller and harder to see and read.")), window.__RPM_READONLY__ === false && isLoggedIn && securityStats && (securityStats.failLogins > 0 || securityStats.probes > 0 || securityStats.blocks > 0) && /* @__PURE__ */ React.createElement("div", { style: {
    background: "#fff3cd",
    borderBottom: "1px solid #f59e0b",
    color: "#78350f",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    fontSize: 14,
    fontWeight: 600,
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("span", null, securityStats.failLogins > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, securityStats.failLogins, " failed login", securityStats.failLogins === 1 ? "" : "s", " "), securityStats.probes > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, securityStats.probes, " suspicious probe", securityStats.probes === 1 ? "" : "s", " "), securityStats.blocks > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, securityStats.blocks, " blocked attempt", securityStats.blocks === 1 ? "" : "s", " "), "from ", securityStats.uniqueIPs, " IP", securityStats.uniqueIPs === 1 ? "" : "s", " since you last looked."), /* @__PURE__ */ React.createElement("button", { onClick: dismissSecurityBanner, style: {
    background: "#78350f",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 12px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
  } }, "Dismiss")), isMobile && childLock && toolbarHidden && /* @__PURE__ */ React.createElement(
    "div",
    {
      onTouchStart: (e) => {
        swipeStartYRef.current = e.touches[0].clientY;
      },
      onTouchEnd: (e) => {
        var start = swipeStartYRef.current;
        swipeStartYRef.current = null;
        var dy = e.changedTouches[0].clientY - (start != null ? start : 0);
        if (start == null || Math.abs(dy) < 12) {
          setToolbarHidden(false);
        } else if (dy > 0) {
          setToolbarHidden(false);
        }
      },
      style: {
        background: "var(--bg2)",
        borderBottom: "1px solid var(--border)",
        // Total height = safe-area top inset (notch / status bar) +
        // 48 px of usable swipe target. With box-sizing: border-box,
        // we need calc() so the padding doesn't eat into the visible
        // 48 px the user can grab. Crucial in PWA / Add-to-Home-Screen
        // mode, where the notch is part of the app's drawable area.
        height: "calc(30px + env(safe-area-inset-top))",
        paddingTop: "env(safe-area-inset-top)",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        cursor: "pointer",
        touchAction: "none",
        zIndex: 700
      },
      "aria-label": "Show toolbar"
    },
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "var(--text2)", letterSpacing: 0.3 } }, "tap to show menu")
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      onTouchStart: isMobile && childLock ? (e) => {
        swipeStartYRef.current = e.touches[0].clientY;
      } : void 0,
      onTouchEnd: isMobile && childLock ? (e) => {
        var start = swipeStartYRef.current;
        swipeStartYRef.current = null;
        if (start == null) return;
        var dy = e.changedTouches[0].clientY - start;
        if (dy < -25) setToolbarHidden(true);
      } : void 0,
      style: {
        background: "var(--bg2)",
        borderBottom: "1px solid var(--border)",
        padding: isMobile ? "2px 4px" : isCompact ? "4px 10px" : "8px 20px",
        display: isMobile && childLock && toolbarHidden ? "none" : "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isMobile ? 3 : isCompact ? 8 : 16,
        flexShrink: 0,
        position: "relative",
        zIndex: 600
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: isMobile ? 3 : isCompact ? 6 : 12, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
      width: isMobile ? 28 : 40,
      height: isMobile ? 28 : 40,
      display: "block",
      flexShrink: 0
    }, "aria-label": "Read&PlayMusic" }, /* @__PURE__ */ React.createElement("rect", { width: "512", height: "512", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "420", fill: "#dc2626" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "380", fill: "#f97316" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "340", fill: "#facc15" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "300", fill: "#22c55e" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "260", fill: "#3b82f6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "220", fill: "#8b5cf6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "180", fill: "#bae6fd" }), /* @__PURE__ */ React.createElement("g", { transform: "translate(174, 495) scale(0.43, -0.43)", fill: "#000000", stroke: "#000000", strokeWidth: "20", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M325 1009H351Q357 968 366.0 936.5Q375 905 392.0 875.5Q409 846 437 812Q467 777 487.0 753.5Q507 730 527 704Q564 658 581.5 609.5Q599 561 599 511Q599 407 511 259H495Q523 318 545.5 377.5Q568 437 568 491Q568 545 540 602Q512 659 461.5 698.0Q411 737 351 741V175L325 175Z" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "191", cy: "175", rx: "160", ry: "128", transform: "rotate(12 191 175)" }))), typeof window !== "undefined" && !/(^|\.)readandplaymusic\.app$/i.test(window.location.hostname) && /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: isMobile ? 10 : 12,
      color: "var(--text2)",
      fontFamily: "monospace",
      padding: "1px 5px",
      borderRadius: 4,
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      flexShrink: 0,
      lineHeight: 1.4
    }, title: "App version (matches service-worker cache version)" }, APP_VERSION), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      stopPlayback();
      setMetronomeOn(false);
      if (isJamsMode) {
        window.location.href = "/library";
        return;
      }
      var _inst = window.__RPM_CONDUCTOR__ ? "conductor" : window.__RPM_DRUMS__ ? "drums" : window.__RPM_GUITAR__ ? "guitar" : window.__RPM_UKULELE__ ? "ukulele" : window.__RPM_VIOLIN__ ? "violin" : window.__RPM_VIOLA__ ? "viola" : window.__RPM_CELLO__ ? "cello" : window.__RPM_BASS_GUITAR__ ? "bass-guitar" : window.__RPM_MANDOLIN__ ? "mandolin" : window.__RPM_BANJO__ ? "banjo" : window.__RPM_FLUTE__ ? "flute" : window.__RPM_RECORDER__ ? "recorder" : window.__RPM_TRUMPET__ ? "trumpet" : window.__RPM_EUPHONIUM__ ? "euphonium" : window.__RPM_TUBA__ ? "tuba" : window.__RPM_SAXOPHONE__ ? "saxophone" : "keyboard";
      var _isAdminLib = typeof window !== "undefined" && window.__RPM_READONLY__ === false;
      if (_isAdminLib) {
        var _curPath = window.location.pathname.replace(/\/$/, "");
        var _trail = "/" + _inst;
        var _base = _curPath.endsWith(_trail) ? _curPath.slice(0, -_trail.length) : _curPath;
        window.location.href = _base + "/" + _inst + "/library";
      } else {
        window.location.href = "/" + _inst + "/library";
      }
      return;
    }, style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      padding: isMobile ? "0 6px" : "0 10px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      color: "var(--text)",
      fontSize: 13,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 4
    }, title: "Song Library" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 30 : 26 } }, "\u{1F4DA}"), " ", !isMobile && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26 } }, "Library")), !childLock && (() => {
      var eMidiSize = isMobile ? 44 : isCompact ? 32 : 40;
      var eMidiFont = eMidiSize - 6;
      if (midiInputCount > 0) {
        return /* @__PURE__ */ React.createElement("span", { style: {
          height: eMidiSize,
          width: eMidiSize,
          padding: 0,
          background: "var(--accent)",
          border: "1px solid var(--accent)",
          borderRadius: 6,
          color: "var(--text)",
          fontSize: eMidiFont,
          lineHeight: 1,
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden"
        }, title: `${midiInputCount} MIDI input device${midiInputCount === 1 ? "" : "s"} connected` }, "\u{1F3B9}");
      }
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => {
            try {
              if (typeof Tone !== "undefined" && Tone.start) Tone.start();
            } catch (e) {
            }
            if (typeof navigator !== "undefined" && navigator.requestMIDIAccess && requestMidiRef.current) {
              requestMidiRef.current();
            }
          },
          onTouchStart: (e) => {
            e.preventDefault();
            try {
              if (typeof Tone !== "undefined" && Tone.start) Tone.start();
            } catch (e2) {
            }
            if (typeof navigator !== "undefined" && navigator.requestMIDIAccess && requestMidiRef.current) {
              requestMidiRef.current();
            }
          },
          style: {
            height: eMidiSize,
            width: eMidiSize,
            padding: 0,
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            color: "var(--text)",
            fontSize: eMidiFont,
            lineHeight: 1,
            fontFamily: "inherit",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
            opacity: 0.45,
            filter: "grayscale(1)"
          },
          title: midiStatus === "requesting" ? "Requesting MIDI access..." : midiStatus === "denied" ? "MIDI permission denied \u2014 click to retry" : midiStatus === "unsupported" ? "MIDI not supported by this browser" : midiStatus === "granted" ? "MIDI granted but no devices detected \u2014 plug in a keyboard then click here" : "Click to connect a MIDI keyboard"
        },
        "\u{1F3B9}"
      );
    })(), childLock && (() => {
      var modeBtnSize = isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40;
      var modeBtnFont = modeBtnSize - 6;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (isPlaying) {
          playTimeoutRef.current.forEach(clearTimeout);
          playTimeoutRef.current = [];
          setIsPlaying(false);
          isPlayingRef.current = false;
          setPlayingIdx({ measure: -1, note: -1 });
          setPlayingNotes({});
          setPressedPianoKeys({});
        }
        setPlayMode((prev) => prev === "learn" ? null : "learn");
      }, style: {
        height: modeBtnSize,
        width: modeBtnSize,
        padding: 0,
        background: playMode === "learn" ? "var(--accent)" : "var(--bg3)",
        border: playMode === "learn" ? "1px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: modeBtnFont,
        lineHeight: 1,
        fontFamily: "inherit",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden"
      }, title: "Learn" }, "\u{1F440}"), (() => {
        var _practiceBlocked = isMultiStaff(clef) && midiInputCount === 0;
        return /* @__PURE__ */ React.createElement("button", { onClick: () => {
          if (_practiceBlocked) return;
          if (isPlaying) {
            playTimeoutRef.current.forEach(clearTimeout);
            playTimeoutRef.current = [];
            setIsPlaying(false);
            isPlayingRef.current = false;
            setPlayingIdx({ measure: -1, note: -1 });
            setPlayingNotes({});
            setPressedPianoKeys({});
          }
          setPlayMode((prev) => prev === "practice" ? null : "practice");
        }, disabled: _practiceBlocked, style: {
          height: modeBtnSize,
          width: modeBtnSize,
          padding: 0,
          background: playMode === "practice" ? "var(--accent)" : "var(--bg3)",
          border: playMode === "practice" ? "1px solid var(--accent)" : "1px solid var(--border)",
          borderRadius: 6,
          color: "var(--text)",
          fontSize: modeBtnFont,
          lineHeight: 1,
          fontFamily: "inherit",
          cursor: _practiceBlocked ? "not-allowed" : "pointer",
          opacity: _practiceBlocked ? 0.4 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden"
        }, title: _practiceBlocked ? "Practice on grand staff requires a MIDI keyboard" : "Practice" }, "\u{1F3CB}\uFE0F");
      })(), midiInputCount > 0 ? /* @__PURE__ */ React.createElement("span", { style: {
        height: modeBtnSize,
        width: modeBtnSize,
        padding: 0,
        background: "var(--accent)",
        border: "1px solid var(--accent)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: modeBtnFont,
        lineHeight: 1,
        fontFamily: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden"
      }, title: `${midiInputCount} MIDI input device${midiInputCount === 1 ? "" : "s"} connected \u2014 Practice mode unlocked` }, "\u{1F3B9}") : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => {
            try {
              if (typeof Tone !== "undefined" && Tone.start) Tone.start();
            } catch (e) {
            }
            if (typeof navigator !== "undefined" && navigator.requestMIDIAccess && requestMidiRef.current) {
              requestMidiRef.current();
            }
          },
          onTouchStart: (e) => {
            e.preventDefault();
            try {
              if (typeof Tone !== "undefined" && Tone.start) Tone.start();
            } catch (e2) {
            }
            if (typeof navigator !== "undefined" && navigator.requestMIDIAccess && requestMidiRef.current) {
              requestMidiRef.current();
            }
          },
          style: {
            height: modeBtnSize,
            width: modeBtnSize,
            padding: 0,
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            color: "var(--text)",
            fontSize: modeBtnFont,
            lineHeight: 1,
            fontFamily: "inherit",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
            opacity: 0.45,
            filter: "grayscale(1)"
          },
          title: midiStatus === "requesting" ? "Requesting MIDI access..." : midiStatus === "denied" ? "MIDI permission denied \u2014 click to retry" : midiStatus === "unsupported" ? "MIDI not supported by this browser" : midiStatus === "granted" ? "MIDI granted but no devices detected \u2014 plug in a keyboard then click here" : "Click to connect a MIDI keyboard"
        },
        "\u{1F3B9}"
      ));
    })(), !childLock && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
      if (hasUnsavedChanges && !window.confirm("You have unsaved changes. Start a new score anyway?")) return;
      newScore();
    }, style: {
      height: 32,
      padding: "0 10px",
      background: "var(--accent)",
      border: "1px solid var(--accent)",
      borderRadius: 6,
      color: "var(--text)",
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 4
    }, title: "Start a blank score" }, "\uFF0B ", !isMobile && "New Score"), /* @__PURE__ */ React.createElement("button", { onClick: handleSave, style: {
      height: 32,
      padding: "0 10px",
      background: saveConfirm ? "var(--green)" : hasUnsavedChanges ? "#fbbf24" : "var(--bg3)",
      border: saveConfirm ? "1px solid var(--green)" : hasUnsavedChanges ? "1px solid #fbbf24" : "1px solid var(--border)",
      borderRadius: 6,
      color: saveConfirm ? "#fff" : hasUnsavedChanges ? "#78350f" : "var(--text)",
      fontSize: 13,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 4,
      transition: "all 0.2s"
    }, title: hasUnsavedChanges ? "Unsaved changes" : "Save" }, saveConfirm ? "\u2713 Saved!" : /* @__PURE__ */ React.createElement(React.Fragment, null, "\u{1F4BE} ", !isMobile && (hasUnsavedChanges ? "Unsaved..." : "Save"))), /* @__PURE__ */ React.createElement("button", { onClick: handleSaveAs, style: {
      height: 32,
      padding: "0 10px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      color: "var(--text)",
      fontSize: 13,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 4
    }, title: "Save As" }, "\u{1F4C4} ", !isMobile && "Save As"), /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: xmlImportInputRef,
        type: "file",
        accept: ".xml,.mxl,.musicxml,.mid,.midi",
        style: { display: "none" },
        onChange: (e) => {
          var _a2;
          var f = (_a2 = e.target.files) == null ? void 0 : _a2[0];
          if (f) importFile(f);
          e.target.value = "";
        }
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      var _a2;
      return (_a2 = xmlImportInputRef.current) == null ? void 0 : _a2.click();
    }, style: {
      height: 32,
      padding: "0 10px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      color: "var(--text)",
      fontSize: 13,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 4
    }, title: "Import MusicXML (.xml/.mxl) or MIDI (.mid)" }, "\u{1F4E5} ", !isMobile && "Import"), currentSongId && /* @__PURE__ */ React.createElement("button", { onClick: async () => {
      var endpoint = isPublished ? "/api/unpublish" : "/api/publish";
      try {
        var res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ title, folder: loadedFolderRef.current || "" })
        });
        if (res.ok) {
          var nowPublished = !isPublished;
          isPublishedRef.current = nowPublished;
          setIsPublished(nowPublished);
          await refreshLibrary();
        } else if (res.status === 401) {
          setShowPinPrompt(true);
          setPinInput("");
          setPinError("");
        } else {
          alert("Failed.");
        }
      } catch {
        alert("Connection error.");
      }
    }, style: {
      height: 32,
      padding: "0 12px",
      background: isPublished ? "#f97316" : "#16a34a",
      border: "none",
      borderRadius: 6,
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
    }, title: isPublished ? "Click to unpublish" : "Click to publish this song" }, isPublished ? /* @__PURE__ */ React.createElement(React.Fragment, null, "\u{1F4E2} ", !isMobile && "Unpublish") : /* @__PURE__ */ React.createElement(React.Fragment, null, "\u2705 ", !isMobile && "Publish")))),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: isMobile ? 3 : 6, flexShrink: 1, minWidth: 0 } }, !isMobile && /* @__PURE__ */ React.createElement("div", { style: { position: "relative", flex: "1 1 180px", minWidth: isMobile ? 44 : 48, maxWidth: 180 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: songSearchQuery,
        onChange: (e) => setSongSearchQuery(e.target.value),
        placeholder: APP_STRINGS.findSong,
        style: {
          height: isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40,
          width: "100%",
          padding: "0 8px",
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          color: "var(--text)",
          fontSize: isMobile ? 16 : 15,
          fontFamily: "inherit",
          outline: "none",
          boxSizing: "border-box"
        }
      }
    ), songSearchQuery && (() => {
      var q = songSearchQuery.toLowerCase();
      var matches = displayLibrary.filter((song) => {
        var firstWord = (song.title || "").split(/\s+/)[0].toLowerCase();
        return firstWord.startsWith(q);
      }).slice(0, 20);
      return /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: "calc(100% + 4px)",
        right: 0,
        minWidth: "100%",
        maxHeight: 320,
        overflowY: "auto",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        zIndex: 600
      } }, matches.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 14px", color: "var(--text2)", fontSize: 13, whiteSpace: "nowrap" } }, "No matches") : matches.map((song) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: song._filename || song.title,
          onClick: () => {
            loadFromLibrary(song);
            setSongSearchQuery("");
          },
          style: {
            display: "block",
            width: "100%",
            padding: "8px 14px",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid var(--border)",
            textAlign: "left",
            color: "var(--text)",
            fontSize: 14,
            fontFamily: "inherit",
            cursor: "pointer",
            // show the FULL title by wrapping (all devices), not "…"
            whiteSpace: "normal",
            overflowWrap: "anywhere"
          },
          onMouseEnter: (e) => e.currentTarget.style.background = "var(--bg3)",
          onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
        },
        song.title
      )));
    })()), /* @__PURE__ */ React.createElement("button", { onClick: () => setVibeMode((m) => (m + 1) % 3), style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 44 : 40,
      padding: 0,
      background: vibeMode === 0 ? "var(--accent)" : "var(--bg3)",
      border: vibeMode === 0 ? "1px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: 8,
      cursor: "pointer",
      overflow: "hidden",
      outline: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 512 512", style: { width: "100%", height: "100%", display: "block" } }, vibeMode === 0 && /* @__PURE__ */ React.createElement("rect", { width: "512", height: "512", fill: "#bae6fd" }), vibeMode === 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "rainbowClip" }, /* @__PURE__ */ React.createElement("rect", { x: "0", y: "0", width: "512", height: "480" }))), /* @__PURE__ */ React.createElement("g", { transform: "translate(0, -90)", clipPath: "url(#rainbowClip)" }, /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "420", fill: "#dc2626" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "380", fill: "#f97316" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "340", fill: "#facc15" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "300", fill: "#22c55e" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "260", fill: "#3b82f6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "220", fill: "#8b5cf6" }), /* @__PURE__ */ React.createElement("circle", { cx: "256", cy: "510", r: "180", fill: "#bae6fd" }))), /* @__PURE__ */ React.createElement("g", { transform: "translate(174, 405) scale(0.43, -0.43)", fill: "#000", stroke: "#000", strokeWidth: "20", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M325 1009H351Q357 968 366.0 936.5Q375 905 392.0 875.5Q409 846 437 812Q467 777 487.0 753.5Q507 730 527 704Q564 658 581.5 609.5Q599 561 599 511Q599 407 511 259H495Q523 318 545.5 377.5Q568 437 568 491Q568 545 540 602Q512 659 461.5 698.0Q411 737 351 741V175L325 175Z" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "191", cy: "175", rx: "160", ry: "128", transform: "rotate(12 191 175)" })), vibeMode !== 2 && /* @__PURE__ */ React.createElement("g", { fontFamily: "Arial, sans-serif", fontSize: "120", fontWeight: "700", textAnchor: "middle", fill: "#000" }, /* @__PURE__ */ React.createElement("text", { x: "120", y: "490" }, "R"), /* @__PURE__ */ React.createElement("text", { x: "200", y: "490" }, "&"), /* @__PURE__ */ React.createElement("text", { x: "280", y: "490" }, "P"), /* @__PURE__ */ React.createElement("text", { x: "400", y: "490" }, "M")))), /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : playScore, style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      minWidth: isMobile ? 44 : 60,
      padding: isMobile ? "0 6px" : "0 10px",
      background: playMode === "practice" ? "var(--bg4)" : isPlaying ? "var(--danger)" : "var(--green)",
      border: "none",
      borderRadius: 8,
      color: playMode === "practice" ? "var(--text2)" : "#fff",
      fontWeight: 600,
      fontSize: 14,
      fontFamily: "inherit",
      cursor: playMode === "practice" ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      flexShrink: 0,
      opacity: playMode === "practice" ? 0.5 : 1
    } }, isPlaying ? isMobile ? "\u25A0" : "\u25A0 Stop" : isMobile ? "\u25B6" : "\u25B6 Play"), isPlaying && /* @__PURE__ */ React.createElement("button", { onClick: pauseResume, style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      minWidth: isMobile ? 44 : 60,
      padding: isMobile ? "0 6px" : "0 10px",
      background: isPaused ? "var(--accent)" : "var(--bg3)",
      border: isPaused ? "none" : "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontWeight: 600,
      fontSize: 14,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      flexShrink: 0
    } }, isPaused ? isMobile ? "\u25B6" : "\u25B6 Resume" : isMobile ? "\u23F8" : "\u23F8 Pause"), /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : () => setIsLooping((prev) => !prev), style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 44 : isCompact ? 32 : 40,
      padding: 0,
      background: isLooping && playMode !== "practice" ? "var(--accent)" : "var(--bg3)",
      border: isLooping && playMode !== "practice" ? "1px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 24,
      fontFamily: "inherit",
      cursor: playMode === "practice" ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      opacity: playMode === "practice" ? 0.3 : 1
    }, title: playMode === "practice" ? "Loop isn't used in practice mode" : isLooping ? "Loop On" : "Loop Off" }, "\u{1F501}"), /* @__PURE__ */ React.createElement("button", { onClick: () => setBigNoteOnPlay((p) => !p), style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 44 : isCompact ? 32 : 40,
      padding: 0,
      background: bigNoteOnPlay || vibeMode === 2 ? "var(--accent)" : "var(--bg3)",
      border: bigNoteOnPlay || vibeMode === 2 ? "1px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 22,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, title: bigNoteOnPlay ? "Tracker: rainbow (click for explosion)" : "Tracker: explosion (click for rainbow)" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "24", height: "24", style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "gpsRainbow", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#ff3b30" }), /* @__PURE__ */ React.createElement("stop", { offset: "8.33%", stopColor: "#ff3b30" }), /* @__PURE__ */ React.createElement("stop", { offset: "25%", stopColor: "#ff9500" }), /* @__PURE__ */ React.createElement("stop", { offset: "41.66%", stopColor: "#ffcc00" }), /* @__PURE__ */ React.createElement("stop", { offset: "58.33%", stopColor: "#34c759" }), /* @__PURE__ */ React.createElement("stop", { offset: "75%", stopColor: "#3498db" }), /* @__PURE__ */ React.createElement("stop", { offset: "91.66%", stopColor: "#9b59b6" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#9b59b6" }))), /* @__PURE__ */ React.createElement("path", { d: "M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z", fill: "url(#gpsRainbow)", stroke: "#000", strokeWidth: "0.6" }))), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowFingering((p) => !p), style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 44 : isCompact ? 32 : 40,
      padding: 0,
      background: showFingering ? "var(--accent)" : "var(--bg3)",
      border: showFingering ? "1px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, title: showFingering ? "Show fingering: ON (click to hide)" : "Show fingering: OFF (click to show)" }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", display: "inline-block", width: 30, height: 30 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 24, lineHeight: 1, display: "inline-block", position: "relative", top: 6, transform: "scaleX(-1)" } }, "\u{1F590}\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 2, top: 9, fontSize: 7, fontWeight: 800, color: "#000" } }, "1"), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 7, top: -1, fontSize: 7, fontWeight: 800, color: "#000" } }, "2"), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: "50%", top: -2, fontSize: 7, fontWeight: 800, color: "#000", transform: "translateX(-50%)" } }, "3"), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: 7, top: 0, fontSize: 7, fontWeight: 800, color: "#000" } }, "4"), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: 1, top: 5, fontSize: 7, fontWeight: 800, color: "#000" } }, "5"))), childLock && !isMobile && !isDrumsMode && (typeof window !== "undefined" && window.__RPM_READONLY__ === false) && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }, title: "Transpose" }, /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKey(-1), disabled: !transposeRange.canShiftDown, style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 36 : 32,
      padding: 0,
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontFamily: "inherit",
      cursor: transposeRange.canShiftDown ? "pointer" : "not-allowed",
      opacity: transposeRange.canShiftDown ? 1 : 0.35,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, title: transposeRange.canShiftDown ? "Transpose down a half step" : "Lowest note is already A1" }, "\u25C0"), /* @__PURE__ */ React.createElement("div", { style: {
      height: isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40,
      width: isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40,
      padding: 0,
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: isMobile ? 16 : isCompact ? 18 : isFullscreen ? 26 : 22,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, (_a = KEY_LABEL[songKey]) != null ? _a : songKey), /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKey(1), disabled: !transposeRange.canShiftUp, style: {
      height: isMobile ? 44 : isCompact ? 32 : 40,
      width: isMobile ? 36 : 32,
      padding: 0,
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontFamily: "inherit",
      cursor: transposeRange.canShiftUp ? "pointer" : "not-allowed",
      opacity: transposeRange.canShiftUp ? 1 : 0.35,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, title: transposeRange.canShiftUp ? "Transpose up a half step" : "Highest note is already C8" }, "\u25B6")), false, childLock && !isMobile && (() => {
      var fsBtnSize = isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40;
      var fsBtnFont = Math.max(8, Math.round(fsBtnSize * 0.22));
      var fsIconSize = fsBtnSize - 6;
      return /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (isStandalone) {
          window.open(window.location.href, "_blank");
        } else {
          toggleFullscreen();
        }
      }, style: {
        height: fsBtnSize,
        width: fsBtnSize,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: fsBtnFont,
        fontWeight: 600,
        lineHeight: 1.05,
        fontFamily: "inherit",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }, title: isStandalone ? "Open in browser (close this app manually)" : isFullscreen ? "Exit full screen" : "Enter full screen" }, isStandalone ? /* @__PURE__ */ React.createElement(
        "svg",
        {
          width: fsIconSize,
          height: fsIconSize,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
        /* @__PURE__ */ React.createElement("path", { d: "M14 4h6v6" }),
        /* @__PURE__ */ React.createElement("path", { d: "M10 14 20 4" })
      ) : isFullscreen ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Exit"), /* @__PURE__ */ React.createElement("span", null, "full"), /* @__PURE__ */ React.createElement("span", null, "screen")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Full"), /* @__PURE__ */ React.createElement("span", null, "screen")));
    })(), !isMobile && window.__RPM_READONLY__ === false && /* @__PURE__ */ React.createElement("button", { onClick: async () => {
      if (childLock) {
        setPinInput("");
        setPinError("");
        setShowPinPrompt(true);
      } else {
        try {
          await fetch("/api/logout", { method: "POST", credentials: "include" });
        } catch (e) {
        }
        setIsLoggedIn(false);
        setChildLock(true);
      }
    }, style: {
      width: isMobile ? 44 : isCompact ? 32 : 40,
      height: isMobile ? 44 : isCompact ? 32 : 40,
      padding: 0,
      background: childLock ? "var(--danger)" : "var(--bg3)",
      border: childLock ? "1px solid var(--danger)" : "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 18,
      fontFamily: "inherit",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, title: childLock ? "Enter password to unlock" : "Lock (end session)" }, childLock ? "\u{1F512}" : "\u{1F513}"))
  ), !isMobile && !childLock && /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: (e) => {
        var tag = e.target.tagName;
        var onControl = tag === "BUTTON" || tag === "INPUT" || tag === "SELECT" || tag === "OPTION" || tag === "svg" || tag === "SVG" || e.target.closest && (e.target.closest("button") || e.target.closest("input") || e.target.closest("select"));
        if (!onControl) {
          setSelectedNote(null);
          setSelectedNotes([]);
        }
      },
      style: {
        background: "var(--bg2)",
        borderBottom: "1px solid var(--border)",
        padding: toolbarMin ? "2px 8px" : isTablet ? "4px 8px" : "8px 14px",
        display: "flex",
        alignItems: "flex-start",
        gap: isTablet ? 6 : 6,
        flexShrink: 0,
        flexWrap: "wrap",
        rowGap: isTablet ? 4 : 6
      }
    },
    /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setToolbarMin((v) => !v),
        title: toolbarMin ? "Show toolbar" : "Hide toolbar (more staff space)",
        style: {
          alignSelf: toolbarMin ? "center" : "flex-start",
          marginTop: toolbarMin ? 0 : 14,
          width: 24,
          height: 22,
          padding: 0,
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          color: "var(--text)",
          cursor: "pointer",
          fontSize: 12,
          lineHeight: 1
        }
      },
      toolbarMin ? "\u25BC" : "\u25B2"
    ),
    !toolbarMin && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Tools"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${tool === "note" ? "active" : ""}`, onClick: () => setTool("note") }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u270F\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Note")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${tool === "insert" ? "active" : ""}`, onClick: () => setTool("insert"), title: "Insert a note BETWEEN two existing notes" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u2935\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Insert")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${tool === "eraser" ? "active" : ""}`, onClick: () => setTool("eraser") }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F9F9}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Erase")), tool === "eraser" && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "dur-btn",
        onClick: deleteSelected,
        disabled: !selectedNote,
        style: {
          background: selectedNote ? "var(--danger)" : void 0,
          color: selectedNote ? "#fff" : void 0,
          borderColor: selectedNote ? "var(--danger)" : void 0,
          opacity: selectedNote ? 1 : 0.5
        },
        title: selectedNote ? "Delete the armed (black) notehead" : "Click a notehead to arm it"
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F5D1}"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Delete")
    ), /* @__PURE__ */ React.createElement("button", { className: "dur-btn", onClick: undo, title: "Undo (\u2318Z)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u21A9\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Undo")), /* @__PURE__ */ React.createElement("button", { className: "dur-btn", onClick: redo, title: "Redo (\u2318\u21E7Z)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u21AA\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Redo"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${copyMode ? "active" : ""}`,
        onClick: copyNotes,
        title: copyMode ? "Exit copy mode" : "Start copy: click notes to pick, click empty area to set paste target"
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F4CB}"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, copyMode ? "Picking\u2026" : "Copy")
    ), copyMode && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "dur-btn",
        onClick: () => {
          if (copyScope === "notes") {
            setCopyScope("measures");
            setSelectedNotes([]);
            setSelectedMeasures(null);
            setMeasureCopyPhase("pick");
            setPasteTarget(null);
          } else {
            setCopyScope("notes");
            setSelectedMeasures(null);
            setMeasureCopyPhase("pick");
            setPasteTarget(null);
          }
        },
        title: copyScope === "measures" ? "Switch back to per-note copy (click individual noteheads)" : "Switch to measure-range copy (click measures to pick a range, then a target)"
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, copyScope === "measures" ? "\u{1F4D0}" : "\u{1F3B5}"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, copyScope === "measures" ? "Measures" : "Notes")
    ), copyMode && copyScope === "measures" && selectedMeasures && measureCopyPhase === "pick" && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "dur-btn",
        onClick: () => setMeasureCopyPhase("target"),
        style: {
          background: "var(--accent)",
          color: "var(--text)",
          borderColor: "var(--accent)"
        },
        title: "Done picking the range. Next click chooses the paste target."
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u2713"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.9, fontFamily: "'DM Sans', sans-serif" } }, "Set Target")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "dur-btn",
        onClick: pasteNotes,
        disabled: !copyMode || !pasteTarget || (copyScope === "notes" ? selectedNotes.length === 0 : !selectedMeasures),
        style: { opacity: copyMode && pasteTarget && (copyScope === "notes" ? selectedNotes.length > 0 : !!selectedMeasures) ? 1 : 0.4 },
        title: copyScope === "measures" ? "Paste \u2014 pick a measure range (2 clicks) and a target (1 click) first" : "Paste \u2014 only enabled after picking notes AND a target measure"
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F4E5}"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Paste")
    )))), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : { width: 1, height: 35, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Clef"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${clef === "treble" ? "active" : ""}`,
        onClick: () => pickClef("treble"),
        style: { fontFamily: "'Noto Music', 'Noto Serif', serif" }
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, lineHeight: 1 } }, "\u{1D11E}")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${clef === "bass" ? "active" : ""}`,
        onClick: () => pickClef("bass"),
        style: { fontFamily: "'Noto Music', 'Noto Serif', serif" }
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, lineHeight: 1 } }, "\u{1D122}")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${clef === "grand" ? "active" : ""}`,
        onClick: () => pickClef("grand"),
        title: "Grand staff (treble + bass)",
        style: { fontFamily: "'Noto Music', 'Noto Serif', serif", padding: 0 }
      },
      /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, height: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D11E}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, height: 10, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D122}"))
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${clef === "grandBass" ? "active" : ""}`,
        onClick: () => pickClef("grandBass"),
        title: "Grand staff with both staves in bass clef",
        style: { fontFamily: "'Noto Music', 'Noto Serif', serif", padding: 0 }
      },
      /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, height: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D122}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, height: 10, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D122}"))
    )), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Clef change"), (() => {
      var _a2, _b2;
      var sel = selectedNote;
      var selN = sel ? (_b2 = (_a2 = measures[sel.measure]) == null ? void 0 : _a2.notes) == null ? void 0 : _b2[sel.note] : null;
      var cur = selN ? selN.clefBefore : void 0;
      var canPlace = !!selN && !selN.isRest;
      var setClefChange = (val) => () => {
        if (!sel) return;
        setMeasures((prev) => {
          var _a3;
          var LET = ["C", "D", "E", "F", "G", "A", "B"];
          var refIdxOf = (c) => c === "bass" ? 26 : c === "alto" ? 32 : 38;
          var idxOf = (nm, oc) => LET.indexOf(nm) + (oc || 0) * 7;
          var fromIdx = (ix) => ({ name: LET[(ix % 7 + 7) % 7], octave: Math.floor(ix / 7) });
          var shiftPitch = (n2, d) => {
            if (!d) return { ...n2 };
            var o = { ...n2, ...fromIdx(idxOf(n2.name, n2.octave) + d) };
            if (Array.isArray(n2.chord)) o.chord = n2.chord.map((c) => ({ ...c, ...fromIdx(idxOf(c.name, c.octave) + d) }));
            return o;
          };
          var isGrand = isMultiStaff(clef);
          var selStaff = isGrand ? ((_a3 = prev[sel.measure].notes[sel.note]) == null ? void 0 : _a3.staff) === "bass" ? "bass" : "treble" : "single";
          var songDefault = isGrand ? selStaff === "bass" ? "bass" : clef === "grandBass" ? "bass" : "treble" : clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble";
          var curClef = songDefault, oldEff = songDefault, started = false;
          var range = [];
          for (var mi = 0; mi < prev.length && !(started && false); mi++) {
            var ns = prev[mi].notes || [];
            if (selStaff === "bass") {
              var bc = prev[mi].bottomClef;
              if (bc === "treble" || bc === "bass") curClef = bc;
            } else {
              var tc = prev[mi].topClef;
              if (tc === "treble" || tc === "bass" || tc === "alto") curClef = tc;
            }
            var brk = false;
            for (var ni = 0; ni < ns.length; ni++) {
              var n = ns[ni];
              if (isGrand && (n.staff === "bass" ? "bass" : "treble") !== selStaff) continue;
              var isSel = mi === sel.measure && ni === sel.note;
              if (!started) {
                if (isSel) {
                  oldEff = curClef;
                  started = true;
                  if (!n.isRest) range.push({ mi, ni });
                } else if (n.clefBefore === "treble" || n.clefBefore === "bass" || n.clefBefore === "alto") curClef = n.clefBefore;
              } else {
                if (n.clefBefore === "treble" || n.clefBefore === "bass" || n.clefBefore === "alto") {
                  brk = true;
                  break;
                }
                if (!n.isRest) range.push({ mi, ni });
              }
            }
            if (brk) break;
          }
          var curRangeClef = selN && (selN.clefBefore === "treble" || selN.clefBefore === "bass" || selN.clefBefore === "alto") ? selN.clefBefore : oldEff;
          var removing = !!(selN && selN.clefBefore === val);
          var newClef = removing ? oldEff : val;
          var delta = refIdxOf(newClef) - refIdxOf(curRangeClef);
          var next = prev.map((m) => ({ ...m }));
          var touched = {};
          for (var { mi, ni } of range) {
            touched[mi] = touched[mi] || [...next[mi].notes];
            touched[mi][ni] = shiftPitch(touched[mi][ni], delta);
          }
          var smi = sel.measure;
          touched[smi] = touched[smi] || [...next[smi].notes];
          if (removing) {
            var { clefBefore: _drop, ...rest } = touched[smi][sel.note];
            touched[smi][sel.note] = rest;
          } else touched[smi][sel.note] = { ...touched[smi][sel.note], clefBefore: val };
          for (var mi in touched) next[mi] = { ...next[mi], notes: touched[mi] };
          return next;
        });
      };
      var _btnStyle = { opacity: canPlace ? 1 : 0.35, cursor: canPlace ? "pointer" : "not-allowed" };
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${cur === "treble" ? "active" : ""}`,
          onClick: setClefChange("treble"),
          disabled: !canPlace,
          style: _btnStyle,
          title: "Drop a G (treble) clef change before the selected note"
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, fontFamily: "'Noto Music', serif", lineHeight: 1 } }, "\u{1D11E}"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "G clef")
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${cur === "bass" ? "active" : ""}`,
          onClick: setClefChange("bass"),
          disabled: !canPlace,
          style: _btnStyle,
          title: "Drop an F (bass) clef change before the selected note"
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, fontFamily: "'Noto Music', serif", lineHeight: 1 } }, "\u{1D122}"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "F clef")
      ));
    })())), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 35, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Duration"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, NOTE_DURATIONS.map((d) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: d.id,
        className: `dur-btn ${selectedDuration === d.id ? "active" : ""}`,
        onClick: () => {
          setSelectedDuration(d.id);
          setIsDotted(false);
          setIsTriplet(false);
          if (selectedNote && typeof selectedNote.chordIdx === "number") {
            setMeasures((prev) => {
              var m = prev[selectedNote.measure];
              var cur = m && m.notes[selectedNote.note];
              if (!cur || !Array.isArray(cur.chord) || !cur.chord[selectedNote.chordIdx]) return prev;
              var next = [...prev];
              var notes = [...m.notes];
              notes[selectedNote.note] = { ...cur, chord: cur.chord.map((cm, ci) => ci === selectedNote.chordIdx ? { ...cm, duration: d.id } : cm) };
              next[selectedNote.measure] = { ...m, notes };
              return next;
            });
          }
        },
        title: d.name
      },
      /* @__PURE__ */ React.createElement(DurationIcon, { type: d.id, size: 24 }),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, d.name)
    )), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)", margin: "0 2px", alignSelf: "center" } }), NOTE_DURATIONS.filter((d) => d.id !== "thirty-second").map((d) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: "rest-" + d.id,
        className: `dur-btn ${isRestMode && selectedDuration === d.id ? "active" : ""}`,
        onClick: () => {
          if (isRestMode && selectedDuration === d.id) {
            setIsRestMode(false);
          } else {
            setIsRestMode(true);
            setSelectedDuration(d.id);
          }
        },
        title: `${d.name} Rest`
      },
      /* @__PURE__ */ React.createElement(RestIcon, { type: REST_SYMBOLS[d.id], size: 22 }),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, d.name)
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${isGraceNote ? "active" : ""}`,
        onClick: () => setIsGraceNote(!isGraceNote),
        title: "Grace note (acciaccatura) \u2014 small ornamental note"
      },
      /* @__PURE__ */ React.createElement("svg", { width: 28, height: 32, viewBox: "0 0 40 44", style: { display: "block" } }, /* @__PURE__ */ React.createElement("ellipse", { cx: 14, cy: 26, rx: 5, ry: 3.6, fill: "currentColor", transform: "rotate(-20,14,26)" }), /* @__PURE__ */ React.createElement("line", { x1: 18, y1: 24, x2: 18, y2: 8, stroke: "currentColor", strokeWidth: 1.4 }), /* @__PURE__ */ React.createElement("path", { d: "M 18 8 Q 24 10 26 14", fill: "none", stroke: "currentColor", strokeWidth: 1.4 }), /* @__PURE__ */ React.createElement("line", { x1: 10, y1: 32, x2: 24, y2: 20, stroke: "currentColor", strokeWidth: 1.2 })),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Grace")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${isDotted ? "active" : ""}`,
        onClick: () => {
          setIsDotted(!isDotted);
          if (!isDotted) setIsTriplet(false);
        },
        title: "Augmentation Dot (1.5x duration)"
      },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, lineHeight: "24px", fontWeight: 700, position: "relative", top: 10 } }, "\u2022"),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Dot")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `dur-btn ${isTriplet ? "active" : ""}`,
        onClick: () => {
          setIsTriplet(!isTriplet);
          if (!isTriplet) setIsDotted(false);
        },
        title: "Triplet (2/3 duration)"
      },
      /* @__PURE__ */ React.createElement("svg", { width: 28, height: 32, viewBox: "0 0 40 44", style: { display: "block" } }, /* @__PURE__ */ React.createElement("text", { x: 20, y: 10, textAnchor: "middle", fontSize: 13, fill: "currentColor", fontWeight: "600", fontFamily: "serif" }, "3"), /* @__PURE__ */ React.createElement("line", { x1: 11, y1: 16, x2: 35, y2: 12, stroke: "currentColor", strokeWidth: 3.5 }), /* @__PURE__ */ React.createElement("line", { x1: 11, y1: 16, x2: 11, y2: 37, stroke: "currentColor", strokeWidth: 1.2 }), /* @__PURE__ */ React.createElement("line", { x1: 23, y1: 14, x2: 23, y2: 35, stroke: "currentColor", strokeWidth: 1.2 }), /* @__PURE__ */ React.createElement("line", { x1: 35, y1: 12, x2: 35, y2: 33, stroke: "currentColor", strokeWidth: 1.2 }), /* @__PURE__ */ React.createElement("ellipse", { cx: 6, cy: 38, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,6,38)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 18, cy: 36, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,18,36)" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 30, cy: 34, rx: 5, ry: 3.8, fill: "currentColor", transform: "rotate(-20,30,34)" })),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Trip")
    ), (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var _ciUp = selectedNote ? selectedNote.chordIdx : void 0;
      var _selPitchUp = typeof _ciUp === "number" && Array.isArray(selNote == null ? void 0 : selNote.chord) ? selNote.chord[_ciUp] : selNote;
      var tieUpActive = !!(_selPitchUp == null ? void 0 : _selPitchUp.tie) && (_selPitchUp == null ? void 0 : _selPitchUp.tieDir) === "up";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${tieUpActive ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var cur = notes[selectedNote.note];
              var _ci = selectedNote.chordIdx;
              if (typeof _ci === "number" && Array.isArray(cur.chord) && cur.chord[_ci]) {
                var _m2 = cur.chord[_ci];
                var _on = _m2.tie && _m2.tieDir === "up";
                notes[selectedNote.note] = { ...cur, chord: cur.chord.map((c, k) => {
                  if (k !== _ci) return c;
                  if (_on) {
                    var { tieDir: _d, ...rest2 } = c;
                    return { ...rest2, tie: false };
                  }
                  return { ...c, tie: true, tieDir: "up" };
                }) };
              } else if (cur.tie && cur.tieDir === "up") {
                var { tieDir: _drop, ...rest } = cur;
                notes[selectedNote.note] = { ...rest, tie: false };
              } else {
                notes[selectedNote.note] = { ...cur, tie: true, tieDir: "up" };
              }
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
          },
          disabled: !selectedNote,
          title: "Tie the selected note to the next \u2014 arc curves UP (click one chord notehead at a time to tie individual chord notes)",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 20, viewBox: "0 0 40 24", style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: "M 4 14 Q 20 2 36 14", fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Tie")
      );
    })(), (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var _ciDn = selectedNote ? selectedNote.chordIdx : void 0;
      var _selPitchDn = typeof _ciDn === "number" && Array.isArray(selNote == null ? void 0 : selNote.chord) ? selNote.chord[_ciDn] : selNote;
      var tieDownActive = !!(_selPitchDn == null ? void 0 : _selPitchDn.tie) && (_selPitchDn == null ? void 0 : _selPitchDn.tieDir) === "down";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${tieDownActive ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var cur = notes[selectedNote.note];
              var _ci = selectedNote.chordIdx;
              if (typeof _ci === "number" && Array.isArray(cur.chord) && cur.chord[_ci]) {
                var _m2 = cur.chord[_ci];
                var _on = _m2.tie && _m2.tieDir === "down";
                notes[selectedNote.note] = { ...cur, chord: cur.chord.map((c, k) => {
                  if (k !== _ci) return c;
                  if (_on) {
                    var { tieDir: _d, ...rest2 } = c;
                    return { ...rest2, tie: false };
                  }
                  return { ...c, tie: true, tieDir: "down" };
                }) };
              } else if (cur.tie && cur.tieDir === "down") {
                var { tieDir: _drop, ...rest } = cur;
                notes[selectedNote.note] = { ...rest, tie: false };
              } else {
                notes[selectedNote.note] = { ...cur, tie: true, tieDir: "down" };
              }
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
          },
          disabled: !selectedNote,
          title: "Tie the selected note to the next \u2014 arc curves DOWN (click one chord notehead at a time to tie individual chord notes)",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 20, viewBox: "0 0 40 24", style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: "M 4 10 Q 20 22 36 10", fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Tie")
      );
    })(), !isDrumsMode && (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var isArmedUp = slurArmed && slurArmed.dir === "up";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${isArmedUp ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            if (isArmedUp) {
              setSlurArmed(null);
              return;
            }
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              notes[selectedNote.note] = { ...notes[selectedNote.note], slur: "up" };
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
            setSlurArmed({ mi: selectedNote.measure, ni: selectedNote.note, dir: "up" });
            try {
              showEditHint("\u{1F3B5} Now click the END note for the slur");
            } catch (e) {
            }
          },
          disabled: !selectedNote,
          title: "Slur (UP) \u2014 click start note, click this, then click end note",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 20, viewBox: "0 0 40 24", style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: "M 4 14 Q 20 2 36 14", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Slur")
      );
    })(), !isDrumsMode && (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var isArmedDown = slurArmed && slurArmed.dir === "down";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${isArmedDown ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            if (isArmedDown) {
              setSlurArmed(null);
              return;
            }
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              notes[selectedNote.note] = { ...notes[selectedNote.note], slur: "down" };
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
            setSlurArmed({ mi: selectedNote.measure, ni: selectedNote.note, dir: "down" });
            try {
              showEditHint("\u{1F3B5} Now click the END note for the slur");
            } catch (e) {
            }
          },
          disabled: !selectedNote,
          title: "Slur (DOWN) \u2014 click start note, click this, then click end note",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 20, viewBox: "0 0 40 24", style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: "M 4 10 Q 20 22 36 10", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Slur")
      );
    })(), (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var stacActive = !!(selNote == null ? void 0 : selNote.staccato);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${stacActive ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var cur = notes[selectedNote.note];
              notes[selectedNote.note] = { ...cur, staccato: !cur.staccato };
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
          },
          disabled: !selectedNote,
          title: "Staccato \u2014 short, detached note (audible silence between this note and the next)",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 32, viewBox: "0 0 40 44", style: { display: "block" } }, /* @__PURE__ */ React.createElement("ellipse", { cx: 20, cy: 26, rx: 6, ry: 4.5, fill: "currentColor", transform: "rotate(-12,20,26)" }), /* @__PURE__ */ React.createElement("line", { x1: 26, y1: 26, x2: 26, y2: 10, stroke: "currentColor", strokeWidth: 1.4 }), /* @__PURE__ */ React.createElement("circle", { cx: 20, cy: 36, r: 2.5, fill: "currentColor" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Stacc.")
      );
    })(), (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var ferActive = !!(selNote == null ? void 0 : selNote.fermata);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${ferActive ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var cur = notes[selectedNote.note];
              notes[selectedNote.note] = { ...cur, fermata: !cur.fermata };
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
          },
          disabled: !selectedNote,
          title: "Fermata \u2014 hold this note longer than its written value",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 28, height: 32, viewBox: "0 0 40 44", style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: "M 7 20 A 13 13 0 0 1 33 20", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("circle", { cx: 20, cy: 15, r: 2.4, fill: "currentColor" }), /* @__PURE__ */ React.createElement("ellipse", { cx: 20, cy: 34, rx: 6, ry: 4.5, fill: "currentColor", transform: "rotate(-12,20,34)" }), /* @__PURE__ */ React.createElement("line", { x1: 26, y1: 34, x2: 26, y2: 28, stroke: "currentColor", strokeWidth: 1.4 })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Fermata")
      );
    })(), !isDrumsMode && (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var cur = selNote == null ? void 0 : selNote.ottava;
      var setOtt = (val) => () => {
        if (!selectedNote) return;
        setMeasures((prev) => {
          var next = [...prev];
          var notes = [...next[selectedNote.measure].notes];
          var c = notes[selectedNote.note];
          if (c.ottava === val) {
            var { ottava: _drop, ...rest } = c;
            notes[selectedNote.note] = rest;
          } else {
            notes[selectedNote.note] = { ...c, ottava: val };
          }
          next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
          return next;
        });
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${cur === "8va" ? "active" : ""}`,
          onClick: setOtt("8va"),
          disabled: !selectedNote,
          title: "Ottava 8va \u2014 sounds 1 octave HIGHER than written, label drawn ABOVE the staff",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontFamily: "serif", fontStyle: "italic", fontWeight: 700, lineHeight: 1 } }, "8"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "8va")
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${cur === "8vb" ? "active" : ""}`,
          onClick: setOtt("8vb"),
          disabled: !selectedNote,
          title: "Ottava 8vb \u2014 sounds 1 octave LOWER than written, label drawn BELOW the staff",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontFamily: "serif", fontStyle: "italic", fontWeight: 700, lineHeight: 1 } }, "8"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "8vb")
      ));
    })(), !isDrumsMode && (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var isEnd = !!(selNote == null ? void 0 : selNote.ottavaEnd);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${isEnd ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setMeasures((prev) => {
              var next = [...prev];
              var notes = [...next[selectedNote.measure].notes];
              var c = notes[selectedNote.note];
              if (c.ottavaEnd) {
                var { ottavaEnd: _drop, ...rest } = c;
                notes[selectedNote.note] = rest;
              } else {
                notes[selectedNote.note] = { ...c, ottavaEnd: true };
              }
              next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
              return next;
            });
          },
          disabled: !selectedNote,
          title: "Ottava END \u2014 marks the last note under the 8va / 8vb dashed line",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontFamily: "serif", fontStyle: "italic", fontWeight: 700, lineHeight: 1, whiteSpace: "nowrap" } }, "8\u2518"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "End")
      );
    })()))), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Dynamics"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", maxWidth: 240, alignItems: "center" } }, (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var curDyn = (selNote == null ? void 0 : selNote.dynamic) || "";
      var curAcc = (selNote == null ? void 0 : selNote.dynAccent) || "";
      var setProp = (key, val) => {
        if (!selectedNote) return;
        setMeasures((prev) => {
          var next = [...prev];
          var notes = [...next[selectedNote.measure].notes];
          var cur = { ...notes[selectedNote.note] };
          if (val) cur[key] = val;
          else delete cur[key];
          notes[selectedNote.note] = cur;
          next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
          return next;
        });
      };
      var selStyle = {
        height: 26,
        fontSize: 13,
        fontWeight: 600,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        color: "var(--text)",
        padding: "0 4px",
        fontFamily: "inherit",
        outline: "none",
        opacity: selectedNote ? 1 : 0.35,
        cursor: selectedNote ? "pointer" : "not-allowed"
      };
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "select",
        {
          value: curDyn,
          disabled: !selectedNote,
          onChange: (e) => setProp("dynamic", e.target.value),
          title: "Dynamic marking \u2014 how loud this note (and the notes after it) play",
          style: { ...selStyle, width: 92 }
        },
        /* @__PURE__ */ React.createElement("option", { value: "" }, "\u2014 vol \u2014"),
        DYNAMICS.map((d) => /* @__PURE__ */ React.createElement("option", { key: d.id, value: d.id }, d.id, " \xB7 ", d.name))
      ), /* @__PURE__ */ React.createElement(
        "select",
        {
          value: curAcc,
          disabled: !selectedNote,
          onChange: (e) => setProp("dynAccent", e.target.value),
          title: "Sudden accent on this note (sforzando / fortepiano / rinforzando)",
          style: { ...selStyle, width: 88 }
        },
        /* @__PURE__ */ React.createElement("option", { value: "" }, "\u2014 accent \u2014"),
        DYN_ACCENTS.map((d) => /* @__PURE__ */ React.createElement("option", { key: d.id, value: d.id }, d.label, " \xB7 ", d.name))
      ), /* @__PURE__ */ React.createElement(
        "select",
        {
          value: (selNote == null ? void 0 : selNote.tempoMark) || "",
          disabled: !selectedNote,
          onChange: (e) => setProp("tempoMark", e.target.value),
          title: "Tempo-change word placed on this note (accelerando, ritardando, etc.)",
          style: { ...selStyle, width: 96 }
        },
        /* @__PURE__ */ React.createElement("option", { value: "" }, "\u2014 tempo \u2014"),
        /* @__PURE__ */ React.createElement("option", { value: "accel." }, "Accelerando"),
        /* @__PURE__ */ React.createElement("option", { value: "rit." }, "Ritardando (rit.)"),
        /* @__PURE__ */ React.createElement("option", { value: "rall." }, "Rallentando (rall.)"),
        /* @__PURE__ */ React.createElement("option", { value: "a tempo" }, "A Tempo"),
        /* @__PURE__ */ React.createElement("option", { value: "stretto" }, "Stretto")
      ));
    })(), (() => {
      var isArmedCresc = hairpinArmed && hairpinArmed.kind === "cresc";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${isArmedCresc ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setHairpinArmed({ mi: selectedNote.measure, ni: selectedNote.note, kind: "cresc" });
          },
          disabled: !selectedNote,
          title: "Crescendo \u2014 gradually louder. Click start note, click this, then click end note",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 30, height: 18, viewBox: "0 0 44 20", style: { display: "block" } }, /* @__PURE__ */ React.createElement("line", { x1: 4, y1: 10, x2: 40, y2: 3, stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("line", { x1: 4, y1: 10, x2: 40, y2: 17, stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, isArmedCresc ? "pick end" : "cresc.")
      );
    })(), (() => {
      var isArmedDim = hairpinArmed && hairpinArmed.kind === "dim";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `dur-btn ${isArmedDim ? "active" : ""}`,
          onClick: () => {
            if (!selectedNote) return;
            setHairpinArmed({ mi: selectedNote.measure, ni: selectedNote.note, kind: "dim" });
          },
          disabled: !selectedNote,
          title: "Diminuendo \u2014 gradually softer. Click start note, click this, then click end note",
          style: { opacity: selectedNote ? 1 : 0.35, cursor: selectedNote ? "pointer" : "not-allowed" }
        },
        /* @__PURE__ */ React.createElement("svg", { width: 30, height: 18, viewBox: "0 0 44 20", style: { display: "block" } }, /* @__PURE__ */ React.createElement("line", { x1: 40, y1: 10, x2: 4, y2: 3, stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("line", { x1: 40, y1: 10, x2: 4, y2: 17, stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, isArmedDim ? "pick end" : "dim.")
      );
    })())), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Accidentals"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, (() => {
      var _a2;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var currentAcc = selNote && !selNote.isRest ? selNote.accidental : selectedAccidental;
      return ACCIDENTALS.map((a) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: a.id,
          className: `acc-btn ${currentAcc === a.id ? "active" : ""}`,
          onClick: () => {
            var _next = currentAcc === a.id ? "none" : a.id;
            if (selectedNote && !(selNote == null ? void 0 : selNote.isRest)) {
              setMeasures((prev) => {
                var next = [...prev];
                var notes = [...next[selectedNote.measure].notes];
                notes[selectedNote.note] = { ...notes[selectedNote.note], accidental: _next };
                next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
                return next;
              });
            }
            setSelectedAccidental(_next);
          },
          title: a.name
        },
        a.label
      ));
    })())), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Fingering"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3 } }, (() => {
      var _a2, _b2, _c;
      var selNote = selectedNote ? (_a2 = measures[selectedNote.measure]) == null ? void 0 : _a2.notes[selectedNote.note] : null;
      var selChordIdx = selectedNote == null ? void 0 : selectedNote.chordIdx;
      var isChordMember = typeof selChordIdx === "number" && Array.isArray(selNote == null ? void 0 : selNote.chord) && selNote.chord[selChordIdx];
      var currentFing = selNote && !selNote.isRest ? isChordMember ? (_b2 = selNote.chord[selChordIdx].fingering) != null ? _b2 : null : (_c = selNote.fingering) != null ? _c : null : selectedFingering;
      return [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: n,
          className: `acc-btn ${currentFing === n ? "active" : ""}`,
          onClick: (e) => {
            e.stopPropagation();
            if (selectedNote && !(selNote == null ? void 0 : selNote.isRest)) {
              setMeasures((prev) => {
                var next = [...prev];
                var notes = [...next[selectedNote.measure].notes];
                var cur = notes[selectedNote.note];
                if (isChordMember) {
                  var newChord = cur.chord.map(
                    (cm, ci) => ci === selChordIdx ? { ...cm, fingering: n } : cm
                  );
                  notes[selectedNote.note] = { ...cur, chord: newChord };
                } else {
                  notes[selectedNote.note] = { ...cur, fingering: n };
                }
                next[selectedNote.measure] = { ...next[selectedNote.measure], notes };
                return next;
              });
            }
            setSelectedFingering(n);
            setShowFingering(true);
          },
          title: `Finger ${n}`
        },
        n
      ));
    })())), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Time Sig"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, flexWrap: "wrap", maxWidth: 220 } }, [
      { top: 4, bottom: 4 },
      { top: 3, bottom: 4 },
      { top: 2, bottom: 4 },
      { top: 2, bottom: 2 },
      { top: 3, bottom: 8 },
      { top: 6, bottom: 8 },
      { top: 9, bottom: 8 },
      { top: 12, bottom: 8 }
    ].map((ts) => {
      var active = timeSig.top === ts.top && timeSig.bottom === ts.bottom;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: `${ts.top}/${ts.bottom}`,
          className: `dur-btn ${active ? "active" : ""}`,
          onClick: () => {
            var newTs = { top: ts.top, bottom: ts.bottom };
            setTimeSig(newTs);
            setMeasures((prev) => isMultiStaff(clef) ? recalcMeasures(prev, newTs) : rebarMeasures(prev, newTs));
          },
          style: { fontWeight: 600, fontSize: 13 }
        },
        ts.top,
        "/",
        ts.bottom
      );
    }))), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Tempo"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        list: "tempo-names",
        value: tempoName,
        onChange: (e) => setTempoName(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") e.target.blur();
          e.stopPropagation();
        },
        placeholder: "Tempo name",
        title: "Tempo marking, e.g. Allegro (optional)",
        style: {
          width: 128,
          height: 22,
          fontSize: 13,
          fontWeight: 600,
          textAlign: "center",
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          color: "var(--text)",
          padding: "0 4px",
          marginBottom: 4,
          fontFamily: "inherit",
          outline: "none"
        }
      }
    ), /* @__PURE__ */ React.createElement("datalist", { id: "tempo-names" }, /* @__PURE__ */ React.createElement("option", { value: "Larghissimo" }), /* @__PURE__ */ React.createElement("option", { value: "Grave" }), /* @__PURE__ */ React.createElement("option", { value: "Largo" }), /* @__PURE__ */ React.createElement("option", { value: "Larghetto" }), /* @__PURE__ */ React.createElement("option", { value: "Adagio" }), /* @__PURE__ */ React.createElement("option", { value: "Adagietto" }), /* @__PURE__ */ React.createElement("option", { value: "Andante" }), /* @__PURE__ */ React.createElement("option", { value: "Andantino" }), /* @__PURE__ */ React.createElement("option", { value: "Moderato" }), /* @__PURE__ */ React.createElement("option", { value: "Allegretto" }), /* @__PURE__ */ React.createElement("option", { value: "Allegro" }), /* @__PURE__ */ React.createElement("option", { value: "Vivace" }), /* @__PURE__ */ React.createElement("option", { value: "Presto" }), /* @__PURE__ */ React.createElement("option", { value: "Prestissimo" }), /* @__PURE__ */ React.createElement("option", { value: "Accelerando" }), /* @__PURE__ */ React.createElement("option", { value: "A Tempo" }), /* @__PURE__ */ React.createElement("option", { value: "Poco a poco" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setBpm(Math.max(20, bpm - 1)),
        className: "dur-btn",
        style: { width: 20, height: 30, padding: 0, fontSize: 10 },
        title: "Slow down 1 BPM"
      },
      "\u25C0"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, lineHeight: 1 }, "aria-hidden": "true" }, "\u{1F422}"), /* @__PURE__ */ React.createElement(BpmInput, { bpm, setBpm }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, lineHeight: 1 }, "aria-hidden": "true" }, "\u{1F407}"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setBpm(Math.min(500, bpm + 1)),
        className: "dur-btn",
        style: { width: 20, height: 30, padding: 0, fontSize: 10 },
        title: "Speed up 1 BPM"
      },
      "\u25B6"
    ))), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Transpose"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => shiftKey(-1),
        className: "dur-btn",
        disabled: !transposeRange.canShiftDown,
        style: { width: 20, height: 30, padding: 0, fontSize: 10, opacity: transposeRange.canShiftDown ? 1 : 0.35, cursor: transposeRange.canShiftDown ? "pointer" : "not-allowed" },
        title: transposeRange.canShiftDown ? "Previous key" : "Lowest note is already A1"
      },
      "\u25C0"
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: keyInput,
        onChange: (e) => setKeyInput(e.target.value),
        onBlur: commitKeyInput,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            e.target.blur();
          }
          e.stopPropagation();
        },
        placeholder: "C",
        style: {
          width: 42,
          height: 30,
          fontSize: 13,
          fontWeight: 600,
          textAlign: "center",
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          color: "var(--text)",
          padding: 0,
          fontFamily: "inherit",
          outline: "none"
        },
        title: "Type a key (C, G, Bb, F#, etc.) and press Enter"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => shiftKey(1),
        className: "dur-btn",
        disabled: !transposeRange.canShiftUp,
        style: { width: 20, height: 30, padding: 0, fontSize: 10, opacity: transposeRange.canShiftUp ? 1 : 0.35, cursor: transposeRange.canShiftUp ? "pointer" : "not-allowed" },
        title: transposeRange.canShiftUp ? "Next key" : "Highest note is already C8"
      },
      "\u25B6"
    ))), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: isDrumsMode ? { display: "none" } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Key Sig"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => shiftKeySig(-1),
        className: "dur-btn",
        style: { width: 20, height: 30, padding: 0, fontSize: 10 },
        title: "More flats"
      },
      "\u25C0"
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: keySigInput,
        onChange: (e) => setKeySigInput(e.target.value),
        onBlur: commitKeySigInput,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            e.target.blur();
          }
          e.stopPropagation();
        },
        placeholder: "C",
        style: {
          width: 42,
          height: 30,
          fontSize: 13,
          fontWeight: 600,
          textAlign: "center",
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          color: "var(--text)",
          padding: 0,
          fontFamily: "inherit",
          outline: "none"
        },
        title: "Type a key signature (C, G, Bb, F#, etc.) and press Enter"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => shiftKeySig(1),
        className: "dur-btn",
        style: { width: 20, height: 30, padding: 0, fontSize: 10 },
        title: "More sharps"
      },
      "\u25B6"
    ))), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Measures"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { className: "dur-btn", onClick: addMeasure }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u2795"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Add")), /* @__PURE__ */ React.createElement("button", { className: "dur-btn", onClick: removeMeasure }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u2796"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Remove")), /* @__PURE__ */ React.createElement("button", { className: "dur-btn", onClick: clearAll, style: { color: "var(--danger)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F5D1}\uFE0F"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Clear")))), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 40, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Repeats & Jumps"), (() => {
      var mi = selectedNote ? selectedNote.measure : lastClickedMeasure;
      var m = measures[mi] || {};
      var toggle = (key) => () => setMeasures((prev) => {
        var next = [...prev];
        next[mi] = { ...next[mi], [key]: !next[mi][key] };
        return next;
      });
      var setNav = (val) => () => setMeasures((prev) => {
        var next = [...prev];
        next[mi] = { ...next[mi], nav: next[mi].nav === val ? void 0 : val };
        return next;
      });
      var navBtn = (top, bottom, val, title2) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: val,
          className: `dur-btn ${m.nav === val ? "active" : ""}`,
          onClick: setNav(val),
          title: title2
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700, fontFamily: "serif", fontStyle: "italic", lineHeight: 1 } }, top),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: bottom === "\u{1D10C}" ? 13 : 9, opacity: 0.7, fontFamily: bottom === "\u{1D10C}" ? "'Noto Music', serif" : "'DM Sans', sans-serif", lineHeight: 1 } }, bottom || "\xA0")
      );
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.repeatStart ? "active" : ""}`, onClick: toggle("repeatStart"), title: "Start repeat" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "\u{1D106}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Start")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.repeat ? "active" : ""}`, onClick: toggle("repeat"), title: "End repeat" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "\u{1D107}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "End")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.volta1Start ? "active" : ""}`, onClick: toggle("volta1Start"), title: "1st ending start" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700 } }, "1.\u2310"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "1st")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.volta1End ? "active" : ""}`, onClick: toggle("volta1End"), title: "1st ending close" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700 } }, "\xAC1."), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" } }, "Close")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.volta2Start ? "active" : ""}`, onClick: toggle("volta2Start"), title: "2nd ending start" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700 } }, "2.\u2310"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "2nd")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.volta2End ? "active" : ""}`, onClick: toggle("volta2End"), title: "2nd ending close" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700 } }, "\xAC2."), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" } }, "Close")), m.volta1Start && /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          value: m.volta1Label || "",
          placeholder: "1.",
          onChange: (e) => setMeasures((prev) => {
            var next = [...prev];
            next[mi] = { ...next[mi], volta1Label: e.target.value };
            return next;
          }),
          onKeyDown: (e) => e.stopPropagation(),
          style: { width: 36, height: 35, padding: "2px 4px", fontSize: 11, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 5, color: "var(--text)", fontFamily: "inherit", textAlign: "center" },
          title: "1st ending label"
        }
      ), m.volta2Start && /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          value: m.volta2Label || "",
          placeholder: "2.",
          onChange: (e) => setMeasures((prev) => {
            var next = [...prev];
            next[mi] = { ...next[mi], volta2Label: e.target.value };
            return next;
          }),
          onKeyDown: (e) => e.stopPropagation(),
          style: { width: 36, height: 35, padding: "2px 4px", fontSize: 11, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 5, color: "var(--text)", fontFamily: "inherit", textAlign: "center" },
          title: "2nd ending label"
        }
      ), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.segno ? "active" : ""}`, onClick: toggle("segno"), title: "Segno (jump target for D.S.)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif" } }, "\u{1D10B}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Segno")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.coda ? "active" : ""}`, onClick: toggle("coda"), title: "Coda (jump target for al Coda)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif" } }, "\u{1D10C}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif" } }, "Coda")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.fine ? "active" : ""}`, onClick: toggle("fine"), title: "Fine (stop here on al Fine)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, fontFamily: "serif", fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap" } }, "Fine"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "Stop")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.toCoda ? "active" : ""}`, onClick: toggle("toCoda"), title: "To Coda (jump from here on al Coda passes)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif", lineHeight: 1, whiteSpace: "nowrap" } }, "\u{1D10C}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "ToCoda")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "dc" ? "active" : ""}`, onClick: setNav("dc"), title: "Da Capo (return to start)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, fontFamily: "serif", fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap" } }, "D.C."), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "Da Capo")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "dc-al-fine" ? "active" : ""}`, onClick: setNav("dc-al-fine"), title: "Da Capo al Fine" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, fontFamily: "serif", fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap" } }, "D.C."), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "alFine")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "dc-al-coda" ? "active" : ""}`, onClick: setNav("dc-al-coda"), title: "Da Capo al Coda" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, fontFamily: "serif", fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap" } }, "D.C."), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "alCoda")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "ds" ? "active" : ""}`, onClick: setNav("ds"), title: "Dal Segno (return to segno)" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif", lineHeight: 1, whiteSpace: "nowrap" } }, "\u{1D10B}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 8, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "Dal Segno")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "ds-al-fine" ? "active" : ""}`, onClick: setNav("ds-al-fine"), title: "Dal Segno al Fine" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif", lineHeight: 1, whiteSpace: "nowrap" } }, "\u{1D10B}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "alFine")), /* @__PURE__ */ React.createElement("button", { className: `dur-btn ${m.nav === "ds-al-coda" ? "active" : ""}`, onClick: setNav("ds-al-coda"), title: "Dal Segno al Coda" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontFamily: "'Noto Music', serif", lineHeight: 1, whiteSpace: "nowrap" } }, "\u{1D10B}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.7, fontFamily: "'DM Sans', sans-serif", lineHeight: 1, whiteSpace: "nowrap" } }, "alCoda")));
    })()), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }))
  ), childLock && isMobile && !toolbarHidden && /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: () => setToolbarHidden(true),
      style: {
        height: 44,
        flexShrink: 0,
        background: "var(--bg3)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 400
      },
      "aria-label": "Hide menu"
    },
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text2)", letterSpacing: 0.3, pointerEvents: "none" } }, "tap to hide menu")
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      onTouchStart: isMobile && childLock ? (e) => {
        swipeStartYRef.current = e.touches[0].clientY;
      } : void 0,
      onTouchEnd: isMobile && childLock ? (e) => {
        var start = swipeStartYRef.current;
        swipeStartYRef.current = null;
        if (start == null) return;
        var dy = e.changedTouches[0].clientY - start;
        if (dy < -25) setToolbarHidden(true);
      } : void 0,
      style: {
        position: "relative",
        textAlign: "center",
        padding: (() => {
          var hasLeftCluster = childLock;
          if (isMobile) return "2px 0 1px";
          return hasLeftCluster ? "12px 160px 4px 160px" : "12px 0 4px";
        })(),
        background: "var(--bg)",
        flexShrink: 0,
        zIndex: 400,
        ...isWidescreen ? { height: 65, overflow: "visible" } : {}
      }
    },
    childLock && (() => {
      var _a2;
      var hasProfile = !!(playerName && allProfiles[playerName]);
      var mySongs2 = hasProfile ? allProfiles[playerName].songs || [] : [];
      var count = mySongs2.length;
      var pColor = hasProfile ? allProfiles[playerName].color || "var(--accent)" : "var(--accent)";
      return /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        left: isMobile ? 8 : 20,
        // Phone: cluster sits ENTIRELY above the title row, in
        // the dedicated 48 px spacer zone. That keeps the title
        // text uncrowded and lets the title row stay visible
        // even when the toolbar/cluster row is hidden.
        top: isMobile ? 0 : "50%",
        transform: isMobile ? "translateY(-100%)" : "translateY(-50%)",
        zIndex: 500,
        display: isMobile && toolbarHidden ? "none" : "flex",
        alignItems: "center",
        gap: 8
      } }, IS_LOCALHOST && /* @__PURE__ */ React.createElement("div", { style: { position: "relative", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => window.open("/print-preview/mary-had-a-little-lamb.html", "_blank"),
          title: "Print sheet music (localhost preview)",
          style: {
            height: isMobile ? 44 : isCompact ? 32 : 40,
            width: isMobile ? 44 : isCompact ? 32 : 40,
            padding: 0,
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            color: "var(--text)",
            cursor: "pointer",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        /* @__PURE__ */ React.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            width: "20",
            height: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true"
          },
          /* @__PURE__ */ React.createElement("polyline", { points: "6 9 6 2 18 2 18 9" }),
          /* @__PURE__ */ React.createElement("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }),
          /* @__PURE__ */ React.createElement("rect", { x: "6", y: "14", width: "12", height: "8" })
        )
      ), (isTrumpetMode || isEuphoniumMode || isTubaMode) && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: "calc(100% + 6px)",
        left: 0,
        padding: isMobile ? "3px 6px" : "5px 9px",
        border: "1px solid var(--text)",
        borderRadius: 4,
        fontSize: isMobile ? 10 : 12,
        fontFamily: "'DM Sans', sans-serif",
        color: "var(--text)",
        lineHeight: 1.25,
        width: isMobile ? 140 : 200,
        background: "var(--bg)",
        whiteSpace: "normal",
        zIndex: 5,
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, marginBottom: 1 } }, "B\u266D instrument"), /* @__PURE__ */ React.createElement("div", null, "To play in unison with a piano, read up a whole step."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 1, opacity: 0.85 } }, "Piano C \u2192 your D"))), !isDrumsMode && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }, title: "Transpose" }, /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKey(-1), disabled: !transposeRange.canShiftDown, style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 36 : 32,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: 14,
        fontFamily: "inherit",
        cursor: transposeRange.canShiftDown ? "pointer" : "not-allowed",
        opacity: transposeRange.canShiftDown ? 1 : 0.35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }, title: transposeRange.canShiftDown ? "Transpose down a half step" : "Lowest note is already A1" }, "\u25C0"), /* @__PURE__ */ React.createElement("div", { style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 44 : isCompact ? 32 : 40,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: isMobile ? 16 : 22,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      } }, (_a2 = KEY_LABEL[songKey]) != null ? _a2 : songKey), /* @__PURE__ */ React.createElement("button", { onClick: () => shiftKey(1), disabled: !transposeRange.canShiftUp, style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 36 : 32,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: 14,
        fontFamily: "inherit",
        cursor: transposeRange.canShiftUp ? "pointer" : "not-allowed",
        opacity: transposeRange.canShiftUp ? 1 : 0.35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }, title: transposeRange.canShiftUp ? "Transpose up a half step" : "Highest note is already C8" }, "\u25B6")), !isJamsMode && /* @__PURE__ */ React.createElement("button", { onClick: () => {
        window.location.href = "/myownvibes";
      }, style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 44 : isCompact ? 32 : 40,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: isMobile ? 30 : 22,
        lineHeight: 1,
        fontFamily: "inherit",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }, title: "Load your own sheet music (.xml / .mxl)" }, "\u{1F3BC}"), hasProfile && /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowProfileMenu((v) => !v), style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        padding: isMobile ? "0 10px" : "0 14px",
        background: pColor,
        color: "#fff",
        border: "none",
        borderRadius: 20,
        fontSize: isMobile ? 13 : 15,
        fontWeight: 700,
        fontFamily: "inherit",
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: "pointer"
      }, title: `${playerName}'s saved songs` }, /* @__PURE__ */ React.createElement("span", null, "\u2764\uFE0F"), /* @__PURE__ */ React.createElement("span", null, playerName, count > 0 ? ` (${count})` : ""), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.75em", opacity: 0.9 } }, "\u25BE")), showProfileMenu && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { onClick: () => setShowProfileMenu(false), style: {
        position: "fixed",
        inset: 0,
        zIndex: 900,
        background: "transparent"
      } }), /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: "calc(100% + 6px)",
        left: 0,
        minWidth: 220,
        maxWidth: 320,
        maxHeight: 360,
        overflowY: "auto",
        background: "var(--bg)",
        border: `2px solid ${pColor}`,
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        zIndex: 1e3,
        padding: 6
      } }, mySongs2.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: 14, fontSize: 13, color: "var(--text2)" } }, "No saved songs yet. Heart a song in the Library to save it here.") : mySongs2.map((t) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: t,
          onClick: async () => {
            try {
              var res = await fetch("/api/published");
              var songs = await res.json();
              var match = songs.find((s) => (s.title || "").trim() === t.trim());
              if (match) await loadFromManifest(match);
            } catch (e) {
            }
            setShowProfileMenu(false);
          },
          style: {
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "10px 12px",
            background: "transparent",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 15,
            color: "var(--text)",
            fontFamily: "inherit"
          },
          onMouseEnter: (e) => e.currentTarget.style.background = "var(--bg2)",
          onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
        },
        t
      ))))), isJamsMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "input",
        {
          ref: xmlImportInputRef,
          type: "file",
          accept: ".xml,.mxl,.musicxml,.mid,.midi",
          style: { display: "none" },
          onChange: (e) => {
            var _a3;
            var f = (_a3 = e.target.files) == null ? void 0 : _a3[0];
            if (f) importFile(f);
            e.target.value = "";
          }
        }
      ), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        var _a3;
        return (_a3 = xmlImportInputRef.current) == null ? void 0 : _a3.click();
      }, style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 44 : isCompact ? 32 : 40,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: isMobile ? 22 : 30,
        lineHeight: 1,
        fontFamily: "inherit",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden"
      }, title: "Load sheet music (.xml / .mxl) \u2014 or drag one onto this page" }, "\u{1F4E5}"), [
        { id: "treble", label: /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 14 : 18, lineHeight: 1 } }, "\u{1D11E}"), title: "Treble (G) clef" },
        { id: "bass", label: /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 14 : 18, lineHeight: 1 } }, "\u{1D122}"), title: "Bass (F) clef" },
        { id: "grand", label: (
          // Two rows with explicit heights so the glyphs can't
          // overlap: G clef row = 2× its fontSize (its natural
          // visible height), F clef row = 1× its fontSize. Total
          // stack fits inside the button and each glyph renders
          // fully within its own row.
          /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 9 : 12, height: isMobile ? 18 : 24, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D11E}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 9 : 12, height: isMobile ? 9 : 12, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" } }, "\u{1D122}"))
        ), title: "Grand staff" }
      ].map(({ id, label, title: title2 }) => /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => pickClef(id), style: {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        width: isMobile ? 44 : isCompact ? 32 : 40,
        padding: 0,
        background: clef === id ? "var(--accent)" : "var(--bg3)",
        border: clef === id ? "1px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontFamily: "'Noto Music', 'Noto Serif', serif",
        fontWeight: 400,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden"
      }, title: title2 }, label))));
    })(),
    childLock && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      right: isMobile ? 8 : 20,
      // Same anchor as the left cluster — phone: spacer zone above
      // title row; tablet/desktop: vertically centered with title.
      top: isMobile ? 0 : "50%",
      transform: isMobile ? "translateY(calc(-100% - 1px))" : "translateY(-50%)",
      zIndex: 500,
      display: isMobile && toolbarHidden ? "none" : "flex",
      alignItems: "center",
      gap: 4
    }, title: "Metronome + tempo" }, (() => {
      var metroBtnSize = isMobile ? 44 : isCompact ? 32 : isFullscreen ? 48 : 40;
      var metroIconSize = metroBtnSize - 6;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : () => {
        var order = ["drum", "cowbell", "woodblock", "hihat"];
        if (!metronomeOn) {
          setMetronomeSound("drum");
          setMetronomeOn(true);
        } else {
          var i = order.indexOf(metronomeSound);
          var next = order[i + 1];
          if (next) setMetronomeSound(next);
          else setMetronomeOn(false);
        }
      }, style: {
        height: metroBtnSize,
        width: metroBtnSize,
        padding: 0,
        background: metronomeOn && playMode !== "practice" ? "var(--accent)" : "var(--bg3)",
        border: metronomeOn && playMode !== "practice" ? "1px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: metroIconSize,
        fontFamily: "inherit",
        cursor: playMode === "practice" ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        opacity: playMode === "practice" ? 0.3 : 1
      }, title: metronomeOn ? `Metronome: ${metronomeSound} (click to switch sound)` : "Metronome" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 28", width: metroIconSize, height: metroIconSize }, /* @__PURE__ */ React.createElement("path", { d: "M 4 25 L 8 3 L 16 3 L 20 25 Z", fill: "#b45309", stroke: "#78350f", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("rect", { x: "10", y: "7", width: "4", height: "15", fill: "#fef3c7", stroke: "#78350f", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "5.5", r: "1", fill: "#78350f" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "5.5", x2: "10", y2: "22", stroke: "#78350f", strokeWidth: "1.2", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("rect", { x: "9", y: "11", width: "5", height: "2.5", fill: "#78350f", transform: "rotate(-7 11.5 12)" }), /* @__PURE__ */ React.createElement("rect", { x: "2", y: "25", width: "20", height: "2", fill: "#78350f" }))), /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : () => setMetronomeMode((prev) => prev === "click" ? "click_eighth" : prev === "click_eighth" ? "click_sixteenth" : "click"), style: {
        height: metroBtnSize,
        width: metroBtnSize,
        padding: 0,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: metroIconSize,
        lineHeight: 1,
        fontFamily: "inherit",
        cursor: playMode === "practice" ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        fontWeight: 600,
        opacity: playMode === "practice" ? 0.3 : 1
      }, title: "Toggle metronome subdivision (quarter / eighth / 16th)" }, metronomeMode === "click" ? "\u2669" : metronomeMode === "click_eighth" ? "\u266B" : "\u266C"));
    })(), /* @__PURE__ */ (() => {
      var arrowBtnStyle = {
        height: isMobile ? 44 : isCompact ? 32 : 40,
        minWidth: isMobile ? 36 : isCompact ? 28 : 32,
        padding: "0 6px",
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: isMobile ? 16 : 14,
        fontWeight: 700,
        cursor: playMode === "practice" ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "inherit"
      };
      var dec = () => onBpmSliderChange(Math.max(20, bpm - 1));
      var inc = () => onBpmSliderChange(Math.min(500, bpm + 1));
      var animalFs = isMobile ? 22 : isCompact ? 22 : 32;
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: isMobile ? 3 : 6, marginLeft: 8, opacity: playMode === "practice" ? 0.3 : 1 } }, /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : dec, style: arrowBtnStyle, title: "Slow down 1 BPM" }, "\u25C0"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: animalFs, lineHeight: 1 } }, "\u{1F422}"), /* @__PURE__ */ React.createElement(BpmInput, { bpm, setBpm: onBpmSliderChange }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: animalFs, lineHeight: 1 } }, "\u{1F407}"), /* @__PURE__ */ React.createElement("button", { onClick: playMode === "practice" ? void 0 : inc, style: arrowBtnStyle, title: "Speed up 1 BPM" }, "\u25B6"));
    })()),
    /* @__PURE__ */ React.createElement("div", { style: { pointerEvents: "auto", display: "inline-block" } }, childLock ? /* @__PURE__ */ React.createElement("div", { className: "score-title", style: { cursor: "default" } }, title) : /* @__PURE__ */ React.createElement("input", { className: "score-title", value: title, onChange: (e) => setTitle(e.target.value) }), !childLock && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", { className: "score-composer", value: composer, onChange: (e) => setComposer(e.target.value), placeholder: "Artist" })), !childLock && isPublished && /* @__PURE__ */ React.createElement("div", { style: {
      display: "inline-block",
      marginTop: 4,
      padding: "3px 10px",
      background: "var(--green, #16a34a)",
      color: "#fff",
      borderRadius: 12,
      fontSize: 11,
      fontWeight: 700,
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: 0.5
    } }, "PUBLISHED \u2014 Unpublish song first to save"), childLock && composer && composer.trim() !== "" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: isMobile ? 10 : 14, color: "var(--text2)", marginTop: 0, lineHeight: 1.1 } }, composer))
  ), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", ...isWidescreen ? isDrumsMode ? { height: Math.floor(tabletScoreH * 0.52), flexShrink: 0, overflow: "hidden" } : { height: tabletScoreH, flexShrink: 0 } : { flex: 1, minHeight: 0, overflow: "hidden" } } }, editHint && /* @__PURE__ */ React.createElement("div", { key: editHint.id, style: {
    position: "absolute",
    top: 8,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#78350f",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
    zIndex: 50,
    maxWidth: "90%",
    textAlign: "center",
    lineHeight: 1.3,
    pointerEvents: "none",
    animation: "editHintIn 0.2s ease-out"
  } }, editHint.text), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: scoreAreaRef,
      onTouchStart: isMobile || isTablet ? handleMobilePinchStart : void 0,
      onTouchMove: isMobile || isTablet ? handleMobilePinchMove : void 0,
      onTouchEnd: isMobile || isTablet ? handleMobilePinchEnd : void 0,
      onScroll: isMobile ? (e) => {
        var cssPerSvg = (mobileScale || 1) * (mobileZoom || 1) * (staffScale || 1);
        setMobileScrollX(e.target.scrollLeft / (cssPerSvg || 1));
      } : void 0,
      style: {
        width: "100%",
        height: "100%",
        // Mobile: horizontal auto (SVG wider than viewport).
        // Edit mode on widescreen: vertical auto so the taller SVG can
        // scroll to reach ledger-line notes above + below the staff.
        // Baby/play mode: hidden (view is static).
        overflow: isMobile ? "auto" : !childLock ? "auto" : "hidden",
        WebkitOverflowScrolling: "touch",
        padding: isMobile ? "2px 0" : "0",
        background: "var(--bg)",
        border: "none",
        outline: "none",
        touchAction: isMobile ? "pan-x pan-y" : void 0
      }
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        ref: svgRef,
        width: isMobile ? mobileSvgContentWidth * mobileScale * mobileZoom * staffScale : "100%",
        height: isMobile ? mobileViewH * mobileScale * mobileZoom : !childLock ? Math.round(tabletScoreH * (editViewH / tabletViewH)) : tabletScoreH,
        viewBox: isMobile ? `${mobileViewBoxX} ${STAFF_TOP - 70 - _LOCAL_DOWN_MOBILE} ${mobileSvgContentWidth} ${mobileViewH / staffScale}` : !childLock ? `${tabletViewX - (isConductorMode ? 220 : 0)} ${editViewTop} ${tabletViewW / staffScale / (mobileZoom || 1)} ${editViewH / staffScale / (mobileZoom || 1)}` : `${Math.min(isPlaying ? playViewXRef.current : tabletViewX, maxViewX)} ${tabletViewTop + tabletViewYOffset} ${tabletViewW / staffScale / (mobileZoom || 1)} ${tabletViewH / staffScale / (mobileZoom || 1)}`,
        preserveAspectRatio: "none",
        style: { display: "block", margin: "0 auto", touchAction: isWidescreen && !draggingNote ? "none" : draggingNote ? "none" : "pan-x pan-y" },
        onClick: handleStaffClick,
        onMouseMove: draggingOttava ? handleOttavaDragMove : draggingNote ? handleDragMove : handleStaffHover,
        onWheel: (e) => {
          if (e.ctrlKey) {
            handleScoreWheelZoom(e);
            return;
          }
          if (!isWidescreen) return;
          e.preventDefault();
          var svgPixelsPerScreenPixel = tabletViewW / viewportWidth;
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
            var dx = e.shiftKey ? e.deltaY : e.deltaX;
            setTabletViewX((prev) => Math.max(0, Math.min(maxViewX, prev + dx * svgPixelsPerScreenPixel)));
          } else {
            setLyricsScrollY((prev) => Math.max(0, Math.min(lyricsMaxScroll, prev + e.deltaY * svgPixelsPerScreenPixel)));
          }
        },
        onTouchStart: isTablet ? handleTabletTouchStart : void 0,
        onTouchMove: isTablet ? draggingOttava ? handleOttavaDragMove : draggingNote ? handleDragMove : handleTabletTouchMove : draggingOttava ? handleOttavaDragMove : draggingNote ? handleDragMove : void 0,
        onMouseUp: (e) => {
          handleDragEnd(e);
          handleOttavaDragEnd(e);
        },
        onTouchEnd: (e) => {
          handleDragEnd(e);
          handleOttavaDragEnd(e);
          handleTabletTouchEnd();
        },
        onMouseLeave: draggingOttava ? handleOttavaDragEnd : draggingNote ? handleDragEnd : handleStaffLeave
      },
      Array.from({ length: numRows }, (_, row) => {
        var rowY = row * ROW_HEIGHT;
        var rowMeasures = measures.slice(row * MEASURES_PER_ROW, (row + 1) * MEASURES_PER_ROW);
        var startIdx = row * MEASURES_PER_ROW;
        var _camX = isPlaying ? playViewXRef.current : Math.min(tabletViewX, maxViewX);
        var _viewWvirt = tabletViewW / staffScale / (mobileZoom || 1);
        var _winLeftX = _camX - _viewWvirt;
        var _winRightX = _camX + 2 * _viewWvirt;
        var staffWidth = CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH + totalMeasuresWidth(startIdx, rowMeasures.length);
        var headerW = CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH + 40;
        var headerX = STAFF_LEFT - 40;
        var headerYTop = STAFF_TOP - 80;
        var headerH = isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING + 160 - (STAFF_TOP - 80) : 4 * LINE_SPACING + 160;
        var _tempoText = (tempoName || "").trim();
        var _tempoRange = TEMPO_RANGES[_tempoText.toLowerCase()];
        var _tempoDisplay = _tempoRange ? `${_tempoText} (${_tempoRange})` : _tempoText;
        var _dropR = 32;
        var _baseCyCircle = Math.min(STAFF_TOP - 70 - _dropR, songHighestNoteY - _dropR - NOTE_RY - 30);
        var _tempoFontSize = 40;
        var _tempoWordX = STAFF_LEFT + 2;
        var _dropTipTop = _baseCyCircle - _dropR * 1.4;
        var _viewTopNow = !childLock ? editViewTop : tabletViewTop + tabletViewYOffset;
        var _tempoY = Math.max(_dropTipTop - (_dropR * 0.5 + 12), _viewTopNow + _tempoFontSize * 0.75 + 8);
        var _tempoLift = 0;
        return /* @__PURE__ */ React.createElement("g", { key: row, transform: `translate(0, ${rowY})` }, /* @__PURE__ */ React.createElement(StaffLines, { x: STAFF_LEFT, width: staffWidth }), isConductorMode && row === 0 && /* @__PURE__ */ React.createElement(
          "text",
          {
            x: tabletViewX - 200,
            y: STAFF_TOP + 2 * LINE_SPACING + 9,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 27,
            fill: "#1b2330",
            style: { userSelect: "none", pointerEvents: "none" }
          },
          "Piccolo"
        ), isMultiStaff(clef) && /* @__PURE__ */ React.createElement(StaffLines, { x: STAFF_LEFT, width: staffWidth, top: BASS_STAFF_TOP }), rowMeasures.map((measure, ci) => {
          var mi = startIdx + ci;
          var mx = contentStart + offsetOfMeasure(mi);
          var mWidth = widthOfMeasure(mi);
          if (mx + mWidth < _winLeftX || mx > _winRightX) return null;
          var _basePulses = pulseBeatsPerMeasure(timeSig);
          var _subdiv = songSubdivisions;
          var _pulses = _basePulses * _subdiv;
          var _qBeats = beatsPerMeasure;
          var _qPerPulse = _qBeats / _pulses;
          var _isPickup = measure.pickupBeats > 0 && measure.pickupBeats < _qBeats;
          var _mPulses = _isPickup ? Math.max(1, Math.round(measure.pickupBeats / _qPerPulse)) : _pulses;
          var _firstBeatIdx = _isPickup ? _pulses - _mPulses : 0;
          var r = 32;
          var _defaultCyCircle = STAFF_TOP - 70 - r;
          var _highNoteCyCircle = songHighestNoteY - r - NOTE_RY - 30;
          var cyCircle = Math.min(_defaultCyCircle, _highNoteCyCircle) - _tempoLift;
          var cyTip = cyCircle - r * 1.4;
          var _DROP_BLUE = "#bae6fd";
          var _DROP_GRAY = "#9ca3af";
          var _activeColorIdx = playingIdx.measure === mi && dropPulse >= 0 ? dropPulse : -1;
          var _firstNoteX = isMobile ? 60 : 80;
          var _usable = measureWidth - _firstNoteX - (isMobile ? 6 : 20);
          var _beatSize = _usable / _qBeats;
          var _drops = [];
          for (var b = 0; b < _mPulses; b++) {
            var cx = mx + _firstNoteX + b * _qPerPulse * _beatSize;
            var colorIdx = _firstBeatIdx + b;
            var _canClickDrop = true;
            var _isClickedDrop = clickedDrop && clickedDrop.measure === mi && clickedDrop.colorIdx === colorIdx;
            var _isActive = colorIdx === _activeColorIdx || _isClickedDrop;
            var fillColor = _isActive ? _DROP_BLUE : _DROP_GRAY;
            var numeralFill = "#1a1a1a";
            var _h = cyCircle - cyTip;
            var _aX = _h * 0.15;
            var _aY = _h * 0.45;
            var _bY = r * 0.57;
            var d = `M ${cx},${cyTip} C ${cx - _aX},${cyTip + _aY} ${cx - r},${cyCircle - _bY} ${cx - r},${cyCircle} A ${r},${r} 0 0 0 ${cx + r},${cyCircle} C ${cx + r},${cyCircle - _bY} ${cx + _aX},${cyTip + _aY} ${cx},${cyTip} Z`;
            var _onDropPress = (e) => {
              e.stopPropagation();
              var ci2 = parseInt(e.currentTarget.dataset.cidx, 10);
              var m = parseInt(e.currentTarget.dataset.mi, 10);
              if (Number.isNaN(ci2) || Number.isNaN(m)) return;
              setClickedDrop({ measure: m, colorIdx: ci2 });
            };
            _drops.push(
              /* @__PURE__ */ React.createElement(
                "g",
                {
                  key: `drop-${mi}-${b}`,
                  "data-cidx": colorIdx,
                  "data-mi": mi,
                  onClick: _onDropPress,
                  onMouseDown: _onDropPress,
                  onTouchStart: _onDropPress,
                  style: {
                    pointerEvents: "auto",
                    cursor: "pointer",
                    transition: "fill 0.08s"
                  }
                },
                /* @__PURE__ */ React.createElement("path", { d, fill: fillColor, stroke: "none", pointerEvents: "auto" }),
                /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: cx,
                    y: cyCircle + r * 0.45,
                    textAnchor: "middle",
                    fontSize: 38,
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    fill: numeralFill,
                    style: { userSelect: "none" }
                  },
                  (() => {
                    var _beatNum = Math.floor(colorIdx / _subdiv) + 1;
                    var _subPos = colorIdx % _subdiv;
                    if (_subPos === 0) return _beatNum;
                    if (_subdiv === 2) return "&";
                    if (_subdiv === 4) return ["", "e", "&", "a"][_subPos];
                    if (_subdiv === 8) return ["", "du", "e", "du", "&", "du", "a", "du"][_subPos];
                    return "";
                  })()
                )
              )
            );
          }
          return /* @__PURE__ */ React.createElement("g", { key: `drops-${mi}` }, _drops);
        }), rowMeasures.map((measure, ci) => {
          var mi = startIdx + ci;
          var mx = contentStart + offsetOfMeasure(mi);
          var mWidth = widthOfMeasure(mi);
          if (mx + mWidth < _winLeftX || mx > _winRightX) return null;
          var barBottom = isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING : STAFF_TOP + 4 * LINE_SPACING;
          var isPasteTarget = copyMode && pasteTarget && pasteTarget.measure === mi;
          var isInCopyRange = copyMode && copyScope === "measures" && selectedMeasures && mi >= Math.min(selectedMeasures.from, selectedMeasures.to) && mi <= Math.max(selectedMeasures.from, selectedMeasures.to);
          return /* @__PURE__ */ React.createElement("g", { key: mi }, /* @__PURE__ */ React.createElement(
            "rect",
            {
              className: "measure-fill",
              x: mx,
              y: STAFF_TOP - 180,
              width: mWidth,
              height: isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING - STAFF_TOP + 180 + 150 : LINE_SPACING * 4 + 320,
              rx: 4,
              style: { pointerEvents: childLock ? "none" : void 0 }
            }
          ), (() => {
            var myBottom = effectiveBottomClefByMi[mi];
            var prevBottom = mi > 0 ? effectiveBottomClefByMi[mi - 1] : myBottom;
            var myTop = effectiveTopClefByMi[mi];
            var prevTop = mi > 0 ? effectiveTopClefByMi[mi - 1] : myTop;
            var bottomChanged = mi > 0 && myBottom !== prevBottom;
            var topChanged = mi > 0 && myTop !== prevTop;
            if (!bottomChanged && !topChanged) return null;
            var TREBLE = "\u{1D11E}";
            var BASS = "\u{1D122}";
            var changeClef = (staffTopY, clefName, gx, scale, key) => {
              var isBass = clefName === "bass";
              var fontSize = isBass ? 120 : 115;
              var baseY = isBass ? staffTopY + 3.5 * LINE_SPACING - 5 : staffTopY + 4 * LINE_SPACING + 2;
              var cx = gx + 6;
              var cy = staffTopY + 2 * LINE_SPACING;
              return /* @__PURE__ */ React.createElement(
                "text",
                {
                  key,
                  x: cx,
                  y: baseY,
                  fontSize,
                  fill: "var(--clef-color)",
                  fontFamily: "'Noto Music', 'Noto Serif', serif",
                  transform: `translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})`
                },
                isBass ? BASS : TREBLE
              );
            };
            return /* @__PURE__ */ React.createElement("g", { style: { pointerEvents: "none" } }, bottomChanged && changeClef(BASS_STAFF_TOP, myBottom, mx - 98, 0.85, "bc"), topChanged && changeClef(STAFF_TOP, myTop, mx - 98, 0.85, "tc"));
          })(), isInCopyRange && !isPasteTarget && /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: mx,
              y: STAFF_TOP - 80,
              width: mWidth,
              height: isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING - STAFF_TOP + 80 + 80 : LINE_SPACING * 4 + 160,
              fill: "#90caf9",
              opacity: 0.4,
              rx: 6,
              style: { pointerEvents: "none" }
            }
          ), isPasteTarget && /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: mx,
              y: STAFF_TOP - 80,
              width: mWidth,
              height: isMultiStaff(clef) ? BASS_STAFF_TOP + 4 * LINE_SPACING - STAFF_TOP + 80 + 80 : LINE_SPACING * 4 + 160,
              fill: "#fde047",
              opacity: 0.7,
              rx: 6,
              stroke: "#eab308",
              strokeWidth: 2,
              style: { pointerEvents: "none" }
            }
          ), measure.repeatStart && /* @__PURE__ */ React.createElement("g", null, Array.from({ length: 5 }, (_2, li) => /* @__PURE__ */ React.createElement("line", { key: "rs" + li, x1: mx, y1: STAFF_TOP + li * LINE_SPACING, x2: mx + 7, y2: STAFF_TOP + li * LINE_SPACING, stroke: "var(--line-color)", strokeWidth: 2 })), isMultiStaff(clef) && Array.from({ length: 5 }, (_2, li) => /* @__PURE__ */ React.createElement("line", { key: "rsb" + li, x1: mx, y1: BASS_STAFF_TOP + li * LINE_SPACING, x2: mx + 7, y2: BASS_STAFF_TOP + li * LINE_SPACING, stroke: "var(--line-color)", strokeWidth: 2 })), /* @__PURE__ */ React.createElement("line", { x1: mx + 1, y1: STAFF_TOP, x2: mx + 1, y2: barBottom, stroke: "var(--line-color)", strokeWidth: 6 }), /* @__PURE__ */ React.createElement("line", { x1: mx + 10, y1: STAFF_TOP, x2: mx + 10, y2: barBottom, stroke: "var(--line-color)", strokeWidth: 2 }), /* @__PURE__ */ React.createElement("circle", { cx: mx + 18, cy: STAFF_TOP + 1.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), /* @__PURE__ */ React.createElement("circle", { cx: mx + 18, cy: STAFF_TOP + 2.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), isMultiStaff(clef) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: mx + 18, cy: BASS_STAFF_TOP + 1.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), /* @__PURE__ */ React.createElement("circle", { cx: mx + 18, cy: BASS_STAFF_TOP + 2.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }))), measure.repeat ? /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: mx + mWidth - 14, y1: STAFF_TOP, x2: mx + mWidth - 14, y2: barBottom, stroke: "var(--line-color)", strokeWidth: 2 }), /* @__PURE__ */ React.createElement("rect", { x: mx + mWidth - 9, y: STAFF_TOP, width: 9, height: barBottom - STAFF_TOP, fill: "var(--line-color)" }), /* @__PURE__ */ React.createElement("circle", { cx: mx + mWidth - 25, cy: STAFF_TOP + 1.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), /* @__PURE__ */ React.createElement("circle", { cx: mx + mWidth - 25, cy: STAFF_TOP + 2.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), isMultiStaff(clef) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: mx + mWidth - 25, cy: BASS_STAFF_TOP + 1.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }), /* @__PURE__ */ React.createElement("circle", { cx: mx + mWidth - 25, cy: BASS_STAFF_TOP + 2.5 * LINE_SPACING, r: 4, fill: "var(--line-color)" }))) : mi === measures.length - 1 ? /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: mx + mWidth - 16, y1: STAFF_TOP, x2: mx + mWidth - 16, y2: barBottom, stroke: "var(--line-color)", strokeWidth: 2 }), /* @__PURE__ */ React.createElement("rect", { x: mx + mWidth - 8, y: STAFF_TOP, width: 8, height: barBottom - STAFF_TOP, fill: "var(--line-color)" })) : /* @__PURE__ */ React.createElement("line", { x1: mx + mWidth, y1: STAFF_TOP, x2: mx + mWidth, y2: barBottom, stroke: "var(--line-color)", strokeWidth: 2 }), /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + 8,
              y: STAFF_TOP - (isMobile ? 6 : 6),
              fontSize: isMobile ? 40 : 40,
              fill: "var(--text2)",
              fontFamily: "'DM Sans', sans-serif"
            },
            mi + 1
          ), (() => {
            var vTop = STAFF_TOP - (isMobile ? 60 : 70);
            var vBot = STAFF_TOP - (isMobile ? 30 : 40);
            return (measure.volta1Start || measure.volta1End) && /* @__PURE__ */ React.createElement("g", null, measure.volta1Start && /* @__PURE__ */ React.createElement("line", { x1: mx + 2, y1: vTop, x2: mx + 2, y2: vBot, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ React.createElement("line", { x1: mx, y1: vTop, x2: mx + mWidth, y2: vTop, stroke: "#333", strokeWidth: 2 }), measure.volta1End && /* @__PURE__ */ React.createElement("line", { x1: mx + mWidth - 2, y1: vTop, x2: mx + mWidth - 2, y2: vBot, stroke: "#333", strokeWidth: 2 }), measure.volta1Start && /* @__PURE__ */ React.createElement("text", { x: mx + 12, y: vBot, fontSize: 28, fontWeight: "700", fill: "#333", fontFamily: "'DM Sans', sans-serif" }, childLock ? repeatCountRef.current + 1 + "." : measure.volta1Label || "1."));
          })(), (() => {
            var vTop = STAFF_TOP - (isMobile ? 60 : 70);
            var vBot = STAFF_TOP - (isMobile ? 30 : 40);
            return (measure.volta2Start || measure.volta2End) && /* @__PURE__ */ React.createElement("g", null, measure.volta2Start && /* @__PURE__ */ React.createElement("line", { x1: mx + 2, y1: vTop, x2: mx + 2, y2: vBot, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ React.createElement("line", { x1: mx, y1: vTop, x2: mx + mWidth, y2: vTop, stroke: "#333", strokeWidth: 2 }), measure.volta2End && /* @__PURE__ */ React.createElement("line", { x1: mx + mWidth - 2, y1: vTop, x2: mx + mWidth - 2, y2: vBot, stroke: "#333", strokeWidth: 2 }), measure.volta2Start && /* @__PURE__ */ React.createElement("text", { x: mx + 12, y: vBot, fontSize: 28, fontWeight: "700", fill: "#333", fontFamily: "'DM Sans', sans-serif" }, measure.volta2Label || "2."));
          })(), measure.segno && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + 14,
              y: STAFF_TOP - (isMobile ? 10 : 14),
              fontSize: isMobile ? 32 : 42,
              fill: "#333",
              fontFamily: "'Noto Music', serif",
              style: { pointerEvents: "none" }
            },
            "\u{1D10B}"
          ), measure.coda && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + 14,
              y: STAFF_TOP - (isMobile ? 10 : 14),
              fontSize: isMobile ? 32 : 42,
              fill: "#333",
              fontFamily: "'Noto Music', serif",
              style: { pointerEvents: "none" }
            },
            "\u{1D10C}"
          ), measure.fine && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + mWidth - 8,
              y: STAFF_TOP - (isMobile ? 14 : 20),
              textAnchor: "end",
              fontSize: isMobile ? 14 : 18,
              fontWeight: "700",
              fontStyle: "italic",
              fill: "#333",
              fontFamily: "serif",
              style: { pointerEvents: "none" }
            },
            "Fine"
          ), measure.toCoda && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + mWidth - 8,
              y: STAFF_TOP - (isMobile ? 14 : 20),
              textAnchor: "end",
              fontSize: isMobile ? 12 : 16,
              fontWeight: "700",
              fontStyle: "italic",
              fill: "#333",
              fontFamily: "serif",
              style: { pointerEvents: "none" }
            },
            "To Coda \u{1D10C}"
          ), measure.nav && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: mx + mWidth - 8,
              y: STAFF_TOP - (isMobile ? 14 : 20),
              textAnchor: "end",
              fontSize: isMobile ? 12 : 16,
              fontWeight: "700",
              fontStyle: "italic",
              fill: "#333",
              fontFamily: "serif",
              style: { pointerEvents: "none" }
            },
            measure.nav === "dc" ? "D.C." : measure.nav === "ds" ? "D.S." : measure.nav === "dc-al-fine" ? "D.C. al Fine" : measure.nav === "dc-al-coda" ? "D.C. al Coda" : measure.nav === "ds-al-fine" ? "D.S. al Fine" : measure.nav === "ds-al-coda" ? "D.S. al Coda" : ""
          ), (() => {
            var firstNoteX = isMobile ? 60 : 80;
            var usable = mWidth - firstNoteX - (isMobile ? 6 : 20);
            var beatsForLayout = measure.pickup && measure.pickupBeats > 0 ? measure.pickupBeats : beatsPerMeasure;
            var beatSize = usable / beatsForLayout;
            var offsets = { treble: 0, bass: 0 };
            var GRACE_INTER_LEAD = 16;
            var GRACE_TO_PRINCIPAL = 40;
            var noteData = measure.notes.map((note, ni) => {
              var _a2;
              var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === note.duration)) == null ? void 0 : _a2.beats) || 1;
              var dur = note.grace ? 0 : note.doubleDotted ? baseDur * 1.75 : note.dotted ? baseDur * 1.5 : note.triplet ? baseDur * 2 / 3 : note.isRest && note.duration === "whole" ? beatsForLayout : baseDur;
              var staffKey = note.staff === "bass" ? "bass" : "treble";
              var _hasStartBeat = typeof note.startBeat === "number";
              var noteX = note.isRest && note.duration === "whole" ? mx + mWidth / 2 : _hasStartBeat ? mx + firstNoteX + note.startBeat * beatSize : mx + firstNoteX + offsets[staffKey] * beatSize;
              if (!_hasStartBeat && !note.grace) offsets[staffKey] += dur;
              var _drumPos = isDrumsMode ? drumStaffPos(note.drumPiece) : null;
              var _posName = _drumPos ? _drumPos.name : note.name;
              var _posOct = _drumPos ? _drumPos.octave : note.octave;
              var noteY = note.isRest ? isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP + 2 * LINE_SPACING : STAFF_TOP + 2 * LINE_SPACING : noteToY(_posName, _posOct, clef, note.staff, _effBotAtNote(mi, ni), _effTopAtNote(mi, ni));
              return { note, ni, noteX, noteY, dur };
            });
            for (var i = 0; i < noteData.length; i++) {
              if (!noteData[i].note.grace) continue;
              var sk = noteData[i].note.staff === "bass" ? "bass" : "treble";
              var runEnd = i;
              while (runEnd + 1 < noteData.length && noteData[runEnd + 1].note.grace && (noteData[runEnd + 1].note.staff === "bass" ? "bass" : "treble") === sk) {
                runEnd++;
              }
              var principalIdx = -1;
              for (var j = runEnd + 1; j < noteData.length; j++) {
                var ndSk = noteData[j].note.staff === "bass" ? "bass" : "treble";
                if (!noteData[j].note.grace && ndSk === sk) {
                  principalIdx = j;
                  break;
                }
              }
              if (principalIdx >= 0) {
                var px = noteData[principalIdx].noteX;
                var runLen = runEnd - i + 1;
                for (var g = 0; g < runLen; g++) {
                  var gapFromPrincipal = GRACE_TO_PRINCIPAL + (runLen - 1 - g) * GRACE_INTER_LEAD;
                  noteData[i + g] = { ...noteData[i + g], noteX: px - gapFromPrincipal };
                }
              }
              i = runEnd;
            }
            var beamGroups = [];
            var _pickupOff = measure.pickup && measure.pickupBeats > 0 ? Math.max(0, beatsPerMeasure - measure.pickupBeats) : 0;
            var staffCum = { treble: _pickupOff, bass: _pickupOff };
            var noteBeats = noteData.map((nd) => {
              var _a2;
              var _sk = nd.note.staff === "bass" ? "bass" : "treble";
              var baseDur = ((_a2 = NOTE_DURATIONS.find((d) => d.id === nd.note.duration)) == null ? void 0 : _a2.beats) || 1;
              var dur = nd.note.grace ? 0 : nd.note.doubleDotted ? baseDur * 1.75 : nd.note.dotted ? baseDur * 1.5 : nd.note.triplet ? baseDur * 2 / 3 : baseDur;
              var _hasSB = typeof nd.note.startBeat === "number";
              var startBeat = _hasSB ? nd.note.startBeat : staffCum[_sk];
              if (!_hasSB) staffCum[_sk] += dur;
              return { ...nd, startBeat, dur };
            });
            var pulseQ = timeSig.bottom === 2 ? 2 : timeSig.bottom === 8 ? 0.5 : 1;
            var currentGroup = [];
            var currentBeatStart = 0;
            var tiedPitch = { treble: null, bass: null };
            noteBeats.forEach((nd, idx) => {
              var sk2 = nd.note.staff === "bass" ? "bass" : "treble";
              var pitchKey = nd.note.isRest ? null : nd.note.name + nd.note.octave;
              var isTieDest = pitchKey != null && tiedPitch[sk2] === pitchKey;
              if (!nd.note.isRest) {
                tiedPitch[sk2] = nd.note.tie ? pitchKey : null;
              }
              var isGrace = !!nd.note.grace;
              var isBeamable = (nd.note.duration === "eighth" || nd.note.duration === "sixteenth" || nd.note.duration === "thirty-second") && !nd.note.isRest || nd.note.triplet && !nd.note.isRest;
              var beatNum = Math.floor(nd.startBeat / pulseQ + 1e-6);
              var ndStaff = nd.note.staff === "bass" ? "bass" : "treble";
              if (isBeamable) {
                var groupIsGrace = currentGroup.length > 0 ? !!currentGroup[0].note.grace : isGrace;
                var isTrip = !!nd.note.triplet;
                var groupIsTrip = currentGroup.length > 0 ? !!currentGroup[0].note.triplet : isTrip;
                var groupStaff = currentGroup.length > 0 ? currentGroup[0].note.staff === "bass" ? "bass" : "treble" : ndStaff;
                var tripletFull = isTrip && groupIsTrip && currentGroup.length >= 3;
                if (currentGroup.length === 0) {
                  currentGroup = [nd];
                  currentBeatStart = beatNum;
                } else if (ndStaff === groupStaff && (currentGroup[0].note.voice || 1) === (nd.note.voice || 1) && beatNum === currentBeatStart && isGrace === groupIsGrace && isTrip === groupIsTrip && !tripletFull) {
                  currentGroup.push(nd);
                } else {
                  if (currentGroup.length >= 2) beamGroups.push(currentGroup);
                  currentGroup = [nd];
                  currentBeatStart = beatNum;
                }
              } else {
                if (currentGroup.length >= 2) beamGroups.push(currentGroup);
                currentGroup = [];
              }
            });
            if (currentGroup.length >= 2) beamGroups.push(currentGroup);
            var beamedSet = /* @__PURE__ */ new Set();
            var forcedStemMap = {};
            noteData.forEach((nd) => {
              if (nd.note.stem === "up" || nd.note.stem === "down" || nd.note.stem === "none") {
                forcedStemMap[nd.ni] = nd.note.stem;
              }
            });
            beamGroups.forEach((g2) => {
              var isSixteenthGroup = g2[0].note.duration === "sixteenth";
              var isThirtySecondGroup = g2[0].note.duration === "thirty-second";
              var isEighthGroup = g2[0].note.duration === "eighth";
              var isTripletGroup = g2[0].note.triplet;
              var forceDirection = isSixteenthGroup || isThirtySecondGroup || isEighthGroup || isTripletGroup;
              var firstExplicit = g2[0].note.stem === "up" || g2[0].note.stem === "down" ? g2[0].note.stem === "up" : null;
              var isBassGroup = g2[0].note.staff === "bass";
              var groupThreshold = (isBassGroup ? BASS_STAFF_TOP : STAFF_TOP) + 2 * LINE_SPACING;
              var firstStemUp = firstExplicit != null ? firstExplicit : forceDirection ? g2[0].noteY > groupThreshold : null;
              g2.forEach((nd) => {
                beamedSet.add(nd.ni);
                if (firstStemUp != null && !(nd.note.stem === "up" || nd.note.stem === "down")) {
                  forcedStemMap[nd.ni] = firstStemUp ? "up" : "down";
                }
              });
            });
            if (isDrumsMode || clef === "drum" || clef === "percussion") {
              noteData.forEach((nd) => {
                if (forcedStemMap[nd.ni] === void 0) forcedStemMap[nd.ni] = "up";
              });
            }
            return /* @__PURE__ */ React.createElement(React.Fragment, null, noteData.map(({ note, ni, noteX, noteY }, noteDataIdx) => {
              var noteStaffKey = note.staff === "bass" ? "bass" : "treble";
              var _clefAcceptsStaff = clef === "alto" || clef === "drum" ? "treble" : clef;
              if (!isMultiStaff(clef) && noteStaffKey !== _clefAcceptsStaff) return null;
              var tieTarget = null;
              var tieTargetY = null;
              if (note.tie && !note.isRest) {
                for (var j2 = noteDataIdx + 1; j2 < noteData.length; j2++) {
                  var cand = noteData[j2];
                  var candStaff = cand.note.staff === "bass" ? "bass" : "treble";
                  if (candStaff !== noteStaffKey || cand.note.isRest) continue;
                  if (cand.note.name === note.name && cand.note.octave === note.octave) {
                    tieTarget = cand;
                    tieTargetY = cand.noteY;
                    break;
                  }
                  if (Array.isArray(cand.note.chord)) {
                    var matched = false;
                    for (var cm of cand.note.chord) {
                      if (cm.name === note.name && cm.octave === note.octave) {
                        tieTarget = cand;
                        tieTargetY = noteToY(cm.name, cm.octave, clef, cand.note.staff, effectiveBottomClefByMi[mi], effectiveTopClefByMi[mi]);
                        matched = true;
                        break;
                      }
                    }
                    if (matched) break;
                  }
                }
              }
              var _graceIsPlaying = !!playingNotes[mi + "-" + ni] || playingIdx.measure === mi && playingIdx.note === ni;
              var _graceShrink = _graceIsPlaying && !bigNoteOnPlay && !isMobile ? 1 : 0.4;
              var graceTransform = note.grace ? `matrix(${_graceShrink} 0 0 ${_graceShrink} ${noteX * (1 - _graceShrink)} ${noteY * (1 - _graceShrink)})` : void 0;
              var _graceFirstOfRun = false;
              var _graceLeadExtra = 0;
              if (note.grace) {
                var sameStaff = (nd2) => nd2 && (nd2.note.staff === "bass" ? "bass" : "treble") === noteStaffKey;
                var prevNd = noteData[noteDataIdx - 1];
                var next1 = noteData[noteDataIdx + 1];
                var isFirstOfRun = !sameStaff(prevNd) || !prevNd.note.grace;
                var next1IsGrace = sameStaff(next1) && next1.note.grace;
                if (isFirstOfRun && next1IsGrace) _graceFirstOfRun = true;
                var _runStart = noteDataIdx;
                while (_runStart - 1 >= 0 && sameStaff(noteData[_runStart - 1]) && noteData[_runStart - 1].note.grace) _runStart--;
                var _runEnd = noteDataIdx;
                while (_runEnd + 1 < noteData.length && sameStaff(noteData[_runEnd + 1]) && noteData[_runEnd + 1].note.grace) _runEnd++;
                var _runLen = _runEnd - _runStart + 1;
                if (_runLen >= 2) {
                  var _extraStem = (n) => n.duration === "thirty-second" ? 20 : n.duration === "sixteenth" ? 10 : 0;
                  var _sHVis = (n) => (90 + _extraStem(n) - (n.stemShorten || 0)) * 0.4;
                  var _Yfirst = noteData[_runStart].noteY;
                  var _Ylast = noteData[_runEnd].noteY;
                  var _dY = _Yfirst - _Ylast;
                  if (_dY !== 0) {
                    var _target = 8 * Math.sign(_dY);
                    var _tipLast = _Ylast - _sHVis(noteData[_runEnd].note);
                    var _tipFirst = _tipLast + _target;
                    var _k = noteDataIdx - _runStart;
                    var _t = _k / (_runLen - 1);
                    var _tipK = _tipFirst + _t * (_tipLast - _tipFirst);
                    var _sHTarget = noteData[noteDataIdx].noteY - _tipK;
                    var _sHNat = _sHVis(noteData[noteDataIdx].note);
                    _graceLeadExtra = Math.max(0, (_sHTarget - _sHNat) / 0.4);
                  }
                }
              }
              return /* @__PURE__ */ React.createElement("g", { key: note.id, transform: graceTransform }, /* @__PURE__ */ React.createElement(
                NoteHead,
                {
                  x: noteX,
                  y: noteY,
                  duration: note.duration,
                  accidental: note.accidental,
                  isRest: note.isRest,
                  isPlaying: !!playingNotes[mi + "-" + ni] || playingIdx.measure === mi && playingIdx.note === ni || playMode === "practice" && !bigNoteOnPlay && (practiceBeatKeys.has(mi + "-" + ni) || practicePos && practicePos.measure === mi && practicePos.note === ni),
                  isSelected: (selectedNote == null ? void 0 : selectedNote.measure) === mi && (selectedNote == null ? void 0 : selectedNote.note) === ni || selectedNotes.some((s) => s.measure === mi && s.note === ni),
                  selectedChordIdx: (selectedNote == null ? void 0 : selectedNote.measure) === mi && (selectedNote == null ? void 0 : selectedNote.note) === ni ? selectedNote.chordIdx : void 0,
                  noteName: note.name,
                  noteOctave: note.octave,
                  isMobile,
                  forceStemDirection: forcedStemMap[ni],
                  stemShorten: note.stemShorten || 0,
                  showFlag: !beamedSet.has(ni),
                  staffTop: isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP,
                  isBassStaff: clef === "bass" || isMultiStaff(clef) && note.staff === "bass",
                  chord: note.chord,
                  bigNoteOnPlay: bigNoteOnPlay || vibeMode === 2,
                  isGrace: !!note.grace,
                  graceFirstOfRun: _graceFirstOfRun,
                  graceLeadExtra: _graceLeadExtra,
                  fingering: showFingering ? note.fingering : null,
                  fingerDX: note.fingerDX || 0,
                  fingerDY: note.fingerDY || 0,
                  showChordFingerings: showFingering,
                  dotted: !!note.dotted,
                  doubleDotted: !!note.doubleDotted,
                  colorNotes,
                  showLetters: showLetters && !isDrumsMode,
                  drumShape: isDrumsMode ? drumShapeForPiece(note.drumPiece) : null,
                  colorOverride: isDrumsMode ? drumNoteColor(note.drumPiece) : null,
                  isDrum: isDrumsMode,
                  drumPiece: note.drumPiece,
                  keySigSharps: keySigByMeasure.get(mi).sharps,
                  keySigFlats: keySigByMeasure.get(mi).flats,
                  onClick: (e) => handleNoteClick(mi, ni, e),
                  onChordMemberClick: (ci2, e) => handleNoteClick(mi, ni, e, ci2),
                  onChordMemberMouseDown: (ci2, e) => handleNoteDragStart(mi, ni, e, ci2),
                  onClearAccidental: childLock ? void 0 : () => {
                    setMeasures((prev) => {
                      var next = [...prev];
                      var notes = [...next[mi].notes];
                      notes[ni] = { ...notes[ni], accidental: "none" };
                      next[mi] = { ...next[mi], notes };
                      return next;
                    });
                  },
                  onClearChordAccidental: childLock ? void 0 : (ci2) => {
                    setMeasures((prev) => {
                      var next = [...prev];
                      var notes = [...next[mi].notes];
                      var cur = notes[ni];
                      if (Array.isArray(cur.chord)) {
                        var newChord = cur.chord.map((cm2, k) => k === ci2 ? { ...cm2, accidental: "none" } : cm2);
                        notes[ni] = { ...cur, chord: newChord };
                      }
                      next[mi] = { ...next[mi], notes };
                      return next;
                    });
                  },
                  onMouseDown: (e) => handleNoteDragStart(mi, ni, e),
                  onTouchStart: (e) => handleNoteDragStart(mi, ni, e)
                }
              ), note.slur && !note.isRest && (() => {
                var slurTarget = null;
                var slurTargetX = null;
                var slurTargetY = null;
                var _spanNotes = [];
                var _sawSameStaffStart = false;
                for (var j3 = noteDataIdx + 1; j3 < noteData.length; j3++) {
                  var cand2 = noteData[j3];
                  var candStaff2 = cand2.note.staff === "bass" ? "bass" : "treble";
                  if (candStaff2 !== noteStaffKey || cand2.note.isRest) continue;
                  if (cand2.note.slurEnd) {
                    if (_sawSameStaffStart) return null;
                    slurTarget = cand2;
                    slurTargetX = cand2.noteX;
                    slurTargetY = cand2.noteY;
                    break;
                  }
                  if (cand2.note.slur) _sawSameStaffStart = true;
                  _spanNotes.push({ note: cand2.note, ny: cand2.noteY, m: measure, idx: cand2.ni, x: cand2.noteX });
                }
                var targetMi = mi;
                var targetNi = null;
                if (!slurTarget) {
                  var xOffset = mx + mWidth;
                  for (var mc = ci + 1; mc < rowMeasures.length; mc++) {
                    var laterM = rowMeasures[mc];
                    var laterNotes = laterM.notes || [];
                    for (var nj = 0; nj < laterNotes.length; nj++) {
                      var n = laterNotes[nj];
                      var nsk = n.staff === "bass" ? "bass" : "treble";
                      if (nsk !== noteStaffKey || n.isRest) continue;
                      if (n.slurEnd) {
                        if (_sawSameStaffStart) return null;
                        slurTarget = { note: n };
                        targetMi = laterM._sourceMi != null ? laterM._sourceMi : mi + (mc - ci);
                        targetNi = nj;
                        slurTargetX = xOffset + (n.x || 80);
                        try {
                          slurTargetY = noteToY(n.name, n.octave, clef, n.staff);
                        } catch (e) {
                          slurTargetY = noteY;
                        }
                        break;
                      }
                      if (n.slur) _sawSameStaffStart = true;
                      try {
                        _spanNotes.push({ note: n, ny: noteToY(n.name, n.octave, clef, n.staff), m: laterM, idx: nj, x: xOffset + (n.x || 80) });
                      } catch (e) {
                        _spanNotes.push({ note: n, ny: noteY, m: laterM, idx: nj, x: xOffset + (n.x || 80) });
                      }
                    }
                    if (slurTarget) break;
                    xOffset += laterM._width || mWidth;
                  }
                } else {
                  targetNi = slurTarget.ni;
                }
                if (!slurTarget) {
                  _spanNotes.length = 0;
                  for (var j3 = noteDataIdx + 1; j3 < noteData.length && !slurTarget; j3++) {
                    var cand2 = noteData[j3];
                    if (cand2.note.isRest) continue;
                    if (cand2.note.slurEnd) {
                      slurTarget = cand2;
                      slurTargetX = cand2.noteX;
                      slurTargetY = cand2.noteY;
                      targetMi = mi;
                      targetNi = cand2.ni;
                      break;
                    }
                    _spanNotes.push({ note: cand2.note, ny: cand2.noteY, m: measure, idx: cand2.ni, x: cand2.noteX });
                  }
                  var xOff2 = mx + mWidth;
                  for (var mc = ci + 1; mc < rowMeasures.length && !slurTarget; mc++) {
                    var laterM = rowMeasures[mc];
                    var laterNotes = laterM.notes || [];
                    for (var nj = 0; nj < laterNotes.length; nj++) {
                      var n = laterNotes[nj];
                      if (n.isRest) continue;
                      if (n.slurEnd) {
                        slurTarget = { note: n };
                        targetMi = laterM._sourceMi != null ? laterM._sourceMi : mi + (mc - ci);
                        targetNi = nj;
                        slurTargetX = xOff2 + (n.x || 80);
                        try {
                          slurTargetY = noteToY(n.name, n.octave, clef, n.staff);
                        } catch (e) {
                          slurTargetY = noteY;
                        }
                        break;
                      }
                      try {
                        _spanNotes.push({ note: n, ny: noteToY(n.name, n.octave, clef, n.staff), m: laterM, idx: nj, x: xOff2 + (n.x || 80) });
                      } catch (e) {
                      }
                    }
                    xOff2 += laterM._width || mWidth;
                  }
                }
                if (!slurTarget) return null;
                var slurAbove = note.slur === "up";
                var _NEAR = NOTE_RY + 6;
                var _ARC = 40;
                var _sTop = noteStaffKey === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                var _extraStem2 = (n2) => n2.duration === "thirty-second" ? 20 : n2.duration === "sixteenth" ? 10 : 0;
                var _stemUpOf = (n2, ny) => {
                  if (n2.stem === "up") return true;
                  if (n2.stem === "down") return false;
                  if (n2.stem === "none" || n2.duration === "whole") return null;
                  var _thr = (n2.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP) + 2 * LINE_SPACING;
                  return ny > _thr;
                };
                var _beamTip = (mObj, idx) => {
                  var arr = mObj && mObj.notes || [];
                  var a0 = arr[idx];
                  var _straight = (n2) => n2 && !n2.isRest && !n2.triplet && !n2.grace && !Array.isArray(n2.chord) && (n2.duration === "eighth" || n2.duration === "sixteenth" || n2.duration === "thirty-second");
                  if (!_straight(a0)) return null;
                  var pulseQ2 = timeSig.bottom === 2 ? 2 : timeSig.bottom === 8 ? 0.5 : 1;
                  var _durB = (n2) => {
                    var _a2;
                    var base = ((_a2 = NOTE_DURATIONS.find((d) => d.id === n2.duration)) == null ? void 0 : _a2.beats) || 1;
                    return n2.grace ? 0 : n2.doubleDotted ? base * 1.75 : n2.dotted ? base * 1.5 : n2.triplet ? base * 2 / 3 : base;
                  };
                  var _pick = mObj.pickup && mObj.pickupBeats > 0 ? Math.max(0, beatsPerMeasure - mObj.pickupBeats) : 0;
                  var _cum = { treble: _pick, bass: _pick };
                  var _sb = arr.map((n2) => {
                    var _k2 = n2.staff === "bass" ? "bass" : "treble";
                    var has = typeof n2.startBeat === "number";
                    var v = has ? n2.startBeat : _cum[_k2];
                    if (!has) _cum[_k2] += _durB(n2);
                    return v;
                  });
                  var _beat = (i3) => Math.floor(_sb[i3] / pulseQ2 + 1e-6);
                  var _match = (i3, j4) => _straight(arr[i3]) && _straight(arr[j4]) && (arr[i3].staff === "bass" ? "bass" : "treble") === (arr[j4].staff === "bass" ? "bass" : "treble") && (arr[i3].voice || 1) === (arr[j4].voice || 1) && _beat(i3) === _beat(j4);
                  var lo = idx, hi = idx;
                  while (lo - 1 >= 0 && _match(lo - 1, lo)) lo--;
                  while (hi + 1 < arr.length && _match(hi, hi + 1)) hi++;
                  if (hi - lo < 1) return null;
                  var grp = [];
                  for (var i2 = lo; i2 <= hi; i2++) grp.push(arr[i2]);
                  var bad = false;
                  var ys = grp.map((n2) => {
                    try {
                      return noteToY(n2.name, n2.octave, clef, n2.staff);
                    } catch (e) {
                      bad = true;
                      return 0;
                    }
                  });
                  if (bad) return null;
                  var thr = (a0.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP) + 2 * LINE_SPACING;
                  var isUp = grp[0].stem === "up" ? true : grp[0].stem === "down" ? false : ys[0] > thr;
                  var _h = (n2) => STEM_HEIGHT + _extraStem2(n2) - (n2.stemShorten || 0);
                  var tipOf = (i3) => isUp ? ys[i3] - _h(grp[i3]) : ys[i3] + _h(grp[i3]);
                  var even = false;
                  var step = ys[1] - ys[0];
                  if (step !== 0) even = ys.slice(1).every((y3, i3) => y3 - ys[i3] === step);
                  var y;
                  if (even) {
                    var y1 = tipOf(0), y2 = tipOf(grp.length - 1);
                    var xf = grp[0].x || 0, xl = grp[grp.length - 1].x || 0, xi = a0.x || 0;
                    y = xl !== xf ? y1 + (xi - xf) / (xl - xf) * (y2 - y1) : y1;
                  } else {
                    var tips = grp.map((_2, i3) => tipOf(i3));
                    y = isUp ? Math.min(...tips) : Math.max(...tips);
                  }
                  return { isUp, y };
                };
                var _STEM_GAP = 6;
                var _stemTip = (n2, ny, mObj, idx) => {
                  if (mObj && idx != null) {
                    var bt = _beamTip(mObj, idx);
                    if (bt) {
                      if (bt.isUp !== slurAbove) return null;
                      return slurAbove ? bt.y - _STEM_GAP : bt.y + _STEM_GAP;
                    }
                  }
                  var up = _stemUpOf(n2, ny);
                  if (up === null || up !== slurAbove) return null;
                  var h = STEM_HEIGHT + _extraStem2(n2) - (n2.stemShorten || 0);
                  return slurAbove ? ny - h - _STEM_GAP : ny + h + _STEM_GAP;
                };
                var _startTip = _stemTip(note, noteY, measure, ni);
                var _endTip = _stemTip(
                  slurTarget.note,
                  slurTargetY,
                  targetMi != null ? measures[targetMi] : null,
                  targetNi
                );
                var _crossStaff = noteStaffKey !== (slurTarget.note.staff === "bass" ? "bass" : "treble");
                var _STAC_CLEAR = NOTE_RY + 12 + 5 + 8;
                var _tipNear = (n2, ny) => {
                  if (n2 && n2.staccato && !n2.isRest) {
                    var _u2 = _stemUpOf(n2, ny);
                    if (_u2 !== null && _u2 === false === slurAbove) return Math.max(_NEAR, _STAC_CLEAR);
                  }
                  return _NEAR;
                };
                var startTipY = _startTip != null ? _startTip : slurAbove ? noteY - _tipNear(note, noteY) : noteY + _tipNear(note, noteY);
                var endTipY = _endTip != null ? _endTip : slurAbove ? slurTargetY - _tipNear(slurTarget.note, slurTargetY) : slurTargetY + _tipNear(slurTarget.note, slurTargetY);
                var _STEMX = NOTE_RX - 2;
                var x1 = _startTip != null ? slurAbove ? noteX + _STEMX : noteX - _STEMX : noteX;
                var x2 = _endTip != null ? slurAbove ? slurTargetX + _STEMX : slurTargetX - _STEMX : slurTargetX;
                var _ABOVE_LINE = 28;
                var _botLineY = _sTop + 4 * LINE_SPACING;
                var _MID = 7.5;
                var _TIP = 3;
                var _span = x2 - x1 || 1;
                var _innerSign = slurAbove ? 1 : -1;
                var _innerBase = (t) => Math.pow(1 - t, 3) * startTipY + Math.pow(t, 3) * endTipY;
                var _coef = (t) => 3 * t * (1 - t);
                var _apexReqs = [];
                var _addReq = (t, targetY) => {
                  if (t <= 1e-3 || t >= 1 - 1e-3) return;
                  _apexReqs.push((targetY - _innerBase(t)) / _coef(t) - _innerSign * _MID);
                };
                _apexReqs.push(((slurAbove ? _sTop - _ABOVE_LINE : _botLineY + _ABOVE_LINE) - 0.125 * (startTipY + endTipY)) / 0.75);
                for (var _s of _spanNotes) {
                  var _t2 = (_s.x - x1) / _span;
                  var _tp = _stemTip(_s.note, _s.ny, _s.m, _s.idx);
                  if (_tp != null) _addReq(_t2, _tp);
                  if (_s.note.staccato && !_s.note.isRest) {
                    var _u = _stemUpOf(_s.note, _s.ny);
                    if (_u !== null && _u === false === slurAbove) {
                      var _ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                      var _pi = _ORD[_s.note.name] + (_s.note.octave || 0) * 7;
                      var _tY = _s.ny, _bY = _s.ny;
                      for (var _c of _s.note.chord || []) {
                        var _ci = _ORD[_c.name] + _c.octave * 7;
                        var _cy = _s.ny + (_pi - _ci) * (LINE_SPACING / 2);
                        if (_cy < _tY) _tY = _cy;
                        if (_cy > _bY) _bY = _cy;
                      }
                      var _dotY = slurAbove ? _tY - NOTE_RY - 12 : _bY + NOTE_RY + 12;
                      _addReq(_t2, _dotY + (slurAbove ? -(5 + 8) : 5 + 8));
                    }
                  }
                }
                var _bulge = slurAbove ? Math.min(startTipY, endTipY) - _ARC : Math.max(startTipY, endTipY) + _ARC;
                var _bulgeApex = (_bulge - 0.125 * (startTipY + endTipY)) / 0.75;
                var _apexSolved = _apexReqs.length ? slurAbove ? Math.min(..._apexReqs) : Math.max(..._apexReqs) : _bulgeApex;
                _apexSolved = slurAbove ? Math.min(_apexSolved, _bulgeApex) : Math.max(_apexSolved, _bulgeApex);
                var apexY = _apexSolved;
                var apexYinner = slurAbove ? apexY + _MID : apexY - _MID;
                var _outerTip = slurAbove ? -_TIP : _TIP;
                var cpdx = (x2 - x1) / 3;
                var dPath;
                if (_crossStaff) {
                  var _perp = (vx, vy) => {
                    var L = Math.hypot(vx, vy) || 1;
                    return [-vy / L, vx / L];
                  };
                  var C1x = x1 + cpdx, C2x = x2 - cpdx;
                  var [n0x, n0y] = _perp(C1x - x1, apexY - startTipY);
                  var [n3x, n3y] = _perp(x2 - C2x, endTipY - apexY);
                  var [nmx, nmy] = _perp(x2 - x1, endTipY - startTipY);
                  var tH = _TIP / 2, mH = _MID / 2;
                  dPath = `M ${x1 + n0x * tH} ${startTipY + n0y * tH} C ${C1x + nmx * mH} ${apexY + nmy * mH} ${C2x + nmx * mH} ${apexY + nmy * mH} ${x2 + n3x * tH} ${endTipY + n3y * tH} L ${x2 - n3x * tH} ${endTipY - n3y * tH} C ${C2x - nmx * mH} ${apexY - nmy * mH} ${C1x - nmx * mH} ${apexY - nmy * mH} ${x1 - n0x * tH} ${startTipY - n0y * tH} Z`;
                } else {
                  dPath = `M ${x1} ${startTipY + _outerTip} C ${x1 + cpdx} ${apexY} ${x2 - cpdx} ${apexY} ${x2} ${endTipY + _outerTip} L ${x2} ${endTipY} C ${x2 - cpdx} ${apexYinner} ${x1 + cpdx} ${apexYinner} ${x1} ${startTipY} Z`;
                }
                return /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d: dPath,
                    fill: "#555",
                    stroke: "none",
                    style: { pointerEvents: childLock ? "none" : "auto", cursor: childLock ? "default" : "pointer" },
                    onClick: childLock ? void 0 : (e) => {
                      e.stopPropagation();
                      var _tgtMi = targetMi;
                      var _tgtNi = targetNi;
                      setMeasures((prev) => {
                        var _a2, _b2, _c2;
                        var nx = [...prev];
                        var ns = [...nx[mi].notes];
                        var { slur: _dropSlur, ...rest } = ns[ni];
                        ns[ni] = rest;
                        nx[mi] = { ...nx[mi], notes: ns };
                        if (_tgtMi != null && _tgtNi != null && ((_c2 = (_b2 = (_a2 = nx[_tgtMi]) == null ? void 0 : _a2.notes) == null ? void 0 : _b2[_tgtNi]) == null ? void 0 : _c2.slurEnd)) {
                          var ns2 = [...nx[_tgtMi].notes];
                          var { slurEnd: _dropEnd, ...restEnd } = ns2[_tgtNi];
                          ns2[_tgtNi] = restEnd;
                          nx[_tgtMi] = { ...nx[_tgtMi], notes: ns2 };
                        }
                        return nx;
                      });
                    }
                  }
                );
              })(), tieTarget && (() => {
                var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                var pIdx = LETTER_ORD[note.name] + (note.octave || 0) * 7;
                var anyAbove = false, anyBelow = false;
                if (Array.isArray(note.chord)) {
                  for (var cn of note.chord) {
                    var cIdx = LETTER_ORD[cn.name] + (cn.octave || 0) * 7;
                    if (cIdx > pIdx) anyAbove = true;
                    else if (cIdx < pIdx) anyBelow = true;
                  }
                }
                var stemDir = forcedStemMap[ni];
                var tieAbove = note.tieDir === "down" ? false : note.tieDir === "up" ? true : anyAbove && !anyBelow ? false : anyBelow && !anyAbove ? true : stemDir === "down";
                var _pSide = Array.isArray(note.chord) && note.chord.length ? Math.max(0, Math.min(NOTE_RX + 6, (tieTarget.noteX - noteX - 12) / 2)) : 0;
                var x1 = noteX + _pSide;
                var x2 = tieTarget.noteX - _pSide;
                var _tgtY = tieTargetY != null ? tieTargetY : tieTarget.noteY;
                var baseY = tieAbove ? Math.min(noteY, _tgtY) - NOTE_RY - 9 : Math.max(noteY, _tgtY) + NOTE_RY + 9;
                var w = x2 - x1;
                var outerH = note.tieArc != null ? note.tieArc : 34;
                var _TIE_TIP = 3;
                var innerH = Math.max(4, outerH - 4.5);
                var rOuter = outerH / 2 + w * w / (8 * outerH);
                var rInner = innerH / 2 + w * w / (8 * innerH);
                var _tieTip = tieAbove ? _TIE_TIP : -_TIE_TIP;
                var so = tieAbove ? 1 : 0;
                var si = tieAbove ? 0 : 1;
                return /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d: `M ${x1} ${baseY} A ${rOuter} ${rOuter} 0 0 ${so} ${x2} ${baseY} L ${x2} ${baseY + _tieTip} A ${rInner} ${rInner} 0 0 ${si} ${x1} ${baseY + _tieTip} Z`,
                    fill: "#555",
                    stroke: "none",
                    style: { pointerEvents: childLock ? "none" : "auto", cursor: childLock ? "default" : "pointer" },
                    onClick: childLock ? void 0 : (e) => {
                      e.stopPropagation();
                      setMeasures((prev) => {
                        var nx = [...prev];
                        var ns = [...nx[mi].notes];
                        var cur = ns[ni];
                        var { tieDir: _drop, ...rest } = cur;
                        ns[ni] = { ...rest, tie: false };
                        nx[mi] = { ...nx[mi], notes: ns };
                        return nx;
                      });
                    }
                  }
                );
              })(), note.tie && !note.isRest && !tieTarget && (() => {
                var targetStaff = note.staff === "bass" ? "bass" : "treble";
                var nextMeasure = ci + 1 < rowMeasures.length ? rowMeasures[ci + 1] : null;
                var nextNote = null;
                if (nextMeasure) {
                  for (var n of nextMeasure.notes) {
                    var ns = n.staff === "bass" ? "bass" : "treble";
                    if (ns !== targetStaff || n.isRest) continue;
                    if (n.name === note.name && n.octave === note.octave) {
                      nextNote = n;
                      break;
                    }
                    if (Array.isArray(n.chord) && n.chord.some((cm2) => cm2.name === note.name && cm2.octave === note.octave)) {
                      nextNote = n;
                      break;
                    }
                  }
                }
                var x1 = noteX;
                var x2, opacity;
                if (nextNote) {
                  var nextMx = mx + mWidth;
                  x2 = nextMx + (nextNote.x || 80);
                  opacity = 1;
                } else {
                  x2 = mx + mWidth - 4;
                  opacity = 0.75;
                }
                if (Array.isArray(note.chord) && note.chord.length) {
                  var _pSide = Math.max(0, Math.min(NOTE_RX + 6, (x2 - x1 - 12) / 2));
                  x1 += _pSide;
                  x2 -= _pSide;
                }
                var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                var pIdx = LETTER_ORD[note.name] + (note.octave || 0) * 7;
                var anyAbove = false, anyBelow = false;
                if (Array.isArray(note.chord)) {
                  for (var cn of note.chord) {
                    var cIdx = LETTER_ORD[cn.name] + (cn.octave || 0) * 7;
                    if (cIdx > pIdx) anyAbove = true;
                    else if (cIdx < pIdx) anyBelow = true;
                  }
                }
                var stemDir = forcedStemMap[ni];
                var tieAbove = note.tieDir === "down" ? false : note.tieDir === "up" ? true : anyAbove && !anyBelow ? false : anyBelow && !anyAbove ? true : stemDir === "down";
                var baseY = tieAbove ? noteY - NOTE_RY - 9 : noteY + NOTE_RY + 9;
                var w = x2 - x1;
                var outerH = note.tieArc != null ? note.tieArc : 34;
                var innerH = Math.max(4, outerH - 4.5);
                var rOuter = outerH / 2 + w * w / (8 * outerH);
                var rInner = innerH / 2 + w * w / (8 * innerH);
                var _tieTip = tieAbove ? 3 : -3;
                var so = tieAbove ? 1 : 0;
                var si = tieAbove ? 0 : 1;
                return /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d: `M ${x1} ${baseY} A ${rOuter} ${rOuter} 0 0 ${so} ${x2} ${baseY} L ${x2} ${baseY + _tieTip} A ${rInner} ${rInner} 0 0 ${si} ${x1} ${baseY + _tieTip} Z`,
                    fill: "#555",
                    stroke: "none",
                    opacity,
                    style: { pointerEvents: childLock ? "none" : "auto", cursor: childLock ? "default" : "pointer" },
                    onClick: childLock ? void 0 : (e) => {
                      e.stopPropagation();
                      setMeasures((prev) => {
                        var nx = [...prev];
                        var ns2 = [...nx[mi].notes];
                        var cur = ns2[ni];
                        var { tieDir: _drop, ...rest } = cur;
                        ns2[ni] = { ...rest, tie: false };
                        nx[mi] = { ...nx[mi], notes: ns2 };
                        return nx;
                      });
                    }
                  }
                );
              })(), Array.isArray(note.chord) && note.chord.map((cn, cmi) => {
                if (!cn.tie) return null;
                var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                var primaryIdx = LETTER_ORD[note.name] + (note.octave || 0) * 7;
                var cIdx = LETTER_ORD[cn.name] + (cn.octave || 0) * 7;
                var cy = noteY + (primaryIdx - cIdx) * (LINE_SPACING / 2);
                var target = null;
                var crossMeasure = false;
                var findChordMatch = (cand2) => {
                  if (cand2.note.isRest) return null;
                  var candStaff2 = cand2.note.staff === "bass" ? "bass" : "treble";
                  if (candStaff2 !== noteStaffKey) return null;
                  if (!Array.isArray(cand2.note.chord)) return null;
                  for (var ck = 0; ck < cand2.note.chord.length; ck++) {
                    var cc2 = cand2.note.chord[ck];
                    if (cc2.name === cn.name && cc2.octave === cn.octave) {
                      var candPrimaryIdx2 = LETTER_ORD[cand2.note.name] + (cand2.note.octave || 0) * 7;
                      var candCIdx2 = LETTER_ORD[cc2.name] + (cc2.octave || 0) * 7;
                      var cy22 = cand2.noteY + (candPrimaryIdx2 - candCIdx2) * (LINE_SPACING / 2);
                      return { x: cand2.noteX, y: cy22 };
                    }
                  }
                  return null;
                };
                for (var j3 = noteDataIdx + 1; j3 < noteData.length; j3++) {
                  target = findChordMatch(noteData[j3]);
                  if (target) break;
                }
                if (!target && ci + 1 < rowMeasures.length) {
                  var nextMx = mx + mWidth;
                  var nextM = rowMeasures[ci + 1];
                  for (var n of nextM.notes) {
                    if (n.isRest) continue;
                    var nStaff = n.staff === "bass" ? "bass" : "treble";
                    if (nStaff !== noteStaffKey) continue;
                    if (!Array.isArray(n.chord)) continue;
                    for (var cc of n.chord) {
                      if (cc.name === cn.name && cc.octave === cn.octave) {
                        var candPrimaryIdx = LETTER_ORD[n.name] + (n.octave || 0) * 7;
                        var candCIdx = LETTER_ORD[cc.name] + (cc.octave || 0) * 7;
                        var yBase = n.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                        var refPrimaryY = yBase + (18 - candPrimaryIdx % 14) * (LINE_SPACING / 2);
                        var cy2 = noteY + (candPrimaryIdx - candCIdx) * (LINE_SPACING / 2);
                        target = { x: nextMx + (n.x || 80), y: cy2 };
                        crossMeasure = true;
                        break;
                      }
                    }
                    if (target) break;
                  }
                }
                if (!target && ci === rowMeasures.length - 1) {
                  target = { x: mx + mWidth - 4, y: cy };
                  crossMeasure = true;
                }
                if (!target) return null;
                var _allIdxs = [primaryIdx, ...note.chord.map((c) => LETTER_ORD[c.name] + (c.octave || 0) * 7)];
                var _sortedAll = _allIdxs.slice().sort((a, b) => a - b);
                var _myRank = _sortedAll.indexOf(cIdx);
                var _upperHalfStart = Math.ceil(_sortedAll.length / 2);
                var tieAbove = cn.tieDir === "up" ? true : cn.tieDir === "down" ? false : _myRank >= _upperHalfStart;
                var _side = Math.max(0, Math.min(NOTE_RX + 6, (target.x - noteX - 12) / 2));
                var x1 = noteX + _side;
                var x2 = target.x - _side;
                var baseY = tieAbove ? Math.min(cy, target.y) - NOTE_RY - 9 : Math.max(cy, target.y) + NOTE_RY + 9;
                var w = x2 - x1;
                var outerH = 36;
                var innerH = Math.max(4, outerH - 4.5);
                var rOuter = outerH / 2 + w * w / (8 * outerH);
                var rInner = innerH / 2 + w * w / (8 * innerH);
                var _tieTip = tieAbove ? 3 : -3;
                var so = tieAbove ? 1 : 0;
                var si = tieAbove ? 0 : 1;
                return /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    key: `chordtie-${cmi}`,
                    d: `M ${x1} ${baseY} A ${rOuter} ${rOuter} 0 0 ${so} ${x2} ${baseY} L ${x2} ${baseY + _tieTip} A ${rInner} ${rInner} 0 0 ${si} ${x1} ${baseY + _tieTip} Z`,
                    fill: "#555",
                    stroke: "none",
                    style: { pointerEvents: "none" }
                  }
                );
              }), (note.dotted || note.doubleDotted) && (() => {
                var _stemUp = forcedStemMap[ni] === "up" ? true : forcedStemMap[ni] === "down" ? false : noteY > STAFF_TOP + 2 * LINE_SPACING;
                var _placement = chordPlacement(note.name, note.octave, note.chord, _stemUp);
                var dotX = noteX + _placement.maxOffset + NOTE_RX + 10;
                var DOT_GAP = 12;
                var fillFor = (selected) => note.isRest ? "#1a1a1a" : selected ? "var(--select)" : "var(--note-color)";
                var isPrimarySelected = (selectedNote == null ? void 0 : selectedNote.measure) === mi && (selectedNote == null ? void 0 : selectedNote.note) === ni;
                var dots = [];
                var _restStaffTop = isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                var primaryDotY = note.isRest ? _restStaffTop + 1.5 * LINE_SPACING : noteY - 3;
                dots.push(/* @__PURE__ */ React.createElement("circle", { key: "dot-primary", cx: dotX, cy: primaryDotY, r: 4, fill: fillFor(isPrimarySelected) }));
                if (note.doubleDotted) {
                  dots.push(/* @__PURE__ */ React.createElement("circle", { key: "dot-primary-2", cx: dotX + DOT_GAP, cy: primaryDotY, r: 4, fill: fillFor(isPrimarySelected) }));
                }
                if (Array.isArray(note.chord)) {
                  var LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                  var primaryIdx = LETTER_ORD[note.name] + (note.octave || 0) * 7;
                  note.chord.forEach((cn, ci2) => {
                    var cIdx = LETTER_ORD[cn.name] + (cn.octave || 0) * 7;
                    var cy = noteY + (primaryIdx - cIdx) * (LINE_SPACING / 2);
                    dots.push(/* @__PURE__ */ React.createElement("circle", { key: `cd-${ci2}`, cx: dotX, cy: cy - 3, r: 4, fill: "var(--note-color)" }));
                    if (note.doubleDotted) {
                      dots.push(/* @__PURE__ */ React.createElement("circle", { key: `cd-${ci2}-2`, cx: dotX + DOT_GAP, cy: cy - 3, r: 4, fill: "var(--note-color)" }));
                    }
                  });
                }
                return /* @__PURE__ */ React.createElement(React.Fragment, null, dots);
              })(), (note.clefBefore === "treble" || note.clefBefore === "bass") && (() => {
                var _isBass = note.clefBefore === "bass";
                var _staffTopY = isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                var _fs = _isBass ? 120 : 115;
                var _baseY = _isBass ? _staffTopY + 3.5 * LINE_SPACING - 5 : _staffTopY + 4 * LINE_SPACING + 2;
                var _gx = noteX - NOTE_RX - 54;
                var _cx = _gx + 6;
                var _cy = _staffTopY + 2 * LINE_SPACING;
                return /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: _cx,
                    y: _baseY,
                    fontSize: _fs,
                    fill: "var(--clef-color)",
                    fontFamily: "'Noto Music', 'Noto Serif', serif",
                    transform: `translate(${_cx} ${_cy}) scale(0.85) translate(${-_cx} ${-_cy})`,
                    style: { pointerEvents: "none" }
                  },
                  _isBass ? "\u{1D122}" : "\u{1D11E}"
                );
              })(), note.staccato && !note.isRest && (() => {
                var _staccStaffTop = isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                var _stemUp = forcedStemMap[ni] === "up" ? true : forcedStemMap[ni] === "down" ? false : noteY > _staccStaffTop + 2 * LINE_SPACING;
                var _LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                var _pIdx = _LETTER_ORD[note.name] + (note.octave || 0) * 7;
                var _chordYs = (note.chord || []).map((c) => {
                  var _ci = _LETTER_ORD[c.name] + c.octave * 7;
                  return noteY + (_pIdx - _ci) * (LINE_SPACING / 2);
                });
                var _allY = [noteY, ..._chordYs];
                var _topY = Math.min(..._allY);
                var _botY = Math.max(..._allY);
                var _stacPlaying = !!playingNotes[mi + "-" + ni] || playingIdx.measure === mi && playingIdx.note === ni || playMode === "practice" && !bigNoteOnPlay && (practiceBeatKeys.has(mi + "-" + ni) || practicePos && practicePos.measure === mi && practicePos.note === ni);
                var _stacScale = _stacPlaying && !(bigNoteOnPlay || vibeMode === 2) ? 2 : 1;
                var dotY = _stemUp ? _botY + NOTE_RY * _stacScale + 12 : _topY - NOTE_RY * _stacScale - 12;
                return /* @__PURE__ */ React.createElement("circle", { cx: noteX, cy: dotY, r: 5 * _stacScale, fill: "#000", style: { pointerEvents: "none" } });
              })(), note.accent && !note.isRest && (() => {
                var _LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                var _pIdx = _LETTER_ORD[note.name] + (note.octave || 0) * 7;
                var _chordYs = (note.chord || []).map((c) => {
                  var _ci = _LETTER_ORD[c.name] + c.octave * 7;
                  return noteY + (_pIdx - _ci) * (LINE_SPACING / 2);
                });
                var _allY = [noteY, ..._chordYs];
                var _topY = Math.min(..._allY);
                var _botY = Math.max(..._allY);
                var extra = note.staccato ? 14 : 0;
                var _isFClef = clef === "bass" || isMultiStaff(clef) && note.staff === "bass";
                var _accPlaying = !!playingNotes[mi + "-" + ni] || playingIdx.measure === mi && playingIdx.note === ni || playMode === "practice" && !bigNoteOnPlay && (practiceBeatKeys.has(mi + "-" + ni) || practicePos && practicePos.measure === mi && practicePos.note === ni);
                var _accScale = _accPlaying && !(bigNoteOnPlay || vibeMode === 2) ? 2 : 1;
                var _accentBelow = note.accentDir === "down" ? true : note.accentDir === "up" ? false : !_isFClef;
                var markY = _accentBelow ? _botY + NOTE_RY * _accScale + 16 + extra + 5 : _topY - NOTE_RY * _accScale - 16 - extra - 5;
                var _aw = 15 * _accScale, _ah = 9 * _accScale;
                return /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d: `M ${noteX - _aw} ${markY - _ah} L ${noteX + _aw} ${markY} L ${noteX - _aw} ${markY + _ah}`,
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: 3.8 * _accScale,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: { pointerEvents: "none" }
                  }
                );
              })(), note.fermata && (() => {
                var _isFClef = clef === "bass" || isMultiStaff(clef) && note.staff === "bass";
                var _ferSize = _isFClef ? 60 : 54;
                var fy;
                if (note.isRest) {
                  var _sTop = isMultiStaff(clef) && note.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP;
                  fy = _sTop - 26;
                } else {
                  var _LETTER_ORD = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
                  var _pIdx = _LETTER_ORD[note.name] + (note.octave || 0) * 7;
                  var _chordYs = (note.chord || []).map((c) => {
                    var _ci = _LETTER_ORD[c.name] + c.octave * 7;
                    return noteY + (_pIdx - _ci) * (LINE_SPACING / 2);
                  });
                  var _topY = Math.min(noteY, ..._chordYs);
                  var extra = (note.accent ? 24 : 0) + (note.staccato ? 14 : 0);
                  var _ferGap = _isFClef ? 14 : 42;
                  fy = _topY - NOTE_RY - _ferGap - extra;
                }
                return /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: noteX,
                    y: fy,
                    textAnchor: "middle",
                    fontSize: _ferSize,
                    fontFamily: "'Noto Music', serif",
                    fill: "#000",
                    style: { pointerEvents: "none" }
                  },
                  "\u{1D110}"
                );
              })(), !note.isRest && (note.dynamic || note.dynAccent) && (() => {
                var _isGrand = isMultiStaff(clef);
                var gy = _isGrand ? (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2 + 12 : STAFF_TOP + 4 * LINE_SPACING + (isMobile ? 90 : 100);
                var _dynFs = isMobile ? 46 : isTablet ? 62 : 68;
                var _lyricText = note.verses && note.verses[0] || note.lyric || "";
                var _hasLyric = !!_lyricText && !note.isRest;
                var _charW = isMobile ? 14 : isTablet ? 14 : 18;
                var _lyricHalf = _lyricText.length * _charW / 2;
                var gx = _hasLyric ? noteX - _lyricHalf - _charW : noteX;
                var _anchor = _hasLyric ? "end" : "middle";
                var isSel = selectedNote && selectedNote.measure === mi && selectedNote.note === ni;
                var dynColor = isSel ? "var(--select)" : "#1a1a1a";
                var items = [];
                if (isSel) {
                  var w = note.dynamic ? _dynFs * 1.6 : _dynFs * 1.4;
                  var h = _dynFs * (note.dynamic && note.dynAccent ? 2 : 1.3);
                  var hlX = _hasLyric ? gx - w : gx - w / 2;
                  items.push(
                    /* @__PURE__ */ React.createElement(
                      "rect",
                      {
                        key: "hl",
                        x: hlX,
                        y: gy - _dynFs * 0.95,
                        width: w,
                        height: h,
                        rx: 6,
                        fill: "var(--select)",
                        opacity: 0.16,
                        style: { pointerEvents: "none" }
                      }
                    )
                  );
                }
                if (note.dynamic) {
                  var d = DYNAMICS.find((dd) => dd.id === note.dynamic);
                  if (d) items.push(
                    /* @__PURE__ */ React.createElement(
                      "text",
                      {
                        key: "dyn",
                        x: gx,
                        y: gy,
                        textAnchor: _anchor,
                        fontFamily: "'Noto Music', serif",
                        fontSize: _dynFs,
                        fill: dynColor,
                        style: { userSelect: "none", pointerEvents: "none" }
                      },
                      d.glyph
                    )
                  );
                }
                if (note.dynAccent) {
                  var a = DYN_ACCENTS.find((aa) => aa.id === note.dynAccent);
                  if (a) items.push(
                    /* @__PURE__ */ React.createElement(
                      "text",
                      {
                        key: "acc",
                        x: gx,
                        y: note.dynamic ? gy + _dynFs * 0.7 : gy,
                        textAnchor: _anchor,
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: Math.round(_dynFs * 0.6),
                        fontStyle: "italic",
                        fontWeight: 700,
                        fill: dynColor,
                        style: { userSelect: "none", pointerEvents: "none" }
                      },
                      a.label
                    )
                  );
                }
                return /* @__PURE__ */ React.createElement(React.Fragment, null, items);
              })(), note.hairpin && !note.isRest && (() => {
                var endX = null;
                for (var j3 = noteDataIdx + 1; j3 < noteData.length; j3++) {
                  if (noteData[j3].note.hairpinEnd) {
                    endX = noteData[j3].noteX;
                    break;
                  }
                }
                if (endX === null) {
                  var xOffset = mx + mWidth;
                  for (var mc = ci + 1; mc < rowMeasures.length && endX === null; mc++) {
                    var laterM = rowMeasures[mc];
                    var laterNotes = laterM.notes || [];
                    for (var nj = 0; nj < laterNotes.length; nj++) {
                      if (laterNotes[nj].hairpinEnd) {
                        endX = xOffset + (laterNotes[nj].x || 80);
                        break;
                      }
                    }
                    xOffset += laterM._width || mWidth;
                  }
                }
                if (endX === null) return null;
                var _isGrand = isMultiStaff(clef);
                var _hpLo = Math.min(noteX, endX);
                var _hpHi = Math.max(noteX, endX);
                var midY;
                if (_isGrand) {
                  var _tD = 0, _tU = 0, _bD = 0, _bU = 0;
                  for (var _d of noteData) {
                    if (_d.note.isRest || _d.noteX < _hpLo - 1 || _d.noteX > _hpHi + 1) continue;
                    var _dir = forcedStemMap[_d.ni];
                    var _isT = (_d.note.staff === "bass" ? "bass" : "treble") === "treble";
                    if (_dir === "down") {
                      _isT ? _tD++ : _bD++;
                    } else if (_dir === "up") {
                      _isT ? _tU++ : _bU++;
                    }
                  }
                  var _trebDown = _tD >= _tU;
                  var _bassUp = _bU > _bD;
                  var _trebBottom = -Infinity, _bassTop = Infinity;
                  for (var _d of noteData) {
                    if (_d.note.isRest || _d.noteX < _hpLo - 1 || _d.noteX > _hpHi + 1) continue;
                    var _stemLen = STEM_HEIGHT - (_d.note.stemShorten || 0);
                    if ((_d.note.staff === "bass" ? "bass" : "treble") === "treble") {
                      var _b2 = _d.noteY + (_trebDown ? _stemLen : NOTE_RY);
                      if (_b2 > _trebBottom) _trebBottom = _b2;
                    } else {
                      var _t2 = _d.noteY - (_bassUp ? _stemLen : NOTE_RY);
                      if (_t2 < _bassTop) _bassTop = _t2;
                    }
                  }
                  midY = _trebBottom === -Infinity || _bassTop === Infinity ? (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2 : (_trebBottom + _bassTop) / 2;
                } else {
                  midY = STAFF_TOP + 4 * LINE_SPACING + 34;
                }
                var x0 = Math.min(noteX, endX) + 6;
                var x1 = Math.max(noteX, endX) - 6;
                if (x1 - x0 < 6) return null;
                var h = 12;
                var opening = note.hairpin === "cresc";
                var d = opening ? `M ${x1} ${midY - h} L ${x0} ${midY} L ${x1} ${midY + h}` : `M ${x0} ${midY - h} L ${x1} ${midY} L ${x0} ${midY + h}`;
                return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d,
                    fill: "none",
                    stroke: "#1a1a1a",
                    strokeWidth: 1.8,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: { pointerEvents: "none" }
                  }
                ), !childLock && /* @__PURE__ */ React.createElement(
                  "path",
                  {
                    d,
                    fill: "none",
                    stroke: "transparent",
                    strokeWidth: Math.max(20, h * 1.8),
                    style: { pointerEvents: "stroke", cursor: "pointer" },
                    onClick: (e) => {
                      e.stopPropagation();
                      setMeasures((prev) => {
                        var next = prev.map((m) => ({ ...m, notes: m.notes.map((n) => ({ ...n })) }));
                        if (next[mi] && next[mi].notes[ni]) delete next[mi].notes[ni].hairpin;
                        var found = false;
                        for (var _mi = mi; _mi < next.length && !found; _mi++) {
                          var startNj = _mi === mi ? ni + 1 : 0;
                          for (var _nj = startNj; _nj < next[_mi].notes.length; _nj++) {
                            if (next[_mi].notes[_nj].hairpinEnd) {
                              delete next[_mi].notes[_nj].hairpinEnd;
                              found = true;
                              break;
                            }
                          }
                        }
                        return next;
                      });
                    }
                  },
                  /* @__PURE__ */ React.createElement("title", null, "Click to remove this crescendo / diminuendo")
                ));
              })(), note.tempoSpan && !note.isRest && (() => {
                var endX = null;
                for (var j3 = noteDataIdx + 1; j3 < noteData.length; j3++) {
                  if (noteData[j3].note.tempoSpanEnd) {
                    endX = noteData[j3].noteX;
                    break;
                  }
                }
                if (endX === null) {
                  var xOffset = mx + mWidth;
                  for (var mc = ci + 1; mc < rowMeasures.length && endX === null; mc++) {
                    var laterM = rowMeasures[mc];
                    var laterNotes = laterM.notes || [];
                    for (var nj = 0; nj < laterNotes.length; nj++) {
                      if (laterNotes[nj].tempoSpanEnd) {
                        endX = xOffset + (laterNotes[nj].x || 80);
                        break;
                      }
                    }
                    xOffset += laterM._width || mWidth;
                  }
                }
                if (endX === null) return null;
                var label = note.tempoSpan === "accel" ? "accel." : "rit.";
                var _isGrand = isMultiStaff(clef);
                var _hasLyric = !!(note.lyric || note.verses && note.verses.some((v) => v));
                var _lyricY = _isGrand ? (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2 + 12 : STAFF_TOP + 4 * LINE_SPACING + (isMobile ? 90 : 100);
                var labelY = _hasLyric ? _lyricY + 44 : STAFF_TOP + 4 * LINE_SPACING + 48;
                var _fs = isMobile ? 24 : 40;
                var labelX = Math.max(mx + 6, noteX - 48);
                return /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: labelX,
                    y: labelY,
                    textAnchor: "start",
                    fontSize: _fs,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontFamily: "serif",
                    fill: "#1a1a1a",
                    style: { userSelect: "none", pointerEvents: "none" }
                  },
                  label
                );
              })(), note.tempoMark && !note.isRest && (() => {
                var _isGrand = isMultiStaff(clef);
                var _hasLyric = !!(note.lyric || note.verses && note.verses.some((v) => v));
                var _lyricY = _isGrand ? (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2 + 12 : STAFF_TOP + 4 * LINE_SPACING + (isMobile ? 90 : 100);
                var labelY = _hasLyric ? _lyricY + 44 : STAFF_TOP + 4 * LINE_SPACING + 48;
                var _fs = isMobile ? 24 : 40;
                var labelX = Math.max(mx + 6, noteX - 48);
                return /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: labelX,
                    y: labelY,
                    textAnchor: "start",
                    fontSize: _fs,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontFamily: "serif",
                    fill: "#1a1a1a",
                    style: { userSelect: "none", pointerEvents: "none" }
                  },
                  note.tempoMark
                );
              })(), note.ottava && !note.isRest && (() => {
                var _a2, _b2;
                var isAlta = note.ottava === "8va";
                var _ottavaY = typeof note.ottavaY === "number" ? note.ottavaY : 0;
                var labelY = (isAlta ? noteY - NOTE_RY - 95 : noteY + NOTE_RY + 95) + _ottavaY;
                var isOttDragging = draggingOttava && draggingOttava.measure === mi && draggingOttava.note === ni;
                var ottColor = isOttDragging ? "#dc2626" : "#333";
                var endX = null;
                for (var j3 = noteDataIdx + 1; j3 < noteData.length; j3++) {
                  var cand2 = noteData[j3].note;
                  if (cand2.isRest) continue;
                  if (cand2.ottavaEnd) {
                    endX = noteData[j3].noteX;
                    break;
                  }
                }
                if (endX == null) {
                  for (var cci = ci + 1; cci < rowMeasures.length; cci++) {
                    var nextM = rowMeasures[cci];
                    var nextMx = mx + (cci - ci) * measureWidth;
                    var foundEnd = null;
                    var cumBeats = 0;
                    var usableInner = measureWidth - 80 - 20;
                    var beatSizeInner = usableInner / measureBeatsInQuarters(timeSig);
                    for (var n of nextM.notes) {
                      if (n.isRest) {
                        var bd = ((_a2 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _a2.beats) || 1;
                        cumBeats += n.doubleDotted ? bd * 1.75 : n.dotted ? bd * 1.5 : n.triplet ? bd * 2 / 3 : bd;
                        continue;
                      }
                      if (n.ottavaEnd) {
                        foundEnd = nextMx + 80 + cumBeats * beatSizeInner;
                        break;
                      }
                      var bd = ((_b2 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _b2.beats) || 1;
                      cumBeats += n.doubleDotted ? bd * 1.75 : n.dotted ? bd * 1.5 : n.triplet ? bd * 2 / 3 : bd;
                    }
                    if (foundEnd != null) {
                      endX = foundEnd;
                      break;
                    }
                  }
                }
                if (endX == null) {
                  endX = mx + (rowMeasures.length - ci) * measureWidth - 4;
                }
                var dashStartX = noteX + 30;
                var dashY = labelY - 5;
                var hookDir = isAlta ? 1 : -1;
                return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: noteX,
                    y: labelY,
                    textAnchor: "middle",
                    fontSize: 40,
                    fontStyle: "italic",
                    fontWeight: 700,
                    fill: ottColor,
                    fontFamily: "serif",
                    style: { cursor: childLock ? "default" : "ns-resize", userSelect: "none" },
                    onMouseDown: childLock ? void 0 : (e) => handleOttavaDragStart(mi, ni, e),
                    onTouchStart: childLock ? void 0 : (e) => handleOttavaDragStart(mi, ni, e),
                    onClick: childLock ? void 0 : (e) => e.stopPropagation()
                  },
                  note.ottava
                ), endX > dashStartX && /* @__PURE__ */ React.createElement("g", { style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(
                  "line",
                  {
                    x1: dashStartX,
                    y1: dashY,
                    x2: endX,
                    y2: dashY,
                    stroke: ottColor,
                    strokeWidth: 2,
                    strokeDasharray: "14 9"
                  }
                ), /* @__PURE__ */ React.createElement(
                  "line",
                  {
                    x1: endX,
                    y1: dashY,
                    x2: endX,
                    y2: dashY + hookDir * 16,
                    stroke: ottColor,
                    strokeWidth: 2
                  }
                )));
              })(), (() => {
                var isGrand = isMultiStaff(clef);
                var _defaultLyricY = STAFF_TOP + 4 * LINE_SPACING + (isMobile ? 90 : 100);
                var _shouldFloor = !isGrand && transposeOffset < 0;
                var _floorBelowLowest = songLowestNoteY + (isMobile ? 30 : 36);
                var baseLyricY = isGrand ? (STAFF_TOP + 4 * LINE_SPACING + BASS_STAFF_TOP) / 2 + 12 : _shouldFloor ? Math.max(_defaultLyricY, _floorBelowLowest) : _defaultLyricY;
                var vSpacing = 34;
                var grandWindowTop = baseLyricY - 6;
                var grandWindowBot = baseLyricY + 2 * vSpacing - 6;
                var isNotePlaying = playingIdx.measure === mi && playingIdx.note === ni;
                var nextNote = null;
                for (var j3 = ni + 1; j3 < noteData.length; j3++) {
                  var cand2 = noteData[j3].note;
                  if (cand2.isRest || cand2.staff === "bass") continue;
                  nextNote = noteData[j3];
                  break;
                }
                var verses = note.verses || [note.lyric || ""];
                var results = [];
                var showVerses = childLock ? [repeatCountRef.current] : Array.from({ length: verses.length }, (_2, i2) => i2);
                for (var vi of showVerses) {
                  var lyric = verses[vi] || "";
                  var rawLyricY = childLock ? baseLyricY : baseLyricY + vi * vSpacing - (isWidescreen ? lyricsScrollY : 0);
                  if (!childLock) {
                    if (isGrand) {
                      if (rawLyricY < grandWindowTop || rawLyricY > grandWindowBot) continue;
                    } else if (isWidescreen) {
                      if (rawLyricY < lyricsAreaTop || rawLyricY > tabletViewTop + tabletViewH + 20) continue;
                    }
                  }
                  if (!lyric) continue;
                  var lyricY = rawLyricY;
                  var _playX = playingIdx.measure === mi && playingIdx.note >= 0 && noteData[playingIdx.note] ? noteData[playingIdx.note].noteX : -1;
                  var _nextX = nextNote ? nextNote.noteX : Infinity;
                  var _inWindow = _playX >= noteX && _playX < _nextX;
                  var isActiveLyric = _inWindow && repeatCountRef.current === vi;
                  var lyricColor = "#000000";
                  var hasDash = lyric.endsWith("-");
                  var isJustDash = lyric === "-";
                  var displayText = hasDash ? lyric.slice(0, -1) : isJustDash ? "\u2013" : lyric;
                  var dashX = null;
                  if (hasDash || isJustDash) {
                    var charW = isMobile ? 14 : isTablet ? 14 : 18;
                    var currentRightEdge = noteX + displayText.length * charW / 2;
                    if (nextNote) {
                      var nextVerses = nextNote.note.verses || [nextNote.note.lyric || ""];
                      var nextLyric = nextVerses[vi] || nextVerses[0] || "";
                      var nextDisplay = nextLyric.endsWith("-") ? nextLyric.slice(0, -1) : nextLyric;
                      var nextLeftEdge = nextNote.noteX - nextDisplay.length * charW / 2;
                      dashX = (currentRightEdge + nextLeftEdge) / 2;
                    } else {
                      var nextMeasure = rowMeasures[ci + 1] || measures[mi + 1];
                      var nextFirstNote = null;
                      if (nextMeasure && nextMeasure.notes) {
                        for (var n of nextMeasure.notes) {
                          if (n.isRest || n.staff === "bass") continue;
                          nextFirstNote = n;
                          break;
                        }
                      }
                      if (nextFirstNote) {
                        var nextMx = contentStart + (ci + 1) * measureWidth;
                        var nextFirstX = nextMx + firstNoteX;
                        var nextVerses = nextFirstNote.verses || [nextFirstNote.lyric || ""];
                        var nextLyric = nextVerses[vi] || nextVerses[0] || "";
                        var nextDisplay = nextLyric.endsWith("-") ? nextLyric.slice(0, -1) : nextLyric;
                        var nextLeftEdge = nextFirstX - nextDisplay.length * charW / 2;
                        dashX = (currentRightEdge + nextLeftEdge) / 2;
                      } else {
                        dashX = currentRightEdge + 15;
                      }
                    }
                  }
                  var _baseLyricFs = isMobile ? 34 : isTablet ? 34 : 36;
                  var _activeLyricFs = isActiveLyric ? Math.round(_baseLyricFs * 1.5) : _baseLyricFs;
                  results.push(
                    /* @__PURE__ */ React.createElement("g", { key: "v" + vi }, /* @__PURE__ */ React.createElement(
                      "text",
                      {
                        x: noteX,
                        y: lyricY,
                        textAnchor: "middle",
                        fontSize: _activeLyricFs,
                        fill: lyricColor,
                        fontWeight: isActiveLyric ? 700 : 400,
                        fontFamily: "'Comic Neue', 'Noto Sans', cursive",
                        style: { pointerEvents: "none", transition: "font-size 0.08s ease-out" }
                      },
                      displayText
                    ), dashX && /* @__PURE__ */ React.createElement(
                      "text",
                      {
                        x: dashX,
                        y: lyricY,
                        textAnchor: "middle",
                        fontSize: _baseLyricFs,
                        fill: lyricColor,
                        fontWeight: isActiveLyric ? 700 : 400,
                        fontFamily: "'Comic Neue', 'Noto Sans', cursive",
                        style: { pointerEvents: "none" }
                      },
                      "\u2013"
                    ))
                  );
                }
                return results;
              })());
            }), beamGroups.map((group, gi) => {
              var NOTE_COLORS_MAP = { C: "var(--c-color)", D: "var(--d-color)", E: "var(--e-color)", F: "var(--f-color)", G: "var(--g-color)", A: "var(--a-color)", B: "var(--b-color)" };
              var isSixteenth = group[0].note.duration === "sixteenth";
              var isThirtySecond = group[0].note.duration === "thirty-second";
              var isTripletBeam = group[0].note.triplet;
              var isEighthBeam = group[0].note.duration === "eighth";
              var allStemUp = forcedStemMap[group[0].ni] === "up";
              var beamColor = !colorNotes ? "#000" : NOTE_COLORS_MAP[group[0].note.name] || "var(--note-color)";
              var first = group[0];
              var last = group[group.length - 1];
              var beams = [];
              var isEvenStep = false;
              if (group.length >= 2) {
                var step = group[1].noteY - group[0].noteY;
                if (step !== 0) {
                  isEvenStep = group.slice(1).every((nd, i3) => nd.noteY - group[i3].noteY === step);
                }
              }
              var LETTERS_ = ["C", "D", "E", "F", "G", "A", "B"];
              var gradientStops = (() => {
                var f = group[0].note, l = group[group.length - 1].note;
                var v1 = f.octave * 7 + LETTERS_.indexOf(f.name);
                var v2 = l.octave * 7 + LETTERS_.indexOf(l.name);
                if (v1 === v2) return null;
                var step2 = v1 < v2 ? 1 : -1;
                var letters = [];
                for (var v = v1; step2 > 0 ? v <= v2 : v >= v2; v += step2) {
                  letters.push(LETTERS_[(v % 7 + 7) % 7]);
                }
                if (letters.length < 2) return null;
                return letters.map((ltr, i3) => ({
                  offset: (i3 / (letters.length - 1) * 100).toFixed(1) + "%",
                  color: !colorNotes ? "#000" : NOTE_COLORS_MAP[ltr] || "var(--note-color)"
                }));
              })();
              var LETTER_ORD_B = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
              var chordYs = (nd) => {
                var ys = [nd.noteY];
                if (Array.isArray(nd.note.chord)) {
                  var pIdx = LETTER_ORD_B[nd.note.name] + (nd.note.octave || 0) * 7;
                  for (var c of nd.note.chord) {
                    var ci2 = LETTER_ORD_B[c.name] + c.octave * 7;
                    ys.push(nd.noteY + (pIdx - ci2) * (LINE_SPACING / 2));
                  }
                }
                return ys;
              };
              var chordTopY = (nd) => Math.min(...chordYs(nd));
              var chordBotY = (nd) => Math.max(...chordYs(nd));
              var anyChord = group.some((nd) => Array.isArray(nd.note.chord) && nd.note.chord.length > 0);
              var numBeamsFor = (n) => n.duration === "thirty-second" ? 3 : n.duration === "sixteenth" ? 2 : 1;
              var extraStem = (n) => n.duration === "thirty-second" ? 20 : n.duration === "sixteenth" ? 10 : 0;
              var isGraceGroup = !!group[0].note.grace;
              var graceStemMul = isGraceGroup ? 0.4 : 1;
              var graceLeadExtras = (() => {
                if (!isGraceGroup || group.length < 2) return [];
                var _sH = (nd) => (STEM_HEIGHT + extraStem(nd.note) - (nd.note.stemShorten || 0)) * graceStemMul;
                var _Yfirst = group[0].noteY;
                var _Ylast = group[group.length - 1].noteY;
                var _dY = _Yfirst - _Ylast;
                if (_dY === 0) return group.map(() => 0);
                var _target = 8 * Math.sign(_dY);
                var _tipLast = _Ylast - _sH(group[group.length - 1]);
                var _tipFirst = _tipLast + _target;
                var _n2 = group.length;
                return group.map((nd, k) => {
                  var _t = k / (_n2 - 1);
                  var _tipK = _tipFirst + _t * (_tipLast - _tipFirst);
                  var _sHTarget = nd.noteY - _tipK;
                  return Math.max(0, (_sHTarget - _sH(nd)) / graceStemMul);
                });
              })();
              var GRACE_BEAM_SLANT_CAP = 16;
              var beamBgWidth = isGraceGroup ? 0 : 7;
              var beamFgWidth = isGraceGroup ? 3 : 5;
              var stemExtBgWidth = isGraceGroup ? 0 : 5;
              var stemExtFgWidth = isGraceGroup ? 3 : 3;
              if (allStemUp) {
                var beamY1, beamY2;
                var _stemXOffsetUp = isGraceGroup ? (NOTE_RX - 2) * 0.4 : NOTE_RX - 2;
                var x1 = first.noteX + _stemXOffsetUp;
                var x2 = last.noteX + _stemXOffsetUp;
                var stemH = (nd) => {
                  var h = STEM_HEIGHT + extraStem(nd.note) - (nd.note.stemShorten || 0);
                  if (isGraceGroup) {
                    var _gi = group.indexOf(nd);
                    if (_gi >= 0) h += graceLeadExtras[_gi] || 0;
                  }
                  return h * graceStemMul;
                };
                if (isEvenStep && !anyChord) {
                  beamY1 = chordTopY(first) - stemH(first);
                  beamY2 = chordTopY(last) - stemH(last);
                } else {
                  var minY = Math.min(...group.map((nd) => chordTopY(nd) - stemH(nd)));
                  beamY1 = minY;
                  beamY2 = minY;
                }
                beams.push(/* @__PURE__ */ React.createElement(
                  "line",
                  {
                    key: `beam-bg-${gi}`,
                    x1,
                    y1: beamY1,
                    x2,
                    y2: beamY2,
                    stroke: "#000",
                    strokeWidth: beamBgWidth
                  }
                ));
                if (gradientStops) {
                  var gradId = `beam-grad-${mi}-${gi}`;
                  beams.push(
                    /* @__PURE__ */ React.createElement("linearGradient", { key: `grad-${gi}`, id: gradId, gradientUnits: "userSpaceOnUse", x1, y1: beamY1, x2, y2: beamY2 }, gradientStops.map((s, si) => /* @__PURE__ */ React.createElement("stop", { key: si, offset: s.offset, stopColor: s.color })))
                  );
                  beams.push(/* @__PURE__ */ React.createElement(
                    "line",
                    {
                      key: `beam-${gi}`,
                      x1,
                      y1: beamY1,
                      x2,
                      y2: beamY2,
                      stroke: `url(#${gradId})`,
                      strokeWidth: beamFgWidth
                    }
                  ));
                } else {
                  beams.push(/* @__PURE__ */ React.createElement(
                    "line",
                    {
                      key: `beam-${gi}`,
                      x1,
                      y1: beamY1,
                      x2,
                      y2: beamY2,
                      stroke: beamColor,
                      strokeWidth: beamFgWidth
                    }
                  ));
                }
                {
                  var beamAt = (x) => x2 !== x1 ? beamY1 + (x - x1) / (x2 - x1) * (beamY2 - beamY1) : beamY1;
                  for (var level of [2, 3]) {
                    var offset = (level - 1) * (isGraceGroup ? 6 : 14);
                    var inLevel = group.map((nd) => numBeamsFor(nd.note) >= level);
                    var runs = [];
                    var runStart = -1;
                    for (var i2 = 0; i2 < group.length; i2++) {
                      if (inLevel[i2]) {
                        if (runStart === -1) runStart = i2;
                      } else if (runStart !== -1) {
                        runs.push([runStart, i2 - 1]);
                        runStart = -1;
                      }
                    }
                    if (runStart !== -1) runs.push([runStart, group.length - 1]);
                    runs.forEach(([si, ei]) => {
                      if (ei > si) {
                        var fnd = group[si], lnd = group[ei];
                        var fx1 = fnd.noteX + _stemXOffsetUp;
                        var fx2 = lnd.noteX + _stemXOffsetUp;
                        var fy1 = beamAt(fx1) + offset;
                        var fy2 = beamAt(fx2) + offset;
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-bg-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: "#000", strokeWidth: beamBgWidth }));
                        if (gradientStops) {
                          var gradId2 = `beam-grad-${mi}-${gi}-L${level}-${si}`;
                          beams.push(
                            /* @__PURE__ */ React.createElement("linearGradient", { key: `grad-L${level}-${gi}-${si}`, id: gradId2, gradientUnits: "userSpaceOnUse", x1: fx1, y1: fy1, x2: fx2, y2: fy2 }, gradientStops.map((s, sj) => /* @__PURE__ */ React.createElement("stop", { key: sj, offset: s.offset, stopColor: s.color })))
                          );
                          beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: `url(#${gradId2})`, strokeWidth: beamFgWidth }));
                        } else {
                          beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: beamColor, strokeWidth: beamFgWidth }));
                        }
                      } else {
                        var nd = group[si];
                        var stemX = nd.noteX + _stemXOffsetUp;
                        var dir = si === 0 ? 1 : -1;
                        var fragLen = 2 * NOTE_RX + 5;
                        var fx1 = stemX;
                        var fx2 = stemX + dir * fragLen;
                        var fy1 = beamAt(fx1) + offset;
                        var fy2 = beamAt(fx2) + offset;
                        var partColor = !colorNotes ? "#000" : NOTE_COLORS_MAP[nd.note.name] || "var(--note-color)";
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}p-bg-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: "#000", strokeWidth: beamBgWidth }));
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}p-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: partColor, strokeWidth: beamFgWidth }));
                      }
                    });
                  }
                }
                group.forEach((nd, ndi) => {
                  var stemX = nd.noteX + _stemXOffsetUp;
                  var t = x2 !== x1 ? (stemX - x1) / (x2 - x1) : 0;
                  var beamAtX = beamY1 + t * (beamY2 - beamY1);
                  var sh = (STEM_HEIGHT + extraStem(nd.note) - (nd.note.stemShorten || 0)) * graceStemMul;
                  var tipY = chordTopY(nd) - sh;
                  if (!isGraceGroup && tipY > beamAtX) {
                    beams.push(/* @__PURE__ */ React.createElement(
                      "line",
                      {
                        key: `stemext-bg-${gi}-${ndi}`,
                        x1: stemX,
                        y1: tipY,
                        x2: stemX,
                        y2: beamAtX,
                        stroke: "#000",
                        strokeWidth: stemExtBgWidth
                      }
                    ));
                    beams.push(/* @__PURE__ */ React.createElement(
                      "line",
                      {
                        key: `stemext-${gi}-${ndi}`,
                        x1: stemX,
                        y1: tipY,
                        x2: stemX,
                        y2: beamAtX,
                        stroke: !colorNotes ? "#000" : NOTE_COLORS_MAP[nd.note.name] || "var(--note-color)",
                        strokeWidth: 3
                      }
                    ));
                  }
                });
              } else {
                var beamY1, beamY2;
                var _stemXOffsetDn = isGraceGroup ? -(NOTE_RX - 2) * 0.4 : -(NOTE_RX - 2);
                var x1 = first.noteX + _stemXOffsetDn;
                var x2 = last.noteX + _stemXOffsetDn;
                var stemH = (nd) => {
                  var h = STEM_HEIGHT + extraStem(nd.note) - (nd.note.stemShorten || 0);
                  if (isGraceGroup) {
                    var _gi = group.indexOf(nd);
                    if (_gi >= 0) h += graceLeadExtras[_gi] || 0;
                  }
                  return h * graceStemMul;
                };
                if (isEvenStep && !anyChord) {
                  beamY1 = chordBotY(first) + stemH(first);
                  beamY2 = chordBotY(last) + stemH(last);
                } else {
                  var maxY = Math.max(...group.map((nd) => chordBotY(nd) + stemH(nd)));
                  beamY1 = maxY;
                  beamY2 = maxY;
                }
                beams.push(/* @__PURE__ */ React.createElement(
                  "line",
                  {
                    key: `beam-bg-${gi}`,
                    x1,
                    y1: beamY1,
                    x2,
                    y2: beamY2,
                    stroke: "#000",
                    strokeWidth: beamBgWidth
                  }
                ));
                if (gradientStops) {
                  var gradId = `beam-grad-${mi}-${gi}`;
                  beams.push(
                    /* @__PURE__ */ React.createElement("linearGradient", { key: `grad-${gi}`, id: gradId, gradientUnits: "userSpaceOnUse", x1, y1: beamY1, x2, y2: beamY2 }, gradientStops.map((s, si) => /* @__PURE__ */ React.createElement("stop", { key: si, offset: s.offset, stopColor: s.color })))
                  );
                  beams.push(/* @__PURE__ */ React.createElement(
                    "line",
                    {
                      key: `beam-${gi}`,
                      x1,
                      y1: beamY1,
                      x2,
                      y2: beamY2,
                      stroke: `url(#${gradId})`,
                      strokeWidth: beamFgWidth
                    }
                  ));
                } else {
                  beams.push(/* @__PURE__ */ React.createElement(
                    "line",
                    {
                      key: `beam-${gi}`,
                      x1,
                      y1: beamY1,
                      x2,
                      y2: beamY2,
                      stroke: beamColor,
                      strokeWidth: beamFgWidth
                    }
                  ));
                }
                {
                  var beamAt = (x) => x2 !== x1 ? beamY1 + (x - x1) / (x2 - x1) * (beamY2 - beamY1) : beamY1;
                  for (var level of [2, 3]) {
                    var offset = -(level - 1) * (isGraceGroup ? 6 : 14);
                    var inLevel = group.map((nd) => numBeamsFor(nd.note) >= level);
                    var runs = [];
                    var runStart = -1;
                    for (var i2 = 0; i2 < group.length; i2++) {
                      if (inLevel[i2]) {
                        if (runStart === -1) runStart = i2;
                      } else if (runStart !== -1) {
                        runs.push([runStart, i2 - 1]);
                        runStart = -1;
                      }
                    }
                    if (runStart !== -1) runs.push([runStart, group.length - 1]);
                    runs.forEach(([si, ei]) => {
                      if (ei > si) {
                        var fnd = group[si], lnd = group[ei];
                        var fx1 = fnd.noteX + _stemXOffsetDn;
                        var fx2 = lnd.noteX + _stemXOffsetDn;
                        var fy1 = beamAt(fx1) + offset;
                        var fy2 = beamAt(fx2) + offset;
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-bg-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: "#000", strokeWidth: beamBgWidth }));
                        if (gradientStops) {
                          var gradId2 = `beam-grad-${mi}-${gi}-L${level}-${si}`;
                          beams.push(
                            /* @__PURE__ */ React.createElement("linearGradient", { key: `grad-L${level}-${gi}-${si}`, id: gradId2, gradientUnits: "userSpaceOnUse", x1: fx1, y1: fy1, x2: fx2, y2: fy2 }, gradientStops.map((s, sj) => /* @__PURE__ */ React.createElement("stop", { key: sj, offset: s.offset, stopColor: s.color })))
                          );
                          beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: `url(#${gradId2})`, strokeWidth: beamFgWidth }));
                        } else {
                          beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: beamColor, strokeWidth: beamFgWidth }));
                        }
                      } else {
                        var nd = group[si];
                        var stemX = nd.noteX + _stemXOffsetDn;
                        var dir = si === 0 ? 1 : -1;
                        var fragLen = 2 * NOTE_RX + 5;
                        var fx1 = stemX;
                        var fx2 = stemX + dir * fragLen;
                        var fy1 = beamAt(fx1) + offset;
                        var fy2 = beamAt(fx2) + offset;
                        var partColor = !colorNotes ? "#000" : NOTE_COLORS_MAP[nd.note.name] || "var(--note-color)";
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}p-bg-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: "#000", strokeWidth: beamBgWidth }));
                        beams.push(/* @__PURE__ */ React.createElement("line", { key: `beamL${level}p-${gi}-${si}`, x1: fx1, y1: fy1, x2: fx2, y2: fy2, stroke: partColor, strokeWidth: beamFgWidth }));
                      }
                    });
                  }
                }
                group.forEach((nd, ndi) => {
                  var stemX = nd.noteX + _stemXOffsetDn;
                  var t = x2 !== x1 ? (stemX - x1) / (x2 - x1) : 0;
                  var beamAtX = beamY1 + t * (beamY2 - beamY1);
                  var sh = (STEM_HEIGHT + extraStem(nd.note) - (nd.note.stemShorten || 0)) * graceStemMul;
                  var tipY = chordBotY(nd) + sh;
                  if (!isGraceGroup && tipY < beamAtX) {
                    beams.push(/* @__PURE__ */ React.createElement(
                      "line",
                      {
                        key: `stemext-bg-${gi}-${ndi}`,
                        x1: stemX,
                        y1: tipY,
                        x2: stemX,
                        y2: beamAtX,
                        stroke: "#000",
                        strokeWidth: stemExtBgWidth
                      }
                    ));
                    beams.push(/* @__PURE__ */ React.createElement(
                      "line",
                      {
                        key: `stemext-${gi}-${ndi}`,
                        x1: stemX,
                        y1: tipY,
                        x2: stemX,
                        y2: beamAtX,
                        stroke: !colorNotes ? "#000" : NOTE_COLORS_MAP[nd.note.name] || "var(--note-color)",
                        strokeWidth: 3
                      }
                    ));
                  }
                });
              }
              return beams;
            }), (() => {
              var tripletGroups = [];
              var tGroup = [];
              noteData.forEach((nd) => {
                if (nd.note.triplet) {
                  tGroup.push(nd);
                  if (tGroup.length === 3) {
                    tripletGroups.push([...tGroup]);
                    tGroup = [];
                  }
                } else {
                  tGroup = [];
                }
              });
              return tripletGroups.map((tg, ti) => {
                var first = tg[0];
                var middle = tg[1];
                var last = tg[tg.length - 1];
                var firstStemUp = forcedStemMap[first.ni] === "up";
                var yStep = tg[1].noteY - tg[0].noteY;
                var isEven = yStep !== 0 && tg.slice(1).every((nd, i2) => nd.noteY - tg[i2].noteY === yStep);
                var stemHFor = (n) => STEM_HEIGHT + (n.duration === "sixteenth" ? 10 : 0) - (n.stemShorten || 0);
                var beamYatMid;
                if (isEven) {
                  var firstStemTip = firstStemUp ? first.noteY - stemHFor(first.note) : first.noteY + stemHFor(first.note);
                  var lastStemTip = firstStemUp ? last.noteY - stemHFor(last.note) : last.noteY + stemHFor(last.note);
                  var span = last.noteX - first.noteX;
                  var t = span !== 0 ? (middle.noteX - first.noteX) / span : 0.5;
                  beamYatMid = firstStemTip + t * (lastStemTip - firstStemTip);
                } else if (firstStemUp) {
                  beamYatMid = Math.min(...tg.map((nd) => nd.noteY - stemHFor(nd.note)));
                } else {
                  beamYatMid = Math.max(...tg.map((nd) => nd.noteY + stemHFor(nd.note)));
                }
                var bracketY = firstStemUp ? beamYatMid - 14 : beamYatMid + 38;
                return /* @__PURE__ */ React.createElement("g", { key: `triplet-${ti}` }, /* @__PURE__ */ React.createElement(
                  "text",
                  {
                    x: middle.noteX,
                    y: bracketY,
                    textAnchor: "middle",
                    fontSize: 32,
                    fill: "#555",
                    fontStyle: "italic",
                    fontWeight: "700",
                    fontFamily: "'Noto Music', 'DM Sans', serif"
                  },
                  "3"
                ));
              });
            })());
          })(), window.__RPM_READONLY__ === false && (() => {
            var cx = mx + mWidth / 2;
            var cy = STAFF_TOP - 85;
            return /* @__PURE__ */ React.createElement(
              "g",
              {
                style: { cursor: "pointer" },
                onClick: (e) => {
                  e.stopPropagation();
                  insertMeasureAt(mi);
                }
              },
              /* @__PURE__ */ React.createElement("title", null, "Insert measure before ", mi + 1),
              /* @__PURE__ */ React.createElement("circle", { cx, cy, r: 12, fill: "#fff", stroke: "#2a7", strokeWidth: 2 }),
              /* @__PURE__ */ React.createElement("line", { x1: cx - 5, y1: cy, x2: cx + 5, y2: cy, stroke: "#2a7", strokeWidth: 2.5, strokeLinecap: "round" }),
              /* @__PURE__ */ React.createElement("line", { x1: cx, y1: cy - 5, x2: cx, y2: cy + 5, stroke: "#2a7", strokeWidth: 2.5, strokeLinecap: "round" })
            );
          })(), window.__RPM_READONLY__ === false && measures.length > 1 && (() => {
            var cx = mx + mWidth / 2;
            var cy = barBottom + 36;
            return /* @__PURE__ */ React.createElement(
              "g",
              {
                style: { cursor: "pointer" },
                onClick: (e) => {
                  e.stopPropagation();
                  removeMeasureAt(mi);
                }
              },
              /* @__PURE__ */ React.createElement("title", null, "Delete measure ", mi + 1),
              /* @__PURE__ */ React.createElement("circle", { cx, cy, r: 14, fill: "#fff", stroke: "#c33", strokeWidth: 2 }),
              /* @__PURE__ */ React.createElement("line", { x1: cx - 6, y1: cy - 6, x2: cx + 6, y2: cy + 6, stroke: "#c33", strokeWidth: 2.5, strokeLinecap: "round" }),
              /* @__PURE__ */ React.createElement("line", { x1: cx + 6, y1: cy - 6, x2: cx - 6, y2: cy + 6, stroke: "#c33", strokeWidth: 2.5, strokeLinecap: "round" })
            );
          })());
        }), (() => {
          var scrollX = isWidescreen ? childLock ? Math.min(tabletViewX, maxViewX) : tabletViewX : mobileScrollX;
          var normalRightLocal = STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH;
          var lastMeasureStartSvg = contentStart + (measures.length - 1) * measureWidth;
          var maskRightLocal = Math.max(STAFF_LEFT, Math.min(normalRightLocal, lastMeasureStartSvg - scrollX));
          var maskWidth = Math.max(0, maskRightLocal + 1e4);
          var _scrolledMi = measureIdxAtRelX(scrollX - contentStart);
          var _refMi = playingIdx.measure >= 0 ? playingIdx.measure : (playMode === "learn" || playMode === "practice") && practicePos ? practicePos.measure : lastPlayedMeasureRef.current >= 0 ? lastPlayedMeasureRef.current : _scrolledMi;
          var pinnedKey = _refMi >= 0 ? effectiveKeySig(measures, _refMi, keySig) : keySig;
          var _clefRefMi = Math.max(0, measureIdxAtRelX(scrollX + 98));
          var pinnedBottomClef = effectiveBottomClefByMi[_clefRefMi] || (isMultiStaff(clef) ? "bass" : null);
          var pinnedTopClef = effectiveTopClefByMi[_clefRefMi] || (clef === "grandBass" || clef === "bass" ? "bass" : clef === "alto" ? "alto" : "treble");
          return /* @__PURE__ */ React.createElement("g", { transform: `translate(${scrollX}, 0)` }, /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: -1e4,
              y: -1e4,
              width: maskWidth,
              height: 2e4,
              fill: "var(--bg)"
            }
          ), /* @__PURE__ */ React.createElement(StaffLines, { x: STAFF_LEFT, width: CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH }), isMultiStaff(clef) && /* @__PURE__ */ React.createElement(StaffLines, { x: STAFF_LEFT, width: CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH, top: BASS_STAFF_TOP }), pinnedTopClef === "bass" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: STAFF_LEFT,
              y1: STAFF_TOP,
              x2: STAFF_LEFT,
              y2: STAFF_TOP + 4 * LINE_SPACING,
              stroke: "var(--line-color)",
              strokeWidth: 2
            }
          ), /* @__PURE__ */ React.createElement(
            "text",
            {
              x: STAFF_LEFT + 6,
              y: STAFF_TOP + 3.5 * LINE_SPACING - 5,
              fontSize: 120,
              fill: "var(--clef-color)",
              fontFamily: "'Noto Music', 'Noto Serif', serif"
            },
            "\u{1D122}"
          )) : pinnedTopClef === "alto" ? /* @__PURE__ */ React.createElement(AltoClef, { x: STAFF_LEFT }) : isDrumsMode ? /* @__PURE__ */ React.createElement(PercussionClef, { x: STAFF_LEFT }) : /* @__PURE__ */ React.createElement(TrebleClef, { x: STAFF_LEFT }), isMultiStaff(clef) && /* @__PURE__ */ React.createElement(React.Fragment, null, pinnedBottomClef === "bass" ? /* @__PURE__ */ React.createElement(
            "text",
            {
              x: STAFF_LEFT + 6,
              y: BASS_STAFF_TOP + 3.5 * LINE_SPACING - 5,
              fontSize: 120,
              fill: "var(--clef-color)",
              fontFamily: "'Noto Music', 'Noto Serif', serif"
            },
            "\u{1D122}"
          ) : /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: STAFF_LEFT,
              y1: BASS_STAFF_TOP,
              x2: STAFF_LEFT,
              y2: BASS_STAFF_TOP + 4 * LINE_SPACING,
              stroke: "var(--line-color)",
              strokeWidth: 2
            }
          ), /* @__PURE__ */ React.createElement(
            "text",
            {
              x: STAFF_LEFT + 6,
              y: BASS_STAFF_TOP + 4 * LINE_SPACING + 2,
              fontSize: 115,
              fill: "var(--clef-color)",
              fontFamily: "'Noto Music', 'Noto Serif', serif"
            },
            "\u{1D11E}"
          )), /* @__PURE__ */ React.createElement("g", { key: "bassks-" + pinnedKey + "-" + pinnedBottomClef, className: "key-change-anim" }, /* @__PURE__ */ React.createElement(
            KeySignatureDisplay,
            {
              x: STAFF_LEFT + CLEF_WIDTH + 8,
              keySigId: pinnedKey,
              bassClef: pinnedBottomClef === "bass",
              staffTop: BASS_STAFF_TOP,
              activeNoteIds: activeKeySigNoteIds
            }
          )), row === 0 && /* @__PURE__ */ React.createElement(
            TimeSignature,
            {
              x: STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH / 3,
              top: timeSig.top,
              bottom: timeSig.bottom,
              bassClef: pinnedBottomClef === "bass",
              staffTop: BASS_STAFF_TOP
            }
          ), /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: STAFF_LEFT,
              y1: STAFF_TOP,
              x2: STAFF_LEFT,
              y2: BASS_STAFF_TOP + 4 * LINE_SPACING,
              stroke: "var(--line-color)",
              strokeWidth: 2
            }
          ), /* @__PURE__ */ React.createElement(GrandStaffBrace, { x: STAFF_LEFT - 22, y1: STAFF_TOP, y2: BASS_STAFF_TOP + 4 * LINE_SPACING })), /* @__PURE__ */ React.createElement("g", { key: "trebleks-" + pinnedKey + "-" + pinnedTopClef, className: "key-change-anim" }, /* @__PURE__ */ React.createElement(
            KeySignatureDisplay,
            {
              x: STAFF_LEFT + CLEF_WIDTH + 8,
              keySigId: pinnedKey,
              bassClef: pinnedTopClef === "bass",
              staffTop: STAFF_TOP,
              activeNoteIds: activeKeySigNoteIds
            }
          )), row === 0 && /* @__PURE__ */ React.createElement(
            TimeSignature,
            {
              x: STAFF_LEFT + CLEF_WIDTH + keySigWidth + TIME_SIG_WIDTH / 3,
              top: timeSig.top,
              bottom: timeSig.bottom,
              bassClef: pinnedTopClef === "bass",
              staffTop: STAFF_TOP
            }
          ), row === 0 && _tempoText && !isMobile && /* @__PURE__ */ React.createElement(
            "text",
            {
              x: _tempoWordX,
              y: _tempoY,
              textAnchor: "start",
              fontSize: _tempoFontSize,
              fontWeight: 400,
              fontFamily: "'Libre Baskerville', serif",
              fill: "#1a1a1a",
              style: { userSelect: "none" }
            },
            _tempoDisplay
          ));
        })());
      }),
      hoverNote && /* @__PURE__ */ React.createElement("g", { style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(LedgerLines, { x: hoverNote.x, y: hoverNote.y, noteRx: NOTE_RX, staffTop: isMultiStaff(clef) && hoverNote.staff === "bass" ? BASS_STAFF_TOP : STAFF_TOP }), /* @__PURE__ */ React.createElement(
        "ellipse",
        {
          cx: hoverNote.x,
          cy: hoverNote.y,
          rx: NOTE_RX,
          ry: NOTE_RY,
          fill: "var(--accent)",
          opacity: 0.35,
          transform: `rotate(-12, ${hoverNote.x}, ${hoverNote.y})`
        }
      ), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: hoverNote.x,
          y: hoverNote.y + 5,
          textAnchor: "middle",
          fontSize: 13,
          fontWeight: "700",
          fill: "var(--accent)",
          opacity: 0.8,
          fontFamily: "'DM Sans', sans-serif"
        },
        hoverNote.name
      ), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: hoverNote.x,
          y: hoverNote.y - NOTE_RY - 10,
          textAnchor: "middle",
          fontSize: 16,
          fontWeight: "700",
          fill: "var(--accent)",
          opacity: 0.9,
          fontFamily: "'DM Sans', sans-serif"
        },
        hoverNote.name,
        displayOctave(hoverNote.name, hoverNote.octave)
      ))
    ),
    !childLock && selectedNote && ((_b = measures[selectedNote.measure]) == null ? void 0 : _b.notes[selectedNote.note]) && /* @__PURE__ */ React.createElement("div", { style: {
      position: "fixed",
      // Pin to the LEFT edge (not bottom-center) so the panel — including
      // the lyric inputs — never covers the staff/notes the user is editing.
      // Owner request: keep it out of the middle. Drum songs already used
      // this left position to clear the kit drawing; now all clefs match.
      // Phone keeps the bottom-center placement (frozen mobile look).
      ...isMobile ? { bottom: 140, left: "50%", transform: "translateX(-50%)", maxWidth: 500 } : { top: 90, left: 12, transform: "none", maxWidth: 240 },
      zIndex: 500,
      padding: isMobile ? "10px 14px" : "12px 20px",
      background: "var(--bg2)",
      border: "1px solid var(--select)",
      borderRadius: 10,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? 10 : 16,
      fontSize: 13,
      flexWrap: "wrap"
    } }, (() => {
      var _a2;
      var n = measures[selectedNote.measure].notes[selectedNote.note];
      if (n.isRest) return /* @__PURE__ */ React.createElement("span", null, "Rest \xB7 ", n.duration);
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, fontSize: 16 } }, n.name, displayOctave(n.name, n.octave)), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text2)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, (_a2 = NOTE_DURATIONS.find((d) => d.id === n.duration)) == null ? void 0 : _a2.name, n.dotted ? " \u25CF" : ""), n.accidental !== "none" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text2)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, n.accidental === "sharp" ? "\u266F Sharp" : n.accidental === "flat" ? "\u266D Flat" : "\u266E Natural")), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: isMobile ? "m-btn" : "toolbar-btn",
          onClick: deleteSelected,
          style: { color: "var(--danger)", padding: isMobile ? "8px 12px" : "4px 10px", fontSize: 12 }
        },
        "Delete"
      ), !showFingering && !(clef === "drum" || clef === "percussion") && /* @__PURE__ */ React.createElement("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 3, marginTop: 4 } }, Array.from({ length: 12 }, (_, vi) => {
        var verses = n.verses || [n.lyric || ""];
        return /* @__PURE__ */ React.createElement("div", { key: vi, style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--text2)", minWidth: 14 } }, vi + 1, "."), /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "text",
            placeholder: vi === 0 ? "lyric..." : "verse " + (vi + 1),
            value: verses[vi] || "",
            onChange: (e) => updateLyric(selectedNote.measure, selectedNote.note, e.target.value, vi),
            onKeyDown: (e) => {
              if (e.key === " " || e.key === "Tab") {
                e.preventDefault();
                advanceToNextNote();
              }
            },
            style: {
              flex: 1,
              padding: "2px 6px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              color: "var(--text)",
              fontSize: 11,
              fontFamily: "inherit"
            }
          }
        ));
      })));
    })()),
    !isMobile && !childLock && /* @__PURE__ */ React.createElement("div", { style: {
      position: "fixed",
      bottom: 70,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 500,
      textAlign: "center",
      color: "var(--text2)",
      fontSize: 12,
      display: "flex",
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap"
    } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("kbd", { style: {
      background: "var(--bg3)",
      padding: "2px 6px",
      borderRadius: 3,
      border: "1px solid var(--border)",
      fontSize: 11
    } }, "Click"), " on staff to place note"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("kbd", { style: {
      background: "var(--bg3)",
      padding: "2px 6px",
      borderRadius: 3,
      border: "1px solid var(--border)",
      fontSize: 11
    } }, "Del"), " to delete selected note"))
  )), false, (() => {
    var _dropBarToBlackKeys = !isMobile && !isTablet;
    var _barH = isMobile ? 24 : isCompact ? 28 : 32;
    var _barFs = isMobile ? 13 : isCompact ? 15 : 16;
    var _handleW = isMobile ? 28 : isCompact ? 32 : 36;
    var _handleH = isMobile ? 3 : 4;
    var _ukVisH = isMobile ? 100 : tabletPianoH;
    var _barLift = 1;
    var _pianoVisH = isDrumsMode ? isMobile ? 100 : tabletPianoH : isFretboardMode || isTrumpetMode || isEuphoniumMode || isTubaMode || isSaxophoneMode || isRecorderMode || isFluteMode ? _ukVisH : _dropBarToBlackKeys ? Math.floor(tabletPianoH * 0.6835 * _barLift) : Math.floor((isMobile ? 90 + 6 + 5 : tabletPianoH) * _barLift);
    var _instrumentLabel = isUkuleleMode ? "ukulele" : isGuitarMode ? "guitar" : isBassGuitarMode ? "bass guitar" : isViolinMode ? "violin" : isCelloMode ? "cello" : isTrumpetMode ? "trumpet" : isEuphoniumMode ? "euphonium" : isSaxophoneMode ? "saxophone" : "piano";
    return null;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: () => setPianoHidden((h) => !h),
        style: {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: pianoHidden ? 0 : 290,
          height: _barH,
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          cursor: "pointer",
          zIndex: 600
        },
        "aria-label": pianoHidden ? `Show ${_instrumentLabel}` : `Hide ${_instrumentLabel}`
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: _barFs, fontWeight: 600, color: "var(--text2)", letterSpacing: 0.3 } }, pianoHidden ? `tap to open ${_instrumentLabel}` : `tap to close ${_instrumentLabel}`)
    );
  })(), !pianoHidden && isFretboardMode && activeFretboard && isGuitarMode && (() => {
    var _a2, _b2;
    var openStrings = activeFretboard.strings.map(([note, octave]) => ({
      string: note,
      octave,
      display: note
    }));
    var noteColors = {
      C: "var(--c-color)",
      D: "var(--d-color)",
      E: "var(--e-color)",
      F: "var(--f-color)",
      G: "var(--g-color)",
      A: "var(--a-color)",
      B: "var(--b-color)"
    };
    var _CHROMATIC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var _GRADIENT_FOR_SHARP = { "C#": "cd", "D#": "de", "F#": "fg", "G#": "ga", "A#": "ab" };
    var _UPPER_NATURAL = { "C#": "D", "D#": "E", "F#": "G", "G#": "A", "A#": "B" };
    var _buildFretLabels = (openNote, openOctave, numFrets) => {
      var out = [];
      var startIdx = _CHROMATIC.indexOf(openNote);
      var startAbs = openOctave * 12 + startIdx;
      for (var fret = 1; fret <= numFrets; fret++) {
        var targetAbs = startAbs + fret;
        var idx = targetAbs % 12;
        var octave = Math.floor(targetAbs / 12);
        var nm = _CHROMATIC[idx];
        var isSharp = nm.includes("#");
        var naturalLetter = nm[0];
        var entry = { fret, note: naturalLetter, octave, display: isSharp ? `${nm}/${_UPPER_NATURAL[nm]}b` : nm };
        if (isSharp) entry.gradient = _GRADIENT_FOR_SHARP[nm];
        out.push(entry);
      }
      return out;
    };
    var fretLabelsByIndex = openStrings.map(({ string, octave }) => _buildFretLabels(string, octave, activeFretboard.numFrets));
    var litFlashColor = (n2) => n2 === "A" ? "#581c87" : noteColors[n2];
    var playingPitches = /* @__PURE__ */ new Set();
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) playingPitches.add(`${n.name}${n.octave}`);
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) playingPitches.add(`${n.name}${n.octave}`);
    }
    var ukH = isMobile ? 100 : tabletPianoH;
    var TOP_PAD = isMobile ? 26 : Math.max(48, Math.round(ukH * 0.24));
    var BOT_PAD = isMobile ? 22 : 30;
    var stringGap = (ukH - TOP_PAD - BOT_PAD) / 3;
    var svgH = Math.round(TOP_PAD + (openStrings.length - 1) * stringGap + BOT_PAD);
    var extraAbove = svgH - ukH;
    var stringY = (i) => TOP_PAD + i * stringGap;
    var NUT_X = 76;
    var END_X = 960;
    var NUM_FRETS = activeFretboard.numFrets;
    var fretX = (n2) => NUT_X + (END_X - NUT_X) / NUM_FRETS * n2;
    var fretMidX = (n2) => (fretX(n2 - 1) + fretX(n2)) / 2;
    var stringsTop = Math.max(0, stringY(0) - stringGap * 0.4);
    var stringsBot = Math.min(svgH, stringY(openStrings.length - 1) + stringGap * 0.4);
    var badgeOuter = isMobile ? 36 : 52;
    var badgeInner = Math.round(badgeOuter * 0.6);
    var badgeFontSize = Math.max(10, Math.round(badgeInner * 0.6));
    var fretBadgeOuter = badgeOuter;
    var fretBadgeInner = badgeInner;
    var fretBadgeFontSize = badgeFontSize;
    var _primaryPosByPitch = (() => {
      var map = /* @__PURE__ */ new Map();
      var _consider = (sIdx, fret, note, octave) => {
        var key = `${note}${octave}`;
        var existing = map.get(key);
        if (!existing || fret < existing.fret) map.set(key, { sIdx, fret });
      };
      openStrings.forEach((s, sIdx) => _consider(sIdx, 0, s.string, s.octave));
      fretLabelsByIndex.forEach((labels, sIdx) => {
        labels.forEach(({ fret, note, octave, gradient }) => {
          if (!gradient) _consider(sIdx, fret, note, octave);
        });
      });
      return map;
    })();
    var renderBadge = (cx, cy, note, octave, outerR, innerR, fontSize, display, gradient, fret, stringIdx) => {
      var _key = `${note}${octave}`;
      var _primary = _primaryPosByPitch.get(_key);
      var _isPrimary = _primary && _primary.sIdx === stringIdx && _primary.fret === (fret != null ? fret : 0);
      var lit = _isPrimary && (playingPitches.has(_key) || !!pressedPianoKeys[_key]);
      var _MONO_RING = "#9ca3af";
      var _MONO_LIT = "#4b5563";
      var isNoteOnlyVibe = !colorNotes && !showLetters;
      var ringColor = colorNotes ? lit ? litFlashColor(note) : noteColors[note] : isNoteOnlyVibe ? _MONO_RING : lit ? _MONO_LIT : _MONO_RING;
      var innerCircleColor = isNoteOnlyVibe && lit ? "#d1d5db" : "#ffffff";
      var label = display != null ? display : note;
      var isSplit = label.includes("/");
      var upper = isSplit ? label.split("/")[0] : label;
      var lower = isSplit ? label.split("/")[1] : null;
      var fs = isSplit ? Math.round(fontSize * 0.6) : label.length > 1 ? Math.round(fontSize * 0.85) : fontSize;
      var fillRef = gradient && colorNotes ? `url(#uk-grad-${gradient})` : ringColor;
      var pitchName = gradient ? `${note}#${octave}` : `${note}${octave}`;
      var onTap = () => handlePianoKeyClick(pitchName);
      return /* @__PURE__ */ React.createElement("g", { onClick: onTap, style: { cursor: "pointer", filter: lit && !isNoteOnlyVibe ? "brightness(1.8) saturate(1.5)" : "none", transition: "filter 0.1s" } }, lit && !gradient && !isNoteOnlyVibe && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx, cy, r: outerR * 2.6, fill: ringColor, opacity: 0.25, style: { filter: "blur(6px)" } }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: outerR * 1.8, fill: ringColor, opacity: 0.45, style: { filter: "blur(3px)" } })), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: outerR, fill: fillRef }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: innerR, fill: innerCircleColor }), isNoteOnlyVibe ? /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + fontSize * 0.35,
          fontSize,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        String(fret != null ? fret : 0)
      ) : showLetters && (isSplit ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy - fs * 0.05,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        upper
      ), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + fs * 0.95,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        lower
      )) : /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + fs * 0.35,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        label
      )));
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "100%",
        height: svgH,
        viewBox: `0 0 1000 ${svgH}`,
        preserveAspectRatio: "none",
        style: { display: "block", maxWidth: 900, marginTop: -extraAbove, overflow: "visible" }
      },
      /* @__PURE__ */ React.createElement("defs", null, [
        ["cd", "--c-color", "--d-color"],
        ["de", "--d-color", "--e-color"],
        ["fg", "--f-color", "--g-color"],
        ["ga", "--g-color", "--a-color"],
        ["ab", "--a-color", "--b-color"]
      ].map(([id, c1, c2]) => /* @__PURE__ */ React.createElement("linearGradient", { key: id, id: `uk-grad-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: `var(${c1})` }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: `var(${c2})` })))),
      Array.from({ length: NUM_FRETS }, (_, i) => i + 1).map((n2) => /* @__PURE__ */ React.createElement(
        "line",
        {
          key: `fret-${n2}`,
          x1: fretX(n2),
          y1: stringsTop,
          x2: fretX(n2),
          y2: stringsBot,
          stroke: "var(--text2)",
          strokeWidth: 1,
          opacity: 0.5
        }
      )),
      openStrings.map((_, i) => {
        var y = stringY(i);
        var sw = 1.5 + i * (1.5 / Math.max(1, openStrings.length - 1));
        return /* @__PURE__ */ React.createElement(
          "line",
          {
            key: `str-${i}`,
            x1: NUT_X,
            y1: y,
            x2: END_X,
            y2: y,
            stroke: "var(--text)",
            strokeWidth: sw
          }
        );
      }),
      /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: NUT_X,
          y1: stringsTop,
          x2: NUT_X,
          y2: stringsBot,
          stroke: "var(--text)",
          strokeWidth: 4
        }
      ),
      openStrings.map(({ string, octave, display }, i) => /* @__PURE__ */ React.createElement("g", { key: `lbl-${i}` }, renderBadge(NUT_X / 2, stringY(i), string, octave, badgeOuter / 2, badgeInner / 2, badgeFontSize, display, void 0, 0, i))),
      openStrings.map((_, i) => {
        var y = stringY(i);
        return (fretLabelsByIndex[i] || []).map(({ fret, note, octave, display, gradient }) => /* @__PURE__ */ React.createElement("g", { key: `fret-note-${i}-${fret}` }, renderBadge(fretMidX(fret), y, note, octave, fretBadgeOuter / 2, fretBadgeInner / 2, fretBadgeFontSize, display, gradient, fret, i)));
      })
    ));
  })(), !pianoHidden && isFretboardMode && activeFretboard && !isGuitarMode && (() => {
    var _a2, _b2;
    var openStrings = activeFretboard.strings.map(([note, octave]) => ({
      string: note,
      octave,
      display: isGuitarMode ? note : `${note}${octave}`
    }));
    var noteColors = {
      C: "var(--c-color)",
      D: "var(--d-color)",
      E: "var(--e-color)",
      F: "var(--f-color)",
      G: "var(--g-color)",
      A: "var(--a-color)",
      B: "var(--b-color)"
    };
    var _CHROMATIC = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var _GRADIENT_FOR_SHARP = { "C#": "cd", "D#": "de", "F#": "fg", "G#": "ga", "A#": "ab" };
    var _UPPER_NATURAL = { "C#": "D", "D#": "E", "F#": "G", "G#": "A", "A#": "B" };
    var _buildFretLabels = (openNote, openOctave, numFrets) => {
      var out = [];
      var startIdx = _CHROMATIC.indexOf(openNote);
      var startAbs = openOctave * 12 + startIdx;
      for (var fret = 1; fret <= numFrets; fret++) {
        var targetAbs = startAbs + fret;
        var idx = targetAbs % 12;
        var octave = Math.floor(targetAbs / 12);
        var nm = _CHROMATIC[idx];
        var isSharp = nm.includes("#");
        var naturalLetter = nm[0];
        var display;
        if (isSharp) display = `${nm}/${_UPPER_NATURAL[nm]}b`;
        else if (nm === "C") display = `C${octave}`;
        else display = nm;
        var entry = { fret, note: naturalLetter, octave, display };
        if (isSharp) entry.gradient = _GRADIENT_FOR_SHARP[nm];
        out.push(entry);
      }
      return out;
    };
    var fretLabelsByIndex = openStrings.map(({ string, octave }) => _buildFretLabels(string, octave, activeFretboard.numFrets));
    var litFlashColor = (n2) => n2 === "A" ? "#581c87" : noteColors[n2];
    var playingPitches = /* @__PURE__ */ new Set();
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) playingPitches.add(`${n.name}${n.octave}`);
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) playingPitches.add(`${n.name}${n.octave}`);
    }
    var ukH = isMobile ? 100 : tabletPianoH;
    var TOP_PAD = isMobile ? 26 : Math.max(48, Math.round(ukH * 0.24));
    var BOT_PAD = isMobile ? 22 : 30;
    var stringGap = (ukH - TOP_PAD - BOT_PAD) / (openStrings.length - 1);
    var stringY = (i) => TOP_PAD + i * stringGap;
    var NUT_X = 76;
    var END_X = 960;
    var NUM_FRETS = activeFretboard.numFrets;
    var fretX = (n2) => NUT_X + (END_X - NUT_X) / NUM_FRETS * n2;
    var fretMidX = (n2) => (fretX(n2 - 1) + fretX(n2)) / 2;
    var fretWidth = (END_X - NUT_X) / NUM_FRETS;
    var stringsTop = Math.max(0, stringY(0) - stringGap * 0.4);
    var stringsBot = Math.min(ukH, stringY(openStrings.length - 1) + stringGap * 0.4);
    var badgeOuter = isMobile ? 36 : 52;
    var badgeInner = Math.round(badgeOuter * 0.6);
    var badgeFontSize = Math.max(10, Math.round(badgeInner * 0.6));
    var fretBadgeOuter = badgeOuter;
    var fretBadgeInner = badgeInner;
    var fretBadgeFontSize = badgeFontSize;
    var _primaryPosByPitch = (() => {
      var map = /* @__PURE__ */ new Map();
      var _consider = (sIdx, fret, note, octave) => {
        var key = `${note}${octave}`;
        var existing = map.get(key);
        if (!existing || fret < existing.fret) map.set(key, { sIdx, fret });
      };
      openStrings.forEach((s, sIdx) => _consider(sIdx, 0, s.string, s.octave));
      fretLabelsByIndex.forEach((labels, sIdx) => {
        labels.forEach(({ fret, note, octave, gradient }) => {
          if (!gradient) _consider(sIdx, fret, note, octave);
        });
      });
      return map;
    })();
    var renderBadge = (cx, cy, note, octave, outerR, innerR, fontSize, display, gradient, fret, stringIdx) => {
      var _key = `${note}${octave}`;
      var _primary = _primaryPosByPitch.get(_key);
      var _isPrimary = _primary && _primary.sIdx === stringIdx && _primary.fret === (fret != null ? fret : 0);
      var lit = _isPrimary && (playingPitches.has(_key) || !!pressedPianoKeys[_key]);
      var _MONO_RING = "#9ca3af";
      var _MONO_LIT = "#4b5563";
      var isNoteOnlyVibe = !colorNotes && !showLetters;
      var ringColor = colorNotes ? lit ? litFlashColor(note) : noteColors[note] : isNoteOnlyVibe ? _MONO_RING : lit ? _MONO_LIT : _MONO_RING;
      var innerCircleColor = isNoteOnlyVibe && lit ? "#d1d5db" : "#ffffff";
      var label = display != null ? display : note;
      var isSplit = label.includes("/");
      var upper = isSplit ? label.split("/")[0] : label;
      var lower = isSplit ? label.split("/")[1] : null;
      var fs = isSplit ? Math.round(fontSize * 0.6) : label.length > 1 ? Math.round(fontSize * 0.85) : fontSize;
      var fillRef = gradient && colorNotes ? `url(#uk-grad-${gradient})` : ringColor;
      var pitchName = gradient ? `${note}#${octave}` : `${note}${octave}`;
      var onTap = () => handlePianoKeyClick(pitchName);
      return /* @__PURE__ */ React.createElement("g", { onClick: onTap, style: { cursor: "pointer", filter: lit && !isNoteOnlyVibe ? "brightness(1.8) saturate(1.5)" : "none", transition: "filter 0.1s" } }, lit && !gradient && !isNoteOnlyVibe && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx,
          cy,
          r: outerR * 2.6,
          fill: ringColor,
          opacity: 0.25,
          style: { filter: "blur(6px)" }
        }
      ), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx,
          cy,
          r: outerR * 1.8,
          fill: ringColor,
          opacity: 0.45,
          style: { filter: "blur(3px)" }
        }
      )), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: outerR, fill: fillRef }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: innerR, fill: innerCircleColor }), isNoteOnlyVibe ? (
        // Note-only vibe: replace letter with the fret number
        // (0 for open strings, 1..N for fretted positions).
        /* @__PURE__ */ React.createElement(
          "text",
          {
            x: cx,
            y: cy + fontSize * 0.35,
            fontSize,
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif",
            fill: "#000",
            textAnchor: "middle",
            style: { letterSpacing: "-0.3px" }
          },
          String(fret != null ? fret : 0)
        )
      ) : showLetters && (isSplit ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy - fs * 0.05,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        upper
      ), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + fs * 0.95,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        lower
      )) : /* @__PURE__ */ React.createElement(
        "text",
        {
          x: cx,
          y: cy + fs * 0.35,
          fontSize: fs,
          fontWeight: "700",
          fontFamily: "'DM Sans', sans-serif",
          fill: "#000",
          textAnchor: "middle",
          style: { letterSpacing: "-0.3px" }
        },
        label
      )));
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "100%",
        height: ukH,
        viewBox: `0 0 1000 ${ukH}`,
        preserveAspectRatio: "none",
        style: { display: "block", maxWidth: 900 }
      },
      /* @__PURE__ */ React.createElement("defs", null, [
        ["cd", "--c-color", "--d-color"],
        ["de", "--d-color", "--e-color"],
        ["fg", "--f-color", "--g-color"],
        ["ga", "--g-color", "--a-color"],
        ["ab", "--a-color", "--b-color"]
      ].map(([id, c1, c2]) => /* @__PURE__ */ React.createElement("linearGradient", { key: id, id: `uk-grad-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: `var(${c1})` }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: `var(${c2})` })))),
      Array.from({ length: NUM_FRETS }, (_, i) => i + 1).map((n2) => /* @__PURE__ */ React.createElement(
        "line",
        {
          key: `fret-${n2}`,
          x1: fretX(n2),
          y1: stringsTop,
          x2: fretX(n2),
          y2: stringsBot,
          stroke: "var(--text2)",
          strokeWidth: 1,
          opacity: 0.5
        }
      )),
      openStrings.map((_, i) => {
        var y = stringY(i);
        var sw = 1.5 + i * (1.5 / Math.max(1, openStrings.length - 1));
        return /* @__PURE__ */ React.createElement(
          "line",
          {
            key: `str-${i}`,
            x1: NUT_X,
            y1: y,
            x2: END_X,
            y2: y,
            stroke: "var(--text)",
            strokeWidth: sw
          }
        );
      }),
      /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: NUT_X,
          y1: stringsTop,
          x2: NUT_X,
          y2: stringsBot,
          stroke: "var(--text)",
          strokeWidth: 4
        }
      ),
      openStrings.map(({ string, octave, display }, i) => /* @__PURE__ */ React.createElement("g", { key: `lbl-${i}` }, renderBadge(NUT_X / 2, stringY(i), string, octave, badgeOuter / 2, badgeInner / 2, badgeFontSize, display, void 0, 0, i))),
      openStrings.map((_, i) => {
        var y = stringY(i);
        return (fretLabelsByIndex[i] || []).map(({ fret, note, octave, display, gradient }) => /* @__PURE__ */ React.createElement("g", { key: `fret-note-${i}-${fret}` }, renderBadge(fretMidX(fret), y, note, octave, fretBadgeOuter / 2, fretBadgeInner / 2, fretBadgeFontSize, display, gradient, fret, i)));
      })
    ));
  })(), (isTrumpetMode || isEuphoniumMode) && !pianoHidden && (() => {
    var _a2, _b2;
    var FINGERING = isEuphoniumMode ? EUPHONIUM_FINGERING : TRUMPET_FINGERING;
    var _playing = [];
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    var _activePitch = _playing[0];
    var _activeFingering = _activePitch && FINGERING[_activePitch];
    var _activeSet = new Set(_activeFingering || []);
    var ukH = isMobile ? 100 : tabletPianoH;
    var HOLE_D = isMobile ? 28 : 44;
    var HOLE_GAP = isMobile ? 10 : 18;
    var LEGEND_FS = isMobile ? 11 : 14;
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: isMobile ? 14 : 28,
      padding: isMobile ? "0 12px" : "0 24px",
      position: "relative"
    } }, (() => {
      var BRASS = isEuphoniumMode ? EUPHONIUM_IMAGE_CONFIG : TRUMPET_IMAGE_CONFIG;
      var _imgH = isMobile ? Math.min(ukH * 0.95, 120) : isEuphoniumMode ? Math.min(ukH * 1.75, 500) : Math.min(ukH * 1.1, 320);
      var _imgW = _imgH * BRASS.aspectRatio;
      return /* @__PURE__ */ React.createElement("div", { style: {
        flexShrink: 0,
        ...isEuphoniumMode && !isMobile ? { alignSelf: "flex-end", marginBottom: 16 } : { marginTop: isMobile ? 30 : 60 },
        position: "relative",
        width: _imgW,
        height: _imgH
      } }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: BRASS.imageSrc,
          alt: BRASS.alt,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }
        }
      ), (() => {
        var PISTON_X = BRASS.pistonX;
        var SHAFT_W = BRASS.shaftW;
        var SHAFT_TOP = BRASS.shaftTop;
        var SHAFT_H = BRASS.shaftH;
        var HOLE_W = BRASS.holeW;
        var HOLE_H = BRASS.holeH;
        var HOLE_TOP = BRASS.holeTop;
        var PEARL_W = BRASS.pearlW;
        var PEARL_H = BRASS.pearlH;
        var PEARL_TOP_PRESSED = BRASS.pearlTopPressed;
        return [1, 2, 3].map((n2, i) => {
          if (!_activeSet.has(n2)) return null;
          return /* @__PURE__ */ React.createElement(React.Fragment, { key: n2 }, /* @__PURE__ */ React.createElement("div", { style: {
            position: "absolute",
            left: `${PISTON_X[i] - SHAFT_W / 2}%`,
            top: `${SHAFT_TOP}%`,
            width: `${SHAFT_W}%`,
            height: `${SHAFT_H}%`,
            background: BRASS.shaftCutColor,
            // Rounded shape — piston shafts are cylindrical
            // so an ellipse blends better with the bell behind
            // and avoids sharp rectangular corners that exceed
            // the bell's curved outline.
            borderRadius: BRASS.shaftCutRadius || "0",
            pointerEvents: "none",
            zIndex: 5
          } }), /* @__PURE__ */ React.createElement("div", { style: {
            position: "absolute",
            left: `${PISTON_X[i] - HOLE_W / 2}%`,
            top: `${HOLE_TOP}%`,
            width: `${HOLE_W}%`,
            height: `${HOLE_H}%`,
            borderRadius: "50%",
            background: "radial-gradient(ellipse at 50% 35%, #000 40%, #1a1a1a 100%)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9)",
            pointerEvents: "none",
            zIndex: 5
          } }), /* @__PURE__ */ React.createElement("div", { style: {
            position: "absolute",
            left: `${PISTON_X[i] - PEARL_W / 2}%`,
            top: `${PEARL_TOP_PRESSED}%`,
            width: `${PEARL_W}%`,
            height: `${PEARL_H}%`,
            borderRadius: "50% 50% 40% 40% / 65% 65% 35% 35%",
            background: "linear-gradient(180deg, #f8f8fb 0%, #d8d8e0 55%, #b8b8c2 100%)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6), 0 2px 3px rgba(0,0,0,0.5)",
            border: "1px solid #8a8a92",
            pointerEvents: "none",
            zIndex: 6
          } }));
        });
      })(), (() => {
        var _labelFs = isMobile ? 20 : 30;
        var _badgeD = isMobile ? 36 : 56;
        var _gap = isMobile ? 16 : 28;
        var _TRUMPET_NOTE_COLORS = {
          C: "#dc2626",
          D: "#f97316",
          E: "#facc15",
          F: "#22c55e",
          G: "#3b82f6",
          A: "#8b5cf6",
          B: "#ec4899"
        };
        var _letter = _activePitch && _activePitch[0] || null;
        var _fullColor = _letter && _TRUMPET_NOTE_COLORS[_letter];
        var _badgeBase = (pressed) => ({
          position: "absolute",
          zIndex: 3,
          width: _badgeD,
          height: _badgeD,
          borderRadius: "50%",
          background: pressed ? "#000" : "var(--bg)",
          border: "2px solid var(--text)",
          boxShadow: _fullColor ? `0 0 0 10px ${_fullColor}` : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: _labelFs,
          fontWeight: 800,
          color: pressed ? "#fff" : "var(--text)",
          fontFamily: "'DM Sans', sans-serif",
          pointerEvents: "none",
          transition: "background 80ms, color 80ms, box-shadow 80ms"
        });
        if (isEuphoniumMode) {
          return [1, 2, 3].map((n2, i) => /* @__PURE__ */ React.createElement("div", { key: n2, style: {
            ..._badgeBase(_activeSet.has(n2)),
            left: `calc(100% + ${14 + i * (_badgeD + _gap)}px)`,
            top: "50%",
            transform: "translateY(-50%)"
          } }, n2));
        }
        var _badgeLeftPct = BRASS.pistonX[1];
        var badge = (n2, offsetPx) => {
          var _xPart = offsetPx ? `translateX(calc(-50% ${offsetPx > 0 ? "+" : "-"} ${Math.abs(offsetPx)}px))` : "translateX(-50%)";
          return /* @__PURE__ */ React.createElement("div", { key: n2, style: {
            ..._badgeBase(_activeSet.has(n2)),
            left: `${_badgeLeftPct}%`,
            top: "0%",
            transform: _xPart
          } }, n2);
        };
        return /* @__PURE__ */ React.createElement(React.Fragment, null, badge(1, -(_gap + _badgeD)), badge(2, 0), badge(3, _gap + _badgeD));
      })());
    })(), /* @__PURE__ */ React.createElement("div", { style: {
      order: -1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: isMobile ? 4 : 10,
      fontSize: LEGEND_FS,
      fontFamily: "'DM Sans', sans-serif",
      color: "var(--text)",
      lineHeight: 1.3
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: LEGEND_FS, height: LEGEND_FS, borderRadius: "50%", background: "#fff", border: "2px solid #1f2937" } }), /* @__PURE__ */ React.createElement("span", null, "Release")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: LEGEND_FS, height: LEGEND_FS, borderRadius: "50%", background: "#000", border: "2px solid #1f2937" } }), /* @__PURE__ */ React.createElement("span", null, "Press"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("div", null, "1 \u2014 Index finger"), /* @__PURE__ */ React.createElement("div", null, "2 \u2014 Middle finger"), /* @__PURE__ */ React.createElement("div", null, "3 \u2014 Ring finger"))));
  })(), isTubaMode && !pianoHidden && (() => {
    var _a2, _b2;
    var _playing = [];
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    var _activePitch = _playing[0];
    var _activeFingering = _activePitch && TUBA_FINGERING[_activePitch];
    var _activeSet = new Set(_activeFingering || []);
    var ukH = isMobile ? 100 : tabletPianoH;
    var LEGEND_FS = isMobile ? 11 : 14;
    var _imgH = isMobile ? Math.min(ukH * 0.95, 120) : Math.min(ukH * 1.1, 320);
    var _imgW = _imgH * (1996 / 1232);
    var _labelFs = isMobile ? 20 : 30;
    var _badgeD = isMobile ? 36 : 56;
    var _gap = isMobile ? 16 : 28;
    var _TUBA_NOTE_COLORS = {
      C: "#dc2626",
      D: "#f97316",
      E: "#facc15",
      F: "#22c55e",
      G: "#3b82f6",
      A: "#8b5cf6",
      B: "#ec4899"
    };
    var _letter = _activePitch && _activePitch[0] || null;
    var _fullColor = _letter && _TUBA_NOTE_COLORS[_letter];
    var hole = (n2) => {
      var pressed = _activeSet.has(n2);
      return /* @__PURE__ */ React.createElement("div", { key: n2, style: {
        width: _badgeD,
        height: _badgeD,
        borderRadius: "50%",
        background: pressed ? "#000" : "var(--bg)",
        border: "2px solid var(--text)",
        boxShadow: _fullColor ? `0 0 0 10px ${_fullColor}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: _labelFs,
        fontWeight: 800,
        color: pressed ? "#fff" : "var(--text)",
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
        flexShrink: 0,
        transition: "background 80ms, color 80ms, box-shadow 80ms"
      } }, n2);
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: isMobile ? 14 : 28,
      padding: isMobile ? "0 12px" : "0 24px",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: isMobile ? 4 : 10,
      fontSize: LEGEND_FS,
      fontFamily: "'DM Sans', sans-serif",
      color: "var(--text)",
      lineHeight: 1.3
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: LEGEND_FS, height: LEGEND_FS, borderRadius: "50%", background: "#fff", border: "2px solid #1f2937" } }), /* @__PURE__ */ React.createElement("span", null, "Release")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: LEGEND_FS, height: LEGEND_FS, borderRadius: "50%", background: "#000", border: "2px solid #1f2937" } }), /* @__PURE__ */ React.createElement("span", null, "Press"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("div", null, "1 \u2014 Index finger"), /* @__PURE__ */ React.createElement("div", null, "2 \u2014 Middle finger"), /* @__PURE__ */ React.createElement("div", null, "3 \u2014 Ring finger"))), /* @__PURE__ */ React.createElement("div", { style: {
      flexShrink: 0,
      marginTop: isMobile ? 30 : 60,
      width: _imgW,
      height: _imgH,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/public/tuba.png",
        alt: "Tuba",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "rotate(-4deg)",
          transformOrigin: "center center"
        }
      }
    ), [
      { n: 1, topPct: 22 },
      { n: 2, topPct: 30 },
      { n: 3, topPct: 38 }
    ].map(({ n: n2, topPct }) => /* @__PURE__ */ React.createElement("div", { key: n2, style: {
      position: "absolute",
      left: "calc(100% + 12px)",
      top: `${topPct}%`,
      transform: "translateY(-50%)",
      zIndex: 3,
      width: _badgeD,
      height: _badgeD
    } }, hole(n2)))));
  })(), isSaxophoneMode && !pianoHidden && (() => {
    var _a2, _b2;
    var _playing = [];
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    var _activePitch = _playing[0];
    var _active = _activePitch && SAX_FINGERING[_activePitch];
    var _activeKeys = new Set(_active ? _active.keys : []);
    var _octaveOn = _active ? _active.octave : false;
    var ukH = isMobile ? 100 : tabletPianoH;
    var KEY_D = isMobile ? 30 : 44;
    var KEY_GAP = isMobile ? 4 : 8;
    var HAND_GAP = isMobile ? 14 : 22;
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: isMobile ? 18 : 32,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: KEY_D * 0.7,
      height: KEY_D * 0.7,
      borderRadius: "50%",
      background: _octaveOn ? "#000" : "#fff",
      border: "2.5px solid #1f2937",
      boxShadow: _octaveOn ? "inset 0 3px 5px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: KEY_D * 0.3,
      fontWeight: 700,
      color: _octaveOn ? "#fff" : "#1f2937",
      fontFamily: "'DM Sans', sans-serif",
      transition: "background 80ms"
    } }, "8"), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: KEY_GAP
    } }, [1, 2, 3, 4, 5, 6].map((n2, idx) => {
      var covered = _activeKeys.has(n2);
      var isHandBreak = idx === 3;
      return /* @__PURE__ */ React.createElement("div", { key: n2, style: {
        marginTop: isHandBreak ? HAND_GAP - KEY_GAP : 0,
        width: KEY_D,
        height: KEY_D,
        borderRadius: "50%",
        background: covered ? "#000" : "#fff",
        border: "2.5px solid #1f2937",
        boxShadow: covered ? "inset 0 4px 6px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.15)",
        transition: "background 80ms"
      } });
    })));
  })(), isRecorderMode && !pianoHidden && (() => {
    var _a2, _b2;
    var _playing = [];
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    var _activePitch = _playing[0];
    var _active = _activePitch && RECORDER_FINGERING[_activePitch];
    var _activeKeys = new Set((_active == null ? void 0 : _active.keys) || []);
    var _thumbDown = !!(_active == null ? void 0 : _active.thumb);
    var _ebDown = !!(_active == null ? void 0 : _active.eb);
    var ukH = isMobile ? 100 : tabletPianoH;
    var HOLE_D = isMobile ? 32 : 50;
    var HOLE_GAP = isMobile ? 6 : 12;
    var LEGEND_FS = isMobile ? 11 : 14;
    var renderHole = (label, down) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: LEGEND_FS,
      color: "var(--text2)",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700
    } }, label), /* @__PURE__ */ React.createElement("div", { style: {
      width: HOLE_D,
      height: HOLE_D,
      borderRadius: "50%",
      background: down ? "#000" : "#fff",
      border: "2.5px solid #1f2937",
      boxShadow: down ? "inset 0 4px 8px rgba(0,0,0,0.6)" : "0 2px 4px rgba(0,0,0,0.15)",
      transition: "background 80ms"
    } }));
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: isMobile ? 10 : 22,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: isMobile ? 52 : 84 }, "aria-hidden": "true" }, "\u{1FA88}"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: HOLE_GAP } }, renderHole("T", _thumbDown), [1, 2, 3, 4, 5, 6].map((n2) => /* @__PURE__ */ React.createElement(React.Fragment, { key: n2 }, renderHole(String(n2), _activeKeys.has(n2)))), renderHole("E\u266D", _ebDown)));
  })(), isFluteMode && !pianoHidden && (() => {
    var _a2, _b2;
    var _playing = [];
    for (var k of Object.keys(playingNotes)) {
      var [mi, ni] = k.split("-").map(Number);
      var n = (_a2 = measures[mi]) == null ? void 0 : _a2.notes[ni];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    if ((playMode === "learn" || playMode === "practice") && practicePos) {
      var n = (_b2 = measures[practicePos.measure]) == null ? void 0 : _b2.notes[practicePos.note];
      if (n && !n.isRest && n.name) {
        var acc = n.accidental === "sharp" ? "#" : n.accidental === "flat" ? "b" : "";
        _playing.push(`${n.name}${acc}${n.octave}`);
      }
    }
    var _activePitch = _playing[0];
    var _activeList = _activePitch && FLUTE_FINGERING[_activePitch];
    var _fingerings = _activeList && _activeList.length ? _activeList : [_F([], false, false, false)];
    var _hasAlt = _fingerings.length > 1;
    var ukH = isMobile ? 100 : tabletPianoH;
    var LEGEND_FS = isMobile ? 10 : 13;
    var renderFluteSvg = (f, h) => {
      var activeKeys = new Set(f.keys || []);
      var down = (b) => b ? "#dc2626" : "#ffffff";
      return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 800 110", width: "auto", height: h, style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("rect", { x: "10", y: "45", width: "180", height: "22", fill: "#e7e7ea", stroke: "#444", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("rect", { x: "190", y: "45", width: "380", height: "22", fill: "#e7e7ea", stroke: "#444", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("rect", { x: "570", y: "45", width: "220", height: "22", fill: "#e7e7ea", stroke: "#444", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("line", { x1: "190", y1: "38", x2: "190", y2: "74", stroke: "#666", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "570", y1: "38", x2: "570", y2: "74", stroke: "#666", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("ellipse", { cx: "100", cy: "56", rx: "14", ry: "9", fill: "#222", stroke: "#444", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("circle", { cx: "210", cy: "28", r: "14", fill: down(f.thumb), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "210", y1: "42", x2: "210", y2: "50", stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "250", cy: "56", r: "18", fill: down(activeKeys.has(1)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "310", cy: "56", r: "18", fill: down(activeKeys.has(2)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "370", cy: "56", r: "18", fill: down(activeKeys.has(3)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "395", cy: "92", r: "12", fill: down(f.gsharp), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "395", y1: "80", x2: "395", y2: "68", stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "440", cy: "56", r: "18", fill: down(activeKeys.has(4)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "500", cy: "56", r: "18", fill: down(activeKeys.has(5)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "560", cy: "56", r: "18", fill: down(activeKeys.has(6)), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "600", cy: "92", r: "12", fill: down(f.eb), stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "600", y1: "80", x2: "600", y2: "68", stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "650", cy: "56", r: "14", fill: "#ffffff", stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "700", cy: "56", r: "14", fill: "#ffffff", stroke: "#222", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "750", cy: "56", r: "14", fill: "#ffffff", stroke: "#222", strokeWidth: "2" }));
    };
    var fluteH = _hasAlt ? isMobile ? 38 : 60 : isMobile ? 64 : 92;
    var renderRow = (f, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, style: { display: "flex", alignItems: "center", gap: 8 } }, f.label && /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: LEGEND_FS,
      color: "var(--text2)",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      minWidth: isMobile ? 50 : 78,
      textAlign: "right"
    } }, f.label), renderFluteSvg(f, fluteH));
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      height: ukH,
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, _fingerings.map(renderRow)));
  })(), (isDrumsMode || (clef === "drum" || clef === "percussion") && !childLock) && (() => {
    var DRUM_LABELS = [
      { label: "Crash 1", x: 0.21, y: 0.23 },
      { label: "Splash", x: 0.46, y: 0.13 },
      { label: "Crash 2", x: 0.708, y: 0.19 },
      { label: "Hi-Hat", x: 0.08, y: 0.54 },
      { label: "Ride", x: 0.86, y: 0.52 },
      { label: "Tom 1", x: 0.38, y: 0.28 },
      { label: "Tom 2", x: 0.55, y: 0.28 },
      { label: "Bass", x: 0.465, y: 0.58 },
      { label: "Snare", x: 0.285, y: 0.56 },
      { label: "Floor Tom 1", x: 0.67, y: 0.51 },
      { label: "Floor Tom 2", x: 0.8, y: 0.73 }
    ];
    var labelEls = DRUM_LABELS.map((l, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
      position: "absolute",
      left: `${l.x * 100}%`,
      top: `${l.y * 100}%`,
      transform: "translate(-50%, -50%)",
      fontSize: 14,
      fontWeight: 700,
      color: "#222",
      background: "rgba(255,255,255,0.72)",
      padding: "1px 6px",
      borderRadius: 6,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      fontFamily: "'DM Sans', sans-serif"
    } }, l.label));
    var _LABEL_TO_GM = {
      "Crash 1": "Crash Cymbal 1",
      "Crash 2": "Crash Cymbal 2",
      "Splash": "Splash Cymbal",
      "Ride": "Ride Cymbal 1",
      "Snare": "Acoustic Snare",
      "Bass": "Bass Drum 1",
      "Tom 1": "High Tom",
      "Tom 2": "Hi-Mid Tom",
      "Floor Tom 1": "High Floor Tom",
      "Floor Tom 2": "Low Floor Tom"
    };
    var _gmFor = (label) => {
      if (label === "Hi-Hat") return hiHatOpenRef.current ? "Open Hi-Hat" : "Closed Hi-Hat";
      if (label === "Hi-Hat Pedal") return "Pedal Hi-Hat";
      return _LABEL_TO_GM[label] || label;
    };
    var _playDrum = (label) => {
      try {
        if (typeof Tone !== "undefined" && Tone.start) Tone.start();
      } catch (e) {
      }
      drumPlayPiece(drumPlayersRef.current, _gmFor(label));
    };
    var HOTSPOTS = [
      // MEASURED directly off the 1927×1398 drawing's ink, then converted
      // to container fractions so each circle lands exactly on its piece:
      //   • Drums: the TOP-skin ellipse only (the playing surface).
      //   • Bass: the whole circular front face IS the skin.
      //   • Cymbals & hi-hat: the full tilted ellipse face.
      // The two foot-pedal hotspots are NOT skins — left oversized for now.
      // Z-order: bass(1) → floor toms(2) → cymbals(4) → front drums(5).
      { label: "Bass", cx: 0.4645, cy: 0.4986, rx: 0.1053, ry: 0.1209, z: 1 },
      // Kick pedal: OVERSIZED debug hotspot — tighten once green-flash confirms taps land.
      { label: "Bass", cx: 0.466, cy: 0.77, rx: 0.1, ry: 0.1, z: 3 },
      { label: "Floor Tom 1", cx: 0.6575, cy: 0.4771, rx: 0.0893, ry: 0.0873, z: 2 },
      { label: "Floor Tom 2", cx: 0.7986, cy: 0.6917, rx: 0.1002, ry: 0.1102, z: 2 },
      { label: "Snare", cx: 0.2813, cy: 0.5186, rx: 0.0768, ry: 0.0794, z: 5 },
      // Rack toms sit IN FRONT of the crash/splash that overlap them → z:6 so a
      // tap on the tom head triggers the tom (the visually-front piece) even
      // where a cymbal hangs over it. Each drum circle fully covers its skin.
      { label: "Tom 1", cx: 0.383, cy: 0.2504, rx: 0.0535, ry: 0.0718, z: 6 },
      { label: "Tom 2", cx: 0.5376, cy: 0.2625, rx: 0.0602, ry: 0.0908, z: 6 },
      { label: "Hi-Hat", cx: 0.0968, cy: 0.4897, rx: 0.0968, ry: 0.1001, z: 4 },
      // Hi-hat pedal: OVERSIZED debug hotspot — tighten when green-flash confirms taps reach it.
      { label: "Hi-Hat Pedal", cx: 0.14, cy: 0.87, rx: 0.14, ry: 0.11, z: 4, pedal: true },
      { label: "Crash 1", cx: 0.2164, cy: 0.1474, rx: 0.1423, ry: 0.1184, z: 4 },
      { label: "Crash 2", cx: 0.7068, cy: 0.1302, rx: 0.1437, ry: 0.1137, z: 4 },
      { label: "Ride", cx: 0.8656, cy: 0.4492, rx: 0.1197, ry: 0.1175, z: 4 },
      { label: "Splash", cx: 0.4562, cy: 0.1102, rx: 0.0644, ry: 0.0544, z: 5 }
    ];
    var _flash = (i) => {
      setFlashHotspot(i);
      setTimeout(() => setFlashHotspot((cur) => cur === i ? null : cur), 220);
    };
    flashDrumByLabelRef.current = (label) => {
      var idx = HOTSPOTS.findIndex((h) => h.label === label);
      if (idx >= 0) _flash(idx);
    };
    var hotspotEls = HOTSPOTS.map((h, i) => {
      var isFlashing = flashHotspot === i;
      var isArmed = armedDrumLabel === h.label;
      var baseStyle = {
        position: "absolute",
        left: `${(h.cx - h.rx) * 100}%`,
        top: `${(h.cy - h.ry) * 100}%`,
        width: `${h.rx * 200}%`,
        height: `${h.ry * 200}%`,
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: h.z,
        touchAction: "manipulation",
        background: isFlashing ? "rgba(0,220,0,0.65)" : isArmed ? "rgba(255,200,0,0.35)" : "rgba(255,0,0,0.22)",
        outline: isFlashing ? "3px solid rgba(0,160,0,1)" : isArmed ? "3px solid rgba(255,170,0,1)" : "2px solid rgba(255,0,0,0.6)"
      };
      if (h.pedal) {
        var _close = (e) => {
          e.preventDefault();
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch (_) {
          }
          hiHatOpenRef.current = false;
          setHiHatOpen(false);
          _flash(i);
          _playDrum("Hi-Hat Pedal");
          var _canWrite = !childLock || typeof window !== "undefined" && window.__RPM_READONLY__ === false;
          if (_canWrite) {
            armedDrumPieceRef.current = "Hi-Hat Pedal";
            setArmedDrumLabel("Hi-Hat Pedal");
            writeDrumNote("Hi-Hat Pedal");
          }
        };
        var _open = () => {
          hiHatOpenRef.current = true;
          setHiHatOpen(true);
        };
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: "hs" + i,
            onPointerDown: _close,
            onPointerUp: _open,
            onPointerCancel: _open,
            onLostPointerCapture: _open,
            style: baseStyle
          }
        );
      }
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: "hs" + i,
          onPointerDown: (e) => {
            e.preventDefault();
            _flash(i);
            _playDrum(h.label);
            var _canWrite = !childLock || typeof window !== "undefined" && window.__RPM_READONLY__ === false;
            if (_canWrite) {
              armedDrumPieceRef.current = h.label;
              setArmedDrumLabel(h.label);
              writeDrumNote(h.label);
            } else {
              try {
                showEditHint("\u{1F512} This is the play page \u2014 open the edit page to compose");
              } catch (e2) {
              }
            }
          },
          style: baseStyle
        }
      );
    });
    return /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: tabletGapH,
      ...isMobile ? { height: 100, flexShrink: 0 } : { flex: "1 1 0", minHeight: 0 },
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      background: "var(--bg)",
      overflow: "hidden"
    } }, isMobile ? /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/print-preview/drum-kit-drawing.png",
        alt: "Drum kit",
        style: {
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          pointerEvents: "none"
        },
        draggable: false
      }
    ) : /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: "100%", aspectRatio: "1927 / 1398", maxWidth: "100%" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/print-preview/drum-kit-drawing.png",
        alt: "Drum kit",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          pointerEvents: "none"
        },
        draggable: false
      }
    ), !hiHatOpen && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: `${(0.085 - 0.12) * 100}%`,
      top: `${(0.575 - 0.03) * 100}%`,
      width: `${0.12 * 200}%`,
      height: `${0.03 * 200}%`,
      borderRadius: "50%",
      background: "var(--bg)",
      pointerEvents: "none",
      zIndex: 3
    } }), hotspotEls, labelEls));
  })(), !isFretboardMode && !isTrumpetMode && !isEuphoniumMode && !isTubaMode && !isSaxophoneMode && !isRecorderMode && !isFluteMode && !isDrumsMode && !pianoHidden && (() => {
    var isTablet2 = isTouchDevice && !isMobile;
    var noteOrder = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
    var minNoteVal = 999, maxNoteVal = 0;
    var considerPitch = (name, octave, accidental, mi, ni2, ci) => {
      var effKS = effectiveKeySig(measures, mi, keySig);
      var accResolved = accidental && accidental !== "none" ? accidental : effectiveAccidentalInMeasure(measures, mi, ni2, ci, name, octave);
      var pk = pitchToPianoKey(name, octave, accResolved, effKS);
      var parsed = pk.match(/^([A-G])(#?)(-?\d+)$/);
      if (!parsed) return;
      var letter = parsed[1];
      var isSharp = parsed[2] === "#";
      var oct2 = parseInt(parsed[3], 10);
      var whiteVal = oct2 * 7 + (noteOrder[letter] || 0);
      var minV = whiteVal;
      var maxV = isSharp ? whiteVal + 1 : whiteVal;
      if (maxV > maxNoteVal) maxNoteVal = maxV;
      if (minV < minNoteVal) minNoteVal = minV;
    };
    measures.forEach((m, mi) => m.notes.forEach((n, ni2) => {
      if (n.isRest) return;
      var noteStaff = n.staff === "bass" ? "bass" : "treble";
      if (!isMultiStaff(clef) && noteStaff !== clef) return;
      considerPitch(n.name, n.octave, n.accidental, mi, ni2, void 0);
      if (Array.isArray(n.chord)) {
        for (var ci = 0; ci < n.chord.length; ci++) {
          var c = n.chord[ci];
          considerPitch(c.name, c.octave, c.accidental, mi, ni2, ci);
        }
      }
    }));
    var allNotes = ["C", "D", "E", "F", "G", "A", "B"];
    var colors = { C: "var(--c-color)", D: "var(--d-color)", E: "var(--e-color)", F: "var(--f-color)", G: "var(--g-color)", A: "var(--a-color)", B: "var(--b-color)" };
    var startNote = clef === "bass" ? 14 : isMultiStaff(clef) ? 14 : 28;
    var endNote = clef === "bass" ? 28 : isMultiStaff(clef) ? 42 : 35;
    if (minNoteVal < 999 && maxNoteVal > 0) {
      startNote = minNoteVal < 14 ? 5 : Math.floor(minNoteVal / 7) * 7;
      endNote = maxNoteVal;
    }
    if (endNote - startNote < 7) endNote = startNote + 7;
    var allWhiteKeys = [];
    var allBlackKeys = [];
    var blackNotes = [0, 1, 3, 4, 5];
    var wIdx = 0;
    for (var val = startNote; val <= endNote; val++) {
      var oct = Math.floor(val / 7);
      var ni = val % 7;
      allWhiteKeys.push({ note: allNotes[ni] + oct, color: colors[allNotes[ni]], key: "" });
      if (blackNotes.includes(ni) && val < endNote) {
        allBlackKeys.push({ note: allNotes[ni] + "#" + oct, key: "", whiteIdx: wIdx });
      }
      wIdx++;
    }
    var numWhiteKeys = allWhiteKeys.length;
    var MAX_WHITE_GAP = 70;
    var _PIANO_SCALE = IS_LOCALHOST && !isMobile && numWhiteKeys <= 8 ? 1.5 : 1;
    var whiteGap = isMobile ? Math.floor((viewportWidth - 16) / numWhiteKeys * 0.8) : Math.min(MAX_WHITE_GAP, Math.floor(viewportWidth / (numWhiteKeys + 1.5)));
    var whiteW = isMobile ? Math.floor(whiteGap * 0.92) : Math.floor(whiteGap * 0.94);
    var _t = (title || "").toLowerCase();
    var _chromTrebleTall = IS_LOCALHOST && !isMobile && !isTablet2 && _t.includes("chromaticism") && _t.includes("treble");
    var _furEliseRealPiano = IS_LOCALHOST && !isMobile && !isTablet2 && _t.includes("elise");
    var _useRealProportions = !isMobile && !isTablet2;
    var _blackWRatio = _useRealProportions ? 0.478 : isMobile ? 0.6 : 0.65;
    var _blackHRatio = _useRealProportions ? 0.633 : 0.5;
    var blackW = Math.floor(whiteW * _blackWRatio);
    var _chromExtraH = _chromTrebleTall ? Math.round(tabletPianoH * 0.5) : 0;
    var pianoH = isMobile ? 72 : _furEliseRealPiano ? Math.round(whiteW * 6.383) : tabletPianoH + _chromExtraH;
    var _extraAbove = !isMobile && pianoH > tabletPianoH ? pianoH - tabletPianoH : 0;
    var _fullBlackH = isMobile ? 44 : Math.floor(pianoH * _blackHRatio);
    var _hideBlackUpper = !isMobile && !isTablet2;
    var blackH = _hideBlackUpper ? Math.floor(_fullBlackH / 2) : _fullBlackH;
    var blackTopOffset = _hideBlackUpper ? Math.floor(_fullBlackH / 2) : 0;
    var isAndroid = typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
    var pianoLift = isMobile ? 5 : 0;
    var whiteKeyH = isMobile ? pianoH + 6 + pianoLift : pianoH;
    var whiteFontSize = Math.max(8, Math.min(isMobile ? 14 * mobileZoom : isTablet2 ? 16 : 20, Math.round(whiteW * 0.45)));
    var blackFontSize = Math.max(7, Math.min(isMobile ? 12 * mobileZoom : isTablet2 ? 14 : 16, Math.round(blackW * 0.4)));
    var whiteKeys = allWhiteKeys.map((k, i) => ({ ...k, left: i * whiteGap }));
    var blackKeys = allBlackKeys.map((k) => ({ ...k, left: k.whiteIdx * whiteGap + whiteW - blackW / 2 }));
    var totalW = whiteGap * (numWhiteKeys - 1) + whiteW;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          background: "var(--bg)",
          padding: isMobile ? "8px 0 6px" : "0",
          position: "relative",
          bottom: pianoLift,
          marginTop: tabletGapH - _extraAbove,
          display: "flex",
          justifyContent: "center",
          flexShrink: 0,
          // Owner rule 2026-05-15: ≤ 1-octave songs scale the piano 1.2×
          // anchored at center-bottom — bottom edge stays put, growth goes
          // strictly upward. Multi-octave songs render at 1× as before.
          transform: _PIANO_SCALE !== 1 ? `scale(${_PIANO_SCALE})` : void 0,
          transformOrigin: _PIANO_SCALE !== 1 ? "center bottom" : void 0,
          // Laptop / desktop: visually hide the white-key strip above the
          // tap-to-close bar. Keys themselves are NOT modified — clip-path
          // just removes the visible artifact above the bar's top edge.
          clipPath: _hideBlackUpper ? (() => {
            var _bb = Math.floor(pianoH * 0.6835);
            return `inset(${Math.max(0, pianoH - _bb)}px 0 0 0)`;
          })() : void 0,
          // Block browser-native pinch-zoom on the piano so a pinch gesture
          // on the keys doesn't zoom the entire page. Only the staff should
          // respond to pinch (handled by the pinch handlers on scoreAreaRef).
          touchAction: isMobile || isTablet2 ? "none" : void 0,
          overflowX: isMobile && mobileZoom > 1 ? "auto" : "visible",
          touchAction: isMobile ? "pan-x" : void 0
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", position: "relative", height: pianoH, width: totalW, flexShrink: 0 } }, whiteKeys.map((k, i) => {
        var _a2;
        var letter = k.note.replace(/[0-9]/g, "");
        var octave = parseInt(((_a2 = k.note.match(/\d/)) == null ? void 0 : _a2[0]) || "4", 10);
        var showOctave = letter === "C" || i === 0;
        var letterShift = letter === "C" || letter === "F" ? -blackW / 4 : letter === "E" || letter === "B" ? blackW / 4 : 0;
        return /* @__PURE__ */ React.createElement(
          WhitePianoKey,
          {
            key: `${k.note}-${pianoKeyPulse[k.note] || 0}`,
            note: k.note,
            color: k.color,
            left: k.left,
            w: whiteW,
            h: whiteKeyH,
            fontSize: whiteFontSize,
            letter,
            octave,
            showOctave,
            letterShift,
            isPressed: !!pressedPianoKeys[k.note],
            onClick: handlePianoKeyClick,
            colorNotes,
            showLetters
          }
        );
      }), blackKeys.map((k) => {
        var label = k.note.replace(/[0-9]/g, "");
        var isPressed = !!pressedPianoKeys[k.note];
        var pressColor = isPressed ? colorNotes ? blackKeyGradient[label] || pressedPianoKeys[k.note] : "#666666" : "#1a1a1a";
        return /* @__PURE__ */ React.createElement(
          BlackPianoKey,
          {
            key: `${k.note}-${pianoKeyPulse[k.note] || 0}`,
            note: k.note,
            label,
            left: k.left,
            w: blackW,
            h: blackH,
            topOffset: blackTopOffset,
            fontSize: blackFontSize,
            isPressed,
            pressColor,
            onClick: handlePianoKeyClick,
            colorNotes,
            showLetters
          }
        );
      }))
    );
  })(), !isMobile && !childLock && /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg2)",
    borderTop: "1px solid var(--border)",
    padding: "6px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 11,
    color: "var(--text2)",
    flexShrink: 0
  } }, /* @__PURE__ */ React.createElement("span", null, measures.length, " measures \xB7 ", timeSig.top, "/", timeSig.bottom, " \xB7 ", bpm, " BPM"), /* @__PURE__ */ React.createElement("span", null, measures.reduce((sum, m) => sum + m.notes.length, 0), " notes", isPlaying && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--green)", marginLeft: 12 } }, "\u25CF Playing"), metronomeOn && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)", marginLeft: 12 } }, "\u25CF Metronome")), /* @__PURE__ */ React.createElement("span", null, "Read&PlayMusic v0.1")), showLibrary && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1e3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, onClick: () => setShowLibrary(false) }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    width: "100%",
    maxWidth: 560,
    maxHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    overflow: "hidden"
  }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "20px 24px 16px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 700, fontFamily: "inherit" } }, "\u{1F4DA} Song Library"), !childLock && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text2)", marginTop: 2 } }, library.length, " song", library.length !== 1 ? "s" : "", " saved", saveDir && /* @__PURE__ */ React.createElement("span", null, " \xB7 \u{1F4C1} ", saveDir.split("/").pop()))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, !childLock && /* @__PURE__ */ React.createElement("button", { disabled: siteDeploying, onClick: async () => {
    if (siteDeploying) return;
    if (!confirm("Publish the whole site to readandplaymusic.app?\n\nYour published songs go live in about 2 minutes.")) return;
    setSiteDeploying(true);
    try {
      var res = await fetch("/api/release-to-live", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ reason: "library button" })
      });
      if (res.ok) {
        try {
          showEditHint("\u{1F308} Publishing to readandplaymusic.app \u2014 live in ~2 minutes.");
        } catch (e) {
        }
        setTimeout(() => setSiteDeploying(false), 4e3);
      } else if (res.status === 401) {
        setSiteDeploying(false);
        setShowPinPrompt(true);
        setPinInput("");
        setPinError("");
      } else {
        setSiteDeploying(false);
        alert("Publish failed \u2014 please try again.");
      }
    } catch {
      setSiteDeploying(false);
      alert("Connection error \u2014 could not reach the local server.");
    }
  }, style: {
    padding: "8px 14px",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "inherit",
    cursor: siteDeploying ? "wait" : "pointer",
    opacity: siteDeploying ? 0.7 : 1,
    background: "linear-gradient(90deg, #dc2626, #f97316, #facc15, #22c55e, #3b82f6, #8b5cf6)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    textShadow: "0 1px 2px rgba(0,0,0,0.35)"
  }, title: "Compile and push the whole public site (readandplaymusic.app) live \u2014 about 2 minutes" }, siteDeploying ? "\u23F3 Publishing\u2026" : "\u{1F308} Publish to Public Website"), !childLock && /* @__PURE__ */ React.createElement("button", { disabled: lessonsPushing, onClick: async () => {
    if (lessonsPushing) return;
    if (!confirm("Push your lessons to lessons.readandplaymusic.app?\n\nThis updates ONLY the lessons site \u2014 the main public website (readandplaymusic.app) is NOT affected.")) return;
    setLessonsPushing(true);
    try {
      var res = await fetch("/api/push-lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ reason: "library button" })
      });
      if (res.ok) {
        try {
          showEditHint("\u{1F393} Pushing to lessons.readandplaymusic.app \u2014 live shortly.");
        } catch (e) {
        }
        setTimeout(() => setLessonsPushing(false), 4e3);
      } else if (res.status === 401) {
        setLessonsPushing(false);
        setShowPinPrompt(true);
        setPinInput("");
        setPinError("");
      } else {
        setLessonsPushing(false);
        alert("Lessons push failed \u2014 please try again.");
      }
    } catch {
      setLessonsPushing(false);
      alert("Connection error \u2014 could not reach the local server.");
    }
  }, style: {
    padding: "8px 14px",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "inherit",
    cursor: lessonsPushing ? "wait" : "pointer",
    opacity: lessonsPushing ? 0.7 : 1,
    background: "#2563eb",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
  }, title: "Push your lessons live to lessons.readandplaymusic.app only \u2014 the main public website is not affected" }, lessonsPushing ? "\u23F3 Pushing lessons\u2026" : "\u{1F393} Push Lessons to Public"), !childLock && /* @__PURE__ */ React.createElement("button", { onClick: openFolderBrowser, style: {
    padding: "8px 14px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 13,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "\u{1F4C1} ", saveDir ? "Change Folder" : "Choose Folder"), !childLock && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    newScore();
  }, style: {
    padding: "8px 14px",
    background: "var(--accent)",
    border: "none",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "+ New Score"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowLibrary(false), style: {
    padding: "8px 14px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 13,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Close"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, padding: "10px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setNameInput("");
    setColorInput("#dc2626");
    setShowNamePrompt(true);
  }, style: {
    padding: "8px 14px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    color: "var(--text2)",
    cursor: "pointer"
  } }, "+ Add Person"), playerName && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    var profile = allProfiles[playerName];
    if (profile == null ? void 0 : profile.passwordHash) {
      setPasswordModal({ type: "verify-delete", profileName: playerName });
      resetPwFields();
      return;
    }
    if (!confirm(`Delete "${playerName}" and their song list?`)) return;
    setAllProfiles((prev) => {
      var next = { ...prev };
      delete next[playerName];
      localStorage.setItem("profiles", JSON.stringify(next));
      return next;
    });
    savePlayerName("");
    setLibraryTab("all");
  }, style: {
    padding: "8px 14px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    color: "var(--danger)",
    cursor: "pointer"
  } }, "- Delete Account")), Object.keys(allProfiles).length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, padding: "8px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 } }, Object.keys(allProfiles).map((name) => {
    var _a2, _b2;
    var pColor = getProfileColor(name);
    var songCount = (((_a2 = allProfiles[name]) == null ? void 0 : _a2.songs) || []).length;
    var isActive = playerName === name;
    var hasPw = !!((_b2 = allProfiles[name]) == null ? void 0 : _b2.passwordHash);
    return /* @__PURE__ */ React.createElement("div", { key: name, style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
      switchProfile(name);
      setLibraryTab("mine");
    }, style: {
      padding: isActive ? "10px 18px" : "8px 14px",
      background: isActive ? pColor : "var(--bg2)",
      border: isActive ? `4px solid #fff` : `2px solid ${pColor}`,
      outline: isActive ? `4px solid ${pColor}` : "none",
      outlineOffset: 0,
      borderRadius: 20,
      fontSize: isActive ? 15 : 14,
      fontWeight: isActive ? 900 : 600,
      fontFamily: "inherit",
      color: isActive ? "#fff" : pColor,
      cursor: "pointer",
      boxShadow: isActive ? `0 0 0 8px ${pColor}33, 0 4px 14px ${pColor}AA` : "none",
      margin: isActive ? 4 : 0
    } }, isActive ? "\u2713 " : "", hasPw ? "\u{1F512}" : "\u2764\uFE0F", " ", name, songCount > 0 ? ` (${songCount})` : "", isActive ? " (active)" : ""), !hasPw && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setPasswordModal({ type: "set", profileName: name });
          resetPwFields();
        },
        title: `Set password for ${name}`,
        style: {
          padding: "6px 8px",
          background: "var(--bg3)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          fontSize: 12,
          fontFamily: "inherit",
          cursor: "pointer",
          color: "var(--text2)"
        }
      },
      "\u{1F512} Set"
    ));
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, padding: "8px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 } }, (() => {
    var allCount = library.filter((s) => !childLock || s.published).length;
    return /* @__PURE__ */ React.createElement("button", { onClick: () => setLibraryTab("all"), style: {
      padding: "8px 14px",
      background: libraryTab === "all" ? "var(--accent)" : "var(--bg3)",
      border: libraryTab === "all" ? "none" : "1px solid var(--border)",
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 600,
      fontFamily: "inherit",
      color: libraryTab === "all" ? "var(--text)" : "var(--text2)",
      cursor: "pointer"
    } }, "\u{1F4DA} All Songs (", allCount, ")");
  })()), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "12px 16px" } }, displayLibrary.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: {
    textAlign: "center",
    padding: "40px 20px",
    color: "var(--text2)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, marginBottom: 12 } }, "\u{1F3B5}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, saveDir ? "No songs yet" : "No save folder selected"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, marginTop: 4 } }, saveDir ? "Hit Save to store your current score here." : "Choose a folder above to start saving songs.")) : displayLibrary.filter((song) => !childLock || song.published).filter((song) => !childLock || libraryTab === "all" || mySongs.includes(song.title)).sort((a, b) => (a.difficulty || 99) - (b.difficulty || 99)).map((song) => {
    var _a2, _b2;
    var isActive = song.title === currentSongId;
    var date = new Date(song.savedAt);
    var noteCount = ((_a2 = song.measures) == null ? void 0 : _a2.reduce((s, m) => s + m.notes.length, 0)) || 0;
    var measureCount = ((_b2 = song.measures) == null ? void 0 : _b2.length) || 0;
    return /* @__PURE__ */ React.createElement("div", { key: song.id, onClick: () => loadFromLibrary(song), style: {
      padding: "14px 16px",
      marginBottom: 8,
      background: isActive ? "rgba(37, 99, 235, 0.06)" : "var(--bg2)",
      border: isActive ? "2px solid var(--accent)" : "1px solid var(--border)",
      borderRadius: 12,
      cursor: "pointer",
      transition: "all 0.15s",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: childLock ? 18 : 15,
      fontWeight: 600,
      fontFamily: "inherit",
      // show the FULL title by wrapping (all devices), not "…"
      whiteSpace: "normal",
      overflowWrap: "anywhere"
    } }, !childLock && song.difficulty > 0 && /* @__PURE__ */ React.createElement("span", { style: { marginRight: 6, color: "var(--accent)", fontWeight: 700 } }, song.difficulty, "."), song.title || "Untitled Score", isActive && /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 10,
      background: "var(--accent)",
      color: "var(--text)",
      padding: "2px 6px",
      borderRadius: 4,
      marginLeft: 8,
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600
    } }, "CURRENT"), !childLock && song.published && /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 10,
      background: "var(--green)",
      color: "#fff",
      padding: "2px 6px",
      borderRadius: 4,
      marginLeft: 8,
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600
    } }, "PUBLISHED")), !childLock && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text2)", marginTop: 3 } }, song.composer ? song.composer + " \xB7 " : "", measureCount, " measures \xB7 ", noteCount, " notes \xB7 ", song.bpm || 120, " BPM"), !childLock && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--text2)", marginTop: 2, opacity: 0.7 } }, "Saved ", date.toLocaleDateString(), " at ", date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))), childLock && /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
      e.stopPropagation();
      toggleMySong(song.title);
    }, style: {
      padding: "6px 10px",
      background: "none",
      border: "none",
      fontSize: 24,
      cursor: "pointer",
      flexShrink: 0,
      marginLeft: 8
    } }, mySongs.includes(song.title) ? "\u2764\uFE0F" : "\u{1F90D}"), !childLock && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginLeft: 12, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
      e.stopPropagation();
      loadFromLibrary(song);
    }, style: {
      padding: "6px 12px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      color: "var(--text)",
      fontSize: 12,
      fontFamily: "inherit",
      cursor: "pointer"
    } }, "Open"), /* @__PURE__ */ React.createElement("button", { onClick: async (e) => {
      e.stopPropagation();
      var endpoint = song.published ? "/api/unpublish" : "/api/publish";
      try {
        var res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ title: song.title, folder: song.folder || "" })
        });
        if (res.ok) {
          if (song.title === title) {
            var nowPublished = !song.published;
            isPublishedRef.current = nowPublished;
            setIsPublished(nowPublished);
          }
          await refreshLibrary();
        } else if (res.status === 401) {
          setShowPinPrompt(true);
          setPinInput("");
          setPinError("");
        } else {
          alert("Failed to publish.");
        }
      } catch {
        alert("Connection error.");
      }
    }, style: {
      padding: "6px 10px",
      background: song.published ? "var(--green)" : "var(--bg3)",
      border: song.published ? "1px solid var(--green)" : "1px solid var(--border)",
      borderRadius: 6,
      color: song.published ? "#fff" : "var(--text)",
      fontSize: 12,
      fontFamily: "inherit",
      cursor: "pointer"
    } }, song.published ? "Unpublish" : "Publish"), /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
      e.stopPropagation();
      deleteFromLibrary(song);
    }, style: {
      padding: "6px 10px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      color: "var(--danger)",
      fontSize: 12,
      fontFamily: "inherit",
      cursor: "pointer"
    } }, "\u{1F5D1}\uFE0F")));
  })))), showNamePrompt && (() => {
    var nameTrim = nameInput.trim();
    var nameTaken = !!allProfiles[nameTrim];
    var canSubmit = nameTrim && !nameTaken && pwInput.length >= 4 && pwInput === pwConfirm && pwHint.trim();
    var submit = () => {
      if (canSubmit) createProfile(nameInput, colorInput, pwInput, pwHint);
    };
    var cancel = () => {
      setShowNamePrompt(false);
      setNameInput("");
      resetPwFields();
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 2e3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }, onClick: cancel }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      borderRadius: 16,
      border: "1px solid var(--border)",
      maxWidth: 320,
      padding: 24,
      textAlign: "center"
    }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, marginBottom: 12 } }, "\u{1F44B}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, marginBottom: 12, fontFamily: "inherit" } }, "Sign up"), isMobile && !isStandalone && /* @__PURE__ */ React.createElement("div", { style: {
      background: "#fef3c7",
      border: "1px solid #fbbf24",
      color: "#78350f",
      borderRadius: 10,
      padding: "10px 12px",
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 14,
      textAlign: "left",
      lineHeight: 1.45
    } }, "\u26A0\uFE0F ", /* @__PURE__ */ React.createElement("strong", null, "Wait \u2014 save your account first!"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 400, marginTop: 4 } }, "If you sign up here in the browser, your account ", /* @__PURE__ */ React.createElement("strong", null, "will be deleted"), " if you ever clear your browsing data, switch browsers, or move to a new phone."), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 400, marginTop: 6 } }, "To keep it safe: tap ", /* @__PURE__ */ React.createElement("strong", null, "Share"), " \u2192 ", /* @__PURE__ */ React.createElement("strong", null, "Add to Home Screen"), ", then sign up from the app icon. Your account will stick.")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: nameInput,
        onChange: (e) => setNameInput(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        autoFocus: true,
        placeholder: "Your name",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 18,
          textAlign: "center",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: nameTaken ? 4 : 12,
          boxSizing: "border-box"
        }
      }
    ), nameTaken && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--danger)", fontSize: 12, marginBottom: 8 } }, "Name already taken"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, marginBottom: 8, fontFamily: "inherit" } }, "Pick your color"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 } }, profileColors.map((c) => /* @__PURE__ */ React.createElement("div", { key: c, onClick: () => setColorInput(c), style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: c,
      cursor: "pointer",
      border: colorInput === c ? "3px solid #000" : "2px solid transparent",
      boxShadow: colorInput === c ? "0 0 0 2px #fff, 0 0 0 4px #000" : "none"
    } }))), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        value: pwInput,
        onChange: (e) => setPwInput(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        placeholder: "Password (min 4)",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 15,
          textAlign: "center",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 8,
          boxSizing: "border-box"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        value: pwConfirm,
        onChange: (e) => setPwConfirm(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        placeholder: "Confirm password",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 15,
          textAlign: "center",
          background: "var(--bg2)",
          border: `1px solid ${pwConfirm && pwInput !== pwConfirm ? "var(--danger)" : "var(--border)"}`,
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 8,
          boxSizing: "border-box"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: pwHint,
        onChange: (e) => setPwHint(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        placeholder: "Password hint",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 15,
          textAlign: "center",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 16,
          boxSizing: "border-box"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { onClick: cancel, style: {
      padding: "10px 16px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontFamily: "inherit",
      cursor: "pointer"
    } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { onClick: submit, disabled: !canSubmit, style: {
      padding: "10px 20px",
      background: canSubmit ? "var(--accent)" : "var(--bg3)",
      border: "none",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontWeight: 600,
      fontFamily: "inherit",
      cursor: canSubmit ? "pointer" : "not-allowed",
      opacity: canSubmit ? 1 : 0.5
    } }, "OK"))));
  })(), passwordModal && (() => {
    var target = allProfiles[passwordModal.profileName] || {};
    var isSet = passwordModal.type === "set";
    var isSwitch = passwordModal.type === "verify-switch";
    var title2 = isSet ? `Set password for ${passwordModal.profileName}` : isSwitch ? `Enter password for ${passwordModal.profileName}` : `Enter password to delete ${passwordModal.profileName}`;
    var canSubmit = isSet ? pwInput.length >= 4 && pwInput === pwConfirm && pwHint.trim() : pwInput.length >= 1;
    var submit = async () => {
      if (!canSubmit) return;
      if (isSet) {
        var passwordHash = await hashPassword(pwInput);
        setAllProfiles((prev) => {
          var next = { ...prev, [passwordModal.profileName]: { ...prev[passwordModal.profileName], passwordHash, hint: pwHint.trim() } };
          localStorage.setItem("profiles", JSON.stringify(next));
          return next;
        });
        closePwModal();
        return;
      }
      var attempt = await hashPassword(pwInput);
      if (attempt !== target.passwordHash) {
        if (!isSwitch) {
          var override = window.confirm(
            'Wrong password.\n\nIs this your own browser? If yes, you can force-delete this profile as the owner of this device.\n\nForce-delete "' + passwordModal.profileName + '"?'
          );
          if (!override) {
            setPwError("Wrong password");
            return;
          }
        } else {
          setPwError("Wrong password");
          return;
        }
      }
      if (isSwitch) {
        savePlayerName(passwordModal.profileName);
        setLibraryTab("mine");
      } else {
        setAllProfiles((prev) => {
          var next = { ...prev };
          delete next[passwordModal.profileName];
          localStorage.setItem("profiles", JSON.stringify(next));
          return next;
        });
        if (playerName === passwordModal.profileName) {
          savePlayerName("");
          setLibraryTab("all");
        }
      }
      closePwModal();
    };
    return /* @__PURE__ */ React.createElement("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 2100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }, onClick: closePwModal }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--bg)",
      borderRadius: 16,
      border: "1px solid var(--border)",
      maxWidth: 320,
      padding: 24,
      textAlign: "center"
    }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, marginBottom: 12 } }, "\u{1F512}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, marginBottom: 12, fontFamily: "inherit" } }, title2), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        value: pwInput,
        onChange: (e) => {
          setPwInput(e.target.value);
          setPwError("");
        },
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        autoFocus: true,
        placeholder: isSet ? "Password (min 4)" : "Password",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 16,
          textAlign: "center",
          background: "var(--bg2)",
          border: `1px solid ${pwError ? "var(--danger)" : "var(--border)"}`,
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 8,
          boxSizing: "border-box"
        }
      }
    ), isSet && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        value: pwConfirm,
        onChange: (e) => setPwConfirm(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        placeholder: "Confirm password",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 16,
          textAlign: "center",
          background: "var(--bg2)",
          border: `1px solid ${pwConfirm && pwInput !== pwConfirm ? "var(--danger)" : "var(--border)"}`,
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 8,
          boxSizing: "border-box"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: pwHint,
        onChange: (e) => setPwHint(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") submit();
          e.stopPropagation();
        },
        placeholder: "Password hint",
        style: {
          width: "100%",
          padding: "10px 14px",
          fontSize: 15,
          textAlign: "center",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          color: "var(--text)",
          fontFamily: "inherit",
          outline: "none",
          marginBottom: 8,
          boxSizing: "border-box"
        }
      }
    )), pwError && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--danger)", fontSize: 13, marginBottom: 8 } }, pwError), !isSet && target.hint && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 12 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setPwShowHint((s) => !s), style: {
      background: "transparent",
      border: "none",
      color: "var(--accent)",
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit",
      textDecoration: "underline"
    } }, pwShowHint ? "Hide hint" : "Show hint"), pwShowHint && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text2)", marginTop: 6 } }, "Hint: ", target.hint)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center", marginTop: 4 } }, /* @__PURE__ */ React.createElement("button", { onClick: closePwModal, style: {
      padding: "10px 16px",
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontFamily: "inherit",
      cursor: "pointer"
    } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { onClick: submit, disabled: !canSubmit, style: {
      padding: "10px 20px",
      background: canSubmit ? "var(--accent)" : "var(--bg3)",
      border: "none",
      borderRadius: 8,
      color: "var(--text)",
      fontSize: 14,
      fontWeight: 600,
      fontFamily: "inherit",
      cursor: canSubmit ? "pointer" : "not-allowed",
      opacity: canSubmit ? 1 : 0.5
    } }, "OK"))));
  })(), celebrateMsg && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    inset: 0,
    zIndex: 2500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: "clamp(56px, 12vw, 140px)",
    fontWeight: 900,
    fontFamily: "'Comic Neue', cursive",
    color: "#fff",
    textShadow: "0 0 20px rgba(255,255,255,0.8), 4px 4px 0 #dc2626, -4px -4px 0 #3b82f6, 4px -4px 0 #22c55e, -4px 4px 0 #a855f7, 6px 6px 30px rgba(0,0,0,0.35)",
    animation: "celebratePop 0.5s ease-out"
  } }, celebrateMsg), /* @__PURE__ */ React.createElement("style", null, `
            @keyframes celebratePop {
              0%   { transform: scale(0.2) rotate(-10deg); opacity: 0; }
              60%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
              100% { transform: scale(1) rotate(0deg); opacity: 1; }
            }
          `)), showPinPrompt && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 2e3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, onClick: () => setShowPinPrompt(false) }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    maxWidth: 300,
    padding: 24,
    textAlign: "center"
  }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, marginBottom: 12 } }, "\u{1F510}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, marginBottom: 16 } }, "Login to edit"), pinError && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--danger)", fontSize: 13, marginBottom: 8 } }, pinError), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "password",
      value: pinInput,
      onChange: (e) => {
        setPinInput(e.target.value);
        setPinError("");
      },
      onKeyDown: (e) => {
        if (e.key === "Enter") handlePinSubmit();
        e.stopPropagation();
      },
      autoFocus: true,
      placeholder: "Password",
      style: {
        width: "100%",
        padding: "10px 14px",
        fontSize: 18,
        textAlign: "center",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontFamily: "inherit",
        outline: "none",
        letterSpacing: 4,
        marginBottom: 16
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowPinPrompt(false), style: {
    padding: "10px 16px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { onClick: handlePinSubmit, style: {
    padding: "10px 20px",
    background: "var(--accent)",
    border: "none",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Login")))), /* @__PURE__ */ React.createElement(
    LibraryOverlay,
    {
      open: libraryOpen,
      isAdmin: !childLock,
      onClose: () => setLibraryOpen(false),
      onOpenSong: (title2) => {
        var song = (library || []).find((s) => (s.title || "").trim() === title2);
        if (song) {
          loadFromLibrary(song);
          setLibraryOpen(false);
          return;
        }
        (async () => {
          try {
            var ep = childLock ? "/api/published" : "/api/songs";
            var r = await fetch(ep, { credentials: "include" });
            var songs = await r.json();
            var match = (Array.isArray(songs) ? songs : []).find((s) => (s.title || "").trim() === title2);
            if (match) loadFromLibrary(match);
          } catch {
          }
          setLibraryOpen(false);
        })();
      }
    }
  ), showHomeScreenHint && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 2e3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, onClick: () => setShowHomeScreenHint(false) }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    maxWidth: 360,
    padding: 24,
    textAlign: "center"
  }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 48, marginBottom: 12 } }, "\u{1F4F1}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, marginBottom: 12 } }, "Full Screen Mode"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--text2)", marginBottom: 16, lineHeight: 1.5 } }, "For full screen mode, tap the ", /* @__PURE__ */ React.createElement("strong", null, "Share"), " button in your browser, then tap ", /* @__PURE__ */ React.createElement("strong", null, "Add to Home Screen"), ". Launch the app from the home screen icon to see it in full screen."), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowHomeScreenHint(false), style: {
    padding: "10px 20px",
    background: "var(--accent)",
    border: "none",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Got it"))), showSaveAs && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, onClick: () => setShowSaveAs(false) }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    width: "100%",
    maxWidth: 400,
    padding: 24,
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
  }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, marginBottom: 16 } }, "Save As"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text2)", marginBottom: 8 } }, "Enter a name for your score:"), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: saveAsName,
      onChange: (e) => setSaveAsName(e.target.value),
      onKeyDown: (e) => e.key === "Enter" && confirmSaveAs(),
      autoFocus: true,
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: 15,
        fontFamily: "inherit",
        outline: "none",
        marginBottom: 16
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text2)", marginBottom: 8 } }, "Folder:"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: saveAsFolder,
      onChange: (e) => setSaveAsFolder(e.target.value),
      style: {
        width: "100%",
        padding: "10px 14px",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        color: "var(--text)",
        fontSize: 15,
        fontFamily: "inherit",
        outline: "none",
        marginBottom: 16
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "(none \u2014 root)"),
    !isDrumsMode && /* @__PURE__ */ React.createElement("option", { value: "Michael Aaron Lessons Grade 1" }, "Michael Aaron Lessons Grade 1"),
    !isDrumsMode && /* @__PURE__ */ React.createElement("option", { value: "Michael Aaron Lessons Grade 2" }, "Michael Aaron Lessons Grade 2")
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowSaveAs(false), style: {
    padding: "10px 16px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { onClick: confirmSaveAs, style: {
    padding: "10px 20px",
    background: "var(--accent)",
    border: "none",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Save")))), showFolderBrowser && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, onClick: () => setShowFolderBrowser(false) }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--bg)",
    borderRadius: 16,
    border: "1px solid var(--border)",
    width: "100%",
    maxWidth: 500,
    maxHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    overflow: "hidden"
  }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "16px 20px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700 } }, "\u{1F4C1} Choose Save Folder"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowFolderBrowser(false), style: {
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    padding: "4px 10px",
    color: "var(--text)",
    fontSize: 13,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Cancel")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 20px",
    borderBottom: "1px solid var(--border)",
    background: "var(--bg2)",
    fontSize: 12,
    color: "var(--text2)",
    fontFamily: "monospace",
    wordBreak: "break-all"
  } }, browsePath), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "8px 12px" } }, browseParent && browseParent !== browsePath && /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: () => navigateTo(browseParent),
      style: {
        padding: "10px 12px",
        marginBottom: 4,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "var(--accent)",
        fontWeight: 600
      },
      onMouseOver: (e) => e.currentTarget.style.background = "var(--bg2)",
      onMouseOut: (e) => e.currentTarget.style.background = "transparent"
    },
    "\u2B06\uFE0F Parent folder"
  ), browseEntries.map((entry) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: entry.path,
      onClick: () => navigateTo(entry.path),
      style: {
        padding: "10px 12px",
        marginBottom: 2,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "var(--text)"
      },
      onMouseOver: (e) => e.currentTarget.style.background = "var(--bg2)",
      onMouseOut: (e) => e.currentTarget.style.background = "transparent"
    },
    "\u{1F4C1} ",
    entry.name
  )), browseEntries.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: 20, textAlign: "center", color: "var(--text2)", fontSize: 13 } }, "No subfolders here")), showNewFolder && /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 20px",
    borderTop: "1px solid var(--border)",
    display: "flex",
    gap: 8,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: newFolderName,
      onChange: (e) => setNewFolderName(e.target.value),
      onKeyDown: (e) => e.key === "Enter" && createFolder(),
      placeholder: "Folder name...",
      autoFocus: true,
      style: {
        flex: 1,
        padding: "8px 12px",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        color: "var(--text)",
        fontSize: 13,
        fontFamily: "inherit",
        outline: "none"
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: createFolder, style: {
    padding: "8px 14px",
    background: "var(--green)",
    border: "none",
    borderRadius: 6,
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Create"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setShowNewFolder(false);
    setNewFolderName("");
  }, style: {
    padding: "8px 10px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    color: "var(--text)",
    fontSize: 13,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Cancel")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 20px",
    borderTop: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setShowNewFolder(true), style: {
    padding: "10px 16px",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "+ New Folder"), /* @__PURE__ */ React.createElement("button", { onClick: selectFolder, style: {
    padding: "10px 20px",
    background: "var(--accent)",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer"
  } }, "Select This Folder")))), typeof window !== "undefined" && window.__RPM_READONLY__ === false && !childLock && /* @__PURE__ */ React.createElement(
    "a",
    {
      href: (() => {
        var h = window.location.hostname;
        var isLocal = /^(localhost|127\.0\.0\.1)$/.test(h) || h === "::1" || h === "[::1]" || /^192\.168\./.test(h) || /^10\./.test(h) || /^172\.(1[6-9]|2\d|3[01])\./.test(h) || /\.local$/i.test(h);
        return isLocal ? "https://lessons.localhost:8443/admin/students" : "https://lessons.readandplaymusic.app/admin/students";
      })(),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "See students' practice log (local lessons preview)",
      style: {
        position: "fixed",
        bottom: isMobile ? 12 : 16,
        right: isMobile ? 12 : 16,
        zIndex: 9999,
        background: "#3b82f6",
        color: "#fff",
        padding: isMobile ? "8px 12px" : "10px 16px",
        borderRadius: 999,
        fontSize: isMobile ? 13 : 14,
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 4px 14px rgba(59,130,246,0.4)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16 } }, "\u{1F465}"),
    " Students"
  ));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(MusicNotationEditor));
