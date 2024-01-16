import { atom } from 'jotai';

export const playerAtom = atom({
  id: '',
  url: '',
  volume: 50,
  muted: false,
  duration: 0,
  currentTime: 0,
  buffered: 0,
  bufferedPercent: 0,
  isPlaying: false,
  isPaused: false,
  isEnded: false
});
