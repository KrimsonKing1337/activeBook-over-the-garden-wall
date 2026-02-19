import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, Img, P } from 'activeBook-core/components';

export const Page43 = () => {
  useAudio({
    id: 'page-43_cloud-steps',
    page: 43,
    src: './assets/book_data/audios/sounds/cloud-steps.mp3',
    type: 'bg',
    playOnLoad: true,
    loop: true,
  });

  const EasterEgg = (
    <WithModal
      text="Люди приветствовали его будто старого доброго друга."
      triggerType="egg"
      eggId="page-43"
    >
      <Img src="./assets/book_data/gifs/Efremov.gif" />
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Егор зашагал по облакам к воротам, которые величаво,
        но бесшумно распахнулись, обдавая его приятным лёгким ветерком.
      </P>

      <P>
        Вскоре он увидел большое количество зданий и людей.
        {EasterEgg}
      </P>

      <P>
        Озираясь по сторонам, он осторожно пошел дальше.
      </P>
    </PageWrapper>
  );
};
