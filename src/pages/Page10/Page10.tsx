import { useEffect } from 'react';

import type { Timer } from 'activeBook-core/@types';

import { PageWrapper, P } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

let timer: Timer = null;

export const Page10 = () => {
  const { vibrationOn } = useVibration();

  useAudio({
    id:'page-10_Gagarin-and-rocket-start',
    page: 10,
    src: './assets/book_data/audios/sounds/Gagarin-and-rocket-start.mp3',
    playOnLoad: true,
    onPlay() {
      timer = setTimeout(() => {
        vibrationOn(8380);
      }, 8627);
    },
  });

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <PageWrapper>
      <P>
        Вспомнился Гагарин и его знаменитое «Поехали».
      </P>

      <P>
        Ракета сорвалась с места и стала стремительно набирать скорость,
        оставляя после себя длинный белый шлейф и выжженную землю.
      </P>

      <P>
        Чувство тревоги отступило. Волноваться уже было поздно.
      </P>

      <P>
        Егора вдавливало в кресло с неимоверной силой.
      </P>

      <P>
        «Интересно, она смотрит?»
      </P>

      <P>
        Скорость всё нарастала, система готовилась к телепортации.
        Некоторые ошибочно называли это «прыжок в гиперпространство».
        На самом же деле это было больше похоже на телепортацию через червоточину.
      </P>
    </PageWrapper>
  );
};
