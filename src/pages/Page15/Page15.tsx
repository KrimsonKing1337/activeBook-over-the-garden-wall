import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

import { PageWrapper, P } from 'activeBook-core/components';

export const Page15 = () => {
  const { vibrationOn } = useVibration();

  useAudio({
    id: 'page-15_shotgun-shot',
    page: 15,
    src: './assets/book_data/audios/sounds/shotgun-shot.mp3',
    playOnLoad: true,
    delay: 600,
    onPlay: () => {
      vibrationOn(250);
    },
  });

  return (
    <PageWrapper>
      <P>
        Послышался выстрел.
      </P>

      <P>
        Прямое попадание.
        Крови почему-то не было, но и пошевелиться Егор не мог.
        Его парализовало.
      </P>

      <P>
        Тем временем отец со злым и одновременно весёлым выражением лица приближался к Егору.
      </P>

      <P>
        Ближе, ещё ближе...
      </P>

      <P>
        Вот он уже протянул руку...
      </P>
    </PageWrapper>
  );
};
