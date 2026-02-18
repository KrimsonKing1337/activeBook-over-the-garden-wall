import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [
  {
    id: 'page-3-4_radio',
    type: 'audio',
    range: [{
      from: 3,
      to: 4,
    }],
    options: {
      src: './assets/book_data/audios/sounds/radio.mp3',
      type: 'bg',
      playOnLoad: true,
      loop: true,
    },
  },
];
