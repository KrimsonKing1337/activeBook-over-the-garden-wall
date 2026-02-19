import { PageWrapper, P } from 'activeBook-core/components';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page32 = () => {
  useAudio({
    id: 'page-32_yes-I-go-with-you',
    page: 32,
    src: './assets/book_data/audios/sounds/yes-I-go-with-you.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <P>
        «Да, я пойду с тобой!» – пробормотал Егор сквозь сон.
      </P>

      <P>
        Он протянул руку...
      </P>
    </PageWrapper>
  );
};
