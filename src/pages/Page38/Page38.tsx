import { PageWrapper, P } from 'activeBook-core/components';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page38 = () => {
  useAudio({
    id: 'page-38_nervously-searching-for-the-medicine',
    page: 38,
    src: './assets/book_data/audios/sounds/nervously-searching-for-the-medicine.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <P>
        Егор думал, что он готов ко всему, но он дико перепугался.
      </P>

      <P>
        С выпученными глазами он ринулся искать второй шприц.
      </P>

      <P>
        Руки тряслись и никак не хотели подчиняться его воле, рассыпая всё вокруг.
      </P>
    </PageWrapper>
  );
};
