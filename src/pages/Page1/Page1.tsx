import { PageWrapper, H1, H2, P } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page1 = () => {
  useAudio({
    id: 'page-1_alarm-clock',
    page: 1,
    src: './assets/book_data/audios/sounds/alarm-clock.mp3',
    playOnLoad: true,
    stopBy: 5000,
  });

  return (
    <PageWrapper>
      <H1>
        Глава 1
      </H1>

      <H2>
        Важный день
      </H2>

      <P>
        Звенел будильник.
        Но он уже не спал, поэтому довольно быстро нажал на кнопку выключения.
      </P>

      <P>
        Впрочем, правильнее сказать — вообще не спал. Сегодня очень важный день.
        Для него и для всего человечества.
      </P>

      <P>
        Глубоко вздохнув и потерев глаза, он встал с кровати и проследовал в ванную.
      </P>
    </PageWrapper>
  );
};
