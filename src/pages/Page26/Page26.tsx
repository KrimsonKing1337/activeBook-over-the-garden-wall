import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, P } from 'activeBook-core/components';

export const Page26 = () => {
  useAudio({
    id: 'page-26_coin-flipping',
    page: 26,
    src: './assets/book_data/audios/sounds/coin-flipping.mp3',
    type: 'bg',
    playOnLoad: true,
    loop: true,
  });

  const Comment = (
    <WithModal text="монетку" triggerType="author" mode="text">
      Тут я вспоминаю Двуликого из Бэтмена
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Сев на диван, он стал подбрасывать свою счастливую {Comment} &mdash; это помогало ему думать.
      </P>

      <P>
        Он пожалел, что на ракету не поставили вооружение.
        Он мог бы попытаться атаковать границу.
        Но раз его нет, то остаётся только банальный таран.
      </P>

      <P>
        Ну а что? Любую стену можно пробить, нужно лишь достаточно сильно ударить.
        Звучит очень глупо, но у него правда не было других идей.
      </P>
    </PageWrapper>
  );
};
