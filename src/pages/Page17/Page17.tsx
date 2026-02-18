import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P } from 'activeBook-core/components';

export const Page17 = () => {
  useAudio({
    id: 'page-17_woman-scream-glass-crash-furniture',
    page: 17,
    src: './assets/book_data/audios/sounds/woman-scream-glass-crash-furniture.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <P>
        Крики матери, попытки спрятаться в доме от обезумевшего отца.
        Звон бьющегося стекла, судорожные попытки вызвать полицию.
        Он прикрывал рот ладонью, чтобы не было слышно дыхания.
      </P>

      <P>
        Оставалось лишь затаиться на чердаке.
      </P>
    </PageWrapper>
  );
};
