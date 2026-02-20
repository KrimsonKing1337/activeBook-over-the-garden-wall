import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, P } from 'activeBook-core/components';

export const Page44 = () => {
  useAudio({
    id: 'page-44_Scott-Pilgrim-opening',
    page: 44,
    src: './assets/book_data/audios/music/Scott-Pilgrim-opening.mp3',
    loop: false,
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="до боли знакомые звуки." triggerType="author" mode="text">
      С этих звуков начинается мой любимый фильм &mdash; Скотт Пилигримм против всех.
      Не мог его не упомянуть в этой книге
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Вдруг он услышал какие-то {Comment}.
        Узнав в них начало своего любимого фильма, он поспешил на зов.
      </P>

      <P>
        Там был мини-кинотеатр.
        В котором был лишь один ряд и одно место.
        Оно было подписано «Егор».
      </P>

      <P>
        Рядом стоял стол с его любимым солёным попкорном и вкусной газировкой.
      </P>

      <P>
        Секунду Егор сомневался, но потом, пожав плечами,
        устроился поудобнее и стал в тысячный раз смотреть любимый фильм.
      </P>

      <P>
        Александр прекрасно знал, с чего начать.
      </P>
    </PageWrapper>
  );
};
