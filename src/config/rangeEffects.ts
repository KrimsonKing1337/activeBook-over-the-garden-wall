import type { RangeEffects } from 'activeBook-core/@types';

export const rangeEffects: RangeEffects = [
  {
    id: 'page-1-30_Manoa-Jumaira-Drive',
    type: 'audio',
    range: [
      {
        from: 1,
        to: 30,
      },
    ],
    options: {
      src: './assets/book_data/audios/music/Manoa-Jumaira-Drive.mp3',
      type: 'music',
      relativeVolume: 30,
      playOnLoad: true,
      loop: true,
    },
  },
  {
    id: 'page-33-45_Manoa-Jumaira-Drive',
    type: 'audio',
    range: [
      {
        from: 33,
        to: 45,
      },
    ],
    options: {
      src: './assets/book_data/audios/music/Manoa-Jumaira-Drive.mp3',
      type: 'music',
      playOnLoad: true,
      loop: true,
    },
  },
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
