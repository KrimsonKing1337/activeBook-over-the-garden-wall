import { useEffect } from 'react';

import type { Interval } from 'activeBook-core/@types';

import { useVibration } from 'activeBook-core/hooks/effects/vibration';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P, WithModal } from 'activeBook-core/components';

let interval: Interval = null;

export const Page28 = () => {
  const { vibrationOn } = useVibration();

  useAudio({
    id: 'page-28_cosmos-impacts',
    page: 28.,
    src: './assets/book_data/audios/sounds/cosmos-impacts.mp3',
    type: 'bg',
    loop: true,
    playOnLoad: true,
    onPlay() {
      vibrationOn(300);

      interval = setInterval(() => {
        vibrationOn(300);
      }, 1102);
    },
  });

  useEffect(() => {
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const Comment1 = (
    <WithModal text="В космосе не было звуков," triggerType="author" mode="text">
      К слову, я долго не обращал внимания, что в космосе звуков нет и звуковой эффект не убирал.
      Но в итоге я выкрутился, чуть изменив текст
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="за ту сторону изгороди." triggerType="author" mode="text">
      Собственно, книгу я назвал в честь одноимённого мультфильма. Кстати, рекомендую к просмотру
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        {Comment1} поэтому голова сама воображала их.
        Каждый удар глухим эхом отзывался в голове.
      </P>

      <P>
        Наконец, стало появляться нечто новое.
        Правда, пока это фиксировалось исключительно приборами.
        Датчики засекли излучение видимого спектра.
      </P>

      <P>
        Похоже, что-то начинало получаться.
      </P>

      <P>
        Медленно, но верно, Егор пробивался {Comment2}
      </P>

      <P>
        Было удивительно, что такой способ вообще работал.
      </P>
    </PageWrapper>
  );
};
