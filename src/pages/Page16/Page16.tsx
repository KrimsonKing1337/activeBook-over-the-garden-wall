import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P } from 'activeBook-core/components';

export const Page16 = () => {
  useAudio({
    id: 'page-16_male-heavy-breathing',
    page: 16,
    src: './assets/book_data/audios/sounds/male-heavy-breathing.mp3',
    type: 'bg',
    loop: true,
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <P>
        Егор проснулся. Тяжело дыша, он сел и стал приходить в себя.
      </P>

      <P>
        Да-а, отдых прошёл не лучшим образом.
      </P>

      <P>
        Этот сон давно преследовал его.
      </P>

      <P>
        И он прекрасно помнит, что было дальше.
      </P>
    </PageWrapper>
  );
};
