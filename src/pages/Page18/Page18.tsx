import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P } from 'activeBook-core/components';
import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';

export const Page18 = () => {
  useAudio({
    id: 'page-18_police-come',
    page: 18,
    src: './assets/book_data/audios/sounds/police-come.mp3',
    playOnLoad: true,
  });

  useSideShadow({
    color: 'police',
    speed: 1000,
  });

  return (
    <PageWrapper>
      <P>
        Наконец, до ушей донёсся спасительный звук полицейских сирен.
      </P>

      <P>
        Полицейские стали окружать дом.
      </P>

      <P>
        Они сработали быстро, обошлось без смертей.
      </P>
    </PageWrapper>
  );
};
