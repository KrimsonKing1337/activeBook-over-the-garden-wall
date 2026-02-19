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
  {
    id: 'page-31-32_promise-from-distance-days',
    type: 'audio',
    range: [
      {
        from: 31,
        to: 32,
      },
    ],
    options: {
      src: './assets/book_data/audios/music/Promise_From_Distant_Days.mp3',
      type: 'music',
      playOnLoad: true,
      loop: true,
    },
  },
];
